import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { DalBackdrop } from "./DalBackdrop";
import { Portrait } from "./Portrait";

export function Hero() {
  const { t } = useLang();
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(6,95,70,0.45),transparent_60%)]" />
      <DalBackdrop />

      <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-4 pb-16 pt-28 sm:px-6 md:grid-cols-12 md:pb-24 md:pt-36">
        <div className="md:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-forest/60 bg-forest/25 px-3.5 py-1.5 text-xs font-semibold text-emerald-100 sm:text-sm">
            <BadgeCheck className="size-4 shrink-0 text-gold" aria-hidden="true" />
            {t.hero.badge}
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">{t.hero.party}</p>

          <h1 className="mt-5 font-serif text-[3.25rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="sr-only">Mudasir Wali — </span>
            <span className="block">{t.hero.title1}</span>
            <span className="block italic text-gold">{t.hero.title2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{t.hero.lede}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#darbar" className="btn-gold">
              {t.hero.ctaReport}
              <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            </a>
            <a href="#join" className="btn-ghost text-paper hover:bg-white/10">
              {t.hero.ctaJoin}
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
          <div className="absolute -inset-3 -z-10 rounded-[2.5rem] border border-gold/30" aria-hidden="true" />
          <Portrait className="aspect-[4/5] w-full" />
          <figcaption className="absolute bottom-5 start-5 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-medium text-paper backdrop-blur">
            <MapPin className="size-3.5 text-gold" aria-hidden="true" />
            {t.hero.portraitCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
