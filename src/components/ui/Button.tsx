import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex shrink-0 items-center justify-center rounded-full font-medium tracking-[-0.01em] whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 ease-out active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-surface hover:bg-fg/85",
  accent: "bg-accent text-accent-fg hover:bg-accent-hover",
  outline: "border border-line-strong text-fg hover:border-fg hover:bg-surface-2",
  ghost: "text-fg hover:bg-surface-3",
};

const sizes: Record<Size, string> = {
  sm: "h-9 gap-1.5 px-4 text-sm",
  md: "h-11 gap-2 px-5 text-[15px]",
  lg: "h-12 gap-2 px-6 text-base sm:h-13 sm:px-7",
};

type Common = {
  variant?: Variant;
  size?: Size;
  /** Append a small arrow that nudges on hover. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type AsLink = Common & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;
type AsButton = Common & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = AsLink | AsButton;

function Arrow() {
  return (
    <ArrowRight
      aria-hidden
      className="size-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5"
    />
  );
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = "primary", size = "md", arrow, className, children, href, ...rest } = props;
    const classes = cn(base, variants[variant], sizes[size], className);
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={classes} {...rest}>
          {children}
          {arrow && <Arrow />}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
        {arrow && <Arrow />}
      </Link>
    );
  }

  const { variant = "primary", size = "md", arrow, className, children, type = "button", ...rest } = props;
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
