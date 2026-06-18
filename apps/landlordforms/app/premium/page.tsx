import type { Metadata } from "next";
import { ButtonLink, Card, Hero, PageShell } from "../../components/ui";

export const metadata: Metadata = {
  title: "Premium Landlord Toolkit",
  description: "Premium forms, spreadsheets, future AI letter generators, and state packs for landlords. Coming soon."
};

const premiumItems = [
  "Premium Forms Library",
  "Premium Spreadsheet Suite",
  "Future AI Letter Generators",
  "State Packs"
];

export default function PremiumPage() {
  return (
    <PageShell>
      <Hero
        title="Premium landlord toolkit"
        intro="A paid library of deeper landlord document packs, spreadsheet suites, state-focused bundles, and future stateless AI letter generators."
        actions={<ButtonLink href="/forms">Use the free library while premium is coming soon</ButtonLink>}
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {premiumItems.map((item) => (
          <Card key={item} title={item}>
            Coming soon. No payment integration is included in V1.
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
