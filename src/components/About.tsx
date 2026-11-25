import { Compass, ExternalLink, Globe, Target, UserPlus } from "lucide-react";
import { SITE } from "../config/site";
import { useLang } from "../i18n/LanguageContext";
import { FlagStripe, PartyFlag } from "./PartyFlag";

/** Bio, mission and vision — text supplied by the client. */
export function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 id="about-title" className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {a.title}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {a.roles.map((r) => (
              <li key={r} className="rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-semibold text-brand">
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700">
            {a.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <FlagStripe />
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7">
              <PartyFlag className="h-20 sm:h-24" />
              <div>
                <p className="font-serif text-2xl leading-tight text-ink sm:text-3xl">{a.party}</p>
                <p className="mt-2 text-sm font-semibold text-brand">{a.partyLeader}</p>
                <p className="mt-1 text-sm text-slate-600">{a.partyRole}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{a.partyFounded}</p>
              </div>
            </div>
            <div className="border-t border-slate-200 bg-brand-tint/50 px-6 py-6 sm:px-7">
              <p className="font-serif text-xl leading-snug text-brand-deep sm:text-2xl">{a.partyMotto}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">{a.partyAgendaTitle}</p>
              <ul className="mt-2 space-y-1.5">
                {a.partyAgenda.map((x) => (
                  <li key={x} className="flex gap-2.5 text-sm text-slate-700">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <a href={SITE.partyLinks.website} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-10 px-4 text-xs">
                  <Globe className="size-4" aria-hidden="true" /> {a.partyWebsite}
                </a>
                <a href={SITE.partyLinks.join} target="_blank" rel="noopener noreferrer" className="btn-accent min-h-10 px-4 text-xs">
                  <UserPlus className="size-4" aria-hidden="true" /> {a.partyJoin}
                </a>
                <a href={SITE.partyLinks.about} target="_blank" rel="noopener noreferrer" className="ms-1 inline-flex items-center gap-1 text-xs text-slate-600 hover:text-brand hover:underline">
                  {a.partySource} <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5 lg:pt-16">
          <article className="rounded-3xl bg-ink p-7 text-paper sm:p-8">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
              <Target className="size-4" aria-hidden="true" /> {a.mission}
            </h3>
            <p className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">{a.missionText}</p>
          </article>
          <article className="rounded-3xl bg-brand p-7 text-paper sm:p-8">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
              <Compass className="size-4" aria-hidden="true" /> {a.vision}
            </h3>
            <p className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">{a.visionText}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
