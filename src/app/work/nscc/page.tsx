import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LockScreen } from "@/components/ui/LockScreen";
import { WorkInProgress } from "@/components/case-study/WorkInProgress";

export const metadata: Metadata = {
  title: "NSCC — Hack4Impact | Pari Gill — Product Designer",
  description:
    "Leading design quality for a school climate assessment platform serving 3,000+ schools through Hack4Impact.",
};

export default async function NSCCPage() {
  const unlocked =
    (await cookies()).get("portfolio_unlocked")?.value === "true";
  return unlocked ? (
    <WorkInProgress />
  ) : (
    <LockScreen title="NSCC — Hack4Impact" />
  );
}
