# Task 1.1c – Hintergrund: Buntes Neon-Partikel-Feld

## Was gebaut
NebulaCanvas-Upgrade: Statt dimmer Sternpunkte jetzt 250 helle Neon-Partikel mit Glow-Effekt, die langsam durch den Hintergrund driften.

## Lösung
Bestehende Sternpunkte in NebulaCanvas.tsx durch NeonParticle-System ersetzt:

- **250 Partikel** (80 auf Mobile) mit Radius 1-3px
- **6 Neon-Farben**: Cyan, Pink, Lila, Gelb, Grün, Blau
- **shadowBlur 6-12** für Glow-Effekt pro Partikel
- **`globalCompositeOperation: 'screen'`** für additives Leuchten
- **Langsamer Drift**: vx/vy 0.03-0.04px/frame mit Wrap-Around
- **Puls-Animation**: Opacity 0.4-0.9 Basis × Sinus-Puls
- **Nebula-Wolken bleiben** als untere Layer (opacity 0.03-0.05)

## Mobile-Optimierung
- 80 statt 250 Partikel
- Kein Drift (statische Position)
- Kein Puls (konstante Opacity)
- 30fps Cap via FRAME_INTERVAL

## Was gut funktioniert
- Screen-Compositing macht Partikel-Überlappungen heller statt deckender
- shadowBlur pro Partikel teuer aber nötig für Neon-Look
- Nebula-Wolken als Unterlage geben dem Feld Tiefe

## Nächstes Mal
- 30fps Cap ist Pflicht bei 250+ Partikeln mit shadowBlur
- Mobile braucht deutlich weniger Partikel (GPU-limitiert)
