import Image from "next/image";
import Link from "next/link";

export function WorkInProgress() {
  return (
    <main id="main" className="relative bg-cream">
      {/* Desktop layout — mirrors Figma WIP frame (1514 wide, content area ~780 tall) */}
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
        <h1
          className="absolute left-[494px] top-[233px] w-[688px] text-center font-sans font-black text-[44.242px] uppercase leading-[1.58] tracking-[0.01em] text-orange-bright"
        >
          yikes! this page is still a work in progress.
        </h1>

        {/* Contact me button */}
        <Link
          href="/contact"
          className="absolute left-[1269px] top-[670.6px] flex h-[65.4px] w-[148px] items-center justify-center gap-2 rounded-[32.698px] bg-orange-bright text-cream transition-colors hover:bg-orange"
        >
          <span className="font-serif text-[22.935px] leading-none">
            contact me
          </span>
          <svg
            width="22"
            height="14"
            viewBox="0 0 22 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 7H20M20 7L14 1M20 7L14 13"
              stroke="#f7f3f1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Mobile / tablet layout — stacked, decorative starburst behind headline */}
      <div className="relative flex min-h-[calc(100vh-220px)] flex-col items-center justify-center gap-10 overflow-hidden px-6 py-20 lg:hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 opacity-80">
          <Image
            src="/images/wip/starburst-1.svg"
            alt=""
            aria-hidden="true"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="relative max-w-[520px] text-center font-sans font-black text-[28px] uppercase leading-[1.25] tracking-[0.01em] text-orange-bright md:text-[36px]">
          yikes! this page is still a work in progress.
        </h1>
        <Link
          href="/contact"
          className="relative flex h-[60px] items-center justify-center gap-2 rounded-full bg-orange-bright px-7 text-cream transition-colors hover:bg-orange"
        >
          <span className="font-serif text-[20px] leading-none">
            contact me
          </span>
          <svg
            width="20"
            height="12"
            viewBox="0 0 22 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 7H20M20 7L14 1M20 7L14 13"
              stroke="#f7f3f1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
