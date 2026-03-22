# Task 3.2b – Emojis → Lucide Icons

## Problem
Emojis (👁️🚫⚠️) wirken unprofessionell und rendern inkonsistent.

## Lösung
- `npm install lucide-react`
- EyeOff (#00FFE0), Ban (#FFE600), ShieldAlert (#BF00FF)
- w-8 h-8, Scanner-Farben per style={{ color: p.color }}
- TypeScript: `LucideIcon` Type für typsicheres Array

## Was funktioniert hat
- Lucide Icons sind tree-shakeable, nur importierte Icons landen im Bundle
- Icon als Komponente: `const Icon = p.icon; <Icon className="w-8 h-8" />`
