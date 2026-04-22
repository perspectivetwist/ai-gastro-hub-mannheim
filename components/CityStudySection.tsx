interface CityStudyData {
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

export default function CityStudySection({ data }: { data: CityStudyData }) {
  const rankPosition = Object.entries(data.city_aeo_ranking)
    .sort(([, a], [, b]) => b - a)
    .findIndex(([city]) => city === data.city) + 1;

  return (
    <>
      {/* STUDIEN-HEADER */}
      <section className="relative py-16 px-6 max-w-5xl mx-auto text-center" style={{ zIndex: 1 }}>
        <div
          className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border"
          style={{ borderColor: "#F59E0B44", color: "#F59E0B", background: "rgba(245,158,11,0.06)" }}
        >
          KI-Readiness Studie 2026 &middot; {data.total_restaurants} Restaurants &middot; {data.stadtteil_ranking.length} Stadtteile
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          So steht <span className="gradient-accent">{data.city}</span> wirklich da
        </h2>
        <p className="text-sm" style={{ color: "#666" }}>
          AI Shift Drift &middot; Substudie aus dem AI-Readiness Report 2026
        </p>
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
            {data.city} belegt Platz <span className="font-bold text-white">{rankPosition}</span> von 10 St&auml;dten im AEO-Ranking.{" "}
            {data.above_national
              ? `Mit einem AEO-Score von ${data.aeo_avg} liegt ${data.city} \u00FCber dem nationalen Durchschnitt (${data.national.aeo_avg}).`
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
            {data.sichtbarkeitsdefizit_pct}% der {data.city}er Restaurants sind f&uuml;r KI-Antwortmaschinen unzureichend aufgestellt.
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
                  <td className="py-3 pr-4" style={{ color: "#888" }}>{row.min}&ndash;{row.max}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "#ffffff" }}>{row.pct.toFixed(1).replace(".", ",")}%</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <td className="py-3 pr-4 font-semibold" style={{ color: "#F59E0B" }}>&Oslash; Score {data.city}</td>
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
                  <td className="py-3 pr-4" style={{ color: "#888" }}>{row.min}&ndash;{row.max}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: "#cccccc" }}>{row.count}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "#ffffff" }}>{row.pct.toFixed(1).replace(".", ",")}%</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <td className="py-3 pr-4 font-semibold" style={{ color: "#F59E0B" }}>&Oslash; Score {data.city}</td>
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
                {problem.text} &ndash; bei <span className="font-semibold text-white">{problem.count} Restaurants ({problem.pct}%)</span>
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
          Welche Stadtteile in {data.city} sind am besten f&uuml;r die KI-&Auml;ra aufgestellt?
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>#</th>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>Stadtteil</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>&Oslash; AEO</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>Restaurants</th>
              </tr>
            </thead>
            <tbody>
              {data.stadtteil_ranking.map((row, i) => {
                const emoji = row.avg_aeo >= 61 ? "\uD83D\uDFE2" : row.avg_aeo >= 31 ? "\uD83D\uDFE1" : "\uD83D\uDD34";
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
          <span className="gradient-accent">K&uuml;chen-Typen</span> und KI-Sichtbarkeit
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-semibold" style={{ color: "#888" }}>K&uuml;che</th>
                <th className="text-right py-3 pr-4 font-semibold" style={{ color: "#888" }}>Anzahl</th>
                <th className="text-right py-3 font-semibold" style={{ color: "#888" }}>&Oslash; AEO</th>
              </tr>
            </thead>
            <tbody>
              {data.kuechen_breakdown.map((row, i) => {
                const emoji = row.avg_aeo >= 61 ? "\uD83D\uDFE2" : row.avg_aeo >= 31 ? "\uD83D\uDFE1" : "\uD83D\uDD34";
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
                <th className="w-1/5 text-right py-3 pr-4 font-semibold" style={{ color: "#6366f1" }}>AEO &Oslash;</th>
                <th className="w-1/5 text-right py-3 pr-4 font-semibold" style={{ color: "#A8E6A3" }}>GEO &Oslash;</th>
                <th className="w-1/5 text-right py-3 pr-4 font-semibold" style={{ color: "#FFE600" }}>AgentReady &Oslash;</th>
                <th className="w-1/5 text-right py-3 font-semibold" style={{ color: "#FF1744" }}>Security &Oslash;</th>
              </tr>
            </thead>
            <tbody>
              {[
                { city: "Mannheim", aeo: 46.6, geo: 42.3, agent: 63.3, sec: 84.0 },
                { city: "Hamburg", aeo: 46.3, geo: 41.8, agent: 58.2, sec: 82.0 },
                { city: "D\u00FCsseldorf", aeo: 44.6, geo: 40.9, agent: 64.1, sec: 83.1 },
                { city: "M\u00FCnchen", aeo: 44.1, geo: 40.8, agent: 59.5, sec: 82.6 },
                { city: "Leipzig", aeo: 43.8, geo: 48.3, agent: 63.7, sec: 85.6 },
                { city: "K\u00F6ln", aeo: 43.5, geo: 40.3, agent: 59.4, sec: 82.7 },
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
                      {isCurrentCity ? "\u2192 " : ""}{row.city}
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

        <div
          className="rounded-lg p-6 border"
          style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-sm" style={{ color: "#888" }}>
            Diese Substudie ist Teil des{" "}
            <a href="https://www.ki-gastronomie.com/ai-readiness-report-2026" className="font-semibold underline" style={{ color: "#F59E0B" }}>
              AI-Readiness Report 2026
            </a>{" "}
            &ndash; 1.000 Restaurants, 10 St&auml;dte, 4.000 Scans.
          </p>
        </div>
      </section>
    </>
  );
}
