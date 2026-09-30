"use client";

import { Fragment, useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Sparkles, User } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { EASE, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { aiExamples, stages, type Actor } from "@/content/ai-era";
import { cn } from "@/lib/utils";

const actorMeta: Record<Actor, { label: string; className: string; ai: boolean }> = {
  human: { label: "Developer", className: "border-line-strong text-fg", ai: false },
  "human+ai": { label: "Developer + AI", className: "border-accent/60 bg-accent-soft text-fg", ai: true },
  ai: { label: "AI · reviewed by developer", className: "border-accent bg-accent text-accent-fg", ai: true },
};

export function AIEra() {
  const [index, setIndex] = useState(1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const stage = stages[index];

  const move = (next: number) => {
    const target = (next + stages.length) % stages.length;
    setIndex(target);
    tabs.current[target]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      move(0);
    } else if (event.key === "End") {
      event.preventDefault();
      move(stages.length - 1);
    }
  };

  return (
    <Section id="ai-era" theme="ink" className="overflow-hidden">
      <div
        aria-hidden
        className="grid-paper absolute inset-0 opacity-30 [mask-image:linear-gradient(180deg,transparent,#000_25%,#000_75%,transparent)]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="The AI era"
          title={
            <>
              The way we build software <span className="text-fg-muted">is changing.</span>
            </>
          }
          lede="AI is changing how software is designed, developed, tested and delivered. We believe the future is not about competing with AI. It is about learning how to work with it."
        />

        <Reveal delay={0.1} className="mt-12">
          <div
            role="tablist"
            aria-label="Stages of software development"
            onKeyDown={onKeyDown}
            className="inline-flex flex-wrap gap-1 rounded-full border border-line bg-surface-2 p-1"
          >
            {stages.map((entry, i) => {
              const selected = i === index;
              return (
                <button
                  key={entry.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${entry.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    selected ? "text-accent-fg" : "text-fg-muted hover:text-fg",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-0 rounded-full bg-accent transition-opacity duration-300",
                      selected ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <span className="relative">{entry.label}</span>
                </button>
              );
            })}
          </div>

          <div aria-hidden className="mt-6 flex items-center gap-2">
            {stages.map((entry, i) => (
              <Fragment key={entry.id}>
                <span
                  className={cn(
                    "size-2 rounded-full transition-colors duration-300",
                    i <= index ? "bg-accent" : "bg-line-strong",
                  )}
                />
                {i < stages.length - 1 && (
                  <span
                    className={cn(
                      "h-px w-10 transition-colors duration-300 sm:w-16",
                      i < index ? "bg-accent" : "bg-line-strong",
                    )}
                  />
                )}
              </Fragment>
            ))}
            <span className="ml-2 font-mono text-[11px] tracking-[0.14em] uppercase text-fg-muted">{stage.label}</span>
          </div>
        </Reveal>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${stage.id}`}
          className="mt-10 rounded-3xl border border-line bg-surface-2 p-6 sm:p-8"
        >
          <AnimatePresence mode="wait" initial={false}>
            <m.div
              key={stage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-baseline lg:justify-between">
                <h3 className="display-sm text-2xl sm:text-3xl">{stage.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-fg-muted">{stage.description}</p>
              </div>
              <ol className="mt-8 grid gap-3 sm:grid-cols-5">
                {stage.phases.map((phase, i) => {
                  const meta = actorMeta[phase.actor];
                  return (
                    <li key={phase.name} className="rounded-2xl border border-line bg-surface p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-fg-subtle">0{i + 1}</span>
                        <span className="text-sm font-medium">{phase.name}</span>
                      </div>
                      <span
                        className={cn(
                          "mt-5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] uppercase",
                          meta.className,
                        )}
                      >
                        {meta.ai ? <Sparkles aria-hidden className="size-3" /> : <User aria-hidden className="size-3" />}
                        {meta.label}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </m.div>
          </AnimatePresence>
        </div>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiExamples.map((example) => (
            <StaggerItem key={example.title} className="h-full">
              <div className="h-full rounded-2xl border border-line p-6">
                <h4 className="font-medium">{example.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{example.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-14">
          <p className="display-sm max-w-3xl text-2xl sm:text-4xl">
            Don&apos;t compete with AI. <span className="text-accent">Learn to build with it.</span>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
