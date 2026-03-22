export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden py-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        Vier Gastro-Scanner,{" "}
        <span className="gradient-accent">drei Dimensionen.</span>
      </h2>

      <div className="flex flex-col gap-16">
        {/* WAKE */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-base tracking-widest uppercase font-bold gradient-wake">
              Wake
            </div>
            <div style={{ color: "#444" }}>→</div>
            <div style={{ color: "#666" }}>Sichtbarkeit</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AEO Scanner */}
            <a
              href="https://aeo-gastro.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-0 rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02]"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <div
                className="w-1 flex-shrink-0"
                style={{ background: "#00AAFF" }}
              />
              <div className="p-6">
                <div
                  style={{ color: "#00AAFF" }}
                  className="font-bold mb-2"
                >
                  AEO Scanner
                </div>
                <div
                  style={{ color: "#cccccc" }}
                  className="text-sm mb-4"
                >
                  Kann ChatGPT deine Restaurant-Website lesen? 8 Kriterien. Score
                  in Sekunden.
                </div>
                <span
                  className="inline-block mt-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors duration-200 hover:bg-white/10"
                  style={{ borderColor: "#00AAFF", color: "#00AAFF" }}
                >
                  Jetzt prüfen
                </span>
              </div>
            </a>
            {/* GEO Scanner */}
            <a
              href="https://geo-gastro.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-0 rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02]"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <div
                className="w-1 flex-shrink-0"
                style={{ background: "#00FF88" }}
              />
              <div className="p-6">
                <div
                  style={{ color: "#00FF88" }}
                  className="font-bold mb-2"
                >
                  GEO Scanner
                </div>
                <div
                  style={{ color: "#cccccc" }}
                  className="text-sm mb-4"
                >
                  Kennt ChatGPT den Ruf deines Restaurants? Bewertungen,
                  Erwähnungen, Profil.
                </div>
                <span
                  className="inline-block mt-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors duration-200 hover:bg-white/10"
                  style={{ borderColor: "#00FF88", color: "#00FF88" }}
                >
                  Jetzt prüfen
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* SLIPSTREAM */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              style={{ color: "#FFE600" }}
              className="text-base tracking-widest uppercase font-bold"
            >
              Slipstream
            </div>
            <div style={{ color: "#444" }}>→</div>
            <div style={{ color: "#666" }}>Nutzbarkeit</div>
          </div>
          <a
            href="https://agentready-gastro.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-0 rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02] max-w-[calc(50%-0.5rem)]"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <div
              className="w-1 flex-shrink-0"
              style={{ background: "#FFE600" }}
            />
            <div className="p-6">
              <div
                style={{ color: "#FFE600" }}
                className="font-bold mb-2"
              >
                Agent Ready Scanner
              </div>
              <div
                style={{ color: "#cccccc" }}
                className="text-sm mb-4"
              >
                Kann ein KI-Agent bei deinem Restaurant einen Tisch reservieren?
              </div>
              <span
                className="inline-block mt-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors duration-200 hover:bg-white/10"
                style={{ borderColor: "#FFE600", color: "#FFE600" }}
              >
                Jetzt prüfen
              </span>
            </div>
          </a>
        </div>

        {/* QUANTUM */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              style={{ color: "#FF1744" }}
              className="text-base tracking-widest uppercase font-bold"
            >
              Quantum
            </div>
            <div style={{ color: "#444" }}>→</div>
            <div style={{ color: "#666" }}>Sicherheit</div>
          </div>
          <a
            href="https://aisecurity-gastro.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-0 rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02] max-w-[calc(50%-0.5rem)]"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <div
              className="w-1 flex-shrink-0"
              style={{ background: "#FF1744" }}
            />
            <div className="p-6">
              <div
                style={{ color: "#FF1744" }}
                className="font-bold mb-2"
              >
                Security Scanner
              </div>
              <div
                style={{ color: "#cccccc" }}
                className="text-sm mb-4"
              >
                Ist dein Restaurant vor KI-Angriffen geschützt?
                Fake-Bewertungen, Phishing, Datenmissbrauch.
              </div>
              <span
                className="inline-block mt-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors duration-200 hover:bg-white/10"
                style={{ borderColor: "#FF1744", color: "#FF1744" }}
              >
                Jetzt prüfen
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Ramen Background Image */}
      <img
        src="/images/jellyfish-hero.png"
        alt=""
        className="hidden md:block absolute top-[72%] -translate-y-1/2 right-0 translate-x-[10%] w-[400px] rounded-3xl"
        style={{
          opacity: 0.7,
          zIndex: 0,
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
    </section>
  );
}
