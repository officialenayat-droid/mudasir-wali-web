/**
 * Press notes. Keep every line factual and verifiable.
 * Team: replace `dateLabel` with exact dates and add photos/sources when filing new notes.
 */
export type PressNote = {
  id: string;
  dateLabel: string;
  category: "Politics" | "Civic" | "Road Safety" | "Community";
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
    title: "Mudasir Wali joins J&K Apni Party, named Youth Wing Joint Secretary for District Srinagar",
    dek: "Shaheed Gunj youth leader formally inducted in Srinagar under party president Syed Mohammad Altaf Bukhari.",
    body: [
      "SRINAGAR — Mudasir Wali, a youth leader and community volunteer from Shaheed Gunj, Srinagar, joined the Jammu & Kashmir Apni Party in May 2026 in Srinagar under party president Syed Mohammad Altaf Bukhari.",
      "He has been entrusted with the responsibility of Youth Wing Joint Secretary, District Srinagar, and will work on youth mobilization, joining drives and the representation of civic issues across the district.",
      "Wali is known locally for his road-safety advocacy with the Kashmir Road Safety Foundation and his long-standing volunteer work with the Yadgar-i-Hussaini committee.",
    ],
  },
  {
    id: "hazratbal-delegation",
    dateLabel: "2026",
    category: "Civic",
    title: "Delegation led by Mudasir Wali flags civic grievances of Hazratbal constituency",
    dek: "Youth Wing Joint Secretary heads public delegation on local civic issues.",
    body: [
      "SRINAGAR — A public delegation headed by Mudasir Wali, Youth Wing Joint Secretary, District Srinagar, J&K Apni Party, flagged civic grievances of the Hazratbal constituency.",
      "The delegation raised issues of public concern on behalf of residents. Residents with further grievances can register them through the Janata Darbar portal on the official website, which issues a reference ticket for follow-up.",
    ],
  },
  {
    id: "krsf-road-safety",
    dateLabel: "Ongoing",
    category: "Road Safety",
    title: "Mudasir Wali backs Kashmir Road Safety Foundation's awareness drives in Srinagar",
    dek: "School and college road-safety awareness and traffic discipline initiatives alongside J&K Traffic Police.",
    body: [
      "SRINAGAR — Mudasir Wali is an active collaborator and advocate with the Kashmir Road Safety Foundation (KRSF), supporting its road-safety awareness programmes in schools and colleges.",
      "The initiatives promote traffic discipline among young people and are carried out alongside the J&K Traffic Police.",
      "Young people interested in volunteering for road-safety work can register through the Youth Wing sign-up on the official website.",
    ],
  },
  {
    id: "yadgar-i-hussaini-service",
    dateLabel: "2024 – 2026",
    category: "Community",
    title: "Years of service with Yadgar-i-Hussaini committee in Srinagar",
    dek: "Volunteer coordination for major community gatherings, including the 8th Muharram procession from Guru Bazar.",
    body: [
      "SRINAGAR — Mudasir Wali has been a long-standing volunteer with the Yadgar-i-Hussaini committee in Srinagar.",
      "He has coordinated ground logistics for major community gatherings, including the 8th Muharram procession from Guru Bazar.",
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
    "Issued by: Office of Mudasir Wali, Youth Wing Joint Secretary, District Srinagar, J&K Apni Party",
    "Instagram: @walimudasirr",
    `Web: ${siteUrl}`,
  ].join("\n");
}
