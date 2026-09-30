"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { staggerChild, staggerParent } from "@/components/motion/Reveal";
import { ProjectVisual } from "@/components/sections/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { categories, projects, type Category } from "@/content/showcase";
import { cn } from "@/lib/utils";

type Filter = "All" | Category;
const filters: Filter[] = ["All", ...categories];

export function Showcase() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <Section id="work" className="border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="What we build"
          title={
            <>
              The kind of systems <span className="text-fg-muted">we build.</span>
            </>
          }
          lede="Concept projects that show the shape of GenTech's work. They are clearly marked as examples and will be replaced by real case studies as projects ship."
        />

        <div role="group" aria-label="Filter projects by category" className="mt-10 flex flex-wrap gap-2">
          {filters.map((entry) => {
            const selected = entry === filter;
            return (
              <button
                key={entry}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(entry)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                  selected
                    ? "border-fg bg-fg text-surface"
                    : "border-line-strong text-fg-muted hover:border-fg hover:text-fg",
                )}
              >
                {entry}
              </button>
            );
          })}
        </div>

        <m.ul
          key={filter}
          initial="hidden"
          animate="show"
          variants={staggerParent}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {visible.map((project) => (
            <m.li key={project.slug} variants={staggerChild} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface-2 transition-[border-color,box-shadow] duration-300 hover:border-line-strong hover:shadow-[0_24px_60px_-32px_rgba(12,14,18,0.35)]">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-surface-3">
                  <ProjectVisual kind={project.visual} />
                  <Badge tone="muted" className="absolute top-4 left-4 bg-surface-2">
                    Concept project
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent">
                    {project.category}
                  </span>
                  <h3 className="display-sm mt-3 text-xl">{project.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{project.summary}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Technologies">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-surface-3 px-2.5 py-1 font-mono text-[11px] text-fg-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </m.li>
          ))}
        </m.ul>

        <p className="mt-8 text-xs text-fg-subtle">
          None of these are real clients. They illustrate categories of work, not delivered projects.
        </p>
      </Container>
    </Section>
  );
}
