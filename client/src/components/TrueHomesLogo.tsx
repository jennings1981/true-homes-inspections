/**
 * TrueHomesLogo — SVG recreation of the True Homes Home Inspections logo
 * Transparent background, designed for dark nav/footer
 * Colors: Orange #D35400, White #FFFFFF, Charcoal #2C2C2C (unused on dark bg)
 */

interface TrueHomesLogoProps {
  height?: number;
  className?: string;
}

export default function TrueHomesLogo({ height = 48, className = "" }: TrueHomesLogoProps) {
  const ORANGE = "#D35400";
  const WHITE = "#FFFFFF";
  const GRAY = "#888888";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 72"
      height={height}
      className={className}
      aria-label="True Homes Home Inspections"
      style={{ display: "block" }}
    >
      {/* ── ICON: House with H ── */}

      {/* Roof (orange diagonal lines / striped) */}
      {/* Main roof outline */}
      <polygon points="8,36 36,8 64,36" fill="none" stroke={ORANGE} strokeWidth="3.5" strokeLinejoin="round" />

      {/* Roof stripes (diagonal lines inside roof) */}
      <clipPath id="roofClip">
        <polygon points="8,36 36,8 64,36" />
      </clipPath>
      <g clipPath="url(#roofClip)">
        {[0, 6, 12, 18, 24].map((offset) => (
          <line
            key={offset}
            x1={14 + offset}
            y1={36}
            x2={36 + offset}
            y2={8}
            stroke={ORANGE}
            strokeWidth="2.5"
            opacity="0.85"
          />
        ))}
      </g>

      {/* Chimney */}
      <rect x="42" y="12" width="7" height="14" fill={ORANGE} />

      {/* House body / walls */}
      <rect x="14" y="34" width="44" height="28" fill="none" stroke={GRAY} strokeWidth="2" />

      {/* Door (center bottom) */}
      <rect x="29" y="46" width="14" height="16" fill="none" stroke={GRAY} strokeWidth="1.8" />

      {/* Window (small, upper left of house body) */}
      <rect x="18" y="38" width="10" height="9" fill="none" stroke={GRAY} strokeWidth="1.5" />
      {/* Window cross */}
      <line x1="23" y1="38" x2="23" y2="47" stroke={GRAY} strokeWidth="1" />
      <line x1="18" y1="42.5" x2="28" y2="42.5" stroke={GRAY} strokeWidth="1" />

      {/* ── H letter overlaid on house (the "Hi" monogram) ── */}
      {/* Left vertical of H */}
      <rect x="22" y="20" width="5" height="22" fill={ORANGE} opacity="0.95" />
      {/* Right vertical of H */}
      <rect x="45" y="20" width="5" height="22" fill={ORANGE} opacity="0.95" />
      {/* Crossbar of H */}
      <rect x="22" y="29" width="28" height="5" fill={ORANGE} opacity="0.95" />

      {/* Dot of the "i" (small circle above chimney area) */}
      <circle cx="48.5" cy="10" r="3" fill={ORANGE} />

      {/* ── TEXT: TRUE HOMES ── */}
      <text
        x="80"
        y="34"
        fontFamily="'Barlow Condensed', 'Barlow', Arial Narrow, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="1"
        fill={WHITE}
      >
        TRUE HOMES
      </text>

      {/* ── TEXT: HOME INSPECTIONS ── */}
      <text
        x="80"
        y="56"
        fontFamily="'Barlow Condensed', 'Barlow', Arial Narrow, sans-serif"
        fontWeight="600"
        fontSize="16"
        letterSpacing="3"
        fill={ORANGE}
      >
        HOME INSPECTIONS
      </text>
    </svg>
  );
}
