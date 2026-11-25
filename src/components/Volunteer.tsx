import { useId, useState, type FormEvent } from "react";
import { Megaphone, Users, Vote, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { LOCALITIES, localityName } from "../data/localities";
import { STRINGS } from "../i18n/strings";
import { normalizeIndianMobile, whatsappLink } from "../lib/whatsapp";
import { WhatsAppIcon } from "./icons";

type RoleId = keyof typeof STRINGS.en.roles;
const ROLES: { id: RoleId; icon: LucideIcon }[] = [
  { id: "ground", icon: Users },
  { id: "social", icon: Megaphone },
  { id: "booth", icon: Vote },
];

/** Volunteer registration. `compact` renders without the section chrome (used on /connect). */
export function VolunteerForm({ compact = false }: { compact?: boolean }) {
  const { lang, t } = useLang();
  const uid = useId();
  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");
  const [role, setRole] = useState<RoleId>("ground");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const p = normalizeIndianMobile(phone);
    if (!name.trim() || !locality) return setError(t.darbar.required);
    if (!p) return setError(t.darbar.phoneInvalid);
    setError(null);
    const msg = [
      "*Youth Movement Volunteer Registration*",
      "",
      `*Name:* ${name.trim()}`,
      `*Locality:* ${localityName(locality, "en")}`,
      `*Role:* ${STRINGS.en.roles[role]}`,
      age ? `*Age:* ${age}` : null,
      `*WhatsApp:* ${p}`,
      "",
      "_I want to join Team Mudasir Wali._",
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  const dark = !compact;
  const fieldTone = dark ? "border-white/20! bg-white/5! text-paper! placeholder:text-slate-400" : "";
  const labelTone = dark ? "text-paper" : "";

  return (
    <form noValidate onSubmit={submit} className="space-y-5">
      <fieldset>
        <legend className={`label ${labelTone}`}>{t.volunteer.role}</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {ROLES.map(({ id, icon: Icon }) => (
            <label
              key={id}
              className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition has-[:checked]:border-accent has-[:checked]:bg-accent has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent ${
                dark ? "border-white/20 text-paper" : "border-slate-300 bg-white text-ink"
              }`}
            >
              <input type="radio" name={`${uid}-role`} value={id} checked={role === id} onChange={() => setRole(id)} className="sr-only" />
              <Icon className="size-5 shrink-0" aria-hidden="true" />
              {t.roles[id]}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={`label ${labelTone}`}>{t.darbar.name}</label>
          <input id={`${uid}-name`} className={`field ${fieldTone}`} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor={`${uid}-loc`} className={`label ${labelTone}`}>{t.darbar.locality}</label>
          <select id={`${uid}-loc`} className={`field ${fieldTone}`} value={locality} onChange={(e) => setLocality(e.target.value)}>
            <option value="" className="text-ink">{t.darbar.select}</option>
            {LOCALITIES.map((l) => <option key={l.id} value={l.id} className="text-ink">{l[lang]}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={`${uid}-age`} className={`label ${labelTone}`}>{t.volunteer.age}</label>
          <input id={`${uid}-age`} type="number" inputMode="numeric" min={14} max={99} className={`field ${fieldTone}`} value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={`label ${labelTone}`}>{t.darbar.whatsapp}</label>
          <input id={`${uid}-phone`} type="tel" dir="ltr" inputMode="numeric" autoComplete="tel-national" placeholder="9XXXXXXXXX" className={`field ${fieldTone}`} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      {error && <p role="alert" className={`text-sm font-medium ${dark ? "text-accent-soft" : "text-red-700"}`}>{error}</p>}
      <button type="submit" className="btn bg-[#25D366] text-ink hover:bg-[#1ebe5b] w-full sm:w-auto">
        <WhatsAppIcon className="size-5" />
        {t.volunteer.submit}
      </button>
    </form>
  );
}

export function Volunteer() {
  const { t } = useLang();
  return (
    <section id="join" aria-labelledby="join-title" className="bg-brand-deep px-4 py-20 text-paper sm:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        <header className="lg:col-span-5">
          <p className="eyebrow text-accent-soft!">{t.volunteer.eyebrow}</p>
          <h2 id="join-title" className="mt-3 font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl">{t.volunteer.title}</h2>
          <p className="mt-4 text-lg text-brand-soft/90">{t.volunteer.lede}</p>
        </header>
        <div className="rounded-3xl bg-ink/40 p-5 ring-1 ring-white/10 sm:p-8 lg:col-span-7">
          <VolunteerForm />
        </div>
      </div>
    </section>
  );
}
