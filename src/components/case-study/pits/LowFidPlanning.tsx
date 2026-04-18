import Image from "next/image";
import { SectionAnchor } from "./SectionRail";

export function LowFidPlanning() {
  return (
    <section
      id="low-fid-planning"
      aria-label="Low Fidelity Planning"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={3} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                Low Fidelity Planning
              </h3>
              <p className="font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                The initial ideation session was run directly with leadership
                present. No polished decks, just sketches, rapid concept
                generation, and real time stakeholder input shaping the
                direction from day one. Seven distinct layout concepts explored
                on paper, each addressing the same core tension: how do you
                surface five subdivision destinations without sacrificing the
                hero&rsquo;s primary job of establishing PITS&rsquo;s brand
                identity?
              </p>
            </div>

            {/* Sketch photos */}
            <div className="flex flex-col gap-8 lg:gap-[62px] lg:pl-[55px]">
              <div className="flex justify-center">
                <div className="w-full max-w-[538px]">
                  <Image
                    src="/images/pits/img-1902-2.png"
                    alt="Hand sketched layout concept exploring a stacked hero treatment for Princeton IT Services."
                    width={1092}
                    height={564}
                    className="h-auto w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                    sizes="(max-width: 768px) 100vw, 538px"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[78px]">
                <div className="w-full lg:w-[435px] lg:flex-none">
                  <Image
                    src="/images/pits/img-1904-2.png"
                    alt="Hand sketched layout concept exploring tile grid and card deck directions."
                    width={886}
                    height={564}
                    className="h-auto w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                    sizes="(max-width: 768px) 100vw, 435px"
                  />
                </div>
                <div className="w-full lg:w-[490px] lg:flex-none">
                  <Image
                    src="/images/pits/img-1903-2.png"
                    alt="Hand sketched layout concept exploring horizontal flip cards and vertical scroll treatments."
                    width={996}
                    height={564}
                    className="h-auto w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                    sizes="(max-width: 768px) 100vw, 490px"
                  />
                </div>
              </div>
            </div>

            {/* The seven directions explored */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[56px] lg:text-[32px]">
                The seven directions explored:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[111px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">
                    Stacked tiles / sticky scroll
                  </strong>{" "}
                  &mdash; Subdivisions stack vertically. User scrolls to reveal
                  each one sequentially. Prioritizes depth of content per
                  division.
                </p>
                <p>
                  <strong className="font-bold">Horizontal flip cards</strong>{" "}
                  &mdash; All five subdivisions visible above the fold
                  simultaneously. Cards flip on interaction to reveal detail.
                  Prioritizes immediate visibility over content depth.
                </p>
                <p>
                  <strong className="font-bold">Vertical flip cards</strong>{" "}
                  &mdash; Similar to horizontal but oriented differently.
                  Explores whether a sidebar-style layout could work alongside
                  the hero copy.
                </p>
                <p>
                  <strong className="font-bold">Rotating card deck</strong>{" "}
                  &mdash; An animated card stack cycles through subdivisions
                  automatically. Prioritizes visual interest but reintroduces
                  the carousel problem from the original design.
                </p>
                <p>
                  <strong className="font-bold">Tile grid</strong> &mdash; A
                  clean modular grid of subdivision cards. Simple, structured,
                  no interaction required.
                </p>
                <p>
                  <strong className="font-bold">
                    Tile grid with promotions &amp; announcements
                  </strong>{" "}
                  &mdash; An expanded version of the tile grid that flexes to
                  include announcements alongside subdivision links.
                  Prioritizes versatility and content dynamism.
                </p>
                <p>
                  <strong className="font-bold">Vertical Scroll Cards</strong>{" "}
                  &mdash; A hybrid approach combining card based subdivision
                  display with a vertical scrolling interaction. Explores
                  middle ground between sticky scroll depth and card based
                  visibility.
                </p>
                <p className="font-bold">
                  Two directions emerged as the strongest candidates: sticky
                  scroll and horizontal flip cards. Both solved the visibility
                  problem differently &mdash; and that difference became the
                  central design debate of the project.
                </p>
              </div>
            </div>

            {/* What this session taught me about collaboration */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[56px] lg:text-[32px]">
                What this session taught me about collaboration:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[111px] lg:text-[24px]">
                <p>
                  Working alongside another designer in a live stakeholder
                  session surfaced something I hadn&rsquo;t anticipated &mdash;
                  two designers in the same room, given the same brief, will
                  solve for completely different things.
                </p>
                <p>
                  My instinct was to optimize for immediate visibility. My
                  co-intern&rsquo;s instinct was to optimize for content depth.
                  Neither was wrong. But the decision between those two drove
                  every subsequent iteration.
                </p>
                <p>
                  Running low fid ideation with C-suite present also changed
                  the dynamic of the session. Decisions that might have taken
                  days of async feedback happened in real time. But it also
                  meant learning to present half-formed ideas with confidence.
                  To sell a sketch and not a mockup, that skill, advocating for
                  a design direction before it looks like anything, turned out
                  to be one of the most valuable things I took away from this
                  project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
