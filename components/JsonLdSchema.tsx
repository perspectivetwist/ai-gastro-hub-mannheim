export default function JsonLdSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Shift Drift",
    "url": "https://www.ki-gastronomie.com",
    "sameAs": ["https://github.com/perspectivetwist"]
  }

  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Gastro Hub",
    "url": "https://www.ki-gastronomie.com",
    "description": "4 kostenlose KI-Scanner für Restaurants"
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist AI Shift Drift für Restaurants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI Shift Drift ist eine kostenlose KI-Readiness-Plattform speziell für deutsche Restaurants und Gastronomiebetriebe. Mit 4 Scannern für Sichtbarkeit, Reputation, Agent-Bereitschaft und Sicherheit."
        }
      },
      {
        "@type": "Question",
        "name": "Für welche Gastronomiebetriebe ist AI Shift Drift geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für Restaurants, Cafés, Bars, Lieferdienste und Catering-Unternehmen die verstehen wollen ob sie für die KI-Ära bereit sind. Ohne IT-Kenntnisse."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet AI Shift Drift?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle 4 Scanner sind kostenlos nutzbar. Kein Account, keine Kreditkarte."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen den 4 Scannern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AEO prüft ob ChatGPT dein Restaurant findet. GEO prüft ob ChatGPT deinen Ruf kennt. Slipstream prüft ob KI-Agenten buchen können. Quantum prüft deine Sicherheit."
        }
      },
      {
        "@type": "Question",
        "name": "Warum brauche ich KI-Readiness als Restaurant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Weil ChatGPT und KI-Agenten übernehmen wie Gäste Restaurants finden und reservieren. Wer jetzt nicht sichtbar ist, verliert diese Gäste automatisch."
        }
      },
      {
        "@type": "Question",
        "name": "Wie fange ich an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Starte mit dem AEO Scanner. Gib deine Restaurant-URL ein und sieh in 30 Sekunden deinen KI-Sichtbarkeits-Score."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  )
}
