import type { Article } from "@/types/website";

export const articles: Article[] = [
  {
    id: "article-1",
    title: {
      ar: "لماذا تصبح التجربة مطرحًا للحديث؟",
      en: "What Makes an Experience Worth Talking About?",
    },
    excerpt: {
      ar: "تحليل فريد للمعايير الرفيعة في اختيار الأماكن والأجواء التي تستحق التوثيق.",
      en: "A thoughtful look at the standards behind choosing places and atmospheres worth documenting.",
    },
    category: { ar: "رؤية", en: "Perspective" },
    date: { ar: "18 مايو 2025", en: "May 18, 2025" },
    href: "/articles/article-1",
  },
  {
    id: "article-2",
    title: {
      ar: "كيف تقود التفاصيل القصص المميزة؟",
      en: "How Do Details Shape Memorable Stories?",
    },
    excerpt: {
      ar: "قراءة عميقة في تجربة الضيافة التي تتجاوز الخدمة إلى الانطباع الدائم.",
      en: "A closer look at hospitality that goes beyond service to leave a lasting impression.",
    },
    category: { ar: "ثقافة", en: "Culture" },
    date: { ar: "12 مايو 2025", en: "May 12, 2025" },
    href: "/articles/article-2",
  },
  {
    id: "article-3",
    title: {
      ar: "درجات الترف في الوجهات السعودية",
      en: "Different Expressions of Luxury in Saudi Destinations",
    },
    excerpt: {
      ar: "نظرة على الأماكن التي تمنح الزوار تجربة استثنائية ومختلفة عن المعتاد.",
      en: "A look at places offering visitors an exceptional experience beyond the ordinary.",
    },
    category: { ar: "توجيه", en: "Guide" },
    date: { ar: "05 مايو 2025", en: "May 5, 2025" },
    href: "/articles/article-3",
  },
];
