/**
 * Press notes. Keep every line factual and verifiable.
 * Team: replace `dateLabel` with exact dates and add photos/sources when filing new notes.
 */
export type PressNote = {
  id: string;
  dateLabel: string;
  category: "Politics" | "Civic";
  title: string;
  dek: string;
  body: string[];
  image?: { src: string; alt: string };
};

export const PRESS_NOTES: PressNote[] = [
  {
    id: "apni-party-induction-2026",
    dateLabel: "May 2026",
    category: "Politics",
    image: { src: "/photos/joining-drive.webp", alt: "Youth joining drive, J&K Apni Party" },
    title: "Mudasir Wali joins J&K Apni Party, named Joint Secretary for District Srinagar",
    dek: "Shaheed Gunj youth leader formally inducted in Srinagar under party president Syed Mohammad Altaf Bukhari.",
    body: [
      "SRINAGAR — Mudasir Wali, a youth leader from Shaheed Gunj, Srinagar, joined the Jammu & Kashmir Apni Party in May 2026 in Srinagar under party president Syed Mohammad Altaf Bukhari.",
      "He has been entrusted with the responsibility of Joint Secretary, District Srinagar, and will work on youth mobilization, joining drives and the representation of civic issues across the district.",
    ],
  },
  {
    id: "hazratbal-delegation",
    dateLabel: "2026",
    category: "Civic",
    title: "Delegation led by Mudasir Wali flags civic grievances of Hazratbal constituency",
    dek: "Joint Secretary heads public delegation on local civic issues.",
    body: [
      "SRINAGAR — A public delegation headed by Mudasir Wali, Joint Secretary, District Srinagar, J&K Apni Party, flagged civic grievances of the Hazratbal constituency.",
      "The delegation raised issues of public concern on behalf of residents. Residents with further grievances can register them through the Janata Darbar portal on the official website, which issues a reference ticket for follow-up.",
    ],
  },
];

export function formatPressNote(n: PressNote, siteUrl: string): string {
  return [
    `PRESS NOTE — ${n.dateLabel}`,
    "",
    n.title.toUpperCase(),
    "",
    n.dek,
    "",
    ...n.body.flatMap((p) => [p, ""]),
    "—",
    "Issued by: Office of Mudasir Wali, Joint Secretary, District Srinagar, J&K Apni Party",
    "Instagram: @walimudasirr",
    `Web: ${siteUrl}`,
  ].join("\n");
}
