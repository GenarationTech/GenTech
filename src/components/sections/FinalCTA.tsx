import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <Section theme="ink" className="overflow-hidden">
      <div
        aria-hidden
        className="grid-paper absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_70%_at_50%_50%,#000,transparent)]"
      />
      <Container className="relative text-center">
        <SectionHeading
          align="center"
          size="lg"
          eyebrow="Let's talk"
          title={
            <>
              Have an idea?
              <br />
              Let&apos;s build it.
            </>
          }
          lede="From your first idea to a working product, GenTech helps turn technology into something real."
        />
        <Reveal delay={0.15} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg" variant="accent" arrow>
            Start a Project
          </Button>
          <Button href="/about" size="lg" variant="outline">
            Explore GenTech
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
