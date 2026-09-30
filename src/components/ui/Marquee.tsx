import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * CSS-only marquee. Pauses on hover; for reduced motion it stops and lets the
 * items wrap instead so nothing is hidden.
 */
export function Marquee({
  children,
  reverse = false,
  duration = 48,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={cn("group flex overflow-hidden motion-safe:fade-edges-x", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 will-change-transform group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex gap-3 pr-3 motion-reduce:flex-wrap motion-reduce:pr-0">{children}</div>
        <div aria-hidden className="flex gap-3 pr-3 motion-reduce:hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
