"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PARTNERS, Partner } from "@/data/centerData";
import { Handshake, Building2, ExternalLink, Sparkles } from "lucide-react";

// Position configuration for 7 partners on 3 concentric arc orbits
const ORBIT_POSITIONS = [
  // Orbit 1 (Inner Arc: radius ~ 150px)
  { orbit: 1, angle: -130, partnerId: "hr-akym", delay: 0 },
  { orbit: 1, angle: -50, partnerId: "medicom", delay: 0.5 },

  // Orbit 2 (Middle Arc: radius ~ 260px)
  { orbit: 2, angle: -155, partnerId: "kreative-framework", delay: 0.2 },
  { orbit: 2, angle: -90, partnerId: "tep-multiservices", delay: 0.7 },
  { orbit: 2, angle: -25, partnerId: "mbombo-solutions", delay: 0.4 },

  // Orbit 3 (Outer Arc: radius ~ 370px)
  { orbit: 3, angle: -135, partnerId: "arkiv-institute", delay: 0.6 },
  { orbit: 3, angle: -45, partnerId: "pluriel", delay: 0.3 },
];

export default function PartnersSection() {
  const [hoveredPartner, setHoveredPartner] = useState<Partner | null>(null);

  // Map partner details to position index
  const partnerMap = new Map<string, Partner>(PARTNERS.map((p) => [p.id, p]));

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Container Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-14 border border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0f1b26]/90 via-[#0d1620]/95 to-[#090f12]">
        
        {/* Top Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#56b94c]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="relative z-20 text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#13293d]/80 border border-[#56b94c]/40 backdrop-blur-md shadow-md">
            <Handshake className="w-4 h-4 text-[#76f57e]" />
            <span className="text-xs font-bold text-[#76f57e] tracking-widest uppercase">
              Écosystème & Partenariats
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Un réseau solide autour de <br className="hidden sm:inline" />
            <span className="text-gradient-green">votre réussite professionnelle.</span>
          </h2>

          <p className="text-xs sm:text-base text-[#c3c6cd] max-w-xl mx-auto">
            Nos entreprises partenaires gravitent autour du centre CFPC Dream Real-ICT pour accueillir nos stagiaires et recruter nos diplômés.
          </p>
        </div>

        {/* Concentric Orbit Arena (Desktop & Tablet) */}
        <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-end justify-center pt-8 overflow-hidden select-none">
          
          {/* Concentric SVG Arc Rings Background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Center origin point: X=500, Y=520 */}
            {/* Orbit 1 Arc */}
            <path
              d="M 330 520 A 170 170 0 0 1 670 520"
              stroke="url(#orbit-gradient-1)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="opacity-40"
            />
            {/* Orbit 2 Arc */}
            <path
              d="M 210 520 A 290 290 0 0 1 790 520"
              stroke="url(#orbit-gradient-2)"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              className="opacity-50"
            />
            {/* Orbit 3 Arc */}
            <path
              d="M 90 520 A 410 410 0 0 1 910 520"
              stroke="url(#orbit-gradient-3)"
              strokeWidth="1.5"
              className="opacity-30"
            />

            {/* SVG Radial Gradients */}
            <defs>
              <linearGradient id="orbit-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#56b94c" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#76f57e" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#56b94c" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="orbit-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#13293d" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#56b94c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#13293d" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="orbit-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#56b94c" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#76f57e" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#56b94c" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Main Official Seal Logo Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center group">
            
            {/* Glowing Pulse Aura */}
            <div className="absolute inset-0 w-28 h-28 sm:w-36 sm:h-36 -translate-x-3 -translate-y-3 bg-[#56b94c]/30 rounded-full blur-2xl group-hover:bg-[#76f57e]/40 transition-all duration-500 pointer-events-none" />
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-[#76f57e]/50 animate-ping opacity-25 pointer-events-none" />

            {/* Round Official Logo Container */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#13293d] border-2 border-[#56b94c] shadow-[0_0_30px_rgba(86,185,76,0.4)] flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="CFPC Dream Real-ICT Logo Official"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Label below Central Logo */}
            <div className="mt-2 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13293d]/90 border border-[#56b94c]/50 text-white font-heading font-extrabold text-[11px] sm:text-xs shadow-lg">
                <Sparkles className="w-3 h-3 text-[#76f57e]" />
                CFPC Dream Real-ICT
              </span>
            </div>
          </div>

          {/* Animated Partner Nodes along Concentric Arc Orbits */}
          <div className="hidden sm:block absolute inset-0 z-20 pointer-events-none">
            {ORBIT_POSITIONS.map((pos) => {
              const partner = partnerMap.get(pos.partnerId);
              if (!partner) return null;

              // Calculate percentage positions based on orbit radius & angle
              // Radius in percent relative to center (50%, 86%)
              const radii = { 1: 26, 2: 42, 3: 56 }; // percentages
              const radiusPercent = radii[pos.orbit as 1 | 2 | 3];
              const angleRad = (pos.angle * Math.PI) / 180;

              // Convert polar to Cartesian percentage offset
              const leftPercent = 50 + radiusPercent * Math.cos(angleRad);
              const topPercent = 84 + radiusPercent * Math.sin(angleRad);

              const isHovered = hoveredPartner?.id === partner.id;

              return (
                <div
                  key={partner.id}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                >
                  <motion.div
                    animate={{
                      y: isHovered ? -8 : [-5, 5, -5],
                    }}
                    transition={{
                      y: {
                        duration: 3 + pos.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    onMouseEnter={() => setHoveredPartner(partner)}
                    onMouseLeave={() => setHoveredPartner(null)}
                    onClick={() => setHoveredPartner(partner)}
                    className="relative group cursor-pointer"
                  >
                    {/* Node Glass Circle Container */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-2xl bg-white/95 hover:bg-white border-2 ${
                        isHovered
                          ? "border-[#76f57e] shadow-[0_0_30px_rgba(118,245,126,0.6)]"
                          : "border-white/20 shadow-xl shadow-black/40"
                      } p-2.5 flex items-center justify-center transition-all duration-300`}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-10 sm:max-h-12 w-auto object-contain filter transition-transform group-hover:scale-105"
                      />
                    </motion.div>

                    {/* Hover Tooltip Popup Card */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 sm:w-56 p-3 rounded-xl bg-[#13293d] border border-[#56b94c] shadow-2xl z-50 text-center pointer-events-none"
                        >
                          <h4 className="font-heading font-extrabold text-xs text-white">
                            {partner.name}
                          </h4>
                          {partner.description && (
                            <p className="text-[11px] text-[#76f57e] mt-1 font-medium leading-tight">
                              {partner.description}
                            </p>
                          )}
                          <div className="mt-1.5 flex items-center justify-center gap-1 text-[10px] text-[#c3c6cd]">
                            <Building2 className="w-3 h-3 text-[#56b94c]" />
                            <span>Partenaire Officiel</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Mobile Fallback Grid (sm and below) */}
          <div className="sm:hidden relative z-20 grid grid-cols-2 gap-3 w-full pb-32 pt-4">
            {PARTNERS.map((partner) => (
              <motion.div
                key={partner.id}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl p-3 bg-white/95 border border-white/20 shadow-md flex items-center justify-center h-20"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
