"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A lightweight Canvas 2D "system" of connected nodes.
 * Six anchors (AI, Web, Mobile, Software, Blockchain, People) sit on a ring;
 * a pulse travels around the ring while drifting particles connect to
 * whatever is near them. Pointer movement nudges the particles and scrolling
 * tightens the connections. Reduced motion renders a single static frame.
 */

const ANCHORS = [
  { id: "ai", label: "AI", x: 0.5, y: 0.12 },
  { id: "web", label: "Web", x: 0.88, y: 0.32 },
  { id: "mobile", label: "Mobile", x: 0.86, y: 0.74 },
  { id: "software", label: "Software", x: 0.5, y: 0.9 },
  { id: "blockchain", label: "Blockchain", x: 0.14, y: 0.74 },
  { id: "people", label: "People", x: 0.12, y: 0.32 },
] as const;

const CYCLE_MS = 2600;

type Particle = { x: number; y: number; vx: number; vy: number; r: number };
type Rgb = [number, number, number];

function toRgb(hex: string): Rgb {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const n = Number.parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgba([r, g, b]: Rgb, a: number) {
  return `rgba(${r},${g},${b},${a})`;
}

export function HeroNetwork({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const activeAt = useRef(0);
  const pointer = useRef({ x: -9999, y: -9999, inside: false });
  const redraw = useRef<() => void>(() => {});
  const reduce = useReducedMotion() ?? false;

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % ANCHORS.length), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    activeRef.current = active;
    activeAt.current = performance.now();
    if (reduce) redraw.current();
  }, [active, reduce]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const styles = getComputedStyle(wrap);
    const fg = toRgb(styles.getPropertyValue("--fg").trim() || "#0c0e12");
    const accent = toRgb(styles.getPropertyValue("--accent").trim() || "#ea4c1d");
    const surface = toRgb(styles.getPropertyValue("--surface").trim() || "#f6f5f1");

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    let running = false;
    let visible = false;
    let last = performance.now();

    const seed = () => {
      const count = Math.round(Math.min(54, Math.max(26, (width * height) / 9500)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1 + Math.random() * 1.3,
      }));
    };

    const draw = (now: number, dt: number) => {
      ctx.clearRect(0, 0, width, height);
      const scrollP = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.8)));
      const linkDist = Math.min(width, height) * (0.2 + 0.12 * scrollP);
      const anchors = ANCHORS.map((a) => ({ x: a.x * width, y: a.y * height }));
      const current = activeRef.current;
      const p = pointer.current;
      const step = dt / 16.67;

      if (!reduce && dt > 0) {
        for (const pt of particles) {
          if (p.inside) {
            const dx = pt.x - p.x;
            const dy = pt.y - p.y;
            const d2 = dx * dx + dy * dy;
            const radius = 130;
            if (d2 < radius * radius && d2 > 1) {
              const d = Math.sqrt(d2);
              const force = (1 - d / radius) * 0.05;
              pt.vx += (dx / d) * force;
              pt.vy += (dy / d) * force;
            }
          }
          pt.vx = pt.vx * 0.985 + (Math.random() - 0.5) * 0.012;
          pt.vy = pt.vy * 0.985 + (Math.random() - 0.5) * 0.012;
          pt.x += pt.vx * step;
          pt.y += pt.vy * step;
          if (pt.x < 0) {
            pt.x = 0;
            pt.vx = Math.abs(pt.vx);
          } else if (pt.x > width) {
            pt.x = width;
            pt.vx = -Math.abs(pt.vx);
          }
          if (pt.y < 0) {
            pt.y = 0;
            pt.vy = Math.abs(pt.vy);
          } else if (pt.y > height) {
            pt.y = height;
            pt.vy = -Math.abs(pt.vy);
          }
        }
      }

      // Ring between anchors.
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);
      ctx.strokeStyle = rgba(fg, 0.16 + 0.24 * scrollP);
      ctx.beginPath();
      anchors.forEach((a, i) => {
        if (i === 0) ctx.moveTo(a.x, a.y);
        else ctx.lineTo(a.x, a.y);
      });
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);

      // Active edge with a travelling pulse.
      {
        const a = anchors[current];
        const b = anchors[(current + 1) % anchors.length];
        const phase = reduce ? 1 : Math.min(1, (now - activeAt.current) / (CYCLE_MS * 0.7));
        const ease = 1 - Math.pow(1 - phase, 3);
        const ex = a.x + (b.x - a.x) * ease;
        const ey = a.y + (b.y - a.y) * ease;
        ctx.strokeStyle = rgba(accent, 0.9);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.fillStyle = rgba(accent, 1);
        ctx.beginPath();
        ctx.arc(ex, ey, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Particle to particle links.
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            const alpha = (1 - Math.sqrt(d2) / linkDist) * 0.16;
            ctx.strokeStyle = rgba(fg, alpha);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Particle to anchor links.
      const reach = linkDist * 1.25;
      for (const pt of particles) {
        anchors.forEach((a, k) => {
          const d = Math.hypot(pt.x - a.x, pt.y - a.y);
          if (d < reach) {
            const isActive = k === current;
            const alpha = (1 - d / reach) * (isActive ? 0.55 : 0.22);
            ctx.strokeStyle = rgba(isActive ? accent : fg, alpha);
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(a.x, a.y);
            ctx.stroke();
          }
        });
      }

      // Particles.
      ctx.fillStyle = rgba(fg, 0.45);
      for (const pt of particles) {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Anchors.
      anchors.forEach((a, k) => {
        const isActive = k === current;
        if (isActive) {
          const halo = 11 + (reduce ? 0 : Math.sin(now / 320) * 2);
          ctx.fillStyle = rgba(accent, 0.18);
          ctx.beginPath();
          ctx.arc(a.x, a.y, halo, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = rgba(surface, 1);
        ctx.strokeStyle = isActive ? rgba(accent, 1) : rgba(fg, 0.85);
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = isActive ? rgba(accent, 1) : rgba(fg, 0.9);
        ctx.beginPath();
        ctx.arc(a.x, a.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const loop = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      draw(now, dt);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduce || !visible || document.hidden) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      draw(performance.now(), 0);
    };

    redraw.current = () => draw(performance.now(), 0);

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      pointer.current = { x: event.clientX - rect.left, y: event.clientY - rect.top, inside: true };
    };
    const onLeave = () => {
      pointer.current.inside = false;
    };
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <div ref={wrapRef} className={cn("relative aspect-square w-full select-none", className)}>
      <canvas ref={canvasRef} aria-hidden className="absolute inset-0" />
      <ul
        aria-label="What GenTech connects: AI, web, mobile, software, blockchain and people"
        className="contents"
      >
        {ANCHORS.map((anchor, index) => (
          <li
            key={anchor.id}
            onMouseEnter={() => setActive(index)}
            style={{
              left: `${anchor.x * 100}%`,
              top: `${anchor.y * 100}%`,
              marginTop: anchor.y < 0.5 ? -26 : 26,
            }}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border bg-surface px-3 py-1 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors duration-300",
              index === active ? "border-accent text-accent" : "border-line-strong text-fg-muted",
            )}
          >
            {anchor.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
