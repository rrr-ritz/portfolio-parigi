#!/usr/bin/env tsx
/**
 * Figma image export.
 *
 * Walks the Portfolio Figma file, collects every node that has image content
 * (raster fills, exportSettings-marked frames, or named vector/logo layers),
 * resolves each to a CDN URL via the Figma REST API, downloads at 2x, and
 * saves under public/images/<case-study>/<kebab-name>.<ext>.
 *
 * Run: FIGMA_PAT=... npx tsx scripts/export-figma-images.ts
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const FILE_KEY = "in5EBObGnwpPthIKWmpRhu";
const PAT = process.env.FIGMA_PAT;
const OUT_DIR = join(process.cwd(), "public", "images");
const BATCH = 10; // ids per /v1/images render call; Figma render is slow on large frames

if (!PAT) {
  console.error("FIGMA_PAT not set. export FIGMA_PAT=... or put it in .env.local and source it.");
  process.exit(1);
}

type RGBA = { r: number; g: number; b: number; a: number };
type Fill = { type: string; imageRef?: string; color?: RGBA };
type ExportSetting = { format: "PNG" | "SVG" | "JPG" | "PDF"; constraint: { type: string; value: number } };
type Node = {
  id: string;
  name: string;
  type: string;
  fills?: Fill[];
  exportSettings?: ExportSetting[];
  children?: Node[];
  absoluteBoundingBox?: { x: number; y: number; width: number; height: number };
};

type Candidate = {
  node: Node;
  reason: "exportSettings" | "imageFill" | "logoLike" | "illustration";
  studyBucket: string;
  parentFrameName: string;
  format: "png" | "svg";
};

async function figma<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { "X-Figma-Token": PAT! } });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma ${url} → ${res.status} ${body.slice(0, 200)}`);
  }
  return (await res.json()) as T;
}

function kebab(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[^\x00-\x7F]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 80) || "untitled";
}

function bucketFromFrameName(name: string): string {
  const n = name.toUpperCase();
  if (n.includes("APPLENJ") || n.includes("APPLE NJ")) return "applenj";
  if (n.includes("PITS") || n.includes("PRINCETON IT")) return "pits";
  if (n.includes("HUNGIE")) return "hungie";
  if (n.includes("NSCC") || n.includes("CHILDREN") || n.includes("CANCER")) return "nscc";
  if (n.includes("MISCELLANY")) return "miscellany";
  if (n.includes("CONTACT")) return "contact";
  if (n === "HOME" || n === "WIP") return "landing";
  return "shared";
}

function isLogoLike(name: string): boolean {
  return /\b(logo|mark|wordmark)\b/i.test(name);
}

function looksLikeHeadshot(name: string): boolean {
  return /\b(pari|headshot|portrait|avatar|profile)\b/i.test(name);
}

function hasImageFill(node: Node): boolean {
  return !!node.fills?.some((f) => f.type === "IMAGE" && !!f.imageRef);
}

function hasExplicitExport(node: Node): boolean {
  return !!node.exportSettings && node.exportSettings.length > 0;
}

function exportFormat(node: Node): "png" | "svg" {
  const explicit = node.exportSettings?.[0]?.format;
  if (explicit === "SVG") return "svg";
  if (explicit === "PNG" || explicit === "JPG") return "png";
  if (node.type === "VECTOR" || node.type === "BOOLEAN_OPERATION" || isLogoLike(node.name)) return "svg";
  return "png";
}

function walk(
  node: Node,
  topFrameName: string,
  out: Candidate[],
  depth = 0,
): void {
  const frameName = node.type === "FRAME" && depth === 1 ? node.name : topFrameName;
  const bucket = bucketFromFrameName(topFrameName || node.name);

  if (hasExplicitExport(node)) {
    out.push({
      node,
      reason: "exportSettings",
      studyBucket: bucket,
      parentFrameName: frameName,
      format: exportFormat(node),
    });
  } else if (hasImageFill(node) && node.type !== "FRAME") {
    out.push({
      node,
      reason: looksLikeHeadshot(node.name) ? "illustration" : "imageFill",
      studyBucket: looksLikeHeadshot(node.name) ? "shared" : bucket,
      parentFrameName: frameName,
      format: "png",
    });
  } else if (isLogoLike(node.name) && (node.type === "FRAME" || node.type === "GROUP" || node.type === "VECTOR" || node.type === "BOOLEAN_OPERATION")) {
    out.push({
      node,
      reason: "logoLike",
      studyBucket: bucket,
      parentFrameName: frameName,
      format: "svg",
    });
  }

  for (const c of node.children ?? []) walk(c, frameName || topFrameName, out, depth + 1);
}

function dedupeByIdKeepFirst<T extends { node: Node }>(list: T[]): T[] {
  const seen = new Set<string>();
  const out: T[] = [];
  for (const c of list) {
    if (seen.has(c.node.id)) continue;
    seen.add(c.node.id);
    out.push(c);
  }
  return out;
}

async function renderOne(
  ids: string[],
  format: "png" | "svg",
  scale: number,
): Promise<Record<string, string | null>> {
  const qs = new URLSearchParams({
    ids: ids.join(","),
    format,
    ...(format === "png" ? { scale: String(scale) } : {}),
  });
  const url = `https://api.figma.com/v1/images/${FILE_KEY}?${qs}`;
  const res = await figma<{ images: Record<string, string | null>; err?: string | null }>(url);
  if (res.err) console.warn(`[render ${format} n=${ids.length}] ${res.err}`);
  return res.images;
}

async function chunkedRender(
  ids: string[],
  format: "png" | "svg",
  scale: number,
): Promise<Record<string, string | null>> {
  const map: Record<string, string | null> = {};
  for (let i = 0; i < ids.length; i += BATCH) {
    const slice = ids.slice(i, i + BATCH);
    try {
      Object.assign(map, await renderOne(slice, format, scale));
    } catch (e) {
      // timeout or other; retry each id solo with degraded params
      const err = String(e);
      const isTimeout = err.includes("timeout") || err.includes("400");
      console.warn(`[render ${format}] batch failed (${err.slice(0, 80)}); retrying ${slice.length} solo${isTimeout ? " at scale 1" : ""}`);
      for (const id of slice) {
        try {
          Object.assign(map, await renderOne([id], format, isTimeout && format === "png" ? 1 : scale));
        } catch (e2) {
          console.warn(`[render ${format}] skipped ${id}: ${String(e2).slice(0, 80)}`);
          map[id] = null;
        }
      }
    }
  }
  return map;
}

async function downloadTo(url: string, path: string): Promise<number> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, buf);
  return buf.byteLength;
}

async function main() {
  console.log("[figma] fetching full document tree...");
  const file = await figma<{ document: Node }>(
    `https://api.figma.com/v1/files/${FILE_KEY}`,
  );
  console.log("[figma] fetching imageRef → S3 map (for photo fills)...");
  const imageFills = await figma<{ meta: { images: Record<string, string> } }>(
    `https://api.figma.com/v1/files/${FILE_KEY}/images`,
  );
  const imageRefUrl = imageFills.meta.images;

  const finalPage = file.document.children?.find((c) => c.name === "Final");
  if (!finalPage) throw new Error('Could not locate "Final" canvas in file.');

  const candidates: Candidate[] = [];
  for (const topFrame of finalPage.children ?? []) {
    walk(topFrame, topFrame.name, candidates, 1);
  }

  const unique = dedupeByIdKeepFirst(candidates);
  console.log(`[figma] ${unique.length} candidate nodes across ${new Set(unique.map((c) => c.studyBucket)).size} buckets`);

  const byFormat: Record<"png" | "svg", Candidate[]> = { png: [], svg: [] };
  for (const c of unique) byFormat[c.format].push(c);

  const urlMap: Record<string, string | null> = {};

  if (byFormat.png.length) {
    console.log(`[figma] rendering ${byFormat.png.length} PNGs @ 2x...`);
    Object.assign(urlMap, await chunkedRender(byFormat.png.map((c) => c.node.id), "png", 2));
  }
  if (byFormat.svg.length) {
    console.log(`[figma] rendering ${byFormat.svg.length} SVGs...`);
    Object.assign(urlMap, await chunkedRender(byFormat.svg.map((c) => c.node.id), "svg", 1));
  }

  const nameCount = new Map<string, number>();
  const results = {
    exported: 0,
    skipped_no_url: [] as string[],
    failed: [] as { id: string; name: string; error: string }[],
    bytes: 0,
  };

  for (const c of unique) {
    let url: string | null = urlMap[c.node.id] ?? null;
    // Fallback for IMAGE fills: Figma's render service returns null for many
    // trivial photo wrappers. Pull the raw S3 URL directly from the imageRef.
    if (!url && c.reason === "imageFill") {
      const imgFill = c.node.fills?.find((f) => f.type === "IMAGE" && f.imageRef);
      const ref = imgFill?.imageRef;
      if (ref && imageRefUrl[ref]) {
        url = imageRefUrl[ref];
        c.format = "png"; // stored as the original upload
      }
    }
    if (!url) {
      results.skipped_no_url.push(`${c.node.id} ${c.node.name}`);
      continue;
    }
    const base = kebab(c.node.name || c.node.id);
    const key = `${c.studyBucket}/${base}`;
    const n = nameCount.get(key) ?? 0;
    nameCount.set(key, n + 1);
    const suffix = n === 0 ? "" : `-${n + 1}`;
    const filename = `${base}${suffix}.${c.format}`;
    const outPath = join(OUT_DIR, c.studyBucket, filename);
    try {
      const bytes = await downloadTo(url, outPath);
      results.exported += 1;
      results.bytes += bytes;
      if (results.exported % 10 === 0) console.log(`[figma] ...${results.exported} exported`);
    } catch (e) {
      results.failed.push({ id: c.node.id, name: c.node.name, error: String(e) });
    }
  }

  const bucketCounts = new Map<string, number>();
  for (const c of unique) bucketCounts.set(c.studyBucket, (bucketCounts.get(c.studyBucket) ?? 0) + 1);

  console.log("\n=== EXPORT SUMMARY ===");
  console.log(`exported: ${results.exported}`);
  console.log(`skipped (no URL): ${results.skipped_no_url.length}`);
  console.log(`failed: ${results.failed.length}`);
  console.log(`total bytes: ${(results.bytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`\nby bucket:`);
  for (const [b, n] of [...bucketCounts.entries()].sort()) {
    console.log(`  ${b.padEnd(10)} ${n}`);
  }
  if (results.skipped_no_url.length) {
    console.log(`\nSKIPPED (Figma returned null URL — likely empty/clipped nodes):`);
    for (const s of results.skipped_no_url.slice(0, 20)) console.log(`  - ${s}`);
    if (results.skipped_no_url.length > 20) console.log(`  ...and ${results.skipped_no_url.length - 20} more`);
  }
  if (results.failed.length) {
    console.log(`\nFAILED (hand-export from Figma):`);
    for (const f of results.failed) console.log(`  - ${f.id} "${f.name}": ${f.error}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
