import type { Metadata } from "next";
import { ProjectsSection } from "@/components/landing/ProjectsSection";

export const metadata: Metadata = {
  title: "Work | Pari Gill — Product Designer",
  description:
    "Selected product design case studies by Pari Gill — brand identity, UX research, data-driven design.",
};

export default function WorkPage() {
  return <ProjectsSection headingLevel="h1" />;
}
