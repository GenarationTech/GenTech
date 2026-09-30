"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Card with a soft accent glow that follows the pointer. Pure CSS variables, no re-renders. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-line bg-surface-2 transition-[border-color,transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_24px_60px_-32px_rgba(12,14,18,0.35)] focus-within:border-line-strong",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--accent) 12%, transparent), transparent 65%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
