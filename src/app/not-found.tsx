import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "not found | Pari Gill",
  description: "This page took a wrong turn.",
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[calc(100vh-220px)] items-center justify-center overflow-hidden bg-cream px-6 py-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-70">
        <Image
          src="/images/wip/starburst-2.svg"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative flex flex-col items-center gap-6 text-center">
        <h1 className="font-sans font-black text-[72px] uppercase leading-[1] tracking-[0.01em] text-orange-bright md:text-[120px]">
          404
        </h1>
        <p className="font-serif text-[22px] leading-[1.3] text-espresso-muted md:text-[28px]">
          this page took a wrong turn.
        </p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center rounded-full border border-espresso px-6 py-2.5 font-serif text-[16px] text-espresso transition-colors hover:bg-espresso hover:text-cream md:text-[18px]"
        >
          ← back home
        </Link>
      </div>
    </main>
  );
}
