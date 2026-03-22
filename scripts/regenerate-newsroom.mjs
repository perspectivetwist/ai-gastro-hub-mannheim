import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// Jede Woche hat 3 EINZIGARTIGE Themen + eine einzigartige Zahl der Woche
// Kein Thema darf in einer anderen Woche vorkommen!
const WEEKS = [
  {
    kw: 1, date: '05. Januar 2026', dateISO: '2026-01-05',
    themen: [
      'Mehrwertsteuer auf Speisen sinkt dauerhaft auf 7% ab 1. Januar 2026. Getränke bleiben bei 19%. Auswirkungen auf Preisgestaltung und Kassensysteme.',
      'KI-Agenten als neues Konzept: Autonome Software-Agenten können 2026 erstmals selbstständig Buchungen und Bestellungen vorbereiten. Was bedeutet das Konzept für Restaurants?',
      'Restaurantsuche verlagert sich: Deutsche nutzen zunehmend ChatGPT und Perplexity statt Google für die Restaurantsuche. Der Trend für 2026.'
    ],
    zahl_hinweis: 'Nutze eine Zahl zur MwSt-Senkung oder Preisentwicklung in der Gastro. NICHT 70%.',
    headline_hinweis: 'Fokus auf MwSt-Senkung und KI-Agenten als Jahresstart-Thema'
  },
  {
    kw: 2, date: '12. Januar 2026', dateISO: '2026-01-12',
    themen: [
      'TheFork integriert Buchungsfunktion direkt in ChatGPT. Gäste können im Chat reservieren ohne die Plattform zu verlassen. Launch-Partner von OpenAI.',
      'Menu Engineering mit KI: Tools wie Tastewise analysieren Millionen Social-Media-Posts. DISH berät Restaurants mit Umsatzsteigerungen bis 20.000 Euro/Jahr.',
      'Bewertungsqualität statt Quantität: KI-Systeme bevorzugen detaillierte, konkrete Rezensionen. Generische Pauschalurteile werden ignoriert. 25% mehr Buchungen durch Empfehlungen.'
    ],
    zahl_hinweis: 'Nutze eine Zahl zu Menu Engineering, Umsatzsteigerung oder Buchungsraten. NICHT 70%.',
    headline_hinweis: 'Fokus auf TheFork+ChatGPT als Premiere oder Menu Engineering. NICHT "ChatGPT findet dein Restaurant".'
  },
  {
    kw: 3, date: '19. Januar 2026', dateISO: '2026-01-19',
    themen: [
      'KI-Telefonservice: Systeme wie Bookline + OpenTable verbinden telefonische Reservierungsanfragen automatisch mit dem Kalender. Die KI versteht Gäste-Wünsche in Echtzeit.',
      'Lieferservice-KI: DoorDash und Uber Eats werden in ChatGPT integriert. Gäste bestellen direkt im Chat. Auswirkungen auf kleine Restaurants mit eigenem Lieferdienst.',
      'Google Business Profile wird zur KI-Visitenkarte: Strukturierte Daten (Öffnungszeiten, Menüs, Allergene) werden Pflicht für KI-Sichtbarkeit.'
    ],
    zahl_hinweis: 'Nutze eine Zahl zu Telefonreservierungen oder Google Business Profile Nutzung. NICHT 70%.',
    headline_hinweis: 'Fokus auf KI-Telefonservice oder Lieferservice. Kein "ChatGPT findet/bucht dein Restaurant".'
  },
  {
    kw: 4, date: '26. Januar 2026', dateISO: '2026-01-26',
    themen: [
      'Sichtbarkeitsproblem: Analysen zeigen, dass nur ein Bruchteil lokaler Restaurants in KI-Empfehlungen auftaucht. Der Wettbewerb um KI-Sichtbarkeit ist härter als bei Google.',
      'Website-Optimierung für KI-Crawler: FAQ-Formate, klare Textblöcke, strukturierte Daten (Schema.org). So wird deine Website maschinenlesbar.',
      'Preiskalkulation mit KI: Tools berechnen automatisch Margen, empfehlen Preisanpassungen basierend auf Wareneinsatz und Marktdaten. Einstieg ab 30 Euro/Monat.'
    ],
    zahl_hinweis: 'Nutze eine Zahl zum Anteil der Restaurants die in KI-Ergebnissen fehlen. NICHT 70%.',
    headline_hinweis: 'Fokus auf das Sichtbarkeitsproblem oder Website-Optimierung. Kein "ChatGPT findet/bucht".'
  },
  {
    kw: 5, date: '02. Februar 2026', dateISO: '2026-02-02',
    themen: [
      'Google Maps "Ask Maps": KI-Feature beantwortet Fragen wie "Wo essen Familien mit Kleinkindern draußen?" Die KI liest Bewertungstexte, nicht nur Sternewertungen.',
      'Google entfernt 2025 über 115 Millionen gefälschte Bewertungen. KI analysiert Textmuster, Nutzerverhalten, Bildmanipulation. Gekaufte Reviews funktionieren nicht mehr.',
      'Allergenkennzeichnung per KI: Neue Tools scannen Rezepte und generieren automatisch Allergenlisten für Speisekarten. EU-Vorschriften werden leichter einhaltbar.'
    ],
    zahl_hinweis: 'Nutze 115 Millionen (entfernte Fake-Reviews) oder eine Zahl zu Google Maps Nutzung. NICHT 70%.',
    headline_hinweis: 'Fokus auf Google Maps KI oder Fake-Review-Erkennung. Kein "ChatGPT".'
  },
  {
    kw: 6, date: '09. Februar 2026', dateISO: '2026-02-09',
    themen: [
      'TripAdvisor baut massive KI-Fake-Review-Abwehr: Echtzeit-Validierung reduziert Spam um 40%. 25% mehr authentische Beiträge seit Rollout.',
      'Google AI Overviews startet in DACH: Über 40 Länder freigeschaltet. Klassische Linklisten verschwinden. Google liefert komplette Antworten statt 10 blaue Links.',
      'Social-Media-Content mit KI erstellen: Canva Magic Studio, ChatGPT und Midjourney für Restaurant-Posts. Professionelle Bilder und Texte ohne Agentur. Unter 50 Euro/Monat.'
    ],
    zahl_hinweis: 'Nutze 40% (Spam-Reduktion TripAdvisor) oder eine Zahl zu Google AI Overviews. NICHT 70%.',
    headline_hinweis: 'Fokus auf TripAdvisor KI oder Google AI Overviews. Kein "ChatGPT findet/bucht".'
  },
  {
    kw: 7, date: '16. Februar 2026', dateISO: '2026-02-16',
    themen: [
      'Gastro-Trend 2026: Restaurantbesuch wird zum Event. Gäste besuchen seltener, budgetieren dafür mehr. Geburtstage, Jahrestage statt Freitag-Casual.',
      'Last-Minute-Buchungen und Nachmittags-Slots boomen: 16-17 Uhr wird zur neuen Umsatz-Zeit. Flexible Tischvergabe und Happy-Hour-Strategien als Chance.',
      'KI-Dienstplanung für kleine Teams: 2-3 Stunden pro Woche sparen. Tools wie Planday, Gastromatic oder einfache ChatGPT-Vorlagen für Schichtpläne.'
    ],
    zahl_hinweis: 'Nutze eine Zahl zu Buchungsverhalten (Last-Minute-Anteil) oder Zeitersparnis Dienstplanung. NICHT 70%.',
    headline_hinweis: 'Fokus auf veränderte Gäste-Gewohnheiten oder Last-Minute-Trend. KEIN "ChatGPT" im Titel.'
  },
  {
    kw: 8, date: '23. Februar 2026', dateISO: '2026-02-23',
    themen: [
      'KI-Suche funktioniert anders als Google: KI kombiniert Infos aus vielen Quellen gleichzeitig. Konsistenz über Plattformen wird wichtiger als Keywords und SEO-Tricks.',
      'KI-Tools für Speisekarten und Kalkulation unter 100 Euro/Monat: Tastewise, ChatGPT, Notion AI kombiniert. Menüplanung, Preiskalkulation und Upselling ohne Agentur.',
      'Datenkonsistenz als Rankingfaktor: Wenn Öffnungszeiten, Adresse oder Küchenstil sich zwischen Plattformen widersprechen, sortiert KI dein Restaurant aus.'
    ],
    zahl_hinweis: 'Nutze eine Zahl zu Online-Suchverhalten oder Datenkonsistenz-Problemen bei Restaurants. NICHT 70%.',
    headline_hinweis: 'Fokus auf "KI sucht anders als Google" oder Datenkonsistenz. Kein "ChatGPT findet/bucht".'
  },
  {
    kw: 9, date: '02. März 2026', dateISO: '2026-03-02',
    themen: [
      'Yumzi Gastro GPT aus Österreich: KI-Tool erstellt digitale und physische Speisekarten in Sekunden. Nutzer berichten von besseren Bewertungen und höherem Durchschnittsumsatz.',
      'Raitify: Deutsches Startup automatisiert Bewertungsmanagement komplett mit KI. Antworten auf Google- und TripAdvisor-Reviews in Sekunden statt Stunden.',
      'EU AI Act: Was kleine Restaurants 2026 wissen müssen. Kennzeichnungspflicht für KI-generierte Inhalte. Datenschutz bei KI-Chatbots auf der eigenen Website.'
    ],
    zahl_hinweis: 'Nutze eine Zahl zu Bewertungsantwort-Zeiten oder Speisekarten-Optimierung. NICHT 70%.',
    headline_hinweis: 'Fokus auf neue Tools (Yumzi/Raitify) oder EU AI Act. KEIN "ChatGPT" im Titel.'
  },
  {
    kw: 10, date: '09. März 2026', dateISO: '2026-03-09',
    themen: [
      'Restaurant NOI aus Köln gewinnt Deutschen Gastro-Gründerpreis 2026. KI steuert Personalplanung, Einkauf und Tischbelegung. 70 Euro Umsatz pro Gast auf 45 qm.',
      'KI-Einkaufsplanung reduziert Food Waste: Automatische Bestellvorschläge basierend auf Wetter, Buchungen und historischen Daten. Bis zu 30% weniger Verschwendung.',
      'KI-gestützte Tischbelegung: Algorithmen optimieren Tischzuweisung in Echtzeit. L\'Osteria testet System mit 15% mehr Auslastung und höherem Umsatz pro Kopf.'
    ],
    zahl_hinweis: 'Nutze 70 Euro (Umsatz pro Gast bei NOI) oder 15% (mehr Auslastung). NICHT 70%.',
    headline_hinweis: 'Fokus auf NOI Gründerpreis oder Food-Waste-Reduktion. KEIN "ChatGPT" im Titel.'
  },
  {
    kw: 11, date: '16. März 2026', dateISO: '2026-03-16',
    themen: [
      'KI-Empfehlungen ersetzen Google-Linklisten: ChatGPT, Perplexity und Google zeigen eine Empfehlung pro Frage statt zehn Optionen. Neue Spielregeln für Sichtbarkeit.',
      'Perplexity wächst als Restaurantsuchmaschine in Deutschland. Die KI-Suchmaschine liefert sofort Antworten mit Quellen statt Links. Gastronomen müssen in den zitierten Quellen auftauchen.',
      'Local SEO vs. Answer Engine Optimization (AEO): Klassische Google-Optimierung reicht nicht mehr. Restaurants brauchen eine Strategie für KI-Antworten, nicht nur für Rankings.'
    ],
    zahl_hinweis: 'Nutze eine Zahl zu Perplexity-Nutzung oder AEO vs SEO Trends. NICHT 70%.',
    headline_hinweis: 'Fokus auf den Wandel von Google zu KI-Antworten oder Perplexity. Kreative Headline.'
  }
]

