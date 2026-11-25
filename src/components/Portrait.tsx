import { useState } from "react";
import { SITE } from "../config/site";

/** Shows /public/portrait.jpg when present, otherwise an editorial monogram. */
export function Portrait({ className = "", rounded = "rounded-[2rem]" }: { className?: string; rounded?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-b from-ink-soft to-forest-deep ${rounded} ${className}`}>
      {!failed ? (
        <img
          src={SITE.portraitSrc}
          alt="Portrait of Mudasir Wali"
          className="absolute inset-0 size-full object-cover"
          onError={() => setFailed(true)}
          fetchPriority="high"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center" role="img" aria-label="Mudasir Wali monogram">
          <span className="font-serif text-7xl leading-none text-paper/90 md:text-9xl">
            MW
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
    </div>
  );
}
