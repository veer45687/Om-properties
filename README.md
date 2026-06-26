# Om Properties

A simple, elegant, beginner-friendly luxury real estate website for Om Properties. The project is now a static website that runs directly in the browser by opening `index.html` — no framework, build tools, or package installation required.

## Project Description

Om Properties presents verified homes, commercial spaces, plots, farmhouse land, and agricultural investment opportunities across Kaithal, Jind, Kurukshetra, and nearby Haryana corridors. The website uses a dark luxury aesthetic with glassmorphism, subtle animation, search, sliders, modals, counters, responsive layouts, and polished interactions.

## Features

- Semantic single-page HTML5 structure
- Dark luxury theme with optional light theme toggle
- Responsive design for desktop, tablet, and mobile
- Glassmorphism cards and premium gradients
- Splash screen and loading animation
- Sticky navigation and mobile menu
- Hero image rotation and animated featured property card
- Property search and filtering
- Property slider and estate gallery carousel
- Scroll reveal animations and animated counters
- Modal for private viewing requests
- Toast notifications
- Contact form validation
- Scroll progress indicator and scroll-to-top button
- Clean comments and modular JavaScript sections

## Folder Structure

```text
om-properties/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   ├── videos/
│   ├── icons/
│   └── fonts/
├── README.md
└── favicon.ico
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Unsplash remote images

## Installation Instructions

No installation is required.

1. Download or clone the project.
2. Keep the folder structure unchanged.
3. Open `index.html` in a modern browser.

## How to Run the Project

Double-click `index.html`, or serve the folder with any simple static server if desired:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customization Guide

- Update website content in `index.html`.
- Update colors, spacing, responsive rules, animations, and typography variables in `style.css` under the `:root` section.
- Update property data, service cards, testimonials, images, and interactive behavior in `script.js`.
- Add local media files to:
  - `assets/images`
  - `assets/videos`
  - `assets/icons`
  - `assets/fonts`
- If local images are added, replace the image URLs in `script.js` with paths such as `assets/images/property-1.jpg`.

## Future Improvements

- Add backend form submission
- Add real WhatsApp/CRM integration
- Add local optimized image assets
- Add map section with custom location markers
- Add dedicated property detail pages if the project grows
- Add accessibility testing with keyboard and screen-reader audits

## License

This project is provided for Om Properties. Update this section with your preferred license before public distribution.
