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
      <div className="relative grid grid-cols-1 gap-6 px-6 pb-8 pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10 md:px-12 md:pt-8 lg:gap-0 lg:px-[7%] lg:pt-[30px] lg:pb-[40px]">
        {/* Text column */}
        <div className="relative z-10 flex flex-col">
          <h3 className="font-sans text-3xl uppercase leading-[1.2] md:text-[36px] lg:text-[43.27px]">
            {title}
          </h3>

          <span className="mt-4 inline-flex w-max items-center rounded-full bg-cream px-4 py-1 text-xs font-serif text-espresso-dark">
            {badge}
          </span>

          <p className="mt-6 font-serif leading-[1.35] text-[15px] md:text-[20px] lg:text-[23px]">
            {description}
          </p>

          {tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-3 md:mt-10 lg:mt-12">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex items-center rounded-full border border-cream px-4 py-[6px] font-serif text-[13px] md:text-[15px] lg:text-[17.75px]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image column */}
        <div className="relative flex min-h-[180px] items-center justify-center md:min-h-[240px] lg:min-h-[307px]">
          <div className={`relative aspect-[489/307] w-full max-w-[489px] overflow-hidden ${imageClass ?? ""}`}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 489px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Arrow marker, bottom-left — rotates on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/40 text-cream transition-transform duration-300 group-hover:translate-x-1 md:bottom-8 md:left-10 lg:bottom-[32px] lg:left-[40px]"
        >
          →
        </span>
      </div>
    </Link>
  );
}
