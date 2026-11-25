import { useState } from "react";
import { BriefcaseBusiness, Car, Droplets, GraduationCap, Hammer, MapPin, Megaphone, Plus, Zap, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { WARDS } from "../data/wards";
import { categoryName, localityName, type IssueCategoryId, type LocalityId } from "../data/localities";
import { Section } from "./Section";
import { prefillGrievance } from "../lib/prefill";

const CAT_ICON: Record<IssueCategoryId, LucideIcon> = {
  roads: Hammer,
  drainage: Droplets,
  "water-power": Zap,
  employment: BriefcaseBusiness,
  traffic: Car,
  education: GraduationCap,
  other: Plus,
};

const FOCUS_FILTERS: IssueCategoryId[] = ["roads", "drainage", "employment", "traffic"];

export function WardTracker() {
  const { lang, t } = useLang();
  const [ward, setWard] = useState<LocalityId | "all">("all");
  const [focus, setFocus] = useState<IssueCategoryId | "all">("all");

  const visible = WARDS.filter((w) => (ward === "all" || w.id === ward) && (focus === "all" || w.focus.includes(focus)));

  const chip = (active: boolean) =>
    `min-h-10 shrink-0 rounded-full border px-4 text-sm font-semibold transition ${
      active ? "border-ink bg-ink text-paper" : "border-slate-300 bg-white text-slate-700 hover:border-ink"
    }`;

  return (
    <Section id="wards" eyebrow={t.wards.eyebrow} title={t.wards.title} tone="white">
      <div className="space-y-3">
        <div role="group" aria-label="Filter by locality" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          <button type="button" className={chip(ward === "all")} aria-pressed={ward === "all"} onClick={() => setWard("all")}>
            {t.wards.all}
          </button>
          {WARDS.map((w) => (
            <button key={w.id} type="button" className={chip(ward === w.id)} aria-pressed={ward === w.id} onClick={() => setWard(w.id)}>
              {localityName(w.id, lang)}
            </button>
          ))}
        </div>
        <div role="group" aria-label="Filter by civic focus" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {(["all", ...FOCUS_FILTERS] as const).map((f) => {
            const Icon = f === "all" ? null : CAT_ICON[f];
            const active = focus === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFocus(f)}
                className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-xs font-semibold transition ${
                  active ? "bg-brand text-white" : "bg-brand-tint text-brand hover:bg-blue-100"
                }`}
              >
                {Icon && <Icon className="size-3.5" aria-hidden="true" />}
                {f === "all" ? t.wards.allIssues : categoryName(f, lang)}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {visible.map((w) => (
          <li key={w.id} className="flex flex-col rounded-3xl border border-slate-200 bg-paper p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-3xl leading-tight">{localityName(w.id, lang)}</h3>
                <p className="mt-1 text-sm text-slate-500" lang={lang === "en" ? "ur" : "en"}>
                  {localityName(w.id, lang === "en" ? "ur" : "en")}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-tint px-2.5 py-1 text-xs font-semibold text-accent-deep">
                <MapPin className="size-3" aria-hidden="true" />
                {w.tagline[lang]}
              </span>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t.wards.focus}</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {w.focus.map((c) => {
                const Icon = CAT_ICON[c];
                return (
                  <li key={c} className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium ${focus === c ? "bg-brand text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>
                    <Icon className="size-3.5" aria-hidden="true" />
                    {categoryName(c, lang)}
                  </li>
                );
              })}
            </ul>

            {w.onGround.length > 0 && (
              <>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{t.wards.updates}</p>
                <ul className="mt-2 space-y-2">
                  {w.onGround.map((u) => (
                    <li key={u.en} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                      <Megaphone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {u[lang]}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <a
              href="#darbar"
              onClick={() => prefillGrievance({ locality: w.id, category: focus === "all" ? undefined : focus })}
              className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand hover:underline"
            >
              <Plus className="size-4" aria-hidden="true" />
              {t.wards.reportHere}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
