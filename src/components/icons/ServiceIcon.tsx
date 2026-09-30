import { Blocks, Code2, Compass, Layers, Smartphone, Sparkles } from "lucide-react";
import type { Service } from "@/content/services";

const icons = {
  code: Code2,
  phone: Smartphone,
  sparkles: Sparkles,
  layers: Layers,
  blocks: Blocks,
  compass: Compass,
} as const;

export function ServiceIcon({ icon, className }: { icon: Service["icon"]; className?: string }) {
  const Icon = icons[icon];
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}
