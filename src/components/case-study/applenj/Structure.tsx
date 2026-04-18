import Image from "next/image";
import { SectionAnchor } from "./SectionRail";

export function Structure() {
  return (
    <section
      id="structure"
      aria-label="Structure"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={6} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[11px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                Structure
              </h3>
              <p className="font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                I shifted to defining the product&rsquo;s architecture &mdash;
                scoping every page, mapping user flows to conversion paths,
                and benchmarking features against real world references.
              </p>
            </div>

            {/* Mind Map */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Mind Map:
              </h4>
              <div className="flex flex-col gap-10 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[54px] lg:text-[24px]">
                <p>
                  Inventoried everything. The old site&rsquo;s pages, the
                  parent company&rsquo;s full service catalog, and competitor
                  site structures. Then cut anything that didn&rsquo;t serve
                  the target buyer or connect to a conversion path. What
                  survived was grouped by buyer intent and mapped with
                  cross-page relationships.
                </p>
                <div className="mx-auto w-full max-w-[839px]">
                  <Image
                    src="/images/applenj/image-79.png"
                    alt="Mind map of the site architecture — AppleNJ hub with branches for services, products, bundles, industries, and supporting pages."
                    width={839}
                    height={557}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 839px"
                  />
                </div>
              </div>
            </div>

            {/* User Flows */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                User Flows:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[54px] lg:text-[24px]">
                <p>
                  I mapped three primary flows, each aligned to a user
                  archetype identified in research:
                </p>
                <div className="flex flex-col gap-6 lg:pl-[35px]">
                  <div className="flex flex-col gap-1">
                    <p>
                      <strong className="font-bold">
                        &ldquo;I need reliability at scale&rdquo;
                      </strong>
                    </p>
                    <p>
                      Landing Page &rarr; All Services &rarr; Managed IT
                      Services &rarr; AppleCare for Enterprise &rarr; Request
                      a Quote
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>
                      <strong className="font-bold">
                        &ldquo;I need this handled so I can focus on
                        product.&rdquo;
                      </strong>
                    </p>
                    <p>
                      Landing Page &rarr; Bundle Packages &rarr; selects a
                      package (e.g., Remote Work Bundle) &rarr; Request a
                      Quote
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>
                      <strong className="font-bold">
                        &ldquo;I need to stretch every dollar.&rdquo;
                      </strong>
                    </p>
                    <p>
                      Landing Page &rarr; Volume Pricing &amp; Discounts
                      &rarr; reviews tier structure &rarr; Request a Quote
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparative Analysis */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Comparative Analysis:
              </h4>
              <div className="flex flex-col gap-10 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[54px] lg:text-[24px]">
                <p>
                  I identified the core features the site would need &mdash;
                  hero sections, product grids, testimonials, FAQ sections
                  &mdash; and collected inspiration for each.
                </p>
                <p>
                  Three directions were evaluated per feature, each annotated
                  with notes on what to pull and what to leave. This became
                  the decision log that shaped the wireframes &mdash; every
                  section of the final landing page maps back to a specific
                  selection made here.
                </p>
                <div className="w-full max-w-[986px]">
                  <Image
                    src="/images/applenj/image-80.png"
                    alt="Comparative analysis grid — three directions evaluated side by side for each core site feature."
                    width={986}
                    height={684}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 986px"
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
