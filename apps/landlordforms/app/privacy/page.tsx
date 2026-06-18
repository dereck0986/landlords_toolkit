import type { Metadata } from "next";
import { Hero, PageShell } from "../../components/ui";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Landlords Toolkit is designed to collect as little information as possible and work without accounts."
};

const excludedData = [
  "login or signup requirements",
  "database-backed tenant profiles",
  "payment processing or rent collection",
  "tenant screening",
  "SSN collection",
  "bank account collection",
  "medical data",
  "children's data"
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <Hero
        title="Privacy-first by design"
        intro="We collect as little information as possible. Free tools are designed to work without accounts, stored tenant profiles, or backend workflows."
      />
      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-white p-5">
          <h2 className="text-xl font-semibold text-ink">How the free tools work</h2>
          <p className="mt-3 leading-7 text-ink/75">
            Calculator inputs are not stored. Generated or downloaded templates are user controlled. This site does not need tenant records to provide V1 forms and calculators.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-white p-5">
          <h2 className="text-xl font-semibold text-ink">Not included in V1</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/75">
            {excludedData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
