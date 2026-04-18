"use client";

import Link from "next/link";
import { APPLENJ_SECTIONS } from "./sectionMap";

type Props = {
  variant?: "static" | "sticky";
};

export function SectionRail({ variant = "static" }: Props) {
  const wrapperClass =
    variant === "sticky"
      ? "hidden lg:block lg:sticky lg:top-[120px] lg:self-start lg:w-[260px] lg:flex-none"
      : "relative w-full";

  return (
    <nav aria-label="Case study sections" className={wrapperClass}>
      <ol className="relative flex flex-col gap-[76px]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[21px] top-[43px] bottom-[43px] w-px bg-espresso-dark/40"
        />
        {APPLENJ_SECTIONS.map((s) => (
          <li key={s.id} className="relative flex items-center gap-5">
            <Link
              href={`#${s.id}`}
              className="group flex items-center gap-5 focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className="inline-flex size-[43px] flex-none items-center justify-center rounded-full bg-orange-bright font-sans text-[32px] font-bold leading-none text-cream transition-transform group-hover:scale-105"
              >
                {s.index}
              </span>
              <span className="font-serif text-[20px] leading-[1.1] text-ink whitespace-pre-wrap">
                {s.label}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
