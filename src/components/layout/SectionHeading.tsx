import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, lede, align = "left", size = "md", className, id }: Props) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className={cn("mb-6", align === "center" && "flex justify-center")}>
          <Badge tone="muted">{eyebrow}</Badge>
        </div>
      )}
      <h2
        id={id}
        className={cn(
          "display text-fg",
          size === "lg"
            ? "text-[2.6rem] sm:text-6xl lg:text-7xl"
            : "text-[2.2rem] sm:text-5xl lg:text-[3.5rem]",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
