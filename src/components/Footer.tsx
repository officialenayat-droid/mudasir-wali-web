import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { SITE } from "../config/site";
import { InstagramIcon } from "./icons";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-ink px-4 py-12 text-slate-400 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl text-paper">Mudasir Wali</p>
          <p className="mt-1 text-sm">{SITE.role} · {SITE.partyShort}</p>
          <p className="mt-4 text-xs">{t.footer.note}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm md:items-end">
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-paper hover:text-gold">
            <InstagramIcon className="size-4" /> @{SITE.instagram}
          </a>
          <Link to="/connect" className="hover:text-paper">/connect</Link>
          <p className="text-xs">© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
