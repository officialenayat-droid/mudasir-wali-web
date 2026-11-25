/** Central public configuration. Edit here, not in components. */
export const SITE = {
  name: "Mudasir Wali",
  url: (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://mudasir-wali.vercel.app",
  role: "Joint Secretary, District Srinagar",
  party: "Jammu & Kashmir Apni Party",
  partyShort: "J&K Apni Party",
  partyPresident: "Syed Mohammad Altaf Bukhari",
  /** Official J&K Apni Party channels (from jkapniparty.com). */
  partyLinks: {
    website: "https://www.jkapniparty.com/",
    join: "https://www.jkapniparty.com/join-us/",
    about: "https://www.jkapniparty.com/about-us/",
    facebook: "https://www.facebook.com/Apnipartyonline/",
    x: "https://x.com/Apnipartyonline",
    instagram: "https://www.instagram.com/apnipartyofficial/",
    youtube: "https://www.youtube.com/apnipartyonline",
  },
  instagram: "walimudasirr",
  instagramUrl: "https://www.instagram.com/walimudasirr/",
  /** Digits only, international format. Empty → WhatsApp lets the sender pick a contact. */
  whatsappNumber: ((import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? "").replace(/\D/g, ""),
  /** Main portrait (photo 2 of the supplied set). A monogram is shown if it fails to load. */
  portraitSrc: "/photos/portrait.webp",
} as const;
