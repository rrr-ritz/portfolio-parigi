import type { Metadata } from "next";
import { ComingSoonPlaceholder } from "@/components/case-study/ComingSoonPlaceholder";

export const metadata: Metadata = {
  title: "Princeton IT Services | Pari Gill — Product Designer",
  description:
    "Redesigned a high-traffic hero section for Princeton IT Services — data-driven iteration and live A/B testing.",
};

export default function PITSPage() {
  return <ComingSoonPlaceholder title="Princeton IT Services" />;
}
