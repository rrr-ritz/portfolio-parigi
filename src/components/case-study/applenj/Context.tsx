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

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[59px] lg:max-w-[1219px] lg:gap-[60px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                Problem
              </h3>
              <div className="flex flex-col gap-2 font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                <p>Averaging ~5 unique visits per month.</p>
                <p>
                  The existing platform was invisible &mdash; generating
                  virtually no traffic, no leads, and no revenue.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[76px]">
              <h4 className="font-sans text-[24px] leading-[1.26] md:text-[28px] lg:text-[32px]">
                My Initial Assessment:
              </h4>

              <div className="flex flex-col gap-6 font-serif text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">No market fit.</strong> The
                  site operated as a consumer electronics storefront competing
                  directly with Apple.com, Best Buy, and Amazon &mdash; with
                  none of the brand equity, traffic, or pricing power to win.
                </p>
                <p>
                  <strong className="font-bold">Audience mismatch.</strong> The
                  platform served India and U.S. markets simultaneously under
                  the Tech365 brand, with an Indian phone number displayed to
                  American enterprise buyers. Trust was broken on first
                  impression.
                </p>
                <p>
                  <strong className="font-bold">No value proposition.</strong>{" "}
                  Nothing communicated why an organization should buy through
                  this reseller instead of going direct to Apple. The site
                  listed products &mdash; it never sold outcomes.
                </p>
                <p>
                  <strong className="font-bold">No conversion pathway.</strong>{" "}
                  There was no quote request form, no consultation flow, no way
                  for an enterprise buyer to say &ldquo;I need 500
                  devices.&rdquo; The only CTAs were consumer-style
                  &ldquo;Buy&rdquo; and &ldquo;Learn More&rdquo; buttons.
                </p>
                <p>
                  <strong className="font-bold">THE CAPABILITY GAP:</strong>{" "}
                  Princeton IT Services wasn&rsquo;t a scrappy startup trying
                  to break into the Apple reseller space &mdash; it was a 20+
                  year enterprise IT firm with a client roster that included JP
                  Morgan Chase, Citi, McGraw Hill Financial and more. The
                  company had built mission-critical infrastructure for Fortune
                  10 organizations. It had 1,000+ channel partnerships through
                  Tech365. It had managed IT capabilities &mdash; remote
                  monitoring, cloud migration, data backup, network security
                  &mdash; that most regional Apple resellers couldn&rsquo;t
                  touch. None of this existed anywhere on the Apple reseller
                  platform. The market didn&rsquo;t know what this company
                  actually was.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:gap-[64px]">
              <div className="flex flex-col gap-8 lg:flex-1 lg:gap-[67px]">
                <h4 className="font-sans text-[24px] leading-[1.26] md:text-[28px] lg:text-[32px]">
                  Challenges:
                </h4>
                <ul className="flex list-disc flex-col gap-3 pl-6 font-serif text-[17px] leading-[1.39] md:text-[20px] lg:text-[24px] lg:pl-[42px]">
                  <li>
                    Uncover why the platform was failing at both a strategic
                    and experiential level
                  </li>
                  <li>
                    Identify the right target customer and define their unmet
                    needs
                  </li>
                  <li>
                    Reposition the entire brand for the B2B enterprise market
                  </li>
                  <li>
                    Design a digital product that functions as the
                    company&rsquo;s primary lead generation engine
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-8 lg:flex-1 lg:gap-[67px]">
                <h4 className="font-sans text-[24px] leading-[1.26] md:text-[28px] lg:text-[32px]">
                  Constraints:
                </h4>
                <ul className="flex list-disc flex-col gap-3 pl-6 font-serif text-[17px] leading-[1.39] md:text-[20px] lg:text-[24px] lg:pl-[42px]">
                  <li>Solo designer &mdash; every decision was mine.</li>
                  <li>6 week timeline</li>
                  <li>Zero existing assets</li>
                  <li>Limited research budget</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[77px]">
              <h4 className="font-sans text-[24px] leading-[1.26] md:text-[28px] lg:text-[32px]">
                Goals:
              </h4>
              <div className="flex flex-col gap-6 font-serif text-[17px] leading-[1.39] md:text-[20px] lg:pl-[42px] lg:text-[24px]">
                <p>
                  <strong className="font-bold">Business Goal:</strong>{" "}
                  Transform a dead reseller division into a viable B2B
                  enterprise targeting the Tri-State area
                </p>
                <p>
                  <strong className="font-bold">Product Goal:</strong> Design a
                  lead-generating platform that earns trust and drives quote
                  requests
                </p>
                <p>
                  <strong className="font-bold">Experience Goal:</strong>{" "}
                  Conversion-focused but premium &mdash; it needed to feel
                  &ldquo;Apple-adjacent&rdquo; while doing the heavy lifting of
                  B2B sales
                </p>
                <p>
                  <strong className="font-bold">Brand Goal:</strong> New
                  identity from scratch. New design system. Scalable across 20+
                  pages and future growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
