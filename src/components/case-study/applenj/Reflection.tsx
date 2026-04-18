import { SectionAnchor } from "./SectionRail";

export function Reflection() {
  return (
    <section
      id="reflection"
      aria-label="Reflection"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={10} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                Reflection
              </h3>
              <p className="font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                What I&rsquo;d keep, what I&rsquo;d change, and what I
                didn&rsquo;t expect to learn.
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Biggest Points of Reflection:
              </h4>
              <div className="flex flex-col gap-8 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[55px] lg:text-[24px]">
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Biggest win:</strong>
                  </p>
                  <p>
                    The business strategy. The design only worked because the
                    foundation was right. Spending the first two weeks on
                    competitive analysis, capability audits, and positioning,
                    before touching Figma, meant every page had a reason to
                    exist and every section had a job to do. The other win was
                    building the design system early. It felt slow at first,
                    but by the second half of the project, new pages assembled
                    in a fraction of the time.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">
                      What I&rsquo;d do differently:
                    </strong>
                  </p>
                  <p>
                    Write real content before designing layouts. Placeholder
                    copy creates false confidence, sections look balanced with
                    lorem ipsum, then need to be respaced when real headlines
                    and descriptions are made. Content dictates hierarchy, not
                    the other way around.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">
                      What I&rsquo;m most proud of:
                    </strong>
                  </p>
                  <p>
                    This project changed direction constantly, scope expanding
                    from a website to a full business pivot, new service
                    requirements surfacing mid project. None of that was
                    planned for. I adapted quickly even when I had no playbook
                    for what was happening. That resilience mattered more than
                    any single design skill.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-bold">Biggest learning:</strong>
                  </p>
                  <p>
                    How to work with C-suite. Early on I presented design
                    decisions like a designer &mdash; visual hierarchy, user
                    patterns, brand consistency. None of it landed. I learned
                    to translate every recommendation into their language:
                    what does this do for revenue, what risk does this reduce,
                    what competitive gap does this close. I also learned when
                    to execute their vision, when to push back, and how to
                    earn the trust to do either.
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
