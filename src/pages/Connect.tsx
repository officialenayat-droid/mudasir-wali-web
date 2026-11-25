import { useEffect, useState } from "react";
import { BadgeCheck, ChevronDown, ExternalLink, FileText, MessageSquareWarning, Users, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { SITE } from "../config/site";
import { whatsappLink } from "../lib/whatsapp";
import { Portrait } from "../components/Portrait";
import { LangToggle } from "../components/LangToggle";
import { VolunteerForm } from "../components/Volunteer";
import { InstagramIcon, WhatsAppIcon } from "../components/icons";

type LinkItem = { href: string; label: string; sub?: string; icon: LucideIcon | typeof InstagramIcon; external?: boolean; primary?: boolean };

/** Link-in-bio page for Instagram traffic (@walimudasirr). */
export default function Connect() {
  const { lang, t } = useLang();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.title = "Connect with Mudasir Wali — Srinagar";
  }, []);

  const ur = lang === "ur";
  const links: LinkItem[] = [
    { href: "/#darbar", label: t.hero.ctaReport, sub: ur ? "حوالہ نمبر کے ساتھ" : "Get a ticket ID in under a minute", icon: MessageSquareWarning, primary: true },
    {
      href: whatsappLink("Assalam-o-Alaikum Team Mudasir Wali, I'd like to get in touch."),
      label: ur ? "واٹس ایپ پر رابطہ کریں" : "Message the team on WhatsApp",
      icon: WhatsAppIcon,
      external: true,
    },
    { href: "/#press", label: ur ? "پریس روم" : "Press Room & Latest News", icon: FileText },
    { href: "/#pillars", label: ur ? "چار ستون" : "The Four Pillars of Public Work", icon: Users },
    { href: SITE.instagramUrl, label: "Instagram", sub: `@${SITE.instagram}`, icon: InstagramIcon, external: true },
  ];

  return (
    <div className="relative min-h-dvh overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,95,70,0.55),transparent_65%)]" aria-hidden="true" />
      <main className="relative mx-auto flex max-w-md flex-col px-4 pb-12 pt-6">
        <div className="flex justify-end">
          <LangToggle className="text-paper" />
        </div>

        <header className="mt-4 flex flex-col items-center text-center">
          <div className="rounded-full p-1 ring-2 ring-gold">
            <Portrait className="size-28" rounded="rounded-full" position="52% 42%" />
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-none">Mudasir Wali</h1>
          <p className="mt-3 text-sm font-semibold text-paper/90">{t.about.title}</p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-100">
            <BadgeCheck className="size-4 text-gold" aria-hidden="true" />
            {t.hero.badge}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{t.hero.party}</p>
          <p className="mt-4 font-serif text-2xl italic text-gold">
            {t.hero.title1} {t.hero.title2}
          </p>
        </header>

        <nav aria-label="Links" className="mt-8">
          <ul className="space-y-3">
            {links.map(({ href, label, sub, icon: Icon, external, primary }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`flex min-h-16 items-center gap-4 rounded-2xl px-5 py-3 transition active:scale-[0.99] ${
                    primary ? "bg-amber-700 text-white hover:bg-amber-800" : "bg-white/[0.07] ring-1 ring-white/10 hover:bg-white/[0.12]"
                  }`}
                >
                  <Icon className="size-5 shrink-0" aria-hidden="true" />
                  <span className="flex-1 text-start">
                    <span className="block font-semibold">{label}</span>
                    {sub && <span className={`block text-xs ${primary ? "text-amber-100" : "text-slate-400"}`}>{sub}</span>}
                  </span>
                  {external && <ExternalLink className="size-4 opacity-60" aria-hidden="true" />}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-expanded={showForm}
                aria-controls="connect-volunteer"
                onClick={() => setShowForm((s) => !s)}
                className="flex min-h-16 w-full items-center gap-4 rounded-2xl bg-forest px-5 py-3 font-semibold transition hover:bg-forest-deep"
              >
                <Users className="size-5 shrink-0" aria-hidden="true" />
                <span className="flex-1 text-start">{t.hero.ctaJoin}</span>
                <ChevronDown className={`size-5 transition ${showForm ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              <div id="connect-volunteer" hidden={!showForm} className="mt-3 rounded-2xl bg-paper p-5 text-ink">
                <VolunteerForm compact />
              </div>
            </li>
          </ul>
        </nav>

        <footer className="mt-10 text-center text-xs text-slate-500">
          <a href="/" className="hover:text-paper">{SITE.url.replace(/^https?:\/\//, "")}</a>
        </footer>
      </main>
    </div>
  );
}
