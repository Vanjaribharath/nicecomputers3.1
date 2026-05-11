# Nice Computers – Best Computer Training Institute in Navipet, Nizamabad

## 🚀 Quick Setup

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
npm install
npm run dev        # Development
npm run build      # Production build
npm run preview    # Preview build locally
```

## 🌐 Deployment

### Netlify (Recommended)
1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Netlify auto-detects `netlify.toml`

### Domain
- Primary: https://nicecomputers.online
- `public/_redirects` handles SPA routing

## ❌ Why The Original Was Broken
The original project used `@tanstack/react-start` (a server-side framework) with no `index.html`, no Vite entrypoint, and no `main.tsx`. This is incompatible with Netlify's static hosting — Netlify served a "Page Not Found" because there was nothing to serve.

## ✅ What Was Fixed
1. **Replaced** `@tanstack/react-router` → `react-router-dom` (compatible with Vite+Netlify)
2. **Added** `index.html` entrypoint (required by Vite)
3. **Added** `src/main.tsx` (React bootstrap)
4. **Added** `src/App.tsx` with all routes
5. **Added** `netlify.toml` + `public/_redirects` for SPA routing
6. **Added** `src/lib/site.ts` (was completely missing!)
7. **Added** UI primitives: `input.tsx`, `textarea.tsx`, `label.tsx`
8. **Added** `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `tsconfig.json`
9. **Added** SEO: `sitemap.xml`, `robots.txt`, schema markup in `index.html`
10. **Added** 10 SEO landing pages for local ranking

## 📁 Structure
```
nice-computers/
├── index.html              ← Vite entry (was missing)
├── netlify.toml            ← Netlify build config
├── public/
│   ├── _redirects          ← SPA routing fix
│   ├── robots.txt          ← SEO crawling
│   └── sitemap.xml         ← Google indexing
├── src/
│   ├── main.tsx            ← React bootstrap
│   ├── App.tsx             ← All routes
│   ├── lib/
│   │   ├── site.ts         ← All business data
│   │   └── utils.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── sections/
│   └── pages/
│       ├── Home.tsx
│       ├── Courses.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Blog.tsx
│       └── seo/            ← 10 local SEO pages
└── tailwind.config.js
```

## 🔍 SEO Features
- Local business Schema markup
- 10 geo-targeted landing pages
- FAQ Schema on every page
- Breadcrumb Schema
- Sitemap + robots.txt
- Open Graph + Twitter Cards
- Geo meta tags (Navipet, Nizamabad)
- Mobile-first responsive design
- WhatsApp FAB + Click-to-call

## 📱 Target Keywords
- best computer institute in navipet
- computer training nizamabad
- java course navipet
- python training nizamabad
- full stack development nizamabad
- computer classes basar telangana
- DCA course navipet
