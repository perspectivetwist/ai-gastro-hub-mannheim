interface CityIconProps {
  city: string;
}

function BerlinIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Brandenburger Tor */}
      <rect x="10" y="18" width="4" height="40" fill="url(#city-grad)" />
      <rect x="20" y="18" width="4" height="40" fill="url(#city-grad)" />
      <rect x="30" y="18" width="4" height="40" fill="url(#city-grad)" />
      <rect x="46" y="18" width="4" height="40" fill="url(#city-grad)" />
      <rect x="56" y="18" width="4" height="40" fill="url(#city-grad)" />
      <rect x="66" y="18" width="4" height="40" fill="url(#city-grad)" />
      <rect x="8" y="14" width="64" height="6" rx="1" fill="url(#city-grad)" />
      <rect x="8" y="56" width="64" height="4" rx="1" fill="url(#city-grad)" />
      {/* Quadriga */}
      <rect x="32" y="6" width="16" height="10" rx="2" fill="url(#city-grad)" />
      <polygon points="40,0 36,6 44,6" fill="url(#city-grad)" />
    </svg>
  );
}

function HamburgIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Elbphilharmonie */}
      <rect x="5" y="34" width="70" height="26" rx="2" fill="url(#city-grad)" />
      <path d="M5 34 Q12 20 20 28 Q28 16 40 24 Q52 14 60 26 Q68 18 75 34" stroke="url(#city-grad)" strokeWidth="3" fill="url(#city-grad)" />
      <rect x="10" y="40" width="4" height="6" rx="1" fill="#000008" />
      <rect x="20" y="40" width="4" height="6" rx="1" fill="#000008" />
      <rect x="30" y="40" width="4" height="6" rx="1" fill="#000008" />
      <rect x="46" y="40" width="4" height="6" rx="1" fill="#000008" />
      <rect x="56" y="40" width="4" height="6" rx="1" fill="#000008" />
      <rect x="66" y="40" width="4" height="6" rx="1" fill="#000008" />
    </svg>
  );
}

function MuenchenIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Frauenkirche Zwillingstürme */}
      <rect x="18" y="14" width="16" height="46" rx="1" fill="url(#city-grad)" />
      <rect x="46" y="14" width="16" height="46" rx="1" fill="url(#city-grad)" />
      {/* Kuppeln */}
      <ellipse cx="26" cy="14" rx="9" ry="8" fill="url(#city-grad)" />
      <ellipse cx="54" cy="14" rx="9" ry="8" fill="url(#city-grad)" />
      <circle cx="26" cy="6" r="2" fill="url(#city-grad)" />
      <circle cx="54" cy="6" r="2" fill="url(#city-grad)" />
      {/* Verbindung */}
      <rect x="34" y="36" width="12" height="24" rx="1" fill="url(#city-grad)" />
    </svg>
  );
}

function KoelnIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Kölner Dom Doppeltürme */}
      <polygon points="24,2 18,50 30,50" fill="url(#city-grad)" />
      <polygon points="56,2 50,50 62,50" fill="url(#city-grad)" />
      {/* Mittelschiff */}
      <rect x="28" y="30" width="24" height="30" rx="1" fill="url(#city-grad)" />
      <path d="M28 30 Q40 18 52 30" fill="url(#city-grad)" />
      {/* Basis */}
      <rect x="14" y="56" width="52" height="4" rx="1" fill="url(#city-grad)" />
      {/* Kreuz-Spitzen */}
      <line x1="24" y1="0" x2="24" y2="6" stroke="url(#city-grad)" strokeWidth="2" />
      <line x1="56" y1="0" x2="56" y2="6" stroke="url(#city-grad)" strokeWidth="2" />
    </svg>
  );
}

function FrankfurtIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Mainhattan Skyline */}
      <rect x="4" y="28" width="8" height="32" rx="1" fill="url(#city-grad)" />
      <rect x="14" y="16" width="8" height="44" rx="1" fill="url(#city-grad)" />
      <rect x="24" y="8" width="10" height="52" rx="1" fill="url(#city-grad)" />
      <rect x="36" y="4" width="8" height="56" rx="1" fill="url(#city-grad)" />
      <rect x="46" y="12" width="10" height="48" rx="1" fill="url(#city-grad)" />
      <rect x="58" y="20" width="8" height="40" rx="1" fill="url(#city-grad)" />
      <rect x="68" y="32" width="8" height="28" rx="1" fill="url(#city-grad)" />
      <rect x="2" y="58" width="76" height="3" rx="1" fill="url(#city-grad)" />
    </svg>
  );
}

function StuttgartIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Fernsehturm Stuttgart */}
      <rect x="38" y="6" width="4" height="48" rx="1" fill="url(#city-grad)" />
      {/* Kanzel */}
      <ellipse cx="40" cy="16" rx="10" ry="4" fill="url(#city-grad)" />
      <rect x="32" y="14" width="16" height="8" rx="2" fill="url(#city-grad)" />
      {/* Korb oben */}
      <rect x="36" y="4" width="8" height="4" rx="2" fill="url(#city-grad)" />
      <line x1="40" y1="0" x2="40" y2="4" stroke="url(#city-grad)" strokeWidth="2" />
      {/* Fuß */}
      <polygon points="30,60 40,46 50,60" fill="url(#city-grad)" />
      <rect x="26" y="58" width="28" height="4" rx="1" fill="url(#city-grad)" />
    </svg>
  );
}

function DuesseldorfIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Rheinturm */}
      <rect x="37" y="4" width="6" height="52" rx="1" fill="url(#city-grad)" />
      {/* Kanzel/Korb */}
      <ellipse cx="40" cy="20" rx="12" ry="5" fill="url(#city-grad)" />
      <rect x="30" y="18" width="20" height="10" rx="3" fill="url(#city-grad)" />
      {/* Antenne */}
      <line x1="40" y1="0" x2="40" y2="6" stroke="url(#city-grad)" strokeWidth="2" />
      {/* Fuß */}
      <polygon points="32,60 40,50 48,60" fill="url(#city-grad)" />
      <rect x="28" y="58" width="24" height="4" rx="1" fill="url(#city-grad)" />
    </svg>
  );
}

function LeipzigIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Völkerschlachtdenkmal */}
      <polygon points="16,60 40,10 64,60" fill="url(#city-grad)" />
      {/* Stufen/Terrassen */}
      <rect x="24" y="36" width="32" height="3" rx="1" fill="#000008" />
      <rect x="28" y="28" width="24" height="3" rx="1" fill="#000008" />
      {/* Kuppel */}
      <ellipse cx="40" cy="12" rx="8" ry="6" fill="url(#city-grad)" />
      <rect x="38" y="4" width="4" height="4" rx="1" fill="url(#city-grad)" />
      {/* Basis */}
      <rect x="12" y="58" width="56" height="4" rx="1" fill="url(#city-grad)" />
    </svg>
  );
}

function DortmundIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Westfalenstadion / Signal Iduna Park */}
      <path d="M6 40 L6 58 L74 58 L74 40" stroke="url(#city-grad)" strokeWidth="3" fill="none" />
      {/* Tribünen */}
      <path d="M6 40 Q20 28 40 32 Q60 28 74 40" stroke="url(#city-grad)" strokeWidth="3" fill="url(#city-grad)" fillOpacity="0.3" />
      {/* Pylon links */}
      <rect x="8" y="14" width="4" height="28" rx="1" fill="url(#city-grad)" />
      <polygon points="10,10 6,18 14,18" fill="url(#city-grad)" />
      {/* Pylon rechts */}
      <rect x="68" y="14" width="4" height="28" rx="1" fill="url(#city-grad)" />
      <polygon points="70,10 66,18 74,18" fill="url(#city-grad)" />
      {/* Spielfeld */}
      <rect x="20" y="50" width="40" height="6" rx="1" fill="url(#city-grad)" fillOpacity="0.2" />
      <line x1="40" y1="50" x2="40" y2="56" stroke="url(#city-grad)" strokeWidth="1" />
    </svg>
  );
}

function MannheimIcon() {
  return (
    <svg viewBox="0 0 80 64" height={64} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="city-grad" x1="0" y1="0" x2="80" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFB432" />
          <stop offset="50%" stopColor="#FF3CAC" />
          <stop offset="100%" stopColor="#FF2D78" />
        </linearGradient>
      </defs>
      {/* Wasserturm Mannheim */}
      <rect x="34" y="20" width="12" height="36" rx="2" fill="url(#city-grad)" />
      {/* Kuppel */}
      <ellipse cx="40" cy="20" rx="10" ry="8" fill="url(#city-grad)" />
      <circle cx="40" cy="12" r="3" fill="url(#city-grad)" />
      <line x1="40" y1="6" x2="40" y2="9" stroke="url(#city-grad)" strokeWidth="2" />
      {/* Arkaden links & rechts */}
      <path d="M14 58 Q14 44 26 44 L34 44 L34 58" stroke="url(#city-grad)" strokeWidth="2" fill="none" />
      <path d="M66 58 Q66 44 54 44 L46 44 L46 58" stroke="url(#city-grad)" strokeWidth="2" fill="none" />
      {/* Basis */}
      <rect x="10" y="56" width="60" height="4" rx="1" fill="url(#city-grad)" />
    </svg>
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
