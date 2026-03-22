import { ChefHat, UtensilsCrossed, CookingPot } from "lucide-react";

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative py-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Deshalb gibt es <span className="gradient-accent">AI-Shift-Drift</span>{" "}
        für Restaurants.
      </h2>

      <p className="text-xl mb-10 max-w-3xl leading-relaxed" style={{ color: "#cccccc" }}>
        Nur <span className="font-semibold text-white">sichtbar</span> zu sein reicht nicht.
        Dein Restaurant muss für KI-Systeme auch <span className="font-semibold text-white">buchbar</span> und <span className="font-semibold text-white">sicher</span> sein.
      </p>

      {/* House Image + Labels */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-[800px] mx-auto -mt-4">
        <img
          src="/images/asd-house.png"
          alt="AI Shift Drift Dimensionen"
          className="max-w-[500px] w-full rounded-2xl"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 50%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 80%)",
          }}
        />
        <div className="hidden md:flex flex-col justify-between" style={{ height: "500px" }}>
          <div className="flex items-center gap-3">
            <ChefHat className="w-7 h-7" style={{ color: "#00AAFF" }} />
            <span className="font-bold text-2xl gradient-wake">
              Sichtbarkeit
            </span>
          </div>
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="w-7 h-7" style={{ color: "#FFE600" }} />
            <span style={{ color: "#FFE600" }} className="font-bold text-2xl">
              Nutzbarkeit
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CookingPot className="w-7 h-7" style={{ color: "#FF0044" }} />
            <span style={{ color: "#FF0044" }} className="font-bold text-2xl">
              Sicherheit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
