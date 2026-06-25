# Phase 3 — Growth Infrastructure Prompt

## Objective

Launch the first growth layer for Landlords Toolkit.

This phase should add privacy-friendly analytics, search indexing basics, social preview metadata, and lightweight operational documentation without changing the core privacy-first product philosophy.

Current live site:

```txt
https://landlords-toolkit.vercel.app/
```

Current branch:

```txt
asset-garden-v1
```

## Product Rules

Preserve these rules:

- no login
- no database
- no tenant record storage
- no payment-card handling inside the app
- no invasive analytics
- no cookie banner requirement if avoidable
- no personal tracking
- stateless tools whenever possible

## Scope

Implement:

1. Plausible analytics integration
2. Download/event tracking helpers
3. `robots.txt`
4. `sitemap.xml`
5. improved metadata and Open Graph defaults
6. favicon/app icon placeholders if missing
7. `CHANGELOG.md`
8. `ROADMAP.md`
9. a short launch checklist doc

## Plausible Analytics

Use Plausible because it is privacy-friendly and does not require cookies.

Preferred package:

```bash
npm install next-plausible
```

Add a provider at the app layout level.

Do not hardcode only one permanent domain. Use an environment variable if practical:

```txt
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=landlords-toolkit.vercel.app
```

Add to `.env.example`:

```txt
NEXT_PUBLIC_PREMIUM_CHECKOUT_URL=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=landlords-toolkit.vercel.app
```

If the Plausible domain variable is missing, the app should still build safely.

## Event Tracking

Create a small helper or component pattern for tracking events such as:

- `Download PDF`
- `Download DOCX`
- `Download XLSX`
- `Premium CTA Click`
- `Calculator Used`

Do not block downloads if tracking fails.

Do not store event data locally.

Do not add user identifiers.

## SEO Technical Basics

Add or verify:

### robots.txt

Should allow crawling and point to sitemap:

```txt
User-agent: *
Allow: /
Sitemap: https://landlords-toolkit.vercel.app/sitemap.xml
```

### sitemap.xml

Generate all currently available public routes:

- `/`
- `/forms`
- all form detail pages
- `/calculators`
- all calculator pages
- `/articles`
- all article pages
- `/premium`
- `/privacy`
- `/terms`

Use Next.js metadata route if appropriate:

```txt
app/sitemap.ts
app/robots.ts
```

Prefer dynamic generation from existing content arrays so the sitemap updates as content grows.

## Metadata / Open Graph

Improve global metadata in layout if needed:

Default title:

```txt
Landlords Toolkit — Free Landlord Forms, Calculators & Templates
```

Default description:

```txt
Free landlord forms, rental spreadsheets, calculators, and professional templates for small landlords. No account required.
```

Add Open Graph defaults:

- title
- description
- site name
- URL
- type: website

Add Twitter card metadata.

If no real OG image exists, add a simple placeholder metadata path and document that a production image is still needed.

## App Icons

If missing, add placeholder favicon/app icon setup. Do not spend time on visual design here.

Acceptable:

- basic favicon
- simple generated SVG icon
- documented TODO for production brand assets

## Documentation

Add:

### CHANGELOG.md

Include V1 launch entry:

- production app deployed
- real downloadable PDF/DOCX/XLSX assets
- calculators
- SEO articles
- premium checkout-ready architecture
- security headers

### ROADMAP.md

Include:

Phase 3:

- analytics
- search console
- sitemap
- robots
- metadata

Phase 4:

- expand to 100 pages
- add more forms
- add more calculators
- add incident report library

Phase 5:

- premium bundle
- Stripe Checkout link
- affiliate layer

Phase 6:

- stateless AI generators

### docs/LAUNCH_CHECKLIST.md

Include:

- Vercel deployment status
- Plausible setup
- Google Search Console setup
- Bing Webmaster Tools setup
- Stripe Checkout link setup
- domain setup
- sitemap submission
- manual smoke test list

## Manual Setup Notes

Add notes that these must be done outside code:

1. Create Plausible site for `landlords-toolkit.vercel.app`
2. Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` in Vercel env vars
3. Add site to Google Search Console
4. Submit sitemap
5. Add site to Bing Webmaster Tools
6. Create Stripe Payment Link later
7. Add `NEXT_PUBLIC_PREMIUM_CHECKOUT_URL` in Vercel env vars

## Validation

Run:

```bash
npm install
npm run generate:assets
npm run lint
npm run build
git diff --check
```

If dependencies change, inspect audit output but do not run `npm audit fix --force` unless explicitly approved.

## Commit

Commit with:

```bash
git commit -m "Launch Phase 3 growth infrastructure"
```

Push to:

```bash
git push origin asset-garden-v1
```

## Report Back

Report:

- files changed
- package installed
- env vars added
- analytics behavior
- sitemap/robots status
- commands run
- build status
- Vercel settings/manual steps still needed
