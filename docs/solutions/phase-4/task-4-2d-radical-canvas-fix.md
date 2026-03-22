# Task 4.2d: Radikale Canvas-Diagnose + Fix

## Problem
Seite nach 4.2c immer noch zu langsam. Laptop verlangsamt sich minimal.

## Diagnose-Methode
1. Alle 3 Canvas deaktiviert → Seite flüssig → Canvas ist Täter
2. Einzeln aktiviert:
   - NebulaCanvas allein: moderate Last (60 Partikel, batched shadowBlur)
   - + JellyfishCanvas: kaum Unterschied (pre-rendered sprites, 10fps)
   - + NeonParticleText: **Haupttäter** (hunderte Partikel mit getImageData + shadowBlur)

## Lösung

### NeonParticleText (Haupttäter)
- **Mobile: komplett deaktiviert** — 0 Partikel, nur CSS `color: #FF006E` auf dem Text
- Desktop: Partikel-Density drastisch reduziert (step 4, 70% skip, edge jeder 2. Pixel)
- shadowBlur: 5 → 3
- FPS: 30 → 24
- IntersectionObserver: pausiert wenn aus Viewport gescrollt
- prefers-reduced-motion: Canvas wird übersprungen

### NebulaCanvas (Zweiter Täter)
- **Mobile: 0 Partikel** — nur Nebula-Clouds (keine shadowBlur nötig)
- Desktop: 60 → 40 Partikel
- shadowBlur: 6 → 4
- FPS: 30 → 24
- prefers-reduced-motion: skip

### JellyfishCanvas (harmlos)
- Bereits optimiert (pre-rendered sprites, 10fps)
- prefers-reduced-motion: skip hinzugefügt

## Was funktioniert hat
- Mobile komplett ohne Partikel = größter Gewinn. getImageData + shadowBlur auf Mobile war sinnlos.
- IntersectionObserver auf NeonParticleText spart GPU sobald man runterscrollt.
- 24fps statt 30fps für Hintergrund-Effekte — kein sichtbarer Qualitätsverlust.

## Was vermeiden
- Nie shadowBlur auf Mobile verwenden — zu teuer für den visuellen Effekt
- Nie getImageData auf Mobile für Echtzeit-Rendering
- Canvas-Partikel auf Mobile generell vermeiden wenn CSS-Alternative existiert
