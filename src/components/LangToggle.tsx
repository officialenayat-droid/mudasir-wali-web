import { Languages } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, t, toggle } = useLang();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "en" ? "Switch to Urdu" : "Switch to English"}
      className={`inline-flex min-h-10 items-center gap-1.5 rounded-full border border-current/25 px-3.5 text-sm font-semibold transition hover:border-current ${className}`}
    >
      <Languages className="size-4" aria-hidden="true" />
      <span lang={lang === "en" ? "ur" : "en"} className={lang === "en" ? "font-urdu" : "font-sans"}>
        {t.langToggle}
      </span>
    </button>
  );
}
