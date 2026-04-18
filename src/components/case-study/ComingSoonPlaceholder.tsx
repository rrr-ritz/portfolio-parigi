import Link from "next/link";

type Props = {
  title: string;
};

export function ComingSoonPlaceholder({ title }: Props) {
  return (
    <main
      id="main"
      className="flex min-h-[70vh] items-center justify-center bg-cream px-6 py-24 md:py-32"
    >
      <div className="flex max-w-[640px] flex-col items-center text-center">
        <p className="mb-6 font-serif text-[15px] uppercase tracking-[0.24em] text-copper md:text-[16px]">
          Case Study
        </p>
        <h1 className="font-sans text-[44px] uppercase leading-[1.05] tracking-[0.01em] text-espresso md:text-[72px] lg:text-[96px]">
          {title}
        </h1>
        <p className="mt-8 font-serif text-[20px] leading-[1.4] text-espresso-muted md:text-[24px]">
          This case study is coming soon.
        </p>
        <Link
          href="/work"
          className="mt-12 inline-flex items-center gap-2 font-sans text-[15px] uppercase tracking-[0.14em] text-orange-bright transition-colors hover:text-orange"
        >
          <span aria-hidden="true">&larr;</span>
          Back to work
        </Link>
      </div>
    </main>
  );
}
