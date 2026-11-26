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
