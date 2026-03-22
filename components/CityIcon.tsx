interface CityIconProps {
  city: string;
}

const GRAD = (
  <defs>
    <linearGradient id="city-grad" x1="0" y1="0" x2="160" y2="80" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#FFB432" />
      <stop offset="50%" stopColor="#FF3CAC" />
      <stop offset="100%" stopColor="#FF2D78" />
    </linearGradient>
  </defs>
);

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 160 80" width={160} height={80} fill="none" xmlns="http://www.w3.org/2000/svg">
      {GRAD}
      {children}
    </svg>
  );
}

const F = "url(#city-grad)";

function BerlinIcon() {
  return (
    <Svg>
      {/* Brandenburger Tor — 6 Säulen, Architrav, Quadriga */}
      <rect x="30" y="68" width="100" height="4" rx="1" fill={F} />
      {[38, 52, 66, 80, 94, 108].map((x) => (
        <g key={x}>
          <rect x={x} y="28" width="5" height="40" fill={F} />
          <rect x={x - 1} y="26" width="7" height="3" rx="1" fill={F} />
          <rect x={x - 1} y="66" width="7" height="3" rx="1" fill={F} />
        </g>
      ))}
      <rect x="32" y="22" width="96" height="6" rx="1" fill={F} />
      <polygon points="48,22 80,10 112,22" fill={F} />
      <rect x="70" y="4" width="20" height="7" rx="2" fill={F} />
      <polygon points="80,0 76,5 84,5" fill={F} />
      <rect x="66" y="5" width="4" height="5" rx="1" fill={F} />
      <rect x="90" y="5" width="4" height="5" rx="1" fill={F} />
    </Svg>
  );
}

function HamburgIcon() {
  return (
    <Svg>
      {/* Elbphilharmonie — Backsteinsockel + Glaswelle */}
      <rect x="20" y="46" width="120" height="28" rx="2" fill={F} />
      {[54, 62, 70].map((y) => (
        <g key={y}>
          {[28, 40, 52, 64, 76, 88, 100, 112, 124].map((x) => (
            <rect key={x} x={x} y={y} width="5" height="3" rx="0.5" fill="#000008" />
          ))}
        </g>
      ))}
      <path d="M20 46 Q32 24 48 34 Q58 20 72 30 Q80 14 92 26 Q102 16 114 28 Q126 20 140 46" fill={F} />
      <path d="M30 42 Q50 26 80 22 Q110 26 130 42" stroke="#000008" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M36 38 Q55 24 80 20 Q105 24 124 38" stroke="#000008" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M76 16 L80 8 L84 16" fill={F} />
    </Svg>
  );
}

