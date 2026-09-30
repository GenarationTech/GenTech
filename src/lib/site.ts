export const site = {
  name: "GenTech",
  tagline: "Build. Learn. Adapt.",
  description:
    "GenTech is a modern technology company that builds real software and prepares people for the AI era.",
  // TODO: set NEXT_PUBLIC_SITE_URL in your environment before deploying.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gentech.example",
  // TODO: replace with the real contact address.
  email: "hello@gentech.example",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export type SocialKey = "linkedin" | "github" | "facebook" | "instagram";

// TODO: replace "#" with real profile URLs when they exist.
export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "linkedin", label: "LinkedIn", href: "#" },
  { key: "github", label: "GitHub", href: "#" },
  { key: "facebook", label: "Facebook", href: "#" },
  { key: "instagram", label: "Instagram", href: "#" },
];

export const cta = {
  primary: { label: "Start a Project", href: "/contact" },
  secondary: { label: "Explore GenTech", href: "/about" },
} as const;
