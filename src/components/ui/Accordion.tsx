"use client";

import { useId, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = { id: string; question: string; answer: string };

export function Accordion({
  items,
  defaultOpen,
  className,
}: {
  items: AccordionItem[];
  defaultOpen?: string;
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? null);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => {
        const open = openId === item.id;
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-fg sm:py-6"
              >
                <span className="text-[17px] font-medium leading-snug text-fg sm:text-lg">{item.question}</span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line-strong text-fg transition-[transform,background-color,color] duration-300 ease-out-expo group-hover:bg-surface-3",
                    open && "rotate-45 bg-fg text-surface group-hover:bg-fg",
                  )}
                >
                  <Plus className="size-3.5" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <m.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-fg-muted sm:text-base">{item.answer}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
