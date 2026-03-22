# Task 3.0b – Spacing Fix Hero → Problem Section

## Problem
Zu großer schwarzer Leerraum zwischen Hero-CTA und Problem-Section.

## Lösung
- Hero: `pb-16` auf Section-Level, `mb-16` vom CTA-Container entfernt
- ProblemSection: `py-24` → `pt-16 pb-24` (Top reduziert)
- `min-h-screen` beibehalten – der Leerraum kam primär vom `mb-16` am CTA + `py-24` Top-Padding

## Was funktioniert hat
- Gezielte Padding-Reduktion statt min-h-screen zu entfernen

## Was vermeiden
- Doppeltes Bottom-Spacing (mb auf Child + pb auf Parent)
