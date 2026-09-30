export type Category =
  | "Web Applications"
  | "Mobile Apps"
  | "Business Systems"
  | "AI Products"
  | "Automation"
  | "Blockchain"
  | "SaaS";

export const categories: Category[] = [
  "Web Applications",
  "Mobile Apps",
  "Business Systems",
  "AI Products",
  "Automation",
  "Blockchain",
  "SaaS",
];

export type Visual = "browser" | "phone" | "dashboard" | "chat" | "flow" | "ledger" | "saas";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: Category;
  stack: string[];
  visual: Visual;
};

// These are CONCEPT projects: illustrative examples of the kind of work GenTech
// does. They are not real clients. Replace with real case studies as they ship.
export const projects: Project[] = [
  {
    slug: "operations-platform",
    title: "Operations platform for a growing service business",
    summary: "One place to manage jobs, staff, scheduling and invoicing instead of five disconnected tools.",
    category: "Business Systems",
    stack: ["Next.js", "PostgreSQL", "Node.js"],
    visual: "dashboard",
  },
  {
    slug: "customer-portal",
    title: "Customer portal with self-service ordering",
    summary: "A web application where customers place orders, track status and download documents.",
    category: "Web Applications",
    stack: ["React", "TypeScript", "APIs"],
    visual: "browser",
  },
  {
    slug: "field-app",
    title: "Field team mobile app",
    summary: "Offline-first mobile app for teams that work on site and sync when they are back online.",
    category: "Mobile Apps",
    stack: ["Cross-platform", "Sync", "Push"],
    visual: "phone",
  },
  {
    slug: "document-assistant",
    title: "AI assistant for internal documents",
    summary: "Ask questions across policies, contracts and manuals and get answers with sources.",
    category: "AI Products",
    stack: ["AI APIs", "Python", "Vector search"],
    visual: "chat",
  },
  {
    slug: "intake-automation",
    title: "Automated intake and routing",
    summary: "Incoming requests are read, classified and routed to the right person without manual triage.",
    category: "Automation",
    stack: ["Workflows", "AI", "Integrations"],
    visual: "flow",
  },
  {
    slug: "asset-registry",
    title: "On-chain asset registry",
    summary: "Verifiable ownership records with a simple web interface and wallet-based access.",
    category: "Blockchain",
    stack: ["Smart contracts", "Web3", "Next.js"],
    visual: "ledger",
  },
  {
    slug: "team-saas",
    title: "Multi-tenant SaaS for small teams",
    summary: "Subscriptions, roles, billing and a clean product core designed to scale from ten users to thousands.",
    category: "SaaS",
    stack: ["Next.js", "Billing", "Cloud"],
    visual: "saas",
  },
];
