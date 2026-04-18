import type { Metadata } from "next";
import { ComingSoonPlaceholder } from "@/components/case-study/ComingSoonPlaceholder";

export const metadata: Metadata = {
  title: "Hungie | Pari Gill — Product Designer",
  description:
    "Brand and wireframes for Hungie — an AI-powered healthy food engagement experience.",
};

export default function HungiePage() {
  return <ComingSoonPlaceholder title="Hungie" />;
}
