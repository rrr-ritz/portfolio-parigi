import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "contact | Pari Gill",
  description:
    "Get in touch with Pari Gill — product designer based in the US.",
};

export default function ContactPage() {
  return (
    <main id="main" className="relative bg-cream">
      {/* Desktop layout — mirrors Figma Contact frame (1514 wide, content area ~780 tall) */}
      <div className="relative mx-auto hidden w-full max-w-[1514px] lg:block lg:h-[780px]">
        {/* Starburst 1 — large, right of cluster */}
        <div className="pointer-events-none absolute left-[340px] top-[71px] h-[439px] w-[347px]">
          <Image
            src="/images/wip/starburst-1.svg"
            alt=""
            aria-hidden="true"
            fill
            className="object-contain"
          />
        </div>

        {/* Starburst 2 — bottom right of cluster */}
        <div className="pointer-events-none absolute left-[223px] top-[415.5px] h-[252.5px] w-[406px]">
          <Image
            src="/images/wip/starburst-2.svg"
            alt=""
            aria-hidden="true"
            fill
            className="object-contain"
          />
        </div>

        {/* Starburst 3 — left */}
        <div className="pointer-events-none absolute left-[58px] top-[253px] h-[238px] w-[281px]">
          <Image
            src="/images/wip/starburst-3.svg"
            alt=""
            aria-hidden="true"
            fill
            className="object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="absolute left-[514px] top-[211.5px] w-[808.26px] text-right font-sans font-black text-[51.975px] uppercase leading-[1.58] tracking-[0.01em] text-orange-bright">
          call me, maybe?
        </h1>

        {/* Contact info */}
        <div className="absolute left-[629.13px] top-[320.98px] flex w-[693.13px] flex-col items-end gap-0 text-right font-serif text-[28.361px] leading-[1.58] text-copper">
          <a
            href="mailto:pgill123@terpmail.umd.edu"
            className="transition-colors hover:text-orange-bright"
          >
            pgill123 [AT] terpmail.umd.edu
          </a>
          <a
            href="https://www.linkedin.com/in/pari-gill"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-orange-bright"
          >
            linkedin.com/in/pari-gill
          </a>
        </div>
      </div>

      {/* Mobile / tablet layout — stacked */}
      <div className="relative flex min-h-[calc(100vh-220px)] flex-col items-center justify-center gap-8 overflow-hidden px-6 py-20 lg:hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-80">
          <Image
            src="/images/wip/starburst-1.svg"
            alt=""
            aria-hidden="true"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="relative text-center font-sans font-black text-[36px] uppercase leading-[1.2] tracking-[0.01em] text-orange-bright md:text-[48px]">
          call me, maybe?
        </h1>
        <div className="relative flex flex-col items-center gap-2 text-center font-serif text-[18px] leading-[1.4] text-copper md:text-[22px]">
          <a
            href="mailto:pgill123@terpmail.umd.edu"
            className="transition-colors hover:text-orange-bright"
          >
            pgill123 [AT] terpmail.umd.edu
          </a>
          <a
            href="https://www.linkedin.com/in/pari-gill"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-orange-bright"
          >
            linkedin.com/in/pari-gill
          </a>
        </div>
      </div>
    </main>
  );
}
