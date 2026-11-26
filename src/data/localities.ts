/** Srinagar district's eight assembly constituencies (2022 delimitation, AC 19–26). */
export type LocalityId =
  | "hazratbal" | "khanyar" | "habba-kadal" | "lal-chowk" | "chanapora" | "zadibal" | "eidgah" | "central-shalteng"
  | "other";

export type LocalityGroup = "constituency" | "other";

export const LOCALITIES: { id: LocalityId; en: string; ur: string; group: LocalityGroup; ac?: number }[] = [
  { id: "hazratbal", en: "Hazratbal", ur: "حضرت بل", group: "constituency", ac: 19 },
  { id: "khanyar", en: "Khanyar", ur: "خانیار", group: "constituency", ac: 20 },
  { id: "habba-kadal", en: "Habba Kadal", ur: "حبہ کدل", group: "constituency", ac: 21 },
  { id: "lal-chowk", en: "Lal Chowk", ur: "لال چوک", group: "constituency", ac: 22 },
  { id: "chanapora", en: "Chanapora", ur: "چھانہ پورہ", group: "constituency", ac: 23 },
  { id: "zadibal", en: "Zadibal", ur: "زڈی بل", group: "constituency", ac: 24 },
  { id: "eidgah", en: "Eidgah", ur: "عیدگاہ", group: "constituency", ac: 25 },
  { id: "central-shalteng", en: "Central Shalteng", ur: "سینٹرل شالٹینگ", group: "constituency", ac: 26 },
  { id: "other", en: "Other area — Kashmir", ur: "دیگر علاقہ — کشمیر", group: "other" },
];

export const LOCALITY_GROUP_LABEL: Record<LocalityGroup, { en: string; ur: string }> = {
  constituency: { en: "Srinagar assembly constituencies", ur: "سرینگر کے اسمبلی حلقے" },
  other: { en: "Elsewhere", ur: "دیگر" },
};

export type IssueCategoryId = "roads" | "drainage" | "water-power" | "employment" | "traffic" | "education" | "other";

export const ISSUE_CATEGORIES: { id: IssueCategoryId; en: string; ur: string }[] = [
  { id: "roads", en: "Roads & Lanes", ur: "سڑکیں اور گلیاں" },
  { id: "drainage", en: "Drainage & Sanitation", ur: "نکاسی اور صفائی" },
  { id: "water-power", en: "Water & Electricity", ur: "پانی اور بجلی" },
  { id: "employment", en: "Youth Employment", ur: "نوجوانوں کا روزگار" },
  { id: "traffic", en: "Traffic & Transport", ur: "ٹریفک اور ٹرانسپورٹ" },
  { id: "education", en: "Education & Scholarships", ur: "تعلیم اور وظائف" },
  { id: "other", en: "Other", ur: "دیگر" },
];

export const localityName = (id: string, lang: "en" | "ur") =>
  LOCALITIES.find((l) => l.id === id)?.[lang] ?? id;
export const categoryName = (id: string, lang: "en" | "ur") =>
  ISSUE_CATEGORIES.find((c) => c.id === id)?.[lang] ?? id;
