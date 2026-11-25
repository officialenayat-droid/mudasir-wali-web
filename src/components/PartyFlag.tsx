/** Official J&K Apni Party flag (artwork supplied by the client) and a matching tricolour stripe. */
export function PartyFlag({ className = "h-8", eager = false }: { className?: string; eager?: boolean }) {
  return (
    <img
      src="/brand/apni-party-flag.webp"
      srcSet="/brand/apni-party-flag-sm.webp 160w, /brand/apni-party-flag.webp 480w"
      sizes="(min-width: 768px) 160px, 120px"
      width={480}
      height={320}
      alt="Jammu & Kashmir Apni Party flag"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`aspect-[3/2] w-auto rounded-[3px] object-cover shadow-sm ring-1 ring-black/10 ${className}`}
    />
  );
}

/** Thin red / white / blue band echoing the party flag. */
export function FlagStripe({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex flex-col ${className}`}>
      <span className="h-[3px] bg-[#DE2910]" />
      <span className="h-[2px] bg-white" />
      <span className="h-[3px] bg-[#08399C]" />
    </div>
  );
}
