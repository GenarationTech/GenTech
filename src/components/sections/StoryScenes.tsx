"use client";

import { m, type Variants } from "framer-motion";
import { Check, MousePointer2, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { EASE } from "@/components/motion/Reveal";
import type { StoryStep } from "@/content/story";
import { cn } from "@/lib/utils";

/**
 * Small illustrative UI mockups, one per step of the project story.
 * `trigger` decides whether the scene animates on mount (sticky desktop
 * panel, where the scene remounts per step) or when scrolled into view
 * (inline on mobile).
 */

export type SceneTrigger = "mount" | "inView";

const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

function SceneRoot({
  trigger,
  className,
  children,
}: {
  trigger: SceneTrigger;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn("flex h-full flex-col justify-center", className);
  if (trigger === "inView") {
    return (
      <m.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className={classes}
      >
        {children}
      </m.div>
    );
  }
  return (
    <m.div variants={list} initial="hidden" animate="show" className={classes}>
      {children}
    </m.div>
  );
}

function Window({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-line bg-surface", className)}>
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-fg-muted">{title}</span>
        <span className="flex gap-1">
          <span className="size-1.5 rounded-full bg-fg/20" />
          <span className="size-1.5 rounded-full bg-fg/20" />
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Skeleton({ w = "100%", className }: { w?: string; className?: string }) {
  return <span style={{ width: w }} className={cn("block h-2 rounded-full bg-fg/12", className)} />;
}

function IdeaScene({ trigger }: { trigger: SceneTrigger }) {
  return (
    <SceneRoot trigger={trigger}>
      <Window title="Project brief">
        <m.div variants={item} className="space-y-2">
          <Skeleton w="62%" className="h-2.5 bg-fg/20" />
          <Skeleton w="88%" />
          <Skeleton w="74%" />
        </m.div>
        <m.blockquote
          variants={item}
          className="mt-5 rounded-xl border-l-2 border-accent bg-accent-soft/70 px-4 py-3 text-sm leading-relaxed"
        >
          &ldquo;We spend hours every week re-typing orders from email into spreadsheets.&rdquo;
        </m.blockquote>
        <m.ul variants={item} className="mt-5 flex flex-wrap gap-2">
          {["Manual process", "Spreadsheets", "Errors", "No overview"].map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] uppercase text-fg-muted"
            >
              {tag}
            </li>
          ))}
        </m.ul>
      </Window>
    </SceneRoot>
  );
}

function DesignScene({ trigger }: { trigger: SceneTrigger }) {
  return (
    <SceneRoot trigger={trigger}>
      <Window title="Wireframe · orders">
        <div className="relative grid grid-cols-[4rem_1fr] gap-3">
          <m.div variants={item} className="space-y-2 rounded-lg border border-dashed border-line-strong p-2">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={cn("block h-2 rounded-full", i === 0 ? "bg-accent" : "bg-fg/12")} />
            ))}
          </m.div>
          <div className="space-y-3">
            <m.div variants={item} className="flex items-center justify-between rounded-lg border border-dashed border-line-strong p-2">
              <Skeleton w="30%" />
              <span className="h-5 w-14 rounded-full bg-fg/15" />
            </m.div>
            <div className="grid grid-cols-2 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <m.div
                  key={i}
                  variants={item}
                  className="aspect-[5/3] rounded-lg border border-dashed border-line-strong p-2"
                >
                  <Skeleton w="50%" className="h-1.5" />
                  <Skeleton w="70%" className="mt-2 h-3 bg-fg/20" />
                </m.div>
              ))}
            </div>
          </div>
          <m.span
            variants={item}
            aria-hidden
            className="absolute right-[18%] bottom-[12%] flex items-center gap-1 text-accent"
          >
            <MousePointer2 className="size-4 fill-accent" />
            <span className="rounded-md bg-accent px-1.5 py-0.5 font-mono text-[9px] text-accent-fg">product</span>
          </m.span>
        </div>
      </Window>
    </SceneRoot>
  );
}

const codeLines = [
  ["export async function", " createOrder", "(input) {"],
  ["  const order = ", "await db.orders.insert", "(input)"],
  ["  await queue.publish(", "'order.created'", ", order)"],
  ["  return order"],
  ["}"],
];

