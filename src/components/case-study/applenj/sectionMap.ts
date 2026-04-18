export type ApplenjSection = {
  index: number;
  id: string;
  label: string;
};

export const APPLENJ_SECTIONS: ApplenjSection[] = [
  { index: 0, id: "overview", label: "Overview" },
  { index: 1, id: "context", label: "Context" },
  { index: 2, id: "existing-site", label: "The Existing Site" },
  { index: 3, id: "business-redesign", label: "Business Redesign" },
  { index: 4, id: "the-user", label: "The User" },
  { index: 5, id: "creative-direction", label: "Creative Direction" },
  { index: 6, id: "structure", label: "Structure" },
  { index: 7, id: "design-direction", label: "Design Direction" },
  { index: 8, id: "testing-validation", label: "Testing & Validation" },
  { index: 9, id: "final-product", label: "The Final Product   (Before Vs After)" },
  { index: 10, id: "reflection", label: "Reflection" },
];
