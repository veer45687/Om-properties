# Om Properties

A production-focused static real estate platform for Om Properties, serving Kaithal, Jind and nearby Haryana growth corridors. The site runs directly in the browser with no build step and is structured so property data can later be replaced by an API or CMS.

## What is included

- Premium cinematic hero with splash screen, sticky navigation, scroll progress and theme toggle.
- Advanced property search with instant keyword filtering, category filtering, budget filtering and sorting.
- Structured mock listing data for homes, plots, commercial spaces, farmhouse parcels and agricultural land.
- Favorites saved in browser storage with safe fallbacks for restricted browser privacy modes.
- Side-by-side property comparison modal.
- EMI calculator, Google Maps embed, gallery carousel, video-tour/360 placeholder and private visit booking form.
- WhatsApp and click-to-call actions for mobile-first lead capture.
- Advisory services, testimonials, market insights, FAQ, contact form validation and toast notifications.
- Responsive glassmorphism UI optimized for mobile, tablet and desktop.
- SEO metadata, Open Graph tags, `robots.txt` and `sitemap.xml`.

## Files

```text
om-properties/
├── index.html    # Page structure, SEO metadata, sections and modals
├── style.css     # Responsive visual system, layout, animations and safety fallbacks
├── script.js     # Property data, rendering, search, favorites, comparison and forms
├── robots.txt    # Crawler allow rule
├── sitemap.xml   # Sitemap-ready route anchors
├── README.md
└── favicon.ico
```

## Run locally

Open `index.html` directly, or serve the folder with a static server:

```bash
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173/`.

## Customization

- Update page sections and contact details in `index.html`.
- Update listings, services, testimonials, insights and FAQ content in `script.js`.
- Update colors, spacing, breakpoints and visual treatments in `style.css`.
- Replace remote Unsplash URLs with optimized local assets when final property photography is available.

## Production notes

This is still a static front-end. Before launch, connect forms to a backend or CRM, replace mock listings with verified inventory, add real analytics, and host optimized local media assets for predictable performance.
