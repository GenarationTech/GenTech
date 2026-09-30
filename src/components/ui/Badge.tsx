import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "accent" | "muted";

const tones: Record<Tone, string> = {
  default: "border-line-strong text-fg",
  accent: "border-accent/40 text-accent",
  muted: "border-line text-fg-muted",
};

const dots: Record<Tone, string> = {
  default: "bg-fg",
  accent: "bg-accent",
  muted: "bg-fg-subtle",
};

export function Badge({
  children,
  tone = "default",
  dot = true,
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.68rem]",
        tones[tone],
        className,
      )}
    >
      {dot && <span aria-hidden className={cn("size-1.5 rounded-full", dots[tone])} />}
      {children}
    </span>
  );
}
