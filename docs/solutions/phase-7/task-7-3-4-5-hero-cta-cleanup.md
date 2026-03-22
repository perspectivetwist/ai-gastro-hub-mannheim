# Tasks 7.3, 7.4, 7.5: Hero CTA Cleanup

## Was gebaut
Drei zusammenhängende Hero-Vereinfachungen in einem Commit:

### 7.3 – CTA Button-Stil vereinheitlichen
- Primary CTA von Magenta-filled auf Ghost-Style (border, transparent bg)
- Beide Buttons visuell identisch

### 7.4 – 'Was ist ASD?' Button entfernen
- Nur noch ein CTA: "Jetzt kostenlos scannen"
- Container von flex-col/row auf einfaches flex justify-center

### 7.5 – Scroll-Indicator entfernen
- "Was bedeutet das für dich?" + Bounce-Pfeil komplett entfernt
- 17 Zeilen weniger Code

## Lösung
Alle 3 Tasks betreffen dieselbe Datei (HeroSection.tsx) und sind sequentiell abhängig → ein Commit.

## Was funktioniert hat
- Zusammenhängende Tasks in einem Commit: weniger Noise in Git-History
- Hero ist jetzt fokussiert: 1 CTA, kein Ablenkung

## Was vermeiden
- Zwei gleichwertige CTAs im Hero — erzeugt Entscheidungsparalyse
- Scroll-Indicator bei langen Pages — User scrollen instinktiv
