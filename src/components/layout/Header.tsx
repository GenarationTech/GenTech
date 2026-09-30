"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { cta, nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
          scrolled || open ? "border-line bg-surface/85 backdrop-blur-md" : "border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6 sm:h-[72px]">
          <Link
            href="/"
            onClick={close}
            aria-label={`${site.name} home`}
            className="font-display text-[1.35rem] font-semibold tracking-tight text-fg"
          >
            GenTech<span className="text-accent">.</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg",
                      isActive(item.href) && "text-fg",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href={cta.secondary.href} variant="ghost" size="sm" className="hidden xl:inline-flex">
              {cta.secondary.label}
            </Button>
            <Button href={cta.primary.href} size="sm" arrow>
              {cta.primary.label}
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:bg-surface-3 lg:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </Container>
      </header>

      <MobileMenu open={open} onClose={close} pathname={pathname} />
    </>
  );
}