const SYSTEM_PROMPT = `Du bist Redakteur des KI-Gastro-Newsrooms: einem wöchentlichen Digest für Restaurantbesitzer in Deutschland, Österreich und der Schweiz.

ZIELGRUPPE: Inhabergeführte Restaurants, Cafes, Bars mit 1-20 Mitarbeitern. Keine IT-Kenntnisse. Fragen sich: "Was bedeutet das für MICH nächste Woche?"

TONALITÄT: Direkt, klar, ohne Buzzwords. Wie ein erfahrener Kollege nach dem Feierabend.
NICHT: "Die Implementierung von LLM-basierten Algorithmen revolutioniert..."
SONDERN: "Deine Bewertungen entscheiden jetzt, ob KI dich empfiehlt"

SCHREIBREGELN:
- Keine langen Gedankenstriche (em-dashes). Stattdessen: Doppelpunkt (:), Punkt (.) oder neuer Satz.
- Keine Aufzählungszeichen am Satzanfang
- Keine generischen KI-Formulierungen wie "In der heutigen Zeit", "Es gilt zu beachten", "Die Implementierung von"
- Kurze Sätze. Max 20 Wörter pro Satz.
- Aktiv schreiben, nicht passiv
- Jede Headline MUSS einzigartig und verschieden von allen anderen sein. Vermeide Muster wie "ChatGPT findet/bucht/macht dein Restaurant".`

