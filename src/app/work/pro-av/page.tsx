import type { Metadata } from "next";
import { ComingSoonPlaceholder } from "@/components/case-study/ComingSoonPlaceholder";

export const metadata: Metadata = {
  title: "Princeton Pro AV | Pari Gill — Product Designer",
  description:
    "0-to-1 design for Princeton Pro AV — business idea to a 90+ wireframe design system.",
};

export default function ProAVPage() {
  return <ComingSoonPlaceholder title="Princeton Pro AV" />;
}
