# Landlords Toolkit

Privacy-first landlord asset ecosystem for small landlords, DIY property managers, rental arbitrage operators, HOAs, and maintenance managers.

## Mission

Build a low-liability, SEO-driven toolkit of reusable landlord assets:

- free forms
- spreadsheets
- calculators
- AI letter generators
- state guides
- premium bundles

This is not a full property-management SaaS. The product philosophy is:

> Generate. Download. Forget.

## Product Strategy

The repo is structured as a future multi-site asset garden. One codebase can support multiple focused domains:

- Landlord forms
- Rental spreadsheets
- Rental calculators
- Incident reports
- Property inspection checklists
- HOA forms
- Airbnb host forms

## Core Rules

- No unnecessary accounts
- No rent collection
- No tenant screening
- No SSNs
- No bank data
- No stored sensitive tenant records
- Stateless tools whenever possible
- SEO-first pages
- Evergreen content
- Low support burden

## Phase 1 Scope

V1 should ship:

- homepage
- free forms library
- 5 downloadable template pages
- 3 calculators
- premium toolkit placeholder
- privacy-first disclaimer
- SEO-ready metadata
- static content structure

## Recommended Stack

- Next.js
- TypeScript
- Tailwind CSS
- MDX or content-driven pages
- Vercel deployment
- Stripe later for premium downloads

## Development Branch

Initial build branch:

```txt
asset-garden-v1
```

## V1 Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

The first app lives in `apps/landlordforms`. Shared static content and calculator helpers live in `packages/content` and `packages/calculators`.
