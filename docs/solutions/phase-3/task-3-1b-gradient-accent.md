# Task 3.1b – Problem-Section Pink → Hero-Gradient

## Problem
Solid #FF006E in Problem-Section passt nicht zum Hero-Gradient-Stil.

## Lösung
- `.gradient-accent` CSS-Klasse in globals.css angelegt
- Gradient: `linear-gradient(135deg, #FFB432 0%, #FF3CAC 50%, #FF2D78 100%)`
- Angewendet auf: Hero "Ökonomiewandel.", Problem "Jetzt.", alle 3 Stat-Card Zahlen
- Hero inline-styles durch Klasse ersetzt → Single Source of Truth

## Was funktioniert hat
- Wiederverwendbare CSS-Klasse statt inline-styles duplizieren

## Nächstes Mal
- Gradient-Tokens von Anfang an als Klasse anlegen
