# Omar AbdElhameed - FastAPI Backend Developer Portfolio

A production-grade, premium portfolio website built for a backend developer specializing in FastAPI, PostgreSQL, API integrations, real-time systems, and Dockerized deployments. All content is derived directly from inspected repositories: **MacroMetrics** and the **Real-Time Chat System**.

## Project Overview

This is a Next.js web application built with the App Router, TypeScript, and Tailwind CSS. It highlights backend architectures, testing strategies, and design-led implementation details for a targeted audience: startup founders, software agencies, and frontend developers.

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 (OKLCH, warm slate sage/olive palette)
- **Fonts:** Outfit (headings) & Inter (body)
- **Deployment & Static Output:** Optimized for Vercel, Netlify, or self-hosted static environments.

---

## Installation & Setup

1. Navigate to the portfolio folder:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Build the application for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run start
   ```

---

## How to Edit and Extend

### 1. Edit Personal Details
Open [src/data/config.ts](file:///c:/Users/afsao/Desktop/portfolio/portfolio/src/data/config.ts) to update personal metadata:
- Name
- Professional Title
- Email address
- LinkedIn / GitHub URL
- WhatsApp number
- Location / Timezone

### 2. Edit Services
Open [src/data/services.ts](file:///c:/Users/afsao/Desktop/portfolio/portfolio/src/data/services.ts) to modify service descriptions or add new features.

### 3. Add or Edit Projects
Open [src/data/projects.ts](file:///c:/Users/afsao/Desktop/portfolio/portfolio/src/data/projects.ts) to modify case studies:
- Each project implements the `Project` interface defined in `src/lib/types.ts`.
- Outlines: summary, problem, solution, features, technologies, technicalDecisions, testing, improvements, images, and architecture layers.

### 4. Replace Images & Screenshots
- Save new screenshots to `public/screenshots/`.
- Update the path reference in `src/data/projects.ts` (e.g., `images: [{ src: "/screenshots/my-app.png", alt: "Description" }]`).

---

## Deployment Instructions

### Vercel (Recommended)
1. Install Vercel CLI or import the GitHub repository into your Vercel Dashboard.
2. Vercel automatically detects Next.js settings. Build Command: `npm run build`, Output Directory: `.next`.
3. Set your custom domain.

### Static Export (GitHub Pages / Netlify / S3)
To export the site as static HTML, update `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```
Then run:
```bash
npm run build
```
This produces an `out` folder containing static HTML/CSS/JS files that can be deployed to any static host.

---

## Remaining Placeholders / TODO List

### Placeholders
- **Domain Name:** Currently configured to `https://omar-abdelhameed.dev` in `sitemap.ts` and `robots.ts`. Update this to your live domain once registered.
- **GitHub Link for Chat App:** The Chat App system has no remote origin configured yet. In `src/data/projects.ts`, `githubUrl` is currently set to `null` and the button is hidden. Add the URL once published.
- **Live Demonstrations:** Both project case studies have `liveUrl` set to `null`. If live staging versions are deployed, update these fields in `src/data/projects.ts` to show "Live Demo" buttons.

### Recommended Screenshots
- **MacroMetrics:** Currently uses a fallback technical icon graphic because no screenshots were present in the repository. Add 1-3 screenshots of the MacroMetrics interface to `public/screenshots/macrometrics/` and register them in `src/data/projects.ts`.
- **System Diagrams:** Case studies render vertical HTML/CSS architecture flowcharts. If you prefer high-fidelity visual diagrams, export SVGs and place them in the assets folder.
