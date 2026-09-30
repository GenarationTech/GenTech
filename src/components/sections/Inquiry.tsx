import { InquiryForm } from "@/components/forms/InquiryForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  "Tell us about the problem you want solved.",
  "We ask questions and propose an approach.",
  "You receive a clear scope, timeline and estimate.",
];

export function Inquiry({ defaultType }: { defaultType?: string }) {
  return (
    <Section id="start" className="border-t border-line">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Pricing"
              title={
                <>
                  Let&apos;s discuss <span className="text-fg-muted">your project.</span>
                </>
              }
              lede="We do not publish fixed prices because every product is different. Tell us what you need and we will come back with a clear scope, timeline and estimate."
            />
            <Reveal delay={0.1}>
              <ol className="mt-8 space-y-3 text-sm text-fg-muted">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-mono text-accent">0{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-surface-2 p-6 sm:p-8">
                <InquiryForm defaultType={defaultType} />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
