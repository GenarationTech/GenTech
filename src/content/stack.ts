export type Tech = {
  name: string;
  /** Two or three letter mark shown in the tile. No logos, no trademarks. */
  abbr: string;
  group: "Frontend" | "Backend" | "Data" | "Platform" | "AI & Web3";
};

// TODO: confirm this list with the team. Only technologies the team actually
// works with should appear here. Names are rendered as text tiles, not logos.
export const stack: Tech[] = [
  { name: "React", abbr: "Re", group: "Frontend" },
  { name: "Next.js", abbr: "Nx", group: "Frontend" },
  { name: "TypeScript", abbr: "TS", group: "Frontend" },
  { name: "Node.js", abbr: "Nd", group: "Backend" },
  { name: "Python", abbr: "Py", group: "Backend" },
  { name: "Go", abbr: "Go", group: "Backend" },
  { name: ".NET", abbr: "NET", group: "Backend" },
  { name: "PostgreSQL", abbr: "PG", group: "Data" },
  { name: "MongoDB", abbr: "Mg", group: "Data" },
  { name: "Docker", abbr: "Dk", group: "Platform" },
  { name: "Cloud", abbr: "Cl", group: "Platform" },
  { name: "AI APIs", abbr: "AI", group: "AI & Web3" },
  { name: "Blockchain", abbr: "Bc", group: "AI & Web3" },
];
