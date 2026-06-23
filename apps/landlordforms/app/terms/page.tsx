import type { Metadata } from "next";
import Link from "next/link";
import { Hero, PageShell } from "../../components/ui";

export const metadata: Metadata = {
  title: "Terms and Disclaimer",
  description: "General informational disclaimer for Landlords Toolkit forms, spreadsheets, and calculators."
};

export default function TermsPage() {
  return (
    <PageShell>
      <Hero
        title="Terms and disclaimer"
        intro="Landlords Toolkit provides general informational forms, spreadsheets, and calculators for small landlords and DIY property managers."
      />
      <section className="mt-10 max-w-3xl rounded-lg border border-line bg-white p-5">
        <h2 className="text-xl font-semibold text-ink">Legal disclaimer</h2>
        <div className="mt-3 space-y-4 leading-7 text-ink/75">
          <p>Templates are for general informational use only. They are not legal advice.</p>
          <p>Landlord-tenant laws vary by state, county, and city. Users should consult a qualified attorney or local housing authority when needed.</p>
          <p>Calculator results are estimates and should be reviewed against your own records, leases, tax information, insurance terms, and local requirements.</p>
        </div>
      </section>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-ink">Related pages</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/privacy" className="rounded-md border border-line px-4 py-2 text-sm font-semibold hover:border-moss hover:text-moss">
            Privacy
          </Link>
          <Link href="/forms" className="rounded-md border border-line px-4 py-2 text-sm font-semibold hover:border-moss hover:text-moss">
            Forms library
          </Link>
          <Link href="/calculators" className="rounded-md border border-line px-4 py-2 text-sm font-semibold hover:border-moss hover:text-moss">
            Calculators
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
