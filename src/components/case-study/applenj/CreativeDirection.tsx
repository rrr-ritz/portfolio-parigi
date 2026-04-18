import Image from "next/image";
import { SectionAnchor } from "./SectionRail";

export function CreativeDirection() {
  return (
    <section
      id="creative-direction"
      aria-label="Creative Direction"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={5} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                Creative Direction
              </h3>
              <div className="flex flex-col gap-2 font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                <p>
                  The mandate from leadership was broad: &ldquo;fix it so we
                  can make millions.&rdquo;
                </p>
                <p>My job was to turn that into a strategy.</p>
              </div>
            </div>

            {/* Brand Name & Logo */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Brand Name &amp; Logo:
              </h4>
              <div className="flex flex-col gap-8 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[50px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Naming:</strong> Settled on
                  &ldquo;AppleNJ&rdquo; &mdash; regionally specific,
                  immediately clear, SEO-aligned for &ldquo;Apple + New
                  Jersey&rdquo; enterprise searches, and cleanly separated
                  from the Tech365 parent brand.
                </p>
                <div className="relative w-full overflow-hidden">
                  <Image
                    src="/images/applenj/image-72.png"
                    alt="Logo exploration — wide brainstorm of NJ monogram concepts across multiple container shapes, colors, and letter weights."
                    width={1287}
                    height={625}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 1287px"
                  />
                </div>
                <p>
                  <strong className="font-bold">Brainstorming:</strong>{" "}
                  started wide, exploring every possible direction. Some were
                  too literal. Some were too abstract. Some leaned too heavily
                  on Apple&rsquo;s visual identity and risked trademark
                  issues. The point wasn&rsquo;t to land on the answer, it was
                  to exhaust the wrong ones.
                </p>
                <p>
                  <strong className="font-bold">Refinement:</strong> narrowed
                  to the strongest concept: an NJ monogram inside a
                  rounded-square container with a leaf accent. From there I
                  tested it across every variable &mdash; color, container
                  shape, letter weight. Each version was evaluated against
                  the same criteria: does it read at favicon scale? Does it
                  feel Apple adjacent without copying Apple? Does it project
                  enterprise, not consumer?
                </p>
                <p>
                  <strong className="font-bold">Final mark:</strong> Three
                  colors. Dark teal as the primary brand application. Black
                  for maximum contrast on light backgrounds. White for dark
                  backgrounds and reversed contexts.
                </p>
              </div>
            </div>

            {/* Color System */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Color System:
              </h4>
              <div className="flex flex-col gap-8 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[50px] lg:text-[24px]">
                <div className="w-full">
                  <Image
                    src="/images/applenj/image-73.png"
                    alt="Color exploration across reds, oranges, yellows, greens, and bright blues tested against dark backgrounds."
                    width={1105}
                    height={352}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 1105px"
                  />
                </div>
                <p>
                  The exploration started wide &mdash; reds, oranges, yellows,
                  greens, and bright blues, all tested against dark primary
                  backgrounds.
                </p>
                <p>
                  The palette narrowed to blues quickly. Blue is
                  psychologically tied to trust, competence, and security.
                  There&rsquo;s a reason the largest enterprise technology
                  companies (IBM, Dell, Intel, Salesforce) anchor their brands
                  in blue.
                </p>
                <p>
                  From there I explored Apple&rsquo;s visual language &mdash;
                  the black to white primary scale paired with bright, almost
                  neon accents. Clean, high contrast, instantly recognizable.
                  But replicating Apple&rsquo;s palette would make AppleNJ
                  feel like a knockoff rather than a partner. The site needed
                  to sit comfortably next to Apple&rsquo;s product without
                  disappearing into it or competing with it.
                </p>
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[50px]">
                  <div className="w-full lg:w-[413px] lg:flex-none">
                    <Image
                      src="/images/applenj/image-75.png"
                      alt="Final selected palette — dark teal anchor with supporting functional colors."
                      width={413}
                      height={246}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 413px"
                    />
                  </div>
                  <p className="lg:flex-1">
                    The final palette was tested against three criteria: Does
                    it differentiate from every regional competitor&rsquo;s
                    color system? Does it hold its own next to Apple&rsquo;s
                    imagery? And does it scale across 20+ pages without
                    fatiguing the eye? Dark teal passed all three. It occupies
                    a unique position in the blue family that no competitor in
                    the space claims, reads as authoritative at large scale
                    (hero backgrounds, headers), and recedes gracefully at
                    small scale (icons, borders). The remaining four colors
                    were assigned to serve functional roles.
                  </p>
                </div>
              </div>
            </div>

            {/* Design System */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Design System:
              </h4>
              <div className="flex flex-col gap-8 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[50px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Typography:</strong> Barlow. A
                  clean, geometric sans-serif with excellent readability
                  across all sizes. The type scale was designed to create
                  immediate visual hierarchy.
                </p>
                <p>
                  <strong className="font-bold">Spacing System:</strong> A
                  scale (4, 8, 12, 16, 20, 24, 32, 40, 56, 64, 80, 120px)
                  applied consistently across all vertical and horizontal
                  rhythm. This eliminated ad hoc spacing decisions and ensured
                  visual consistency across 20+ pages.
                </p>
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[80px]">
                  <div className="w-full lg:w-[516px] lg:flex-none">
                    <Image
                      src="/images/applenj/image-78.png"
                      alt="Typography system — type scale with Header 1 sample and hierarchy."
                      width={516}
                      height={430}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 516px"
                    />
                  </div>
                  <div className="w-full lg:w-[339px] lg:flex-none">
                    <Image
                      src="/images/applenj/image-77.png"
                      alt="Spacing system applied to a page layout — demonstrating vertical and horizontal rhythm."
                      width={339}
                      height={430}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 339px"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mood boarding */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Mood boarding - Brand &amp; Tone:
              </h4>
              <div className="flex flex-col gap-8 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:flex-row lg:items-start lg:gap-[80px] lg:pl-[50px] lg:text-[24px]">
                <p className="lg:w-[483px] lg:flex-none">
                  The early vision was black and white with vintage inspired
                  accents &mdash; a direction that felt clean and professional
                  but carried enough creative (especially with accents of
                  blue) and personality to stand apart from the sterile,
                  template style sites dominating the reseller space.
                </p>
                <div className="w-full lg:flex-1">
                  <Image
                    src="/images/applenj/image-71.png"
                    alt="Moodboard for brand and tone — black-and-white vintage-inspired references with blue accents."
                    width={583}
                    height={417}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 583px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
