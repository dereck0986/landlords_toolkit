import type { Metadata } from "next";
import { articles } from "@landlords-toolkit/content";
import { Card, Hero, PageShell } from "../../components/ui";

export const metadata: Metadata = {
  title: "Landlord Guides and Articles",
  description: "Practical landlord articles about documentation, rent ledgers, repair requests, move-in inspections, and expense tracking."
};

export default function ArticlesPage() {
  return (
    <PageShell>
      <Hero
        title="Landlord guides and articles"
        intro="Search-friendly guides for small landlords who want practical records, simple templates, and privacy-first workflows."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.slug} href={`/articles/${article.slug}`} title={article.title}>
            {article.description}
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
