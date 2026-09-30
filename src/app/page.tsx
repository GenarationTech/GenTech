import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { AIEra } from "@/components/sections/AIEra";
import { Approach } from "@/components/sections/Approach";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { CodeCamp } from "@/components/sections/CodeCamp";
import { Education } from "@/components/sections/Education";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Inquiry } from "@/components/sections/Inquiry";
import { ServicesStory } from "@/components/sections/ServicesStory";
import { Showcase } from "@/components/sections/Showcase";
import { TeamEcosystem } from "@/components/sections/TeamEcosystem";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyGenTech } from "@/components/sections/WhyGenTech";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} · Build for the AI era` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ServicesStory />
      <TeamEcosystem />
      <AIEra />
      <Showcase />
      <CaseStudy />
      <WhyGenTech />
      <Education />
      <CodeCamp />
      <Approach />
      <TechStack />
      <About />
      <Testimonials />
      <Inquiry />
      <FAQ />
      <FinalCTA />
    </>
  );
}
