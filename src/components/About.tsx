import { Compass, Target } from "lucide-react";
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
