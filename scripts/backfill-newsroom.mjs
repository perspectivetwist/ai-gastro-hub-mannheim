import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const WEEKS = [
  { kw: 1,  date: '05. Januar 2026',   dateISO: '2026-01-05', prevWeek: 'vom 29. Dezember 2025 bis 4. Januar 2026' },
  { kw: 2,  date: '12. Januar 2026',   dateISO: '2026-01-12', prevWeek: 'vom 5. bis 11. Januar 2026' },
  { kw: 3,  date: '19. Januar 2026',   dateISO: '2026-01-19', prevWeek: 'vom 12. bis 18. Januar 2026' },
  { kw: 4,  date: '26. Januar 2026',   dateISO: '2026-01-26', prevWeek: 'vom 19. bis 25. Januar 2026' },
  { kw: 5,  date: '02. Februar 2026',  dateISO: '2026-02-02', prevWeek: 'vom 26. Januar bis 1. Februar 2026' },
  { kw: 6,  date: '09. Februar 2026',  dateISO: '2026-02-09', prevWeek: 'vom 2. bis 8. Februar 2026' },
  { kw: 7,  date: '16. Februar 2026',  dateISO: '2026-02-16', prevWeek: 'vom 9. bis 15. Februar 2026' },
  { kw: 8,  date: '23. Februar 2026',  dateISO: '2026-02-23', prevWeek: 'vom 16. bis 22. Februar 2026' },
  { kw: 9,  date: '02. März 2026',     dateISO: '2026-03-02', prevWeek: 'vom 23. bis 28. Februar 2026' },
  { kw: 10, date: '09. März 2026',     dateISO: '2026-03-09', prevWeek: 'vom 2. bis 8. März 2026' },
  { kw: 11, date: '16. März 2026',     dateISO: '2026-03-16', prevWeek: 'vom 9. bis 15. März 2026' },
]

const SYSTEM_PROMPT = `Du bist Redakteur des KI-Gastro-Newsrooms: einem wöchentlichen Digest für Restaurantbesitzer in Deutschland, Österreich und der Schweiz.

ZIELGRUPPE: Inhabergeführte Restaurants, Cafes, Bars mit 1-20 Mitarbeitern. Keine IT-Kenntnisse. Fragen sich: "Was bedeutet das für MICH nächste Woche?"

9 THEMEN-KATEGORIEN -- nur über diese berichten:
1. KI-Suche & Sichtbarkeit: ChatGPT/Perplexity/Gemini findet oder findet nicht Restaurants
2. KI-Reservierungen: OpenTable, TheFork, aleno + KI-Integration
3. KI-Bewertungsmanagement: Fake-Reviews, KI-Antwort-Tools, Google/TripAdvisor
4. KI im Betrieb: Food Waste, Dienstplanung, Kassensysteme, messbare Ersparnis
5. Neue KI-Tools: kostenlos oder unter 100 Euro/Monat, sofort nutzbar
6. Rechtliches & Datenschutz: DSGVO + KI, EU AI Act für KMUs, Kennzeichnung
7. KI + Payment: Betrugserkennung, Trinkgeld, digitale Quittungen, Agent Payments
8. KI + Accounting: Belegerfassung, Kassenbuch, Lohnabrechnung, Cashflow-Prognose
9. KI + Bestellsysteme: QR-Bestellung, Warenwirtschaft, Lieferantenbestellung, Upselling-KI

3 RELEVANZ-FRAGEN (alle müssen JA sein):
1. Kann ein DACH-Restaurantbesitzer diese Woche konkret handeln?
2. Relevant für Betrieb unter 20 Mitarbeiter?
3. Verständlich ohne IT-Kenntnisse?

TONALITÄT: Direkt, klar, ohne Buzzwords. Wie ein erfahrener Kollege nach dem Feierabend.
NICHT: "Die Implementierung von LLM-basierten Algorithmen revolutioniert..."
SONDERN: "ChatGPT empfiehlt dein Restaurant: wenn du das eine Ding machst"

SCHREIBREGELN:
- Keine langen Gedankenstriche. Stattdessen: Doppelpunkt (:), Punkt (.) oder neuer Satz.
- Keine Aufzählungszeichen am Satzanfang
- Keine generischen KI-Formulierungen wie "In der heutigen Zeit", "Es gilt zu beachten", "Die Implementierung von"
- Kurze Sätze. Max 20 Wörter pro Satz.
- Aktiv schreiben, nicht passiv`