async function generateArticle(week, previousHeadlines) {
  const slug = `kw-${week.kw}-2026`
  const filepath = path.join(__dirname, '..', 'public', 'newsroom', `${slug}.json`)

  console.log(`\nGeneriere KW ${week.kw} (${week.date})...`)

  const forbiddenTopicsNote = previousHeadlines.length > 0
    ? `\n\nBEREITS VERWENDETE HEADLINES (zur Vermeidung von Ähnlichkeit):\n${previousHeadlines.map((h, i) => `- KW ${i + 1}: "${h}"`).join('\n')}\n\nDeine Headline MUSS sich deutlich von allen obigen unterscheiden. Anderes Satzformat, anderer Einstieg, anderer Fokus.`
    : ''

  const userPrompt = `Schreibe einen KI-Gastro-Newsroom-Artikel für KW ${week.kw} 2026 (${week.date}).

PFLICHT-THEMEN für diese Woche (genau diese 3, keine anderen):
1. ${week.themen[0]}
2. ${week.themen[1]}
3. ${week.themen[2]}

ZAHL DER WOCHE: ${week.zahl_hinweis}

HEADLINE: ${week.headline_hinweis}${forbiddenTopicsNote}

Erstelle den Artikel als reines JSON (kein Markdown, nur JSON):
{
  "slug": "${slug}",
  "kw": ${week.kw},
  "year": 2026,
  "date": "${week.date}",
  "headline": "Einzigartige, neugierig machende Headline. Max 80 Zeichen.",
  "zahl_der_woche": {
    "zahl": "Eine konkrete Zahl mit Einheit",
    "kontext": "Was diese Zahl für ein kleines Restaurant bedeutet (1 Satz)"
  },
  "news": [
    {
      "titel": "Kurzer Titel (max 60 Zeichen)",
      "was_passiert": "Was ist passiert? 2-3 Sätze, konkret und verständlich.",
      "was_bedeutet_das": "Was bedeutet das für ein Restaurant in DACH? 2-3 Sätze, praktisch und handlungsorientiert."
    },
    { "titel": "...", "was_passiert": "...", "was_bedeutet_das": "..." },
    { "titel": "...", "was_passiert": "...", "was_bedeutet_das": "..." }
  ],
  "handlungsempfehlung": "Eine konkrete Aufgabe diese Woche. Max 30 Min Zeitaufwand. 2-3 Sätze.",
  "seo": {
    "title": "SEO-Titel max 60 Zeichen | KI-Gastro KW ${week.kw}",
    "metaDescription": "KW ${week.kw} 2026: Kern-Aussage max 120 Zeichen. Für Restaurants in DACH.",
    "keywords": "KI Gastronomie, [3-4 spezifische Keywords passend zum Inhalt]",
    "canonicalUrl": "https://ai-gastro-hub.vercel.app/newsroom/${slug}",
    "datePublished": "${week.dateISO}T10:00:00.000Z",
    "internalLinks": [
      {
        "url": "[passendster Scanner]",
        "text": "[passender CTA]"
      }
    ]
  }
}

Scanner-URLs für internalLinks:
- Sichtbarkeit/KI-Suche: https://aeo-gastro.vercel.app | "Prüfe kostenlos: Findet ChatGPT dein Restaurant?"
- Bewertungen/Reputation: https://geo-gastro.vercel.app | "Kostenloser KI-Reputations-Check für dein Restaurant"
- Agenten/Bestellungen: https://agentready-gastro.vercel.app | "Prüfe ob KI-Agenten bei dir buchen können"
- Sicherheit/Datenschutz: https://aisecurity-gastro.vercel.app | "Kostenloser KI-Sicherheits-Check für dein Restaurant"

WICHTIG: Nur das JSON zurückgeben. Kein Text davor oder danach.`

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
      system: SYSTEM_PROMPT,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      messages: [{ role: 'user', content: userPrompt }]
    })

    const textBlocks = response.content.filter(b => b.type === 'text')
    const text = textBlocks.map(b => b.text).join('')
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('Kein JSON gefunden: ' + text.substring(0, 300))

    const data = JSON.parse(jsonMatch[0])
    data.generatedAt = new Date().toISOString()

    fs.writeFileSync(filepath, JSON.stringify(data, null, 2))
    console.log(`OK KW ${week.kw}: "${data.headline}"`)
    return data.headline

  } catch (err) {
    console.error(`FEHLER KW ${week.kw}:`, err.message)
    // Bei Fehler nochmal versuchen
    console.log(`Retry KW ${week.kw}...`)
    await new Promise(r => setTimeout(r, 5000))
    try {
      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 2000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userPrompt }]
      })
      const textBlocks = response.content.filter(b => b.type === 'text')
      const text = textBlocks.map(b => b.text).join('')
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (!jsonMatch) throw new Error('Retry: Kein JSON: ' + text.substring(0, 300))
      const data = JSON.parse(jsonMatch[0])
      data.generatedAt = new Date().toISOString()
      fs.writeFileSync(filepath, JSON.stringify(data, null, 2))
      console.log(`OK (Retry) KW ${week.kw}: "${data.headline}"`)
      return data.headline
    } catch (retryErr) {
      console.error(`FEHLER Retry KW ${week.kw}:`, retryErr.message)
      return null
    }
  }
}

// Sequenziell generieren, Headlines tracken
const headlines = []
for (const week of WEEKS) {
  const headline = await generateArticle(week, headlines)
  if (headline) headlines.push(headline)
  else headlines.push('(Fehler)')
  await new Promise(r => setTimeout(r, 3000))
}

console.log('\n=== Regeneration abgeschlossen ===')
console.log('Headlines:')
headlines.forEach((h, i) => console.log(`  KW ${i + 1}: ${h}`))
console.log(`\nArtikel: ${fs.readdirSync(path.join(__dirname, '..', 'public', 'newsroom')).length}`)
