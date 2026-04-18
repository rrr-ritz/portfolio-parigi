import type { Metadata } from "next";
import { ComingSoonPlaceholder } from "@/components/case-study/ComingSoonPlaceholder";

export const metadata: Metadata = {
  title: "AppleNJ | Pari Gill — Product Designer",
  description:
    "A ground up business transformation for AppleNJ — brand, product strategy, and website.",
};

export default function AppleNJPage() {
  return <ComingSoonPlaceholder title="AppleNJ" />;
}
