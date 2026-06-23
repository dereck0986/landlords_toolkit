import type { Metadata } from "next";
import { calculators } from "@landlords-toolkit/content";
import { Card, Hero, PageShell } from "../../components/ui";

export const metadata: Metadata = {
  title: "Free Rental Property Calculators",
  description: "Use browser-only rental property calculators for cash flow, cap rate, and ROI. No account required."
};

export default function CalculatorsPage() {
  return (
    <PageShell>
      <Hero
        title="Free rental property calculators"
        intro="Estimate common landlord numbers in your browser. Inputs are not stored, uploaded, or connected to an account."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {calculators.map((calculator) => (
          <Card key={calculator.slug} href={`/calculators/${calculator.slug}`} title={calculator.title}>
            {calculator.description}
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
