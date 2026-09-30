import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { programs } from "@/content/education";

export function Education() {
  return (
    <Section id="learn" theme="ink">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Stage 02 · Upcoming"
            title={
              <>
                The next generation <span className="text-fg-muted">is already building.</span>
              </>
            }
            lede="GenTech will eventually expand beyond software services into practical technology education and developer community programs."
          />
          <Reveal delay={0.2} className="shrink-0">
            <Button href="/learn#notify" size="lg" arrow>
              Join the Future
            </Button>
          </Reveal>
        </div>
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <StaggerItem key={program.title} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-line bg-surface-2 p-7">
                <Badge tone={program.status === "Upcoming" ? "accent" : "muted"} className="self-start">
                  {program.status}
                </Badge>
                <h3 className="display-sm mt-8 text-2xl">{program.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{program.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-8 text-sm text-fg-subtle">
          These are planned initiatives. None of them is open for registration yet.
        </p>
      </Container>
    </Section>
  );
}
