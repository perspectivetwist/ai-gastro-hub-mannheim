export default function TrustSection() {
  const scanners: { name: string; desc: string; url: string; color: string }[] = [
    {
      name: "Wake | AEO",
      desc: "Wird dein Restaurant von ChatGPT&Co zitiert?",
      url: "https://www.ki-gastronomie.com/aeo-scanner",
      color: "#6366f1",
    },
    {
      name: "Wake | GEO",
      desc: "Kennt ChatGPT&Co den Ruf deines Restaurants?",
      url: "https://www.ki-gastronomie.com/geo-scanner",
      color: "#A8E6A3",
    },
    {
      name: "Slipstream",
      desc: "Können Gäste via KI-Agenten bei deinem Restaurant reservieren?",
      url: "https://www.ki-gastronomie.com/agent-scanner",
      color: "#FFE600",
    },
    {
      name: "Quantum",
      desc: "Wie angreifbar ist dein Restaurant bei KI-Attacken?",
      url: "https://www.ki-gastronomie.com/security-scanner",
      color: "#FF1744",
    },
  ]

  return (
    <footer
      className="relative max-w-5xl mx-auto px-6 pb-16"
      style={{ zIndex: 1 }}
    >
      <div
        className="border-t pt-12"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="text-xs tracking-widest uppercase mb-8"
          style={{ color: "#888" }}
        >
          Teil des AI-Shift-Drift Ökosystems
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Scanner */}
          <div className="flex flex-col gap-4">
            {scanners.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="flex items-start gap-3 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0 mt-1"
                  style={{
                    background: s.color,
                    boxShadow: `0 0 8px 2px ${s.color}66`,
                  }}
                />
                <div className="flex flex-col">
                  <div
                    className="text-xs tracking-widest uppercase font-semibold"
                    style={{ color: s.color }}
                  >
                    {s.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#555" }}>
                    {s.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsroom */}
          <div>
            <a
              href="/newsroom"
              className="flex items-start gap-3 group"
            >
              <div
                className="w-[6px] h-[6px] rounded-full flex-shrink-0 mt-1"
                style={{
                  background: "#FF3CAC",
                  boxShadow: "0 0 8px 2px #FF3CAC66",
                }}
              />
              <div className="flex flex-col">
                <div className="text-xs tracking-widest uppercase font-semibold gradient-accent">
                  KI-Gastro-Newsroom
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#555" }}>
                  Was KI für die Gastronomie bedeutet, jeden Montag neu
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Städte */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mb-6 text-sm">
          <a href="https://www.ki-gastronomie.com/staedte/berlin" className="hover:underline" style={{ color: "#888" }}>Berlin</a>
          <a href="https://www.ki-gastronomie.com/staedte/hamburg" className="hover:underline" style={{ color: "#888" }}>Hamburg</a>
          <a href="https://www.ki-gastronomie.com/staedte/muenchen" className="hover:underline" style={{ color: "#888" }}>München</a>
          <a href="https://www.ki-gastronomie.com/staedte/koeln" className="hover:underline" style={{ color: "#888" }}>Köln</a>
          <a href="https://www.ki-gastronomie.com/staedte/frankfurt" className="hover:underline" style={{ color: "#888" }}>Frankfurt</a>
          <a href="https://www.ki-gastronomie.com/staedte/stuttgart" className="hover:underline" style={{ color: "#888" }}>Stuttgart</a>
          <a href="https://www.ki-gastronomie.com/staedte/duesseldorf" className="hover:underline" style={{ color: "#888" }}>Düsseldorf</a>
          <a href="https://www.ki-gastronomie.com/staedte/leipzig" className="hover:underline" style={{ color: "#888" }}>Leipzig</a>
          <a href="https://www.ki-gastronomie.com/staedte/dortmund" className="hover:underline" style={{ color: "#888" }}>Dortmund</a>
          <a href="https://www.ki-gastronomie.com/staedte/mannheim" className="hover:underline" style={{ color: "#888" }}>Mannheim</a>
        </div>

        {/* Legal */}
        <div className="flex justify-center gap-8">
          <div className="flex gap-6">
            <a
              href="/impressum"
              className="text-sm hover:underline"
              style={{ color: "#888" }}
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-sm hover:underline"
              style={{ color: "#888" }}
            >
              Datenschutz
            </a>
          </div>
        </div>
        <div
          className="mt-12 text-center text-xs"
          style={{ color: "#444" }}
        >
          © 2026 Ein Service von AI-SHIFT-DRIFT
        </div>
      </div>
    </footer>
  )
}
