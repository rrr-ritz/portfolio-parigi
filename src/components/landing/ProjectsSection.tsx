"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations";
import { ProjectCard, type ProjectCardData } from "./ProjectCard";

const PROJECTS: ProjectCardData[] = [
  {
    slug: "applenj",
    title: "AppleNJ",
    description:
      "A ground up business transformation. New product-service strategy. New market position. New brand identity. New website design. 6 weeks, solo designer.",
    badge: "10 min read",
    tags: ["Business Strategy", "Brand Identity", "End-to-end"],
    image: "/images/landing/image-106.png",
    imageAlt: "AppleNJ website mockup on laptop",
  },
  {
    slug: "pits",
    title: "Princeton IT Services",
    description:
      "Redesigned a high traffic hero section generating near-zero conversions. Led research, design, testing, and collaboration with C-suite and engineers.",
    badge: "5 min read",
    tags: ["Data Driven Design", "User Testing", "UX Research"],
    image: "/images/landing/image-108.png",
    imageAlt: "Princeton IT Services redesigned hero on laptop",
  },
  {
    slug: "hungie",
    title: "Hungie",
    description:
      "Designed brand and wireframes for an AI powered startup — applied design psychology and behavioral principles to build gamified engagement loops, reinforce healthy habit formation, and craft a playful food health consciousness experience.",
    badge: "Work In Progress",
    tags: ["Design Psychology", "Behavioral Principles", "AI Design"],
    image: "/images/landing/image-110.png",
    imageAlt: "Hungie app screens",
    imageClass: "aspect-[310/334] max-w-[310px]",
    locked: true,
  },
  {
    slug: "pro-av",
    title: "Princeton Pro AV",
    description:
      "0-to-1 design, taking the project from business idea, to fully functional business with a 90+ wireframe design.",
    badge: "Work In Progress",
    tags: ["Business Strategy", "Brand Identity", "End-to-end"],
    image: "/images/landing/image-59-removebg-preview-1.png",
    imageAlt: "Princeton Pro AV website mockup",
    locked: true,
  },
  {
    slug: "nscc",
    title: "The Children's Cancer Foundation",
    description:
      "Complete redesign of grant application portal, allowing quick and convenient distribution of $1M+ in cancer research grants annually.",
    badge: "Work In Progress",
    tags: [],
    image: "/images/landing/image-104.png",
    imageAlt: "Children's Cancer Foundation grant portal mockup",
    locked: true,
  },
];

export function ProjectsSection() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const cards = root.querySelectorAll("[data-project-card]");
      gsap.from(cards, {
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="main"
      aria-label="Selected projects"
      className="relative bg-espresso-dark py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-14 xl:px-20">
        <h2 className="mb-12 text-center font-sans text-4xl uppercase tracking-[0.02em] text-cream md:mb-16 md:text-[56px] lg:mb-20 lg:text-[80px] xl:text-[96px]">
          Projects
        </h2>

        <ul className="flex flex-col gap-10 md:gap-14 lg:gap-20 xl:gap-[96px]">
          {PROJECTS.map((p) => (
            <li key={p.slug} data-project-card>
              <ProjectCard data={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
