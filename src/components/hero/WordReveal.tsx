"use client";

import { m } from "framer-motion";
import { EASE } from "@/components/motion/Reveal";

/** Splits a headline into words that rise into place one after another. */
export function WordReveal({ text, delay = 0.1 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden pb-[0.06em] align-bottom">
            <m.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: delay + index * 0.07, ease: EASE }}
            >
              {word}
            </m.span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
