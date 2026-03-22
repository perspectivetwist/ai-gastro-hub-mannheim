# Task 0.1 – GitHub Repo + CLAUDE.md + Doku-Struktur anlegen

## Was gebaut
Komplettes Projektfundament für ASD Landing Page:
- Next.js 14 Projekt (App Router, TypeScript, Tailwind CSS)
- CLAUDE.md mit allen Architektur-Regeln und Design-Tokens
- DEVELOPER.md mit Dateistruktur, Setup-Anleitung, Architektur
- SECURITY.md mit OWASP-basierter Checkliste
- docs/solutions/ Verzeichnisstruktur (Phase 0-4)
- GitHub Actions (docs-check.yml) für Doku-Validierung
- GitHub Repo: perspectivetwist/asd-landing (private)

## Problem
Ohne Projektfundament kann Claude Code nicht autark arbeiten.

## Lösung
Alle Dateien nach Notion-Task-Spezifikation 1:1 angelegt. Git config mit GitHub noreply-Email gesetzt.

## Was funktioniert hat
- create-next-app@14 funktioniert sauber mit allen Flags
- GitHub CLI (gh repo create) erstellt Repo direkt mit local source
- GitHub Actions Workflow validiert alle drei Pflichtdateien

## Was vermeiden
- Leere Verzeichnisse werden von Git nicht getrackt → .gitkeep hinzufügen
- GitHub noreply-Email Format: {id}+{username}@users.noreply.github.com

## Nächstes Mal
- .gitkeep direkt beim Anlegen leerer Verzeichnisse erstellen
