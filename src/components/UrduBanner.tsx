import { useLang } from "../i18n/LanguageContext";
import { STRINGS } from "../i18n/strings";

/** Always shows the Urdu message, with the English line beneath for non-Urdu readers. */
export function UrduBanner() {
  const { lang } = useLang();
  const ur = STRINGS.ur.urduBanner;
  const en = STRINGS.en.urduBanner;
  return (
    <aside aria-label="Message in Urdu" className="border-y-4 border-gold bg-forest px-4 py-10 text-paper sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p lang="ur" dir="rtl" className="font-urdu text-sm text-emerald-200">{ur.kicker}</p>
        <p lang="ur" dir="rtl" className="font-urdu text-2xl leading-[2.2] sm:text-3xl">{ur.text}</p>
        {lang === "en" && <p className="max-w-2xl text-sm text-emerald-100/80">{en.text}</p>}
      </div>
    </aside>
  );
}
