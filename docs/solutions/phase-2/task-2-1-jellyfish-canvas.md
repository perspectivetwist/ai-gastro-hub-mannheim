# Task 2.1 – Quallen-Animation (JellyfishCanvas) bauen

## Was gebaut
Canvas-basierte Quallen-Animation als globaler Hintergrund der gesamten Page.

## Problem
Visuelles Universum schaffen in dem der Besucher sich befindet – Tiefsee × Weltraum.

## Lösung
HTML5 Canvas mit requestAnimationFrame. 7 Quallen (Desktop) / 3 (Mobile), jede mit allen 4 Neon-Farben als radialer Gradient. Tentakel via lineTo-Ketten mit sin-Modulation. Glow-Puls über opacity-Cycling.

## Was funktioniert hat
- Canvas API reicht vollständig – kein Three.js oder externe Library nötig
- position: fixed + pointer-events: none = kein Layout-Shift, keine Interaktion
- Resize-Handler für responsive Canvas-Größe

## Was vermeiden
- Nicht zu viele Quallen auf Mobile (Performance)
- globalAlpha immer auf 1 zurücksetzen nach dem Zeichnen

## Nächstes Mal
- Canvas-Größe muss bei window resize aktualisiert werden (sonst Verzerrung)
