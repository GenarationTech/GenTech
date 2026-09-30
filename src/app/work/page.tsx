import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Showcase } from "@/components/sections/Showcase";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Concept projects that show the kind of systems GenTech builds. Clearly marked examples until real case studies can be published.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            What we build, <span className="text-fg-muted">shown honestly.</span>
          </>
        }
        lede="GenTech is at the start of its journey. The projects below are concepts that illustrate our range. Real client work will replace them as it ships and can be shared."
      />
      <Showcase />
      <CaseStudy />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
