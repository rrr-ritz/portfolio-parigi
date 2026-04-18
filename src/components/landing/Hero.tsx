"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations";

/**
 * Landing hero. Mirrors Figma frame 3083:791 (hero spans y=0..918 of a
 * 1514-wide canvas). Desktop (≥lg) uses an aspect-locked container with
 * absolute positioning to match the design; below lg we stack vertically.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      gsap.from(root.querySelectorAll("[data-hero-reveal]"), {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.3,
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      aria-label="Pari Gill — intro"
      className="relative isolate bg-cream"
    >
      <div className="relative mx-auto w-full max-w-[1514px] px-5 pt-8 pb-16 md:pt-6 md:pb-24 xl:aspect-[1514/786] xl:px-0 xl:pb-0 xl:pt-0">
        {/* Decorative SVG vectors — desktop only */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden xl:block"
        >
          <Image
            src="/images/landing/hero-vector-7.svg"
            alt=""
            width={281}
            height={238}
            className="absolute h-auto"
            style={{ top: "30.66%", left: "3.83%", width: "18.56%" }}
          />
          <Image
            src="/images/landing/hero-vector-5.svg"
            alt=""
            width={347}
            height={439}
            className="absolute h-auto"
            style={{ top: "7.51%", left: "22.46%", width: "22.92%" }}
          />
          <Image
            src="/images/landing/hero-vector-6.svg"
            alt=""
            width={406}
            height={247}
            className="absolute h-auto"
            style={{ top: "52.04%", left: "14.73%", width: "26.82%" }}
          />
          <Image
            src="/images/landing/hero-vector-8.svg"
            alt=""
            width={54}
            height={213}
            className="absolute h-auto"
            style={{ top: "33.84%", left: "86.95%", width: "3.53%" }}
          />
        </div>

        {/* Headshot */}
        <figure
          data-hero-reveal
          className="relative z-10 mx-auto aspect-[283/364] w-[240px] overflow-hidden md:w-[283px] xl:absolute xl:mx-0 xl:left-[22.85%] xl:top-[33.33%] xl:w-[18.69%]"
        >
          <Image
            src="/images/landing/7323e5f6-1dc1-4c9d-8901-7ac38c0b57d4-1-105-c-1.png"
            alt="Pari Gill"
            fill
            sizes="(max-width: 1023px) 283px, 19vw"
            className="object-cover"
            priority
          />
        </figure>

        {/* Bio text */}
        <div
          data-hero-reveal
          className="relative z-10 mx-auto mt-10 max-w-md text-center font-serif text-copper md:mt-12 md:max-w-lg md:text-lg xl:absolute xl:mx-0 xl:mt-0 xl:max-w-none xl:text-right xl:right-[11.69%] xl:top-[45.10%] xl:w-[38.97%]"
        >
          <p className="leading-[1.58] text-base md:text-[22px] xl:text-[24.18px]">
            i like adventures.
          </p>
          <p className="leading-[1.58] text-base md:text-[22px] xl:text-[24.18px]">
            i like toasty candles, hazelnut coffee, and hiking.
          </p>
          <p className="mt-2 font-bold leading-[1.58] text-lg md:text-[28px] xl:text-[31px]">
            also i am computer science student at umd.
          </p>
          <p className="leading-[1.58] text-lg md:text-[28px] xl:text-[31px]">
            enjoy my portfolio. i like designing.
          </p>
        </div>

        {/* "contact me" CTA — intentionally smushed pill per Figma design */}
        <Link
          href="/contact"
          data-hero-reveal
          aria-label="Contact Pari"
          className="group relative z-10 mx-auto mt-10 block rounded-full bg-orange-bright transition-transform duration-300 hover:-translate-y-0.5 md:mt-12 xl:absolute xl:mx-0 xl:mt-0 xl:left-[83.82%] xl:top-[86.10%]"
          style={{
            // Figma: 148×65.4 at 1514-wide frame → 9.77% × ~7.12%
            // Tight pill; text will wrap to two lines.
            width: "148px",
            height: "65.4px",
          }}
        >
          <span
            className="absolute font-serif text-cream"
            style={{
              left: "18.25%", // 27/148
              top: "16.8%", // 11/65.4
              width: "44.95%", // 66.54/148
              fontSize: "22.9px",
              lineHeight: "0.82",
            }}
          >
            contact me
          </span>

          {/* Hand-drawn arrow, 3 SVG fragments (shaft + two tip lines) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute transition-transform duration-300 group-hover:translate-x-0.5"
            style={{
              // Shaft (cta-arrow-1): 62×3 at (1335.54-1269, 827.32-790.6) = (66.54, 36.72)
              left: `${(66.54 / 148) * 100}%`,
              top: `${(36.72 / 65.4) * 100}%`,
              width: `${(62 / 148) * 100}%`,
              height: `${(3 / 65.4) * 100}%`,
            }}
          >
            <Image
              src="/images/landing/cta-arrow-1.svg"
              alt=""
              width={64}
              height={3}
              className="h-full w-full"
            />
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              // Arrow tip upper (cta-arrow-3, 18×17): at (1382.58-1269, 815.84-790.6) = (113.58, 25.24)
              left: `${(113.58 / 148) * 100}%`,
              top: `${(25.24 / 65.4) * 100}%`,
              width: `${(18 / 148) * 100}%`,
              height: `${(17 / 65.4) * 100}%`,
            }}
          >
            <Image
              src="/images/landing/cta-arrow-3.svg"
              alt=""
              width={18}
              height={17}
              className="h-full w-full"
            />
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              // Arrow tip lower (cta-arrow-2, 21×13): at (1379.14-1269, 826.17-790.6) = (110.14, 35.57)
              left: `${(110.14 / 148) * 100}%`,
              top: `${(35.57 / 65.4) * 100}%`,
              width: `${(21 / 148) * 100}%`,
              height: `${(13 / 65.4) * 100}%`,
            }}
          >
            <Image
              src="/images/landing/cta-arrow-2.svg"
              alt=""
              width={21}
              height={13}
              className="h-full w-full"
            />
          </span>
        </Link>
      </div>
    </section>
  );
}
