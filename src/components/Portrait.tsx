import { useState } from "react";
import { SITE } from "../config/site";

/** Shows /public/portrait.jpg when present, otherwise an editorial monogram. */
export function Portrait({
  className = "",
  rounded = "rounded-[2rem]",
  position = "50% 30%",
}: {
  className?: string;
  rounded?: string;
  /** CSS object-position, e.g. to centre the face in a small circle. */
  position?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-b from-ink-soft to-brand-deep ${rounded} ${className}`}>
      {!failed ? (
        <img
          src={SITE.portraitSrc}
          srcSet={`${SITE.portraitSrc.replace(".webp", "-640.webp")} 640w, ${SITE.portraitSrc} 880w`}
          sizes="(min-width: 768px) 40vw, 90vw"
          alt="Portrait of Mudasir Wali"
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition: position }}
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
