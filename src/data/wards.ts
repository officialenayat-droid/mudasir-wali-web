import type { IssueCategoryId, LocalityId } from "./localities";

/**
 * Ward tracker data. `onGround` must only contain verified, public activity.
 * Team: add new delegation updates at the top of each list as they happen.
 */
export type Ward = {
  id: Exclude<LocalityId, "other">;
  tagline: { en: string; ur: string };
  focus: IssueCategoryId[];
  onGround: { en: string; ur: string }[];
};

export const WARDS: Ward[] = [
  {
    id: "shaheed-gunj",
    tagline: { en: "Home locality", ur: "آبائی علاقہ" },
    focus: ["roads", "drainage", "employment", "traffic"],
    onGround: [
      { en: "Home base for youth outreach and the Janata Darbar helpline.", ur: "نوجوانوں سے رابطے اور جنتا دربار ہیلپ لائن کا مرکز۔" },
    ],
  },
  {
    id: "hazratbal",
    tagline: { en: "Constituency delegation", ur: "حلقہ جاتی وفد" },
    focus: ["roads", "drainage", "water-power", "employment"],
    onGround: [
      { en: "Nov 2026 — part of the Apni Party delegation from Hazratbal that raised residents' grievances with party president Altaf Bukhari.", ur: "نومبر ۲۰۲۶ — حضرت بل کے اپنی پارٹی وفد میں شامل جس نے پارٹی صدر الطاف بخاری کے سامنے عوامی مسائل اٹھائے۔" },
      { en: "Jul 2026 — present at the Apni Party workers' convention at Hazratbal.", ur: "جولائی ۲۰۲۶ — حضرت بل میں اپنی پارٹی کارکنوں کے کنونشن میں شرکت۔" },
    ],
  },
  {
    id: "brain-nishat",
    tagline: { en: "Dal-side outreach", ur: "ڈل کنارے رابطہ" },
    focus: ["roads", "traffic", "employment", "drainage"],
    onGround: [],
  },
  {
    id: "batwara",
    tagline: { en: "Youth outreach", ur: "نوجوانوں سے رابطہ" },
    focus: ["drainage", "roads", "employment", "traffic"],
    onGround: [],
  },
  {
    id: "guru-bazar",
    tagline: { en: "Constituency outreach", ur: "حلقہ جاتی رابطہ" },
    focus: ["traffic", "roads", "drainage", "employment"],
    onGround: [],
  },
];
