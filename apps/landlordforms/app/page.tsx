import { calculators, forms } from "@landlords-toolkit/content";
import { ButtonLink, Card, Hero, PageShell } from "../components/ui";

export default function HomePage() {
  return (
    <PageShell>
      <Hero
        title="Free landlord forms, spreadsheets, and calculators."
        intro="Built for small landlords who use texts, emails, spreadsheets, and paper records. No account required. Download what you need and move on."
        actions={
          <>
            <ButtonLink href="/forms">Browse Free Forms</ButtonLink>
            <ButtonLink href="/calculators" variant="secondary">
              Use Free Calculators
            </ButtonLink>
          </>
        }
      />

      <section className="mt-14 grid gap-5 md:grid-cols-3">
        <Card title="No stored tenant profiles">
          This is a document library and calculator set, not a property-management database.
        </Card>
        <Card title="Browser-only calculators">
          Rental math runs in your browser. Inputs are not sent to an account or backend.
        </Card>
        <Card title="Downloadable assets">
          Start with forms, letters, checklists, and spreadsheets you control.
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink">Popular landlord forms</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {forms.slice(0, 6).map((form) => (
            <Card key={form.slug} href={`/forms/${form.slug}`} title={form.title}>
              {form.description}
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink">Free rental calculators</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {calculators.map((calculator) => (
            <Card key={calculator.slug} href={`/calculators/${calculator.slug}`} title={calculator.title}>
              {calculator.description}
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
