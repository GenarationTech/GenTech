import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { stack, type Tech } from "@/content/stack";

function Tile({ tech }: { tech: Tech }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface-2 py-3 pr-5 pl-3">
      <span className="grid size-9 place-items-center rounded-xl bg-surface-3 font-mono text-xs font-medium text-fg">
        {tech.abbr}
      </span>
      <span className="font-medium whitespace-nowrap">{tech.name}</span>
      <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-fg-subtle whitespace-nowrap">
        {tech.group}
      </span>
    </div>
  );
}

export function TechStack() {
  const half = Math.ceil(stack.length / 2);
  const rows = [stack.slice(0, half), stack.slice(half)];

  return (
    <Section id="stack" className="overflow-hidden border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              Tools we build with<span className="text-accent">.</span>
            </>
          }
          lede="A focused toolkit rather than every logo on the internet. We choose technologies that fit the product and that we can support for years."
        />
      </Container>
      <Reveal className="mt-14 space-y-3">
        <Marquee duration={52}>
          {rows[0].map((tech) => (
            <Tile key={tech.name} tech={tech} />
          ))}
        </Marquee>
        <Marquee reverse duration={60}>
          {rows[1].map((tech) => (
            <Tile key={tech.name} tech={tech} />
          ))}
        </Marquee>
      </Reveal>
      <Container>
        <p className="mt-8 text-xs text-fg-subtle">
          We add tools when a project needs them, not to lengthen this list.
        </p>
      </Container>
    </Section>
  );
}
