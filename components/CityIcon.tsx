interface CityIconProps {
  city: string;
}

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 160 80" width={160} height={80} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="160" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

const F = "url(#cg)";
const B = "#000008";

function BerlinIcon() {
  // Brandenburger Tor — klassizistisch, flach, 6 Säulen
  return (
    <Svg>
      {/* Basis-Platte */}
      <rect x="28" y="70" width="104" height="4" rx="1" fill={F} />
      {/* 6 dorische Säulen */}
      {[36, 50, 64, 82, 96, 110].map((x) => (
        <rect key={x} x={x} y="30" width="6" height="40" rx="1" fill={F} />
      ))}
      {/* Architrav — flacher Querbalken */}
      <rect x="30" y="24" width="100" height="8" rx="1" fill={F} />
      {/* Dreiecksgiebel — flach, nicht rund */}
      <polygon points="46,24 80,12 114,24" fill={F} />
      <polygon points="52,24 80,15 108,24" fill={B} />
      <polygon points="52,24 80,15 108,24" fill={F} fillOpacity="0.4" />
      {/* Quadriga oben — eckiger Wagen */}
      <rect x="72" y="5" width="16" height="7" rx="1" fill={F} />
      {/* Pferde stilisiert */}
      <rect x="66" y="6" width="6" height="6" rx="1" fill={F} />
      <rect x="88" y="6" width="6" height="6" rx="1" fill={F} />
      {/* Stange */}
      <rect x="79" y="1" width="2" height="5" fill={F} />
    </Svg>
  );
}

function HamburgIcon() {
  // Elbphilharmonie — kantiger Backsteinsockel + zackiges Glasdach
  return (
    <Svg>
      {/* Backstein-Speicher (eckig) */}
      <rect x="16" y="44" width="128" height="30" rx="1" fill={F} />
      {/* Fensterstreifen im Sockel */}
      {[52, 60, 68].map((y) => (
        <g key={y}>
          {[24, 38, 52, 66, 80, 94, 108, 122].map((x) => (
            <rect key={x} x={x} y={y} width="8" height="3" rx="0.5" fill={B} />
          ))}
        </g>
      ))}
      {/* Zackiges Glasdach — spitze Dreiecke, nicht weich */}
      <polygon points="16,44 28,26 40,38 52,20 64,34 80,12 96,34 108,20 120,38 132,26 144,44" fill={F} />
      {/* Glasfassade-Struktur (horizontale Linien) */}
      <line x1="30" y1="38" x2="130" y2="38" stroke={B} strokeWidth="0.8" opacity="0.3" />
      <line x1="40" y1="32" x2="120" y2="32" stroke={B} strokeWidth="0.8" opacity="0.3" />
      <line x1="54" y1="26" x2="106" y2="26" stroke={B} strokeWidth="0.8" opacity="0.3" />
    </Svg>
  );
}

