import { EyeOff, Ban, ShieldAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const problems: { icon: LucideIcon; title: string; text: string; color: string; gradient?: string }[] = [
  {
    icon: EyeOff,
    title: "Nicht sichtbar für KI.",
    text: "\"Bestes italienisches Restaurant in München\": ChatGPT und Gemini antworten sofort. Wenn dein Restaurant nicht in der Antwort ist, existierst du für diese Gäste nicht.",
    color: "#00FFE0",
    gradient: "linear-gradient(180deg, #00AAFF, #00FF88)",
  },
  {
    icon: Ban,
    title: "Nicht nutzbar für KI-Agenten.",
    text: "Nutzer sagen: \"Reservier mir einen Tisch für Freitag, italienisch, Innenstadt.\" Der KI-Agent bucht. Aber nur bei Restaurants, die digital buchbar und agent-ready sind.",
    color: "#FFE600",
  },
  {
    icon: ShieldAlert,
    title: "Nicht sicher vor KI-Angriffen.",
    text: "KI kann massenhaft gefälschte Bewertungen erzeugen. Dein guter Ruf steht auf dem Spiel. Die meisten Gastronomen merken es zu spät.",
    color: "#FF1744",
  },
];

export default function MoreProblemsSection() {
  return (
    <section
      id="more-problems"
      className="relative py-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      {/* SVG Gradient Definition für Card 1 Icon */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="wake-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00AAFF" />
            <stop offset="100%" stopColor="#00FF88" />
          </linearGradient>
        </defs>
      </svg>

      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Drei Probleme, <span className="gradient-accent">eine Lösung.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={i}
              className="flex gap-0 rounded-lg overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="w-1 flex-shrink-0 rounded-full"
                style={{ background: p.gradient || p.color }}
              />
              <div className="p-6">
                <Icon
                  className="w-8 h-8 mb-4"
                  style={p.gradient
                    ? { stroke: "url(#wake-gradient)" }
                    : { color: p.color }
                  }
                />
                <h3 className="text-lg font-bold mb-3 gradient-accent">
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#cccccc" }}
                >
                  {p.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
