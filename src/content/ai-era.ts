export type Actor = "human" | "human+ai" | "ai";

export type Stage = {
  id: "traditional" | "assisted" | "native";
  label: string;
  title: string;
  description: string;
  phases: { name: string; actor: Actor }[];
};

export const stages: Stage[] = [
  {
    id: "traditional",
    label: "Traditional",
    title: "Traditional development",
    description: "Every step is done by hand. Great craft, slow feedback, and quality depends entirely on available hours.",
    phases: [
      { name: "Design", actor: "human" },
      { name: "Code", actor: "human" },
      { name: "Test", actor: "human" },
      { name: "Document", actor: "human" },
      { name: "Ship", actor: "human" },
    ],
  },
  {
    id: "assisted",
    label: "AI-Assisted",
    title: "AI-assisted development",
    description: "Developers stay in charge, but AI handles the repetitive parts: drafts, tests, refactors and documentation.",
    phases: [
      { name: "Design", actor: "human" },
      { name: "Code", actor: "human+ai" },
      { name: "Test", actor: "human+ai" },
      { name: "Document", actor: "ai" },
      { name: "Ship", actor: "human" },
    ],
  },
  {
    id: "native",
    label: "AI-Native",
    title: "AI-native development",
    description: "AI is part of the product and the process. Teams design systems where models, agents and people share the work.",
    phases: [
      { name: "Design", actor: "human+ai" },
      { name: "Code", actor: "human+ai" },
      { name: "Test", actor: "ai" },
      { name: "Document", actor: "ai" },
      { name: "Ship", actor: "human+ai" },
    ],
  },
];

export const aiExamples: { title: string; body: string }[] = [
  { title: "AI-assisted coding", body: "Drafting, refactoring and explaining code with a developer reviewing every change." },
  { title: "AI debugging", body: "Tracing errors across logs and code to find root causes faster." },
  { title: "AI testing", body: "Generating and maintaining test suites that grow with the product." },
  { title: "AI documentation", body: "Documentation that stays in sync with what the system actually does." },
  { title: "AI automation", body: "Workflows that read, classify, route and act on information without manual steps." },
  { title: "AI-powered applications", body: "Products with assistants, search and decision support built in from day one." },
];
