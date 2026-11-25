/** Central public configuration. Edit here, not in components. */
export const SITE = {
  name: "Mudasir Wali",
  url: (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://mudasir-wali.vercel.app",
  role: "Youth Wing Joint Secretary, District Srinagar",
  party: "Jammu & Kashmir Apni Party",
  partyShort: "J&K Apni Party",
  partyPresident: "Syed Mohammad Altaf Bukhari",
  instagram: "walimudasirr",
  instagramUrl: "https://www.instagram.com/walimudasirr/",
  krsfInstagramUrl: "https://www.instagram.com/krsf_org/",
  /** Digits only, international format. Empty → WhatsApp lets the sender pick a contact. */
  whatsappNumber: ((import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? "").replace(/\D/g, ""),
  /** Optional portrait at /public/portrait.jpg — a monogram is shown if missing. */
  portraitSrc: "/portrait.jpg",
} as const;
