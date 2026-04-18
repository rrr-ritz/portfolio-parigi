import { SectionAnchor } from "./SectionRail";

export function BusinessRedesign() {
  return (
    <section
      id="business-redesign"
      aria-label="Business Redesign"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={3} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1217px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                Business
              </h3>
              <div className="flex flex-col gap-2 font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                <p>
                  The mandate from leadership was broad: &ldquo;fix it so we
                  can make millions.&rdquo;
                </p>
                <p>My job was to turn that into a strategy.</p>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Research objectives:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">
                    Redefine what AppleNJ actually is.
                  </strong>{" "}
                  The existing positioning &mdash; &ldquo;Apple Authorized
                  Reseller&rdquo; &mdash; described a credential, not a
                  business. I needed to reframe the company from a storefront
                  that sells Apple products into an enterprise procurement and
                  deployment partner that solves operational problems.
                </p>
                <p>
                  <strong className="font-bold">
                    Identify the most profitable and defensible market focus.
                  </strong>{" "}
                  Not every customer segment is worth pursuing. I needed to
                  determine where AppleNJ could win &mdash; and more
                  importantly, where it couldn&rsquo;t.
                </p>
                <p>
                  <strong className="font-bold">
                    Determine the product-service hierarchy.
                  </strong>{" "}
                  Which offerings become core revenue drivers? Which are
                  supporting? Which get cut entirely?
                </p>
                <p>
                  <strong className="font-bold">
                    Translate strategy into structure.
                  </strong>{" "}
                  Every strategic decision needed to map directly to
                  market-facing messaging and a website architecture that
                  supports the buyer journey.
                </p>
                <p>
                  <strong className="font-bold">
                    Expose the capability gap.
                  </strong>{" "}
                  Audit what Princeton IT Services could actually deliver
                  versus what the existing site communicated &mdash; and
                  quantify how much value was being left invisible.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Step 1: Competitor Landscape
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  I mapped three distinct competitor sets, each representing a
                  different threat vector:
                </p>
                <ol className="flex list-decimal flex-col gap-6 pl-6 lg:pl-[46px]">
                  <li>
                    <strong className="font-bold">Direct substitutes</strong>{" "}
                    &mdash; Other Apple Authorized Resellers serving
                    businesses in the Tri-State area and nationally. Most
                    operated with consumer-grade storefronts, thin service
                    layers, and zero brand differentiation. They competed
                    almost entirely on price, which is a losing strategy when
                    Apple controls reseller margins.
                  </li>
                  <li>
                    <strong className="font-bold">
                      Enterprise procurement giants
                    </strong>{" "}
                    &mdash; National resellers with massive catalogs, strong
                    logistics infrastructure, established enterprise sales
                    teams. But impersonal, slow to respond to mid-market
                    needs, and lacking localized relationships.
                  </li>
                  <li>
                    <strong className="font-bold">
                      Managed service providers
                    </strong>{" "}
                    &mdash; Regional IT firms that bundle deployment with
                    ongoing support. Strong on service, but most lack Apple
                    Authorized Reseller status and can&rsquo;t offer programs
                    like AppleCare for Enterprise or Automated Device
                    Enrollment.
                  </li>
                </ol>
                <p>I evaluated competitors across four dimensions:</p>
                <ol className="flex list-decimal flex-col gap-6 pl-6 lg:pl-[46px]">
                  <li>
                    <strong className="font-bold">
                      Competitive feature matrix
                    </strong>{" "}
                    &mdash; Mapped every competitor&rsquo;s service claims,
                    pricing models, and published capabilities side by side.
                    Exposed where the market was crowded (hardware resale) and
                    where it was empty (bundled procurement + deployment +
                    managed support).
                  </li>
                  <li>
                    <strong className="font-bold">Package analysis</strong>{" "}
                    &mdash; Studied how competitors structure and present
                    their offerings. Most sold individual products with
                    services as an afterthought. Almost none led with
                    solutions.
                  </li>
                  <li>
                    <strong className="font-bold">Positioning map</strong>{" "}
                    &mdash; Plotted competitors on two axes: price vs. service
                    depth and local vs. national reach. Revealed a wide-open
                    quadrant: high service depth + regional focus. No one in
                    the Tri-State area owned that space.
                  </li>
                  <li>
                    <strong className="font-bold">
                      Service pattern library
                    </strong>{" "}
                    &mdash; Cataloged how competitors package and name their
                    services. This informed how I&rsquo;d later structure
                    AppleNJ&rsquo;s service pages to feel familiar to
                    enterprise buyers while being distinctly more
                    comprehensive.
                  </li>
                </ol>
                <p>
                  The takeaway: AppleNJ had a window to occupy a position no
                  competitor held &mdash; a regional, high-touch, full-service
                  Apple enterprise partner. Not the cheapest. Not the biggest.
                  The most complete.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Step 2: Business Positioning
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  With the competitive landscape mapped, I drafted three
                  positioning directions and pressure-tested each against
                  defensibility, revenue potential, and alignment with
                  Princeton IT Services&rsquo; existing strengths:
                </p>
                <div className="flex flex-col gap-6 lg:pl-[60px]">
                  <p>
                    <strong className="font-bold">Option A:</strong>{" "}
                    &ldquo;Lowest price Apple reseller&rdquo; Weak moat. Apple
                    controls reseller margins, so pricing differentiation is
                    razor-thin. Any competitor can match it. This is the
                    race-to-the-bottom the old site was already losing.
                  </p>
                  <p>
                    <strong className="font-bold">Option B:</strong>{" "}
                    &ldquo;Apple for businesses, done-for-you&rdquo; Strong
                    moat. Positions AppleNJ as a full-service partner &mdash;
                    procurement, deployment, management, and support.
                    Leverages the parent company&rsquo;s 20+ years of
                    enterprise IT infrastructure. Difficult for product-only
                    resellers to replicate.
                  </p>
                  <p>
                    <strong className="font-bold">Option C:</strong>{" "}
                    &ldquo;Industry-specific Apple deployments&rdquo; Strong
                    moat with scalable messaging. Allows vertical-specific
                    positioning (healthcare, education, finance) that
                    resonates deeply with each segment. But requires deep
                    vertical content that wasn&rsquo;t feasible in a 6-week
                    engagement.
                  </p>
                  <p>
                    Selected direction: Option B with elements of C. The core
                    positioning would be the full-service
                    &ldquo;done-for-you&rdquo; enterprise partner, with
                    industry-specific messaging woven into key pages
                    (Industries page, landing page community section) to
                    demonstrate vertical awareness without overcommitting to
                    content the team couldn&rsquo;t maintain.
                  </p>
                </div>
                <p>This translated into three messaging pillars:</p>
                <ol className="flex list-decimal flex-col gap-6 pl-6 lg:pl-[60px]">
                  <li>
                    Cost efficiency &mdash; Volume discounts, bundled
                    procurement, and consolidated vendor relationships that
                    reduce total cost of ownership.
                  </li>
                  <li>
                    Reduced operational burden &mdash; Deployment, lifecycle
                    management, and ongoing support handled end-to-end, so
                    internal IT teams can focus on higher-value work.
                  </li>
                  <li>
                    Risk mitigation &mdash; Enterprise-grade support coverage
                    through AppleCare for Enterprise, secure device
                    enrollment, and compliance-ready processes backed by a
                    vendor with Fortune 10 experience.
                  </li>
                </ol>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Step 3: Select Products &amp; Services
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  I built the product portfolio, evaluating every potential
                  offering against three criteria:
                </p>
                <ol className="flex list-decimal flex-col gap-6 pl-6 lg:pl-[60px]">
                  <li>
                    <strong className="font-bold">Enterprise demand</strong>{" "}
                    &mdash; Is there proven volume from organizations buying
                    this at scale?
                  </li>
                  <li>
                    <strong className="font-bold">
                      Attach rate potential
                    </strong>{" "}
                    &mdash; Does this product create upsell pathways to
                    services, accessories, or support plans?
                  </li>
                  <li>
                    <strong className="font-bold">
                      Margin and volume feasibility
                    </strong>{" "}
                    &mdash; Can AppleNJ move enough units at viable margins to
                    justify the catalog space?
                  </li>
                </ol>
                <p>
                  The capability gap audit made one thing clear: Princeton IT
                  Services&rsquo; managed IT, deployment, Fortune 10-grade
                  support &mdash; was the real competitive advantage. The
                  product portfolio needed to reflect that, leading with
                  services as the core differentiator.
                </p>
                <p>This translated into these selections:</p>
                <div className="flex flex-col gap-6 lg:pl-[60px]">
                  <p>
                    <strong className="font-bold">Core hardware</strong> (high
                    enterprise volume): Mac (MacBook Air M2&ndash;M4, MacBook
                    Pro M4, Mac Mini, iMac), iPad (Air, Mini, Pro), AirPods
                    (3rd Gen, 4, Pro 2, Max)
                  </p>
                  <p>
                    <strong className="font-bold">Core services</strong>{" "}
                    (primary differentiators): Setup &amp; Customer Support,
                    Managed IT Services, AppleCare for Enterprise, Automated
                    Device Enrollment, Apple Configure-to-Order, Trade-In
                    Program
                  </p>
                  <p>
                    <strong className="font-bold">
                      Strategic exclusions:
                    </strong>{" "}
                    Apple Watch, HomePod, Apple TV. Consumer-oriented products
                    with negligible enterprise demand that added catalog
                    complexity and diluted the B2B positioning. Cutting them
                    wasn&rsquo;t a limitation &mdash; it was a signal. It told
                    enterprise buyers: &ldquo;We know what matters to your
                    business.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Step 4: Bundles
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  Bundles were a strategic sales tool designed to solve two
                  problems simultaneously: reduce decision fatigue for buyers
                  and increase average order value for AppleNJ.
                </p>
                <p>
                  <strong className="font-bold">Research:</strong> I studied
                  how competitors package their offerings and identified three
                  repeatable bundle archetypes used across the industry:
                </p>
                <ol className="flex list-decimal flex-col gap-2 pl-6 lg:pl-[60px]">
                  <li>equip by function</li>
                  <li>equip by industry</li>
                  <li>equip a space (like a classroom or meeting room)</li>
                </ol>
                <p>
                  Most competitors didn&rsquo;t use bundles at all, which
                  meant this was a low-effort, high-differentiation
                  opportunity.
                </p>
                <p>
                  Each bundle was mapped to a specific buyer job-to-be-done:
                </p>
                <ol className="flex list-decimal flex-col gap-6 pl-6 lg:pl-[60px]">
                  <li>
                    Education Bundle &mdash; iPad + classroom accessories +
                    enrollment readiness. Job: &ldquo;Equip a classroom fast,
                    at scale, within budget.&rdquo;
                  </li>
                  <li>
                    Healthcare Bundle &mdash; Devices + durable cases +
                    enterprise support + lifecycle management. Job:
                    &ldquo;Standardize clinician devices with compliance-ready
                    coverage.&rdquo;
                  </li>
                  <li>
                    Remote Work Bundle &mdash; MacBook Air + peripherals +
                    setup support. Job: &ldquo;Onboard a distributed team
                    without burdening internal IT.&rdquo;
                  </li>
                  <li>
                    Enterprise Starter Bundle &mdash; Mixed hardware +
                    AppleCare + deployment. Job: &ldquo;Stand up Apple
                    infrastructure for a growing organization from day
                    one.&rdquo;
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
