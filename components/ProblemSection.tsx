export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative pt-16 pb-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        KI verändert die Gastro-Branche.
        <br />
        <span className="gradient-accent">Ist dein Restaurant bereit?</span>
      </h2>

      <div className="space-y-6 mb-16 max-w-3xl">
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            Heute suchen Gäste dein Restaurant noch bei Google.
          </p>
        </div>
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            <span className="font-semibold" style={{ color: "#ffffff" }}>Morgen fragen sie ChatGPT:</span>
            <br />
            &quot;Reservier mir einen Tisch, italienisch, Innenstadt, Freitagabend.&quot; Und KI entscheidet, wer gebucht wird.
          </p>
        </div>
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            <span className="font-semibold" style={{ color: "#ffffff" }}>Sichtbar sein reicht nicht.</span>
            <br />
            Dein Restaurant muss für KI auch nutzbar und sicher sein. Sonst fällt es durch das Raster.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            stat: "70%",
            text: "der Restaurants sind für KI-Systeme unsichtbar. ChatGPT, Gemini und Perplexity kennen sie nicht.",
          },
          {
            stat: "3x",
            text: "mehr Nutzer lassen KI-Agenten Tische buchen als vor 12 Monaten. Ohne Agent-Readiness kein Zugang.",
          },
          {
            stat: "+721%",
            text: "Wachstum der KI-Plattformen in 12 Monaten. Wer jetzt nicht ready ist, verliert den Anschluss.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-6"
            style={{
              borderColor: "#FF006E33",
              background: "rgba(255,0,110,0.04)",
            }}
          >
            <div className="text-4xl font-bold mb-3 gradient-accent">
              {item.stat}
            </div>
            <div
              className="text-sm leading-relaxed"
              style={{ color: "#cccccc" }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
