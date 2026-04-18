import { SectionAnchor } from "./SectionRail";

export function Overview() {
  return (
    <section
      id="overview"
      aria-label="Overview"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-24 lg:px-[57px] lg:pt-[132px] lg:pb-[120px]">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={0} />

          <div className="flex min-w-0 flex-col gap-10 lg:w-[371px] lg:flex-none lg:pt-[117px]">
            <h2 className="font-sans text-[40px] leading-[1.26] md:text-[52px] lg:text-[64px]">
              A failing business.
              <br />
              Lets fix it up.
            </h2>

            <ul className="flex flex-wrap gap-3">
              <li className="inline-flex items-center rounded-[32px] border border-copper px-[18px] py-[10px] font-serif text-[18px] leading-[1.15] text-copper md:text-[20px] lg:text-[22px]">
                Strategy
              </li>
              <li className="inline-flex items-center rounded-[32px] border border-copper px-[18px] py-[10px] font-serif text-[18px] leading-[1.15] text-copper md:text-[20px] lg:text-[22px]">
                UX Research
              </li>
            </ul>
          </div>

          <div className="flex min-w-0 flex-col gap-10 lg:ml-[177px] lg:w-[673px] lg:flex-none lg:pt-[140px]">
            <p className="font-sans text-[22px] font-bold leading-[1.375] md:text-[28px] lg:text-[32px]">
              A ground up business transformation. New strategy. New brand. New
              product. 4 weeks. Solo designer.
            </p>

            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                The Scope
              </h3>

              <div className="flex flex-col gap-6 font-serif text-[18px] leading-[1.39] md:text-[21px] lg:text-[24px]">
                <p>
                  I was brought on as the only designer to diagnose, reimagine,
                  and redesign a failing business.
                </p>
                <p>
                  I led efforts across market positioning, brand identity,
                  service architecture, content strategy, and a complete
                  multi-page responsive web experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
