export type PillarId = "politics" | "grievances" | "youth" | "welfare";

export type Pillar = {
  id: PillarId;
  en: { title: string; summary: string; points: string[] };
  ur: { title: string; summary: string; points: string[] };
  image?: { src: string; en: string; ur: string };
};

/** The Four Pillars. No road-safety or religious-service content (client decision); pillar 4 uses the client's own bio wording. */
export const PILLARS: Pillar[] = [
  {
    id: "politics",
    image: { src: "/photos/podium.webp", en: "Mudasir Wali addressing party workers", ur: "مدثر ولی پارٹی کارکنوں سے خطاب کرتے ہوئے" },
    en: {
      title: "Political Leadership & Youth Mobilization",
      summary:
        "Joint Secretary, District Srinagar, Jammu & Kashmir Apni Party — inducted in May 2026 in Srinagar under party president Syed Mohammad Altaf Bukhari.",
      points: [
        "Representing Srinagar's youth within J&K Apni Party",
        "Leading youth joining drives across District Srinagar",
        "Strengthening the party's ground organisation across Srinagar's wards",
      ],
    },
    ur: {
      title: "سیاسی قیادت اور نوجوانوں کی تحریک",
      summary:
        "جوائنٹ سیکریٹری، ضلع سرینگر، جموں و کشمیر اپنی پارٹی — مئی ۲۰۲۶ میں سرینگر میں پارٹی صدر سید محمد الطاف بخاری کی قیادت میں شمولیت۔",
      points: [
        "اپنی پارٹی میں سرینگر کے نوجوانوں کی نمائندگی",
        "ضلع سرینگر میں نوجوانوں کی شمولیتی مہمات کی قیادت",
        "سرینگر کے وارڈوں میں پارٹی کی زمینی تنظیم کو مضبوط بنانا",
      ],
    },
  },
  {
    id: "grievances",
    en: {
      title: "Constituency Grievances & Public Delegations",
      summary:
        "Taking part in public delegations that flag civic grievances — including the Hazratbal delegation to the party president in November 2026 — and following them up.",
      points: [
        "Taking up roads, drainage, water and power issues",
        "Janata Darbar portal: every grievance gets a reference ticket",
        "Covering all eight Srinagar constituencies, from Hazratbal to Central Shalteng",
      ],
    },
    ur: {
      title: "حلقے کے مسائل اور عوامی وفود",
      summary: "شہری مسائل اٹھانے والے عوامی وفود میں شرکت — بشمول نومبر ۲۰۲۶ میں پارٹی صدر سے ملنے والا حضرت بل کا وفد — اور ان کی پیروی۔",
      points: [
        "سڑکوں، نکاسی، پانی اور بجلی کے مسائل اٹھانا",
        "جنتا دربار پورٹل: ہر شکایت کا حوالہ نمبر",
        "سرینگر کے تمام آٹھ حلقے — حضرت بل سے سینٹرل شالٹینگ تک",
      ],
    },
  },
  {
    id: "youth",
    en: {
      title: "Youth Employment & Representation",
      summary:
        "A direct line for Kashmir's young people on employment, opportunity and their say in local decision-making.",
      points: [
        "Raising youth employment as a constituency priority",
        "Bringing young people into party work and decision-making",
        "A direct WhatsApp helpline to the team",
      ],
    },
    ur: {
      title: "نوجوانوں کا روزگار اور نمائندگی",
      summary: "کشمیر کے نوجوانوں کے لیے روزگار، مواقع اور مقامی فیصلوں میں ان کی آواز کے لیے براہِ راست رابطہ۔",
      points: [
        "نوجوانوں کے روزگار کو حلقے کی ترجیح بنانا",
        "نوجوانوں کو پارٹی کام اور فیصلہ سازی میں شامل کرنا",
        "ٹیم سے براہِ راست واٹس ایپ ہیلپ لائن",
      ],
    },
  },
  {
    id: "welfare",
    en: {
      title: "Public Welfare & Social Change",
      summary:
        "Committed to public welfare and positive social change — raising public concerns and promoting community development.",
      points: [
        "Raising public concerns with unity and responsibility",
        "Promoting community development across Kashmir",
        "Encouraging young people to become responsible leaders",
      ],
    },
    ur: {
      title: "عوامی فلاح اور سماجی تبدیلی",
      summary: "عوامی فلاح اور مثبت سماجی تبدیلی کے لیے پُرعزم — عوامی مسائل اٹھانا اور سماجی ترقی کو فروغ دینا۔",
      points: [
        "اتحاد اور ذمہ داری کے ساتھ عوامی مسائل اٹھانا",
        "پورے کشمیر میں سماجی ترقی کو فروغ دینا",
        "نوجوانوں کو ذمہ دار رہنما بننے کی ترغیب دینا",
      ],
    },
  },
];
