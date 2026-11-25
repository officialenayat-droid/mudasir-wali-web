export type LocalityId = "shaheed-gunj" | "hazratbal" | "brain-nishat" | "batwara" | "guru-bazar" | "other";

export const LOCALITIES: { id: LocalityId; en: string; ur: string }[] = [
  { id: "shaheed-gunj", en: "Shaheed Gunj", ur: "شہید گنج" },
  { id: "hazratbal", en: "Hazratbal", ur: "حضرت بل" },
  { id: "brain-nishat", en: "Brain Nishat", ur: "برین نشاط" },
  { id: "batwara", en: "Batwara", ur: "بٹوارہ" },
  { id: "guru-bazar", en: "Guru Bazar", ur: "گرو بازار" },
  { id: "other", en: "Other — District Srinagar", ur: "دیگر — ضلع سرینگر" },
];

export type IssueCategoryId = "roads" | "drainage" | "water-power" | "employment" | "traffic" | "education" | "other";

export const ISSUE_CATEGORIES: { id: IssueCategoryId; en: string; ur: string }[] = [
  { id: "roads", en: "Roads & Lanes", ur: "سڑکیں اور گلیاں" },
  { id: "drainage", en: "Drainage & Sanitation", ur: "نکاسی اور صفائی" },
  { id: "water-power", en: "Water & Electricity", ur: "پانی اور بجلی" },
  { id: "employment", en: "Youth Employment", ur: "نوجوانوں کا روزگار" },
  { id: "traffic", en: "Traffic & Road Safety", ur: "ٹریفک اور سڑک تحفظ" },
  { id: "education", en: "Education & Scholarships", ur: "تعلیم اور وظائف" },
  { id: "other", en: "Other", ur: "دیگر" },
];

export const localityName = (id: string, lang: "en" | "ur") =>
  LOCALITIES.find((l) => l.id === id)?.[lang] ?? id;
export const categoryName = (id: string, lang: "en" | "ur") =>
  ISSUE_CATEGORIES.find((c) => c.id === id)?.[lang] ?? id;
