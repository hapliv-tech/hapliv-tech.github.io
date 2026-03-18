# SEO implementation deliverables (Mar 2026)

See full detail in repo; summary below.

## New URLs (money / local)

- `/root-canal-treatment-cost-gurgaon` — RCT cost intent
- `/invisalign-gurgaon` — local Invisalign
- `/invisalign-cost-gurgaon` — Invisalign cost
- `/braces-cost-gurgaon` — braces cost
- `/best-dentist-in-gurgaon` — broad dentist intent
- `/dentist-in-west-delhi` — **canonical** West Delhi (was `/locations/dentist-in-west-delhi`)

## West Delhi migration

- Old path: `noindex`, `canonical` → new URL, thin “moved” page
- `next-sitemap` excludes old path
- Prefer **301** at CDN/host if available

## Components

- `src/lib/seo.js`, `StickyMobileCtaBar`, `TrustStrip`, `PageBreadcrumbs`, `LocalMoneyPage`
- Layout: `WebSite` JSON-LD + mobile bottom CTA bar

## Blog internal links

RCT, braces, Invisalign, emergency posts now link to the new money pages and key service URLs.

## Commits

1. `feat(seo): LocalMoneyPage template, cost landing URLs, West Delhi canonical...`
2. `feat(seo): metadata CTR tweaks, blog→money internal links, sitemap + nav`

## Cannibalization reduction (intent split)

- **RCT:** `/treatments/painless-root-canal-treatment` = procedure metadata + banner + cost table points to `/root-canal-treatment-cost-gurgaon`. `/root-canal-treatment-gurgaon` = location + procedure; cost FAQ defers to cost URL.
- **Invisalign:** `/invisalign` = treatment guide (H1 + meta); `/invisalign-gurgaon` = local; `/invisalign-cost-gurgaon` = cost; `/invisalign-sector-65` = Sector 65 only + links to others.
- **Braces:** `/treatments/braces` = types/process; `/braces-cost-gurgaon` = cost; Sector 65 page links to both; FAQ defers cost to cost page.
- **Dentist vs orthodontist:** cross-links on `/best-dentist-in-gurgaon` and `/best-orthodontist-gurgaon`.