function BuildScene({ trigger }: { trigger: SceneTrigger }) {
  return (
    <SceneRoot trigger={trigger}>
      <Window title="api/orders.ts">
        <div className="mb-3 flex gap-2 font-mono text-[10px] text-fg-subtle">
          <span className="rounded-md bg-fg/8 px-2 py-0.5 text-fg">orders.ts</span>
          <span className="px-2 py-0.5">schema.sql</span>
          <span className="px-2 py-0.5">app.tsx</span>
        </div>
        <ol className="space-y-1.5 font-mono text-[12px] leading-relaxed sm:text-[13px]">
          {codeLines.map((parts, i) => (
            <m.li key={i} variants={item} className="flex gap-3 whitespace-pre">
              <span className="w-4 text-right text-fg-subtle">{i + 1}</span>
              <span>
                {parts.map((part, j) => (
                  <span key={j} className={j === 1 ? "text-accent" : "text-fg"}>
                    {part}
                  </span>
                ))}
              </span>
            </m.li>
          ))}
        </ol>
        <m.div variants={item} className="mt-4 flex items-center gap-2 font-mono text-[11px] text-fg-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          build passing · 3 services · 1 codebase
        </m.div>
      </Window>
    </SceneRoot>
  );
}

function AIScene({ trigger }: { trigger: SceneTrigger }) {
  return (
    <SceneRoot trigger={trigger}>
      <Window title="AI suggestion">
        <m.div variants={item} className="flex items-center gap-2 text-sm">
          <span className="grid size-6 place-items-center rounded-full bg-accent text-accent-fg">
            <Sparkles className="size-3" />
          </span>
          Simplify the total calculation and cover the empty case.
        </m.div>
        <m.pre
          variants={item}
          className="mt-4 overflow-hidden rounded-xl border border-line bg-surface-2 p-3 font-mono text-[12px] leading-relaxed"
        >
          <span className="block text-fg-muted line-through">- for (const o of orders) total += o.amount</span>
          <span className="block text-fg">+ const total = sum(orders, &quot;amount&quot;)</span>
          <span className="block text-fg">+ test(&quot;handles no orders&quot;, ...)</span>
        </m.pre>
        <m.div variants={item} className="mt-4 flex items-center gap-2">
          <span className="rounded-full bg-fg px-3 py-1.5 text-xs font-medium text-surface">Apply</span>
          <span className="rounded-full border border-line-strong px-3 py-1.5 text-xs font-medium">Review</span>
          <span className="ml-auto font-mono text-[10px] tracking-[0.1em] uppercase text-fg-muted">
            reviewed by developer
          </span>
        </m.div>
      </Window>
    </SceneRoot>
  );
}

const launchSteps = ["Build", "Tests", "Migrations", "Deploy to production"];

function LaunchScene({ trigger }: { trigger: SceneTrigger }) {
  return (
    <SceneRoot trigger={trigger}>
      <Window title="Deployment">
        <m.div
          variants={item}
          className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-fg-muted"
        >
          <span className="size-1.5 rounded-full bg-fg/30" />
          app.client.example
        </m.div>
        <ul className="mt-4 space-y-2">
          {launchSteps.map((step) => (
            <m.li key={step} variants={item} className="flex items-center gap-3 text-sm">
              <span className="grid size-5 place-items-center rounded-full bg-fg text-surface">
                <Check className="size-3" />
              </span>
              {step}
            </m.li>
          ))}
        </ul>
        <m.div variants={item} className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
          <span className="animate-pulse-soft size-2 rounded-full bg-accent" />
          Live
        </m.div>
      </Window>
    </SceneRoot>
  );
}

const releases = [
  { tag: "v1.0", note: "Orders + scheduling", h: "40%" },
  { tag: "v1.4", note: "Automated reports", h: "62%" },
  { tag: "v2.0", note: "AI summaries", h: "86%" },
];

function GrowScene({ trigger }: { trigger: SceneTrigger }) {
  return (
    <SceneRoot trigger={trigger}>
      <Window title="Releases">
        <div className="flex h-40 items-end gap-3">
          {releases.map((release, i) => (
            <m.div key={release.tag} variants={item} className="flex flex-1 flex-col justify-end gap-2" style={{ height: "100%" }}>
              <span className="font-mono text-[10px] text-fg-muted">{release.tag}</span>
              <div
                style={{ height: release.h }}
                className={cn("rounded-lg border", i === releases.length - 1 ? "border-accent bg-accent-soft" : "border-line bg-fg/8")}
              />
              <span className="text-xs text-fg-muted">{release.note}</span>
            </m.div>
          ))}
        </div>
      </Window>
    </SceneRoot>
  );
}

const scenes: Record<StoryStep["id"], (props: { trigger: SceneTrigger }) => ReactNode> = {
  idea: IdeaScene,
  design: DesignScene,
  build: BuildScene,
  ai: AIScene,
  launch: LaunchScene,
  grow: GrowScene,
};

export function Scene({ id, trigger }: { id: StoryStep["id"]; trigger: SceneTrigger }) {
  const Component = scenes[id];
  return <Component trigger={trigger} />;
}
