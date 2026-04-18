export type PitsSection = {
  index: number;
  id: string;
  label: string;
};

export const PITS_SECTIONS: PitsSection[] = [
  { index: 0, id: "overview", label: "Overview" },
  { index: 1, id: "context", label: "Context" },
  { index: 2, id: "existing-site", label: "The Existing Site" },
  { index: 3, id: "low-fid-planning", label: "Low Fid Planning" },
  { index: 4, id: "process", label: "Process" },
  { index: 5, id: "final-test", label: "The Final Test" },
];
