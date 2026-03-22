# Task 2.1c – JellyfishCanvas: Scanner-Farben + Multi-Color Biolumineszenz

## Was gebaut
Jede Qualle zeigt alle 4 Scanner-Farben (Cyan, Pink, Lila, Gelb) plus zusätzliche Akzente (Grün, Blau). Body-Gradient rotiert langsam zwischen 3 Farben, Tentakel haben individuelle Farben.

## Lösung
Zwei Notion-Tasks (Scanner-Farben pro Qualle + Multi-Color Biolumineszenz) in einem Rewrite kombiniert:

### Farb-System
- **COLOR_COMBOS**: 5 Preset-Kombinationen [core, mid, outer] aus den 4 Scanner-Farben
- **lerpColor()**: Lineare Interpolation zwischen Hex-Farben für glatte Übergänge
- **colorPhase**: Jede Qualle hat eigene Phase, rotiert langsam welche Farbe Core vs Edge ist

### Body-Rendering (3 Passes)
1. **Glow Pass**: Großer Radius (1.5x), screen compositing, shadowBlur 50
2. **Body Pass**: Multi-Color-Gradient (core → mid → outer → transparent), shadowBlur 40
3. **Core Pass**: Weißer Kern → Core-Color → transparent, shadowBlur 20

### Tentakel-System
- **TENTACLE_COLORS**: 6 Farben (4 Scanner + Grün + Blau)
- Jeder Tentakel bekommt eigene Farbe aus dem Array
- Pulsierung per Farbgruppe mit Phase-Offset (coherent shimmer)
- Positions-History für Lag-Effekt (Tentakel folgen der Qualle nach)

## Was gut funktioniert
- lerpColor() für smoother Farbwechsel statt abrupter Sprünge
- 3-Pass-Rendering erzeugt echte Tiefe (Kern heller als Rand)
- Screen-Compositing auf allen Passes → Quallen leuchten wo sie überlappen

## Nächstes Mal
- COLOR_COMBOS als Presets sind besser als rein zufällige Farben (vermeidet hässliche Kombinationen)
- Position-History-Länge (20 Frames) bestimmt wie stark Tentakel nachziehen
