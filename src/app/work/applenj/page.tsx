import type { Metadata } from "next";
import { BusinessRedesign } from "@/components/case-study/applenj/BusinessRedesign";
import { Context } from "@/components/case-study/applenj/Context";
import { ExistingSite } from "@/components/case-study/applenj/ExistingSite";
import { Hero } from "@/components/case-study/applenj/Hero";
import { Overview } from "@/components/case-study/applenj/Overview";
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
    </main>
  );
}
