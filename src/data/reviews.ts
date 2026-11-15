import type { LocalizedText, ReviewItem } from "@/types/website";

type ReviewSource = Omit<
  ReviewItem,
  "title" | "excerpt" | "reviewText" | "city" | "country" | "badge"
> & {
  title: string;
  excerpt: string;
  reviewText?: string;
  city: string;
  country: string;
  categoryLabel: string;
  locationLabel: string;
  dateLabel: string;
  badge?: string;
};

type ReviewEnglishContent = {
  title: string;
  excerpt: string;
  reviewText: string;
};

const reviewSources: ReviewSource[] = [
  // 1
  {
    id: "village-mall",
    title: "Village Mall",
    excerpt:
      "مركز تسوق بتصميم عصري شمال جدة على طريق الحرمين جميل للعائلة والطفل",
    reviewText:
      "مركز تسوق بتصميم عصري شمال جدة على طريق الحرمين يتكون من ثلاث طوابق يضم ماركات عالمية وكافيهات توجد ساحات خارجية مفتوحة والعاب حركية للاطفال وجلسات استراحة في ممراته ونوافير ومواقف ومصاعد وسلالم ولوحات ارشادية وسوبرماركت ومكتبة ومطاعم ومنطقة مخصصة للطعام وصيدلية ومنطقة العاب ومصليات وشاشات ودورات مياه حديثة نظيفة لاحظنا الهدوء ونسبة العزل في ممراته رغم توافد الزوار اجمالا مركز تسوق جميل للعائلة والطفل",
    rating: 5,
    categoryId: "malls",
    categoryLabel: "مولات ومراكز تسوق",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ يوليو ٢٠٢٦",
    dateISO: "2026-07-15",
    googleMapsUrl: "https://maps.app.goo.gl/ubUCj58KtMTTNu3s7?g_st=iw",
    images: [
      "/reviews/village-mall/cover.jpg",
      "/reviews/village-mall/1.jpg",
      "/reviews/village-mall/2.jpg",
      "/reviews/village-mall/3.jpg",
      "/reviews/village-mall/4.jpg",
      "/reviews/village-mall/5.jpg",
    ],
    href: "/reviews/village-mall",
    badge: "تجربة مميزة",
    featured: true,
  },
  // 2
  {
    id: "red-sea-mall",
    title: "ردسي مول",
    excerpt:
      "من اجمل مراكز التسوق ومعالم الجذب بجدة وموقعه مميز بجوار الواجهة البحرية",
    reviewText:
      "من اجمل مراكز التسوق ومعالم الجذب بجدة يتكون من ثلاث ادوار توجد مواقف اضافية علوية بالاضافة للسفلية والامامية يوجد فيه سينما فوكس هايبر الدانوب مدينة العاب وصالة بولينج ماركات وعلامات وكافيهات عالمية ومنطقة مطاعم تتوفر خدمة عربات الاطفال وكبار السن يضم بجنباته فندق ايضا شركات الاتصالات وشركتي تامين موقعه المميز بجوار طريق الملك والواجهة البحرية والمطار جميل المول ما يشهده من عملية تطوير مستمرة",
    rating: 5,
    categoryId: "malls",
    categoryLabel: "مولات ومراكز تسوق",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ اغسطس ٢٠٢٦",
    dateISO: "2026-08-15",
    googleMapsUrl: "https://maps.app.goo.gl/zK1WppF2jX1aA8hg8?g_st=iw",
    images: [
      "/reviews/red-sea-mall/cover.jpg",
      "/reviews/red-sea-mall/1.jpg",
    ],
    href: "/reviews/red-sea-mall",
    badge: "تجربة مميزة",
    featured: true,
  },
  // 4
  {
    id: "the-california-burger",
    title: "The California Burger",
    excerpt:
      "اجمالا تجربة مقبولة مع توصيتنا بتحسين البطاطس واحضار المشروب بالتزامن مع الطلب",
    reviewText:
      "زيارة مستجدة الطلب دبل برجر لحم يقدم بخبز طري درجة الشواء جيدة ونكهة اللحم وحجمه مقبول مع الخبز الاضافات طيبة من الصوص والخس والطماطم والجبنة والبصل المكرمل مع درجة اشباع جيدة التقديم ساخن ولطيف بطاطس بالجبنة ماناسبنا نوعية البطاطس وقليه ونكهة الجبنة وبحاجة للتحسين المكان يضم جلسات داخلية من دورين وبحاجة لاعادة نظر وتحسين توزيع الخدمة سريعة الطاقم متعاون التحضير مرئي الاسعار متوسطة اجمالا تجربة مقبولة مع توصيتنا بتحسين البطاطس واحضار المشروب بالتزامن مع الطلب",
    rating: 4,
    categoryId: "restaurants",
    categoryLabel: "مطاعم",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٦ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-16",
    googleMapsUrl: "https://maps.app.goo.gl/tE5pkHtdrxcuAkPv9?g_st=iw",
    images: [
      "/reviews/the-california-burger/cover.jpg",
      "/reviews/the-california-burger/1.jpg",
      "/reviews/the-california-burger/2.jpg",
      "/reviews/the-california-burger/3.jpg",
      "/reviews/the-california-burger/4.jpg",
    ],
    href: "/reviews/the-california-burger",
  },
  // 5
  {
    id: "coconut-bar",
    title: "كوكونت بار",
    excerpt:
      "اجمالا زيارة لاباس بها",
    reviewText:
      "تجربة جديدة المكان صغير نوعا ما محدود الجلسات يقدم القهوة وخيارات معدودة من الحلى والكوكيز الطلب مقطرة كوستاريكي مقبولة الاستخلاص مناسبة لمحبي الخفيفة تشيز البيكان جيدة التحضير متوازنة الحلى والاضافات التقديم بهوية المكان الخدمة مرضية الطاقم لطيف الاسعار مقبولة مقابل التجربة نقترح تحسين مرئية منطقة التحضير اتاحة عرض المنيو تحسين تفاصيل الجلسات اجمالا زيارة لاباس بها",
    rating: 4,
    categoryId: "cafes",
    categoryLabel: "كافيهات",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "٢ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-02",
    googleMapsUrl: "https://maps.app.goo.gl/8jRUFNLYY31qHjot7?g_st=iw",
    images: [
      "/reviews/coconut-bar/cover.jpg",
      "/reviews/coconut-bar/1.jpg",
      "/reviews/coconut-bar/2.jpg",
      "/reviews/coconut-bar/3.jpg",
      "/reviews/coconut-bar/4.jpg",
    ],
    href: "/reviews/coconut-bar",
  },
  // 6
  {
    id: "marpik-cafe",
    title: "Marpik Cafe",
    excerpt:
      "اجمالا تجربة مقبولة وتستحق التكرار لتجربة اصناف اخرى",
    reviewText:
      "تجربة مستجدة المكان بجلسات داخلية مرتبة وخارجية يقدم تشكيلة واسعة من الكيك وخيارات من القهوة والمخبوزات الطلب تشيز مدريد شوكو جيدة التحضير والحجم متوازنة الحلى بستالوفا جيدة التحضير بحشوة الكنافة مقطرة اثيوبي بانطباع عادي قهوة اليوم حار محصول برازيلي متوازنة وبانطباع لاباس به مع تقديم بهوية المكان الخدمة مرضية الطاقم متعاون الاسعار متوسطة منطقة التحضير مرئية ومرتبة اجمالا تجربة مقبولة وتستحق التكرار لتجربة اصناف اخرى",
    rating: 4,
    categoryId: "cafes",
    categoryLabel: "كافيهات",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "٢٣ سبتمبر ٢٠٢٦",
    dateISO: "2026-09-23",
    googleMapsUrl: "https://maps.app.goo.gl/rCTo3xZEc9dHthoy6?g_st=iw",
    images: [
      "/reviews/marpik-cafe/cover.jpg",
      "/reviews/marpik-cafe/2.jpg",
      "/reviews/marpik-cafe/3.jpg",
      "/reviews/marpik-cafe/4.jpg",
      "/reviews/marpik-cafe/5.jpg",
      "/reviews/marpik-cafe/6.jpg",
      "/reviews/marpik-cafe/7.jpg",
      "/reviews/marpik-cafe/8.jpg",
    ],
    href: "/reviews/marpik-cafe",
  },
  // 7
  {
    id: "tikka-masala",
    title: "Tikka Masala",
    excerpt:
      "اجمالا زيارة موفقة مع ملاحظة تواضع الصورة الخارجية للمطعم خلاف جودة واصالة الطعام",
    reviewText:
      "تجربة جديدة المكان يقدم خيارات من المطبخ الهندي الطلب برياني دجاج ممتاز التحضير والنكهة والكمية برياني لحم ممتاز طهي الارز والنكهة ويقدم بلحم الغنم الطازج تشكن 65 امتياز التتبيلة والطراوة والتقديم مشاوي مشكلة بنكهة هندية اصيلة وتنوع لطيف وتقديم ساخن دجاج بالزبدة جيد الاضافات طري القطع مسالا الدجاج جيد تحضير الصوص والقطع صحن بطاطس امتياز القلي براتا زبدة و ثوم ممتاز الخبز والنكهة شوربة خضار يتم تحضيرها حسب النادل بمقادم البقر بانطباع عادي مع التوصية بزيادة كثافتها موهيتو جيد التحضير بنكهة الليمون الخدمة لطيفة ونخص السيد قادر و محمد امتياز التزام الطاقم بالكمام الاسعار في النطاق العام تتوفر جلسات داخلية من طابقين ومواقف خلفية خاصة مع ضيافة عامة للطاولات من الحمص وزبادي النعناع والحار مع المقرمشات نقترح اضافة الهوية الهندية البصرية على المكان اجمالا زيارة موفقة مع ملاحظة تواضع الصورة الخارجية للمطعم خلاف جودة واصالة الطعام",
    rating: 5,
    categoryId: "restaurants",
    categoryLabel: "مطاعم",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "٢٣ سبتمبر ٢٠٢٦",
    dateISO: "2026-09-23",
    googleMapsUrl: "https://maps.app.goo.gl/WowUTPM65m8YVjpY7?g_st=iw",
    images: [
      "/reviews/tikka-masala/cover.jpg",
      "/reviews/tikka-masala/2.jpg",
      "/reviews/tikka-masala/3.jpg",
      "/reviews/tikka-masala/4.jpg",
      "/reviews/tikka-masala/5.jpg",
      "/reviews/tikka-masala/6.jpg",
      "/reviews/tikka-masala/8.jpg",
      "/reviews/tikka-masala/9.jpg",
      "/reviews/tikka-masala/10.jpg",
      "/reviews/tikka-masala/11.jpg",
      "/reviews/tikka-masala/12.jpg",
      "/reviews/tikka-masala/13.jpg",
      "/reviews/tikka-masala/14.jpg",
      "/reviews/tikka-masala/15.jpg",
      "/reviews/tikka-masala/16.jpg",
    ],
    href: "/reviews/tikka-masala",
    badge: "تجربة مميزة",
  },
  // 9
  {
    id: "nojom-alrafahiya-chalets",
    title: "شاليهات نجوم الرفاهية",
    excerpt:
      "اجمالا اقامة مميزة ومريحة للعائلات المتوسطة والصغيرة",
    reviewText:
      "الشاليه حديث وتفاصيله انيقة ومجهز بالكامل يضم صالة معيشة وغرفتين نوم ومطبخ صغير وطاولة طعام ومسبح ودورات مياه نظيفة وجاكوزي واثاث نظيف وتكييف واضاءة مريحة حديثة واطلالات مفتوحة وجلسات خارجية ومنطقة شواء وخدمة جيدة وضيافة دافئة من المالك الحجز كان سريعا ومرنا الموقع جيد وقريب من الخدمات الاسعار مناسبة الى حد ما لما ذكر من الاقامة والتجهيزات نوصي بمدخل وممر مرصوف لذوي الاعاقة وكبار السن وعلى الزوار المحافظة على نظافة وسلامة المكان اجمالا اقامة مميزة ومريحة للعائلات المتوسطة والصغيرة",
    rating: 5,
    categoryId: "hotels",
    categoryLabel: "فنادق واقامة",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "٢٣ سبتمبر ٢٠٢٦",
    dateISO: "2026-09-23",
    googleMapsUrl: "https://maps.app.goo.gl/Uw81eKX6jb5L1oVLA?g_st=iw",
    images: [
      "/reviews/nojom-alrafahiya-chalets/cover.jpg",
      "/reviews/nojom-alrafahiya-chalets/1.jpg",
      "/reviews/nojom-alrafahiya-chalets/2.jpg",
      "/reviews/nojom-alrafahiya-chalets/3.jpg",
      "/reviews/nojom-alrafahiya-chalets/4.jpg",
      "/reviews/nojom-alrafahiya-chalets/5.jpg",
    ],
    href: "/reviews/nojom-alrafahiya-chalets",
    badge: "تجربة مميزة",
  },
  // 10
  {
    id: "best-western",
    title: "بيست ويستيرن",
    excerpt:
      "اجمالا اقامة جيدة",
    reviewText:
      "تجربة اقامة الفندق مرتب بموقع استراتيجي قرب المطار ومناطق المطاعم والكافيهات يضم لوبي واسع ومقهى ومطعمين وصالة رياضية ومسبح وقاعة اجتماعات ومناسبات ومواقف خاصة ومصاعد الغرفة في الطابق السادس 603 هادئة بسعة طيبة وعزل مقبول واطلالة لطيفة وتجهيزات ممتازة وراحة في الوسائد والسرير ونظافة سجاد ودورة مياه وبلوتوث وتكييف مركزي وركن للشاي والقهوة مع خلو الثلاجة من السناكات الاستقبال جيد السعر مقابل الراحة مقبول الى حد ما مع امكانية اضافة الافطار نشيد بلباقة واجتهاد ومتابعة السيد صنعاني في الامن اجمالا اقامة جيدة",
    rating: 4,
    categoryId: "hotels",
    categoryLabel: "فنادق واقامة",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ اغسطس ٢٠٢٦",
    dateISO: "2026-08-15",
    googleMapsUrl: "https://maps.app.goo.gl/4cZ5AxYsdK8WuPsQA?g_st=iw",
    images: [
      "/reviews/best-western/cover.jpg",
      "/reviews/best-western/1.jpg",
      "/reviews/best-western/2.jpg",
      "/reviews/best-western/3.jpg",
      "/reviews/best-western/4.jpg",
      "/reviews/best-western/5.jpg",
      "/reviews/best-western/6.jpg",
      "/reviews/best-western/7.jpg",
      "/reviews/best-western/8.jpg",
      "/reviews/best-western/9.jpg",
    ],
    href: "/reviews/best-western",
  },
  // 11
  {
    id: "level-nine-hotel",
    title: "فندق ليفيل ناين",
    excerpt:
      "اجمالا تجربة اقامة لاباس بها مع التوصية بتطوير الملاحظات",
    reviewText:
      "تجربة اقامة في الدور الثالث من الفندق 307 الفندق بموقع جيد هادئ ونظيف المرافق وقريب من الخدمات مع وجود مواقف سفلية محدودة جدا وصعوبة توفر الخارجية ومصعدين وكوفي شوب وبوفيه افطار متواضع المحتوى وبحاجة لتحسين الغرفة بسعة طيبة ونافذة واسعة على العام وعزل طيب مع تجهيزات اساسية وتكييف مركزي وفرش ومفارش ودورة مياه نظيفة بلا روائح ومرتبة ووسائد مريحة السعر مقابل الاقامة والموقع والتوقيت والخيارات الاخرى والخدمات المقدمة مقبول الى حد ما طاقم الخدمة لطيف طاقم الاستقبال متعاون مع التوصية باحترافية اعلى في المواقف المختلفة اجمالا تجربة اقامة لاباس بها مع التوصية بتطوير الملاحظات",
    rating: 4,
    categoryId: "hotels",
    categoryLabel: "فنادق واقامة",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ يوليو ٢٠٢٦",
    dateISO: "2026-07-15",
    googleMapsUrl: "https://maps.app.goo.gl/CQtZi68EuzF4Qtxt5?g_st=iw",
    images: [
      "/reviews/level-nine-hotel/cover.jpg",
      "/reviews/level-nine-hotel/1.jpg",
      "/reviews/level-nine-hotel/2.jpg",
      "/reviews/level-nine-hotel/3.jpg",
      "/reviews/level-nine-hotel/4.jpg",
      "/reviews/level-nine-hotel/5.jpg",
      "/reviews/level-nine-hotel/6.jpg",
    ],
    href: "/reviews/level-nine-hotel",
  },
  // 12
  {
    id: "meez-restaurant",
    title: "مطعم ميز",
    excerpt:
      "اجمالا تجربة مرضية",
    reviewText:
      "زيارة جديدة الطلب مسخن جيد التحضير والصوصات والنكهة والحشوة والتقديم كشري بولز جيد التحضير والطعم فتة باذنجان جيد الاضافات والتقديم مع التوصية بتوازن المكونات المكان مرتب بجلسات من طابقين المنيو يضم اطباق مبتكرة ومقبلات وفرنيات الخدمة سريعة الاسعار فوق المتوسط مقابل الكميات والتجربة الطاولات تتطلب في الغالب حجز التحضير غير مرئي تتوفر بكجات احتفالات خاصة اجمالا تجربة مرضية",
    rating: 4,
    categoryId: "restaurants",
    categoryLabel: "مطاعم",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ يوليو ٢٠٢٦",
    dateISO: "2026-07-15",
    googleMapsUrl: "https://maps.app.goo.gl/dhHk8nCHqMTiBuqj7?g_st=iw",
    images: [
      "/reviews/meez-restaurant/cover.jpg",
      "/reviews/meez-restaurant/1.jpg",
      "/reviews/meez-restaurant/2.jpg",
      "/reviews/meez-restaurant/3.jpg",
      "/reviews/meez-restaurant/4.jpg",
      "/reviews/meez-restaurant/5.jpg",
    ],
    href: "/reviews/meez-restaurant",
  },
  // 13
  {
    id: "tateeba-justina",
    title: "تعتيبة جستنيه",
    excerpt:
      "اجمالا تجربة مرضية",
    reviewText:
      "تجربة جديدة المكان يقدم خيارات من الحلويات البلدي الحجازية والاجبان والفول والمطبق والمخللات والخبز الطلب معصوب الحارة بانطباع عادي مع التوصية بتحسين المكونات وطريقة التحضير فول جرة زيت زيتون ممتاز التحضير والنكهة والاضافات الخبز جيد التحضير مع التوصية بتحسين التميس فلافل تقدم بطبق من 7 قطع جيدة القلي ساخنة شحيحة العدد والحجم مقابل القيمة مع امتياز تحضير ونكهة الطحينة والمخلل والدقس المكان بطابع حجازي وجلسات متنوعة مرتبة الخدمة مقبولة الاسعار مرتفعه مقابل الكميات التحضير غير مرئي نقترح تقديم ضيافة صغيرة من التعتيمة إجمالا تجربة مرضية",
    rating: 4,
    categoryId: "restaurants",
    categoryLabel: "مطاعم",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ اغسطس ٢٠٢٦",
    dateISO: "2026-08-15",
    googleMapsUrl: "https://maps.app.goo.gl/m4R6A4DLQzTuThw96?g_st=iw",
    images: [
      "/reviews/tateeba-justina/cover.jpg",
      "/reviews/tateeba-justina/2.jpg",
      "/reviews/tateeba-justina/3.jpg",
      "/reviews/tateeba-justina/4.jpg",
      "/reviews/tateeba-justina/5.jpg",
      "/reviews/tateeba-justina/6.jpg",
      "/reviews/tateeba-justina/7.jpg",
      "/reviews/tateeba-justina/8.jpg",
      "/reviews/tateeba-justina/9.jpg",
      "/reviews/tateeba-justina/10.jpg",
    ],
    href: "/reviews/tateeba-justina",
  },
  // 15
  {
    id: "obhur-new-waterfront",
    title: "واجهة ابحر الجديدة",
    excerpt:
      "منطقة جميلة ومرتبة وحضارية بلوحات ارشادية وبخدمات متنوعة",
    reviewText:
      "منطقة جميلة ومرتبة وحضارية بلوحات ارشادية وبخدمات متنوعة من مطاعم وكافيهات ومناطق سباحة ودورات مياه مدفوعه واجب علينا المحافظة عليها",
    rating: 5,
    categoryId: "tourist-attractions",
    categoryLabel: "معالم سياحية",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ اغسطس ٢٠٢٦",
    dateISO: "2026-08-15",
    googleMapsUrl: "https://maps.app.goo.gl/Asoe6b1N4GyRY2nu5?g_st=iw",
    images: [
      "/reviews/obhur-new-waterfront/cover.jpg",
      "/reviews/obhur-new-waterfront/1.jpg",
      "/reviews/obhur-new-waterfront/2.jpg",
      "/reviews/obhur-new-waterfront/3.jpg",
      "/reviews/obhur-new-waterfront/4.jpg",
      "/reviews/obhur-new-waterfront/5.jpg",
      "/reviews/obhur-new-waterfront/6.jpg",
      "/reviews/obhur-new-waterfront/7.jpg",
    ],
    href: "/reviews/obhur-new-waterfront",
    badge: "تجربة مميزة",
  },
  // 16
  {
    id: "almahazim-beach",
    title: "شاطئ المحازم",
    excerpt:
      "منتفس جميل مفتوح على البحر رملي لممارسة السباحة للاطفال واللعب بالرمل بمتابعة الاهل",
    reviewText:
      "منتفس جميل مفتوح على البحر رملي لممارسة السباحة للاطفال واللعب بالرمل بمتابعة الاهل تتوفر مواقف محدودة يتواجد منقذين تتوفر منطقة العاب حركية وركوب الخيل و دبابات ودورات مياه مدفوعه نوصي المعنيين والزوار بالاهتمام بنظافة المكان",
    rating: 5,
    categoryId: "beaches",
    categoryLabel: "شواطئ ومنتجعات",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "٢٣ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-23",
    googleMapsUrl: "https://maps.app.goo.gl/fZpBHC5QX2mpJ3HG7?g_st=iw",
    images: [
      "/reviews/almahazim-beach/cover.jpg",
      "/reviews/almahazim-beach/1.jpg",
      "/reviews/almahazim-beach/2.jpg",
      "/reviews/almahazim-beach/3.jpg",
    ],
    href: "/reviews/almahazim-beach",
    badge: "تجربة مميزة",
  },
  // 19
  {
    id: "green-side",
    title: "GREEN SIDE",
    excerpt:
      "اجمالا زيارة موفقة",
    reviewText:
      "زيارة جديدة صباحية الطلب كيك الجزر ممتاز التحضير والاضافات والكمية والطعم والتقديم قهوة اليوم محصول كولومبي جيدة الاستخلاص متوازنة الحموضة عطرية مع تقديم بهوية المكان المكان واسع ومريح ولطيف التفاصيل مع جلسات داخلية وخارجية المنيو متنوع بخيارات القهوة والحلى والمخبوزات منطقة التحضير مرتبة الخدمة ذاتية وسريعة الطاقم متعاون نوصي بتنويع خيارات الدفع اجمالا زيارة موفقة",
    rating: 5,
    categoryId: "cafes",
    categoryLabel: "كافيهات",
    city: "عنيزة",
    country: "السعودية",
    locationLabel: "عنيزة · السعودية",
    dateLabel: "١٦ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-16",
    googleMapsUrl: "https://maps.app.goo.gl/4z6MM5ofuGZUiESo9?g_st=iw",
    images: [
      "/reviews/green-side/cover.jpg",
      "/reviews/green-side/1.jpg",
      "/reviews/green-side/2.jpg",
      "/reviews/green-side/3.jpg",
      "/reviews/green-side/4.jpg",
      "/reviews/green-side/5.jpg",
    ],
    href: "/reviews/green-side",
    badge: "تجربة مميزة",
  },
  // 20
  {
    id: "bridge-cafe",
    title: "بريدج",
    excerpt:
      "اجمالا تجربة موفقة وتستحق التكرار لتجربة اصناف اخرى",
    reviewText:
      "تجربة جديدة المكان يقدم خيارات من القهوة والحلويات الساخنة والباردة مع تفاصيل جلسات داخلية باجواء مرتبة ومنطقة تحضير مرئية الطلب قهوة اليوم محصول كولومبي ممتازة الاستخلاص متوازنة الحامضية فرنش توست بلجيكي بالبيكان حشوة الكيري طري خفيف ممتاز التحضير والاضافات والتقديم لطيف بهوية المكان مع توصيتنا بتطوير الكمية واضافات البيكان بشكل اوضح الطاقم متعاون الاسعار في النطاق العام اجمالا تجربة موفقة وتستحق التكرار لتجربة اصناف اخرى",
    rating: 4,
    categoryId: "cafes",
    categoryLabel: "كافيهات",
    city: "عنيزة",
    country: "السعودية",
    locationLabel: "عنيزة · السعودية",
    dateLabel: "١٦ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-16",
    googleMapsUrl: "https://maps.app.goo.gl/BDWivceicQHbAgY9A?g_st=iw",
    images: [
      "/reviews/bridge-cafe/cover.jpg",
      "/reviews/bridge-cafe/1.jpg",
      "/reviews/bridge-cafe/2.jpg",
      "/reviews/bridge-cafe/3.jpg",
      "/reviews/bridge-cafe/4.jpg",
    ],
    href: "/reviews/bridge-cafe",
  },
  // 21
  {
    id: "process-cafe",
    title: "بروسيس مقهى ومحمصة",
    excerpt:
      "اجمالا زيارة مقبولة",
    reviewText:
      "تجربة جديدة المكان يقدم خيارات من القهوة المختصة الباردة والساخنة بالاضافة لتشكيلة من الحلى البارد والايسكريم الطلب تشيز دولتشي من البسكوت والكراميل والكريمة جيدة التحضير والحشوة والتقديم بهوية المكان مع توصيتنا بموازنة اجود للسكر لحلاها العالي قهوة اليوم حار محصول اثيوبي متوازنة الحموضة مع تقديم باكواب تحاكي المكان الخدمة ذاتية وسريعة التزام الطاقم بالكمام جيد الاسعار مقبولة منطقة التحضير مرتبة تتوفر جلسات داخلية لطيفة التفاصيل وباطلالات مفتوحة على الطريق العام كما تتوفر خارجية تتوفر مبيعات المحمصة نقترح تطوير اصناف الحلى اجمالا زيارة مقبولة",
    rating: 4,
    categoryId: "cafes",
    categoryLabel: "كافيهات",
    city: "عنيزة",
    country: "السعودية",
    locationLabel: "عنيزة · السعودية",
    dateLabel: "١٦ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-16",
    googleMapsUrl: "https://maps.app.goo.gl/de22SL971kxgucUm9?g_st=iw",
    images: [
      "/reviews/process-cafe/cover.jpg",
      "/reviews/process-cafe/1.jpg",
      "/reviews/process-cafe/2.jpg",
      "/reviews/process-cafe/3.jpg",
      "/reviews/process-cafe/4.jpg",
      "/reviews/process-cafe/5.jpg",
      "/reviews/process-cafe/6.jpg",
    ],
    href: "/reviews/process-cafe",
  },
  // 27
  {
    id: "panozzo",
    title: "Panozzo بانووزو",
    excerpt:
      "اجمالا تجربة جيدة وتستحق التكرار لتجربة اصناف اخرى",
    reviewText:
      "تجربة جديدة المكان بجلسات داخلية محدودة يقدم خيارات من المطبخ الايطالي من البيتزا والباستا وبعض الساندوتشات والفرايز والسلطات الطلب دجاج بيستو العجينة ممتازة التحضير والخبز كذلك الاضافات والمحتوى ونكهتها دجاج رانش ممتازة العجينة والتحضير والاضافات والمحتوى التقديم بهوية المكان الخدمة طيبة مع التوصية بجاهزية وسرعه اعلى الاسعار متوسطة نوصي الاهتمام وتحسين مرئية منطقة التحضير تنويع خيارات الدفع اجمالا تجربة جيدة وتستحق التكرار لتجربة اصناف اخرى",
    rating: 4,
    categoryId: "restaurants",
    categoryLabel: "مطاعم",
    city: "الطائف",
    country: "السعودية",
    locationLabel: "الطائف · السعودية",
    dateLabel: "١٥ يوليو ٢٠٢٦",
    dateISO: "2026-07-15",
    googleMapsUrl: "https://maps.app.goo.gl/3hcHTuZchCrriyNh8?g_st=iw",
    images: [
      "/reviews/panozzo/cover.jpg",
      "/reviews/panozzo/1.jpg",
      "/reviews/panozzo/2.jpg",
      "/reviews/panozzo/3.jpg",
    ],
    href: "/reviews/panozzo",
  },
  {
    id: "medical-cupping-center",
    title: "مركز العلاج الطبي للحجامة",
    excerpt:
      "اجمالا خيار موفق في اجراء الحجامة",
    reviewText:
      "المكان نظيف ومرتب الاستقبال لطيف حجز مسبق سريع عبر الواتس اب حجامة موفقة في قسم النساء لدى الاخصائية مرام حجامة مميزة موفقة لدى الاخصائي ماجد السيد وكذلك السيد محمد نافذ و عبدالله الشمراني تشريط احترافي توجيه هدوء تصفية تعقيم تقديم نصائح مع ضيافة مشروبات صحية الاسعار مقابل التجربة مقبولة إجمالا خيار موفق في إجراء الحجامة",
    rating: 5,
    categoryId: "health-care",
    categoryLabel: "صحة وعناية",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ اغسطس ٢٠٢٦",
    dateISO: "2026-08-15",
    googleMapsUrl: "https://maps.app.goo.gl/uQzhzYBaFvWNz8ek7?g_st=iw",
    images: [
      "/reviews/medical-cupping-center/cover.jpg",
      "/reviews/medical-cupping-center/1.jpg",
      "/reviews/medical-cupping-center/2.jpg",
      "/reviews/medical-cupping-center/3.jpg",
    ],
    href: "/reviews/medical-cupping-center",
    badge: "تجربة مميزة",
  },
  {
    id: "yana-bakery",
    title: "مخابز يانا",
    excerpt:
      "اجمالا تجربة اقل من المتوقع",
    reviewText:
      "تجربة جديدة المكان بجلسات داخلية يوفر خيارات المخبوزات والحلى والقهوة وبعض الاطباق والساندوتشات الطلب كلوب ساندوتش مناسبنا تحضيره والمحتوى الشحيح من المكونات مع ملاحظة القلي الجيد للبطاطس دجاج بيستو بخبز الحبوب جيد التحضير والتحميص والمحتوى كيش فطر غير موفق التحضير ومالح للاسف موهيتو باشن منعش وتقديم بهوية المكان حلى الكاسترد جيد التحضير منطقة التحضير مرئية الخدمة مرضية مع التوصية بتحسينها الاسعار مقبولة نوعا ما مقابل التجربة اجمالا تجربة اقل من المتوقع",
    rating: 4,
    categoryId: "sweets-bakeries",
    categoryLabel: "حلويات ومخابز",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ يوليو ٢٠٢٦",
    dateISO: "2026-07-15",
    googleMapsUrl: "https://maps.app.goo.gl/8tEvdZxsWZp2prVz6?g_st=iw",
    images: [
      "/reviews/yana-bakery/cover.jpg",
      "/reviews/yana-bakery/1.jpg",
      "/reviews/yana-bakery/2.jpg",
      "/reviews/yana-bakery/3.jpg",
      "/reviews/yana-bakery/4.jpg",
      "/reviews/yana-bakery/5.jpg",
      "/reviews/yana-bakery/6.jpg"

    ],
    href: "/reviews/yana-bakery",
  },
  {
    id: "sesam-bakery",
    title: "سيسام",
    excerpt:
      "اجمالا تجربة مقبولة",
    reviewText:
      "تجربة جديدة المكان صغير بجلسات داخلية محدودة يقدم تشكيلة من المخبوزات المالحة والحلوة وخيارات من القهوة الطلب كابريسي جيد التحضير والحشوة بان سويس سبانخ جيد التحضير والطعم فيونكة كاسترد وتوت هشة وبحشوة طيبة كروسون تركي جيد التحضير وهش التقديم بهوية المكان الخدمة سريعة الطاقم لطيف الاسعار فوق المتوسط مقابل الكميات منطقة العرض مرتبة اجمالا تجربة مقبولة",
    rating: 4,
    categoryId: "sweets-bakeries",
    categoryLabel: "حلويات ومخابز",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ يوليو ٢٠٢٦",
    dateISO: "2026-07-15",
    googleMapsUrl: "https://maps.app.goo.gl/EZLnJusTR8xcnh6r5?g_st=iw",
    images: [
      "/reviews/sesam-bakery/cover.jpg",
      "/reviews/sesam-bakery/1.jpg",
    ],
    href: "/reviews/sesam-bakery",
  },
  {
    id: "bakery-m",
    title: "Bakery M",
    excerpt:
      "اجمالا زيارة مرضية",
    reviewText:
      "تجربة جديدة صباحية المكان لطيف التفاصيل بجلسات داخلية وخارجية يقدم تشكيلة واسعة من الحلى والمخبوزات المبتكرة الطلب بابكا القرفة جيد التحضير والنكهة مع التوصية باضافات اكثر كيكة الموز مع فول سوداني جيد التحضير والاضافات مع امكانية تطوير النكهة قهوة اليوم ساخن محصول اثيوبي جيد الاستخلاص متوازنة الخدمة مقبولة التحضير مرئي الاسعار متوسطة مقابل الكميات والتجربة الطاقم متعاون ونخص السيد اسامة نقترح تطوير التقديم بهوية المكان وتطوير المنيو بعروض مميزة اجمالا زيارة مرضية",
    rating: 4,
    categoryId: "sweets-bakeries",
    categoryLabel: "حلويات ومخابز",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "٢٤ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-24",
    googleMapsUrl: "https://maps.app.goo.gl/YxxLejWMbzcALAbB8?g_st=iw",
    images: [
      "/reviews/bakery-m/cover.jpg",
      "/reviews/bakery-m/1.jpg",
      "/reviews/bakery-m/2.jpg",
      "/reviews/bakery-m/3.jpg",
      "/reviews/bakery-m/4.jpg",
      "/reviews/bakery-m/5.jpg",
      "/reviews/bakery-m/6.jpg",
      "/reviews/bakery-m/7.jpg",
      "/reviews/bakery-m/8.jpg",
    ],
    href: "/reviews/bakery-m",
  },
  {
    id: "renar-cafe",
    title: "ريناز كافيه",
    excerpt:
      "زيارة مستجدة المكان لطيف وواسع من دورين بلمسات متجددة",
    reviewText:
      "تجربة مستجدة المكان لطيف وواسع من دورين بلمسات متجددة الطلب تشيز كيك قاناش جيدة الطعم متوازنة السكر وتقديم بهوية المكان كيكة التمر والبيكان ممتازة التحضير والاضافات والنكهة ومتوازنة الحلى مع تقديم لطيف بهوية المكان كيك الكوكيز ممتازة التحضير طرية متوازنة الحلى بطبقات وحجم مقبول قهوة اليوم ساخن محصول كولومبي ممتازة متوازنة الحموضة وفاكهية قهوة اليوم بارد محصول أثيوبي جيدة الاستخلاص والتقديم كركديه مانجو جيد التحضير والطعم والبرودة مع تقديم لطيف كيكة العسل مقبولة التحضير مع التوصية بموازنة أفضل للسكر كوكيز بانطباع جيد الخدمة ذاتية المنيو متنوع بخيارات الحلى المتجددة ومشروبات القهوة الباردة والساخنة منطقة التحضير مرتبة الاسعار متوسطة الطواقم بحاجة للتدريب على الاستقبال الافضل نوصي تحسين تقديم الشوكولاته الذائبة معالجة سياسة الجلسات العلوية تدريب الكاشير صانعة ثلج أفضل الاهتمام بدورات المياه إجمالا زيارة ليست كالسابق وبحاجة للتحسين الفني",
    rating: 4,
    categoryId: "cafes",
    categoryLabel: "كافيهات",
    city: "مكة",
    country: "السعودية",
    locationLabel: "مكة · السعودية",
    dateLabel: "١٧ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-17",
    googleMapsUrl: "https://maps.app.goo.gl/bR4p3K1DH7tA6LZ17?g_st=iw",
    images: [
      "/reviews/renar-cafe/cover.jpg",
      "/reviews/renar-cafe/1.jpg",
      "/reviews/renar-cafe/2.jpg",
      "/reviews/renar-cafe/3.jpg",
      "/reviews/renar-cafe/4.jpg",
      "/reviews/renar-cafe/5.jpg",
    ],
    href: "/reviews/renar-cafe",
  },
  {
    id: "jeddah-yacht-club",
    title: "نادي جدة لليخوت",
    excerpt:
      "بشكل عام مكان جميل يستحق الزيارة",
    reviewText:
      "زيارة سريعة مكان ومتنفس جميل ومرتب يضم مقاهي ومطاعم وفندق على ساحل البحر الاحمر ومرسى القوارب البحرية الفاخرة والسياحية بالاضافة لمواصلات جدة ونقطة التاكسي البحري موسيقى هادئة مداخل متعددة ومواقف خارجية وخاصة برسوم ولذوي الاحتياجات الخاصة مجانا دورات مياه نظيفة تواجد مميز للحراسات الامنية وتقديم خدمة الارشاد للزوار بشكل عام مكان جميل يستحق الزيارة",
    rating: 5,
    categoryId: "tourist-attractions",
    categoryLabel: "معالم سياحية",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ يوليو ٢٠٢٦",
    dateISO: "2026-07-15",
    googleMapsUrl: "https://maps.app.goo.gl/TCCbkt2TdCSgHtdEA?g_st=iw",
    images: [
      "/reviews/jeddah-yacht-club/cover.jpg",
      "/reviews/jeddah-yacht-club/1.jpg",
      "/reviews/jeddah-yacht-club/2.jpg",
      "/reviews/jeddah-yacht-club/3.jpg",
    ],
    href: "/reviews/jeddah-yacht-club",
    badge: "تجربة مميزة",
  },
  {
    id: "hediyet-alalia-bakery",
    title: "مخبز هدية الآلية",
    excerpt:
      "بشكل عام تجربة مقبولة مع ضرورة معالجة الملاحظات",
    reviewText:
      "مخبز بلدي متكامل خصوصا بعد التطوير الجديد مميز جدا في المخبوزات والشابورة الدخن وزيت الزيتون والرجيم والبسبوسة والفتوت والبيتفور والكيك تعامل الطاقم طيب الاسعار مقبولة تم التجربة شابورة زيت الزيتون بالحبة السوداء ( ممتازة وهشة والكمية جيدة ) غريبة ( هشة خفيفة ) شابورة حلوة ( خفيفة ) بسكوت مصري كلاسيك وشوكولاته ( منتج طيب ) بسبوسة مصرية ( طرية ونكهة طيبة وبحاجة لضبط السكر قليلا ) خبز الصامولي ( ممتاز نكهة وحجما واثناء القسمة ) نوصي بتغطية المخبوزات من الذباب وعدم اللمس من المستهلكين بشكل عام تجربة مقبولة مع ضرورة معالجة الملاحظات",
    rating: 4,
    categoryId: "sweets-bakeries",
    categoryLabel: "حلويات ومخابز",
    city: "مكة",
    country: "السعودية",
    locationLabel: "مكة · السعودية",
    dateLabel: "٢٤ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-24",
    googleMapsUrl: "https://maps.app.goo.gl/985BrAJ1QK8GnQcN8?g_st=iw",
    images: [
      "/reviews/hediyet-alalia-bakery/cover.jpg",
      "/reviews/hediyet-alalia-bakery/1.jpg",
      "/reviews/hediyet-alalia-bakery/2.jpg",
      "/reviews/hediyet-alalia-bakery/3.jpg",
      "/reviews/hediyet-alalia-bakery/4.jpg",
      "/reviews/hediyet-alalia-bakery/5.jpg",
      "/reviews/hediyet-alalia-bakery/6.jpg",
      "/reviews/hediyet-alalia-bakery/7.jpg",
      "/reviews/hediyet-alalia-bakery/8.jpg",
    ],
    href: "/reviews/hediyet-alalia-bakery",
  },
  {
    id: "century-burger",
    title: "سنشري برجر",
    excerpt:
      "اجمالا تجربة مقبولة",
    reviewText:
      "تجربة مستجدة المكان واسع يضم خيارات من الاطباق المقلية والمشوية والحلى والبرجر والمشروبات الطلب ترافل برجر هش وبالحبة السوداء حجم اللحم مقبول والنكهة طيبة بالاضافة للنكهة والاضافات والتقديم الجيد مع التوصية بالتقديم الساخن ذا اوريجنال جيد التحضير والمحتوى مع امكانية تحسين تتبيلة اللحم بطاطس كيجن سبايسي بتقديم ساخن مع التوصية بتحسين الاضافات بطاطس كلاسيك طازج ممتاز القلي والتشريح والطعم الخدمة مقبولة الاسعار فوق المتوسط مقابل الكميات والتجربة منطقة التحضير مرئية اجمالا تجربة مقبولة",
    rating: 3,
    categoryId: "restaurants",
    categoryLabel: "مطاعم",
    city: "مكة",
    country: "السعودية",
    locationLabel: "مكة · السعودية",
    dateLabel: "٢٤ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-24",
    googleMapsUrl: "https://maps.app.goo.gl/kM3TJeb1bWa4jhGYA?g_st=iw",
    images: [
      "/reviews/century-burger/cover.jpg",
      "/reviews/century-burger/1.jpg",
      "/reviews/century-burger/2.jpg",
      "/reviews/century-burger/3.jpg",
      "/reviews/century-burger/4.jpg",
      "/reviews/century-burger/5.jpg",
    ],
    href: "/reviews/century-burger",
  },
  {
    id: "khaleej-salman",
    title: "خليج سلمان",
    excerpt:
      "شاطئ رملي يحتاج للمزيد من الاهتمام والخدمات يمارس فيها السباحة باشراف دوريات حرس الحدود وضرورة اهتمام الزائر بنظافة المكان بعد استخدامه",
    reviewText:
      "شاطئ رملي يحتاج للمزيد من الاهتمام والخدمات يمارس فيها السباحة باشراف دوريات حرس الحدود وضرورة اهتمام الزائر بنظافة المكان بعد استخدامه",
    rating: 4,
    categoryId: "beaches",
    categoryLabel: "شواطئ ومنتجعات",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "١٥ يوليو ٢٠٢٦",
    dateISO: "2026-07-15",
    googleMapsUrl: "https://maps.app.goo.gl/zCkm2EVkGCMuioqK8?g_st=iw",
    images: [
      "/reviews/khaleej-salman/cover.jpg",
      "/reviews/khaleej-salman/1.jpg",
    ],
    href: "/reviews/khaleej-salman",
  },
  {
    id: "jeddah-waterfront",
    title: "الواجهة البحرية",
    excerpt:
      "منطقة جميلة بخدمات عديدة لاتنام ابدا",
    reviewText:
      "منطقة جميلة بخدمات عديدة لاتنام ابدا",
    rating: 5,
    categoryId: "tourist-attractions",
    categoryLabel: "معالم سياحية",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "٢٤ اكتوبر ٢٠٢٦",
    dateISO: "2026-10-24",
    googleMapsUrl: "https://maps.app.goo.gl/1tkqZJq6x8jtzJVc6?g_st=iw",
    images: [
      "/reviews/jeddah-waterfront/cover.jpg",
      "/reviews/jeddah-waterfront/1.jpg",
    ],
    href: "/reviews/jeddah-waterfront",
    badge: "تجربة مميزة",
  },
  {
    id: "u-walk-jeddah",
    title: "يو ووك جدة",
    excerpt:
      "اجمالا زيارة ممتازة",
    reviewText:
      "منطقة تسوق وترفيه جميلة للعائلة بالتصميم الحديث تضم مول ومناطق خارجية مفتوحة توجد العاب حركية وذكاء مختلفة وفعاليات للاطفال ( مجانية ) توجد نوافير بموسيقى واحواض اشجار ومسطحات خضراء وجلسات استراحة ولوحات ارشادية بالاضافة لبعض الكافيهات والمطاعم والمواقف الفسيحة ومصليات المول يضم ماركات ازياء ولوازم الاسرة وصالة سينما ويجري تجهيزه في الدور العلوي بالاضافة لبوابات مداخل اتوماتيكية المنظمون متعاونون اجمالا زيارة ممتازة",
    rating: 5,
    categoryId: "malls",
    categoryLabel: "مولات ومراكز تسوق",
    city: "جدة",
    country: "السعودية",
    locationLabel: "جدة · السعودية",
    dateLabel: "٢٥ سبتمبر ٢٠٢٦",
    dateISO: "2026-09-25",
    googleMapsUrl: "https://maps.app.goo.gl/GPxrUGzm2msrZgF19?g_st=iw",
    images: [
      "/reviews/u-walk-jeddah/cover.jpg",
      "/reviews/u-walk-jeddah/1.jpg",
      "/reviews/u-walk-jeddah/2.jpg",
      "/reviews/u-walk-jeddah/3.jpg",
      "/reviews/u-walk-jeddah/4.jpg",
      "/reviews/u-walk-jeddah/5.jpg",
      "/reviews/u-walk-jeddah/6.jpg",
    ],
    href: "/reviews/u-walk-jeddah",
    badge: "تجربة مميزة",
  },
  {
  id: "four-seasons-juices",
  title: "عصائر الفصول الأربعة",
  excerpt:
    "بشكل عام خيار جيد",
  reviewText:
    "زيارة مستجدة تتوفر لديهم كوكتيلات وموهيتو وايس كريم واصناف محدودة من الحلى توازن الاضافات جيد اعجبنا الرمان والرمان مع الاناناس باور جوس الفصول الاربعه التغليف ممتاز الخدمة مرضية الاسعار مقبولة مقابل التجربة بشكل عام خيار جيد",
  rating: 4,
  categoryId: "juices-drinks",
  categoryLabel: "عصائر ومشروبات",
  city: "جدة",
  country: "السعودية",
  locationLabel: "جدة · السعودية",
  dateLabel: "١٥ يوليو ٢٠٢٦",
  dateISO: "2026-07-15",
  googleMapsUrl: "https://www.google.com/maps/reviews/@21.5932682,39.2392541,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSURibjZMRmFBEAE!2m1!1s0x0:0xafd0583ba9329a57?hl=ar&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  images: [
    "/reviews/four-seasons-juices/cover.jpg",  
    "/reviews/four-seasons-juices/1.jpg",  
    "/reviews/four-seasons-juices/2.jpg",  
    "/reviews/four-seasons-juices/3.jpg",  
    "/reviews/four-seasons-juices/4.jpg",  
    "/reviews/four-seasons-juices/5.jpg",  
  ],
  href: "/reviews/four-seasons-juices",
},
{
  id: "dablyo-n-shaheer-alwehda",
  title: "شعير الوحدة | DABLYO N",
  excerpt:
    "اجمالا تجربة مرضية",
  reviewText:
    "زيارة جديدة المكان هادئ وصغير بجلسات محدودة ع السريع يضم نكهات من مشروب الشعير مثل السادة والمحلى والزنجبيل والتفاح والتوت يمكن الطلب بسكر أو بدون كما يتم إضافة الثلج تم تجربة الزنجبيل بانطباع عادي وخفيف جدا التقديم بهوية المكان منطقة التحضير مرتبة الخدمة سريعه الطاقم متعاون الاسعار متوسطة اجمالا تجربة مرضية",
  rating: 4,
  categoryId: "juices-drinks",
  categoryLabel: "عصائر ومشروبات",
  city: "جدة",
  country: "السعودية",
  locationLabel: "جدة · السعودية",
  dateLabel: "٢٦ اكتوبر ٢٠٢٦",
  dateISO: "2026-10-26",
  googleMapsUrl: "https://maps.app.goo.gl/aBFJ9AVmjq7WgAFB8?g_st=iw",
  images: [
    "/reviews/dablyo-n-shaheer-alwehda/cover.jpg",
    "/reviews/dablyo-n-shaheer-alwehda/1.jpg",
    "/reviews/dablyo-n-shaheer-alwehda/2.jpg",
    "/reviews/dablyo-n-shaheer-alwehda/3.jpg",
  ],
  href: "/reviews/dablyo-n-shaheer-alwehda",
},
{
  id: "house-express-tabuk",
  title: "هاوس اكسبريس",
  excerpt:
    "اجمالا تجربة لاباس بها وتستحق التكرار",
  reviewText:
    "تجربة اقامة في الدور الرابع 402 الفندق حديث البناء الغرفة انيقة الاثاث مريحة نظيفة دورة المياه والمفارش والوسائد بلا روائح وهادئة بعزل طيب الاستقبال مرتب عملية الحجز مرنة الطاقم متعاون السعر مقابل الاقامة والتجهيزات مقبول يجاور المكان الخدمات الاساسية مع توفر مدخل خاص لذوي الهمم اجمالا تجربة لاباس بها وتستحق التكرار",
  rating: 5,
  categoryId: "hotels",
  categoryLabel: "فنادق واقامة",
  city: "تبوك",
  country: "السعودية",
  locationLabel: "تبوك · السعودية",
  dateLabel: "١٩ اكتوبر ٢٠٢٦",
  dateISO: "2026-10-19",
  googleMapsUrl: "https://maps.app.goo.gl/vc3B7vH7UPK4LwLo8?g_st=iw",
  images: [
    "/reviews/house-express-tabuk/cover.jpg",
    "/reviews/house-express-tabuk/1.jpg",
    "/reviews/house-express-tabuk/2.jpg",
    "/reviews/house-express-tabuk/3.jpg",
    "/reviews/house-express-tabuk/4.jpg",
  ],
  href: "/reviews/house-express-tabuk",
},
{
  id: "morento-riyadh",
  title: "مورينتو",
  excerpt:
    "إجمالا تجربة جيدة وتستحق التكرار لتجربة خيارات القائمة مع اقتراحنا مراجعه الاسعار",
  reviewText:
    "زيارة جديدة المكان يقدم خيارات من الشوكلاته الفاخرة المستوردة بنكهات متعددة وبنسبة من الدارك شوكلت بالاضافة للدراجية وبعض الحلويات العربية مع وجود صوان فاخرة الطلب تشكيلة من الكراميل والكب كيك وتشيز كيك والكريب والبسكويت والورد والكورن فلكس وطبطاب الجنة والفستق واللوز والفلو شوكولا والسولتد كراميل الانطباع العام ممتازة الحشوة والحجم هشة متوازنة الحلى بجودة ممتازة في تحضير الشوكلت مع تقديم لطيف بهوية المكان الخدمة طيبة ونخص السيد إبراهيم منطقة العرض مرتبة الاسعار فوق المتوسط إجمالا تجربة جيدة وتستحق التكرار لتجربة خيارات القائمة مع اقتراحنا مراجعه الاسعار",
  rating: 5,
  categoryId: "chocolate",
  categoryLabel: "شوكولاته",
  city: "الرياض",
  country: "السعودية",
  locationLabel: "الرياض · السعودية",
  dateLabel: "٣٠ اكتوبر ٢٠٢٦",
  dateISO: "2026-10-30",
  googleMapsUrl: "https://maps.app.goo.gl/iAvjx5rfhfeWqjHB8?g_st=iw",
  images: [
    "/reviews/morento-riyadh/cover.jpg",
    "/reviews/morento-riyadh/1.jpg",
    "/reviews/morento-riyadh/2.jpg",
    "/reviews/morento-riyadh/3.jpg",
    "/reviews/morento-riyadh/4.jpg",
    "/reviews/morento-riyadh/5.jpg",
  ],
  href: "/reviews/morento-riyadh",
},
{
  id: "rols-chocolate-jeddah",
title: "Rols Chocolate | رولز شوكلت",
  excerpt: "إجمالا تجربة عادية",
  reviewText:
    "زيارة سريعه تم تجربة تشكيلة من تشيز كيك بسكوت براوني بيكان مقبولة نوعا ما من ناحية الحشوة مع توصيتنا مراعاة السكر وتحسين نوعية شوكولاته التغليف بهوية المكان يتوفر تجهيز صواني للمناسبات يتوفر معمول الاسعار نوعا ما مرتفعه مقابل التجربة الخدمة مقبولة إجمالا تجربة عادية",
  rating: 3,
  categoryId: "chocolate",
  categoryLabel: "شوكولاته",
  city: "جدة",
  country: "السعودية",
  locationLabel: "جدة · السعودية",
  dateLabel: "٣٠ يوليو ٢٠٢٦",
  dateISO: "2026-07-30",
  googleMapsUrl: "https://maps.app.goo.gl/2fuw3xJ9M4QnfHms6?g_st=iw",
  images: [
    "/reviews/rols-chocolate-jeddah/cover.jpg",
    "/reviews/rols-chocolate-jeddah/1.jpg",
    "/reviews/rols-chocolate-jeddah/2.jpg",
    "/reviews/rols-chocolate-jeddah/3.jpg",
  ],
  href: "/reviews/rols-chocolate-jeddah",
},
{
  id: "patchi-jeddah",
 title: "باتشي",
  excerpt: "إجمالا زيارة موفقة",
  reviewText:
    "تجربة مستجدة المكان مرتب مع عرض جميل للمبيعات والعلب خيارات من الشوكولاته بجودة ممتازة نكهات كلاسيكية ومميزة بتغليف جميل الخدمة لطيفة من الموظفة الاسعار فوق المتوسط مقبولة نوعا ما مقابل التجربة والخيارات المنافسة إجمالا زيارة موفقة",
  rating: 5,
  categoryId: "chocolate",
  categoryLabel: "شوكولاته",
  city: "جدة",
  country: "السعودية",
  locationLabel: "جدة · السعودية",
  dateLabel: "٣٠ اكتوبر ٢٠٢٦",
  dateISO: "2026-10-30",
  googleMapsUrl: "https://maps.app.goo.gl/sD9ZYfz9wzj22waj6?g_st=iw",
  images: [
    "/reviews/patchi-jeddah/cover.jpg",
    "/reviews/patchi-jeddah/1.jpg",
    "/reviews/patchi-jeddah/2.jpg",
    "/reviews/patchi-jeddah/3.jpg",
  ],
  href: "/reviews/patchi-jeddah",
},
{
  id: "aseirati-eshq",
  title: "عصيراتي عشق",
  excerpt:
    "تجربة جديدة وموفقة المكان مرتب ونظيف جدا الزيارة كانت ناجحة وانصح به",
  reviewText:
    "تجربة جديدة وموفقة المكان مرتب ونظيف جدا يقدم تشكيلة متنوعة من العصيرات الطازجة والكوكتيلات بالاضافة الى بوكسات مخصصة للنزهات البحرية والكوكيز جربنا عصير الرمان وكان ممتاز وكذلك الافوكادو بالمنجا الكوكتيل والليمون بالنعناع التحضير والطعم والتقديم كانوا في غاية الامتياز الخدمة لطيفة الاسعار في النطاق العام اجمالا الزيارة كانت ناجحة وانصح به",
  rating: 5,
  categoryId: "juices-drinks",
  categoryLabel: "عصائر ومشروبات",
  city: "جدة",
  country: "السعودية",
  locationLabel: "جدة · السعودية",
  dateLabel: "٢ نوفمبر ٢٠٢٦",
  dateISO: "2026-11-02",
  googleMapsUrl: "https://maps.app.goo.gl/FDop8DsZrHRgPGGEA?g_st=iw",
images: [
  "/reviews/aseirati-eshq/cover.jpg",
  "/reviews/aseirati-eshq/1.jpg",
],
  href: "/reviews/aseirati-eshq",
},

