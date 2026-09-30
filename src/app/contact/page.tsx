import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { Inquiry } from "@/components/sections/Inquiry";
import { faqs } from "@/content/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with GenTech about a website, web application, mobile app, AI solution or custom software.",
};

const contactFaqs = faqs.filter((faq) => ["begin", "who", "existing"].includes(faq.id));

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what <span className="text-fg-muted">you want to build.</span>
          </>
        }
        lede="A short description is enough to start. We will come back with questions, then a proposal."
      >
        <p className="text-sm text-fg-muted">
          Prefer email?{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-fg underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </PageHero>
      <Inquiry />
      <FAQ items={contactFaqs} showContact={false} />
    </>
  );
}
