# People & Pixel 360 (P&P 360) · Landing Page

> **Media Monitoring & Unified Campaign Intelligence Platform for Malaysia**  
> High-performance Next.js 15 web application engineered with pure SVG micro-UI components, a 60fps HTML5 Canvas 3D radar globe, multi-lingual vernacular coverage, and live cross-platform social media ingestion.

---

## Overview

**People & Pixel 360 (P&P 360)** is an enterprise media intelligence and campaign attribution platform designed for communications directors, public sector agencies, and PR consultancies operating in Malaysia.

The platform eliminates intelligence blind spots across Malaysia's multi-lingual media ecosystem—automatically monitoring, translating, and analyzing news in **Bahasa Melayu, English, Mandarin, and Tamil**, while tracking live discussions across major social media networks (**X, TikTok, Instagram, Facebook, LinkedIn, and Threads**).

This repository contains the production landing page for P&P 360, built to institutional design standards inspired by CleanShot and Linear.

---

## Architectural Principles

### 1. Pure SVG Micro-UI Architecture
- **Zero Third-Party Chart Dependencies**: All visual charts, emotion matrices, sentiment donuts, campaign attribution funnels, and database security diagrams are built strictly using **pure SVG and Tailwind CSS**.
- **No Heavy Libraries**: No `Chart.js`, `Recharts`, `ApexCharts`, `Three.js`, or `D3`. This preserves zero-runtime parsing overhead, predictable bundle size, and instant hydration.
- **Accessibility & Numeric Precision**: All decorative SVG visuals carry `aria-hidden="true"`, and quantitative data points utilize `font-mono tabular-nums tracking-tight` for optical alignment.

### 2. High-Performance 3D Command Stage
- **Hardware-Accelerated 3D Globe**: Rendered directly via native HTML5 Canvas with custom spherical projection, glowing latitude rings, particle depth buffering, and rotating radar apertures.
- **Zero React Re-render Parallax**: Mouse cursor coordinates are processed through a decoupled `requestAnimationFrame` loop that applies direct CSS 3D transforms (`rotateX`, `rotateY`) to the canvas DOM node without triggering React component render cycles.
- **Live Social Ingestion Nodes**: Real-time floating status indicators showcase automated ingestion from 6 key platforms: **X, TikTok, Instagram, Facebook, LinkedIn, and Threads**.

### 3. Native 60fps Section Transitions
- **Zero-Overhead Observer**: Lightweight viewport reveal triggers powered by `IntersectionObserver` (`src/components/ui/SectionReveal.tsx`).
- **GPU-Friendly Compositing**: Minimal layer footprint without persistent `will-change` VRAM overhead, ensuring smooth 60fps scrolling on both mobile and low-power devices.

### 4. Design System & Editorial Standards
- **Authentic Malaysian Context**: Visualizations and content reflect real Malaysian national and vernacular media outlets:
  - *National*: The Star, Malaysiakini, Sinar Harian, Astro Awani, Berita Harian, New Straits Times, Free Malaysia Today.
  - *Vernacular (Mandarin)*: Sin Chew Daily (星洲日报), China Press (中國報), Oriental Daily News (東方日報), Nanyang Siang Pau (南洋商报), Guang Ming Daily (光明日報), See Hua Daily News (詩華日報).
  - *Vernacular (Tamil)*: Makkal Osai (மக்கள் ஓசை), Vanakkam Malaysia (வணக்கம் மலேசியா).
- **Clean Typography & Micro-Borders**: Built with high-contrast typography, accessible color ratios (WCAG AA), and 1px translucent borders (`border-slate-200/80` in light mode, `border-white/10` in dark mode).
- **Evidence-First Content**: Crisp, benefit-focused messaging without generic placeholders or ungrounded statistics.

---

## Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 15.1 (App Router) | React Server Components (RSC) by default, static metadata |
| **Runtime** | React 19 | Island architecture for isolated interactive client leaves |
| **Styling** | Tailwind CSS 3.4 + PostCSS | Custom glassmorphism, micro-borders (`border-slate-200/80` / `border-white/10`) |
| **Visuals & 3D** | Pure SVG + HTML5 Canvas | Zero chart library overhead, native spherical math projection |
| **Icons** | Lucide React | Tree-shaken feather-style iconography |
| **Language** | TypeScript 5.7 | Strict type-safety, zero `any` declarations |

---

## Landing Page Sections

1. **Sticky Glassmorphic Navbar**: Adaptive brand logo with light/dark contrast handling, section navigation, and rapid "Book a Demo" CTA.
2. **Hero Command Stage**: 3D interactive radar globe, verified metrics bar, and 6-platform live social ingestion feed.
3. **How It Works**: 3-step intelligence workflow: *Connect & Watch*, *Detect & Understand*, and *Report & Act*.
4. **Reporting Suite**:
   - 1-Click Snap Infographic (PNG) for instant leadership briefings.
   - Scheduled morning briefs (automated email and PDF delivery).
   - Competitor Share of Voice (SOV) benchmark.
   - Real-time vernacular clipping with interactive Mandarin/Tamil-to-Malay translation preview.
