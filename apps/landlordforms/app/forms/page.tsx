import type { Metadata } from "next";
import { forms } from "@landlords-toolkit/content";
import { Card, Hero, PageShell } from "../../components/ui";

export const metadata: Metadata = {
  title: "Free Landlord Forms Library",
  description: "Download free landlord forms, notices, letters, checklists, and spreadsheets. No account required."
};

export default function FormsPage() {
  return (
    <PageShell>
      <Hero
        title="Free landlord forms library"
        intro="Search-friendly landlord templates for common rental workflows, including maintenance requests, notices, checklists, letters, and spreadsheets."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {forms.map((form) => (
          <Card key={form.slug} href={`/forms/${form.slug}`} title={form.title}>
            <p>{form.description}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-moss">
              {form.includedFormats.join(" + ")}
            </p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
