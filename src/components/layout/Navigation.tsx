"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NavLink = { label: string; href: string; external?: boolean };

const LINKS: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/Pari_Gill_Resume.pdf", external: true },
  { label: "Miscellany", href: "/miscellany" },
];

// Ellipse (Figma Ellipse 14) sits over the banner wordmark at Figma coords
// x=186,y=54,w=127,h=34 — relative to the banner at (18,22,1476×69):
//   left = (186-18)/1476 = 11.38%
//   top  = (54-22)/69    = 46.38%  (top-of-box)
//   w    = 127/1476      =  8.60%
//   h    = 34/69         = 49.28%
const ELLIPSE_LEFT = "11.38%";
const ELLIPSE_TOP = "46.38%";
const ELLIPSE_WIDTH = "8.60%";
const ELLIPSE_HEIGHT = "49.28%";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="relative z-40 bg-cream" aria-label="Site header">
      {/* ───────── Mobile (< md) ───────── */}
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1514px] items-center justify-between px-5 py-4 md:hidden"
      >
        <Link
          href="/"
          aria-label="Pari Gill — home"
          className="relative inline-block font-display text-[32px] uppercase leading-none tracking-[-0.02em] text-espresso"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[0.28em] top-1/2 -z-0 h-[0.7em] w-[0.85em] -translate-y-1/2 rounded-full bg-orange-bright"
          />
          <span className="relative z-10">Pari Gill</span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-11 w-11 items-center justify-center"
        >
          <span className="sr-only">Menu</span>
          <span
            aria-hidden="true"
            className={cn(
              "absolute h-0.5 w-6 bg-espresso transition-transform duration-300",
              open ? "rotate-45" : "-translate-y-[6px]",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute h-0.5 w-6 bg-espresso transition-opacity duration-300",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "absolute h-0.5 w-6 bg-espresso transition-transform duration-300",
              open ? "-rotate-45" : "translate-y-[6px]",
            )}
          />
        </button>
      </nav>

      {/* ───────── Desktop (md+) ───────── */}
      <div className="mx-auto hidden max-w-[1514px] px-[18px] md:block md:pt-[22px]">
        {/* Row 1: full-width wordmark banner with orange ellipse accent */}
        <Link
          href="/"
          aria-label="Pari Gill — home"
          className="relative block w-full"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-full bg-orange"
            style={{
              left: ELLIPSE_LEFT,
              width: ELLIPSE_WIDTH,
              height: ELLIPSE_HEIGHT,
              // Use the "top" value instead of 50% if we want to match Figma
              // more strictly — the Figma ellipse center ≈ 49px from top of
              // a 69px banner, which is 71% from top (not 50%). Re-anchor:
              top: `calc(${ELLIPSE_TOP} + ${ELLIPSE_HEIGHT} / 2)`,
            }}
          />
          <Image
            src="/images/landing/logo-pari-gill.svg"
            alt="Pari Gill"
            width={1477}
            height={70}
            priority
            className="relative z-10 block h-auto w-full"
          />
        </Link>

        {/* Row 2: primary nav links, right-aligned */}
        <nav
          aria-label="Primary"
          className="flex justify-end pb-6 pt-[calc(10/1514*100%)]"
        >
          <ul className="flex items-center gap-10">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group relative inline-block py-1 font-display text-[16px] uppercase tracking-[0.12em] text-orange-bright lg:text-[18px] xl:text-[21px]"
                  aria-current={isActive(l.href) ? "page" : undefined}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span>{l.label}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-orange-bright transition-transform duration-300",
                      isActive(l.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ───────── Mobile menu overlay ───────── */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 top-0 z-30 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-cream transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <ul
          className={cn(
            "relative mt-24 flex flex-col items-center gap-8 px-6 text-center transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        >
          {LINKS.map((l, i) => (
            <li
              key={l.href}
              className={cn(
                "transition-[opacity,transform] duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
            >
              <Link
                href={l.href}
                className="font-display text-3xl uppercase tracking-[0.12em] text-orange-bright"
                aria-current={isActive(l.href) ? "page" : undefined}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
