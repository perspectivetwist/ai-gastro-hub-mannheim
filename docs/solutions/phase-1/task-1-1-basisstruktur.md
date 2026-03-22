# Task 1.1 – Next.js Basisstruktur + Design-Tokens einrichten

## Was gebaut
- globals.css: Design-Tokens als CSS Custom Properties, body mit Tiefsee-Gradient
- layout.tsx: Inter-Font, JellyfishCanvas als globaler Hintergrund, lang="de"
- tailwind.config.ts: Custom Colors (wake, slipstream, quantum, asd-pink, muted)
- 8 Komponenten-Stubs: JellyfishCanvas, Hero, Problem, MoreProblems, Solution, Products, Vision, Trust
- page.tsx: Importiert und rendert alle Sections

## Problem
Default create-next-app Template mit Geist-Fonts und hellem Theme ersetzen durch ASD Design-System.

## Lösung
Komplett-Rewrite von globals.css, layout.tsx, page.tsx, tailwind.config.ts. Alle Komponenten als leere Stubs mit korrektem z-index und transparentem Background.

## Was funktioniert hat
- JellyfishCanvas in layout.tsx mit position: fixed, z-index: 0 – Architektur steht
- Inter-Font via next/font/google – kein externer Font-Load nötig
- TypeScript strict: 0 Fehler mit npx tsc --noEmit

## Was vermeiden
- Geist-Fonts nicht mehr verwenden (ASD nutzt Inter)
- Keine lokalen Fonts (localFont) – Google Fonts über next/font reicht

## Nächstes Mal
- Dev Server Port kann belegt sein (3000 → 3001 Fallback von Next.js automatisch)
