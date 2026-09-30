"use client";

import { useRef } from "react";
import { m, useScroll, useSpring } from "framer-motion";
import { NotifyForm } from "@/components/forms/NotifyForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { campTimeline } from "@/content/education";

export function CodeCamp() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <Section id="code-camp" className="border-t border-line">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Free 2-week code camp · Future initiative"
              title={
                <>
                  Two weeks. <span className="text-fg-muted">One real project.</span>
                </>
              }
              lede="A future GenTech initiative designed to help students experience modern software development, work with AI tools and build something real."
            />
            <Reveal delay={0.15} id="notify" className="mt-10 scroll-mt-28">
              <p className="mb-3 text-sm text-fg-muted">
                Registrations are not open yet. Leave your email and we will tell you when they are.
              </p>
              <NotifyForm />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <ol ref={ref} className="relative space-y-10 pl-10">
              <div aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-line" />
              <m.div aria-hidden style={{ scaleY }} className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-accent" />
              {campTimeline.map((item) => (
                <li key={item.day} className="relative">
                  <span aria-hidden className="absolute top-1.5 -left-10 size-[15px] rounded-full border-2 border-fg bg-surface" />
                  <Reveal amount={0.5}>
                    <span className="font-mono text-xs text-accent">Day {item.day}</span>
                    <h3 className="display-sm mt-2 text-2xl sm:text-3xl">{item.title}</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-fg-muted">{item.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
