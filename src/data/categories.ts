
import { Category } from "@/types/website";
import {
    Candy,
    Coffee,
    CupSoda,
    Croissant,
    FerrisWheel,
    Globe2,
    HeartPulse,
    Hotel,
    Landmark,
    ShoppingBag,
    Trees,
    Utensils,
    Waves,
} from "lucide-react";

// Categories: 
// restaurants, 
// cafes, 
// juices-drinks,
// sweets-bakeries, 
// chocolate,
// beaches, 
// hotels, 
// health-care, 
// tourist-attractions, 
// parks, 
// malls, 
// international-destinations.


export const categories: Category[] = [
    {
        id: 'restaurants',
        title: { ar: 'مطاعم', en: 'Restaurants' },
        description: {
            ar: "تجارب طعام استثنائية في أفضل المطاعم المحلية والعالمية",
            en: "Memorable dining experiences at outstanding local and international restaurants",
        },
        count: 146,
        href: '/reviews?category=restaurants',
        img: '/hero-slider-images/restaurants.jpg',
        icon: Utensils,
        showInFooter: true,
        showInHero: true,
        showInHomeCategories: true,
        showInHomeCards: true,
        featuredCardImage: ""
    },
    {
        id: 'cafes',
        title: { ar: 'كافيهات', en: 'Cafés' },
        description: {
            ar: "مقاهٍ مميزة تقدم القهوة والأجواء التي تناسب مختلف الأذواق",
            en: "Distinctive cafés serving coffee and atmospheres for every taste",
        },
        count: 87,
        href: '/reviews?category=cafes',
        img: '/hero-slider-images/cafes.jpg',
        icon: Coffee,
        showInFooter: true,
        showInHero: true,
        showInHomeCategories: true,
        showInHomeCards: true,
        featuredCardImage: ""
    },

    {
        id: 'sweets-bakeries',
        title: { ar: 'حلويات ومخابز', en: 'Sweets & bakeries' },
        description: {
            ar: "حلويات طازجة ومخبوزات متنوعة لعشاق المذاق الحلو.",
            en: "Fresh desserts and baked goods for those with a sweet tooth",
        },
        count: 58,
        href: '/reviews?category=sweets-bakeries',
        img: '/hero-slider-images/sweets-bakeries.jpg',
        icon: Croissant,
        showInFooter: true,
        showInHero: true,
        showInHomeCategories: true,
        showInHomeCards: true,
        featuredCardImage: ""
    },

    {
        id: 'chocolate',
        title: { ar: 'شوكولاته', en: 'Chocolate' },
        description: {
            ar: "تجارب متنوعة لعشاق الشوكولاته والحلويات المصنوعة منها.",
            en: "A variety of experiences for chocolate and dessert lovers",
        },
        count: 0,
        href: '/reviews?category=chocolate',
        img: '/hero-slider-images/chocolate.jpg',
        icon: Candy,
        showInFooter: false,
        showInHero: true,
        showInHomeCategories: false,
        showInHomeCards: false,
        featuredCardImage: ""
    },

    {
        id: 'juices-drinks',
        title: { ar: 'عصائر ومشروبات', en: 'Juices & drinks' },
        description: {
            ar: "تجارب متنوعة من العصائر الطازجة والمشروبات الباردة والساخنة.",
            en: "Fresh juices and a variety of hot and cold drinks",
        },
        count: 0,
        href: '/reviews?category=juices-drinks',
        img: '/hero-slider-images/juices-drinks.jpg',
        icon: CupSoda,
        showInFooter: false,
        showInHero: true,
        showInHomeCategories: false,
        showInHomeCards: false,
        featuredCardImage: ""
    },

    {
        id: 'beaches',
        title: { ar: 'شواطئ ومنتجعات', en: 'Beaches & resorts' },
        description: {
            ar: "وجهات ساحلية ومنتجعات للاسترخاء والاستمتاع بإطلالات البحر",
            en: "Coastal destinations and resorts for relaxing by the sea",
        },
        count: 37,
        href: '/reviews?category=beaches',
        img: '/hero-slider-images/beaches-corniche.jpg',
        icon: Waves,
        showInFooter: true,
        showInHero: true,
        showInHomeCategories: false,
        showInHomeCards: true,
        featuredCardImage: '/featuredCards/jeddah-beaches.jpg',
    },
    {
        id: 'hotels',
        title: { ar: 'فنادق وإقامة', en: 'Hotels & accommodation' },
        description: {
            ar: "أماكن إقامة متنوعة تجمع بين الراحة وجودة الضيافة",
            en: "Places to stay that bring together comfort and quality hospitality",
        },
        count: 74,
        href: '/reviews?category=hotels',
        img: '/hero-slider-images/hotels.jpg',
        icon: Hotel,
        showInFooter: true,
        showInHero: true,
        showInHomeCategories: true,
        showInHomeCards: true,
        featuredCardImage: ""
    },
    {
        id: 'health-care',
        title: { ar: 'صحة وعناية', en: 'Health & wellness' },
        description: {
            ar: "مراكز وخدمات تهتم بالصحة والعناية الشخصية",
            en: "Centers and services focused on health and personal care",
        },
        count: 0,
        href: '/reviews?category=health-care',
        img: '/hero-slider-images/health-care2.jpg',
        icon: HeartPulse,
        showInFooter: true,
        showInHero: true,
        showInHomeCategories: true,
        showInHomeCards: true,
        featuredCardImage: "/hero-slider-images/health-care.jpg"
    },
    {
        id: 'tourist-attractions',
        title: { ar: 'معالم سياحية', en: 'Tourist attractions' },
        description: {
            ar: "معالم بارزة ووجهات تستحق الزيارة والاستكشاف.",
            en: "Notable landmarks and destinations worth discovering",
        },
        count: 91,
        href: '/reviews?category=tourist-attractions',
        img: '/hero-slider-images/elola.jpg',
        icon: Landmark,
        showInFooter: true,
        showInHero: true,
        showInHomeCategories: true,
        showInHomeCards: true,
        featuredCardImage: ""
    },
    {
        id: 'parks',
        title: { ar: 'حدائق ومتنزهات', en: 'Parks & gardens' },
        description: {
            ar: "مساحات خضراء ومتنزهات مناسبة لقضاء وقت ممتع في الهواء الطلق.",
            en: "Green spaces and parks for enjoying time outdoors",
        },
        count: 69,
        href: '/reviews?category=parks',
        img: '/hero-slider-images/parks4.jpg',
        icon: Trees,
        showInFooter: false,
        showInHero: true,
        showInHomeCategories: false,
        showInHomeCards: false,
        featuredCardImage: ""
    },
    {
        id: 'malls',
        title: { ar: 'مولات ومراكز تسوق', en: 'Malls & shopping centers' },
        description: {
            ar: "مراكز تجمع التسوق والمطاعم وخيارات الترفيه في مكان واحد.",
            en: "Places bringing shopping, dining, and entertainment together",
        },
        count: 52,
        href: '/reviews?category=malls',
        img: '/hero-slider-images/malls.jpg',
        icon: ShoppingBag,
        showInFooter: false,
        showInHero: true,
        showInHomeCategories: false,
        showInHomeCards: false,
        featuredCardImage: ""
    },
    {
        id: 'international-destinations',
        title: { ar: 'وجهات عالمية', en: 'International destinations' },
        description: {
            ar: "وجهات حول العالم تقدم تجارب جديدة وفرصًا للاستكشاف.",
            en: "Destinations around the world offering new experiences and opportunities to explore",
        },
        count: 83,
        href: '/reviews?category=international-destinations',
        img: '/hero-slider-images/international-destinations.jpg',
        icon: Globe2,
        showInFooter: true,
        showInHero: true,
        showInHomeCategories: true,
        showInHomeCards: true,
        featuredCardImage: "/featuredCards/internationalFeaturedCard.png"
    },
];
