# Task 7.2: Hero Subtitle-Text aktualisieren

## Was gebaut
Hero-Subtitle von "ASD misst, ob KI-Ökosysteme dein Unternehmen finden und sicher nutzen können." auf "Wir messen, ob KI-Systeme dein Unternehmen finden, nutzen & sicher handeln können." geändert.

## Änderungen
- `components/HeroSection.tsx` Zeile 37-38: Subtitle-Text ersetzt

## Was funktioniert hat
- JSX unterstützt `&amp;` als HTML-Entity für `&` — kein String-Escaping nötig
- Minimaler 1-Datei-Task, Build sofort erfolgreich

## Was vermeiden
- In JSX nie rohes `&` in Text verwenden — immer `&amp;` oder `{"&"}` nutzen
