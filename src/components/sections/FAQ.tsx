import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqs, type Faq } from "@/content/faq";

export function FAQ({ items = faqs, showContact = true }: { items?: Faq[]; showContact?: boolean }) {
  return (
    <Section id="faq" className="border-t border-line">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Questions, <span className="text-fg-muted">answered.</span>
                </>
              }
              lede="Short answers to the things people ask before starting a project."
            />
            {showContact && (
              <Reveal delay={0.1} className="mt-8">
                <Button href="/contact" variant="outline" arrow>
                  Ask something else
                </Button>
              </Reveal>
            )}
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <Accordion items={items} defaultOpen={items[0]?.id} />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
