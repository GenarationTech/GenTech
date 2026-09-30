export const projectTypes = [
  "Website",
  "Web Application",
  "Mobile App",
  "AI Solution",
  "Custom Software",
  "Blockchain",
  "Consulting",
] as const;

export type ProjectType = (typeof projectTypes)[number];
