import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/content/services";

export function ServicesDetail() {
  return (
    <Section id="services" className="pt-4 sm:pt-8 lg:pt-10">
      <Container>
        <div className="divide-y divide-line border-t border-line">
          {services.map((service, index) => (
            <Reveal key={service.slug} amount={0.2}>
              <article id={service.slug} className="grid scroll-mt-24 gap-6 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-surface-3 text-fg">
                      <ServiceIcon icon={service.icon} className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-fg-subtle">0{index + 1}</span>
                  </div>
                  <h2 className="display-sm mt-6 text-3xl sm:text-4xl">{service.title}</h2>
                  <p className="mt-3 text-fg-muted">{service.short}</p>
                </div>
                <div className="lg:col-span-7 lg:pt-2">
                  <p className="text-lg leading-relaxed text-fg sm:text-xl">{service.detail}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-sm text-fg-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
