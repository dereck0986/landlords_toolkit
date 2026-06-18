# Codex Build Prompt — Asset Pack V1 + Payment-Ready Setup

## Objective

Replace placeholder download links with real production-ready downloadable assets and prepare the site for a simple, secure digital-product payment flow.

Keep the product privacy-first and low-liability.

## Platform Decision

Use this architecture:

```txt
Vercel = website hosting, deployment, domains, previews, security headers
Stripe Checkout = secure hosted payment page
GitHub = source control
```

Do not build custom payment forms. Do not collect card numbers. Do not store customer payment data.

## Phase Scope

Implement:

1. Real downloadable files for the V1 free assets
2. Improved free form pages with preview/format sections
3. Premium landing page updated for a future one-time purchase
4. Payment-ready button abstraction using environment variables
5. Security headers
6. Dependency audit pass where safe
7. 10 SEO article pages

## Required Download Files

Create actual files under public downloads. Use simple professional templates.

Required minimum files:

```txt
public/downloads/forms/maintenance-request-template.pdf
public/downloads/forms/maintenance-request-template.docx
public/downloads/forms/noise-complaint-letter.pdf
public/downloads/forms/noise-complaint-letter.docx
public/downloads/forms/late-rent-notice.pdf
public/downloads/forms/late-rent-notice.docx
public/downloads/forms/move-in-checklist.pdf
public/downloads/forms/move-in-checklist.docx
public/downloads/spreadsheets/rent-ledger-template.xlsx
```

If binary file generation is difficult inside the coding environment, create source templates in Markdown/HTML first and add a clear generator script that outputs PDF/DOCX/XLSX files.

Preferred scripts:

```txt
scripts/generate-assets.ts
```

or

```txt
scripts/generate-assets.js
```

## Template Content Quality

Each template must be professional, plain, and low-risk.

Include disclaimer footer:

> This template is for general informational use only and is not legal advice. Landlord-tenant rules vary by state and city. Consult a qualified attorney or local housing authority before relying on this document for legal notice.

Avoid aggressive legal language. Use neutral business wording.

## Free Asset Content Requirements

### Maintenance Request Template
Fields:

- Tenant name
- Property address
- Unit number
- Date submitted
- Contact information
- Issue category
- Issue description
- Urgency level
- Permission to enter
- Preferred contact method
- Photos/attachments note
- Landlord response section
- Completion notes

### Noise Complaint Letter
Sections:

- Date
- Tenant/recipient
- Property/unit
- Description of reported noise issue
- Requested correction
- Documentation note
- Contact instructions
- Signature

Tone: professional, non-threatening.

### Late Rent Notice
Sections:

- Date
- Tenant
- Rental address
- Amount past due
- Due date
- Payment instructions
- Contact instructions
- Reservation of rights/disclaimer note

Avoid pretending to be a formal legal eviction notice.

### Move-In Checklist
Room-by-room checklist:

- Entry
- Living room
- Kitchen
- Bedrooms
- Bathrooms
- Windows/doors
- Floors/walls/ceilings
- Appliances
- Smoke/CO detectors
- Keys/remotes
- Notes/signatures

### Rent Ledger Spreadsheet
Columns:

- Property
- Unit
- Tenant
- Month
- Rent due
- Rent received
- Late fee
- Other charges
- Balance
- Date paid
- Payment method
- Notes

Add formulas for balance where practical.

## Payment-Ready Setup

Do not fully integrate payment unless keys are already present.

Create a reusable component:

```txt
PremiumCheckoutButton
```

Behavior:

- Reads `NEXT_PUBLIC_PREMIUM_CHECKOUT_URL`
- If set, button links to that URL
- If missing, button says `Coming soon`
- No backend required in this phase

Add `.env.example`:

```txt
NEXT_PUBLIC_PREMIUM_CHECKOUT_URL=
```

## Recommended Payment Provider

Use Stripe Checkout link first.

Reason:

- hosted payment page
- no card data touches this app
- simple one-time digital product purchase
- compatible with Vercel

Optional future alternatives:

- Lemon Squeezy for merchant-of-record style digital sales
- Gumroad for fastest no-code launch

Do not add all three. Keep V1 clean.

## Security Requirements

Add `next.config` security headers if not already present:

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy limiting camera/microphone/geolocation

Do not add analytics that track users personally.

## SEO Articles

Create 10 article pages:

1. how-to-document-apartment-damage
2. move-in-inspection-checklist-for-landlords
3. late-rent-notice-example
4. noise-complaint-letter-to-tenant
5. rental-property-maintenance-log
6. rent-ledger-template-guide
7. security-deposit-deduction-worksheet
8. landlord-repair-request-form
9. tenant-move-out-checklist
10. rental-property-expense-tracking

Each article should include:

- metadata title
- metadata description
- H1
- 700–1200 words if practical
- internal links to relevant forms/calculators
- legal disclaimer where relevant
- FAQ section

## Premium Page Update

Update premium page to describe:

- Premium Forms Library
- Spreadsheet Suite
- Incident Report Pack
- Inspection Pack
- Future State Packs

Suggested pricing display:

```txt
Launch price: $49
```

No fake scarcity.

## Validation

Run:

```txt
npm install
npm run lint
npm run build
git diff --check
```

Also run:

```txt
npm audit
```

Only apply automatic audit fixes if they do not break the app or upgrade major framework versions unexpectedly.

## Deliverables

Commit with:

```txt
git commit -m "Add production asset pack and payment-ready setup"
```

Summarize:

- assets created
- pages added
- security headers added
- payment environment variable added
- commands run
- build status
- npm audit result
- remaining placeholders
