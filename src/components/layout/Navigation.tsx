"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NavLink = { label: string; href: string };

const LINKS: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Miscellany", href: "/miscellany" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,box-shadow] duration-300",
        scrolled
          ? "bg-cream/80 backdrop-blur-md shadow-[0_1px_0_rgba(56,38,23,0.06)]"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1514px] items-center justify-between px-5 py-4 md:px-[calc(18/1514*100%)] md:py-6"
      >
        <Link
          href="/"
          aria-label="Pari Gill — home"
          className="group relative inline-flex items-center"
        >
          <span className="relative inline-block font-display text-2xl leading-none tracking-tight text-espresso md:text-[28px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[1.75em] top-1/2 -z-0 h-[0.9em] w-[2.15em] -translate-y-1/2 rounded-full bg-orange-bright/70 md:bg-orange/70"
            />
            <span className="relative z-10">Pari Gill</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative inline-block py-1 font-serif text-lg text-espresso"
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                <span>{l.label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-espresso transition-transform duration-300",
                    isActive(l.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-11 w-11 items-center justify-center md:hidden"
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
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              )}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
            >
              <Link
                href={l.href}
                className="font-serif text-3xl text-espresso"
                aria-current={isActive(l.href) ? "page" : undefined}
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
