import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { GALLERY, VIDEOS } from "../data/gallery";
import { Section } from "./Section";

export function Gallery() {
  const { lang, t } = useLang();
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    [],
  );

  // In RTL the visual "next" arrow points left, so swap key meaning.
  const onKey = (e: React.KeyboardEvent) => {
    const rtl = lang === "ur";
    if (e.key === "ArrowRight") step(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
  };

  const photo = index !== null ? GALLERY[index] : null;

  return (
    <Section id="gallery" eyebrow={t.gallery.eyebrow} title={t.gallery.title} tone="white">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">{t.gallery.videos}</h3>
      <ul className="mb-12 grid grid-cols-2 items-start gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {VIDEOS.map((v) => (
          <li key={v.src}>
            <figure>
              <video
                controls
                playsInline
                preload="none"
                poster={v.poster}
                width={v.w}
                height={v.h}
                style={{ aspectRatio: `${v.w} / ${v.h}` }}
                className="w-full rounded-2xl bg-ink object-cover"
                aria-label={v[lang]}
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <figcaption className="mt-2 text-sm text-slate-600">{v[lang]}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">{t.gallery.photos}</h3>
      <ul className="columns-2 gap-3 sm:gap-4 md:columns-3 [&>li]:mb-3 sm:[&>li]:mb-4">
        {GALLERY.map((p, i) => (
          <li key={p.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-slate-100"
              aria-label={`${t.gallery.open}: ${p[lang]}`}
            >
              <img
                src={p.src}
                srcSet={`${p.src.replace(".webp", "-640.webp")} 640w, ${p.src} ${p.w}w`}
                sizes="(min-width: 768px) 33vw, 50vw"
                width={p.w}
                height={p.h}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-3 pt-10 text-start text-xs font-medium text-paper sm:text-sm">
                <span>{p[lang]}</span>
                <Expand className="size-4 shrink-0 opacity-70" aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onKeyDown={onKey}
        onClick={(e) => e.target === dialogRef.current && setIndex(null)}
        aria-label={photo ? photo[lang] : t.gallery.title}
        className="m-auto h-dvh max-h-dvh w-full max-w-none bg-transparent p-0 backdrop:bg-ink/95"
      >
        {photo && index !== null && (
          <div
            className="flex h-full flex-col text-paper"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm text-slate-400" dir="ltr">
                {index + 1} / {GALLERY.length}
              </span>
              <button type="button" onClick={() => setIndex(null)} className="grid size-11 place-items-center rounded-full hover:bg-white/10" aria-label={t.press.close}>
                <X className="size-6" />
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16" onClick={(e) => e.target === e.currentTarget && setIndex(null)}>
              <img src={photo.src} alt={photo[lang]} className="max-h-full max-w-full rounded-lg object-contain" />
              <button type="button" onClick={() => step(-1)} className="absolute start-2 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20 sm:grid" aria-label={t.gallery.prev}>
                <ChevronLeft className="size-6 rtl:-scale-x-100" />
              </button>
              <button type="button" onClick={() => step(1)} className="absolute end-2 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20 sm:grid" aria-label={t.gallery.next}>
                <ChevronRight className="size-6 rtl:-scale-x-100" />
              </button>
            </div>
            <p className="px-4 py-5 text-center text-base">{photo[lang]}</p>
          </div>
        )}
      </dialog>
    </Section>
  );
}
