# AI Gastro Hub – Developer Documentation

## Setup
```bash
npm install
npm run dev  # http://localhost:3000
```
Keine ENV-Variablen nötig — reine Frontend-Landing-Page.

## Deployment
```bash
npx vercel --prod --yes
```
Vercel URL: https://ai-gastro-hub.vercel.app

## Architektur
- `/` — Hauptseite mit allen Sections
- `/impressum` — Impressum
- `/datenschutz` — Datenschutz

## Wichtige Dateien
| Datei | Zweck |
|-------|-------|
| app/page.tsx | Hauptseite — alle Sections |
| app/layout.tsx | Root Layout + JellyfishCanvas |
| components/JellyfishCanvas.tsx | Quallen-Animation (Canvas API) |
| components/HeroSection.tsx | Hero mit Headline |
| components/ProductsSection.tsx | 4 Scanner-Cards |
| components/TrustSection.tsx | Ökosystem-Footer |

## Ökosystem-Scanner
| Scanner | URL |
|---------|-----|
| AEO Gastro | https://aeo-gastro.vercel.app |
| GEO Gastro | https://geo-gastro.vercel.app |
| Agent Readiness | https://agentready-gastro.vercel.app |
| Quantum Security | https://aisecurity-gastro.vercel.app |
