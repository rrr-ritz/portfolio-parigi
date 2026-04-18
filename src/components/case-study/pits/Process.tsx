import Image from "next/image";
import { SectionAnchor } from "./SectionRail";

export function Process() {
  return (
    <section
      id="process"
      aria-label="From Sketch to Solution"
      className="relative bg-cream text-espresso-darker"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-16 md:px-12 md:py-20 lg:px-[57px] lg:pt-[66px] lg:pb-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <SectionAnchor index={4} />

          <div className="flex min-w-0 flex-1 flex-col gap-12 lg:ml-[4px] lg:max-w-[1253px] lg:gap-[70px]">
            <div className="flex flex-col gap-6">
              <h3 className="font-sans text-[32px] leading-[1.26] md:text-[40px] lg:text-[48px]">
                From Sketch to Solution
              </h3>
              <p className="font-serif text-[18px] leading-[1.39] md:text-[22px] lg:text-[26px]">
                Every iteration surfaced a new constraint. Every constraint
                sharpened the design. What followed was four rounds of
                building, testing, and advocating until the data made the
                decision for us.
              </p>
            </div>

            {/* Iteration 1 */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Iteration 1:
              </h4>

              <div className="flex flex-col gap-10 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:gap-[62px] lg:pl-[55px] lg:text-[24px]">
                <p>
                  Rather than defaulting to a single shared direction, both
                  interns developed independent concepts in parallel. The goal
                  was to solving the same problem differently.
                </p>

                {/* My Direction */}
                <div className="flex flex-col gap-6">
                  <p className="font-bold">
                    My Direction - Subdivision Visibility
                  </p>
                  <div className="flex flex-col gap-6 lg:pl-[66px]">
                    <p>
                      A dark, immersive hero anchored by a bold headline and
                      clear value proposition. Service category tags positioned
                      for scannability. Single CTA. Clean. Directed.
                    </p>
                    <p>
                      Below the hero: horizontal flip cards with all five
                      subdivisions &mdash; no scroll required, no interaction
                      barrier between a visitor and a conversion path.
                    </p>
                    <div className="w-full max-w-[510px]">
                      <Image
                        src="/images/pits/image-92.png"
                        alt="Iteration 1 hero concept — dark immersive layout with bold headline, category tags, and single CTA."
                        width={1020}
                        height={498}
                        className="h-auto w-full"
                        sizes="(max-width: 768px) 100vw, 510px"
                      />
                    </div>
                  </div>
                </div>

                {/* Co-Intern's Direction */}
                <div className="flex flex-col gap-6">
                  <p className="font-bold">
                    Co-Intern&rsquo;s Direction - Content Rich Divisions
                  </p>
                  <div className="flex flex-col gap-6 lg:pl-[66px]">
                    <p>
                      A lighter layout leading with the brand name and a trio
                      of punchy descriptors. Subdivision logos presented as a
                      scrolling row beneath the hero, with expanded division
                      content accessible below.
                    </p>
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[60px]">
                      <div className="w-full lg:w-[423px] lg:flex-none">
                        <Image
                          src="/images/pits/image-96.png"
                          alt="Co-intern's hero concept — lighter brand-led layout with punchy descriptors."
                          width={846}
                          height={764}
                          className="h-auto w-full"
                          sizes="(max-width: 768px) 100vw, 423px"
                        />
                      </div>
                      <div className="w-full lg:w-[580px] lg:flex-none">
                        <Image
                          src="/images/pits/image-95.png"
                          alt="Co-intern's subdivision content section — scrolling row with expanded division content below."
                          width={1160}
                          height={764}
                          className="h-auto w-full"
                          sizes="(max-width: 768px) 100vw, 580px"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* C-Suite Presentation */}
                <div className="flex flex-col gap-6">
                  <p className="font-bold">C-Suite Presentation</p>
                  <div className="flex flex-col gap-6 lg:pl-[66px]">
                    <p>
                      Both directions presented to leadership. The feedback was
                      unambiguous.
                    </p>
                    <p>
                      My hero was strongly preferred. The dark immersive
                      treatment, clear hierarchy, and single focused primary
                      CTA read as modern, credible, and on brand for an
                      enterprise B2B company. My co-intern&rsquo;s hero was set
                      aside.
                    </p>
                    <p>
                      Her subdivision card pattern was preferred. The expanded
                      content depth per division gave stakeholders confidence
                      that visitors would understand what each business line
                      actually does.
                    </p>
                    <p>Decision: My hero. Her cards. Move forward together.</p>
                  </div>
                </div>

                {/* Heatmap Analysis */}
                <div className="flex flex-col gap-6">
                  <p className="font-bold">Heatmap Analysis</p>
                  <div className="flex flex-col gap-8 lg:pl-[66px]">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[29px]">
                      <div className="w-full lg:w-[540px] lg:flex-none">
                        <Image
                          src="/images/pits/image-98.png"
                          alt="Heatmap overlay on my hero design — attention distributed across headline, body, and division cards."
                          width={1080}
                          height={524}
                          className="h-auto w-full"
                          sizes="(max-width: 768px) 100vw, 540px"
                        />
                      </div>
                      <div className="w-full lg:w-[565px] lg:flex-none">
                        <Image
                          src="/images/pits/image-97.png"
                          alt="Heatmap overlay on co-intern's hero design — attention concentrated on headline and subheading zone."
                          width={1130}
                          height={524}
                          className="h-auto w-full"
                          sizes="(max-width: 768px) 100vw, 565px"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="font-bold">My Design:</p>
                      <div className="flex flex-col gap-6">
                        <p>
                          Strong headline fixation at 18.7% confirmed the value
                          proposition was landing. Body copy at 9.6% suggested
                          users were reading past the headline, a positive
                          retention signal. Division cards registered
                          meaningful secondary CTA engagement across all four
                          visible cards (5.8% &rarr; 14.2%), with attention
                          increasing left to right, confirming the horizontal
                          layout was successfully directing eyes toward
                          subdivisions.
                        </p>
                        <p>
                          The critical gap: primary CTA at 1.7%. The Request
                          FREE Consultation button was present but invisible
                          from an attention standpoint. On a page receiving
                          70,000 monthly visits, a 1.7% fixation rate on the
                          primary conversion action is a compounding problem.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="font-bold">Co-Intern&rsquo;s Design:</p>
                      <div className="flex flex-col gap-6">
                        <p>
                          Higher headline fixation at 22.9%. The large bold
                          title commanded strong attention. The subheading trio
                          captured 19.4% &mdash; the highest text fixation of
                          either design. But the attention pattern told a
                          concerning story: 42.3% of total predicted fixation
                          was absorbed by the headline and subheading zone
                          alone, leaving almost nothing for conversion.
                        </p>
                        <p>
                          Primary CTA at 3.1% &mdash; still critically
                          underperforming. The subdivision logo ticker
                          registered only 3.1% as a combined secondary CTA, all
                          six divisions condensed into a single passive
                          scrolling row, generating the same fixation as a
                          single button.
                        </p>
                        <p>
                          The right half of the design, stock photography of a
                          meeting room, captured significant residual attention
                          with zero conversion value. Classic visual dead
                          weight.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="flex flex-col gap-4">
                  <p className="font-bold">Key Takeaways</p>
                  <div className="flex flex-col gap-6">
                    <p>
                      My design converted attention into subdivision
                      engagement. Hers converted attention into brand
                      recognition. Neither fully solved the problem &mdash; but
                      they failed differently, and that difference was
                      instructive.
                    </p>
                    <div className="flex flex-col gap-3">
                      <p>What this meant for Iteration 2:</p>
                      <ul className="list-disc pl-8">
                        <li>
                          Keep my hero - the attention distribution across
                          headline, body, and divisions was the stronger
                          conversion architecture
                        </li>
                        <li>
                          Fix the CTA &mdash; 1.7% fixation is not acceptable.
                          Needs higher contrast, stronger visual weight, or
                          repositioning
                        </li>
                        <li>
                          Rethink the division row &mdash; logo format
                          compresses five business lines into a passive band
                          that generates zero engagement
                        </li>
                      </ul>
                    </div>
                    <p>
                      The merged direction was clear: my hero structure, her
                      division content depth, some revisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Iteration 2 */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Iteration 2:
              </h4>

              <div className="flex flex-col gap-10 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:gap-[62px] lg:pl-[49px] lg:text-[24px]">
                <p>
                  Following C-suite feedback, both interns merged their
                  strongest elements into a single unified direction. I
                  refined the hero. The other intern rebuilt the card section
                  with expanded division content.
                </p>

                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[74px]">
                  <div className="w-full lg:w-[591px] lg:flex-none">
                    <Image
                      src="/images/pits/image-99.png"
                      alt="Iteration 2 merged design — refined dark hero with sticky scroll division cards below."
                      width={1182}
                      height={1720}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 591px"
                    />
                  </div>
                  <div className="flex flex-col gap-6 lg:w-[514px] lg:flex-none">
                    <div className="flex flex-col gap-3">
                      <p className="font-bold">The Refined Hero</p>
                      <p>
                        Carried forward the dark immersive hero from Iteration
                        1 with key updates informed by the heatmap data.
                        Headline updated to &ldquo;Empowering Data-Driven
                        Growth with Smarter Cloud Solutions,&rdquo; sharper,
                        more B2B specific value proposition. Service category
                        pills repositioned horizontally below center. CTA
                        repositioned to the lower right with higher visual
                        contrast.
                      </p>
                      <p>Passed the Heatmap test with high marks!</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="font-bold">The Cards &mdash; Rebuilt</p>
                      <p>
                        Expanded from passive tiles to full division cards
                        &mdash; each with division name, category label, three
                        key service offerings, and a direct URL CTA.
                      </p>
                      <p>
                        Sticky scroll pattern: cards stack vertically,
                        expanding on scroll to reveal content. Significantly
                        more content depth than any previous iteration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="font-bold">The Problem Nobody Anticipated:</p>
                  <div className="flex flex-col gap-6">
                    <p>
                      The hero was modern. But the card aesthetic &mdash;
                      light backgrounds, blue accent typography, checklist
                      formatting &mdash; matched the visual language of the
                      existing legacy site beneath it. The seam between the
                      new hero and the card section was jarring. A visitor
                      scrolling down went from a modern dark immersive header
                      directly into what looked like the old website. It felt
                      lazy.
                    </p>
                    <p>
                      A visually inconsistent page communicates inconsistency
                      in the brand. For a B2B company trying to establish
                      credibility with enterprise buyers, that mismatch
                      undermined the exact impression the new hero was
                      designed to create.
                    </p>
                    <p>
                      <strong className="font-bold">C-Suite Feedback:</strong>
                    </p>
                    <p>
                      Liked the direction. Acknowledged the mismatch. Agreed
                      the card section needed to be brought forward visually
                      to match the hero&rsquo;s treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Iteration 3 */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Iteration 3:
              </h4>

              <div className="flex flex-col gap-10 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:gap-[62px] lg:pl-[49px] lg:text-[24px]">
                <div className="flex flex-col gap-6">
                  <p>
                    The visual mismatch from Iteration 2 had one clear fix:
                    rebuild the card section in a dark aesthetic that matched
                    the hero. We went back to Figma.
                  </p>
                  <p>
                    Cards were rebuilt with a dark theme. The visual language
                    now flowed from hero to card section without a jarring
                    seam. The logo bar between the hero and cards added a
                    transitional element that helped bridge the two zones.
                  </p>
                  <p>
                    Two variants produced. I produced the one on the left, one
                    that was more consistent with the old website. My
                    co-intern produced the one on the right, one that tied in
                    with the hero.
                  </p>
                </div>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[52px]">
                  <div className="w-full lg:w-[551px] lg:flex-none">
                    <Image
                      src="/images/pits/image-102.png"
                      alt="Iteration 3 variant — card section more consistent with the existing site."
                      width={1102}
                      height={802}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 551px"
                    />
                  </div>
                  <div className="w-full lg:w-[525px] lg:flex-none">
                    <Image
                      src="/images/pits/image-100.png"
                      alt="Iteration 3 variant — card section tied in with the dark hero aesthetic."
                      width={1050}
                      height={814}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 525px"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <p>
                    C-suite approved the first design. Dark aesthetic solved
                    the mismatch problem. We handed off the designs to the
                    developer.
                  </p>
                  <p className="font-bold">Then I raised a concern:</p>
                  <p>
                    Sticky scroll is a sequential reveal pattern. It rewards
                    patience and assumes investment. On a page where users
                    were already bouncing in 7 seconds, requiring them to
                    scroll through five stacked divisions to find the one they
                    care about introduces friction at the wrong moment.
                  </p>
                  <p>
                    A user who doesn&rsquo;t scroll past the first or second
                    card never sees divisions three, four, or five. On a page
                    receiving 70,000 monthly visits, that&rsquo;s a compounding
                    conversion loss.
                  </p>
                  <p>
                    The co-intern&rsquo;s sticky scroll variant prioritized
                    content depth. My argument was that content depth is
                    worthless if users never reach it.
                  </p>
                  <p>
                    The team agreed the concern was valid, but rather than
                    abandoning the sticky scroll direction entirely, they made
                    a more rigorous call. Develop both variants. Launch
                    simultaneously. Let real traffic data decide.
                  </p>
                </div>
              </div>
            </div>

            {/* Iteration 4 */}
            <div className="flex flex-col gap-8 lg:gap-[62px]">
              <h4 className="font-sans text-[24px] leading-[1.26] underline decoration-solid underline-offset-[6px] md:text-[28px] lg:text-[32px]">
                Iteration 4:
              </h4>

              <div className="flex flex-col gap-10 font-sans text-[17px] leading-[1.39] md:text-[20px] lg:gap-[62px] lg:pl-[49px] lg:text-[24px]">
                <p>
                  The new design incorporated five card displayed simultaneously
                  above the fold. No sticky scroll. No sequential reveal. All
                  five divisions visible, labeled, and clickable the moment a
                  visitor lands.
                </p>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-[31px]">
                  <div className="w-full lg:w-[597px] lg:flex-none">
                    <Image
                      src="/images/pits/image-103.png"
                      alt="Iteration 4 — all five division cards visible simultaneously above the fold."
                      width={1194}
                      height={582}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 597px"
                    />
                  </div>
                  <div className="w-full lg:w-[547px] lg:flex-none">
                    <Image
                      src="/images/pits/image-101.png"
                      alt="Iteration 4 — expanded division card detail with direct URL CTA."
                      width={1094}
                      height={376}
                      className="h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 547px"
                    />
                  </div>
                </div>

                <p>
                  Both designs (iteration 3 and iteration 4) were developed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
