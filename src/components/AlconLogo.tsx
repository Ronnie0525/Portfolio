import { useEffect, useState } from "react";

interface AlconLogoProps {
  className?: string;
  animate?: boolean;
  showWordmark?: boolean;
}

const AlconLogo = ({ className = "", animate = false, showWordmark = true }: AlconLogoProps) => {
  const [pulseClass, setPulseClass] = useState(animate ? "animate-signal-pulse" : "");

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setPulseClass(""), 1200);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: 160, height: 40 }}
    >
      <defs>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B2FBE" />
          <stop offset="100%" stopColor="#E879F9" />
        </linearGradient>
      </defs>

      {/* A letterform - two diagonal strokes */}
      <line x1="8" y1="32" x2="18" y2="6" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      <line x1="28" y1="32" x2="18" y2="6" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

      {/* Signal waves (crossbar replacement) */}
      <g className={pulseClass}>
        <path d="M11 20 Q14 17 17 20" stroke="url(#purpleGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M11 24 Q15 19 19 24" stroke="url(#purpleGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M11 28 Q16 21 21 28" stroke="url(#purpleGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>

      {showWordmark && (
        <>
          {/* RONNIE wordmark */}
          <text
            x="38"
            y="22"
            fill="#FFFFFF"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="700"
            fontSize="16"
            letterSpacing="0.08em"
          >
            RONNIE
          </text>

          {/* PORTFOLIO sub-label */}
          <text
            x="38"
            y="33"
            fill="#9B4DCA"
            fontFamily="'Space Mono', monospace"
            fontWeight="400"
            fontSize="7"
            letterSpacing="0.25em"
          >
            PORTFOLIO
          </text>
        </>
      )}
    </svg>
  );
};

export default AlconLogo;
