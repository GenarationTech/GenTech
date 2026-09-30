export type StoryStep = {
  id: "idea" | "design" | "build" | "ai" | "launch" | "grow";
  index: string;
  title: string;
  body: string;
  caption: string;
};

export const storySteps: StoryStep[] = [
  {
    id: "idea",
    index: "01",
    title: "Idea",
    body: "A client comes to GenTech with a problem. Sometimes it is a clear brief, sometimes it is just a pain they live with every day.",
    caption: "A brief, a whiteboard and a lot of questions.",
  },
  {
    id: "design",
    index: "02",
    title: "Design",
    body: "We turn the problem into a product concept: the flows, the screens and the system underneath, before a line of code is written.",
    caption: "Wireframes become a product concept.",
  },
  {
    id: "build",
    index: "03",
    title: "Build",
    body: "Our multidisciplinary team develops the solution, with frontend, backend, mobile and data work moving together.",
    caption: "One team, one codebase, short cycles.",
  },
  {
    id: "ai",
    index: "04",
    title: "AI",
    body: "AI helps accelerate development and automation, from assisted coding and testing to features that make the product itself smarter.",
    caption: "AI as a co-worker in the workflow.",
  },
  {
    id: "launch",
    index: "05",
    title: "Launch",
    body: "The product becomes a real working system: deployed, monitored and handed over with the documentation to run it.",
    caption: "Deployed, monitored and in real use.",
  },
  {
    id: "grow",
    index: "06",
    title: "Grow",
    body: "We continue improving and scaling it. Real usage reveals what matters next, and the system evolves with the business.",
    caption: "Iterate on real usage, not assumptions.",
  },
];
