import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const control =
  "w-full rounded-xl border border-line-strong bg-surface-2 px-4 text-[15px] text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow] duration-200 focus:border-fg focus:outline-none focus:ring-2 focus:ring-fg/10 aria-[invalid=true]:border-accent";

export function Label({ className, ...props }: ComponentPropsWithoutRef<"label">) {
  return <label className={cn("mb-2 block text-sm font-medium text-fg", className)} {...props} />;
}

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return <input className={cn(control, "h-12", className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentPropsWithoutRef<"textarea">) {
  return <textarea className={cn(control, "min-h-36 resize-y py-3", className)} {...props} />;
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-accent">
      {message}
    </p>
  );
}
