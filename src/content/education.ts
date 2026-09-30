export type Program = { title: string; body: string; status: "Upcoming" | "Planned" };

// All items are FUTURE initiatives. None of them is currently open for registration.
export const programs: Program[] = [
  { title: "Free 2-week Code Camps", body: "Short, intense and project-based. Build one real thing with a small team.", status: "Upcoming" },
  { title: "AI Development Workshops", body: "Hands-on sessions on building with AI tools, models and agents.", status: "Upcoming" },
  { title: "Practical Projects", body: "Learning by shipping: real briefs, real constraints, real code reviews.", status: "Planned" },
  { title: "Mentorship", body: "Guidance from working engineers across web, mobile, AI and blockchain.", status: "Planned" },
  { title: "Hackathons", body: "Focused build weekends around a theme, with industry feedback.", status: "Planned" },
  { title: "Developer Community", body: "A place to keep learning, share work and find opportunities.", status: "Planned" },
];

export const campTimeline: { day: string; title: string; body: string }[] = [
  { day: "01", title: "Discover", body: "Meet the team, pick a project and understand the problem." },
  { day: "03", title: "Build", body: "Set up the stack and ship the first working slice." },
  { day: "07", title: "Integrate", body: "Connect the pieces: data, APIs, AI features and the front end." },
  { day: "10", title: "Improve", body: "Test, refine and learn from feedback and code reviews." },
  { day: "14", title: "Demo", body: "Present a working product to the group and to industry guests." },
];
