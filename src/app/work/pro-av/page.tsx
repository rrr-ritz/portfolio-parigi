import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LockScreen } from "@/components/ui/LockScreen";
import { WorkInProgress } from "@/components/case-study/WorkInProgress";

export const metadata: Metadata = {
  title: "case study: Princeton Pro AV",
  description:
    "0-to-1 design for Princeton Pro AV — business idea to a 90+ wireframe design system.",
};

export default async function ProAVPage() {
  const unlocked =
    (await cookies()).get("portfolio_unlocked")?.value === "true";
  return unlocked ? (
    <WorkInProgress />
  ) : (
    <LockScreen title="Princeton Pro AV" />
  );
}
