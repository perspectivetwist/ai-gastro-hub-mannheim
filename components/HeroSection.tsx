import CityIcon from "@/components/CityIcon";
export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-4"
      style={{ zIndex: 1 }}
    >
      <div className="relative flex flex-col items-center">
        <div className="flex justify-center mb-6"><CityIcon city="mannheim" /></div>
        {/* Eyebrow */}
        <div
          className="mb-14 text-sm tracking-widest uppercase"
          style={{ color: "#FFFFFF" }}
        >
          AI-Readiness für die Mannheimer Gastronomie
        </div>

        {/* Hook Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
          4 kostenlose KI-Scanner{" "}
          <span className="gradient-accent">f&uuml;r dein Restaurant in Mannheim</span>
        </h1>

        {/* Sub */}
        <p
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
          style={{ color: "#cccccc" }}
        >
          Pr&uuml;fe Sichtbarkeit, Reputation, Agent-Readiness und Sicherheit
          deines Restaurants in der KI-&Auml;ra, kostenlos und in unter 30 Sekunden, speziell für Gastronomiebetriebe in Mannheim.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center">
          <a
            href="#products"
            className="inline-block rounded-full transition-all duration-300 hover:scale-105 p-[1.5px] focus:outline-none"
            style={{ background: "linear-gradient(135deg, #FFB432 0%, #FF3CAC 50%, #FF2D78 100%)" }}
          >
            <span
              className="block px-12 py-4 rounded-full font-semibold text-base tracking-wide text-white"
              style={{ background: "#000008" }}
            >
              Restaurant kostenlos prüfen
            </span>
          </a>
        </div>
      </div>

      {/* Jellyfish Hero Image */}
      <div className="relative flex justify-center pointer-events-none mt-8">
        <img
          src="/asd_jellyfish_hero_2.png"
          alt="AI Gastro Hub"
          className="w-[400px] md:w-[550px]"
          style={{
            maskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
          }}
        />
      </div>
    </section>
  );
}
