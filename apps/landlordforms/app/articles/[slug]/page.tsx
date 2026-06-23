import type { Metadata } from "next";
import Link from "next/link";
import { articles, getArticleBySlug } from "@landlords-toolkit/content";
import { notFound } from "next/navigation";
import { Faq, PageShell } from "../../../components/ui";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <PageShell>
      <article className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">
          Landlord guide
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{article.title}</h1>
        <p className="mt-5 text-lg leading-8 text-ink/75">{article.description}</p>

        <div className="mt-10 space-y-9">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-ink">{section.heading}</h2>
              <div className="mt-3 space-y-4 leading-7 text-ink/75">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-lg border border-line bg-white p-5">
          <h2 className="text-2xl font-semibold text-ink">Related tools</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {article.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-moss hover:text-moss"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <Faq items={article.faq} />
      </article>
    </PageShell>
  );
}
