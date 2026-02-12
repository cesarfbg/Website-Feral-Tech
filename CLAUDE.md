# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Feral Tech marketing website — a single-page static site for a Colombian B2B company offering Odoo ERP modules and consulting. All content is in Spanish (es_CO). Deployed to GitHub Pages at **feraltech.co**.

## Commands

```bash
npm run dev       # Start Astro dev server with HMR
npm run build     # Production build (output in dist/)
npm run preview   # Preview production build locally
```

No test framework is configured. No linter is configured.

## Tech Stack

- **Astro 5.3** (static site generator, file-based routing)
- **Tailwind CSS 3.4** (utility-first styling, JIT)
- **TypeScript** (strict mode, extends `astro/tsconfigs/strict`)
- **Poppins** font via `@fontsource/poppins`

## Architecture

Single-page app composed in `src/pages/index.astro`, which imports section components:

```
Layout.astro (master layout: meta, fonts, Schema.org, OG tags)
└── index.astro
    ├── Header.astro      (fixed nav, mobile hamburger, scroll effects)
    ├── Hero.astro         (full-height banner, dual CTAs)
    ├── Modules.astro      (3 product cards — Auto TRM, Inventarios, Cambio Moneda)
    ├── Services.astro     (4 service cards + Google Workspace teaser)
    ├── WhyUs.astro        (4 reasons grid + stats bar)
    ├── Footer.astro       (multi-column links, brand)
    └── WhatsAppFloat.astro (fixed bottom-right button)
```

## Design System (Tailwind)

Brand colors defined in `tailwind.config.mjs`:
- `feral-dark` (#0F084B) — primary background
- `feral-steel` (#126899) — secondary blue
- `feral-sky` (#9BB1FF) — light accent
- `feral-turquoise` (#17BEBB) — interactive accent
- `feral-orange` (#F26419) — CTA / highlight

Custom reusable classes in `src/styles/global.css` via `@layer components`:
- `.section-container` — centered max-width wrapper with responsive padding
- `.btn-primary` — orange CTA button
- `.btn-secondary` — turquoise outline button
- `.glass-card` — glassmorphism card (backdrop-blur, border-white/10)

Extra breakpoints: `3xl` (1920px), `4xl` (2560px), `5xl` (3840px).

## Key Conventions

- **Component data**: defined as arrays of objects in Astro frontmatter (`---` blocks), not in separate data files.
- **Icons**: inline SVGs (no icon library).
- **CTAs**: all lead to WhatsApp (`wa.me/573172247166`) with URL-encoded messages.
- **Section anchors**: `#inicio`, `#modulos`, `#servicios`, `#nosotros`.
- **Interactivity**: vanilla JS in `<script>` tags inside Astro components (header scroll, mobile menu toggle).

## Deployment

Automatic via `.github/workflows/deploy.yml` on push to `main`. Uses Node 22, runs `npm ci && npm run build`, deploys `dist/` to GitHub Pages. Custom domain set via `public/CNAME`.
