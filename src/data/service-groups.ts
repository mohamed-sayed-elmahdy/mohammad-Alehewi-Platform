export const serviceGroups = [
  {
    id: "foundation",
    number: "1-",
    title: { ar: "التأسيس والتجهيز", en: "Setup and Preparation" },
    icon: "Store",
    services: [
      {
        id: "account-setup",
        title: { ar: "تأسيس حساب", en: "Business Profile Setup" },
        description: {
          ar: "إنشاء الملف التجاري للمنشأة وتجهيزه بالبيانات الأساسية التي تقدمها",
          en: "Create your business profile and prepare it with the essential information you provide",
        },
        icon: "Store",
      },
      {
        id: "ownership-verification",
        title: { ar: "إثبات الملكية", en: "Ownership Verification" },
        description: {
          ar: "إرشادك خلال خطوات إثبات ملكية المنشأة الرسمية، مع إتمام التحقق من جانب المالك",
          en: "Guide you through the official business ownership verification steps, completed by the owner",
        },
        icon: "ShieldCheck",
      },
      {
        id: "profile-completion",
        title: { ar: "إكمال الملف التجاري", en: "Business Profile Completion" },
        description: {
          ar: "مراجعة بيانات الملف وإضافة المعلومات والصور المتاحة بالتنسيق مع منشأتك",
          en: "Review your profile and add available information and photos in coordination with your business",
        },
        icon: "FileCheck2",
      },
    ],
  },
  {
    id: "management",
    number: "2-",
    title: { ar: "الإدارة والتواصل", en: "Management and Communication" },
    icon: "MessageCircle",
    services: [
      {
        id: "content-management",
        title: { ar: "إدارة المحتوى", en: "Content Management" },
        description: {
          ar: "تنظيم وتحديث محتوى الملف وفق المعلومات والعروض التي تعتمدها المنشأة",
          en: "Organize and update profile content based on information and offers approved by your business",
        },
        icon: "SearchCheck",
      },
      {
        id: "review-responses",
        title: { ar: "الرد على المراجعات", en: "Review Responses" },
        description: {
          ar: "إعداد ردود مهنية على مراجعات العملاء، بما يعكس أسلوب المنشأة ويحترم تجربتهم",
          en: "Prepare professional responses to customer reviews that reflect your business's voice and respect each customer's experience",
        },
        icon: "MessageCircle",
      },
    ],
  },
  {
    id: "documentation",
    number: "3-",
    title: { ar: "التصوير والتوثيق", en: "Photography and Documentation" },
    icon: "Camera",
    services: [
      {
        id: "photography",
        title: { ar: "التصوير والتوثيق", en: "Photography and Documentation" },
        description: {
          ar: "تصوير المكان أو المنتجات وتجهيز صور مناسبة لإضافتها إلى الملف التجاري، وفق نطاق يتم الاتفاق عليه مسبقًا",
          en: "Photograph your location or products and prepare suitable images for your business profile, within an agreed scope",
        },
        icon: "Camera",
      },
    ],
  },
  {
    id: "digitalIdentity",
    number: "4-",
    title: { ar: "التصميم والهوية الرقمية", en: "Design and Digital Identity" },
    icon: "Palette",
    services: [
      {
        id: "logo-design",
        title: { ar: "تصميم شعار", en: "Logo Design" },
        description: {
          ar: "تصميم شعار يعبر عن هوية المنشأة ويمكن استخدامه في قنواتها وموادها التعريفية",
          en: "Design a logo that reflects your business identity and can be used across your channels and materials",
        },
        icon: "PenTool",
      },
      {
        id: "website-design",
        title: { ar: "تصميم موقع إلكتروني", en: "Website Design" },
        description: {
          ar: "تصميم موقع يعرض خدمات المنشأة ومعلوماتها بطريقة واضحة ومناسبة للهواتف",
          en: "Design a clear, mobile-friendly website that presents your business information and services",
        },
        icon: "Monitor",
      },
    ],
  },
] as const;

export type ServiceId =
  (typeof serviceGroups)[number]["services"][number]["id"];
