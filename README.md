# Iclapss

A Next.js App Router website with TypeScript, Motion, local architectural photography and Switzer typography.

## Run

```sh
npm install
npm run dev
```

Visit http://localhost:3000. `npm run build` exports the website into `out/`; host that folder with support for directory index files. `npm run check` checks TypeScript.

## Content and components

`lib/data.ts` contains six typed property fixtures, nine original journal stories, the four approach blocks, and the canonical site URL. `components/site.tsx` contains the glass navigation, image hero, scroll composition, property carousel/cards/filter, animated gallery, forms, philosophy slider and photographic footer. `app/globals.css` contains tokens, responsive rules and motion settings.

Routes: `/`, `/about`, `/properties`, `/journal`, `/contact`, `/legal/terms-of-use`, `/legal/privacy-policy`, six `/properties/[slug]` pages and nine `/journal/[slug]` pages. The accented `maison-lumière` slug supports encoded URLs. A custom 404, sitemap and robots file are included.

## Configuration

`NEXT_PUBLIC_SITE_URL` sets the canonical origin at build time. `NEXT_PUBLIC_CONTACT_ENDPOINT` optionally enables enquiry delivery to an external form provider. That provider must validate name/email, reject the `website` honeypot and implement rate limiting. Never put secret credentials in a NEXT_PUBLIC variable. Rebuild after changing these variables.

Without an endpoint, enquiries explicitly report that nothing was sent. Newsletter collection is unavailable and reports this on submit. Replace legal demonstration notices with approved business policies, supply a verified contact and configure delivery before commercial launch.

## Assets and fidelity

Photographs are downloaded Unsplash equivalents, recorded in `public/asset-manifest.json`; they are illustrative and do not identify the sample properties. Switzer is served locally from Fontshare under its free font license (https://www.fontshare.com/licenses). The original template's private components and exact motion values were not imported. Testimonials are replaced with an attributed brand philosophy to avoid fictional endorsements. Social profiles are omitted until verified URLs are supplied.

Motion defaults: 0.75s reveal, 0.35s label roll, 0.7s carousel transition, 1.3s hero entrance and 52s gallery loop. Reduced-motion mode disables automatic movement. Gallery pause preserves its CSS animation position.

## Verification

See `VERIFICATION.md` for checks and remaining limitations.
