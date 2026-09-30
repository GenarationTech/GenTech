import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AIEra } from "@/components/sections/AIEra";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SolutionCategories } from "@/components/sections/SolutionCategories";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Web applications, mobile apps, business systems, AI products, automation, blockchain and SaaS. The kinds of problems GenTech solves.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Systems that solve <span className="text-fg-muted">real problems.</span>
          </>
        }
        lede="We start from the problem, then choose the shape of the system: web, mobile, automation, AI or all of them together."
      />
      <SolutionCategories />
      <AIEra />
      <CaseStudy />
      <FinalCTA />
    </>
  );
}
