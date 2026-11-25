import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { STRINGS, type Lang, type Strings } from "./strings";

type Ctx = { lang: Lang; t: Strings; toggle: () => void; setLang: (l: Lang) => void };
const LanguageContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q === "ur" || q === "en") return q;
  try {
    const saved = localStorage.getItem("mw-lang");
    if (saved === "ur" || saved === "en") return saved;
  } catch {
    /* storage unavailable */
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    try {
      localStorage.setItem("mw-lang", lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "ur" : "en"));
  return <LanguageContext.Provider value={{ lang, t: STRINGS[lang], toggle, setLang }}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
