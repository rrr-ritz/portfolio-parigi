import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.globalTimeline.timeScale(100);
  }
}

export const fadeUpPreset = {
  from: { opacity: 0, y: 20 },
  to: {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  },
  scrollTrigger: { start: "top 85%", toggleActions: "play none none none" },
};

export const staggerPreset = { each: 0.1 };

export const clipRevealFrom = "inset(100% 0 0 0)";
export const clipRevealTo = "inset(0 0 0 0)";
export const clipRevealDuration = 0.8;
export const clipRevealEase = "power2.inOut";

export const heroSplitPreset = {
  from: { opacity: 0, y: 24 },
  to: {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.03,
    delay: 0.3,
  },
};

export { gsap, ScrollTrigger };
