import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Approach } from "@/components/sections/Approach";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServicesDetail } from "@/components/sections/ServicesDetail";
import { TechStack } from "@/components/sections/TechStack";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software, mobile, AI, full-stack, blockchain and consulting services from GenTech. Real systems for businesses and organisations.",
};

const serviceFaqs = faqs.filter((faq) => ["what", "complete", "existing", "begin"].includes(faq.id));

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Software, built <span className="text-fg-muted">the way it should be.</span>
          </>
        }
        lede="Six service areas, one team. Whether you need a single application or a complete system, the same people design, build and support it."
      >
        <Button href="/contact" size="lg" arrow>
          Start a Project
        </Button>
      </PageHero>
      <ServicesDetail />
      <Approach />
      <TechStack />
      <FAQ items={serviceFaqs} />
      <FinalCTA />
    </>
  );
}
