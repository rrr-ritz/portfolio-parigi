@AGENTS.md

# CLAUDE.md

## Project
Pari Gill's portfolio site — parigill.com

## Stack
- Next.js 16 (App Router) + TypeScript + Turbopack
- Tailwind CSS v4 (CSS-first `@theme` in `src/app/globals.css`, no `tailwind.config.ts`)
- GSAP + `@gsap/react` + Lenis
- Deployed on Vercel (preview URL only for now)

## Key Files
- `PORTFOLIO_SPEC.md` — Master spec (single source of truth)
- `src/app/globals.css` — Design tokens via `@theme`, reduced-motion, focus styles
- `src/app/layout.tsx` — Fonts (Outfit, Archivo Black), LenisProvider
- `src/components/layout/LenisProvider.tsx` — Smooth scroll wrapper
- `src/components/ui/AnimatedSection.tsx` — Reusable scroll-reveal wrapper
- `src/lib/animations.ts` — GSAP presets + ScrollTrigger registration
- `src/lib/utils.ts` — `cn()` helper, `prefersReducedMotion()`
- `scripts/export-figma-images.ts` — Figma REST image batch exporter

## Figma
- Official Figma MCP server is installed; tools load on session start
- File: https://www.figma.com/design/CCcfvcQTstKIz6v3UAYyZN/Portfolio--Copy- (duplicated to Ritvik's Education-tier team to unblock quota + MCP access; Pari's original is `in5EBObGnwpPthIKWmpRhu`)
- File key: `CCcfvcQTstKIz6v3UAYyZN`
- "Final" is the canvas with all production frames
- ALWAYS screenshot-compare your implementation against Figma
- Query section-by-section, not entire pages (render timeouts on large frames)
- `$FIGMA_PAT` in `.env.local` powers the REST fallback

## Design Tokens (extracted from Figma — April 2026)

Fonts: Outfit (sans, weights 400/700/900), Archivo Black (display), Times New Roman (serif).

Colors:
| Name | Hex | Usage |
|---|---|---|
| cream | `#f7f3f1` | Background (dominant) |
| espresso | `#382617` | Primary text |
| espresso-dark | `#26190e` | Deep text / dark bg |
| espresso-darker | `#1e130a` | Near-black |
| espresso-muted | `#4d3d30` | Secondary text |
| copper | `#7b3e0a` | Deep accent |
| orange | `#d56305` | Primary accent / buttons |
| orange-bright | `#e36600` | Accent-strong, focus ring |
| green-accent | `#53d86a` | Status/highlight pop |
| ink | `#000000` | True black |
| paper | `#ffffff` | True white |

## Design Principles
- Pixel-faithful to Figma — never improvise visual design
- Animations: polished but restrained (see PORTFOLIO_SPEC.md Section 9)
- Mobile-first responsive design
- Accessibility first (WCAG 2.2 AA)

## DO NOT
- Use Inter/Roboto/Open Sans (use Outfit + Archivo Black + Times New Roman)
- Use purple gradients or "AI slop" aesthetics
- Install UI libraries, Framer Motion, or CSS-in-JS
- Skip screenshot comparison after implementing any section
- Connect custom domain (use Vercel preview URL)
- Reference AI, Claude, or AI authorship in commits, comments, or code

## Commit Convention
feat: / fix: / chore: / style: — one concise line, no AI references
