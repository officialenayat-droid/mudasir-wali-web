/**
 * Photo gallery. Captions describe the event only — never name people who
 * haven't been confirmed. (LG Manoj Sinha in the courtesy-meeting photo: confirmed by the client.) Files live in /public/photos (WebP, ≤1200px).
 */
export type Photo = { src: string; w: number; h: number; en: string; ur: string };

export const GALLERY: Photo[] = [
  { src: "/photos/lg-courtesy-meeting.webp", w: 1063, h: 1200, en: "Courtesy meeting with Lieutenant Governor Manoj Sinha", ur: "لیفٹیننٹ گورنر منوج سنہا سے خیر سگالی ملاقات" },
  { src: "/photos/podium.webp", w: 900, h: 1200, en: "Addressing party workers", ur: "پارٹی کارکنوں سے خطاب" },
  { src: "/photos/joining-drive.webp", w: 1200, h: 900, en: "Youth joining drive, J&K Apni Party", ur: "اپنی پارٹی میں نوجوانوں کی شمولیتی مہم" },
  { src: "/photos/joining-banner.webp", w: 1200, h: 900, en: "New members in front of the party banner", ur: "پارٹی بینر کے سامنے نئے اراکین" },
  { src: "/photos/welcome.webp", w: 1200, h: 675, en: "Welcoming new members", ur: "نئے اراکین کا استقبال" },
  { src: "/photos/youth-joining.webp", w: 1200, h: 900, en: "Young people joining the party", ur: "نوجوانوں کی پارٹی میں شمولیت" },
  { src: "/photos/with-leadership.webp", w: 661, h: 1200, en: "At the youth joining event", ur: "شمولیتی تقریب میں" },
  { src: "/photos/party-meeting.webp", w: 1200, h: 900, en: "Party meeting", ur: "پارٹی اجلاس" },
  { src: "/photos/joining-group.webp", w: 1200, h: 900, en: "New members at the party office", ur: "پارٹی دفتر میں نئے اراکین" },
  { src: "/photos/podium-2.webp", w: 799, h: 1200, en: "Speaking to a youth gathering", ur: "نوجوانوں کے اجتماع سے خطاب" },
  { src: "/photos/outdoor-youth.webp", w: 1200, h: 900, en: "With youth members", ur: "نوجوان اراکین کے ساتھ" },
];

/** Event clips from @walimudasirr (H.264, 540×960, faststart). Posters are frames from each clip. */
export type Clip = { src: string; poster: string; w: number; h: number; en: string; ur: string };

export const VIDEOS: Clip[] = [
  { src: "/videos/induction.mp4", poster: "/videos/induction.jpg", w: 540, h: 960, en: "Induction into J&K Apni Party", ur: "جموں و کشمیر اپنی پارٹی میں شمولیت" },
  { src: "/videos/joining-day.mp4", poster: "/videos/joining-day.jpg", w: 540, h: 960, en: "Joining day — party meeting and media interaction", ur: "شمولیت کا دن — پارٹی اجلاس اور میڈیا سے گفتگو" },
  { src: "/videos/addressing-workers.mp4", poster: "/videos/addressing-workers.jpg", w: 540, h: 960, en: "Addressing party workers and welcoming youth", ur: "پارٹی کارکنوں سے خطاب اور نوجوانوں کا استقبال" },
  { src: "/videos/public-gathering.mp4", poster: "/videos/public-gathering.jpg", w: 540, h: 960, en: "Public gathering with party workers", ur: "پارٹی کارکنوں کے ساتھ عوامی اجتماع" },
  { src: "/videos/with-residents.mp4", poster: "/videos/with-residents.jpg", w: 540, h: 960, en: "On the ground with residents and the media", ur: "عوام اور میڈیا کے ساتھ زمینی سطح پر" },
];
