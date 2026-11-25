/**
 * Photo gallery. Captions describe the event only — never name people who
 * haven't been confirmed. Files live in /public/photos (WebP, ≤1200px).
 */
export type Photo = { src: string; w: number; h: number; en: string; ur: string };

export const GALLERY: Photo[] = [
  { src: "/photos/podium.webp", w: 900, h: 1200, en: "Addressing party workers", ur: "پارٹی کارکنوں سے خطاب" },
  { src: "/photos/joining-drive.webp", w: 1200, h: 900, en: "Youth joining drive, J&K Apni Party", ur: "اپنی پارٹی میں نوجوانوں کی شمولیتی مہم" },
  { src: "/photos/welcome.webp", w: 1200, h: 675, en: "Welcoming new members", ur: "نئے اراکین کا استقبال" },
  { src: "/photos/youth-joining.webp", w: 1200, h: 900, en: "Young people joining the party", ur: "نوجوانوں کی پارٹی میں شمولیت" },
  { src: "/photos/with-leadership.webp", w: 661, h: 1200, en: "At the youth joining event", ur: "شمولیتی تقریب میں" },
  { src: "/photos/party-meeting.webp", w: 1200, h: 900, en: "Party meeting", ur: "پارٹی اجلاس" },
  { src: "/photos/joining-group.webp", w: 1200, h: 900, en: "New members at the party office", ur: "پارٹی دفتر میں نئے اراکین" },
  { src: "/photos/podium-2.webp", w: 799, h: 1200, en: "Speaking to a youth gathering", ur: "نوجوانوں کے اجتماع سے خطاب" },
  { src: "/photos/outdoor-youth.webp", w: 1200, h: 900, en: "With youth members", ur: "نوجوان اراکین کے ساتھ" },
];
