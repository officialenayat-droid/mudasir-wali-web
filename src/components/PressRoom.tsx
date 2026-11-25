import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ClipboardCopy, ExternalLink, Newspaper, X } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { PRESS_NOTES, formatPressNote, type PressNote } from "../data/press";
import { SITE } from "../config/site";
import { copyText } from "../lib/whatsapp";
import { Section } from "./Section";

const CAT_STYLE: Record<PressNote["category"], string> = {
  Politics: "bg-ink text-paper",
  Civic: "bg-brand text-white",
};

function CopyButton({ note, className = "" }: { note: PressNote; className?: string }) {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={`btn-primary ${className}`}
      onClick={async () => {
        setDone(await copyText(formatPressNote(note, SITE.url)));
        setTimeout(() => setDone(false), 2200);
      }}
    >
      {done ? <Check className="size-4" aria-hidden="true" /> : <ClipboardCopy className="size-4" aria-hidden="true" />}
      <span aria-live="polite">{done ? t.press.copied : t.press.copy}</span>
    </button>
  );
}

export function PressRoom() {
  const { t } = useLang();
  const [active, setActive] = useState<PressNote | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active && !d.open) d.showModal();
    if (!active && d.open) d.close();
  }, [active]);

  const [lead, ...rest] = PRESS_NOTES;

  return (
    <Section id="press" eyebrow={t.press.eyebrow} title={t.press.title} lede={t.press.lede} tone="ink">
      <div className="grid items-start gap-4 lg:grid-cols-2">
        <article className="flex flex-col rounded-3xl bg-paper p-6 text-ink sm:p-8">
          {lead.image && (
            <img src={lead.image.src} alt={lead.image.alt} loading="lazy" className="-mx-2 -mt-2 mb-6 aspect-[16/9] w-[calc(100%+1rem)] rounded-2xl object-cover sm:-mx-4 sm:-mt-4 sm:w-[calc(100%+2rem)]" />
          )}
          <Meta note={lead} />
          <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">{lead.title}</h3>
          <p className="mt-4 text-lg text-slate-600">{lead.dek}</p>
          <p className="mt-4 leading-relaxed text-slate-700" lang="en">{lead.body[0]}</p>
          <Sources note={lead} />
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <button type="button" className="btn-ghost text-ink hover:bg-ink hover:text-paper" onClick={() => setActive(lead)}>
              {t.press.read} <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            </button>
            <CopyButton note={lead} />
          </div>
        </article>
        {rest.map((n) => (
          <article key={n.id} className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.08]">
            <Meta note={n} />
            <h3 className="mt-4 font-serif text-2xl leading-snug">
              <button type="button" className="text-start after:absolute after:inset-0 focus:outline-none" onClick={() => setActive(n)}>
                {n.title}
              </button>
            </h3>
            <p className="mt-2 text-sm text-slate-400">{n.dek}</p>
            <Sources note={n} dark />
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && setActive(null)}
        aria-labelledby="press-dialog-title"
        className="m-0 ms-auto h-dvh max-h-dvh w-full max-w-2xl bg-paper p-0 text-ink backdrop:bg-ink/70 backdrop:backdrop-blur-sm sm:rounded-s-3xl"
      >
        {active && (
          <div className="flex h-full flex-col" lang="en" dir="ltr">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Newspaper className="size-4" aria-hidden="true" /> Press Note
              </span>
              <button type="button" className="grid size-10 place-items-center rounded-full hover:bg-slate-200" aria-label={t.press.close} onClick={() => setActive(null)}>
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-8 sm:px-8">
              {active.image && <img src={active.image.src} alt={active.image.alt} className="mb-6 aspect-[16/9] w-full rounded-2xl object-cover" />}
              <Meta note={active} />
              <h2 id="press-dialog-title" className="mt-5 font-serif text-4xl leading-tight">{active.title}</h2>
              <p className="mt-4 text-lg text-slate-600">{active.dek}</p>
              <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-slate-800">
                {active.body.map((p) => <p key={p}>{p}</p>)}
              </div>
              <Sources note={active} />
              <p className="mt-10 border-t border-slate-200 pt-5 text-sm text-slate-500">
                Issued by the Office of Mudasir Wali, Joint Secretary, District Srinagar, J&amp;K Apni Party · Instagram @{SITE.instagram}
              </p>
            </div>
            <div className="border-t border-slate-200 px-5 py-4 sm:px-8">
              <CopyButton note={active} className="w-full" />
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}

function Sources({ note, dark = false }: { note: PressNote; dark?: boolean }) {
  if (!note.sources?.length) return null;
  return (
    <p className={`mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
      <span>As reported by</span>
      {note.sources.map((s) => (
        <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className={`relative z-10 inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline ${dark ? "text-paper" : "text-brand"}`}>
          {s.name} <ExternalLink className="size-3" aria-hidden="true" />
        </a>
      ))}
    </p>
  );
}

function Meta({ note }: { note: PressNote }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
      <span className={`rounded-full px-2.5 py-1 ${CAT_STYLE[note.category]}`}>{note.category}</span>
      <time className="uppercase tracking-[0.16em] opacity-60">{note.dateLabel}</time>
    </div>
  );
}
