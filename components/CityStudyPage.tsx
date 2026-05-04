import TrustSection from "@/components/TrustSection";

interface CityData {
  city: string;
  slug: string;
  total_restaurants: number;
  aeo_avg: number;
  geo_avg: number;
  agent_avg: number;
  security_avg: number;
  sichtbarkeitsdefizit_pct: number;
  above_national: boolean;
  aeo_distribution: { label: string; emoji: string; min: number; max: number; count: number; pct: number }[];
  geo_distribution: { label: string; emoji: string; min: number; max: number; count: number; pct: number }[];
  top_problems: { text: string; count: number; pct: number }[];
  stadtteil_ranking: { name: string; avg_aeo: number; count: number }[];
  kuechen_breakdown: { name: string; count: number; avg_aeo: number }[];
  national: { aeo_avg: number; geo_avg: number; agent_avg: number; security_avg: number };
  city_aeo_ranking: Record<string, number>;
}

function ScoreComparison({ label, cityScore, nationalScore, color }: { label: string; cityScore: number; nationalScore: number; color: string }) {
  const diff = cityScore - nationalScore;
  const diffStr = diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1);
  const diffColor = diff > 0 ? "#22c55e" : diff < 0 ? "#ef4444" : "#888";

  return (
    <div className="border rounded-lg p-5" style={{ borderColor: `${color}33`, background: `${color}0A` }}>
      <div className="text-sm font-semibold mb-2" style={{ color }}>{label}</div>
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold" style={{ color }}>{cityScore.toFixed(1)}</span>
        <span className="text-sm" style={{ color: "#888" }}>vs. {nationalScore.toFixed(1)} national</span>
        <span className="text-sm font-semibold" style={{ color: diffColor }}>({diffStr})</span>
      </div>
    </div>
  );
}

