import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StaggerList, StaggerListItem } from "@/components/motion/Reveal";
import { approach } from "@/content/approach";

export function Approach() {
  return (
    <Section id="approach" className="border-t border-line">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Our approach"
              title={
                <>
                  Six steps. <span className="text-fg-muted">One working product.</span>
                </>
              }
              lede="A clear process keeps a project honest: everyone knows what happens next and why."
            />
          </div>
          <StaggerList className="divide-y divide-line border-t border-line lg:col-span-8">
            {approach.map((item) => (
              <StaggerListItem key={item.step} className="grid gap-3 py-8 sm:grid-cols-[6rem_1fr] sm:gap-6">
                <span className="font-mono text-sm text-accent">{item.step}</span>
                <div>
                  <h3 className="display-sm text-2xl sm:text-3xl">{item.title}</h3>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-fg-muted sm:text-base">{item.body}</p>
                </div>
              </StaggerListItem>
            ))}
          </StaggerList>
        </div>
      </Container>
    </Section>
  );
}
