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

export function ProjectCard({ data }: Props) {
  const { slug, title, description, badge, tags, image, imageAlt, imageClass, locked } =
    data;

  return (
    <Link
      href={`/work/${slug}`}
      aria-label={`${title} case study${locked ? " — locked" : ""}`}
      className="group relative block overflow-hidden rounded-[22px] bg-espresso-dark text-cream transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-20px_rgba(0,0,0,0.4)]"
    >
      {/* Hand-drawn bracket on the left edge (Figma Vector 9, mirrored) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 flex w-[3%] min-w-[18px] max-w-[28px] items-center justify-center"
      >
        <Image
          src="/images/landing/card-arrow.svg"
          alt=""
          width={39}
          height={395}
          className="h-[90%] w-auto -scale-x-100"
        />
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
