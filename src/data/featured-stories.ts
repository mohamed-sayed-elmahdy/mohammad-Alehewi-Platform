import type { LocalizedText } from "@/types/website";

export type FeaturedStory = {
  id: string;
  category: LocalizedText;
  title: LocalizedText;
  location: LocalizedText;
  readingTime: LocalizedText;
  image: string;
  href: string;
};

const storyContent = {
  hospitality: {
    category: { ar: "قصة خاصة", en: "A personal story" },
    title: {
      ar: "حين غيّر حديث عابر نظرتي لمفهوم الضيافة",
      en: "How a Passing Conversation Changed My View of Hospitality",
    },
    location: { ar: "الرياض", en: "Riyadh" },
    readingTime: { ar: "٦ دقائق", en: "6 min read" },
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
    href: "/stories/story-1",
  },
  coffee: {
    category: { ar: "خلف الكواليس", en: "Behind the scenes" },
    title: {
      ar: "تفاصيل لم تظهر في طقوس القهوة الصباحية",
      en: "The Details Hidden in a Morning Coffee Ritual",
    },
    location: { ar: "جدة", en: "Jeddah" },
    readingTime: { ar: "٥ دقائق", en: "5 min read" },
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    href: "/stories/story-2",
  },
  oldTown: {
    category: { ar: "رحلة", en: "Journey" },
    title: {
      ar: "لماذا عدت إلى هذا المكان مرة أخرى؟",
      en: "Why Did I Return to This Place?",
    },
    location: { ar: "البحرين", en: "Bahrain" },
    readingTime: { ar: "٧ دقائق", en: "7 min read" },
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=900&q=85",
    href: "/stories/story-3",
  },
  hotel: {
    category: { ar: "تجربة", en: "Experience" },
    title: {
      ar: "ليلة لا تُنسى في قلب مدينة لا تنام",
      en: "An Unforgettable Night in the Heart of a City That Never Sleeps",
    },
    location: { ar: "الرياض", en: "Riyadh" },
    readingTime: { ar: "٨ دقائق", en: "8 min read" },
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    href: "/stories/story-4",
  },
  mountains: {
    category: { ar: "رحلة", en: "Journey" },
    title: {
      ar: "صباح مختلف بين جبال جورجيا",
      en: "A Different Morning in the Mountains of Georgia",
    },
    location: { ar: "جورجيا", en: "Georgia" },
    readingTime: { ar: "٦ دقائق", en: "6 min read" },
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
    href: "/stories/story-5",
  },
  resort: {
    category: { ar: "منتجع", en: "Resort" },
    title: {
      ar: "المنتجع الذي فاجأني بكل شيء",
      en: "The Resort That Surprised Me in Every Way",
    },
    location: { ar: "عُمان", en: "Oman" },
    readingTime: { ar: "٥ دقائق", en: "5 min read" },
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85",
    href: "/stories/story-6",
  },
  desert: {
    category: { ar: "خلف الكاميرا", en: "Behind the camera" },
    title: {
      ar: "خلف الكاميرا كانت هناك قصة أخرى",
      en: "There Was Another Story Behind the Camera",
    },
    location: { ar: "العلا", en: "AlUla" },
    readingTime: { ar: "٦ دقائق", en: "6 min read" },
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=85",
    href: "/stories/story-7",
  },
  market: {
    category: { ar: "تجربة", en: "Experience" },
    title: {
      ar: "رحلة بدأت بتقييم وانتهت بصداقات",
      en: "A Journey That Began with a Review and Ended in Friendship",
    },
    location: { ar: "مراكش", en: "Marrakech" },
    readingTime: { ar: "٦ دقائق", en: "6 min read" },
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    href: "/stories/story-8",
  },
} satisfies Record<string, Omit<FeaturedStory, "id">>;

const storyEntries = [
  ["hospitality", "hospitality"],
  ["coffee", "coffee"],
  ["old-town", "oldTown"],
  ["hotel", "hotel"],
  ["mountains", "mountains"],
  ["resort", "resort"],
  ["desert", "desert"],
  ["market", "market"],
] as const;

export const stories: FeaturedStory[] = [
  ...storyEntries.map(([id, content]) => ({ id, ...storyContent[content] })),
  ...storyEntries.map(([id, content]) => ({
    id: `${id}1`,
    ...storyContent[content],
  })),
];
