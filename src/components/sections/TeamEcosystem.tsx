"use client";

import { useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { EASE } from "@/components/motion/Reveal";
import { disciplines, type Discipline } from "@/content/team";
import { cn } from "@/lib/utils";

const SIZE = 420;
const CENTER = SIZE / 2;
const RADIUS = 150;

const nodes = disciplines.map((discipline, index) => {
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  return { ...discipline, x: CENTER + Math.cos(angle) * RADIUS, y: CENTER + Math.sin(angle) * RADIUS };
});

export function TeamEcosystem() {
  const [focus, setFocus] = useState<Discipline["id"] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const lit = (...ids: string[]) => focus !== null && ids.includes(focus);
  const lineClass = (active: boolean) =>
    cn("transition-colors duration-300", active ? "text-accent" : focus ? "text-line" : "text-line-strong");

  return (
    <Section id="team" className="border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="Built by different minds"
          title={
            <>
              Different skills. <span className="text-fg-muted">One technology team.</span>
            </>
          }
          lede="GenTech was founded by six people with different technical backgrounds. Each discipline is a node in the same system, and the connections between them are where the interesting work happens."
        />

        <div ref={ref} className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              role="img"
              aria-label="Six disciplines arranged in a ring around GenTech, each connected to the centre and to its neighbours"
              className="mx-auto w-full max-w-[460px] overflow-visible"
            >
              {nodes.map((node, index) => (
                <m.line
                  key={`spoke-${node.id}`}
                  x1={CENTER}
                  y1={CENTER}
                  x2={node.x}
                  y2={node.y}
                  stroke="currentColor"
                  strokeWidth={lit(node.id) ? 1.6 : 1}
                  className={lineClass(lit(node.id))}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
                  transition={{ duration: 0.9, delay: 0.1 + index * 0.06, ease: EASE }}
                />
              ))}
              {nodes.map((node, index) => {
                const next = nodes[(index + 1) % nodes.length];
                const active = lit(node.id, next.id);
                return (
                  <m.line
                    key={`ring-${node.id}`}
                    x1={node.x}
                    y1={node.y}
                    x2={next.x}
                    y2={next.y}
                    stroke="currentColor"
                    strokeWidth={active ? 1.6 : 1}
                    className={lineClass(active)}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
                    transition={{ duration: 0.9, delay: 0.5 + index * 0.06, ease: EASE }}
                  />
                );
              })}

              <m.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : undefined}
                transition={{ duration: 0.6, ease: EASE }}
                style={{ transformOrigin: `${CENTER}px ${CENTER}px`, transformBox: "view-box" }}
              >
                <circle cx={CENTER} cy={CENTER} r={44} className="fill-fg" />
                <text
                  x={CENTER}
                  y={CENTER + 5}
                  textAnchor="middle"
                  className="fill-surface font-display text-[15px] font-semibold tracking-tight"
                >
                  GenTech
                </text>
              </m.g>

              {nodes.map((node, index) => {
                const active = focus === node.id;
                return (
                  <m.g
                    key={node.id}
                    onMouseEnter={() => setFocus(node.id)}
                    onMouseLeave={() => setFocus(null)}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={inView ? { opacity: 1, scale: 1 } : undefined}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.07, ease: EASE }}
                    style={{ transformOrigin: `${node.x}px ${node.y}px`, transformBox: "view-box" }}
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={37}
                      strokeWidth={1.5}
                      className={cn(
                        "transition-colors duration-300",
                        active ? "fill-accent-soft stroke-accent" : "fill-surface-2 stroke-line-strong",
                      )}
                    />
                    <text
                      x={node.x}
                      y={node.y + 4}
                      textAnchor="middle"
                      className={cn(
                        "font-mono text-[10.5px] tracking-[0.12em] uppercase transition-colors duration-300",
                        active ? "fill-accent" : "fill-fg",
                      )}
                    >
                      {node.label}
                    </text>
                  </m.g>
                );
              })}
            </svg>
          </div>

          <ul className="divide-y divide-line border-y border-line lg:col-span-6">
            {disciplines.map((discipline) => {
              const active = focus === discipline.id;
              return (
                <li
                  key={discipline.id}
                  onMouseEnter={() => setFocus(discipline.id)}
                  onMouseLeave={() => setFocus(null)}
                  className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-6"
                >
                  <span
                    className={cn(
                      "font-mono text-xs tracking-[0.14em] uppercase transition-colors duration-300",
                      active ? "text-accent" : "text-fg-subtle",
                    )}
                  >
                    {discipline.label}
                  </span>
                  <div>
                    <p className="font-medium">{discipline.role}</p>
                    <p className="mt-1 text-sm text-fg-muted">{discipline.focus}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-8 text-xs text-fg-subtle">
          Roles are shown by discipline. Names and profiles will be added when the team publishes them.
        </p>
      </Container>
    </Section>
  );
}
