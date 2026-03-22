# Task 1.1b – Hintergrund-Upgrade: Tiefes Universum, Nebel, Farbpunkte

## Was gebaut
Drei-Ebenen-Hintergrund: Radial-Gradient (CSS), Nebel-Canvas (NebulaCanvas), Sternpunkte.

## Lösung
- **Ebene 1 (CSS):** `radial-gradient(ellipse at 20% 50%, #0a0020, #000008, #000510, #020010)` statt linearem Gradient
- **Ebene 2 (Canvas):** NebulaCanvas mit 4 großen, weichen radialen Gradienten (opacity 0.03–0.05), sehr langsame Drift (factor 0.0002)
- **Ebene 3 (Canvas):** 100 Sternpunkte (radius 0.5–1.5px), Neonfarben, opacity 0.1–0.3, leichtes Pulsieren
- z-index: -1 (unter JellyfishCanvas z-index: 0)
- 30fps Cap via requestAnimationFrame + timestamp delta
- Mobile: statische Nebel (keine Animation), 50 Sterne statt 100

## Was funktioniert hat
- Radial-Gradient statt Linear gibt sofort Tiefe ohne Performance-Kosten
- 30fps reicht für kaum merkliche Nebel-Bewegung
- Sternpunkte wirken wie distant bioluminescent organisms

## Nächstes Mal
- Alles nach Plan. Separate Canvas-Layer für verschiedene Animationsgeschwindigkeiten ist sinnvoll.
