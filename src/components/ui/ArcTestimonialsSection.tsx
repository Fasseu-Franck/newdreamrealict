"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Testimonial } from "@/data/centerData";
import { Star, Quote, MessageSquareHeart } from "lucide-react";

interface ArcTestimonialsSectionProps {
  testimonials: Testimonial[];
}

// Preset rich soft-tinted themes for each card (matching the reference image's pastel feel adapted to dark mode)
const CARD_THEMES = [
  {
    // Soft Lavender / Indigo
    bg: "bg-gradient-to-b from-[#1e1b36] to-[#16142a]",
    border: "border-[#6366f1]/30 hover:border-[#818cf8]",
    text: "text-white",
    subtext: "text-[#a5b4fc]",
    quoteColor: "text-[#6366f1]/40",
    badgeBg: "bg-[#6366f1]/20 text-[#c7d2fe] border-[#6366f1]/30",
    glow: "shadow-[0_12px_40px_-10px_rgba(99,102,241,0.25)]",
  },
  {
    // Soft Mint / Emerald
    bg: "bg-gradient-to-b from-[#132c22] to-[#0c2018]",
    border: "border-[#56b94c]/30 hover:border-[#76f57e]",
    text: "text-white",
    subtext: "text-[#a7f3d0]",
    quoteColor: "text-[#56b94c]/40",
    badgeBg: "bg-[#56b94c]/20 text-[#76f57e] border-[#56b94c]/30",
    glow: "shadow-[0_12px_40px_-10px_rgba(86,185,76,0.25)]",
  },
  {
    // Soft Warm Cream / Gold
    bg: "bg-gradient-to-b from-[#2e2417] to-[#21190e]",
    border: "border-[#f59e0b]/30 hover:border-[#fbbf24]",
    text: "text-white",
    subtext: "text-[#fde68a]",
    quoteColor: "text-[#f59e0b]/40",
    badgeBg: "bg-[#f59e0b]/20 text-[#fcd34d] border-[#f59e0b]/30",
    glow: "shadow-[0_12px_40px_-10px_rgba(245,158,11,0.25)]",
  },
  {
    // Soft Cyan / Blue
    bg: "bg-gradient-to-b from-[#142638] to-[#0d1a27]",
    border: "border-[#0ea5e9]/30 hover:border-[#38bdf8]",
    text: "text-white",
    subtext: "text-[#bae6fd]",
    quoteColor: "text-[#0ea5e9]/40",
    badgeBg: "bg-[#0ea5e9]/20 text-[#7dd3fc] border-[#0ea5e9]/30",
    glow: "shadow-[0_12px_40px_-10px_rgba(14,165,233,0.25)]",
  },
  {
    // Soft Rose / Violet
    bg: "bg-gradient-to-b from-[#321a2c] to-[#241120]",
    border: "border-[#ec4899]/30 hover:border-[#f472b6]",
    text: "text-white",
    subtext: "text-[#fbcfe8]",
    quoteColor: "text-[#ec4899]/40",
    badgeBg: "bg-[#ec4899]/20 text-[#f472b6] border-[#ec4899]/30",
    glow: "shadow-[0_12px_40px_-10px_rgba(236,72,153,0.25)]",
  },
  {
    // Soft Forest Teal
    bg: "bg-gradient-to-b from-[#0f2e27] to-[#091f1a]",
    border: "border-[#14b8a6]/30 hover:border-[#2dd4bf]",
    text: "text-white",
    subtext: "text-[#99f6e4]",
    quoteColor: "text-[#14b8a6]/40",
    badgeBg: "bg-[#14b8a6]/20 text-[#5eead4] border-[#14b8a6]/30",
    glow: "shadow-[0_12px_40px_-10px_rgba(20,184,166,0.25)]",
  },
];

// Pre-computed arc rotations & vertical offsets for the 6 cards
const ARC_TRANSFORMS = [
  { rotate: -8, translateY: 24 },
  { rotate: -4, translateY: 8 },
  { rotate: -1, translateY: 0 },
  { rotate: 1, translateY: 0 },
  { rotate: 4, translateY: 8 },
  { rotate: 8, translateY: 24 },
];

export default function ArcTestimonialsSection({
  testimonials,
}: ArcTestimonialsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Ensure we use 6 testimonials
  const displayTestimonials = testimonials.slice(0, 6);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#56b94c]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13293d]/80 border border-[#56b94c]/40 backdrop-blur-md shadow-md">
          <MessageSquareHeart className="w-4 h-4 text-[#76f57e]" />
          <span className="text-xs font-bold text-[#76f57e] tracking-wider uppercase">
            Avis & Témoignages
          </span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          De vraies histoires. <br className="hidden sm:inline" />
          <span className="text-gradient-green">De vraies réussites.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#c3c6cd] max-w-xl mx-auto">
          Découvrez les retours d'expérience de nos diplômés et apprenants formés au CFPC Dream Real-ICT.
        </p>
      </div>

      {/* Arc Cards Grid Container */}
      <div className="relative pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-4 items-stretch justify-center">
          {displayTestimonials.map((t, idx) => {
            const theme = CARD_THEMES[idx % CARD_THEMES.length];
            const transformConfig = ARC_TRANSFORMS[idx % ARC_TRANSFORMS.length];
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={t.id || idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={false}
                animate={{
                  rotate: isHovered ? 0 : transformConfig.rotate,
                  y: isHovered ? -14 : transformConfig.translateY,
                  scale: isHovered ? 1.06 : 1,
                  zIndex: isHovered ? 30 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                className={`relative rounded-3xl p-6 border ${theme.bg} ${theme.border} ${
                  isHovered ? theme.glow : "shadow-lg"
                } transition-shadow duration-300 flex flex-col justify-between cursor-pointer select-none min-h-[300px] sm:min-h-[320px]`}
              >
                {/* Top Section: Name, Role Badge, Stars (NO AVATAR PHOTO) */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className={`font-heading font-extrabold text-lg ${theme.text} tracking-tight`}>
                        {t.name}
                      </h3>
                      <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 mt-1 rounded-full border ${theme.badgeBg}`}>
                        {t.role}
                      </span>
                    </div>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 pt-1">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote Content */}
                <p className={`text-xs sm:text-sm ${theme.text}/90 leading-relaxed font-normal my-4 relative z-10 italic`}>
                  "{t.quote}"
                </p>

                {/* Bottom Section: Stylized Quote Icon at bottom right */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className={`text-[10px] uppercase font-bold tracking-widest ${theme.subtext}`}>
                    Avis Vérifié
                  </span>
                  <Quote className={`w-6 h-6 ${theme.quoteColor} rotate-180`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
