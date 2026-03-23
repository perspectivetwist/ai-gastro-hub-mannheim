import Link from "next/link";

export default function Impressum() {
  return (
    <section
      className="relative py-24 px-6 max-w-3xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <Link
        href="/"
        className="text-sm mb-8 inline-block hover:underline"
        style={{ color: "#888" }}
      >
        ← Zurück
      </Link>

      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#cccccc" }}>
        <div>
          <h2 className="font-bold mb-2 text-white">Angaben gemäß § 5 TMG</h2>
          <p>
            AI-SHIFT-DRIFT
            <br />
            Berliner Straße 124
            <br />
            13187 Berlin
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2 text-white">Kontakt</h2>
          <p>E-Mail: asd.gastronomie@gmail.com</p>
        </div>

        <div>
          <h2 className="font-bold mb-2 text-white">
            Inhaltlich Verantwortlicher gem. § 55 Abs. 2 RStV
          </h2>
          <p>
            AI-SHIFT-DRIFT
            <br />
            Berliner Straße 124
            <br />
            13187 Berlin
          </p>
        </div>
      </div>

      <div className="mt-12 text-xs" style={{ color: "#444" }}>
        © 2026 ASD - AI Shift Drift
      </div>
    </section>
  );
}
