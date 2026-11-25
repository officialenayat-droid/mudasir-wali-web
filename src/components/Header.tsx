import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { LangToggle } from "./LangToggle";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#pillars", label: t.nav.pillars },
    { href: "/#wards", label: t.nav.wards },
    { href: "/#darbar", label: t.nav.darbar },
    { href: "/#gallery", label: t.nav.gallery },
    { href: "/#press", label: t.nav.press },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-paper transition-colors ${
        scrolled || open ? "bg-ink/95 shadow-lg shadow-black/10 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="flex items-baseline gap-2" aria-label="Mudasir Wali — home">
          <span className="font-serif text-2xl leading-none">Mudasir Wali</span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-accent sm:block" aria-hidden="true" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-300 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle className="text-paper" />
          <a href="/#join" className="btn-accent hidden min-h-10 px-5 md:inline-flex">
            {t.nav.join}
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-4 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-lg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/#join" onClick={() => setOpen(false)} className="btn-accent mt-4 w-full">
            {t.nav.join}
          </a>
        </nav>
      )}
    </header>
  );
}
