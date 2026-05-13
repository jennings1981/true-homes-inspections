/**
 * TrueHomesLogo — Uses the real house+H icon image (transparent bg)
 * paired with clean white/orange text — blends into dark nav/footer
 */

const ICON_URL = "/manus-storage/true-homes-icon-transparent_386243ad.png";

interface TrueHomesLogoProps {
  height?: number;
  className?: string;
}

export default function TrueHomesLogo({ height = 48, className = "" }: TrueHomesLogoProps) {
  const iconHeight = height;
  const titleSize = Math.round(height * 0.38);
  const subtitleSize = Math.round(height * 0.20);

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      style={{ height: iconHeight }}
    >
      {/* Real icon — transparent background */}
      <img
        src={ICON_URL}
        alt="True Homes icon"
        style={{ height: iconHeight, width: "auto", objectFit: "contain" }}
      />

      {/* Text block */}
      <div className="flex flex-col justify-center leading-none">
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Barlow', Arial Narrow, sans-serif",
            fontWeight: 800,
            fontSize: titleSize,
            color: "#FFFFFF",
            letterSpacing: "0.04em",
            lineHeight: 1.1,
          }}
        >
          TRUE HOMES
        </span>
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Barlow', Arial Narrow, sans-serif",
            fontWeight: 600,
            fontSize: subtitleSize,
            color: "#D35400",
            letterSpacing: "0.18em",
            lineHeight: 1.2,
            marginTop: 2,
          }}
        >
          HOME INSPECTIONS
        </span>
      </div>
    </div>
  );
}
