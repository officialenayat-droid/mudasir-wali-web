import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { SITE } from "../config/site";
import { InstagramIcon } from "./icons";
import { FlagStripe, PartyFlag } from "./PartyFlag";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-ink text-slate-400">
      <FlagStripe />
      <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <PartyFlag className="h-10" />
            <p className="font-serif text-3xl text-paper">Mudasir Wali</p>
          </div>
          <p className="mt-3 text-sm font-semibold text-brand-soft">{t.footer.member}</p>
          <p className="mt-1 text-sm">{SITE.role} · {SITE.partyShort}</p>
          <p className="mt-4 text-xs">{t.footer.note}</p>
          <nav aria-label={t.footer.partyChannels} className="mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{t.footer.partyChannels}</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {[
                ["jkapniparty.com", SITE.partyLinks.website],
                ["Facebook", SITE.partyLinks.facebook],
                ["X", SITE.partyLinks.x],
                ["Instagram", SITE.partyLinks.instagram],
                ["YouTube", SITE.partyLinks.youtube],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-soft hover:text-white hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-3 text-sm md:items-end">
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-paper hover:text-accent">
            <InstagramIcon className="size-4" /> @{SITE.instagram}
          </a>
          <Link to="/connect" className="hover:text-paper">/connect</Link>
          <p className="text-xs">© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
      </div>
    </footer>
  );
}
