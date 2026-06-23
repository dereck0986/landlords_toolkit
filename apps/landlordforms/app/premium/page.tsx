import type { Metadata } from "next";
import { ButtonLink, Card, Hero, PageShell } from "../../components/ui";
import { PremiumCheckoutButton } from "../../components/premium-checkout-button";

export const metadata: Metadata = {
  title: "Premium Landlord Toolkit",
  description: "Premium forms, spreadsheets, future AI letter generators, and state packs for landlords. Coming soon."
};

const premiumItems = [
  "Premium Forms Library",
  "Premium Spreadsheet Suite",
  "Incident Report Pack",
  "Inspection Pack",
  "Future State Packs"
];

export default function PremiumPage() {
  return (
    <PageShell>
      <Hero
        title="Premium landlord toolkit"
        intro="A future one-time purchase bundle for landlords who want deeper document packs, spreadsheet suites, incident reports, inspection tools, and state-focused resources."
        actions={
          <>
            <PremiumCheckoutButton />
            <ButtonLink href="/forms" variant="secondary">
              Use the free library
            </ButtonLink>
          </>
        }
      />
      <p className="mt-8 inline-flex rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-ink">
        Launch price: $49
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {premiumItems.map((item) => (
          <Card key={item} title={item}>
            Coming soon as a simple digital product. Payments should use Stripe Checkout so card data never touches this app.
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
