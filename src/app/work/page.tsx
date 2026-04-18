import type { Metadata } from "next";
import { ProjectsSection } from "@/components/landing/ProjectsSection";

export const metadata: Metadata = {
  title: "works | Pari Gill",
  description:
    "Selected product design case studies by Pari Gill — brand identity, UX research, data-driven design.",
};

export default function WorkPage() {
  return <ProjectsSection headingLevel="h1" />;
}
