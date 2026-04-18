import type { Metadata } from "next";
import { Hero } from "@/components/case-study/pits/Hero";
import { Overview } from "@/components/case-study/pits/Overview";

export const metadata: Metadata = {
  title: "Princeton IT Services | Pari Gill — Product Designer",
  description:
    "Redesigned a high-traffic hero section for Princeton IT Services — data-driven iteration and live A/B testing.",
};

export default function PITSPage() {
  return (
    <main id="main">
      <Hero />
      <Overview />
    </main>
  );
}
