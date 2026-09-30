import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal, StaggerList, StaggerListItem } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { caseStudy } from "@/content/case-study";
import { cn } from "@/lib/utils";

export function CaseStudy() {
  return (
    <Section id="case-study" className="border-t border-line">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="How we approach a project"
              title={
                <>
                  From problem <span className="text-fg-muted">to product.</span>
                </>
              }
              lede="A walk through a typical engagement. This is an illustrative example, not a real client project."
            />
            <Reveal delay={0.1} className="mt-6">
              <Badge tone="muted">Example case study · not a real client</Badge>
            </Reveal>
          </div>
          <StaggerList className="lg:col-span-7">
            {caseStudy.map((step, index) => (
              <StaggerListItem key={step.label}>
                <div
                  className={cn(
                    "rounded-3xl border p-7 sm:p-8",
                    step.placeholder ? "border-dashed border-line-strong" : "border-line bg-surface-2",
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-xs tracking-[0.14em] uppercase",
                      step.placeholder ? "text-fg-subtle" : "text-accent",
                    )}
                  >
                    {step.label}
                  </span>
                  <h3 className="display-sm mt-4 text-2xl sm:text-3xl">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg-muted sm:text-base">{step.body}</p>
                </div>
                {index < caseStudy.length - 1 && (
                  <div aria-hidden className="flex h-12 items-center justify-center text-fg-subtle">
                    <ArrowDown className="size-4" />
                  </div>
                )}
              </StaggerListItem>
            ))}
          </StaggerList>
        </div>
      </Container>
    </Section>
  );
}
