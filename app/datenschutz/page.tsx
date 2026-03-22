import Link from "next/link";

export default function Datenschutz() {
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

      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#cccccc" }}>
        <div>
          <h2 className="font-bold mb-2 text-white">Verantwortlicher</h2>
          <p>
            Pachyon UG
            <br />
            Berliner Straße 124, 13187 Berlin
            <br />
            E-Mail: maxgeissinger@gmail.com
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2 text-white">Datenverarbeitung</h2>
          <p>
            ASD - AI Shift Drift speichert keine personenbezogenen Daten auf
            unseren Servern. Die Landing Page ist eine reine
            Informationsseite ohne Formulare, Logins oder Datenerfassung.
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2 text-white">Cookies</h2>
          <p>
            Wir verwenden keine Tracking-Cookies. Es werden ausschließlich
            technisch notwendige Technologien eingesetzt.
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2 text-white">Hosting</h2>
          <p>
            Diese Seite wird über Vercel gehostet. Vercel kann technische
            Zugriffsdaten (IP-Adresse, Zeitstempel) in Server-Logs erfassen.
            Details:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#00FFE0" }}
            >
              Vercel Privacy Policy
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2 text-white">Externe Links</h2>
          <p>
            Diese Seite verlinkt auf externe Scanner-Tools (AEO, GEO,
            Slipstream, Quantum). Diese Tools haben eigene
            Datenschutzerklärungen.
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-2 text-white">Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung. Da wir keine personenbezogenen
            Daten serverseitig speichern, können lokal gespeicherte Daten
            über Ihre Browser-Einstellungen gelöscht werden. Fragen richten
            Sie an maxgeissinger@gmail.com.
          </p>
        </div>
      </div>

      <div className="mt-12 text-xs" style={{ color: "#444" }}>
        © 2026 ASD - AI Shift Drift
      </div>
    </section>
  );
}