{
  id: "chan",
  title: "شان",
  excerpt:
    "المطعم مرتب بطابع حي يقدم تشكيلة من المطبخ الاسيوي اجمالا تجربة عادية",
  reviewText:
    "زيارة مستجدة المطعم مرتب بطابع حي يقدم تشكيلة من المطبخ الاسيوي الصيني و الكوري والتايلاندي والسنغافوري الطلب سلطة تايلندية جيدة التحضير والمكونات والطعم ارز خضار جيد الطهي بنكهة زيت السمسم تشاو تشاو ممتاز الاضافات والنكهة سوشي ديناميت كرنش لم يناسب ذائقتنا نودلز الدجاج بانطباع اقل من المتوقع وغياب النكهة لحم سشوان بحاجة لتحسين القساوة دجاج حلو حامض طري مزين بالاناناس والخضار مع قطع قليلة من الدجاج الباو باللحم خبز محشي باللحم على البخار عادي جدا هاوس كيمتشي ملفوف بالطريقة الكورية سبايسي بانطباع مقبول يتوفر جلسات داخلية وخارجية وممر للعربات ومنطقة العاب الكترونية منطقة التحضير غير مرئية الخدمة لطيفة الاسعار فوق المتوسط مقابل الكميات والتجربة اجمالا تجربة عادية",
  rating: 4,
  categoryId: "restaurants",
  categoryLabel: "مطاعم",
  city: "جدة",
  country: "السعودية",
  locationLabel: "جدة · السعودية",
  dateLabel: "٣١ اكتوبر ٢٠٢٦",
  dateISO: "2026-10-31",
  googleMapsUrl: "https://maps.app.goo.gl/FZvXGU3mxoCth3Gj6?g_st=iw",
images: [
  "/reviews/chan/cover.jpg",
  "/reviews/chan/1.jpg",
  "/reviews/chan/2.jpg",
  "/reviews/chan/3.jpg",
  "/reviews/chan/4.jpg",
  "/reviews/chan/5.jpg",
  "/reviews/chan/6.jpg",
  "/reviews/chan/7.jpg",
  "/reviews/chan/8.jpg",
],
  href: "/reviews/chan",
},
];

