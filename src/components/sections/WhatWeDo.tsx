import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "@/content/services";

export function WhatWeDo() {
  return (
    <Section id="what-we-do" className="scroll-mt-16">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Technology that <span className="text-fg-muted">moves with you.</span>
            </>
          }
          lede="GenTech helps businesses turn ideas into working digital products: from a first website to complete systems with AI built in."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <StaggerItem key={service.slug} className="h-full">
              <SpotlightCard className="h-full">
                <Link href={`/services#${service.slug}`} className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-2xl bg-surface-3 text-fg">
                      <ServiceIcon icon={service.icon} className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-fg-subtle">0{index + 1}</span>
                  </div>
                  <h3 className="display-sm mt-10 text-2xl">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{service.short}</p>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
                    Explore
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
