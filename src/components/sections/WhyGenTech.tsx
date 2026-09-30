import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StaggerList, StaggerListItem } from "@/components/motion/Reveal";
import { reasons } from "@/content/why";

export function WhyGenTech() {
  return (
    <Section id="why">
      <Container>
        <SectionHeading
          eyebrow="Why GenTech"
          title={
            <>
              Not another agency. <span className="text-fg-muted">A team built for what comes next.</span>
            </>
          }
          lede="Six ways of working that shape every project we take on."
        />
        <StaggerList className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <StaggerListItem key={reason.title} className="bg-surface-2 p-7 sm:p-8">
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
              <h3 className="display-sm mt-6 text-2xl">{reason.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{reason.body}</p>
            </StaggerListItem>
          ))}
        </StaggerList>
      </Container>
    </Section>
  );
}
