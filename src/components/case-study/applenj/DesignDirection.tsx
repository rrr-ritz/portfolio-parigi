import Image from "next/image";
import { SectionAnchor } from "./SectionRail";

export function DesignDirection() {
  return (
    <section
      id="design-direction"
      aria-label="Design Direction"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={7} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                Design Direction
              </h3>
              <p className="font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                Finding the balance between creative identity and enterprise
                credibility &mdash; and learning that the best solution
                usually comes from the direction nobody asked for.
              </p>
            </div>

            {/* Wire framing & Iteration intro */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] md:text-[28px] lg:text-[32px]">
                <span className="underline decoration-solid underline-offset-[6px]">
                  Wire framing
                </span>{" "}
                &amp; Iteration
                <span className="underline decoration-solid underline-offset-[6px]">
                  :
                </span>
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[50px] lg:text-[24px]">
                <p>
                  The 6 week timeline didn&rsquo;t allow for a traditional
                  low-fidelity phase.
                </p>
                <p>
                  Instead of spending weeks on grayscale wireframes, I moved
                  directly into mid fidelity explorations &mdash; testing
                  layout, hierarchy, and content structure with visual
                  direction applied. This compressed the process but meant
                  each iteration carried more risk. Every version had to be
                  evaluated on both structure and aesthetics simultaneously.
                </p>
              </div>
            </div>

            {/* Iteration 1 — image LEFT, heading RIGHT */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[110px]">
              <div className="w-full lg:w-[479px] lg:flex-none">
                <Image
                  src="/images/applenj/landing-page-retro-style-iteration-1-1.png"
                  alt="Iteration 1 mockup — retro-inspired landing page with vintage textures and bold brand accents."
                  width={479}
                  height={1458}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 479px"
                />
              </div>
              <div className="flex flex-col gap-6 lg:flex-1">
                <h4 className="font-sans text-[24px] leading-[1.26] md:text-[28px] lg:text-[32px]">
                  Iteration
                  <span className="underline decoration-solid underline-offset-[6px]">
                    {" "}
                    1:
                  </span>
                </h4>
              </div>
            </div>

            {/* Iteration 2 — heading+body LEFT, image RIGHT */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[80px]">
              <div className="flex flex-col gap-8 lg:flex-1">
                <h4 className="font-sans text-[24px] leading-[1.26] md:text-[28px] lg:text-[32px]">
                  Iteration
                  <span className="underline decoration-solid underline-offset-[6px]">
                    {" "}
                    2:
                  </span>
                </h4>
                <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:text-[24px]">
                  <p>
                    The C-suite was rattled by how far the retro direction
                    strayed from what they had seen on other B2B sites. The
                    feedback was: dark backgrounds, prominent Apple imagery,
                    structured layout, no creative risk.
                  </p>
                  <p>
                    I followed the instruction exactly: dark hero, grey and
                    white modern features. Bright blue accents. No creativity.
                  </p>
                  <p>
                    But it was a page built from fear that creativity would
                    land the wrong way, not strategy &mdash; and it showed.
                    Visually indistinguishable from every generic IT services
                    template already in the market.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[543px] lg:flex-none">
                <Image
                  src="/images/applenj/langing-page-iteration-2-1.png"
                  alt="Iteration 2 mockup — dark hero, grey-and-white modern features, bright blue accents: the safe, template-style version the C-suite requested."
                  width={543}
                  height={1562}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 543px"
                />
              </div>
            </div>

            {/* Iteration 3 & 4 — image LEFT, heading+body RIGHT */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[80px]">
              <div className="w-full lg:w-[543px] lg:flex-none">
                <Image
                  src="/images/applenj/langing-page-iteration-3-1.png"
                  alt="Iteration 3 and 4 mockup — structural variants of the modern direction, testing dark vs. light and different container shapes."
                  width={543}
                  height={1562}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 543px"
                />
              </div>
              <div className="flex flex-col gap-8 lg:flex-1">
                <h4 className="font-sans text-[24px] leading-[1.26] md:text-[28px] lg:text-[32px]">
                  Iteration
                  <span className="underline decoration-solid underline-offset-[6px]">
                    {" "}
                    3 &amp; 4:
                  </span>
                </h4>
                <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:text-[24px]">
                  <p>
                    Same structural foundation as iteration 2 &mdash; but I
                    was trying to make a direction I didn&rsquo;t believe in
                    work.
                  </p>
                  <p>
                    I tested dark vs. light backgrounds, experimented with
                    different container shapes, adjusted section ordering.
                    The harder I pushed it, the more it looked like a
                    polished version of the exact site we were trying to
                    replace. Same approach that made apple.tech365.io
                    invisible in the first place.
                  </p>
                  <p>
                    C-suite was adamant so I kept the &ldquo;modern&rdquo;
                    look, but the design was fighting itself.
                  </p>
                </div>
              </div>
            </div>

            {/* Iteration 5 — heading+body LEFT, image RIGHT */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[80px]">
              <div className="flex flex-col gap-8 lg:flex-1">
                <h4 className="font-sans text-[24px] leading-[1.26] md:text-[28px] lg:text-[32px]">
                  Iteration
                  <span className="underline decoration-solid underline-offset-[6px]">
                    {" "}
                    5:
                  </span>
                </h4>
                <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:text-[24px]">
                  <p>I asked C-suite for one day. Just trust me.</p>
                  <p>
                    I went back to iteration 1 &amp; the moodboard and
                    studied it piece by piece. We knew what made it creative,
                    but why didn&rsquo;t it work for our design?
                  </p>
                  <p>
                    The retro textures, the vintage accents, that was all
                    noise. But underneath it there was a confidence, a sense
                    of brand ownership, different from every other reseller
                    site. That was worth saving.
                  </p>
                  <p>
                    I stripped away everything that didn&rsquo;t serve the
                    enterprise buyer and rebuilt around what did.
                  </p>
                  <p>
                    This was the design that I presented to the C-suite.
                    They saw it and decided this was the direction.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[543px] lg:flex-none">
                <Image
                  src="/images/applenj/landing-page-iteration-5-1.png"
                  alt="Iteration 5 mockup — the winning direction: confident brand-led landing page that retained creative identity while serving the enterprise buyer."
                  width={543}
                  height={1638}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 543px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
