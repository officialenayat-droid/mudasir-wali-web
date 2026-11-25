/** Atmospheric Dal-basin framing: Zabarwan ridgelines over still water. Decorative only. */
export function DalBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] w-full"
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dal-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#065F46" stopOpacity="0.35" />
          <stop offset="1" stopColor="#0F172A" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="dal-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D97706" stopOpacity="0.55" />
          <stop offset="1" stopColor="#D97706" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="1080" cy="250" r="120" fill="url(#dal-sun)" />
      {/* far ridge */}
      <path d="M0 300 L120 240 L230 270 L360 190 L470 240 L600 170 L720 230 L860 150 L990 220 L1120 180 L1260 240 L1440 200 L1440 360 L0 360Z" fill="#1E293B" opacity="0.7" />
      {/* near ridge */}
      <path d="M0 340 L160 290 L300 320 L450 260 L580 310 L760 250 L900 300 L1050 270 L1200 320 L1340 290 L1440 310 L1440 380 L0 380Z" fill="#0F172A" opacity="0.9" />
      {/* water */}
      <rect x="0" y="370" width="1440" height="190" fill="url(#dal-water)" />
      <g stroke="#F8FAFC" strokeOpacity="0.12" strokeWidth="1.5" strokeLinecap="round">
        <line x1="180" y1="410" x2="420" y2="410" />
        <line x1="620" y1="430" x2="980" y2="430" />
        <line x1="1020" y1="400" x2="1160" y2="400" />
        <line x1="300" y1="470" x2="560" y2="470" />
        <line x1="880" y1="490" x2="1240" y2="490" />
      </g>
      {/* shikara */}
      <g transform="translate(330 386)" fill="#0B1120">
        <path d="M0 10 Q60 22 120 10 L112 16 Q60 26 8 16Z" />
        <rect x="45" y="-8" width="30" height="16" rx="2" />
        <path d="M40 -8 L60 -18 L80 -8Z" />
      </g>
    </svg>
  );
}
