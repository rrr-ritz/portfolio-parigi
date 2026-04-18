import { SectionAnchor } from "./SectionRail";

export function TheUser() {
  return (
    <section
      id="the-user"
      aria-label="The User"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={4} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                The User
              </h3>
              <div className="flex flex-col gap-2 font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                <p>
                  The business strategy defined what AppleNJ would offer and
                  where it would compete.
                </p>
                <p>
                  User research needed to answer the next question:
                </p>
                <p>
                  who is the buyer, and how do they actually make purchasing
                  decisions?
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Target Audience:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  Three inputs drove audience selection: who Princeton IT
                  Services already served, where Apple enterprise adoption was
                  growing fastest, and which buyer segments were underserved
                  by existing competitors.
                </p>
                <div className="flex flex-col gap-6 lg:pl-[65px]">
                  <p>
                    <strong className="font-bold">
                      Primary &mdash; IT Directors &amp; Procurement Managers
                    </strong>{" "}
                    Mid-to-large enterprises (200&ndash;5,000+ employees) in
                    the Tri-State area standardizing on Apple hardware. These
                    are the people who sign off on six-figure device orders.
                    They evaluate 3&ndash;5 vendors, prioritize risk
                    mitigation, and need to justify every purchase internally.
                  </p>
                  <p>
                    <strong className="font-bold">
                      Secondary &mdash; CTOs at scaling startups
                    </strong>{" "}
                    Companies growing from 20 to 200 employees with no
                    dedicated IT team. They need Apple deployment handled
                    end-to-end so they can focus on product &mdash; not
                    purchasing logistics.
                  </p>
                  <p>
                    <strong className="font-bold">
                      Tertiary &mdash; Education &amp; public sector IT leads
                    </strong>{" "}
                    Managing institutional device fleets with strict budgets
                    and complex procurement rules. Price sensitivity is high,
                    but so is the need for lifecycle management and support
                    coverage.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                User Archetypes:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>I deliberately avoided traditional personas.</p>
                <p>
                  Giving a fictional buyer a name, a photo, and a backstory
                  feels tangible &mdash; but it introduces confirmation bias.
                  You start designing for &ldquo;Sarah, 42, IT Director at a
                  mid-size healthcare firm&rdquo; instead of designing for the
                  behavioral patterns that actually drive purchasing
                  decisions.
                </p>
                <p>
                  Instead, I built behavioral archetypes &mdash; profiles
                  defined by procurement context, decision drivers, and pain
                  points:
                </p>
                <div className="flex flex-col gap-6 lg:pl-[65px]">
                  <p>
                    <strong className="font-bold">
                      &ldquo;I need reliability at scale.&rdquo;
                    </strong>{" "}
                    Managing 500+ devices across multiple locations. Evaluates
                    vendors on deployment speed, support, and compatibility.
                    Biggest fear: choosing a vendor that can&rsquo;t keep up
                    when something breaks at 5 PM on a Monday.
                  </p>
                  <p>
                    <strong className="font-bold">
                      &ldquo;I need this handled so I can focus on
                      product.&rdquo;
                    </strong>{" "}
                    No internal IT team. Growing fast. Overwhelmed by
                    Apple&rsquo;s enterprise programs and doesn&rsquo;t know
                    where to start. Doesn&rsquo;t want to become an expert in
                    device management &mdash; wants a partner who already is.
                  </p>
                  <p>
                    <strong className="font-bold">
                      &ldquo;I need to stretch every dollar.&rdquo;
                    </strong>{" "}
                    Institutional buyer with rigid budgets and approval
                    chains. Evaluates on total cost of ownership, not sticker
                    price. Needs volume discounts, education pricing, and
                    lifecycle management that prevents costly mid-cycle
                    replacements.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                User Pain Points:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">
                    &ldquo;I don&rsquo;t know what I&rsquo;m actually
                    buying.&rdquo;
                  </strong>{" "}
                  The services &mdash; deployment, managed IT, AppleCare for
                  Enterprise &mdash; were invisible. The site presented
                  hardware without context, making it confusing to users.
                </p>
                <p>
                  <strong className="font-bold">
                    &ldquo;I can&rsquo;t gauge the depth of what&rsquo;s being
                    offered.&rdquo;
                  </strong>{" "}
                  Technical buyers found no operational detail to validate
                  capabilities. Non-technical buyers found no plain-language
                  framing to help them understand what they&rsquo;d actually
                  be paying for.
                </p>
                <p>
                  <strong className="font-bold">
                    &ldquo;I have no proof this company can deliver at
                    scale.&rdquo;
                  </strong>{" "}
                  No enterprise client logos, no case studies, no
                  partnerships, no proof of operational scale.
                </p>
                <p>
                  <strong className="font-bold">
                    &ldquo;The brand doesn&rsquo;t feel trustworthy.&rdquo;
                  </strong>{" "}
                  An India phone number on a U.S. enterprise site,
                  inconsistent visual identity, no design system. The lack of
                  polish communicated a lack of operational seriousness.
                </p>
                <p>
                  <strong className="font-bold">
                    &ldquo;I can&rsquo;t find what I need.&rdquo;
                  </strong>{" "}
                  No defined service categories, no logical content hierarchy.
                  The information architecture was flat and disorganized
                  &mdash; users could not understand the flow.
                </p>
                <p>
                  <strong className="font-bold">
                    &ldquo;Nothing tells me what to do next.&rdquo;
                  </strong>{" "}
                  No clear primary CTA, no persistent quote request access, no
                  guided flow from discovery to conversion. The site had no
                  opinion about what the user should do &mdash; so users did
                  nothing.
                </p>
                <p>
                  <strong className="font-bold">
                    &ldquo;This looks like it was built 15 years ago.&rdquo;
                  </strong>{" "}
                  Outdated design, layout patterns, inconsistent typography,
                  no visual system. In a market where buyers judge operational
                  quality by digital presence, an aging site signals a company
                  that hasn&rsquo;t kept up.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                User Needs:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Accessible expertise.</strong>{" "}
                  Technical enough to earn credibility with IT directors,
                  clear enough that a non-technical procurement lead can
                  follow without a glossary.
                </p>
                <p>
                  <strong className="font-bold">
                    Efficient information density.
                  </strong>{" "}
                  Enough depth to inform a six-figure purchasing decision,
                  structured tightly enough that a busy decision-maker
                  doesn&rsquo;t lose the thread.
                </p>
                <p>
                  <strong className="font-bold">
                    I need to sell this decision internally.
                  </strong>{" "}
                  Procurement managers don&rsquo;t buy on instinct &mdash;
                  they build business cases. The site offered nothing to
                  support that: no ROI framing, no total-cost-of-ownership
                  comparisons, no compliance or security messaging.
                </p>
                <p>
                  <strong className="font-bold">Immediate clarity.</strong>{" "}
                  Within seconds: who is this for, what do they do, and why
                  should I care.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Key Findings:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  These informed the design direction. Each one was grounded
                  in research:
                </p>
                <div className="flex flex-col gap-6 lg:pl-[65px]">
                  <p>
                    The buyer journey is 70%+ complete before first contact.
                    Enterprise buyers don&rsquo;t call vendors to learn
                    &mdash; they call to confirm. The site needed to do the
                    selling.
                  </p>
                  <p>
                    Trust is the conversion bottleneck, not price. In a market
                    where Apple controls reseller margins and pricing variance
                    is minimal, the deciding factor isn&rsquo;t cost &mdash;
                    it&rsquo;s confidence. Can this vendor handle my 500-device
                    deployment? The site needed to answer those questions
                    visually and structurally.
                  </p>
                  <p>
                    Content depth signals competence. Thin, surface-level
                    service pages read as &ldquo;we can&rsquo;t actually do
                    this.&rdquo;
                  </p>
                  <p>
                    Enterprise buyers research extensively online before ever
                    contacting a vendor. The site is their first (and possibly
                    only) impression.
                  </p>
                  <p>
                    Trust is built through social proof (client logos,
                    partnerships), content depth, and design quality &mdash;
                    not pricing transparency.
                  </p>
                  <p>
                    Buyers are comparing 3&ndash;5 vendors simultaneously.
                    Whatever differentiates AppleNJ needs to be visible within
                    10 seconds of landing.
                  </p>
                  <p>
                    A regional, Tri-State-specific positioning would resonate
                    more strongly than attempting to compete nationally.
                  </p>
                  <p>
                    Mobile traffic would be secondary. Enterprise procurement
                    research happens overwhelmingly on desktop during business
                    hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
