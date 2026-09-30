import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { disciplines } from "@/content/team";

export function About() {
  return (
    <Section id="story" className="border-t border-line">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="About GenTech" size="lg" title="Six people. One idea." />
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <Reveal delay={0.1}>
              <p className="text-xl leading-relaxed text-fg sm:text-2xl">
                A group of technology-minded people with different skills decided to build something together.
              </p>
              <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
                The purpose is not only to create software. It is to build technology, learn continuously and
                eventually create opportunities for others to learn and build as well.
              </p>
              <p className="display-sm mt-8 text-2xl">
                Learn. Build. Adapt<span className="text-accent">.</span>
              </p>
            </Reveal>
          </div>
        </div>
        <Stagger className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {disciplines.map((discipline) => (
            <StaggerItem key={discipline.id}>
              <div className="h-full rounded-2xl border border-line bg-surface-2 p-4">
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-fg-subtle">Founding team</span>
                <p className="mt-3 font-medium">{discipline.label}</p>
                <p className="mt-1 text-xs text-fg-muted">{discipline.role}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