5. **Before vs. After (Comparison Matrix)**: Side-by-side breakdown contrasting manual media clipping with automated intelligence.
6. **Campaign Attribution Funnel**: Attribution pipeline connecting paid ad exposure and physical on-ground QR poster scans to verified registrations.
7. **Audience Personas**: Tailored solutions for Government & Public Agencies, PR & Corporate Communications, and Marketing Agencies.
8. **Enterprise Trust & Multi-Tenant Security**: Interactive PostgreSQL Row-Level Security (RLS) data isolation diagram.
9. **Frequently Asked Questions**: Accessible accordion addressing setup speed, media source coverage, citation integrity, and data sovereignty.
10. **High-Impact CTA & Demo Form**: Lead capture interface with instant field validation and asynchronous submission handling.

---

## Project Structure

```text
Landing-Page-PNP360/
├── brand/                       # Brand identity assets, logos, and vector marks
├── public/                      # Static web assets, favicons, and manifest
├── src/
│   ├── app/
│   │   ├── api/demo/            # Lead capture demo request API route handler
│   │   ├── globals.css          # Tailwind CSS layer definitions and design tokens
│   │   ├── layout.tsx           # Root layout with font optimization & theme scripts
│   │   ├── page.tsx             # Main landing page composition (Server Component)
│   │   ├── robots.ts            # Dynamic search crawler directives
│   │   └── sitemap.ts           # Dynamic sitemap index
│   ├── components/
│   │   ├── hero/
│   │   │   ├── Hero3DGlobe.tsx  # Canvas 3D radar centerpiece & social nodes
│   │   │   └── HeroSection.tsx  # Hero copy, value bar, and interactive stage
│   │   ├── layout/
│   │   │   ├── Footer.tsx       # Institutional footer with platform status
│   │   │   ├── MobileNav.tsx    # Mobile off-canvas navigation drawer
│   │   │   ├── Navbar.tsx       # Glassmorphic header with adaptive brand asset
│   │   │   └── ThemeToggle.tsx  # Light/dark mode toggle
│   │   ├── mockups/
│   │   │   └── HeroDashboardMockup.tsx # SVG micro-UI dashboard mock
│   │   ├── sections/
│   │   │   ├── BeforeAfterSection.tsx  # Manual vs. automated comparison
│   │   │   ├── CampaignRoiSection.tsx  # Multi-channel attribution funnel
│   │   │   ├── CtaSection.tsx          # Final conversion callout
│   │   │   ├── DemoForm.tsx            # Lead generation submission form
│   │   │   ├── FaqAccordion.tsx        # Accessible interactive FAQ accordion
│   │   │   ├── FaqSection.tsx          # FAQ container & layout
│   │   │   ├── HowItWorksSection.tsx   # 3-step intelligence pipeline
│   │   │   ├── PersonasSection.tsx     # Public sector, PR, & agency cards
│   │   │   ├── ReportingSuiteSection.tsx # Snap PNG, PDF brief, & vernacular cards
│   │   │   ├── TrustSecuritySection.tsx  # PostgreSQL RLS isolation mockup
│   │   │   └── VernacularArticleCard.tsx # Interactive translation card
│   │   └── ui/
│   │       └── SectionReveal.tsx       # 60fps viewport entrance observer
│   ├── config/
│   │   └── site.ts              # Site metadata, navigation links, and media lists
│   └── content/
│       └── en.ts                # Centralized English copywriting source
├── tailwind.config.ts           # Tailwind CSS configuration and color tokens
├── tsconfig.json                # TypeScript compiler configuration
└── package.json                 # Project dependencies and script declarations
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/PeoplenPixel/Landing-Page-PNP360.git
cd Landing-Page-PNP360
npm install
```

### Development Server

Run the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

Create an optimized production build and verify TypeScript types:

```bash
# Type check and build
npm run build

# Start local production preview
npm run start
```

### Code Quality & Validation

```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Run Next.js linter
npm run lint
```

---

## Performance & Optimization Highlights

- **Lighthouse Performance Score**: Target 95+ through minimal JavaScript payloads, zero external charting libraries, and optimized SVG rendering.
- **Core Web Vitals**: Zero Cumulative Layout Shift (CLS: `0`) via explicit aspect ratios and container dimensions.
- **Adaptive Contrast Handling**: Navbar and footer logos adjust brightness dynamically for WCAG AA compliance across both light and dark color schemes.

---

## License & Ownership

Copyright © 2026 **People & Pixel**. All rights reserved.  
Confidential and proprietary property of People & Pixel.
