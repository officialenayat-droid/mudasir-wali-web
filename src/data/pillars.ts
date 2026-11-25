export type PillarId = "politics" | "road-safety" | "community" | "youth";

export type Pillar = {
  id: PillarId;
  en: { title: string; summary: string; points: string[] };
  ur: { title: string; summary: string; points: string[] };
  partner?: { name: string; url?: string };
  image?: { src: string; en: string; ur: string };
};

export const PILLARS: Pillar[] = [
  {
    id: "politics",
    image: { src: "/photos/podium.webp", en: "Mudasir Wali addressing party workers", ur: "مدثر ولی پارٹی کارکنوں سے خطاب کرتے ہوئے" },
    en: {
      title: "Political Leadership & Youth Mobilization",
      summary:
        "Youth Wing Joint Secretary, District Srinagar, Jammu & Kashmir Apni Party — inducted in May 2026 in Srinagar under party president Syed Mohammad Altaf Bukhari.",
      points: [
        "Representing Srinagar's youth within J&K Apni Party",
        "Leading youth joining drives across District Srinagar",
        "Heading public delegations, including civic grievances for the Hazratbal constituency",
      ],
    },
    ur: {
      title: "سیاسی قیادت اور نوجوانوں کی تحریک",
      summary:
        "جوائنٹ سیکریٹری یوتھ ونگ، ضلع سرینگر، جموں و کشمیر اپنی پارٹی — مئی ۲۰۲۶ میں سرینگر میں پارٹی صدر سید محمد الطاف بخاری کی قیادت میں شمولیت۔",
      points: [
        "اپنی پارٹی میں سرینگر کے نوجوانوں کی نمائندگی",
        "ضلع سرینگر میں نوجوانوں کی شمولیتی مہمات کی قیادت",
        "عوامی وفود کی سربراہی، بشمول حلقہ حضرت بل کے شہری مسائل",
      ],
    },
  },
  {
    id: "road-safety",
    image: { src: "/photos/road-safety-ambulances.webp", en: "Ambulance handover event, NHIDCL", ur: "ایمبولینس حوالگی تقریب" },
    en: {
      title: "Road Safety & Civic Advocacy",
      summary:
        "Active collaborator and advocate with the Kashmir Road Safety Foundation (KRSF), supporting awareness and traffic discipline initiatives alongside J&K Traffic Police.",
      points: [
        "Road-safety awareness in schools and colleges",
        "Traffic discipline initiatives with J&K Traffic Police",
        "Civic advocacy for safer streets in Srinagar",
      ],
    },
    ur: {
      title: "سڑک تحفظ اور شہری وکالت",
      summary:
        "کشمیر روڈ سیفٹی فاؤنڈیشن (KRSF) کے ساتھ سرگرم شراکت دار، جموں و کشمیر ٹریفک پولیس کے ہمراہ آگاہی اور ٹریفک نظم و ضبط کی مہمات میں معاون۔",
      points: [
        "اسکولوں اور کالجوں میں سڑک تحفظ کی آگاہی",
        "ٹریفک پولیس کے ساتھ ٹریفک نظم و ضبط کی مہمات",
        "سرینگر کی محفوظ سڑکوں کے لیے شہری وکالت",
      ],
    },
    partner: { name: "@krsf_org", url: "https://www.instagram.com/krsf_org/" },
  },
  {
    id: "community",
    en: {
      title: "Grassroots Community & Heritage Service",
      summary:
        "Long-standing volunteer with the Yadgar-i-Hussaini committee in Srinagar, coordinating ground logistics for major community gatherings.",
      points: [
        "Ground logistics for the 8th Muharram procession from Guru Bazar",
        "Coordinating volunteers for large community gatherings",
        "Preserving Srinagar's shared heritage and traditions",
      ],
    },
    ur: {
      title: "زمینی سماجی و ثقافتی خدمت",
      summary: "سرینگر میں یادگارِ حسینی کمیٹی کے دیرینہ رضاکار، بڑے عوامی اجتماعات کے زمینی انتظامات میں سرگرم۔",
      points: [
        "گرو بازار سے آٹھویں محرم کے جلوس کے انتظامات",
        "بڑے اجتماعات کے لیے رضاکاروں کی رہنمائی",
        "سرینگر کی مشترکہ وراثت اور روایات کا تحفظ",
      ],
    },
  },
  {
    id: "youth",
    en: {
      title: "Youth Empowerment & Social Justice",
      summary:
        "A direct constituency helpline for employment, civic infrastructure, and youth representation — every grievance gets a reference number.",
      points: [
        "Janata Darbar grievance portal with ticketed follow-up",
        "Employment and opportunity guidance for young people",
        "Youth representation in local decision-making",
      ],
    },
    ur: {
      title: "نوجوانوں کو بااختیار بنانا اور سماجی انصاف",
      summary: "روزگار، شہری ڈھانچے اور نوجوانوں کی نمائندگی کے لیے براہِ راست ہیلپ لائن — ہر شکایت کا حوالہ نمبر۔",
      points: [
        "حوالہ نمبر کے ساتھ جنتا دربار شکایتی پورٹل",
        "نوجوانوں کے لیے روزگار اور مواقع کی رہنمائی",
        "مقامی فیصلوں میں نوجوانوں کی نمائندگی",
      ],
    },
  },
];