export default function CityStudyPage({ data }: { data: CityData }) {
  const rankPosition = Object.entries(data.city_aeo_ranking)
    .sort(([, a], [, b]) => b - a)
    .findIndex(([city]) => city === data.city) + 1;

  return (
    <>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-16" style={{ zIndex: 1 }}>
        <div className="relative max-w-4xl">
          <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border"
            style={{ borderColor: "#F59E0B44", color: "#F59E0B", background: "rgba(245,158,11,0.06)" }}
          >
            {data.total_restaurants} Restaurants · {data.stadtteil_ranking.length} Stadtteile · 4 Scanner
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            KI-Readiness {data.city}
          </h1>
          <p className="text-xl md:text-2xl mb-4" style={{ color: "#cccccc" }}>
            {data.sichtbarkeitsdefizit_pct}% der Restaurants unsichtbar für ChatGPT (2026)
          </p>
          <p className="text-sm" style={{ color: "#666" }}>
            AI Shift Drift · Substudie aus dem AI-Readiness Report 2026
          </p>
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* AUF EINEN BLICK */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          <span className="gradient-accent">{data.city} auf einen Blick</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <ScoreComparison label="KI-Sichtbarkeit (AEO)" cityScore={data.aeo_avg} nationalScore={data.national.aeo_avg} color="#6366f1" />
          <ScoreComparison label="KI-Zitierbarkeit (GEO)" cityScore={data.geo_avg} nationalScore={data.national.geo_avg} color="#A8E6A3" />
          <ScoreComparison label="Agent-Readiness" cityScore={data.agent_avg} nationalScore={data.national.agent_avg} color="#FFE600" />
          <ScoreComparison label="KI-Sicherheit" cityScore={data.security_avg} nationalScore={data.national.security_avg} color="#FF1744" />
        </div>

        {/* Position callout */}
        <div
          className="rounded-lg p-6 border"
          style={{ background: "rgba(245,158,11,0.04)", borderColor: "rgba(245,158,11,0.15)" }}
        >
          <p className="text-base leading-relaxed" style={{ color: "#cccccc" }}>
            <span className="font-semibold" style={{ color: "#F59E0B" }}>Einordnung:</span>{" "}
            {data.city} belegt Platz <span className="font-bold text-white">{rankPosition}</span> von 10 Städten im AEO-Ranking.{" "}
            {data.above_national
              ? `Mit einem AEO-Score von ${data.aeo_avg} liegt ${data.city} über dem nationalen Durchschnitt (${data.national.aeo_avg}).`
              : `Mit einem AEO-Score von ${data.aeo_avg} liegt ${data.city} unter dem nationalen Durchschnitt (${data.national.aeo_avg}).`}
          </p>
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* AEO VERTEILUNG */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="gradient-accent">KI-Sichtbarkeit</span> in {data.city}
        </h2>
        <div
          className="rounded-lg p-6 mb-6 border"
          style={{ background: "rgba(99,102,241,0.04)", borderColor: "rgba(99,102,241,0.15)" }}
        >
          <p className="text-base font-semibold" style={{ color: "#6366f1" }}>
            {data.sichtbarkeitsdefizit_pct}% der {data.city}er Restaurants sind für KI-Antwortmaschinen unzureichend aufgestellt.
          </p>
        </div>

        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Kategorie</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Score</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Restaurants</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Anteil</th>
              </tr>
            </thead>
            <tbody>
              {data.aeo_distribution.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-3 pr-4" style={{ color: "#cccccc" }}>
                    {row.emoji} {row.label}
                  </td>
                  <td className="py-3 pr-4" style={{ color: "#888" }}>{row.min}–{row.max}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "#ffffff" }}>{row.pct.toFixed(1).replace(".", ",")}%</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <td className="py-3 pr-4 font-semibold" style={{ color: "#F59E0B" }}>Ø Score {data.city}</td>
                <td className="py-3 pr-4" />
                <td className="py-3 pr-4" />
                <td className="py-3 text-right font-bold" style={{ color: "#F59E0B" }}>{data.aeo_avg.toFixed(1).replace(".", ",")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* GEO */}
        <h3 className="text-xl font-bold mb-6">KI-Zitierbarkeit (GEO)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Kategorie</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Score</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Restaurants</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Anteil</th>
              </tr>
            </thead>
            <tbody>
              {data.geo_distribution.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-3 pr-4" style={{ color: "#cccccc" }}>
                    {row.emoji} {row.label}
                  </td>
                  <td className="py-3 pr-4" style={{ color: "#888" }}>{row.min}–{row.max}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "#ffffff" }}>{row.pct.toFixed(1).replace(".", ",")}%</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <td className="py-3 pr-4 font-semibold" style={{ color: "#F59E0B" }}>Ø Score {data.city}</td>
                <td className="py-3 pr-4" />
                <td className="py-3 pr-4" />
                <td className="py-3 text-right font-bold" style={{ color: "#F59E0B" }}>{data.geo_avg.toFixed(1).replace(".", ",")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* TOP 3 PROBLEME */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="gradient-accent">Top 3 Probleme</span> in {data.city}
        </h2>

        <div className="space-y-3 mb-8">
          {data.top_problems.map((problem, i) => (
            <div
              key={i}
              className="flex gap-0 rounded-lg overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #6366f1, #FF3CAC)" }} />
              <p className="text-sm leading-relaxed p-4" style={{ color: "#cccccc" }}>
                <span className="font-semibold text-white">{i + 1}.</span>{" "}
                {problem.text} – bei <span className="font-semibold text-white">{problem.count} Restaurants ({problem.pct}%)</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* STADTTEIL RANKING */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="gradient-accent">Stadtteil-Ranking</span>
        </h2>
        <p className="text-base mb-8" style={{ color: "#cccccc" }}>
          Welche Stadtteile in {data.city} sind am besten für die KI-Ära aufgestellt?
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>#</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Stadtteil</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Ø AEO</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Restaurants</th>
              </tr>
            </thead>
            <tbody>
              {data.stadtteil_ranking.map((row, i) => {
                const emoji = row.avg_aeo >= 61 ? "🟢" : row.avg_aeo >= 31 ? "🟡" : "🔴";
                return (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="py-3 pr-4" style={{ color: "#888" }}>{i + 1}</td>
                    <td className="py-3 pr-4 font-semibold" style={{ color: "#ffffff" }}>{emoji} {row.name}</td>
                    <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.avg_aeo.toFixed(1).replace(".", ",")}</td>
                    <td className="py-3 text-right" style={{ color: "#888" }}>{row.count}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* KÜCHEN BREAKDOWN */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="gradient-accent">Küchen-Typen</span> und KI-Sichtbarkeit
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Küche</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Anzahl</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Ø AEO</th>
              </tr>
            </thead>
            <tbody>
              {data.kuechen_breakdown.map((row, i) => {
                const emoji = row.avg_aeo >= 61 ? "🟢" : row.avg_aeo >= 31 ? "🟡" : "🔴";
                return (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td className="py-3 pr-4" style={{ color: "#ffffff" }}>{emoji} {row.name}</td>
                    <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                    <td className="py-3 text-right font-semibold" style={{ color: "#cccccc" }}>{row.avg_aeo.toFixed(1).replace(".", ",")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* NATIONALER VERGLEICH */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="gradient-accent">{data.city}</span> im nationalen Vergleich
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm table-fixed">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="w-1/5 text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Stadt</th>
                <th className="w-1/5 text-right py-3 pr-4 font-semibold" style={{ color: "#6366f1" }}>AEO Ø</th>
                <th className="w-1/5 text-right py-3 pr-4 font-semibold" style={{ color: "#A8E6A3" }}>GEO Ø</th>
                <th className="w-1/5 text-right py-3 pr-4 font-semibold" style={{ color: "#FFE600" }}>AgentReady Ø</th>
                <th className="w-1/5 text-right py-3 font-semibold" style={{ color: "#FF1744" }}>Security Ø</th>
              </tr>
            </thead>
            <tbody>
              {[
                { city: "Mannheim", aeo: 46.6, geo: 42.3, agent: 63.3, sec: 84.0 },
                { city: "Hamburg", aeo: 46.3, geo: 41.8, agent: 58.2, sec: 82.0 },
                { city: "Düsseldorf", aeo: 44.6, geo: 40.9, agent: 64.1, sec: 83.1 },
                { city: "München", aeo: 44.1, geo: 40.8, agent: 59.5, sec: 82.6 },
                { city: "Leipzig", aeo: 43.8, geo: 48.3, agent: 63.7, sec: 85.6 },
                { city: "Köln", aeo: 43.5, geo: 40.3, agent: 59.4, sec: 82.7 },
                { city: "Dortmund", aeo: 43.1, geo: 46.1, agent: 63.9, sec: 84.8 },
                { city: "Stuttgart", aeo: 42.6, geo: 44.0, agent: 57.7, sec: 84.2 },
                { city: "Frankfurt", aeo: 42.0, geo: 42.7, agent: 57.8, sec: 83.5 },
                { city: "Berlin", aeo: 41.3, geo: 40.2, agent: 59.8, sec: 83.5 },
              ].map((row, i) => {
                const isCurrentCity = row.city === data.city;
                return (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      background: isCurrentCity ? "rgba(245,158,11,0.06)" : "transparent",
                    }}
                  >
                    <td className="py-3 pr-4 font-semibold" style={{ color: isCurrentCity ? "#F59E0B" : "#ffffff" }}>
                      {isCurrentCity ? "→ " : ""}{row.city}
                    </td>
                    <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.aeo.toFixed(1).replace(".", ",")}</td>
                    <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.geo.toFixed(1).replace(".", ",")}</td>
                    <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.agent.toFixed(1).replace(".", ",")}</td>
                    <td className="py-3 text-right" style={{ color: "#cccccc" }}>{row.sec.toFixed(1).replace(".", ",")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />

      {/* CTA */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto" style={{ zIndex: 1 }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Wo steht <span className="gradient-accent">Ihr Restaurant in {data.city}?</span>
        </h2>
        <p className="text-base mb-12 max-w-3xl" style={{ color: "#cccccc" }}>
          Diese Studie zeigt den Durchschnitt für {data.city}. Was zählt ist Ihre individuelle Position. Alle vier Scanner sind kostenlos – Ergebnis in unter 60 Sekunden.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { name: "KI-Sichtbarkeit (AEO)", url: "https://www.ki-gastronomie.com/aeo-scanner", color: "#6366f1" },
            { name: "KI-Zitierbarkeit (GEO)", url: "https://www.ki-gastronomie.com/geo-scanner", color: "#A8E6A3" },
            { name: "KI-Agent-Readiness", url: "https://www.ki-gastronomie.com/agent-scanner", color: "#FFE600" },
            { name: "KI-Sicherheit", url: "https://www.ki-gastronomie.com/security-scanner", color: "#FF1744" },
          ].map((cta, i) => (
            <a
              key={i}
              href={cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-0 rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02]"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <div className="w-1 flex-shrink-0" style={{ background: cta.color }} />
              <div className="p-6">
                <div className="font-bold mb-2" style={{ color: cta.color }}>{cta.name}</div>
                <span
                  className="inline-block mt-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors duration-200 hover:bg-white/10"
                  style={{ borderColor: cta.color, color: cta.color }}
                >
                  Jetzt prüfen
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Link to main study */}
        <div
          className="rounded-lg p-6 border"
          style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-sm" style={{ color: "#888" }}>
            Diese Substudie ist Teil des{" "}
            <a href="https://www.ki-gastronomie.com/ai-readiness-report-2026" className="font-semibold underline" style={{ color: "#F59E0B" }}>
              AI-Readiness Report 2026
            </a>{" "}
            – 1.000 Restaurants, 10 Städte, 4.000 Scans.
          </p>
        </div>
      </section>

      <TrustSection />
    </>
  );
}
