import type { Metadata } from "next";
import Link from "next/link";
import PlausibleProvider from "next-plausible";
import "./globals.css";

const siteUrl = "https://landlords-toolkit.vercel.app";
const siteTitle = "Landlords Toolkit - Free Landlord Forms, Calculators & Templates";
const siteDescription =
  "Free landlord forms, rental spreadsheets, calculators, and professional templates for small landlords. No account required.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Landlords Toolkit"
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "Landlords Toolkit",
    url: siteUrl,
    type: "website",
    images: ["/opengraph-placeholder.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-placeholder.svg"]
  },
  icons: {
    icon: "/icon.svg"
  }
};

const navItems = [
  { href: "/forms", label: "Forms" },
  { href: "/calculators", label: "Calculators" },
  { href: "/articles", label: "Articles" },
  { href: "/premium", label: "Premium" },
  { href: "/privacy", label: "Privacy" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const page = plausibleDomain ? (
    <PlausibleProvider
      src="https://plausible.io/js/script.js"
      scriptProps={{ "data-domain": plausibleDomain } as React.ScriptHTMLAttributes<HTMLScriptElement>}
    >
      {children}
    </PlausibleProvider>
  ) : (
    children
  );

  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <header className="border-b border-line bg-paper/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
              Landlords Toolkit
            </Link>
            <nav className="flex flex-wrap gap-4 text-sm font-medium text-ink/75">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-moss">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{page}</main>
        <footer className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm text-ink/70 md:grid-cols-3">
            <p>Generate. Download. Forget.</p>
            <Link href="/terms" className="hover:text-moss">
              Terms and disclaimer
            </Link>
            <p>Free tools are designed to work without accounts or stored tenant profiles.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
