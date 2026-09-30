import type { Visual } from "@/content/showcase";
import { cn } from "@/lib/utils";

/**
 * Abstract, CSS-drawn thumbnails for concept projects. No images, no brand
 * marks: just enough structure to suggest the kind of product.
 */

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-x-6 top-12 -bottom-2 overflow-hidden rounded-t-xl border border-line bg-surface-2 shadow-[0_12px_40px_-20px_rgba(12,14,18,0.35)] transition-transform duration-500 ease-out-expo group-hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Chrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
      <span className="size-1.5 rounded-full bg-fg/20" />
      <span className="size-1.5 rounded-full bg-fg/20" />
      <span className="size-1.5 rounded-full bg-fg/20" />
      <span className="ml-2 h-2 flex-1 rounded-full bg-fg/[0.07]" />
    </div>
  );
}

function Browser() {
  return (
    <Frame>
      <Chrome />
      <div className="grid gap-3 p-4">
        <div className="h-3 w-1/2 rounded-full bg-fg/15" />
        <div className="h-2 w-3/4 rounded-full bg-fg/10" />
        <div className="mt-1 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-lg bg-fg/[0.06]" />
          ))}
        </div>
        <div className="h-7 w-24 rounded-full bg-accent" />
      </div>
    </Frame>
  );
}

function Phone() {
  return (
    <div className="absolute top-12 left-1/2 aspect-[9/17] w-[40%] -translate-x-1/2 overflow-hidden rounded-[1.5rem] border-[3px] border-fg/80 bg-surface-2 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1">
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-fg/20" />
      <div className="mt-4 space-y-2 px-3">
        <div className="h-3 w-2/3 rounded-full bg-fg/15" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-fg/[0.06] p-2">
            <span className="size-4 rounded-full bg-fg/15" />
            <span className="h-2 flex-1 rounded-full bg-fg/10" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-3 bottom-3 flex justify-between rounded-full bg-fg/[0.06] px-3 py-2">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={cn("size-2 rounded-full", i === 0 ? "bg-accent" : "bg-fg/20")} />
        ))}
      </div>
    </div>
  );
}

function Dashboard() {
  const heights = ["40%", "62%", "48%", "78%", "58%", "88%"];
  return (
    <Frame className="grid grid-cols-[3rem_1fr]">
      <div className="space-y-2 border-r border-line p-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={cn("block h-2 rounded-full", i === 1 ? "bg-accent" : "bg-fg/10")} />
        ))}
      </div>
      <div className="p-3">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg bg-fg/[0.06] p-2">
              <div className="h-1.5 w-2/3 rounded-full bg-fg/15" />
              <div className="mt-2 h-3 w-1/2 rounded-full bg-fg/25" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5 rounded-lg bg-fg/[0.04] p-2">
          {heights.map((h, i) => (
            <span
              key={i}
              style={{ height: h }}
              className={cn("flex-1 rounded-sm", i === heights.length - 1 ? "bg-accent" : "bg-fg/15")}
            />
          ))}
        </div>
      </div>
    </Frame>
  );
}

function Chat() {
  return (
    <Frame>
      <Chrome />
      <div className="space-y-2 p-4">
        <div className="ml-auto w-3/5 rounded-2xl rounded-br-sm bg-fg px-3 py-2">
          <div className="h-2 w-4/5 rounded-full bg-surface/60" />
        </div>
        <div className="w-4/5 rounded-2xl rounded-bl-sm bg-fg/[0.06] px-3 py-2">
          <div className="h-2 w-full rounded-full bg-fg/15" />
          <div className="mt-1.5 h-2 w-2/3 rounded-full bg-fg/15" />
          <div className="mt-2 inline-block rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[8px] text-accent">
            source · policy.pdf
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-full border border-line px-3 py-2">
          <span className="h-2 flex-1 rounded-full bg-fg/10" />
          <span className="size-4 rounded-full bg-accent" />
        </div>
      </div>
    </Frame>
  );
}

function Flow() {
  return (
    <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full p-6" aria-hidden>
      <g className="stroke-fg/25" strokeWidth={1.2} fill="none">
        <path d="M40 60 H 80" />
        <path d="M120 60 C 140 60 140 24 160 24" />
        <path d="M120 60 H 160" />
        <path d="M120 60 C 140 60 140 96 160 96" />
      </g>
      <g className="fill-surface-2 stroke-fg/50" strokeWidth={1.2}>
        <rect x="12" y="46" width="28" height="28" rx="6" />
        <rect x="152" y="12" width="28" height="24" rx="6" />
        <rect x="152" y="48" width="28" height="24" rx="6" />
        <rect x="152" y="84" width="28" height="24" rx="6" />
      </g>
      <rect x="80" y="42" width="40" height="36" rx="8" className="fill-accent" />
      <text x="100" y="64" textAnchor="middle" className="fill-accent-fg font-mono text-[8px] uppercase">
        AI
      </text>
    </svg>
  );
}

function Ledger() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-2 p-6">
      {["0x3f…a2", "0x9c…e1", "0xb4…07"].map((hash, i) => (
        <div key={hash} className="flex items-center gap-2">
          <div
            className={cn(
              "w-20 rounded-xl border bg-surface-2 p-2.5 transition-transform duration-500 ease-out-expo",
              i === 2 ? "border-accent group-hover:-translate-y-1" : "border-line",
            )}
          >
            <div className="font-mono text-[9px] text-fg-muted">{hash}</div>
            <div className="mt-2 space-y-1">
              <span className="block h-1.5 w-full rounded-full bg-fg/15" />
              <span className="block h-1.5 w-2/3 rounded-full bg-fg/10" />
            </div>
          </div>
          {i < 2 && <span className="h-px w-3 bg-fg/30" />}
        </div>
      ))}
    </div>
  );
}

function Saas() {
  return (
    <Frame>
      <Chrome />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="h-3 w-1/3 rounded-full bg-fg/15" />
          <div className="flex -space-x-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-4 rounded-full border-2 border-surface-2 bg-fg/25" />
            ))}
          </div>
        </div>
        <div className="mt-3 divide-y divide-line rounded-lg border border-line">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3 px-2.5 py-2">
              <span className="h-2 w-1/3 rounded-full bg-fg/15" />
              <span className="h-2 flex-1 rounded-full bg-fg/[0.08]" />
              <span
                className={cn("h-3 w-6 rounded-full", i === 0 ? "bg-accent" : "bg-fg/15")}
              />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const visuals: Record<Visual, () => React.ReactNode> = {
  browser: Browser,
  phone: Phone,
  dashboard: Dashboard,
  chat: Chat,
  flow: Flow,
  ledger: Ledger,
  saas: Saas,
};

export function ProjectVisual({ kind }: { kind: Visual }) {
  const Visual = visuals[kind];
  return (
    <div aria-hidden className="dot-grid absolute inset-0 opacity-100 [background-size:16px_16px]">
      <Visual />
    </div>
  );
}
