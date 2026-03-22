'use client'

import { useState } from 'react'
import { ShieldCheck, DatabaseZap, Flag, ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'Was ist AI Shift Drift für Restaurants?',
    answer: 'AI Shift Drift ist eine kostenlose KI-Readiness-Plattform speziell für deutsche Restaurants und Gastronomiebetriebe — mit 4 Scannern für Sichtbarkeit, Reputation, Agent-Bereitschaft und Sicherheit.',
    alwaysOpen: true,
    showUsps: true,
  },
  {
    question: 'Für welche Gastronomiebetriebe ist AI Shift Drift geeignet?',
    answer: 'Für Restaurants, Cafés, Bars, Lieferdienste und Catering-Unternehmen die verstehen wollen ob sie für die KI-Ära bereit sind — ohne IT-Kenntnisse.',
  },
  {
    question: 'Was kostet AI Shift Drift?',
    answer: 'Alle 4 Scanner sind kostenlos nutzbar. Kein Account, keine Kreditkarte.',
  },
  {
    question: 'Was ist der Unterschied zwischen den 4 Scannern?',
    answer: 'AEO prüft ob ChatGPT dein Restaurant findet. GEO prüft ob ChatGPT deinen Ruf kennt. Slipstream prüft ob KI-Agenten buchen können. Quantum prüft deine Sicherheit.',
  },
  {
    question: 'Warum brauche ich KI-Readiness als Restaurant?',
    answer: 'Weil ChatGPT und KI-Agenten übernehmen wie Gäste Restaurants finden und reservieren. Wer jetzt nicht sichtbar ist, verliert diese Gäste automatisch.',
  },
  {
    question: 'Wie fange ich an?',
    answer: 'Starte mit dem AEO Scanner — gib deine Restaurant-URL ein und sieh in 30 Sekunden deinen KI-Sichtbarkeits-Score.',
  },
]

export default function GastroFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="relative py-24 px-6 max-w-3xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Häufige <span className="gradient-accent">Fragen.</span>
      </h2>
      <div>
        {faqItems.map((item, i) => {
          const isAlwaysOpen = 'alwaysOpen' in item && item.alwaysOpen
          const showUsps = 'showUsps' in item && item.showUsps
          const isOpen = isAlwaysOpen || openIndex === i

          return (
            <div
              key={i}
              className="border-b py-5"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              {isAlwaysOpen ? (
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="font-semibold text-lg text-white">
                      {item.question}
                    </div>
                    <p
                      className="mt-3 leading-relaxed"
                      style={{ color: "#cccccc" }}
                    >
                      {item.answer}
                    </p>
                    {showUsps && (
                      <div className="flex flex-wrap gap-6 mt-5">
                        <div className="flex items-center gap-2 text-sm" style={{ color: "#888" }}>
                          <ShieldCheck size={16} style={{ color: "#00FF88" }} />
                          DSGVO-konform
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: "#888" }}>
                          <DatabaseZap size={16} style={{ color: "#00FF88" }} />
                          Keine Datenspeicherung
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: "#888" }}>
                          <Flag size={16} style={{ color: "#00FF88" }} />
                          Made in Germany
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-center justify-between w-full text-left gap-3 cursor-pointer"
                  >
                    <span className="font-semibold text-lg text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className="shrink-0 transition-transform duration-200"
                      style={{
                        color: "#888",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  {isOpen && (
                    <p
                      className="mt-3 leading-relaxed"
                      style={{ color: "#cccccc" }}
                    >
                      {item.answer}
                    </p>
                  )}
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
