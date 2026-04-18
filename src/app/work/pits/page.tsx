import type { Metadata } from "next";
import { Context } from "@/components/case-study/pits/Context";
import { ExistingSite } from "@/components/case-study/pits/ExistingSite";
import { FinalTest } from "@/components/case-study/pits/FinalTest";
import { Hero } from "@/components/case-study/pits/Hero";
import { LowFidPlanning } from "@/components/case-study/pits/LowFidPlanning";
import { Overview } from "@/components/case-study/pits/Overview";
import { Process } from "@/components/case-study/pits/Process";
import { Reflection } from "@/components/case-study/pits/Reflection";

export const metadata: Metadata = {
  title: "case study: Princeton IT Services",
  description:
    "Redesigned a high-traffic hero section for Princeton IT Services — data-driven iteration and live A/B testing.",
};

export default function PITSPage() {
  return (
    <main id="main">
      <Hero />
      <Overview />
      <Context />
      <ExistingSite />
      <LowFidPlanning />
      <Process />
      <FinalTest />
      <Reflection />
    </main>
  );
}
