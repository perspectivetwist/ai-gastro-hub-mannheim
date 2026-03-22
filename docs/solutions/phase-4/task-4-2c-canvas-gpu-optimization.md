# Task 4.2c: Canvas GPU-Optimierung

## Problem
Seite laggt auf Laptops beim Öffnen und Scrollen. Drei parallele Canvas-Elemente mit unkontrolliertem shadowBlur als GPU-Killer identifiziert.

## Diagnose
| Canvas | FPS | shadowBlur | Partikel | Bewertung |
|--------|-----|-----------|----------|-----------|
| NeonParticleText | 60 (uncapped!) | pro Partikel | 500-2000 | KRITISCH |
| NebulaCanvas | 30 | pro Partikel | 120/50 | HOCH |
| JellyfishCanvas | 10 | pre-rendered | 13/5 Sprites | OK |

## Lösung — 6 Fixes in Reihenfolge

### Fix 1: FPS-Cap
- NeonParticleText: 60fps → 30fps mit timestamp-basiertem Throttle
- NebulaCanvas + JellyfishCanvas: bereits gecappt

### Fix 2: shadowBlur batchen
- Statt `ctx.shadowBlur` pro Partikel: Partikel nach Farbe gruppiert (`Map<string, Particle[]>`)
- `ctx.save()` → shadowBlur einmal setzen → alle Partikel der Farbe rendern → `ctx.restore()`
- Angewandt auf NeonParticleText + NebulaCanvas

### Fix 3: Partikel-Anzahl reduzieren
- NebulaCanvas: 120→60 Desktop, 50→20 Mobile
- NeonParticleText: Step-Size 2→3 Desktop, 3→4 Mobile + random skip

### Fix 4: will-change: transform
- Auf alle 3 Canvas-Elemente → GPU-Layer Promotion

### Fix 5: Visibility API
- `document.visibilitychange` Listener auf allen 3 Canvases
- `paused = document.hidden` → Animation stoppt komplett wenn Tab nicht aktiv

### Fix 6: CSS contain
- `section { contain: layout style paint }` in globals.css
- Verhindert dass Layout-Reflows Section-übergreifend kaskadieren

## Was funktioniert hat
- Batched shadowBlur = größter Einzelgewinn (von N×shadowBlur auf 6×shadowBlur pro Frame)
- Pre-rendered Sprites bei JellyfishCanvas war schon in vorherigem Task gelöst
- Visibility API eliminiert 100% GPU-Last bei inaktivem Tab

## Was vermeiden
- `for...of` auf Map in TypeScript ohne `downlevelIteration` → TS2802 Error. `.forEach()` verwenden.
- shadowBlur pro Partikel ist ein GPU-Killer — immer batchen

## Nächstes Mal
- Von Anfang an FPS-Caps und batched shadowBlur einplanen
- Lighthouse Performance Check als Teil der DoD für Canvas-Features
