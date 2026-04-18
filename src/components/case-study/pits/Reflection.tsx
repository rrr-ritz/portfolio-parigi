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
          <SectionAnchor index={6} />

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

            {/* What This Project Taught Me */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                What This Project Taught Me:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[50px] lg:text-[24px]">
                <p>
                  Designing one section of a website is never actually
                  isolated.
                </p>
                <p>
                  Every decision made throughout this project &mdash; card
                  style, background treatment, typography weight, interaction
                  pattern &mdash; had to solve two problems simultaneously.
                  The section itself. And its relationship to everything
                  surrounding it that we couldn&rsquo;t touch.
                </p>
                <p>
                  That constraint was the most valuable thing this project
                  gave me. Not because it was solved cleanly, but because it
                  wasn&rsquo;t. Designing within limits you didn&rsquo;t
                  create, for a system you can&rsquo;t fully control, is
                  closer to real design work than any brief without
                  constraints. I left this project understanding that more
                  deeply.
                </p>
              </div>
            </div>

            {/* What I'd Do Differently */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                What I&rsquo;d Do Differently:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[50px] lg:text-[24px]">
                <p>
                  I&rsquo;d make my case earlier &mdash; and more completely.
                </p>
                <p>
                  My direction was grounded in a clear UX rationale from the
                  start: above the fold visibility drives clicks, and any
                  interaction barrier on a high bounce page is a conversion
                  risk. That argument held up across every round of testing.
                  But in early stakeholder sessions, I presented the design
                  without fully articulating the thinking behind it.
                </p>
                <p>
                  Both directions had merit. The sticky scroll variant
                  wasn&rsquo;t wrong, the live numbers showed it drove real
                  engagement too. But data alone doesn&rsquo;t always capture
                  the full picture.
                </p>
                <p>
                  What the numbers couldn&rsquo;t show was the behavioral
                  reality underneath: users who don&rsquo;t scroll past the
                  fold never reach divisions three, four, or five. B2B buyers
                  landing on a homepage for the first time don&rsquo;t arrive
                  patient, they arrive skeptical, scanning, and ready to
                  leave.
                </p>
                <p>
                  That argument existed in my head from iteration one. I just
                  didn&rsquo;t put it on the table with enough force until the
                  later rounds. The lesson isn&rsquo;t about being more
                  aggressive, it&rsquo;s about being more complete.
                </p>
              </div>
            </div>

            {/* Working Directly With C-Suite */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Working Directly With C-Suite:
              </h4>
              <div className="flex flex-col gap-6 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:pl-[50px] lg:text-[24px]">
                <p>
                  Most design interns present to a manager who presents to
                  leadership. I presented to leadership directly. That changes
                  everything about how you communicate design.
                </p>
                <p>
                  C-suite isn&rsquo;t evaluating craft, they&rsquo;re
                  evaluating confidence and logic. They want to know what
                  problem it solves, why this solution over another, and what
                  it means for the business. A beautiful design with a weak
                  rationale loses in that room every time. A scrappier design
                  with a clear business case wins.
                </p>
                <p>
                  What I learned is that design advocacy at the executive
                  level is a different skill than design execution. You have
                  to translate visual decisions into business language in real
                  time, explain why a card layout drives subdivision clicks,
                  why a sticky scroll pattern creates friction at the wrong
                  moment in the user journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
