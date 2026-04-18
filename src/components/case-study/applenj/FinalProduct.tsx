import Image from "next/image";
import { SectionAnchor } from "./SectionRail";

export function FinalProduct() {
  return (
    <section
      id="final-product"
      aria-label="The Final Product"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={9} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                The Final Product
              </h3>
              <p className="font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                The approved landing page and the full 20+ page system built
                from it &mdash; every page designed to serve a specific buyer
                need and funnel toward a quote request.
              </p>
            </div>

            {/* The Landing Page */}
            <div className="flex flex-col gap-8 lg:gap-[40px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[46px] lg:text-[32px]">
                The Landing Page:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[46px] lg:text-[24px]">
                <p className="lg:max-w-[633px]">
                  The final landing page &mdash; built from six iterations,
                  informed by competitive analysis, user research, and direct
                  user testing. Every section earns its position.
                </p>
              </div>
            </div>

            {/* Before VS After */}
            <div className="flex flex-col gap-8 lg:gap-[40px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[46px] lg:text-[32px]">
                Before VS After:
              </h4>
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[40px] lg:pl-[46px]">
                <div className="w-full lg:w-[588px] lg:flex-none">
                  <Image
                    src="/images/applenj/apple-tech365-io-1-2.png"
                    alt="Before — the existing apple.tech365.io site, minimal and template-like."
                    width={588}
                    height={3146}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 588px"
                  />
                </div>
                <div className="w-full lg:w-[571px] lg:flex-none">
                  <Image
                    src="/images/applenj/landing-page-b-1.png"
                    alt="After — the final AppleNJ landing page with complete brand system, content hierarchy, and conversion path."
                    width={571}
                    height={4017}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 571px"
                  />
                </div>
              </div>
            </div>

            {/* The Remaining Pages */}
            <div className="flex flex-col gap-8 lg:gap-[40px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:pl-[26px] lg:text-[32px]">
                The Remaining Pages:
              </h4>
              <div className="flex flex-col gap-10 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[26px] lg:text-[24px]">
                <div className="flex flex-col gap-6">
                  <p>
                    The landing page established the design language. From
                    there I built out the full site &mdash; All Services, Setup
                    &amp; Support, Managed IT Services, AppleCare for
                    Enterprise, Automated Device Enrollment, individual product
                    pages, Bundle Packages, Volume Pricing &amp; Discounts,
                    Industries, About Us, Blog, and Request a Quote.
                  </p>
                  <p>
                    Each page follows the same component system and visual
                    hierarchy, adapted to its specific content needs and
                    position in the buyer journey.
                  </p>
                </div>
                <div className="w-full">
                  <Image
                    src="/images/applenj/image-81.png"
                    alt="Overview of the full AppleNJ product suite — Mac, iPad, AirPods, Apple TV, and Apple Watch product pages."
                    width={1316}
                    height={870}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 1316px"
                  />
                </div>
                <div className="w-full">
                  <Image
                    src="/images/applenj/image-82.png"
                    alt="Overview of the remaining AppleNJ pages — services, solutions, industries, about, and supporting pages."
                    width={1316}
                    height={924}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 1316px"
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
