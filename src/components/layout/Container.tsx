import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = { as?: T; className?: string } & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "className"
>;

export function Container<T extends ElementType = "div">({ as, className, ...props }: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return <Tag className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)} {...props} />;
}
