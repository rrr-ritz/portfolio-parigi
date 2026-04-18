import { SectionAnchor } from "./SectionRail";

export function Context() {
  return (
    <section
      id="context"
      aria-label="Context"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={1} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                Problem
              </h3>
              <div className="flex flex-col gap-1 font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                <p>
                  70,000 monthly visitors. Near zero conversions. Average
                  session duration under 7 seconds.
                </p>
                <p>
                  The hero section &mdash; the first touchpoint for every
                  visitor &mdash; was actively working against the business.
                </p>
              </div>
            </div>

            {/* My Initial Assessment */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                My Initial Assessment:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Visually outdated.</strong>{" "}
                  Cluttered grid layout, stock imagery, mismatched typography.
                  The design language hadn&rsquo;t evolved in years. Against
                  any modern B2B competitor, the first impression was immediate
                  distrust.
                </p>
                <p>
                  <strong className="font-bold">No value proposition.</strong>{" "}
                  A rotating carousel cycling through unrelated service
                  announcements told visitors nothing about what Princeton IT
                  Services does or why they should care.
                </p>
                <p>
                  <strong className="font-bold">
                    Zero conversion clarity.
                  </strong>{" "}
                  Subdivision logos sat as passive tiles &mdash; no hover
                  states, no clear affordance, nothing that read as clickable.
                  A first time visitor had no idea what was interactive and
                  what wasn&rsquo;t. The page offered no obvious next step.
                </p>
                <p>
                  <strong className="font-bold">Invisible divisions.</strong>{" "}
                  Five revenue generating business divisions were reduced to
                  small logos in a grid. No context. No description. No reason
                  to click. The company&rsquo;s most valuable assets were
                  completely invisible.
                </p>
              </div>
            </div>

            {/* Challenges + Constraints (2 columns) */}
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[80px]">
              <div className="flex flex-col gap-8 lg:flex-1 lg:gap-[62px]">
                <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                  Challenges:
                </h4>
                <ul className="list-disc pl-8 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[90px] lg:text-[24px]">
                  <li>
                    Diagnose why a high-traffic page was generating zero
                    engagement
                  </li>
                  <li>
                    Redesign the hero to communicate PITS&rsquo;s identity
                    within 10 seconds
                  </li>
                  <li>
                    Use above the fold real estate to drive qualified traffic
                    to five subdivision sites
                  </li>
                  <li>
                    Modernize the section without updating the rest of the site
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-8 lg:w-[561px] lg:flex-none lg:gap-[62px]">
                <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                  Constraints:
                </h4>
                <ul className="list-disc pl-8 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[90px] lg:text-[24px]">
                  <li>Two interns</li>
                  <li>Hero section only</li>
                  <li>Limited research budget</li>
                </ul>
              </div>
            </div>

            {/* Goals */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Goals:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[42px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Business Goal:</strong>{" "}
                  Convert a high traffic but zero engagement hero into an
                  active lead generation surface.
                </p>
                <p>
                  <strong className="font-bold">UX Goal:</strong> Establish
                  identity and value proposition within the first 10 seconds
                  of landing.
                </p>
                <p>
                  <strong className="font-bold">Conversion Goal:</strong>{" "}
                  Drive measurable click-through to all five subdivision sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
