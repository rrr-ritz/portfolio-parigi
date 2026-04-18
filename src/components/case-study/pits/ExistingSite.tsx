import Image from "next/image";
import { SectionAnchor } from "./SectionRail";

export function ExistingSite() {
  return (
    <section
      id="existing-site"
      aria-label="The Existing Site"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={2} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                The Existing Site
              </h3>
              <p className="font-sans text-[17px] leading-[1.39] md:text-[20px] lg:text-[24px]">
                We put the existing hero in front of real users and though a
                series of heat map testing. The data that came back was exactly
                the ammunition needed to make extreme design improvements.
              </p>
            </div>

            {/* The original design */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[56px] lg:text-[32px]">
                The original design:
              </h4>
              <div className="flex flex-col gap-8 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[111px] lg:text-[24px]">
                <p>
                  A tile layout with a rotating carousel on the left and
                  subdivision logo tiles on the right. No unified headline. No
                  clear hierarchy. Competing focal points fighting for
                  attention.
                </p>
                <div className="w-full max-w-[1078px]">
                  <Image
                    src="/images/pits/image-90.png"
                    alt="Original Princeton IT Services homepage hero — tile layout with rotating carousel on the left and subdivision logo tiles on the right."
                    width={1078}
                    height={474}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 1078px"
                  />
                </div>
              </div>
            </div>

            {/* Heatmap Analysis */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[56px] lg:text-[32px]">
                Heatmap Analysis:
              </h4>
              <div className="flex flex-col gap-8 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[111px] lg:text-[24px]">
                <p>
                  The Attention Insight predictive heatmap exposed a critical
                  attention distribution failure across every relevant zone.
                </p>
                <div className="w-full max-w-[1078px]">
                  <Image
                    src="/images/pits/image-86.png"
                    alt="Attention Insight predictive heatmap overlay on the original PITS hero — hot zones concentrated on the carousel headline, cold across the subdivision logos."
                    width={1078}
                    height={485}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 1078px"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold">Heading &mdash; 14.9%</p>
                    <p>
                      The majority of predicted attention landed on the
                      carousel headline &mdash; but this is misleading. The
                      heading was rotating through unrelated service
                      announcements. Attention was captured by movement, not
                      meaning. Users were reading a Windows 10 update notice
                      on a B2B IT company&rsquo;s homepage.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold">Primary CTA &mdash; 2.4% / 0.7%</p>
                    <p>
                      The two most important action buttons on the page (Get
                      Free Consultation and Learn More) captured a combined
                      3.1% of attention. Effectively invisible. A visitor
                      motivated to convert had no clear path forward.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold">Contact CTA &mdash; 0.3%</p>
                    <p>
                      The nav bar contact button registered near zero fixation.
                      The highest intent action on the entire page was the
                      least seen element.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold">
                      Subdivision Logos &mdash; 3.9% / 3.0% / 1.1%
                    </p>
                    <p>
                      Three subdivision logos combined for just 8% of total
                      predicted attention &mdash; and that attention was
                      passive. Logo recognition, not click intent.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold">
                      The right half of the page &mdash; effectively dead.
                    </p>
                    <p>
                      The entire subdivision section &mdash; three divisions,
                      real revenue opportunities &mdash; generated less
                      predicted engagement than the rotating carousel heading
                      alone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Testing - 10 Second Test */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[56px] lg:text-[32px]">
                User Testing - 10 Second Test:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[111px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Goal:</strong> Validate whether
                  the hero communicates who Princeton IT Services is, what
                  they offer, and where to go next &mdash; within the first 10
                  seconds of landing.
                </p>
                <p>
                  <strong className="font-bold">Process:</strong> Showed the
                  original hero to 12 participants for exactly 10 seconds,
                  then closed it. Asked three questions: &ldquo;What does this
                  company do?&rdquo;, &ldquo;What services do they
                  offer?&rdquo;, and &ldquo;Where would you click
                  first?&rdquo;
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Results:</strong>
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      6 of 12 participants could not accurately describe what
                      Princeton IT Services does
                    </li>
                    <li>
                      0 of 12 recalled seeing or registering any subdivision
                      links
                    </li>
                    <li>
                      9 of 12 could not identify a clear next step or clickable
                      element
                    </li>
                  </ul>
                </div>
                <p>
                  <strong className="font-bold">Findings:</strong> Zero brand
                  recall. Zero subdivision awareness. Zero actionable next
                  step. The hero wasn&rsquo;t just underperforming &mdash; it
                  was actively failing to communicate anything meaningful at
                  the most critical moment of the user journey.
                </p>
              </div>
            </div>

            {/* User Testing - Comprehension Test */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[56px] lg:text-[32px]">
                User Testing - Comprehension Test:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[111px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Goal:</strong> Assess whether
                  extended exposure to the hero produces meaningful
                  comprehension &mdash; specifically around PITS&rsquo;s
                  service offering and subdivision structure.
                </p>
                <p>
                  <strong className="font-bold">Process:</strong> Participants
                  viewed the original hero for a full, uninterrupted session
                  with no time limit. Then asked: &ldquo;What does this
                  company do?&rdquo;, &ldquo;Can you name any of their
                  services or divisions?&rdquo;, and &ldquo;Who do you think
                  this is for?&rdquo;
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Results:</strong>
                  </p>
                  <ul className="list-disc pl-8">
                    <li>73% failure rate on subdivision recall</li>
                    <li>Average comprehension score: 23%</li>
                    <li>
                      17 of 22 described the company only as &ldquo;an IT
                      company&rdquo; with no further detail
                    </li>
                    <li>2 of 22 could name more than one subdivision</li>
                    <li>
                      14 of 22 could not identify who the target audience was
                    </li>
                    <li>
                      &ldquo;I saw some logos at the bottom but didn&rsquo;t
                      know what they were for&rdquo;
                    </li>
                    <li>
                      &ldquo;There was too much going on &mdash; I didn&rsquo;t
                      know where to look&rdquo;
                    </li>
                    <li>
                      &ldquo;I assumed it was for regular consumers, not
                      businesses&rdquo;
                    </li>
                  </ul>
                </div>
                <p>
                  <strong className="font-bold">Findings:</strong> Extended
                  viewing time did not meaningfully improve comprehension. The
                  information architecture was broken at a structural level.
                  Users weren&rsquo;t missing the subdivisions because they
                  weren&rsquo;t looking. They were missing them because
                  nothing on the page communicated that those logos
                  represented distinct, clickable business lines worth
                  exploring.
                </p>
              </div>
            </div>

            {/* The Verdict */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[56px] lg:text-[32px]">
                The Verdict:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[111px] lg:text-[24px]">
                <p>
                  The original hero wasn&rsquo;t just visually outdated
                  &mdash; it was structurally broken. Users couldn&rsquo;t
                  identify the brand, couldn&rsquo;t find the subdivisions,
                  and had no clear path to convert. Every test pointed to the
                  same root cause: a page with no hierarchy, no value
                  proposition, and no conversion intent baked into the design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
