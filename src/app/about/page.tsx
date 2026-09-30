import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TeamEcosystem } from "@/components/sections/TeamEcosystem";
import { WhyGenTech } from "@/components/sections/WhyGenTech";

export const metadata: Metadata = {
  title: "About",
  description:
    "GenTech is a technology company founded by six people with different technical backgrounds. Learn. Build. Adapt.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GenTech"
        title={
          <>
            A technology company <span className="text-fg-muted">for the AI era.</span>
          </>
        }
        lede="We build real software today and are preparing to help the next generation of developers learn, build and adapt tomorrow."
      />
      <About />
      <TeamEcosystem />
      <WhyGenTech />
      <Approach />
      <FinalCTA />
    </>
  );
}
