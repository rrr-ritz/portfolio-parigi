import Image from "next/image";
import Link from "next/link";

export type ProjectCardData = {
  slug: string;
  title: string;
  description: string;
  badge: string; // "10 min read" | "5 min read" | "Work In Progress"
  tags: string[];
  image: string; // path under /public
  imageAlt: string;
  imageClass?: string; // optional tailwind overrides for image sizing
  locked?: boolean;
};

type Props = { data: ProjectCardData };

function Bracket({ side }: { side: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 39 395"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={`h-[88%] w-auto ${side === "right" ? "-scale-x-100" : ""}`}
    >
      <path
        d="M23.8857 1.18543C23.8857 0.862739 17.8456 0.696505 8.69406 3.0217C5.47758 3.83893 5.58252 9.99728 4.97852 27.6544C4.37452 45.3115 3.16651 75.8344 2.22077 136.734C1.27503 197.633 0.628157 287.984 1.23795 334.528C1.84774 381.073 3.73379 381.073 9.46582 382.884C15.1978 384.695 24.7187 388.318 30.0287 390.505C35.3386 392.693 36.1491 393.335 37.9998 393.998"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProjectCard({ data }: Props) {
  const { slug, title, description, badge, tags, image, imageAlt, imageClass, locked } =
    data;

  return (
    <Link
      href={`/work/${slug}`}
      aria-label={`${title} case study${locked ? " — locked" : ""}`}
      className="group relative block rounded-[22px] border border-cream/10 bg-espresso-dark text-cream shadow-[0_12px_32px_-18px_rgba(0,0,0,0.7)] transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.75)]"
    >
      {/* Left bracket — opens right, enclosing the card */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-2 flex w-[14px] items-center justify-start text-cream/70 transition-transform duration-300 ease-out group-hover:-translate-x-1.5 md:-left-3 md:w-[22px] lg:-left-4 lg:w-[30px]"
      >
        <Bracket side="left" />
      </span>

      {/* Right bracket — opens left, enclosing the card */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -right-2 flex w-[14px] items-center justify-end text-cream/70 transition-transform duration-300 ease-out group-hover:translate-x-1.5 md:-right-3 md:w-[22px] lg:-right-4 lg:w-[30px]"
      >
        <Bracket side="right" />
      </span>

      <div className="relative grid grid-cols-1 items-center gap-8 pl-10 pr-6 pb-10 pt-9 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:gap-14 md:pl-20 md:pr-12 md:pt-12 md:pb-12 lg:gap-16 lg:pl-[7%] lg:pr-[6%] lg:pt-[56px] lg:pb-[56px] xl:pt-[72px] xl:pb-[72px]">
        {/* Text column */}
        <div className="relative z-10 flex flex-col">
          <h3 className="font-sans text-4xl uppercase leading-[1.1] md:text-[52px] lg:text-[64px] xl:text-[78px]">
            {title}
          </h3>

          <span className="mt-5 inline-flex w-max items-center rounded-full bg-cream px-4 py-1.5 font-serif text-[13px] text-espresso-dark md:text-[14px]">
            {badge}
          </span>

          <p className="mt-7 max-w-[46ch] font-serif leading-[1.38] text-[16px] md:text-[22px] lg:text-[26px] xl:text-[30px]">
            {description}
          </p>

          {tags.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-3 md:mt-12 lg:mt-14">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex items-center rounded-full border border-cream px-5 py-2 font-serif text-[14px] md:text-[17px] lg:text-[20px] xl:text-[22px]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image column */}
        <div className="relative flex min-h-[200px] items-center justify-center md:min-h-[280px] lg:min-h-[360px] xl:min-h-[420px]">
          <div className={`relative aspect-[489/307] w-full overflow-hidden ${imageClass ?? ""}`}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 45vw, 640px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
