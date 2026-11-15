"use client";

import { useEffect, useRef, useState } from "react";
import HeroTimelineNode from "@/components/website/home/Hero/HeroTop/HeroTimelineNode";
import { useTranslations } from "next-intl";


const timelineStops = [
  0.00, // السعودية
  0.196, // وجهات عالمية
  0.392, // مصر
  0.588, // تركيا
  0.784, // جورجيا
  0.98, // الطائرة
];
export default function HeroTimeline() {
  const t = useTranslations("Home.hero.timeline");
  const pathRef = useRef<SVGPathElement>(null);

  const [points, setPoints] = useState<DOMPoint[]>([]);
  const timelineItems = [
    {
      type: "sa",
      title: t("saudi.title"),
      subtitle: t("saudi.subtitle"),
      description: t("saudi.description"),
      flag: "/flags/sa.svg",
      scale: true,
    },
    { type: "world", title: t("world.title") },
    { type: "eg", title: t("egypt.title"), flag: "/flags/eg2.png", scale: true },
    { type: "tr", title: t("turkey.title"), flag: "/flags/tr.png", scale: true },
    { type: "ge", title: t("georgia.title"), flag: "/flags/ge.png", scale: true },
    { type: "plane", title: t("upcoming.title") },
  ];

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;

    const length = path.getTotalLength();

const result = timelineStops.map((stop) =>
  path.getPointAtLength(length * stop)
);

    setPoints(result);
  }, []);

  return (
    <div className="relative w-[120px] h-[430px] mt-5 ">
      <svg
        width="120"
      height="430"
viewBox="0 0 120 430"
        fill="none"
        className="absolute inset-0 overflow-visible"
      >
        <defs>
          <filter
            id="goldGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
       <path
  ref={pathRef}
  d="
    M70 8

    C75 28 55 55 60 100

    C60 118 60 150 60 180

    C60 220 60 260 60 300

    C60 338 60 374 60 410
  "
  fill="none"
  stroke="var(--color-accent)"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeDasharray="4 5"
  filter="url(#goldGlow)"
/>
      </svg>
      {points.map((point, index) => (
        <HeroTimelineNode
          key={index}
          point={point}
          item={timelineItems[index]}
        />
      ))}
    </div>
  );
}