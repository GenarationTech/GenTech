import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="404"
        title={
          <>
            This page <span className="text-fg-muted">does not exist.</span>
          </>
        }
        lede="The link may be old, or the page may have moved. Head back to the start."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </PageHero>
    </div>
  );
}