const cityNames: Record<string, LocalizedText> = {
  جدة: { ar: "جدة", en: "Jeddah" },
  عنيزة: { ar: "عنيزة", en: "Unaizah" },
  الرياض: { ar: "الرياض", en: "Riyadh" },
  الطائف: { ar: "الطائف", en: "Taif" },
  مكة: { ar: "مكة", en: "Makkah" },
  تبوك: { ar: "تبوك", en: "Tabuk" },
  بريدة: { ar: "بريدة", en: "Buraidah" },
  أبها: { ar: "أبها", en: "Abha" },
  الخبر: { ar: "الخبر", en: "Al Khobar" },
};

const englishReviewContent: Record<string, ReviewEnglishContent> = {
  "village-mall": {
    title: "Village Mall",
    excerpt:
      "A contemporary shopping mall in north Jeddah, with a welcoming experience for families and children.",
    reviewText:
      "A modern, three-storey mall on Al-Haramain Road in north Jeddah, with international brands, cafés, open-air spaces, children's activities, seating areas, fountains, parking, lifts, escalators and clear signs. It also has a supermarket, bookshop, restaurants, food court, pharmacy, play area, prayer rooms, screens and clean, modern restrooms. Despite the number of visitors, the corridors felt calm and well insulated. Overall, a pleasant mall for families and children.",
  },
  "red-sea-mall": {
    title: "Red Sea Mall",
    excerpt:
      "One of Jeddah's best-known shopping and visitor attractions, in a prime location beside the waterfront.",
    reviewText:
      "One of Jeddah's leading shopping and visitor destinations, spread across three levels. Parking is available above ground, underground and at the front. The mall features VOX Cinemas, Danube Hypermarket, an amusement area, bowling, international brands and cafés, and a range of restaurants. Strollers are available for children and older visitors. A hotel, telecom providers and two insurance companies are also on site. Its location near King Road, the waterfront and the airport is convenient, and ongoing improvements are a welcome addition.",
  },
  "the-california-burger": {
    title: "The California Burger",
    excerpt:
      "A satisfactory visit overall; the fries could improve, and drinks should arrive with the meal.",
    reviewText:
      "On this visit we ordered a double beef burger in a soft bun. The patty was cooked well, with a pleasant flavor and reasonable size; the sauce, lettuce, tomato, cheese and caramelized onions made for a satisfying burger. It was served hot and presented nicely. The cheese fries did not work for us: the potato type, frying and cheese flavor all need improvement. The venue has indoor seating on two levels, though its layout and service flow could be reconsidered. Service was quick, the staff were cooperative, and the preparation area was visible. Prices were moderate. Overall, a satisfactory experience, with a recommendation to improve the fries and serve drinks alongside the order.",
  },
  "coconut-bar": {
    title: "Coconut Bar",
    excerpt: "A decent visit overall.",
    reviewText:
      "A new visit to a somewhat small venue with limited seating, serving coffee and a modest selection of desserts and cookies. The Costa Rican pour-over was reasonably extracted and suited those who prefer a lighter cup. The pecan cheesecake was well prepared, balanced in sweetness and toppings, and presented in the venue's style. Service was satisfactory and the staff were friendly; prices were fair for the experience. We recommend making the preparation area more visible, displaying the menu, and improving the seating details. Overall, a decent visit.",
  },
  "marpik-cafe": {
    title: "Marpik Cafe",
    excerpt:
      "A pleasant experience worth repeating to try more items.",
    reviewText:
      "A return visit to a café with well-arranged indoor and outdoor seating and a wide selection of cakes, coffee and baked goods. The Madrid Choco cheesecake was well prepared and nicely sized, and the kunafa-filled Bastalova dessert was also well made. The Ethiopian pour-over was average, while the Brazilian hot coffee of the day was balanced and acceptable. Drinks were served in keeping with the café's identity. Service was satisfactory, the team was helpful, prices were moderate, and the preparation area was visible and tidy. Overall, a pleasant experience worth repeating to try other items.",
  },
  "tikka-masala": {
    title: "Tikka Masala",
    excerpt:
      "An enjoyable visit, with food that outshines the restaurant's modest exterior.",
    reviewText:
      "A new restaurant serving Indian cuisine. The chicken biryani was excellent in preparation, flavor and portion size; the lamb biryani had well-cooked rice and fresh lamb. Chicken 65 stood out for its marinade, tenderness and presentation. The mixed grill had authentic Indian flavor and good variety, and arrived hot. Butter chicken and chicken masala were well prepared, as were the fries and butter-garlic paratha. The vegetable soup was ordinary and could be thicker; the lemon mojito was well made. The staff were welcoming, with special mention to Qader and Mohammed, and prices were within the usual range. There is indoor seating across two floors, private rear parking, and complimentary hummus, mint yogurt, chili and crackers for tables. We suggest adding more visual elements that reflect the Indian cuisine. Overall, a successful visit, despite the restaurant's understated exterior.",
  },
  "nojom-alrafahiya-chalets": {
    title: "Nojom Al Rafahia Chalets",
    excerpt:
      "A distinctive, comfortable stay well suited to small and medium-sized families.",
    reviewText:
      "The modern chalet is thoughtfully finished and fully equipped, with a living room, two bedrooms, a kitchenette, dining table, swimming pool, clean bathrooms and a jacuzzi. The furniture was clean, the air conditioning and lighting were comfortable, and the views were open. There is outdoor seating and a barbecue area. Service was good, and the owner offered warm hospitality; booking was quick and flexible. The location is convenient and close to services, and the price was reasonable for the accommodation and facilities. We recommend adding a paved entrance and path for people with disabilities and older guests. Visitors should help keep the property clean and in good condition. Overall, a distinctive and comfortable stay for small and medium-sized families.",
  },
  "best-western": {
    title: "Best Western",
    excerpt: "A good stay overall.",
    reviewText:
      "The hotel is well organized and strategically located near the airport, restaurants and cafés. Facilities include a spacious lobby, café, two restaurants, gym, pool, event and meeting room, private parking and lifts. Room 603 on the sixth floor was quiet, spacious and reasonably soundproofed, with a pleasant view and excellent amenities. The bed and pillows were comfortable; the carpet and bathroom were clean, and the room had Bluetooth, central air conditioning and a tea-and-coffee corner. The refrigerator had no snacks. Reception was good, and the price was acceptable for the comfort, with breakfast available as an add-on. Special thanks to Mr. Sanani from security for his courtesy, diligence and follow-up. Overall, a good stay.",
  },
  "level-nine-hotel": {
    title: "Level Nine Hotel",
    excerpt:
      "A fair stay overall, with a few areas that could be improved.",
    reviewText:
      "We stayed in room 307 on the hotel's third floor. The hotel is in a good, quiet location, clean and close to services. It has very limited basement parking, few outdoor spaces, two lifts, a coffee shop and a modest breakfast buffet that could be improved. The room was spacious, with a wide window and good sound insulation. Basic amenities, central air conditioning, clean bedding and bathroom, and comfortable pillows made for a restful stay. Considering the location, timing, alternatives and services, the price was acceptable. The service team was friendly and reception staff were helpful, though we recommend more professionalism when dealing with different situations. Overall, a fair stay with room for improvement.",
  },
  "meez-restaurant": {
    title: "Meez Restaurant",
    excerpt: "A satisfying dining experience overall.",
    reviewText:
      "On this visit, the musakhan was well prepared, with good sauces, flavor, filling and presentation. The koshari bowl was tasty, as was the eggplant fattah and its toppings, though the ingredients could be better balanced. The tidy venue has seating across two floors, and a menu of creative dishes, appetizers and baked items. Service was quick. Prices were above average for the portion sizes and experience, and tables often need to be booked. Food preparation is not visible, and special celebration packages are available. Overall, a satisfying experience.",
  },
  "tateeba-justina": {
    title: "Tateeba Justina",
    excerpt: "A satisfying experience overall.",
    reviewText:
      "This venue serves traditional Hijazi sweets, cheese, fava beans, mutabbaq, pickles and bread. The spicy maasoub was average, and its ingredients and preparation could improve. The olive-oil fava beans were excellent, with good flavor and toppings. The bread was well made, though the tamees could be better. The seven-piece falafel plate was hot and well fried, with excellent tahini, pickle and daqqous, but the pieces were small and few for the price. The venue has a neat Hijazi character and varied seating. Service was acceptable, but prices were high for the portions, and preparation was not visible. We suggest offering a small traditional breakfast welcome. Overall, a satisfying experience.",
  },
  "obhur-new-waterfront": {
    title: "New Obhur Waterfront",
    excerpt:
      "A pleasant, well-organized waterfront with clear signs and varied services.",
    reviewText:
      "A beautiful, well-organized and modern area with clear directional signs and a variety of services, including restaurants, cafés, swimming areas and paid restrooms. Visitors should help keep it clean and well maintained.",
  },
  "almahazim-beach": {
    title: "Al Mahazim Beach",
    excerpt:
      "An open sandy beach for swimming and children's play, with families keeping watch.",
    reviewText:
      "A pleasant, open stretch of sandy beach for swimming and for children to play in the sand under their families' supervision. Parking is limited, but lifeguards are present. The area also has play activities, horse riding, quad bikes and paid restrooms. We encourage both the authorities and visitors to take better care of cleanliness.",
  },
  "green-side": {
    title: "Green Side",
    excerpt: "A successful visit overall.",
    reviewText:
      "On a morning visit, the carrot cake was excellent in preparation, toppings, portion, flavor and presentation. The Colombian coffee of the day was well extracted, balanced in acidity and aromatic, served in the café's style. The spacious venue has comfortable, thoughtfully designed indoor and outdoor seating and a varied menu of coffee, desserts and baked goods. The preparation area was tidy, service was quick and self-service, and the staff were helpful. We recommend adding more payment options. Overall, a successful visit.",
  },
  "bridge-cafe": {
    title: "Bridge Café",
    excerpt:
      "A successful visit worth repeating to try more items.",
    reviewText:
      "This café serves coffee and hot and cold desserts in a well-arranged indoor setting, with a visible preparation area. The Colombian coffee of the day was expertly extracted and balanced in acidity. The Belgian pecan French toast, with kiri filling, was soft, light and well prepared, with good toppings and presentation that reflected the café's style. We recommend a more generous portion and clearer pecan toppings. Staff were helpful and prices were within the usual range. Overall, a successful visit worth repeating to try other items.",
  },
  "process-cafe": {
    title: "Process Café & Roastery",
    excerpt: "An acceptable visit overall.",
    reviewText:
      "The café offers hot and cold specialty coffee, chilled desserts and ice cream. The Dolce cheesecake, made with biscuits, caramel and cream, was well prepared and presented in the venue's style, though its sweetness could be better balanced. The hot Ethiopian coffee of the day had balanced acidity and was served in matching cups. Service was quick and self-service, the staff followed mask guidance, prices were reasonable, and the preparation area was tidy. There is pleasant indoor seating with open views of the main road, as well as outdoor seating and roastery products for sale. We suggest expanding the dessert selection. Overall, an acceptable visit.",
  },
  panozzo: {
    title: "Panozzo",
    excerpt:
      "A good experience worth repeating to try more items.",
    reviewText:
      "This restaurant has limited indoor seating and serves Italian dishes, including pizza, pasta, sandwiches, fries and salads. The chicken pesto had excellent dough, baking, toppings and flavor; the chicken ranch was also very good in its dough, preparation, toppings and filling. Presentation reflected the restaurant's style. Service was good, though greater readiness and speed would help. Prices were moderate. We recommend making the preparation area more visible and offering more payment options. Overall, a good experience worth repeating to try other items.",
  },
  "medical-cupping-center": {
    title: "Medical Cupping Therapy Center",
    excerpt: "A good choice for cupping therapy.",
    reviewText:
      "The center was clean and organized, and reception was welcoming. Booking in advance through WhatsApp was quick. The women's section provided a successful cupping session with specialist Maram; specialist Majed Al-Sayed, Mr. Mohammed Nafeth and Abdullah Al-Shamrani also provided skilled sessions. The procedure was professional, calm and hygienic, with guidance, aftercare advice and healthy drinks offered. Prices were reasonable for the experience. Overall, a good choice for cupping therapy.",
  },
  "yana-bakery": {
    title: "Yana Bakery",
    excerpt: "The experience fell short of expectations overall.",
    reviewText:
      "This venue has indoor seating and serves baked goods, desserts, coffee, some dishes and sandwiches. The club sandwich was prepared well but had too few ingredients; the fries were nicely cooked. The chicken pesto on multigrain bread was well prepared and toasted, while the mushroom quiche was unfortunately salty and poorly made. The passion mojito was refreshing and presented in the venue's style, and the custard dessert was well prepared. The preparation area was visible and service was satisfactory, though it could improve. Prices were somewhat reasonable for the experience. Overall, the visit fell short of expectations.",
  },
  "sesam-bakery": {
    title: "Sesam Bakery",
    excerpt: "A satisfactory experience overall.",
    reviewText:
      "A small venue with limited indoor seating, offering savory and sweet baked goods and coffee. The caprese was well prepared with a good filling, as was the spinach pain suisse. The custard-and-berry bow pastry was crisp with a pleasant filling, and the Turkish croissant was well made and flaky. Items were presented in the bakery's style. Service was quick, the team was friendly, and the display area was tidy. Prices were above average for the portions. Overall, a satisfactory experience.",
  },
  "bakery-m": {
    title: "Bakery M",
    excerpt: "A satisfying morning visit.",
    reviewText:
      "A pleasant morning visit to a bakery with thoughtful details, indoor and outdoor seating, and a wide selection of creative desserts and baked goods. The cinnamon babka was well prepared and flavorful, though more toppings would help. The banana cake with peanuts had good preparation and toppings, with room to develop its flavor. The hot Ethiopian coffee of the day was well extracted and balanced. Service was acceptable, the preparation area was visible, and prices were moderate for the portions and experience. The staff were helpful, with special mention to Mr. Osama. We suggest improving presentation to reflect the bakery's identity and adding appealing menu offers. Overall, a satisfying visit.",
  },
  "renar-cafe": {
    title: "Renar Café",
    excerpt:
      "A renewed visit to a pleasant, spacious café spread across two floors.",
    reviewText:
      "The spacious two-floor café has a refreshed look. The ganache cheesecake had good flavor and balanced sweetness. The date-and-pecan cake was excellent in preparation, toppings and flavor; the cookie cake was soft, layered and balanced. Hot Colombian coffee was excellent, balanced and fruity, while the cold Ethiopian coffee was well extracted and served nicely. The mango hibiscus was well made and refreshing. The honey cake was acceptable but could be less sweet, and the cookies were good. Service is self-service; the menu includes varied desserts and hot and cold coffee. The preparation area was tidy and prices moderate. Staff need better reception training. We also recommend improving the melted-chocolate presentation, clarifying the upstairs seating policy, training the cashier, improving the ice machine and paying more attention to restrooms. Overall, the visit was not as good as before and needs technical improvements.",
  },
  "jeddah-yacht-club": {
    title: "Jeddah Yacht Club",
    excerpt: "A beautiful place well worth visiting.",
    reviewText:
      "A quick visit to a beautiful, well-organized public space on the Red Sea coast, with cafés, restaurants, a hotel and a marina for luxury and tourist boats. It also connects to Jeddah transport and the water-taxi stop. The atmosphere is calm, with multiple entrances, paid outdoor and private parking, and free parking for visitors with disabilities. Restrooms were clean, security was visible, and visitor guidance was available. Overall, a beautiful place well worth visiting.",
  },
  "hediyet-alalia-bakery": {
    title: "Hediyet Alalia Bakery",
    excerpt:
      "A generally satisfactory visit, with a few issues that need attention.",
    reviewText:
      "A traditional bakery with a broad selection, especially after its recent renovation. It stands out for millet rusks, olive-oil and diet rusks, basbousa, savory pastries, petit fours and cakes. Staff were pleasant and prices reasonable. We tried olive-oil and black-seed rusks (excellent, crisp and a good portion), light ghorayeba, sweet rusks, classic Egyptian and chocolate biscuits, Egyptian basbousa (soft and flavorful, though a little less sugar would help), and excellent samoli bread. We recommend keeping flies away from the baked goods and preventing customers from touching them. Overall, a satisfactory experience with some issues to address.",
  },
  "century-burger": {
    title: "Century Burger",
    excerpt: "An acceptable experience overall.",
    reviewText:
      "A spacious venue with fried and grilled dishes, desserts, burgers and drinks. The truffle burger was soft, topped with black sesame, and had a reasonably sized, flavorful patty with good toppings and presentation; it should be served hotter. The Original was well prepared, though the meat seasoning could improve. The spicy Cajun fries arrived hot but need better toppings, while the fresh classic fries were excellent in their frying, cut and taste. Service was acceptable, prices were above average for the portions and experience, and the preparation area was visible. Overall, an acceptable experience.",
  },
  "khaleej-salman": {
    title: "Salman Gulf",
    excerpt:
      "A sandy beach that needs more care and services; swimmers are monitored by border patrols.",
    reviewText:
      "This sandy beach needs more care and services. Swimming is monitored by Border Guard patrols, and visitors should make sure to clean up after themselves.",
  },
  "jeddah-waterfront": {
    title: "Jeddah Waterfront",
    excerpt: "A beautiful area with many services and activity around the clock.",
    reviewText:
      "A beautiful waterfront area with a wide range of services and activity at all hours.",
  },
  "u-walk-jeddah": {
    title: "U Walk Jeddah",
    excerpt: "An excellent visit overall.",
    reviewText:
      "A modern shopping and entertainment destination for families, with a mall and open-air areas. It offers various skill and movement games, free children's activities, musical fountains, tree planters, green spaces, seating and clear signs, alongside cafés, restaurants, spacious parking and prayer rooms. The mall includes fashion and home brands and a cinema, with an upper floor under preparation and automatic entrance gates. The organizers were helpful. Overall, an excellent visit.",
  },
  "four-seasons-juices": {
    title: "Four Seasons Juices",
    excerpt: "A good option overall.",
    reviewText:
      "On a recent visit, we found cocktails, mojitos, ice cream and a limited dessert selection. The toppings were well balanced. We enjoyed the pomegranate and pomegranate-pineapple drinks, as well as the Four Seasons Power Juice. Packaging was excellent, service satisfactory and prices reasonable for the experience. Overall, a good option.",
  },
  "dablyo-n-shaheer-alwehda": {
    title: "Dablyo N Shaheer Alwehda",
    excerpt: "A satisfying experience overall.",
    reviewText:
      "A new visit to a quiet, small venue with limited quick-service seating. It offers barley drinks in plain, sweetened, ginger, apple and berry flavors, with the option of sugar and ice. The ginger drink was ordinary and very light. Presentation matched the venue's style, the preparation area was tidy, service was quick, and the staff were helpful. Prices were moderate. Overall, a satisfying experience.",
  },
  "house-express-tabuk": {
    title: "House Express",
    excerpt: "A decent stay worth repeating.",
    reviewText:
      "We stayed in room 402 on the fourth floor. The newly built hotel had an elegant, comfortable and clean room, with fresh-smelling bathroom, bedding and pillows, and good sound insulation. Reception was organized, booking was flexible and the staff were helpful. The price was reasonable for the stay and amenities. Essential services are nearby, and there is a dedicated entrance for guests with disabilities. Overall, a decent stay worth repeating.",
  },
  "morento-riyadh": {
    title: "Morento",
    excerpt:
      "A good experience worth repeating; we recommend reviewing the prices.",
    reviewText:
      "A new visit to a shop offering imported premium chocolates in many flavors and dark-chocolate percentages, dragees, Arabic sweets and elegant trays. We tried an assortment of caramel, cupcakes, cheesecake, crepes, biscuits, rose-shaped sweets, cornflakes, pistachio, almond, flow chocolate and salted caramel. The fillings and portions were excellent, with crisp textures and balanced sweetness. The chocolate was well made and presented in the shop's style. Service was good, with special mention to Mr. Ibrahim, and the display area was tidy. Prices were above average. Overall, a good experience worth repeating to try more of the menu, though we recommend reviewing the prices.",
  },
  "rols-chocolate-jeddah": {
    title: "Rols Chocolate",
    excerpt: "An ordinary experience overall.",
    reviewText:
      "On a quick visit, we tried a selection of cheesecake, biscuit and pecan brownie. The fillings were acceptable, though we recommend paying attention to sweetness and improving the quality of the chocolate used in the venue's branded packaging. Custom trays for occasions and maamoul are available. Service was acceptable, but prices were somewhat high for the experience. Overall, an ordinary visit.",
  },
  "patchi-jeddah": {
    title: "Patchi",
    excerpt: "A successful visit overall.",
    reviewText:
      "The shop was well organized, with an attractive display of products and gift boxes. The chocolate selection was excellent, with classic and distinctive flavors in elegant packaging. The employee provided friendly service. Prices were above average but reasonably matched the experience and competing options. Overall, a successful visit.",
  },
  "aseirati-eshq": {
    title: "Aseirati Eshq",
    excerpt:
      "A successful visit to a very clean, well-organized place that we recommend.",
    reviewText:
      "A new and successful visit to a very clean, well-organized juice shop. It offers fresh juices, cocktails, picnic boxes for seaside outings and cookies. The pomegranate juice was excellent, as were the avocado-mango cocktail and lemon-mint drink. Preparation, flavor and presentation were all outstanding. Service was friendly and prices were within the usual range. Overall, a successful visit that we recommend.",
  },
  chan: {
    title: "Chan",
    excerpt:
      "A lively restaurant with a wide range of Asian dishes; an average experience overall.",
    reviewText:
      "This lively, well-arranged restaurant serves Chinese, Korean, Thai and Singaporean cuisine. The Thai salad was well prepared, with good ingredients and flavor, and the vegetable rice was nicely cooked with sesame oil. The chow chow was excellent. The dynamite-crunch sushi did not suit our taste, the chicken noodles were below expectations and lacked flavor, and the Szechuan beef was tough and needs improvement. The sweet-and-sour chicken was tender with pineapple and vegetables, though it had few chicken pieces. The steamed beef bao was very ordinary, while the spicy house kimchi was acceptable. There is indoor and outdoor seating, stroller access and an electronic games area. The kitchen is not visible, service was pleasant, and prices were above average for the portions and experience. Overall, an average experience.",
  },
};

