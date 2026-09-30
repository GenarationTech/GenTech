import { Container } from "@/components/layout/Container";
import { HeroNetwork } from "@/components/hero/HeroNetwork";
import { WordReveal } from "@/components/hero/WordReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const signals = ["Software", "Mobile", "AI", "Full-Stack", "Blockchain", "Consulting"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      <div
        aria-hidden
        className="dot-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_20%,#000,transparent)]"
      />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal y={12}>
              <Badge tone="accent">
                Software services now
                <span className="hidden sm:inline"> · Developer education next</span>
              </Badge>
            </Reveal>
            <h1 className="display mt-8 text-[3.15rem] uppercase sm:text-7xl lg:text-[6.4rem] xl:text-[7.2rem]">
              <WordReveal text="Build for the AI era." />
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">
                We design and build modern software solutions while helping the next generation of developers
                learn, build and adapt with AI.
              </p>
            </Reveal>
            <Reveal delay={0.5} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" arrow>
                Start a Project
              </Button>
              <Button href="#what-we-do" variant="outline" size="lg">
                Explore What We Build
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.25} y={0}>
              <HeroNetwork className="mx-auto max-w-[520px]" />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.6} className="mt-16 border-t border-line pt-6 sm:mt-24">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] tracking-[0.14em] uppercase text-fg-muted">
            {signals.map((signal, index) => (
              <li key={signal} className="flex items-center gap-3">
                <span className="text-fg-subtle">0{index + 1}</span>
                {signal}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
