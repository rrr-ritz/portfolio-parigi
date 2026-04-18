export function Hero() {
  return (
    <section
      aria-label="Princeton IT Services hero"
      className="relative bg-espresso-darker text-cream"
    >
      <div className="mx-auto w-full max-w-[1514px] px-6 py-14 md:px-12 md:py-20 lg:h-[543px] lg:px-[57px] lg:py-0">
        <div className="relative flex flex-col gap-10 lg:h-full lg:flex-row lg:items-start lg:justify-between lg:pt-[61px]">
          <div className="flex flex-col gap-12 lg:gap-0">
            <p className="max-w-[347px] font-serif text-[16px] leading-[1.1] md:text-[18px]">
              This wasn&rsquo;t a surface level UI refresh &mdash; it was a
              strategic business pivot.
            </p>
            <h1 className="font-sans text-[56px] leading-[1.26] md:text-[72px] lg:text-[80px]">
              Princeton IT Services
            </h1>
          </div>
          <p className="font-serif text-[15px] leading-[1.1] lg:mt-[144px] lg:text-[18px]">
            scroll to explore
          </p>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-cream/30"
      />
    </section>
  );
}