function MuenchenIcon() {
  // Frauenkirche — zwei Backsteintürme mit spitzen Zwiebelhauben
  return (
    <Svg>
      {/* Kirchenschiff */}
      <rect x="52" y="42" width="56" height="32" rx="1" fill={F} />
      {/* Kirchenfenster (spitzbogig) */}
      {[60, 74, 88].map((x) => (
        <g key={x}>
          <rect x={x} y="52" width="6" height="14" rx="1" fill={B} />
          <polygon points={`${x},52 ${x + 3},46 ${x + 6},52`} fill={B} />
        </g>
      ))}
      {/* Linker Turm */}
      <rect x="32" y="18" width="22" height="56" rx="1" fill={F} />
      <rect x="36" y="34" width="5" height="10" rx="1" fill={B} />
      <rect x="45" y="34" width="5" height="10" rx="1" fill={B} />
      <rect x="36" y="50" width="5" height="10" rx="1" fill={B} />
      <rect x="45" y="50" width="5" height="10" rx="1" fill={B} />
      {/* Zwiebelhaube links — spitz zulaufend, NICHT Kuppel */}
      <path d="M35 18 Q35 10 43 6 Q51 10 51 18" fill={F} />
      <rect x="41" y="2" width="4" height="5" rx="1" fill={F} />
      {/* Rechter Turm */}
      <rect x="106" y="18" width="22" height="56" rx="1" fill={F} />
      <rect x="110" y="34" width="5" height="10" rx="1" fill={B} />
      <rect x="119" y="34" width="5" height="10" rx="1" fill={B} />
      <rect x="110" y="50" width="5" height="10" rx="1" fill={B} />
      <rect x="119" y="50" width="5" height="10" rx="1" fill={B} />
      {/* Zwiebelhaube rechts */}
      <path d="M109 18 Q109 10 117 6 Q125 10 125 18" fill={F} />
      <rect x="115" y="2" width="4" height="5" rx="1" fill={F} />
      {/* Basis */}
      <rect x="28" y="72" width="104" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function KoelnIcon() {
  // Kölner Dom — zwei extrem steile, spitze gotische Türme
  return (
    <Svg>
      {/* Linker Turm — steile Spitze */}
      <polygon points="48,0 32,68 64,68" fill={F} />
      {/* Stufen/Absätze linker Turm */}
      <rect x="38" y="24" width="20" height="2" fill={B} opacity="0.3" />
      <rect x="36" y="40" width="24" height="2" fill={B} opacity="0.3" />
      <rect x="34" y="54" width="28" height="2" fill={B} opacity="0.3" />
      {/* Fenster linker Turm */}
      <rect x="44" y="30" width="8" height="16" rx="1" fill={B} />
      <polygon points="44,30 48,24 52,30" fill={B} />
      {/* Rechter Turm */}
      <polygon points="112,0 96,68 128,68" fill={F} />
      <rect x="102" y="24" width="20" height="2" fill={B} opacity="0.3" />
      <rect x="100" y="40" width="24" height="2" fill={B} opacity="0.3" />
      <rect x="98" y="54" width="28" height="2" fill={B} opacity="0.3" />
      <rect x="108" y="30" width="8" height="16" rx="1" fill={B} />
      <polygon points="108,30 112,24 116,30" fill={B} />
      {/* Mittelschiff — Spitzbogen-Dach */}
      <rect x="60" y="38" width="40" height="36" rx="1" fill={F} />
      <polygon points="60,38 80,22 100,38" fill={F} />
      {/* Rosette */}
      <circle cx="80" cy="42" r="5" fill={B} />
      {/* Portal */}
      <rect x="74" y="58" width="12" height="16" rx="1" fill={B} />
      <polygon points="74,58 80,52 86,58" fill={B} />
      {/* Kreuzspitzen */}
      <line x1="46" y1="0" x2="50" y2="0" stroke={F} strokeWidth="2" />
      <line x1="112" y1="0" x2="112" y2="3" stroke={F} strokeWidth="0" />
      {/* Basis */}
      <rect x="28" y="72" width="104" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function FrankfurtIcon() {
  // Mainhattan — nur eckige Hochhäuser, keine Rundungen
  return (
    <Svg>
      {/* Commerzbank Tower (höchstes) */}
      <rect x="60" y="4" width="16" height="68" rx="0" fill={F} />
      <polygon points="60,4 68,0 76,4" fill={F} />
      {[14, 26, 38, 50, 60].map((y) => (
        <rect key={y} x="63" y={y} width="10" height="5" fill={B} />
      ))}
      {/* Messeturm (Pyramidenspitze) */}
      <rect x="34" y="18" width="14" height="54" fill={F} />
      <polygon points="34,18 41,10 48,18" fill={F} />
      {[28, 40, 52].map((y) => (
        <rect key={y} x="37" y={y} width="8" height="5" fill={B} />
      ))}
      {/* Main Tower */}
      <rect x="82" y="16" width="14" height="56" fill={F} />
      <rect x="82" y="14" width="14" height="4" fill={F} />
      {[24, 36, 48, 58].map((y) => (
        <rect key={y} x="85" y={y} width="8" height="5" fill={B} />
      ))}
      {/* Kleinere Gebäude */}
      <rect x="18" y="36" width="10" height="36" fill={F} />
      {[44, 54].map((y) => (
        <rect key={y} x="20" y={y} width="6" height="4" fill={B} />
      ))}
      <rect x="102" y="30" width="12" height="42" fill={F} />
      {[38, 50, 60].map((y) => (
        <rect key={y} x="104" y={y} width="8" height="4" fill={B} />
      ))}
      <rect x="120" y="40" width="10" height="32" fill={F} />
      <rect x="8" y="48" width="6" height="24" fill={F} />
      <rect x="136" y="44" width="8" height="28" fill={F} />
      {/* Straße */}
      <rect x="4" y="72" width="152" height="3" rx="1" fill={F} />
    </Svg>
  );
}

function StuttgartIcon() {
  // Fernsehturm — dünner Schaft, flache Scheibe, kein Dome
  return (
    <Svg>
      {/* Antenne */}
      <rect x="79" y="0" width="2" height="14" fill={F} />
      {/* Schaft oben */}
      <rect x="77" y="14" width="6" height="16" fill={F} />
      {/* Aussichtskorb — FLACHE SCHEIBE, nicht rund */}
      <rect x="62" y="30" width="36" height="4" rx="1" fill={F} />
      <rect x="64" y="34" width="32" height="8" rx="1" fill={F} />
      <rect x="62" y="42" width="36" height="3" rx="1" fill={F} />
      {/* Fensterband im Korb */}
      {[66, 74, 82, 90].map((x) => (
        <rect key={x} x={x} y="36" width="4" height="4" fill={B} />
      ))}
      {/* Schaft unten */}
      <rect x="77" y="45" width="6" height="16" fill={F} />
      {/* Kegelförmiger Fuß — Dreiecke, nicht rund */}
      <polygon points="68,74 80,58 92,74" fill={F} />
      {/* Stufen-Basis */}
      <rect x="62" y="72" width="36" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function DuesseldorfIcon() {
  // Rheinturm — ähnlich TV-Turm aber dicker Korb
  return (
    <Svg>
      {/* Antenne */}
      <rect x="79" y="0" width="2" height="10" fill={F} />
      {/* Schaft oben */}
      <rect x="76" y="10" width="8" height="12" fill={F} />
      {/* Kanzel — breiter als Stuttgart, aber FLACH */}
      <rect x="58" y="22" width="44" height="5" rx="1" fill={F} />
      <rect x="60" y="27" width="40" height="12" rx="2" fill={F} />
      <rect x="58" y="39" width="44" height="4" rx="1" fill={F} />
      {/* Fenster Kanzel */}
      {[64, 72, 80, 88].map((x) => (
        <rect key={x} x={x} y="30" width="5" height="6" fill={B} />
      ))}
      {/* Restaurant-Etage — zweite, kleinere Scheibe */}
      <rect x="66" y="46" width="28" height="3" rx="1" fill={F} />
      <rect x="68" y="49" width="24" height="6" rx="1" fill={F} />
      <rect x="66" y="55" width="28" height="3" rx="1" fill={F} />
      {/* Schaft unten */}
      <rect x="76" y="58" width="8" height="8" fill={F} />
      {/* Fuß */}
      <polygon points="70,74 80,64 90,74" fill={F} />
      <rect x="64" y="72" width="32" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function LeipzigIcon() {
  // Völkerschlachtdenkmal — brutaler Stufenbau, kantig, KEIN Dome
  return (
    <Svg>
      {/* Hauptkörper — Trapez, massiv */}
      <polygon points="44,74 58,22 102,22 116,74" fill={F} />
      {/* Horizontale Stufen-Absätze */}
      <rect x="54" y="36" width="52" height="2" fill={B} opacity="0.4" />
      <rect x="50" y="48" width="60" height="2" fill={B} opacity="0.4" />
      <rect x="46" y="60" width="68" height="2" fill={B} opacity="0.4" />
      {/* Figuren-Nischen (vertikale Schlitze) */}
      {[62, 70, 78, 86, 94].map((x) => (
        <rect key={x} x={x} y="26" width="2" height="8" fill={B} opacity="0.3" />
      ))}
      {/* Oberer Aufbau — eckig, kastenförmig */}
      <rect x="62" y="14" width="36" height="10" rx="1" fill={F} />
      {/* Plattform/Kranz oben */}
      <rect x="58" y="12" width="44" height="4" rx="1" fill={F} />
      {/* Spitze — kantiger Block, KEIN Dome */}
      <rect x="72" y="4" width="16" height="10" rx="1" fill={F} />
      <polygon points="72,4 80,0 88,4" fill={F} />
      {/* Basis */}
      <rect x="38" y="72" width="84" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function DortmundIcon() {
  // Westfalenstadion — Schüssel mit Flutlichtmasten
  return (
    <Svg>
      {/* Stadionwand — U-Form */}
      <path d="M20 52 L20 72 L140 72 L140 52" stroke={F} strokeWidth="3" fill="none" />
      {/* Tribünen — eckige Stufen statt Kurve */}
      <polygon points="20,52 30,42 50,38 80,36 110,38 130,42 140,52" fill={F} />
      {/* Tribünen-Stufen */}
      <line x1="28" y1="48" x2="132" y2="48" stroke={B} strokeWidth="1" opacity="0.3" />
      <line x1="36" y1="44" x2="124" y2="44" stroke={B} strokeWidth="1" opacity="0.3" />
      {/* Flutlicht links — eckig */}
      <rect x="18" y="12" width="6" height="42" fill={F} />
      <rect x="14" y="8" width="14" height="6" rx="1" fill={F} />
      {/* Flutlicht rechts */}
      <rect x="136" y="12" width="6" height="42" fill={F} />
      <rect x="132" y="8" width="14" height="6" rx="1" fill={F} />
      {/* Seile */}
      <line x1="21" y1="14" x2="48" y2="38" stroke={F} strokeWidth="1" opacity="0.4" />
      <line x1="139" y1="14" x2="112" y2="38" stroke={F} strokeWidth="1" opacity="0.4" />
      {/* Spielfeld angedeutet */}
      <rect x="44" y="58" width="72" height="12" rx="1" fill={F} fillOpacity="0.12" />
      <line x1="80" y1="58" x2="80" y2="70" stroke={F} strokeWidth="0.5" opacity="0.2" />
      {/* Basis */}
      <rect x="16" y="72" width="128" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function MannheimIcon() {
  // Wasserturm — runder Turm mit Spitzdach + eckige Arkadengänge
  return (
    <Svg>
      {/* Turmkörper — zylindrisch */}
      <rect x="66" y="26" width="28" height="42" rx="2" fill={F} />
      {/* Fenster (Rundbogen-Paare) */}
      {[34, 46, 58].map((y) => (
        <g key={y}>
          <rect x="72" y={y} width="5" height="8" rx="1" fill={B} />
          <rect x="83" y={y} width="5" height="8" rx="1" fill={B} />
        </g>
      ))}
      {/* Spitzdach — Kegel, NICHT Kuppel */}
      <polygon points="62,28 80,6 98,28" fill={F} />
      {/* Wetterfahne */}
      <rect x="79" y="2" width="2" height="5" fill={F} />
      {/* Arkaden links — eckige Bögen */}
      <rect x="20" y="46" width="46" height="2" fill={F} />
      {[24, 36, 48].map((x) => (
        <g key={x}>
          <rect x={x} y="48" width="3" height="22" fill={F} />
          <rect x={x} y="48" width="14" height="2" fill={F} />
        </g>
      ))}
      <rect x="60" y="48" width="3" height="22" fill={F} />
      {/* Arkaden rechts */}
      <rect x="94" y="46" width="46" height="2" fill={F} />
      {[98, 110, 122].map((x) => (
        <g key={x}>
          <rect x={x} y="48" width="3" height="22" fill={F} />
          <rect x={x} y="48" width="14" height="2" fill={F} />
        </g>
      ))}
      <rect x="134" y="48" width="3" height="22" fill={F} />
      {/* Basis */}
      <rect x="16" y="72" width="128" height="4" rx="1" fill={F} />
    </Svg>
  );
}

export default function CityIcon({ city }: CityIconProps) {
  switch (city) {
    case 'berlin':
      return <BerlinIcon />;
    case 'hamburg':
      return <HamburgIcon />;
    case 'muenchen':
      return <MuenchenIcon />;
    case 'koeln':
      return <KoelnIcon />;
    case 'frankfurt':
      return <FrankfurtIcon />;
    case 'stuttgart':
      return <StuttgartIcon />;
    case 'duesseldorf':
      return <DuesseldorfIcon />;
    case 'leipzig':
      return <LeipzigIcon />;
    case 'dortmund':
      return <DortmundIcon />;
    case 'mannheim':
      return <MannheimIcon />;
    default:
      return null;
  }
}
