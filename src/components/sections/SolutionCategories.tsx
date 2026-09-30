import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StaggerList, StaggerListItem } from "@/components/motion/Reveal";
import { solutions } from "@/content/solutions";

export function SolutionCategories() {
  return (
    <Section id="solutions" className="pt-8 sm:pt-12 lg:pt-16">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title={
            <>
              Built around the problem, <span className="text-fg-muted">not the buzzword.</span>
            </>
          }
          lede="Seven kinds of systems we design and build. Most real projects combine two or three of them."
        />
        <StaggerList className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <StaggerListItem key={solution.category} className="bg-surface-2 p-7">
              <span className="font-mono text-xs text-fg-subtle">0{index + 1}</span>
              <h3 className="display-sm mt-6 text-2xl">{solution.category}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{solution.body}</p>
            </StaggerListItem>
          ))}
          <StaggerListItem className="bg-surface-3 p-7">
            <span className="font-mono text-xs text-accent">+</span>
            <h3 className="display-sm mt-6 text-2xl">Something else?</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
              If it runs on a screen or a server, we can probably help. Tell us what it is.
            </p>
          </StaggerListItem>
        </StaggerList>
      </Container>
    </Section>
  );
}
