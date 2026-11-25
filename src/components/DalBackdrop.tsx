/** Atmospheric Dal-basin framing: Zabarwan ridgelines fading into the lake. Decorative only. */
export function DalBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] w-full opacity-80 md:h-[30%]"
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dal-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#08399C" stopOpacity="0" />
          <stop offset="0.5" stopColor="#08399C" stopOpacity="0.18" />
          <stop offset="1" stopColor="#0F172A" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="dal-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#DE2910" stopOpacity="0.55" />
          <stop offset="1" stopColor="#DE2910" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="1080" cy="250" r="120" fill="url(#dal-sun)" />
      <path d="M0 300 L120 240 L230 270 L360 190 L470 240 L600 170 L720 230 L860 150 L990 220 L1120 180 L1260 240 L1440 200 L1440 360 L0 360Z" fill="#1E293B" opacity="0.7" />
      <path d="M0 340 L160 290 L300 320 L450 260 L580 310 L760 250 L900 300 L1050 270 L1200 320 L1340 290 L1440 310 L1440 380 L0 380Z" fill="#0F172A" opacity="0.9" />
      <rect x="0" y="370" width="1440" height="190" fill="url(#dal-water)" />
    </svg>
  );
}
