import type { Metadata } from "next";
import { Hero } from "@/components/case-study/applenj/Hero";
import { Overview } from "@/components/case-study/applenj/Overview";

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
    </main>
  );
}
