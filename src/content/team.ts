export type Discipline = {
  id: "software" | "web" | "mobile" | "ai" | "blockchain" | "product";
  label: string;
  role: string;
  focus: string;
};

// Role-based placeholders. Names and biographies are intentionally omitted
// until the team decides what to publish.
export const disciplines: Discipline[] = [
  { id: "software", label: "Software", role: "Software Engineering", focus: "Systems, architecture and reliable backend logic." },
  { id: "web", label: "Web", role: "Full-Stack Development", focus: "Interfaces, APIs and everything in between." },
  { id: "mobile", label: "Mobile", role: "Mobile Development", focus: "Native and cross-platform apps people keep installed." },
  { id: "ai", label: "AI", role: "AI & Modern Technologies", focus: "Models, automation and AI-native product thinking." },
  { id: "blockchain", label: "Blockchain", role: "Blockchain / Web3", focus: "Decentralised systems and on-chain integrations." },
  { id: "product", label: "Product", role: "Product & Strategy", focus: "Turning problems into scoped, shippable products." },
];
