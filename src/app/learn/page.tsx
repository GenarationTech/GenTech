import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CodeCamp } from "@/components/sections/CodeCamp";
import { Education } from "@/components/sections/Education";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Upcoming GenTech education initiatives: free 2-week code camps, AI development workshops, mentorship, hackathons and a developer community.",
};

const learnFaqs = faqs.filter((faq) => ["programs", "camp"].includes(faq.id));

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn · Stage 02"
        title={
          <>
            Don&apos;t compete with AI. <span className="text-fg-muted">Learn to build with it.</span>
          </>
        }
        lede="GenTech's second stage is practical technology education: short camps, workshops, mentorship and a community for people who want to build with modern tools."
      >
        <Badge tone="accent">Upcoming · not open for registration yet</Badge>
      </PageHero>
      <Education />
      <CodeCamp />
      <FAQ items={learnFaqs} showContact={false} />
      <FinalCTA />
    </>
  );
}
