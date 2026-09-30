import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the GenTech website. Placeholder outline pending legal review.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      intro="An outline of the terms that will apply to using this website once they have been reviewed and finalised."
      sections={[
        { heading: "Use of this site", body: "The website is provided for information about GenTech and for contacting us about projects and programs." },
        { heading: "Content", body: "Example projects and case studies are illustrative unless explicitly marked as real work. Text and design belong to GenTech." },
        { heading: "No offer", body: "Nothing on the site is a binding quote or offer. Project terms are agreed in a separate written proposal." },
        { heading: "Liability", body: "The limits of GenTech's responsibility for information published on the site." },
        { heading: "Changes", body: "How and when these terms may be updated." },
      ]}
    />
  );
}