function MuenchenIcon() {
  return (
    <Svg>
      {/* Frauenkirche — Zwei Türme mit Zwiebelhauben */}
      <rect x="50" y="40" width="60" height="34" rx="1" fill={F} />
      {[58, 70, 82, 94].map((x) => (
        <g key={x}>
          <rect x={x} y="48" width="5" height="10" rx="1" fill="#000008" />
          <path d={`M${x} 48 Q${x + 2.5} 44 ${x + 5} 48`} fill="#000008" />
        </g>
      ))}
      <rect x="38" y="16" width="20" height="58" rx="1" fill={F} />
      <rect x="42" y="30" width="4" height="8" rx="1" fill="#000008" />
      <rect x="50" y="30" width="4" height="8" rx="1" fill="#000008" />
      <rect x="42" y="44" width="4" height="8" rx="1" fill="#000008" />
      <rect x="50" y="44" width="4" height="8" rx="1" fill="#000008" />
      <ellipse cx="48" cy="16" rx="12" ry="9" fill={F} />
      <ellipse cx="48" cy="10" rx="6" ry="5" fill={F} />
      <circle cx="48" cy="4" r="2.5" fill={F} />
      <rect x="102" y="16" width="20" height="58" rx="1" fill={F} />
      <rect x="106" y="30" width="4" height="8" rx="1" fill="#000008" />
      <rect x="114" y="30" width="4" height="8" rx="1" fill="#000008" />
      <rect x="106" y="44" width="4" height="8" rx="1" fill="#000008" />
      <rect x="114" y="44" width="4" height="8" rx="1" fill="#000008" />
      <ellipse cx="112" cy="16" rx="12" ry="9" fill={F} />
      <ellipse cx="112" cy="10" rx="6" ry="5" fill={F} />
      <circle cx="112" cy="4" r="2.5" fill={F} />
      <rect x="34" y="72" width="92" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function KoelnIcon() {
  return (
    <Svg>
      {/* Kölner Dom — Zwei gotische Spitztürme */}
      <polygon points="50,2 36,62 64,62" fill={F} />
      <polygon points="50,2 46,14 54,14" fill={F} />
      <polygon points="40,30 38,42 42,42" fill={F} />
      <polygon points="60,30 58,42 62,42" fill={F} />
      <rect x="46" y="36" width="8" height="14" rx="1" fill="#000008" />
      <path d="M46 36 Q50 30 54 36" fill="#000008" />
      <rect x="46" y="54" width="8" height="6" rx="1" fill="#000008" />
      <polygon points="110,2 96,62 124,62" fill={F} />
      <polygon points="110,2 106,14 114,14" fill={F} />
      <polygon points="100,30 98,42 102,42" fill={F} />
      <polygon points="120,30 118,42 122,42" fill={F} />
      <rect x="106" y="36" width="8" height="14" rx="1" fill="#000008" />
      <path d="M106 36 Q110 30 114 36" fill="#000008" />
      <rect x="106" y="54" width="8" height="6" rx="1" fill="#000008" />
      <rect x="60" y="36" width="40" height="38" rx="1" fill={F} />
      <path d="M60 36 Q80 22 100 36" fill={F} />
      <circle cx="80" cy="40" r="6" fill="#000008" />
      <circle cx="80" cy="40" r="4" stroke={F} strokeWidth="1" fill="#000008" />
      <rect x="72" y="56" width="16" height="18" rx="1" fill="#000008" />
      <path d="M72 56 Q80 48 88 56" fill="#000008" />
      <line x1="50" y1="0" x2="50" y2="4" stroke={F} strokeWidth="2" />
      <line x1="110" y1="0" x2="110" y2="4" stroke={F} strokeWidth="2" />
      <line x1="47" y1="3" x2="53" y2="3" stroke={F} strokeWidth="1.5" />
      <line x1="107" y1="3" x2="113" y2="3" stroke={F} strokeWidth="1.5" />
      <rect x="32" y="72" width="96" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function FrankfurtIcon() {
  return (
    <Svg>
      {/* Mainhattan Skyline */}
      <rect x="62" y="6" width="14" height="66" rx="1" fill={F} />
      <polygon points="62,6 69,0 76,6" fill={F} />
      {[16, 26, 36, 46, 56].map((y) => (
        <rect key={y} x="65" y={y} width="8" height="4" rx="0.5" fill="#000008" />
      ))}
      <rect x="38" y="16" width="12" height="56" rx="1" fill={F} />
      <polygon points="38,16 44,8 50,16" fill={F} />
      {[24, 34, 44, 54].map((y) => (
        <rect key={y} x="40" y={y} width="8" height="4" rx="0.5" fill="#000008" />
      ))}
      <rect x="82" y="20" width="12" height="52" rx="1" fill={F} />
      <rect x="82" y="18" width="12" height="4" rx="2" fill={F} />
      {[28, 38, 48, 58].map((y) => (
        <rect key={y} x="84" y={y} width="8" height="4" rx="0.5" fill="#000008" />
      ))}
      <rect x="22" y="32" width="10" height="40" rx="1" fill={F} />
      {[40, 50, 58].map((y) => (
        <rect key={y} x="24" y={y} width="6" height="3" rx="0.5" fill="#000008" />
      ))}
      <rect x="100" y="28" width="12" height="44" rx="1" fill={F} />
      {[36, 46, 56].map((y) => (
        <rect key={y} x="102" y={y} width="8" height="4" rx="0.5" fill="#000008" />
      ))}
      <rect x="118" y="38" width="10" height="34" rx="1" fill={F} />
      {[46, 56].map((y) => (
        <rect key={y} x="120" y={y} width="6" height="3" rx="0.5" fill="#000008" />
      ))}
      <rect x="10" y="44" width="8" height="28" rx="1" fill={F} />
      <rect x="134" y="42" width="8" height="30" rx="1" fill={F} />
      <rect x="6" y="72" width="148" height="3" rx="1" fill={F} />
    </Svg>
  );
}

function StuttgartIcon() {
  return (
    <Svg>
      {/* Fernsehturm Stuttgart */}
      <line x1="80" y1="0" x2="80" y2="10" stroke={F} strokeWidth="2" />
      <rect x="77" y="10" width="6" height="18" rx="1" fill={F} />
      <ellipse cx="80" cy="30" rx="16" ry="6" fill={F} />
      <rect x="66" y="28" width="28" height="10" rx="3" fill={F} />
      <ellipse cx="80" cy="38" rx="14" ry="4" fill={F} />
      {[68, 74, 80, 86].map((x) => (
        <rect key={x} x={x} y="31" width="4" height="4" rx="0.5" fill="#000008" />
      ))}
      <rect x="77" y="38" width="6" height="22" rx="1" fill={F} />
      <polygon points="66,72 80,56 94,72" fill={F} />
      <rect x="60" y="70" width="40" height="5" rx="1" fill={F} />
      <rect x="56" y="74" width="48" height="3" rx="1" fill={F} />
    </Svg>
  );
}

function DuesseldorfIcon() {
  return (
    <Svg>
      {/* Rheinturm Düsseldorf */}
      <line x1="80" y1="0" x2="80" y2="8" stroke={F} strokeWidth="2" />
      <rect x="76" y="8" width="8" height="14" rx="1" fill={F} />
      <ellipse cx="80" cy="24" rx="18" ry="7" fill={F} />
      <rect x="64" y="22" width="32" height="12" rx="4" fill={F} />
      <ellipse cx="80" cy="34" rx="16" ry="5" fill={F} />
      {[66, 73, 80, 87].map((x) => (
        <rect key={x} x={x} y="26" width="5" height="4" rx="0.5" fill="#000008" />
      ))}
      <ellipse cx="80" cy="42" rx="12" ry="4" fill={F} />
      <rect x="70" y="40" width="20" height="6" rx="2" fill={F} />
      {[72, 78, 84].map((x) => (
        <rect key={x} x={x} y="41" width="4" height="3" rx="0.5" fill="#000008" />
      ))}
      <rect x="76" y="46" width="8" height="18" rx="1" fill={F} />
      <polygon points="68,72 80,60 92,72" fill={F} />
      <rect x="62" y="70" width="36" height="4" rx="1" fill={F} />
      <rect x="58" y="74" width="44" height="3" rx="1" fill={F} />
    </Svg>
  );
}

function LeipzigIcon() {
  return (
    <Svg>
      {/* Völkerschlachtdenkmal — Massiver Stufenbau */}
      <polygon points="40,72 56,20 104,20 120,72" fill={F} />
      <rect x="50" y="36" width="60" height="3" rx="0.5" fill="#000008" opacity="0.5" />
      <rect x="46" y="48" width="68" height="3" rx="0.5" fill="#000008" opacity="0.5" />
      <rect x="42" y="60" width="76" height="3" rx="0.5" fill="#000008" opacity="0.5" />
      <rect x="60" y="16" width="40" height="6" rx="1" fill={F} />
      <ellipse cx="80" cy="16" rx="22" ry="8" fill={F} />
      <rect x="68" y="6" width="24" height="12" rx="2" fill={F} />
      <rect x="76" y="2" width="8" height="6" rx="1" fill={F} />
      <circle cx="80" cy="2" r="2" fill={F} />
      {[54, 62, 70, 86, 94, 102].map((x) => (
        <rect key={x} x={x} y="24" width="3" height="10" rx="0.5" fill="#000008" opacity="0.3" />
      ))}
      <rect x="36" y="72" width="88" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function DortmundIcon() {
  return (
    <Svg>
      {/* Signal Iduna Park / Westfalenstadion */}
      <path d="M16 56 L16 72 L144 72 L144 56" stroke={F} strokeWidth="3" fill="none" />
      <path d="M16 56 Q40 36 80 40 Q120 36 144 56" fill={F} />
      <path d="M28 54 Q50 42 80 44 Q110 42 132 54" stroke="#000008" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="18" y="16" width="5" height="42" rx="1" fill={F} />
      <rect x="14" y="12" width="13" height="6" rx="1" fill={F} />
      <polygon points="20.5,8 16,12 25,12" fill={F} />
      <rect x="137" y="16" width="5" height="42" rx="1" fill={F} />
      <rect x="133" y="12" width="13" height="6" rx="1" fill={F} />
      <polygon points="139.5,8 135,12 144,12" fill={F} />
      <rect x="40" y="60" width="80" height="10" rx="1" fill={F} fillOpacity="0.15" />
      <line x1="80" y1="60" x2="80" y2="70" stroke={F} strokeWidth="0.5" opacity="0.3" />
      <circle cx="80" cy="65" r="4" stroke={F} strokeWidth="0.5" fill="none" opacity="0.3" />
      <line x1="20" y1="14" x2="44" y2="38" stroke={F} strokeWidth="1" opacity="0.5" />
      <line x1="140" y1="14" x2="116" y2="38" stroke={F} strokeWidth="1" opacity="0.5" />
      <rect x="12" y="72" width="136" height="4" rx="1" fill={F} />
    </Svg>
  );
}

function MannheimIcon() {
  return (
    <Svg>
      {/* Wasserturm Mannheim */}
      <rect x="66" y="28" width="28" height="40" rx="3" fill={F} />
      {[36, 48, 58].map((y) => (
        <g key={y}>
          <rect x="72" y={y} width="6" height="6" rx="1" fill="#000008" />
          <rect x="82" y={y} width="6" height="6" rx="1" fill="#000008" />
        </g>
      ))}
      <ellipse cx="80" cy="28" rx="16" ry="12" fill={F} />
      <rect x="74" y="14" width="12" height="6" rx="2" fill={F} />
      <ellipse cx="80" cy="14" rx="7" ry="4" fill={F} />
      <rect x="78" y="6" width="4" height="5" rx="1" fill={F} />
      <circle cx="80" cy="4" r="2" fill={F} />
      <line x1="80" y1="0" x2="80" y2="3" stroke={F} strokeWidth="1.5" />
      <path d="M22 72 L22 54 Q22 46 34 46 L66 46 L66 72" fill="none" stroke={F} strokeWidth="2.5" />
      {[30, 40, 50].map((x) => (
        <path key={x} d={`M${x} 72 L${x} 56 Q${x} 50 ${x + 5} 50 Q${x + 10} 50 ${x + 10} 56 L${x + 10} 72`} fill="none" stroke={F} strokeWidth="1.5" />
      ))}
      <path d="M94 46 L126 46 Q138 46 138 54 L138 72" fill="none" stroke={F} strokeWidth="2.5" />
      {[100, 110, 120].map((x) => (
        <path key={x} d={`M${x} 72 L${x} 56 Q${x} 50 ${x + 5} 50 Q${x + 10} 50 ${x + 10} 56 L${x + 10} 72`} fill="none" stroke={F} strokeWidth="1.5" />
      ))}
      <rect x="18" y="72" width="124" height="4" rx="1" fill={F} />
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
