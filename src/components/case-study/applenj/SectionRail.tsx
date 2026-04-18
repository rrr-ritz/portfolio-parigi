"use client";

import Link from "next/link";
import { APPLENJ_SECTIONS } from "./sectionMap";

type Props = {
  index: number;
  extendLine?: boolean;
};

export function SectionAnchor({ index, extendLine = true }: Props) {
  const section = APPLENJ_SECTIONS[index];
  if (!section) return null;

  return (
    <div className="relative flex-none overflow-visible lg:w-[122px]">
      {extendLine && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[21px] top-[43px] -bottom-[120px] w-px bg-espresso-dark/40 lg:-bottom-[240px]"
        />
      )}
      <Link
        href={`#${section.id}`}
        className="group relative z-10 flex items-center gap-5 focus-visible:outline-none"
      >
        <span
          aria-hidden="true"
          className="inline-flex size-[43px] flex-none items-center justify-center rounded-full bg-orange-bright font-sans text-[32px] font-bold leading-none text-cream transition-transform group-hover:scale-105"
        >
          {section.index}
        </span>
        <span className="font-serif text-[20px] leading-[1.1] text-ink whitespace-pre-wrap">
          {section.label}
        </span>
      </Link>
    </div>
  );
}
