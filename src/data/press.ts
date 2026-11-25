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
  /** Published news coverage backing this note. */
  sources?: { name: string; url: string }[];
};

export const PRESS_NOTES: PressNote[] = [
  {
    id: "hazratbal-delegation-nov-2026",
    dateLabel: "14 Nov 2026",
    category: "Civic",
    title: "Hazratbal delegation, including Mudasir Wali, raises public grievances with Altaf Bukhari",
    dek: "Party president assures the delegation that the issues will be taken up with the concerned authorities.",
    body: [
      "SRINAGAR — A delegation of Apni Party leaders and workers from the Hazratbal constituency, led by constituency in-charge Mohammad Sidiq Mir, called on party president Syed Mohammad Altaf Bukhari at the party headquarters in Srinagar on 14 November 2026. Mudasir Wali was part of the delegation.",
      "The delegation raised residents' grievances and organisational matters concerning the constituency. Bukhari assured them that the issues would be taken up with the concerned authorities.",
      "Residents with further grievances can register them through the Janata Darbar portal on this website, which issues a reference ticket for follow-up.",
    ],
    sources: [
      { name: "Rising Kashmir", url: "https://risingkashmir.com/politics/apni-party-leaders-flag-hazratbal-grievances-12810031" },
      { name: "Greater Kashmir", url: "https://www.greaterkashmir.com/politics/altaf-bukhari-meets-party-delegation-from-hazratbal-discusses-public-issues-12810423" },
    ],
  },
  {
    id: "apni-party-induction-2026",
    dateLabel: "7 May 2026",
    category: "Politics",
    image: { src: "/photos/joining-drive.webp", alt: "Youth joining drive, J&K Apni Party" },
    title: "Mudasir Wali joins J&K Apni Party in Srinagar",
    dek: "Shaheed Gunj political and social activist joins the party with his associates under party president Syed Mohammad Altaf Bukhari.",
    body: [
      "SRINAGAR — Mudasir Wali, a political and social activist from Shaheed Gunj, Srinagar, joined the Jammu & Kashmir Apni Party along with his associates at a special event held at the party headquarters in Srinagar to welcome new entrants.",
      "The event was addressed by party president Syed Mohammad Altaf Bukhari, who urged a meaningful dialogue process with the youth of Jammu & Kashmir.",
      "Wali has since taken up responsibilities in the party's Srinagar organisation, working on youth mobilisation and the representation of public issues.",
    ],
    sources: [
      { name: "Greater Kashmir", url: "https://www.greaterkashmir.com/politics/jks-youth-have-to-make-meaningful-beginning-through-dialogue-process-altaf-bukhari-11811917" },
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
    ...(n.sources?.length ? [`Reported by: ${n.sources.map((x) => `${x.name} (${x.url})`).join("; ")}`, ""] : []),
    "—",
    "Issued by: Office of Mudasir Wali, Joint Secretary, District Srinagar, J&K Apni Party",
    "Instagram: @walimudasirr",
    `Web: ${siteUrl}`,
  ].join("\n");
}
