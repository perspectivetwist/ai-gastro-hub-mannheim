# Task 4.3a – Quallen-Animation + Nebula entfernt

## Entscheidung
Performance-Priorisierung: Canvas-Animationen komplett entfernen statt weiter optimieren.

## Was entfernt
- JellyfishCanvas.tsx (Quallen-Animation, ~280 Zeilen)
- NebulaCanvas.tsx (Nebula-Wolken + Neon-Partikel, ~340 Zeilen)
- layout.tsx: 2 Imports + 2 Komponenten

## Was bleibt
- Body-Background #000008 (globals.css)
- Alle Sections unverändert (transparente Backgrounds)

## Lessons Learned
- Keine versteckten Abhängigkeiten – nur layout.tsx referenzierte die Canvas-Komponenten
- 618 Zeilen weniger Code, deutlich weniger GPU-Last