async function generateArticle(week) {
  const filename = `public/newsroom/kw-${week.kw}-2026.json`
  const filepath = path.join(__dirname, '..', filename)

  if (fs.existsSync(filepath)) {
    console.log(`Skip KW ${week.kw} existiert bereits`)
    return
  }

  console.log(`Generiere KW ${week.kw} (${week.date})...`)

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      messages: [{
        role: 'user',
        content: `Recherchiere die wichtigsten KI-News für Gastronomen ${week.prevWeek}.

Suche nach: KI Gastronomie Restaurant Deutschland Januar Februar März 2026, ChatGPT Restaurant, KI Bewertungen Gastro, neue KI Tools Restaurant

Erstelle dann einen Newsroom-Artikel als reines JSON (kein Markdown, nur JSON):
{
  "slug": "kw-${week.kw}-2026",
  "kw": ${week.kw},
  "year": 2026,
  "date": "${week.date}",
  "headline": "Eine Zeile: konkrete Entwicklung, macht neugierig",
  "zahl_der_woche": {
    "zahl": "Echte Zahl aus recherchierten News",
    "kontext": "Was diese Zahl für ein kleines Restaurant bedeutet (1 Satz)"
  },
  "news": [
    {
      "titel": "Kurzer praegnanter Titel",
      "was_passiert": "Was ist passiert? 2 Saetze, konkret",
      "was_bedeutet_das": "Was bedeutet das fuer ein Restaurant in DACH? 2 Saetze, praktisch"
    },
    { "titel": "...", "was_passiert": "...", "was_bedeutet_das": "..." },
    { "titel": "...", "was_passiert": "...", "was_bedeutet_das": "..." }
  ],
  "handlungsempfehlung": "Eine konkrete Aufgabe diese Woche. Max 30 Min. 2 Saetze.",
  "seo": {
    "title": "[Headline max 60 Zeichen] | KI-Gastro-Newsroom KW ${week.kw} 2026",
    "metaDescription": "KW ${week.kw} 2026: [Kern-Aussage max 100 Zeichen]. Kostenloser KI-Check fuer Restaurants.",
    "keywords": "KI Gastronomie, KI Restaurant Deutschland, [2-3 weitere Keywords]",
    "canonicalUrl": "https://ai-gastro-hub.vercel.app/newsroom/kw-${week.kw}-2026",
    "datePublished": "${week.dateISO}T10:00:00.000Z",
    "internalLinks": [
      {
        "url": "[passender Scanner basierend auf Artikel-Thema]",
        "text": "[passender CTA-Text]"
      }
    ]
  }
}

Scanner-URL Logik fuer internalLinks:
- Sichtbarkeit/ChatGPT: https://aeo-gastro.vercel.app | "Pruefe kostenlos ob ChatGPT dein Restaurant findet"
- Bewertungen: https://geo-gastro.vercel.app | "Kostenloser KI-Reputations-Check"
- Bestellsysteme/Agenten: https://agentready-gastro.vercel.app | "Pruefe ob KI-Agenten bei dir buchen koennen"
- Sicherheit/Betrug: https://aisecurity-gastro.vercel.app | "Kostenloser KI-Sicherheits-Check"

Genau 3 News-Items. Nur JSON zurueckgeben.`
      }]
    })

    const textBlocks = response.content.filter(b => b.type === 'text')
    const text = textBlocks.map(b => b.text).join('')
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('Kein JSON: ' + text.substring(0, 200))

    const data = JSON.parse(jsonMatch[0])
    data.generatedAt = new Date().toISOString()

    fs.mkdirSync(path.dirname(filepath), { recursive: true })
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2))
    console.log(`OK KW ${week.kw} gespeichert: ${filename}`)
    console.log(`   Headline: ${data.headline}`)

    // 3 Sekunden warten um Rate Limits zu vermeiden
    await new Promise(r => setTimeout(r, 3000))

  } catch (err) {
    console.error(`FEHLER KW ${week.kw}:`, err.message)
  }
}

// Alle KWs sequenziell generieren
for (const week of WEEKS) {
  await generateArticle(week)
}

console.log('\nBackfill abgeschlossen!')
console.log('Vorhandene Artikel:', fs.readdirSync(path.join(__dirname, '..', 'public', 'newsroom')).length)
