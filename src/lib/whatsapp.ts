import { SITE } from "../config/site";

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return SITE.whatsappNumber ? `https://wa.me/${SITE.whatsappNumber}?text=${text}` : `https://wa.me/?text=${text}`;
}

/** Accepts 10-digit Indian mobiles with optional +91 / 0 prefix. */
export function normalizeIndianMobile(raw: string): string | null {
  const digits = raw.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? `+91 ${digits.slice(0, 5)} ${digits.slice(5)}` : null;
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}
