import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LockScreen } from "@/components/ui/LockScreen";
import { WorkInProgress } from "@/components/case-study/WorkInProgress";

export const metadata: Metadata = {
  title: "case study: Hungie",
  description:
    "Brand and wireframes for Hungie — an AI-powered healthy food engagement experience.",
};

export default async function HungiePage() {
  const unlocked =
    (await cookies()).get("portfolio_unlocked")?.value === "true";
  return unlocked ? <WorkInProgress /> : <LockScreen title="Hungie" />;
}
