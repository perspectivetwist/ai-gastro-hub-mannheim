# CLAUDE.md — AI Gastro Hub

## Was ist dieses Projekt?
Übergeordnete Landing Page für das AI-Gastro-Hub Ökosystem. Verlinkt auf 4 kostenlose KI-Scanner für Restaurants. Keine APIs, reine Frontend-Landing-Page.

## Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Sprache: TypeScript (strict)
- Hosting: Vercel
- Canvas API (Quallen-Animation)
- Vercel URL: https://ai-gastro-hub.vercel.app

## Design-Tokens
- Background: #000008
- ASD Pink: #FF006E
- Wake AEO Indigo: #6366f1
- Wake GEO Grün: #A8E6A3
- Slipstream Gelb: #FFE600
- Quantum Rot: #FF2D55
- Text: #FFFFFF / #888888

## QUALLEN-ARCHITEKTUR (KRITISCH)
- JellyfishCanvas in layout.tsx, position: fixed, z-index: 0
- Alle Sections: transparenter Hintergrund (keine bg-black!)
- Cards: rgba(255,255,255,0.04) oder rgba(0,0,0,0.4)

## Ökosystem-Links (Gastro)
- AEO: https://aeo-gastro.vercel.app
- GEO: https://geo-gastro.vercel.app
- Slipstream: https://agentready-gastro.vercel.app
- Quantum: https://aisecurity-gastro.vercel.app

## Workflow-Regeln
- **Grep-first**: Vor jeder Änderung `grep -rn` durchführen um bestehende Implementierung zu verstehen
- **Cat-verify**: Nach jeder Änderung `cat` der geänderten Datei
- **Nach jedem Task**: GitHub commit mit Task-Nummer, Lessons Learned in Notion updaten
- Nie eigenmächtig Scope erweitern — exakt DoD erfüllen, dann STOP

## AUTONOMIE-REGELN
- Alle Bash-Befehle ohne Rückfrage
- npm/npx/vercel ohne Rückfrage
- Dateien lesen/erstellen/überschreiben ohne Rückfrage
- Deployments ohne Rückfrage
- Bei Fehlern: 3 Versuche selbst, dann eskalieren
