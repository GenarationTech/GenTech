export type Service = {
  slug: string;
  title: string;
  short: string;
  detail: string;
  deliverables: string[];
  icon: "code" | "phone" | "sparkles" | "layers" | "blocks" | "compass";
};

export const services: Service[] = [
  {
    slug: "software",
    title: "Software",
    short: "Web applications, business systems and custom software.",
    detail:
      "Purpose-built tools that replace spreadsheets, manual work and disconnected apps with one reliable system.",
    deliverables: ["Web applications", "Internal tools", "Business systems", "Custom software"],
    icon: "code",
  },
  {
    slug: "mobile",
    title: "Mobile",
    short: "Modern mobile applications and cross-platform experiences.",
    detail:
      "iOS and Android apps that feel native, share one codebase where it makes sense and connect cleanly to your backend.",
    deliverables: ["iOS & Android apps", "Cross-platform apps", "App backends", "Store releases"],
    icon: "phone",
  },
  {
    slug: "ai",
    title: "AI",
    short: "AI integrations, automation and AI-powered products.",
    detail:
      "Practical AI inside real products: assistants, document understanding, workflow automation and models wired into your data.",
    deliverables: ["AI integrations", "Workflow automation", "AI assistants", "AI-powered products"],
    icon: "sparkles",
  },
  {
    slug: "full-stack",
    title: "Full-Stack",
    short: "Frontend, backend, APIs, databases and complete systems.",
    detail:
      "End-to-end delivery from interface to infrastructure, so the whole system is designed as one thing.",
    deliverables: ["Frontend", "Backend & APIs", "Databases", "Cloud deployment"],
    icon: "layers",
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    short: "Web3 applications and blockchain integrations.",
    detail:
      "Decentralised applications, smart-contract integrations and wallet flows, built with the same product discipline as everything else.",
    deliverables: ["Web3 applications", "Smart-contract integration", "Wallet flows", "Token utilities"],
    icon: "blocks",
  },
  {
    slug: "consulting",
    title: "Consulting",
    short: "Architecture, technology strategy and digital transformation.",
    detail:
      "Clear technical direction before, during and after a build: architecture reviews, roadmaps and AI-readiness planning.",
    deliverables: ["Architecture", "Technology strategy", "AI readiness", "Digital transformation"],
    icon: "compass",
  },
];
