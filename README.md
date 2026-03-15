# ReddHR — HR Technology & Custom Software Solutions

A premium, animated marketing website for [ReddHR](https://www.linkedin.com/company/reddhr/about/), an HR technology and custom software development company based in Mumbai, India.

**Live:** [reddhr-website.vercel.app](https://reddhr-website.vercel.app)

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | App Router, SSR, Static Generation |
| **React 19** | UI Framework |
| **Tailwind CSS v4** | Utility-first styling with CSS variables |
| **Framer Motion** | Scroll-triggered animations, page transitions |
| **Three.js** | 3D floating geometry in hero section |
| **TypeScript** | Type safety |
| **next-themes** | Dark/light mode toggle |
| **Lucide React** | Icon system |

## Features

- 3D animated hero with floating wireframe geometry (Three.js)
- Word-by-word text reveal animations
- Scroll-triggered section animations throughout
- Draggable testimonials carousel
- Infinite dual-row tech stack marquee
- Animated stat counters (8+ Years, 50+ Clients, 200+ Projects)
- Custom cursor with spring-physics follower (desktop)
- Dark mode by default with light mode support
- Fully responsive (mobile, tablet, desktop)
- Contact form with EmailJS integration
- 15 statically generated pages for fast performance
- SEO optimized with OpenGraph and Twitter Card metadata

## Pages

| Route | Page |
|-------|------|
| `/` | Home — 7 animated sections |
| `/about` | Company story, timeline, team |
| `/services` | All 7 services |
| `/services/[slug]` | Individual service details (7 pages) |
| `/contact` | Contact form + Google Maps |
| `/careers` | Job openings + perks |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger automatic deployments.

## License

Private project for ReddHR.
