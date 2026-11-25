import { useEffect, useId, useState, type FormEvent } from "react";
import { Check, ClipboardCopy, RotateCcw, Ticket } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { ISSUE_CATEGORIES, LOCALITIES, categoryName, localityName } from "../data/localities";
import { generateTicketId } from "../lib/ticket";
import { copyText, normalizeIndianMobile, whatsappLink } from "../lib/whatsapp";
import { PREFILL_EVENT, type GrievancePrefill } from "../lib/prefill";
import { Section } from "./Section";
import { WhatsAppIcon } from "./icons";

type Form = { name: string; locality: string; category: string; description: string; phone: string };
const EMPTY: Form = { name: "", locality: "", category: "", description: "", phone: "" };

export function JanataDarbar() {
  const { lang, t } = useLang();
  const uid = useId();
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [ticket, setTicket] = useState<{ id: string; message: string } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onPrefill = (e: Event) => {
      const d = (e as CustomEvent<GrievancePrefill>).detail;
      setTicket(null);
      setForm((f) => ({ ...f, locality: d.locality ?? f.locality, category: d.category ?? f.category }));
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const set = (k: keyof Form) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    (["name", "locality", "category", "description"] as const).forEach((k) => {
      if (!form[k].trim()) next[k] = t.darbar.required;
    });
    const phone = normalizeIndianMobile(form.phone);
    if (!phone) next.phone = t.darbar.phoneInvalid;
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`${uid}-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    const id = generateTicketId();
    const message = [
      `*Janata Darbar — Grievance ${id}*`,
      "",
      `*Name:* ${form.name.trim()}`,
      `*Locality:* ${localityName(form.locality, "en")}`,
      `*Category:* ${categoryName(form.category, "en")}`,
      `*WhatsApp:* ${phone}`,
      "",
      `*Issue:*`,
      form.description.trim(),
      "",
      "_Sent via the Janata Darbar portal — Team Mudasir Wali_",
    ].join("\n");
    setTicket({ id, message });
    setCopied(false);
    requestAnimationFrame(() => document.getElementById(`${uid}-ticket`)?.focus());
  };

  const reset = () => {
    setForm(EMPTY);
    setTicket(null);
  };

  const err = (k: keyof Form) =>
    errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-1.5 text-sm font-medium text-red-700">
        {errors[k]}
      </p>
    ) : null;
  const a11y = (k: keyof Form) => ({
    id: `${uid}-${k}`,
    "aria-invalid": !!errors[k] || undefined,
    "aria-describedby": errors[k] ? `${uid}-${k}-err` : undefined,
  });

  return (
    <Section id="darbar" eyebrow={t.darbar.eyebrow} title={t.darbar.title} lede={t.darbar.lede}>
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {!ticket ? (
            <form noValidate onSubmit={submit} className="space-y-5 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div>
                <label htmlFor={`${uid}-name`} className="label">{t.darbar.name}</label>
                <input {...a11y("name")} className="field" autoComplete="name" placeholder={t.darbar.namePh} value={form.name} onChange={(e) => set("name")(e.target.value)} />
                {err("name")}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${uid}-locality`} className="label">{t.darbar.locality}</label>
                  <select {...a11y("locality")} className="field" value={form.locality} onChange={(e) => set("locality")(e.target.value)}>
                    <option value="">{t.darbar.select}</option>
                    {LOCALITIES.map((l) => <option key={l.id} value={l.id}>{l[lang]}</option>)}
                  </select>
                  {err("locality")}
                </div>
                <div>
                  <label htmlFor={`${uid}-category`} className="label">{t.darbar.category}</label>
                  <select {...a11y("category")} className="field" value={form.category} onChange={(e) => set("category")(e.target.value)}>
                    <option value="">{t.darbar.select}</option>
                    {ISSUE_CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c[lang]}</option>)}
                  </select>
                  {err("category")}
                </div>
              </div>
              <div>
                <label htmlFor={`${uid}-description`} className="label">{t.darbar.description}</label>
                <textarea {...a11y("description")} rows={5} maxLength={1200} className="field resize-y" placeholder={t.darbar.descriptionPh} value={form.description} onChange={(e) => set("description")(e.target.value)} />
                {err("description")}
              </div>
              <div>
                <label htmlFor={`${uid}-phone`} className="label">{t.darbar.whatsapp}</label>
                <div className="flex" dir="ltr">
                  <span className="inline-flex items-center rounded-s-xl border border-e-0 border-slate-300 bg-slate-50 px-3 text-slate-600">+91</span>
                  <input {...a11y("phone")} type="tel" inputMode="numeric" autoComplete="tel-national" className="field rounded-s-none" placeholder="9XXXXXXXXX" value={form.phone} onChange={(e) => set("phone")(e.target.value)} />
                </div>
                {err("phone")}
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Ticket className="size-4" aria-hidden="true" />
                {t.darbar.submit}
              </button>
              <p className="text-xs text-slate-500">{t.darbar.privacy}</p>
            </form>
          ) : (
            <div id={`${uid}-ticket`} tabIndex={-1} role="status" className="rounded-3xl bg-ink p-6 text-paper outline-none sm:p-8">
              <p className="eyebrow text-amber-400!">{t.darbar.ticketTitle}</p>
              <p className="mt-3 font-mono text-3xl font-bold tracking-wider text-gold sm:text-4xl" dir="ltr">{ticket.id}</p>
              <p className="mt-4 text-slate-300">{t.darbar.ticketNote}</p>
              <pre className="mt-6 max-h-60 overflow-auto whitespace-pre-wrap rounded-2xl bg-white/5 p-4 text-start font-sans text-sm text-slate-200" dir="ltr">{ticket.message.replace(/\*|_/g, "")}</pre>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={whatsappLink(ticket.message)} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-ink hover:bg-[#1ebe5b]">
                  <WhatsAppIcon className="size-5" />
                  {t.darbar.send}
                </a>
                <button type="button" className="btn-ghost text-paper hover:bg-white/10" onClick={async () => setCopied(await copyText(ticket.message.replace(/\*|_/g, "")))}>
                  {copied ? <Check className="size-4" aria-hidden="true" /> : <ClipboardCopy className="size-4" aria-hidden="true" />}
                  {copied ? t.darbar.copied : t.darbar.copy}
                </button>
                <button type="button" className="btn text-slate-300 hover:text-white" onClick={reset}>
                  <RotateCcw className="size-4" aria-hidden="true" />
                  {t.darbar.newTicket}
                </button>
              </div>
            </div>
          )}
        </div>

        <aside className="lg:col-span-5">
          <ol className="space-y-4">
            {(lang === "en"
              ? ["Fill in your details and the issue.", "Get an instant reference ticket (MW-SRN-…).", "Send it to the team on WhatsApp in one tap.", "Quote your ticket number for every follow-up."]
              : ["اپنی تفصیلات اور مسئلہ درج کریں۔", "فوری حوالہ نمبر حاصل کریں (MW-SRN-…)۔", "ایک ٹچ میں واٹس ایپ پر ٹیم کو بھیجیں۔", "ہر پیروی کے لیے اپنا حوالہ نمبر بتائیں۔"]
            ).map((step, i) => (
              <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-forest-tint font-serif text-xl text-forest">{i + 1}</span>
                <span className="pt-1.5 text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </Section>
  );
}
