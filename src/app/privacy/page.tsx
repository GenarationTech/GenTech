import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How GenTech handles personal information. Placeholder outline pending legal review.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="An outline of what this policy will cover once it has been reviewed and finalised."
      sections={[
        { heading: "What we collect", body: "Information you send through the contact and notification forms, such as your name, email address and project description." },
        { heading: "How we use it", body: "To reply to your inquiry, to tell you about programs you asked to hear about, and for nothing else without asking first." },
        { heading: "Storage and sharing", body: "Where the information is stored, for how long, and which service providers (if any) process it on our behalf." },
        { heading: "Your choices", body: "How to ask for a copy of your data, correct it, or have it deleted." },
        { heading: "Contact", body: "Who to contact with privacy questions." },
      ]}
    />
  );
}
