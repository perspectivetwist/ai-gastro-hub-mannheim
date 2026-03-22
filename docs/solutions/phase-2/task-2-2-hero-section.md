# Task 2.2 – Hook Section bauen (Hero)

## Was gebaut
Vollbild-Hero mit Badge, 2-Zeilen Headline, Subline und Scroll-CTA.

## Problem
Besucher entscheidet in 3 Sekunden ob er bleibt – der erste Satz muss sitzen.

## Lösung
min-h-screen Section mit zentriertem Content. Badge in Neon-Pink, Headline mit Farbakzent auf Zeile 2, animate-bounce CTA-Pfeil der zu #problem scrollt.

## Was funktioniert hat
- Quallen-Canvas bleibt sichtbar hinter dem Hero (z-index: 1 vs 0)
- animate-bounce von Tailwind für den CTA-Pfeil
- Scroll-Anker via id="problem" auf ProblemSection

## Was vermeiden
- Kein background auf der Hero-Section setzen (Quallen müssen durchscheinen)

## Nächstes Mal
- Scroll-Anker-IDs frühzeitig auf alle Sections verteilen
