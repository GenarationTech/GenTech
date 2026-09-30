import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div
        aria-hidden
        className="dot-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent)]"
      />
      <Container>
        <Reveal y={12}>
          <Badge tone="muted">{eyebrow}</Badge>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display mt-7 max-w-4xl text-[2.9rem] sm:text-6xl lg:text-7xl">{title}</h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-fg-muted sm:text-xl">{lede}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.24} className="mt-9">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
