import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/site";

export type LegalSection = { heading: string; body: string };

/**
 * Skeleton for legal pages. The copy is a clearly marked placeholder and must
 * be replaced by text reviewed by the company before launch.
 */
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Draft · placeholder" title={title} lede={intro} />
      <Container className="pb-24">
        <div className="max-w-2xl rounded-2xl border border-dashed border-line-strong p-5 text-sm text-fg-muted">
          This page is a placeholder outline. Replace it with wording reviewed by {site.name} before the site goes
          live.
        </div>
        <div className="mt-12 max-w-2xl space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="display-sm text-2xl">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-fg-muted">{section.body}</p>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
