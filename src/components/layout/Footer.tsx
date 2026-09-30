import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { footerLinks, site, socials } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="theme-ink border-t border-line bg-surface text-fg">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
              GenTech<span className="text-accent">.</span>
            </Link>
            <p className="display mt-6 text-4xl sm:text-5xl">{site.tagline}</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-fg-muted">{site.description}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="eyebrow mb-5">Explore</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-fg/80 transition-colors hover:text-fg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow mb-5">Follow</h2>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.key}>
                  <a
                    href={social.href}
                    className="inline-flex items-center gap-1.5 text-sm text-fg/80 transition-colors hover:text-fg"
                  >
                    {social.label}
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-fg-subtle">Profile links will be added as they go live.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-[0.08em] uppercase">
            <span className="text-fg">Stage 01</span> Software services
            <span className="mx-3 text-fg-subtle">/</span>
            <span className="text-fg">Stage 02</span> Developer education · upcoming
          </p>
        </div>
      </Container>
    </footer>
  );
}
