import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

/**
 * Honest placeholder. GenTech has no published testimonials yet, so this
 * section says so instead of showing invented quotes.
 */
export function Testimonials() {
  return (
    <Section id="voices" className="pt-0">
      <Container>
        <Reveal>
          <div className="rounded-3xl border border-dashed border-line-strong px-6 py-12 text-center sm:px-12 sm:py-16">
            <Badge tone="muted" className="mx-auto">
              Client voices
            </Badge>
            <p className="display-sm mt-6 text-2xl sm:text-3xl">Early days. Real words, soon.</p>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg-muted sm:text-base">
              We do not publish testimonials we have not earned. As projects ship, this space will hold what
              clients actually say about working with GenTech.
            </p>
            <Button href="/contact" variant="outline" arrow className="mt-8">
              Be one of the first
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
