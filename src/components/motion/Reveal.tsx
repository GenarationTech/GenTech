"use client";

import { m, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type RevealProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
  once?: boolean;
};

/** Fade + rise into view. Transform is dropped automatically for reduced motion. */
export function Reveal({ id, children, className, delay = 0, y = 24, amount = 0.25, once = true }: RevealProps) {
  return (
    <m.div
      id={id}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

type StaggerProps = { children: ReactNode; className?: string; amount?: number };

export function Stagger({ children, className, amount = 0.15 }: StaggerProps) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={staggerParent}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div className={className} variants={staggerChild}>
      {children}
    </m.div>
  );
}

export function StaggerList({ children, className, amount = 0.15 }: StaggerProps) {
  return (
    <m.ul
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={staggerParent}
    >
      {children}
    </m.ul>
  );
}

export function StaggerListItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.li className={className} variants={staggerChild}>
      {children}
    </m.li>
  );
}
