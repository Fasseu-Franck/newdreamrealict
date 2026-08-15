"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StatItem } from "@/data/centerData";
import { Award, Users, BookOpen, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

interface AnimatedStatsSectionProps {
  stats: StatItem[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  Users,
  BookOpen,
  TrendingUp,
};

// Subtle Grid Overlay SVG component to match high-end data aesthetic
function CardGridPattern({ active }: { active: boolean }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
        active ? "opacity-30 text-[#76f57e]" : "opacity-10 text-white"
      }`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`grid-pattern-${active ? "active" : "inactive"}`}
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 28 0 L 0 0 0 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#grid-pattern-${active ? "active" : "inactive"})`}
      />
    </svg>
  );
}

export default function AnimatedStatsSection({ stats }: AnimatedStatsSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#56b94c]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header Pill & Title */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13293d]/80 border border-[#56b94c]/40 backdrop-blur-md shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#76f57e] animate-pulse" />
          <span className="text-xs font-bold text-[#76f57e] tracking-widest uppercase">
            CFPC Dream Real-ICT
          </span>
          <span className="text-xs text-[#8d9197] px-1">•</span>
          <span className="text-xs font-semibold text-white/90">Nos Chiffres Clés</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          Des résultats concrets, <br className="hidden sm:inline" />
          <span className="text-gradient-green">une réussite mesurable.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#c3c6cd] max-w-xl mx-auto">
          Survolez ou touchez une carte ci-dessous pour découvrir le détail de nos engagements et nos statistiques.
        </p>
      </div>

      {/* Accordion Stats Container */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 min-h-[460px] lg:h-[460px] w-full">
        {stats.map((stat, idx) => {
          const isActive = activeIndex === idx;
          const IconComponent = ICON_MAP[stat.iconName] || Sparkles;

          return (
            <motion.div
              key={stat.id || idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              layout
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={`relative rounded-3xl p-6 sm:p-8 cursor-pointer overflow-hidden transition-colors duration-500 flex flex-col justify-between select-none ${
                isActive
                  ? "bg-gradient-to-br from-[#063b1b] via-[#052b14] to-[#0d2319] border-2 border-[#56b94c] shadow-[0_0_35px_-5px_rgba(86,185,76,0.3)] lg:flex-[2.8]"
                  : "bg-[#13293d]/50 hover:bg-[#13293d]/80 border border-white/10 hover:border-[#56b94c]/30 lg:flex-1 opacity-90 hover:opacity-100"
              }`}
            >
              {/* Grid Background Pattern */}
              <CardGridPattern active={isActive} />

              {/* Ambient Active Card Corner Glow */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#76f57e]/20 rounded-full blur-3xl pointer-events-none"
                />
              )}

              {/* Top Section: Icon */}
              <div className="relative z-10 flex items-center justify-between">
                <motion.div
                  layout="position"
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-[#56b94c]/20 border border-[#76f57e]/50 text-[#76f57e] shadow-lg shadow-[#56b94c]/20"
                      : "bg-[#1b2023] border border-white/10 text-[#76f57e]"
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>
              </div>

              {/* Middle Section: Main Value & Label */}
              <div className="relative z-10 my-auto py-6">
                <motion.div
                  layout="position"
                  className="font-heading font-extrabold tracking-tight"
                >
                  <span
                    className={`block leading-none transition-all duration-300 ${
                      isActive
                        ? "text-6xl sm:text-7xl lg:text-8xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                        : "text-4xl sm:text-5xl lg:text-5xl text-[#76f57e]"
                    }`}
                  >
                    {stat.value}
                  </span>
                </motion.div>

                <motion.h3
                  layout="position"
                  className={`font-heading font-bold transition-colors duration-300 mt-2 ${
                    isActive
                      ? "text-xl sm:text-2xl text-white"
                      : "text-sm sm:text-base text-[#c3c6cd]"
                  }`}
                >
                  {stat.label}
                </motion.h3>

                {/* Description - Animated Reveal when Active */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 12, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="text-sm text-[#d4f8d7] leading-relaxed mt-3 max-w-lg font-normal"
                    >
                      {stat.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Section: Subtext / Asterisk detail */}
              <div className="relative z-10 pt-2 border-t border-white/10">
                <motion.span
                  layout="position"
                  className={`text-xs block font-medium transition-colors ${
                    isActive ? "text-[#76f57e]" : "text-[#8d9197]"
                  }`}
                >
                  {stat.subtext}
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
