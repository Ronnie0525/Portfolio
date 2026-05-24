interface AlconLogoProps {
  className?: string;
  animate?: boolean;
  showWordmark?: boolean;
}

const AlconLogo = ({ className = "", showWordmark = true }: AlconLogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Ronnie Balonon Jr. logo"
        className="shrink-0 object-contain"
        width={40}
        height={40}
        style={{ width: 40, height: 40 }}
      />

      {showWordmark && (
        <div className="flex flex-col leading-tight">
          <span
            className="text-white font-bold text-base"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            RONNIE
          </span>
          <span
            className="text-[#9B4DCA]"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 400,
              fontSize: 9,
              letterSpacing: "0.25em",
            }}
          >
            PORTFOLIO
          </span>
        </div>
      )}
    </div>
  );
};

export default AlconLogo;
