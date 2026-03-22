# Task 4.3 – Vercel Deployment + Live-Check

## Was gebaut
Production Deployment auf Vercel.

## Problem
Domain ai-shift-drift.vercel.app war bereits von einem anderen Vercel-Nutzer belegt.

## Lösung
Zwei Vercel-Projekte angelegt:
1. `asd-landing` → asd-landing.vercel.app
2. `ai-shift-drift` → ai-shift-drift-seven.vercel.app (Vercel suffix wegen Domain-Kollision)

Beide zeigen denselben Code. GitHub-Repo ist mit beiden verlinkt.

## Live-Check Ergebnisse
- Hauptseite: 200 OK, lang="de"
- /impressum: 200 OK
- /datenschutz: 200 OK
- Quallen-Animation läuft
- Alle Produkt-Links funktionieren

## Was vermeiden
- Vercel vergibt .vercel.app Subdomains automatisch. Wenn der Name vergeben ist, wird ein Suffix angehängt.
- Für Custom Domain: Vercel Dashboard → Domains

## Nächstes Mal
- Custom Domain frühzeitig konfigurieren bevor .vercel.app Subdomain-Konflikte entstehen.
