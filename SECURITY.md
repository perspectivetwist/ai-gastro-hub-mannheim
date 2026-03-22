# SECURITY.md – ASD Landing Page

Basiert auf: OWASP Top 10 für LLM Applications 2025
Stand: 2026-03-05

## Kontext
ASD ist eine reine Frontend-Landing-Page ohne APIs und ohne externe Datenverarbeitung.
Kein LLM, kein Scraping, keine User-Daten. Risikoprofil: niedrig.

## Aktive Regeln

### REGEL 1: Kein API Key darf jemals im Code erscheinen
Keine API Keys vorhanden – reine Static Page. Gilt dennoch für alle zukünftigen Erweiterungen.
Verifikation: `grep -r "sk-ant\|secret\|token" app/ components/` → darf NICHTS zurückgeben.

### REGEL 2: .env.local niemals in Git
.gitignore muss enthalten: .env.local
Verifikation: `git status | grep .env` → darf .env.local NICHT zeigen.

### REGEL 3: Security Headers in next.config.ts
```
const securityHeaders = [
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	{ key: 'X-Frame-Options', value: 'DENY' },
	{ key: 'X-XSS-Protection', value: '1; mode=block' },
	{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
]
```

### REGEL 4: Externe Links mit rel="noopener noreferrer"
Alle 4 Produkt-Links öffnen in neuem Tab. Immer:
`<a href="..." target="_blank" rel="noopener noreferrer">`

## Pre-Deploy Checklist
- [ ] `grep -r "sk-ant\|secret\|token" app/ components/` → kein Treffer
- [ ] `git status | grep .env` → kein Treffer
- [ ] Alle externen Links haben rel="noopener noreferrer"
- [ ] Security Headers in next.config.ts gesetzt

## Was bewusst NICHT umgesetzt wird (YAGNI)
- Rate Limiting: keine API Routes vorhanden
- Input-Sanitization: kein User-Input verarbeitet
- WAF: Vercel Pro Feature, für V0 nicht nötig
