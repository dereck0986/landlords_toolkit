import type { Metadata } from "next";
import Link from "next/link";
import { forms, getFormBySlug } from "@landlords-toolkit/content";
import { notFound } from "next/navigation";
import { Faq, PageShell, PlaceholderNote } from "../../../components/ui";

type FormPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return forms.map((form) => ({ slug: form.slug }));
}

export async function generateMetadata({ params }: FormPageProps): Promise<Metadata> {
  const { slug } = await params;
  const form = getFormBySlug(slug);

  if (!form) {
    return {};
  }

  return {
    title: form.title,
    description: form.description,
    keywords: form.keywords
  };
}

export default async function FormDetailPage({ params }: FormPageProps) {
  const { slug } = await params;
  const form = getFormBySlug(slug);

  if (!form) {
    notFound();
  }

  const related = forms.filter((item) => item.slug !== form.slug).slice(0, 3);

  return (
    <PageShell>
      <article className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">
          Free landlord template
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{form.title}</h1>
        <p className="mt-5 text-lg leading-8 text-ink/75">{form.description}</p>

        <section className="mt-8 rounded-lg border border-line bg-white p-5">
          <h2 className="text-xl font-semibold text-ink">Use case</h2>
          <p className="mt-3 leading-7 text-ink/75">{form.useCase}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-ink">Download options</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {form.downloads.map((download) => (
              <Link
                key={download.href}
                href={download.href}
                className="rounded-md bg-moss px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink"
              >
                {form.ctaLabel} ({download.label})
              </Link>
            ))}
          </div>
          <PlaceholderNote />
        </section>

        <section className="mt-8 rounded-lg border border-line bg-white p-5">
          <h2 className="text-xl font-semibold text-ink">Disclaimer</h2>
          <p className="mt-3 leading-7 text-ink/75">{form.disclaimerNote}</p>
        </section>

        <Faq items={form.faq} />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-ink">Related forms</h2>
          <div className="mt-4 grid gap-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/forms/${item.slug}`} className="text-moss underline">
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </PageShell>
  );
}
