import type { Metadata } from "next";
import { ComingSoonPlaceholder } from "@/components/case-study/ComingSoonPlaceholder";

export const metadata: Metadata = {
  title: "NSCC — Hack4Impact | Pari Gill — Product Designer",
  description:
    "Leading design quality for a school climate assessment platform serving 3,000+ schools through Hack4Impact.",
};

export default function NSCCPage() {
  return <ComingSoonPlaceholder title="NSCC — Hack4Impact" />;
}
