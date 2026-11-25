# Mudasir Wali — Official Website

Mobile-first political/public-leadership site for Mudasir Wali (Joint Secretary, District Srinagar, J&K Apni Party). Bilingual English / Urdu (RTL).

## Stack
- React 19 + TypeScript 5.9 + Vite 8, React Router 7 (`/` home, `/connect` link-in-bio)
- Tailwind CSS v4 via `@tailwindcss/vite` — tokens live in `src/index.css` `@theme`
- Lucide icons (brand glyphs: `src/components/icons.tsx`)
- Static SPA; `vercel.json` / `public/_redirects` rewrite all routes to `index.html`

## Commands
- `npm run dev` — dev server
- `npm run build` — type-check (`tsc -b`) + production build to `dist/`
- `npm run preview` — serve `dist/`

## Design tokens (`src/index.css`)
| Token | Value | Use |
|---|---|---|
| `ink` | `#0F172A` | primary dark / text |
| `paper` | `#F8FAFC` | background |
| `forest` / `forest-deep` / `forest-tint` | `#065F46` / `#064E3B` / `#ECFDF5` | brand green |
| `gold` / `gold-tint` | `#D97706` / `#FEF3C7` | accents, primary CTA |
| `font-serif` | Instrument Serif | headlines |
| `font-sans` | Plus Jakarta Sans | body / UI |
| `font-urdu` | Noto Nastaliq Urdu | Urdu text (auto when `lang="ur"`) |

Shared utilities: `btn`, `btn-primary`, `btn-gold`, `btn-ghost`, `field`, `label`, `eyebrow`.

## Where things live
- `src/config/site.ts` — name, role, social links, WhatsApp number (from `.env`)
- `.env` — `VITE_SITE_URL` (canonical URL, injected into `index.html` meta/JSON-LD), `VITE_WHATSAPP_NUMBER`
- `src/data/` — pillars, wards, press notes, localities/categories. **Content edits go here.**
- `src/i18n/strings.ts` — all UI copy in `en` + `ur`; `LanguageContext` sets `<html lang dir>`; `?lang=ur` deep-links Urdu
- `index.html` — SEO meta, OpenGraph, JSON-LD (`Person`, `PoliticalParty`, `Organization`, `WebSite`)
- `public/photos/` — WebP photos (≤1200px) used by `src/data/gallery.ts`, pillars and press notes; `portrait.webp` is the main portrait (confirmed by the client: photo 2 of the supplied set)
- `public/` — `portrait.jpg` (JSON-LD image), `og-image.jpg` (1200×630 share card), `robots.txt`, `sitemap.xml`

## Rules
- Political agenda only (client decision): no road-safety, KRSF or community/religious-service content. The About bio/mission/vision (`t.about` in strings.ts) is the client's own text — keep it verbatim. His scope is Kashmir-wide; his post is Joint Secretary, Srinagar. The KRSF "Director, Public Relations" role is deliberately omitted unless the client asks. His title is "Joint Secretary, District Srinagar" — never "Youth Wing".
- Photo captions describe the event only. Never name anyone in a photo unless the client has confirmed who they are.
- Facts only. No invented quotes, dates, statistics or media coverage. Ward "on the ground" items and press notes must be verifiable.
- Forms never store data; they build a WhatsApp message (`src/lib/whatsapp.ts`). Ticket IDs: `MW-SRN-<year>-<4 chars>`.
- Use logical CSS properties (`ms-`, `pe-`, `start-`, `text-start`) so RTL works; flip directional icons with `rtl:-scale-x-100`.
- If the domain changes, update `.env`, `public/robots.txt`, `public/sitemap.xml`.
