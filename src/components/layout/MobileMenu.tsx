"use client";

import Link from "next/link";
import { AnimatePresence, m, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { cta, nav, socials } from "@/lib/site";
import { cn } from "@/lib/utils";

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
  exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
};

export function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <m.div
          key="mobile-menu"
          id="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-surface lg:hidden"
        >
          <div className="flex min-h-full flex-col px-5 pt-4 pb-8 sm:px-8">
            <m.nav aria-label="Mobile" variants={list} initial="hidden" animate="show" exit="exit">
              <ul>
                {nav.map((entry, index) => {
                  const active = entry.href === "/" ? pathname === "/" : pathname.startsWith(entry.href);
                  return (
                    <m.li key={entry.href} variants={item} className="border-b border-line">
                      <Link
                        href={entry.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className="flex items-center justify-between py-4"
                      >
                        <span className={cn("display text-3xl", active ? "text-fg" : "text-fg/80")}>{entry.label}</span>
                        <span className="font-mono text-xs text-fg-subtle">0{index + 1}</span>
                      </Link>
                    </m.li>
                  );
                })}
              </ul>
            </m.nav>

            <m.div
              variants={item}
              initial="hidden"
              animate="show"
              exit="exit"
              transition={{ delay: 0.4, duration: 0.45, ease: EASE }}
              className="mt-8 flex flex-col gap-3"
            >
              <Button href={cta.primary.href} size="lg" arrow onClick={onClose}>
                {cta.primary.label}
              </Button>
              <Button href={cta.secondary.href} variant="outline" size="lg" onClick={onClose}>
                {cta.secondary.label}
              </Button>
            </m.div>

            <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-10">
              {socials.map((social) => (
                <li key={social.key}>
                  <a
                    href={social.href}
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em] text-fg-muted hover:text-fg"
                  >
                    {social.label}
                    <ArrowUpRight aria-hidden className="size-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
