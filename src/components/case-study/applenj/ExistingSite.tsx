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
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={2} />

          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:ml-[4px] lg:max-w-[990px]">
            <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
              The Existing Site
            </h3>
            <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:text-[24px]">
              <p>
                Apple.tech365.io &mdash; the platform I was brought in to
                replace.
              </p>
              <p>
                No service information, no conversion pathway, no brand
                identity, consumer facing product catalog, India phone number
                on a US site.
              </p>
              <p>5 monthly visits.</p>
              <p>This was the starting point.</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[890px] lg:mt-[100px]">
          <Image
            src="/images/applenj/apple-tech365-io-1-1.png"
            alt="Screenshot of the original apple.tech365.io site — a consumer-focused Apple reseller storefront with no service information, no conversion pathway, and an India phone number on a US site."
            width={890}
            height={4759}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 890px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
