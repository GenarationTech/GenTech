export type CaseStep = {
  label: "Problem" | "Challenge" | "Solution" | "Result";
  title: string;
  body: string;
  placeholder?: boolean;
};

// Example / demo case study. Not a real client engagement.
export const caseStudy: CaseStep[] = [
  {
    label: "Problem",
    title: "A business is managing operations manually.",
    body: "Orders arrive by phone and email, schedules live in spreadsheets and nobody has a single view of what is happening today.",
  },
  {
    label: "Challenge",
    title: "Disconnected systems and repetitive work.",
    body: "The same data is typed three times. Reports are built by hand every week and mistakes surface only when a customer calls.",
  },
  {
    label: "Solution",
    title: "A custom web platform with automation and AI.",
    body: "One system for orders, scheduling and reporting. Repetitive steps are automated and an AI layer drafts summaries and flags anomalies.",
  },
  {
    label: "Result",
    title: "Measured outcomes will be published here.",
    body: "This is an example case study. Real results, with real numbers, will replace this text once we can publish them with client permission.",
    placeholder: true,
  },
];
