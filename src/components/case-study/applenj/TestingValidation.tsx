import Image from "next/image";
import { SectionAnchor } from "./SectionRail";

export function TestingValidation() {
  return (
    <section
      id="testing-validation"
      aria-label="Testing & Validation"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={8} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                Testing &amp; Validation
              </h3>
              <p className="font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                Every design decision was tested with real users before handoff.
              </p>
            </div>

            {/* 1. A/B Exploration */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                1. A/B Exploration - Iteration 3 vs. Iteration 5:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Goal:</strong> Determine which
                  design direction better communicates AppleNJ&rsquo;s value
                  proposition and brand credibility.
                </p>
                <p>
                  <strong className="font-bold">Process:</strong> Presented both
                  landing pages side by side to 22 participants (mix of
                  stakeholders, colleagues, and external reviewers). Each
                  participant was asked three questions: which design feels more
                  trustworthy, which one communicates the offering more clearly,
                  and which one would you spend more time on.
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Results:</strong>
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      83% selected iteration 5 as more trustworthy
                    </li>
                    <li>
                      75% said iteration 5 communicated the offering more clearly
                    </li>
                    <li>
                      92% said they would spend more time exploring iteration 5
                    </li>
                  </ul>
                </div>
                <p>
                  <strong className="font-bold">Finding:</strong> Iteration
                  3&rsquo;s dark, Apple heavy visuals made participants assume
                  it was a generic Apple fan site or a knockoff. Iteration
                  5&rsquo;s brand led approach immediately signaled a distinct
                  company with its own offering.
                </p>
                <p>
                  <strong className="font-bold">Design update:</strong>{" "}
                  Iteration 5 was confirmed as the final direction. The dark
                  hero approach was permanently retired. In the final iteration,
                  the goal was to lean more into AppleNJ&rsquo;s unique identity
                  by including more of the light blue, teal, and modern
                  elements.
                </p>
              </div>
            </div>

            {/* 2. 1 Minute Test */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                2. 1 Minute Test - First Impression Clarity:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Goal:</strong> Validate whether
                  the landing page communicates who AppleNJ is, what they offer,
                  and who they serve within 60 seconds.
                </p>
                <p>
                  <strong className="font-bold">Process:</strong> Showed the
                  landing page to 18 participants for exactly one minute, then
                  closed it. Asked three questions: &ldquo;What does this
                  company do?&rdquo;, &ldquo;Who is this for?&rdquo;, and
                  &ldquo;What would you do next on this site?&rdquo;
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Results:</strong>
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      89% correctly identified AppleNJ as a B2B Apple reseller
                      or technology partner
                    </li>
                    <li>
                      69% identified the target audience as businesses or
                      enterprises
                    </li>
                    <li>
                      78% said they would request a quote or explore services
                    </li>
                    <li>
                      44% could not recall a single service AppleNJ offers
                      beyond hardware sales
                    </li>
                  </ul>
                </div>
                <p>
                  <strong className="font-bold">Finding:</strong> The brand and
                  value proposition were registering, but not deeply enough. 28%
                  of participants described the audience as &ldquo;anyone who
                  wants Apple products&rdquo; rather than specifically
                  businesses. Nearly half couldn&rsquo;t name a single service,
                  meaning the service layer was getting lost below the fold
                  before participants reached it.
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Design updates:</strong>
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      Revised the hero headline to lead with enterprise specific
                      language. Added &ldquo;for businesses&rdquo; phrasing
                      above the fold to eliminate ambiguity within the first
                      scroll.
                    </li>
                    <li>
                      Moved the four service pillars higher on the page,
                      directly beneath the hero, so they register before a user
                      decides to stop scrolling.
                    </li>
                    <li>
                      Increased the visual weight of the &ldquo;How We Make A
                      Difference&rdquo; section with bolder typography and
                      tighter copy to improve scannability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Click Through Task Testing */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                3. Click Through Task Testing:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Goal:</strong> Measure
                  navigation efficiency and whether users can complete key
                  tasks.
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Process:</strong> 30
                    participants split into three groups of 15, each given one
                    task on the Figma prototype:
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      Task A: &ldquo;Your company has a team of 20 machine
                      learning engineers who each need maxed out specs, upgraded
                      RAM, storage, and GPU. Figure out how to customize a bulk
                      MacBook Pro order.&rdquo;
                    </li>
                    <li>
                      Task C: &ldquo;You want to see if there&rsquo;s a bundle
                      package for your education department.&rdquo;
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    <strong className="font-bold">Results:</strong>
                  </p>
                  <div className="w-full max-w-[556px]">
                    <Image
                      src="/images/applenj/image-84.png"
                      alt="Click-through task testing results table — completion rates by task."
                      width={556}
                      height={181}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 556px"
                    />
                  </div>
                </div>
                <p>
                  <strong className="font-bold">Finding:</strong> Task A had
                  the lowest completion rate. Participants knew they needed
                  custom configurations but didn&rsquo;t know where to look.
                  Most started on the MacBook Pro product page expecting a
                  &ldquo;customize&rdquo; option there. Only 4 participants
                  found the Apple Configure-to-Order page through the navbar on
                  the first try. The remaining successful completions came
                  through trial and error across Services and Company pages.
                  Task B performed better but still fell short &mdash;
                  participants expected bundles under &ldquo;Services&rdquo;
                  rather than &ldquo;Promotions.&rdquo;
                </p>
                <p>
                  <strong className="font-bold">Design update:</strong> Added
                  a &ldquo;Need Custom Specs?&rdquo; CTA directly on all Mac
                  product pages linking to the configuration page. Renamed the
                  page itself from &ldquo;Apple CTO&rdquo; to
                  &ldquo;Configure-to-Order&rdquo; as testing revealed that no
                  participant understood what &ldquo;CTO&rdquo; meant in this
                  context. Renamed the &ldquo;Promotions&rdquo; nav item to
                  &ldquo;Pricing &amp; Packages&rdquo; to better reflect that
                  bundles and volume discounts live there.
                </p>
              </div>
            </div>

            {/* 4. Open Prototype Walkthrough */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                4. Open Prototype Walkthrough:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Goal:</strong> Identify
                  usability issues, content gaps, and moments of confusion
                  through unstructured exploration.
                </p>
                <p>
                  <strong className="font-bold">Process:</strong> 20
                  participants were given the Figma prototype with no specific
                  task. The instruction was: &ldquo;Explore this site as if you
                  were evaluating it for your company. Think out loud.&rdquo;
                  Sessions lasted 5-8 minutes each. I documented every point
                  where participants paused, expressed confusion, or made a
                  comment.
                </p>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Results:</strong>
                  </p>
                  <ul className="list-disc pl-8">
                    <li>
                      16/20 participants navigated to the quote form without
                      prompting
                    </li>
                    <li>
                      6/20 clicked on the trust bar logos expecting to see case
                      studies (none existed)
                    </li>
                    <li>
                      14/20 scrolled past the &ldquo;How We Make A
                      Difference&rdquo; section without reading it
                    </li>
                    <li>
                      8/20 expressed confusion about the difference between
                      &ldquo;Services&rdquo; and &ldquo;Solutions&rdquo; in the
                      nav
                    </li>
                  </ul>
                </div>
                <p>
                  <strong className="font-bold">Finding:</strong> The trust bar
                  was generating the right instinct, participants wanted proof,
                  but clicking the logos led nowhere, which broke the
                  credibility it was trying to build. The &ldquo;How We Make A
                  Difference&rdquo; section was being treated as filler. The
                  nav labels &ldquo;Our Offerings&rdquo; and &ldquo;For
                  Business&rdquo; were too vague, participants couldn&rsquo;t
                  predict what lived under either one.
                </p>
                <p>
                  <strong className="font-bold">Design update:</strong> Added
                  a &ldquo;Learn more about our partnerships&rdquo; link
                  beneath the trust bar to redirect to our blog where case
                  studies live. Rewrote and restructured the &ldquo;How We
                  Make A Difference&rdquo; section with shorter, scannable
                  bullet points instead of paragraphs. Renamed &ldquo;Our
                  Offerings&rdquo; to &ldquo;Services&rdquo; and &ldquo;For
                  Business&rdquo; to &ldquo;Solutions&rdquo;, to make it
                  direct, specific, no guesswork.
                </p>
              </div>
            </div>

            {/* 5. Scenario Based Role Testing */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                5. Scenario Based Role Testing:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Goal:</strong> Test whether
                  non-technical buyers can navigate the site, understand the
                  offering, and identify the right solution for their specific
                  business need.
                </p>
                <p>
                  <strong className="font-bold">Process:</strong> 12
                  participants with no technical background were each assigned
                  a scenario. Participants were asked to explore the site and
                  identify: what they would purchase, what services they would
                  need, and how they would initiate the process.
                </p>
                <ul className="list-disc pl-8">
                  <li>
                    Scenario A (6 participants): &ldquo;You are an office
                    manager at a 100 person company. Half your team works
                    remotely in another state. You need to equip everyone with
                    Apple devices.&rdquo;
                  </li>
                  <li>
                    Scenario B (6 participants): &ldquo;You manage a team of
                    30 graphic designers. You need to upgrade their machines
                    and find ongoing support.&rdquo;
                  </li>
                </ul>
                <div className="flex flex-col gap-4">
                  <p>
                    <strong className="font-bold">Results:</strong>
                  </p>
                  <div className="w-full max-w-[793px]">
                    <Image
                      src="/images/applenj/image-83.png"
                      alt="Scenario-based role testing results table — completion and confidence metrics per scenario."
                      width={793}
                      height={271}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 793px"
                    />
                  </div>
                </div>
                <p>
                  <strong className="font-bold">Finding:</strong> Every
                  participant found products and reached the quote form &mdash;
                  the conversion path was working regardless of technical
                  background. But confidence dropped sharply in Scenario A.
                  Participants managing distributed teams couldn&rsquo;t find
                  clear messaging about remote deployment, multi-location
                  support, or how AppleNJ handles shipping to employees in
                  different states. They found the hardware but weren&rsquo;t
                  sure AppleNJ could solve the logistics. Scenario B performed
                  well, the service pages clearly communicated ongoing support
                  and the connection between hardware upgrades and managed
                  services was intuitive.
                </p>
                <p>
                  <strong className="font-bold">Design update:</strong> Added
                  a &ldquo;Multi-Location Deployment&rdquo; callout to the
                  Managed IT Services page. Added scenario based entry points
                  to the landing page&rsquo;s service section (&ldquo;Equipping
                  a distributed team?&rdquo;) to help non-technical buyers
                  identify and navigate to the most relevant content faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
