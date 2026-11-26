import type { IssueCategoryId, LocalityId } from "./localities";

/**
 * Ward tracker. Constituencies follow the 2022 delimitation (AC 19–26, Srinagar district).
 * `onGround` must only contain activity backed by published coverage — add new items at the top.
 */
export type Ward = {
  id: Exclude<LocalityId, "other">;
  tagline?: { en: string; ur: string };
  focus: IssueCategoryId[];
  onGround: { en: string; ur: string }[];
};

const CIVIC: IssueCategoryId[] = ["roads", "drainage", "water-power", "employment"];

export const WARDS: Ward[] = [
  {
    id: "hazratbal",
    tagline: { en: "Delegation & convention", ur: "وفد اور کنونشن" },
    focus: ["roads", "drainage", "water-power", "employment"],
    onGround: [
      { en: "Nov 2026 — part of the Apni Party delegation from Hazratbal that raised residents' grievances with party president Altaf Bukhari.", ur: "نومبر ۲۰۲۶ — حضرت بل کے اپنی پارٹی وفد میں شامل جس نے پارٹی صدر الطاف بخاری کے سامنے عوامی مسائل اٹھائے۔" },
      { en: "Jul 2026 — present at the Apni Party workers' convention at Hazratbal.", ur: "جولائی ۲۰۲۶ — حضرت بل میں اپنی پارٹی کارکنوں کے کنونشن میں شرکت۔" },
    ],
  },
  { id: "khanyar", focus: ["roads", "drainage", "traffic", "employment"], onGround: [] },
  { id: "habba-kadal", focus: CIVIC, onGround: [] },
  { id: "lal-chowk", focus: ["traffic", "roads", "employment", "drainage"], onGround: [] },
  { id: "chanapora", focus: CIVIC, onGround: [] },
  {
    id: "zadibal",
    tagline: { en: "Achan garbage dump", ur: "اچھن کوڑا ڈمپ" },
    focus: ["drainage", "water-power", "roads", "employment"],
    onGround: [
      { en: "May 2026 — among Apni Party leaders who visited residents affected by the Achan garbage dump, at an event organised by the party's Zadibal constituency unit.", ur: "مئی ۲۰۲۶ — اچھن کوڑا ڈمپ سے متاثرہ مکینوں سے ملنے والے اپنی پارٹی رہنماؤں میں شامل۔" },
    ],
  },
  { id: "eidgah", focus: CIVIC, onGround: [] },
  { id: "central-shalteng", focus: CIVIC, onGround: [] },
];
