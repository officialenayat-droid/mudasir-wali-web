import { useState } from "react";
import { ChevronDown, Flag, Megaphone, Sparkles, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { PILLARS, type PillarId } from "../data/pillars";
import { Section } from "./Section";

const META: Record<PillarId, { icon: LucideIcon; span: string; tone: string; accent: string }> = {
  politics: { icon: Flag, span: "md:col-span-4", tone: "bg-ink text-paper", accent: "text-gold" },
  grievances: { icon: Megaphone, span: "md:col-span-2", tone: "bg-gold-tint text-ink", accent: "text-gold" },
  youth: { icon: Sparkles, span: "md:col-span-6", tone: "bg-forest text-paper", accent: "text-gold" },
};

export function Pillars() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState<Set<PillarId>>(() => new Set(PILLARS.map((p) => p.id)));
  const toggle = (id: PillarId) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  return (
    <Section id="pillars" eyebrow={t.pillars.eyebrow} title={t.pillars.title}>
      <ul className="grid gap-4 md:grid-cols-6">
        {PILLARS.map((p, i) => {
          const m = META[p.id];
          const c = p[lang];
          const isOpen = open.has(p.id);
          const Icon = m.icon;
          return (
            <li key={p.id} className={`${m.span} ${m.tone} flex flex-col rounded-3xl p-6 sm:p-8`}>
              {p.image && (
                <img
                  src={p.image.src}
                  alt={p.image[lang]}
                  loading="lazy"
                  className="-mx-2 -mt-2 mb-6 aspect-[16/10] w-[calc(100%+1rem)] rounded-2xl object-cover object-[50%_30%] sm:-mx-4 sm:-mt-4 sm:w-[calc(100%+2rem)]"
                />
              )}
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-start"
                aria-expanded={isOpen}
                aria-controls={`pillar-${p.id}`}
                onClick={() => toggle(p.id)}
              >
                <span>
                  <span className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${m.accent}`}>
                    <Icon className="size-4" aria-hidden="true" /> 0{i + 1}
                  </span>
                  <span className="mt-4 block font-serif text-3xl leading-tight sm:text-4xl">{c.title}</span>
                </span>
                <ChevronDown className={`mt-8 size-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              <p className="mt-4 leading-relaxed opacity-85">{c.summary}</p>
              <div id={`pillar-${p.id}`} hidden={!isOpen}>
                <ul className="mt-5 space-y-2.5 border-t border-current/15 pt-5">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed">
                      <span className={`mt-2 size-1.5 shrink-0 rounded-full bg-current ${m.accent}`} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
