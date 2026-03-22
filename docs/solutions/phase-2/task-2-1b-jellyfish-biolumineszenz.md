# Task 2.1b – JellyfishCanvas Upgrade: Biolumineszenz, organisches Driften, Glow

## Was gebaut
Komplettes Canvas-Rendering neu: Multi-Pass Glow, Biolumineszenz-Optik, organische Bewegung, Tentakel mit Lag.

## Lösung
- 3 Render-Passes pro Qualle: Outer Glow (blur 60), Body (blur 40), Bright Center (blur 20)
- `globalCompositeOperation: 'lighter'` für additives Leuchten
- Tentakel: 6-8 pro Qualle, individuelle Frequenzen, Position-History für 20-Frame-Lag
- Größenvariation: 1 große (190px, opacity 0.2), 4 mittlere (70-90px), 3 kleine (30-40px)
- Pulsierender Körper via `baseSize + sin() * 15%`
- Sinusförmige Drift-Überlagerung statt linearer Bewegung

## Was funktioniert hat
- shadowBlur + lighter compositing erzeugt überzeugenden Bloom ohne WebGL
- Position-History-Array für Tentakel-Lag ist simpel und effektiv
- Separate Farbe pro Qualle statt Regenbogen-Gradient wirkt natürlicher

## Nächstes Mal
- Canvas filter API (`ctx.filter = 'blur()'`) wurde bewusst nicht verwendet — Performance-Risiko auf Mobile.
