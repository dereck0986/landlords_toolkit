import Link from "next/link";

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">{children}</div>;
}

export function Hero({
  title,
  intro,
  actions
}: {
  title: string;
  intro: string;
  actions?: React.ReactNode;
}) {
  return (
    <section className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-moss">
        Privacy-first landlord tools
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-ink/75">{intro}</p>
      {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "rounded-md bg-moss px-4 py-2.5 text-sm font-semibold text-white hover:bg-ink"
      : "rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:border-moss hover:text-moss";

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Card({
  title,
  children,
  href
}: {
  title: string;
  children: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="h-full rounded-lg border border-line bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-ink/70">{children}</div>
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full hover:-translate-y-0.5 hover:transition">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-ink">FAQ</h2>
      <div className="mt-4 grid gap-4">
        {items.map((item) => (
          <div key={item.question} className="rounded-lg border border-line bg-white p-5">
            <h3 className="font-semibold text-ink">{item.question}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/70">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PlaceholderNote() {
  return (
    <p className="mt-4 rounded-md border border-line bg-paper p-3 text-sm text-ink/70">
      Template files are placeholders in V1 and should be replaced with final production documents before launch.
    </p>
  );
}
