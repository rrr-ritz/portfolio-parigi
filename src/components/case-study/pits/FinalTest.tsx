import { SectionAnchor } from "./SectionRail";

export function FinalTest() {
  return (
    <section
      id="final-test"
      aria-label="The Final Test"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={5} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                The Final Test
              </h3>
              <p className="font-sans text-[17px] leading-[1.39] md:text-[20px] lg:text-[24px]">
                We put the designs in front of real users. The data that came
                back was used to inform our final hero decision.
              </p>
            </div>

            {/* Preference Testing */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[52px] lg:text-[32px]">
                Preference Testing:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[110px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Goal:</strong> Validate which
                  variant users found clearer, more trustworthy, and more
                  navigable before either design went live.
                </p>
                <p>
                  <strong className="font-bold">Process:</strong> Both
                  developed variants presented to participants side by side.
                  Asked three questions: &ldquo;Which design makes it clearer
                  what this company does?&rdquo;, &ldquo;Which would you trust
                  more as a business?&rdquo;, and &ldquo;Where would you click
                  first?&rdquo;
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Results:</strong>
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      73% preferred the horizontal card variant for clarity
                    </li>
                    <li>
                      79% said the horizontal card layout made the subdivisions
                      feel more distinct and clickable
                    </li>
                    <li>
                      83% described the sticky scroll variant as
                      &ldquo;overwhelming&rdquo; or &ldquo;too much to read
                      through&rdquo;
                    </li>
                    <li>
                      &ldquo;The scroll version has a lot of content but if
                      I&rsquo;m not interested in the subdivisions, but rather
                      Princeton IT Services, I&rsquo;m completely confused,
                      there is no much information i dont need. It is
                      distracting.&rdquo;
                    </li>
                  </ul>
                </div>
                <p>
                  <strong className="font-bold">Finding:</strong> Users
                  consistently favored the horizontal card variant on every
                  measured dimension: clarity, trust, navigability, and
                  subdivision recall.
                </p>
              </div>
            </div>

            {/* Live A/B Testing */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[52px] lg:text-[32px]">
                Live A/B Testing:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[107px] lg:text-[24px]">
                <p>
                  Both variants developed and deployed for 2 weeks to the live
                  Princeton IT Services homepage against the full 70,000
                  monthly visitor traffic pool.
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    My variant (Horizontal flip cards) went live first.
                  </p>
                  <ul className="list-disc pl-8">
                    <li>Subdivision click through rate: +340%</li>
                    <li>Average session duration: +36 seconds</li>
                    <li>Bounce rate: down 41%</li>
                    <li>Request FREE Consultation CTA clicks: +127%</li>
                  </ul>
                </div>
                <p>
                  All five subdivision sites saw increased referral traffic
                  within the first week.
                </p>
                <p>
                  The numbers validated everything the heatmap data and
                  comprehension testing had pointed toward. The design drove
                  huge engagement improvement.
                </p>
                <p className="font-bold">Then the internship ended.</p>
                <p>
                  The co-intern&rsquo;s sticky scroll variant went live for its
                  two week test period after I had left. The plan was to
                  compare both datasets and make a final design decision based
                  on cumulative performance.
                </p>
                <p>
                  The horizontal card variant&rsquo;s two week numbers set a
                  high bar. Whether the sticky scroll variant matched,
                  exceeded, or fell short of that, was being collected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
