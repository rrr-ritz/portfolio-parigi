import type { Metadata } from "next";
import { BusinessRedesign } from "@/components/case-study/applenj/BusinessRedesign";
import { Context } from "@/components/case-study/applenj/Context";
import { CreativeDirection } from "@/components/case-study/applenj/CreativeDirection";
import { DesignDirection } from "@/components/case-study/applenj/DesignDirection";
import { ExistingSite } from "@/components/case-study/applenj/ExistingSite";
import { Hero } from "@/components/case-study/applenj/Hero";
import { Overview } from "@/components/case-study/applenj/Overview";
import { Structure } from "@/components/case-study/applenj/Structure";
import { TheUser } from "@/components/case-study/applenj/TheUser";

export const metadata: Metadata = {
  title: "AppleNJ | Pari Gill — Product Designer",
  description:
    "A ground-up business transformation for AppleNJ — new strategy, brand, and product in 4 weeks as the solo designer.",
};

export default function AppleNJPage() {
  return (
    <main id="main">
      <Hero />
      <Overview />
      <Context />
      <ExistingSite />
      <BusinessRedesign />
      <TheUser />
      <CreativeDirection />
      <Structure />
      <DesignDirection />
    </main>
  );
}
