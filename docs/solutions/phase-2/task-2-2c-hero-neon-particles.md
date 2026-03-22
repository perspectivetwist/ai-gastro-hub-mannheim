# Task 2.2c – Hero Typografie: Neon-Partikel in H1 Schrift

## Was gebaut
"Er ist ein Systemwandel." wird aus tausenden kleinen bunten Neonpunkten gerendert — wie ein Feld biolumineszenter Organismen in Textform.

## Gewählte Option
**Option A: Canvas-Overlay auf H1** — einzige Option die echte Partikel-Schrift erzeugt.

## Lösung: NeonParticleText Komponente
1. Unsichtbarer `<span>` rendert Text für korrektes Sizing (color: transparent)
2. Canvas liegt absolut darüber, gleiche Dimensionen
3. Text wird auf Canvas gezeichnet → `getImageData()` → Pixel-Maske
4. Maske wird sofort gelöscht
5. Partikel werden an Text-Pixel-Positionen platziert
6. Animation: Partikel pulsieren subtil (shimmer)

## Kanten-Schärfe (wichtigstes Learning)
Edge-Detection via Nachbar-Pixel-Check: Wenn ein Text-Pixel einen transparenten Nachbarn hat, ist es ein Randpixel. Randpixel werden IMMER inkludiert (kein Random-Skip), Interior-Pixel werden gesampelt. Ergebnis: scharfe Buchstaben-Konturen trotz Partikel-Ästhetik.

## Farb-Gewichtung
COLORS Array: 3x Pink, 1x Cyan, 1x Lila, 1x Gelb — Pink dominiert (passt zu ASD-Pink), andere Neonfarben als Akzente.

## Was NICHT funktioniert hat
1. **CSS text-shadow (Option B)**: Erzeugt nur Glow, keine Partikel. Sieht aus wie normaler Text mit Schatten.
2. **DPR-Scaling auf Canvas**: Führte zu komplett unsichtbarem Text (Scaling-Mismatch zwischen Build und Animate). Fix: 1x Canvas ohne DPR.
3. **Split useEffects (Build vs Animate)**: Timing-Problem — Animation lief bevor Partikel existierten. Fix: Single useEffect mit allem in einem Scope.
4. **`visibility: hidden` für Sizing-Text**: Container-Dimensionen wurden nicht korrekt übernommen. Fix: `color: transparent`.

## Performance
- `willReadFrequently: true` auf Canvas Context (optimiert getImageData)
- `document.fonts.ready` vor Init (verhindert falsche Text-Maske)
- Edge-Partikel sind kleiner (0.8-1.2px) als Interior (0.9-2.0px) → weniger Overdraw am Rand

## Nächstes Mal
- Canvas-Partikel-Text IMMER mit 1x Resolution starten, DPR erst wenn Basis funktioniert
- Font-Loading abwarten ist Pflicht für Text-Masking
- Edge-Detection von Anfang an einbauen — ohne Kanten sind Partikel-Buchstaben unleserlich
