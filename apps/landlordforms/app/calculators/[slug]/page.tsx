import type { Metadata } from "next";
import Link from "next/link";
import { calculators, getCalculatorBySlug } from "@landlords-toolkit/content";
import { notFound } from "next/navigation";
import { CashFlowCalculator, CapRateCalculator, RoiCalculator } from "../../../components/calculators";
import { PageShell } from "../../../components/ui";

type CalculatorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return calculators.map((calculator) => ({ slug: calculator.slug }));
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    return {};
  }

  return {
    title: calculator.title,
    description: calculator.description,
    keywords: calculator.keywords
  };
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    notFound();
  }

  return (
    <PageShell>
      <article>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">
          Free rental calculator
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{calculator.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{calculator.description}</p>
        <div className="mt-8">{renderCalculator(calculator.slug)}</div>
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold text-ink">Related tools</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {calculators
              .filter((item) => item.slug !== calculator.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/calculators/${item.slug}`}
                  className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-moss hover:text-moss"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </section>
      </article>
    </PageShell>
  );
}

function renderCalculator(slug: string) {
  if (slug === "cash-flow-calculator") {
    return <CashFlowCalculator />;
  }

  if (slug === "cap-rate-calculator") {
    return <CapRateCalculator />;
  }

  if (slug === "roi-calculator") {
    return <RoiCalculator />;
  }

  return null;
}
