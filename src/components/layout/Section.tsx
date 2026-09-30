import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /** Flip to the dark palette. */
  theme?: "paper" | "ink";
  /** Remove the default vertical rhythm. */
  flush?: boolean;
};

export function Section({ theme = "paper", flush = false, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative scroll-mt-16 sm:scroll-mt-[72px]",
        !flush && "py-20 sm:py-28 lg:py-32",
        theme === "ink" && "theme-ink bg-surface text-fg",
        className,
      )}
      {...props}
    />
  );
}
