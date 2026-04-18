"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  y?: number;
  duration?: number;
};

export function AnimatedSection({
  as: Tag = "section",
  children,
  className,
  stagger = false,
  delay = 0,
  y = 20,
  duration = 0.8,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const targets = stagger
        ? Array.from(root.children)
        : [root];

      gsap.from(targets, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: "power2.out",
        stagger: stagger ? 0.1 : undefined,
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
