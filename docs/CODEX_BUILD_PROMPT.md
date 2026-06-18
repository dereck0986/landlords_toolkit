# Codex Build Prompt — Landlords Toolkit V1

## Objective

Build V1 of `landlords_toolkit`: a privacy-first, SEO-driven landlord asset ecosystem for small landlords and DIY property managers.

This is not AppFolio, TurboTenant, or ezLandlordForms. Do not build rent collection, tenant screening, messaging, accounts, CRM, or stored tenant records.

The product philosophy is:

> Generate. Download. Forget.

## Repository Strategy

Create a Next.js monorepo-ready structure that can later support multiple focused `.com` sites from one shared codebase.

Use a clean structure similar to:

```txt
apps/
  landlordforms/
packages/
  ui/
  content/
  calculators/
  seo/
  legal/
public/
  downloads/
content/
  forms/
  calculators/
  articles/
```

For V1, implement only the first app:

```txt
apps/landlordforms
```

## Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- static content files
- no database
- no authentication
- no external API dependency for V1

## Required V1 Pages

Build the following pages:

1. Homepage
2. Free forms library
3. Maintenance Request Template page
4. Noise Complaint Letter page
5. Late Rent Notice page
6. Move-In Checklist page
7. Rent Ledger Spreadsheet page
8. Calculators index
9. Cash Flow Calculator
10. Cap Rate Calculator
11. ROI Calculator
12. Premium Toolkit placeholder
13. Privacy page
14. Terms/disclaimer page

## Design Direction

Professional, clean, fast, quiet.

Avoid gimmicky SaaS dashboards. This should feel like a trusted professional document library.

Use simple cards, search-friendly pages, clear calls to action, and downloadable asset sections.

## Homepage Copy Direction

Positioning:

- Free landlord forms, spreadsheets, and calculators.
- Built for small landlords who use texts, emails, spreadsheets, and paper records.
- No account required.
- Download what you need and move on.

Primary CTA:

- Browse Free Forms

Secondary CTA:

- Use Free Calculators

## Content Model

Create reusable content entries for forms/calculators. Each form should include:

- slug
- title
- description
- keywords
- use case
- included formats
- disclaimer note
- CTA label

Seed at least these forms:

- maintenance-request-template
- noise-complaint-letter
- late-rent-notice
- move-in-checklist
- rent-ledger-spreadsheet
- mold-complaint-letter
- lease-renewal-letter
- move-out-checklist
- security-deposit-return-letter
- maintenance-log-spreadsheet

## Download Handling

For V1, create placeholder download buttons that point to static file paths such as:

```txt
/downloads/forms/maintenance-request-template.pdf
/downloads/forms/maintenance-request-template.docx
/downloads/spreadsheets/rent-ledger-template.xlsx
```

Also include a small note:

> Template files are placeholders in V1 and should be replaced with final production documents before launch.

## Calculators

Build client-side calculators only. Do not store inputs.

### Cash Flow Calculator
Inputs:

- monthly rent
- other income
- mortgage
- taxes
- insurance
- repairs
- utilities
- other expenses

Outputs:

- total monthly income
- total monthly expenses
- net monthly cash flow
- annual cash flow

### Cap Rate Calculator
Inputs:

- property value / purchase price
- annual net operating income

Output:

- cap rate percentage

### ROI Calculator
Inputs:

- cash invested
- annual profit

Output:

- annual ROI percentage

Add privacy note on every calculator:

> Your numbers are calculated in your browser and are not stored.

## Privacy Requirements

V1 must not include:

- login
- signup requirement
- database
- tenant profile storage
- payment processing
- rent collection
- tenant screening
- SSN collection
- bank account collection
- medical data
- children’s data

Privacy page must clearly say:

- We collect as little information as possible.
- Free tools are designed to work without accounts.
- Calculator inputs are not stored.
- Generated/downloaded templates are user controlled.

## Legal Disclaimer

Add clear disclaimers:

- Templates are for general informational use.
- They are not legal advice.
- Landlord-tenant laws vary by state, county, and city.
- Users should consult a qualified attorney or local housing authority when needed.

## SEO Requirements

Every public page should include:

- metadata title
- metadata description
- clean slug
- H1
- intro paragraph
- FAQ section where useful
- internal links to related forms/calculators

## Premium Placeholder

Create `/premium` with:

- Premium Forms Library
- Premium Spreadsheet Suite
- Future AI Letter Generators
- State Packs
- Coming soon CTA

No payment integration yet.

## Quality Bar

Before finishing:

- `npm install` should work
- `npm run lint` should pass or be configured cleanly
- `npm run build` should pass
- No database dependencies
- No fake backend
- No broken imports
- No TODO spam in UI
- Mobile responsive

## Deliverables

Commit the working V1 app to a branch named:

```txt
asset-garden-v1
```

Summarize:

- files changed
- commands run
- build status
- what is still placeholder
- next recommended phase
