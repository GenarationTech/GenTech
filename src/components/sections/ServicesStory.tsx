"use client";

import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { AnimatePresence, inView, m } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { EASE } from "@/components/motion/Reveal";
import { Scene } from "@/components/sections/StoryScenes";
import { storySteps, type StoryStep } from "@/content/story";
import { cn } from "@/lib/utils";

function ScenePanel({ step }: { step: StoryStep }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface-2">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-xs text-fg-muted">
          {step.index} <span className="text-fg-subtle">/ 06</span>
        </span>
        <span className="font-mono text-xs tracking-[0.14em] uppercase text-fg-muted">{step.title}</span>
      </div>
      <div className="relative flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={step.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="absolute inset-0 p-6"
          >
            <Scene id={step.id} trigger="mount" />
          </m.div>
        </AnimatePresence>
      </div>
      <p className="border-t border-line px-5 py-3 text-sm text-fg-muted">{step.caption}</p>
    </div>
  );
}

function StoryItem({
  step,
  index,
  active,
  setActive,
}: {
  step: StoryStep;
  index: number;
  active: boolean;
  setActive: Dispatch<SetStateAction<number>>;
}) {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    return inView(element, () => setActive(index), { margin: "-45% 0px -45% 0px" });
  }, [index, setActive]);

  return (
    <li
      ref={ref}
      className="py-10 first:pt-0 last:pb-0 lg:flex lg:min-h-[60vh] lg:flex-col lg:justify-center lg:py-0"
    >
      <div className={cn("transition-opacity duration-500", active ? "opacity-100" : "lg:opacity-30")}>
        <span className="font-mono text-xs text-accent">{step.index}</span>
        <h3 className="display-sm mt-3 text-3xl sm:text-4xl">{step.title}</h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-fg-muted sm:text-base">{step.body}</p>
      </div>
      <div className="mt-6 lg:hidden">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface-2 p-5">
          <Scene id={step.id} trigger="inView" />
          <p className="mt-4 text-sm text-fg-muted">{step.caption}</p>
        </div>
      </div>
    </li>
  );
}

export function ServicesStory() {
  const [active, setActive] = useState(0);

  return (
    <Section id="how-it-works" className="border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="How a project moves"
          title={
            <>
              From a problem <span className="text-fg-muted">to a working product.</span>
            </>
          }
          lede="Every engagement follows the same arc. The scenes change; the discipline does not."
        />
        <div className="mt-14 lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28 h-[min(640px,calc(100vh-9rem))]">
              <ScenePanel step={storySteps[active]} />
            </div>
          </div>
          <ol className="lg:col-span-6">
            {storySteps.map((step, index) => (
              <StoryItem key={step.id} step={step} index={index} active={index === active} setActive={setActive} />
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