const countryNames: Record<string, LocalizedText> = {
  السعودية: { ar: "السعودية", en: "Saudi Arabia" },
  مصر: { ar: "مصر", en: "Egypt" },
  تركيا: { ar: "تركيا", en: "Türkiye" },
  جورجيا: { ar: "جورجيا", en: "Georgia" },
};

export function localizePlaceName(name: string, locale: "ar" | "en") {
  return cityNames[name]?.[locale] ?? countryNames[name]?.[locale] ?? name;
}

export const reviews: ReviewItem[] = reviewSources.map((review) => {
  const english = englishReviewContent[review.id];
  const city = cityNames[review.city];
  const country = countryNames[review.country];

  if (!english || !city || !country) {
    throw new Error(`Missing localized review content for "${review.id}".`);
  }

  return {
    id: review.id,
    title: { ar: review.title, en: english.title },
    excerpt: { ar: review.excerpt, en: english.excerpt },
    reviewText: review.reviewText
      ? { ar: review.reviewText, en: english.reviewText }
      : undefined,
    rating: review.rating,
    categoryId: review.categoryId,
    city,
    country,
    dateISO: review.dateISO,
    images: review.images,
    googleMapsUrl: review.googleMapsUrl,
    href: review.href,
    badge: review.badge
      ? { ar: review.badge, en: "Featured experience" }
      : undefined,
    featured: review.featured,
  };
});
