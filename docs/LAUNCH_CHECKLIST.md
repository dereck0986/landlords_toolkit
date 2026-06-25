# Launch Checklist

## Deployment

- [ ] Confirm latest `asset-garden-v1` commit deploys successfully on Vercel.
- [ ] Confirm Vercel project root remains the repository root.
- [ ] Confirm Vercel uses `vercel.json` with `apps/landlordforms/.next` as output directory.
- [ ] Confirm homepage, forms, calculators, articles, premium, privacy, and terms pages load.

## Analytics

- [ ] Create a Plausible site for `landlords-toolkit.vercel.app`.
- [ ] Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=landlords-toolkit.vercel.app` in Vercel environment variables.
- [ ] Confirm pageviews appear in Plausible after deployment.
- [ ] Confirm download, premium CTA, and calculator events are visible as custom events.

## Search

- [ ] Add the site to Google Search Console.
- [ ] Submit `https://landlords-toolkit.vercel.app/sitemap.xml`.
- [ ] Add the site to Bing Webmaster Tools.
- [ ] Confirm `https://landlords-toolkit.vercel.app/robots.txt` allows crawling.

## Payments

- [ ] Create a Stripe Payment Link for the premium bundle when ready.
- [ ] Add `NEXT_PUBLIC_PREMIUM_CHECKOUT_URL` in Vercel environment variables.
- [ ] Confirm the premium CTA routes to Stripe Checkout.
- [ ] Confirm no card details are collected by this app.

## Domain And Brand Assets

- [ ] Connect the production domain when selected.
- [ ] Update Plausible and Search Console for the production domain.
- [ ] Replace placeholder favicon and Open Graph artwork with production brand assets.

## Manual Smoke Test

- [ ] Open `/`.
- [ ] Open `/forms`.
- [ ] Download one PDF, one DOCX, and one XLSX.
- [ ] Open `/calculators/cash-flow-calculator` and enter sample values.
- [ ] Open `/articles`.
- [ ] Open `/premium` with and without `NEXT_PUBLIC_PREMIUM_CHECKOUT_URL` configured.
- [ ] Open `/privacy` and `/terms`.
- [ ] Open `/sitemap.xml` and verify current routes are listed.
- [ ] Open `/robots.txt` and verify sitemap URL is present.
