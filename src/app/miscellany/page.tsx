import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "miscellany | Pari Gill",
  description:
    "A collection of Pari's hobbies and interests — creating, nature, friends, pottery, photography, juice, making playlists, exploring, board games.",
};

type Item = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

// Mask-group bounding boxes from Figma frame 3138:277 (1514×2122).
// Y values offset by -120 for the global nav above this content.
const ITEMS: Item[] = [
  { id: "278", left: 912, top: 1348, width: 145.236, height: 145.236 },
  { id: "281", left: 684, top: 1170, width: 224.662, height: 145.236 },
  { id: "284", left: 510, top: 989, width: 145.236, height: 145.236 },
  { id: "287", left: 691, top: 991, width: 145.236, height: 145.236 },
  { id: "290", left: 782, top: 812, width: 145.236, height: 145.236 },
  { id: "293", left: 601, top: 812, width: 145.236, height: 145.236 },
  { id: "296", left: 420, top: 812, width: 145.236, height: 145.236 },
  { id: "299", left: 358, top: 634, width: 224.662, height: 145.236 },
  { id: "302", left: 181, top: 635, width: 145.236, height: 145.236 },
  { id: "305", left: 739, top: 456, width: 145.236, height: 145.236 },
  { id: "308", left: 483, top: 456, width: 224.662, height: 145.236 },
  { id: "311", left: 306, top: 456, width: 145.236, height: 145.236 },
  { id: "314", left: 1093, top: 100, width: 145.236, height: 145.236 },
  { id: "317", left: 763, top: 278, width: 224.662, height: 145.236 },
  { id: "320", left: 585, top: 278, width: 145.236, height: 145.236 },
  { id: "323", left: 833, top: 100, width: 224.662, height: 145.236 },
  { id: "326", left: 578, top: 100, width: 224.662, height: 145.236 },
  { id: "329", left: 402, top: 100, width: 145.236, height: 145.236 },
];

export default function MiscellanyPage() {
  return (
    <main id="main" className="relative bg-cream">
      {/* Desktop — Figma-faithful collage */}
      <div className="relative mx-auto hidden w-full max-w-[1514px] lg:block lg:h-[1550px]">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            className="pointer-events-none absolute"
            style={{
              left: `${item.left}px`,
              top: `${item.top}px`,
              width: `${item.width}px`,
              height: `${item.height}px`,
            }}
          >
            <Image
              src={`/images/miscellany/mask-${item.id}.png`}
              alt=""
              aria-hidden="true"
              fill
              sizes={`${Math.ceil(item.width)}px`}
              className="object-contain"
            />
          </div>
        ))}

        {/* MISCELLANY headline */}
        <h1 className="absolute left-[632.59px] top-[632.15px] w-[635.41px] text-right font-sans font-black text-[96.417px] uppercase leading-[1.58] tracking-[0.01em] text-orange-bright">
          Miscellany
        </h1>

        {/* Right-side interests list */}
        <p className="absolute left-[1032px] top-[271px] w-[425px] font-serif text-[32.18px] leading-[1.18] text-espresso-muted">
          creating · nature · friends · pottery · photography · juice · making
          playlists · exploring · board games
        </p>

        {/* Bottom-left phrase */}
        <div className="absolute left-[186px] top-[1200px] w-[453px] font-serif text-espresso-muted">
          <p className="text-[32.18px] leading-[1.58]">
            a collection of some of my
          </p>
          <p className="text-[43.117px] leading-[1.09]">hobbies and interests</p>
        </div>
      </div>

      {/* Mobile / tablet — stacked grid */}
      <div className="mx-auto flex w-full max-w-[780px] flex-col gap-10 px-6 py-16 lg:hidden">
        <div className="flex flex-col gap-3">
          <h1 className="font-sans font-black text-[48px] uppercase leading-[1.1] tracking-[0.01em] text-orange-bright md:text-[72px]">
            Miscellany
          </h1>
          <p className="font-serif text-espresso-muted">
            <span className="block text-[18px] leading-[1.35] md:text-[22px]">
              a collection of some of my
            </span>
            <span className="block text-[22px] leading-[1.1] md:text-[28px]">
              hobbies and interests
            </span>
          </p>
        </div>

        <p className="font-serif text-[18px] leading-[1.35] text-espresso-muted md:text-[20px]">
          creating · nature · friends · pottery · photography · juice · making
          playlists · exploring · board games
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden"
              style={{ aspectRatio: `${item.width} / ${item.height}` }}
            >
              <Image
                src={`/images/miscellany/mask-${item.id}.png`}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 768px) 240px, 45vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
