"use client";

import { Course, WHATSAPP_LINK } from "@/data/centerData";
import { Clock, Award, CheckCircle2, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const whatsappUrl = WHATSAPP_LINK(
    `Bonjour, je suis intéressé(e) par la formation "${course.title}" (${course.categoryLabel}). Pouvez-vous me donner les détails d'inscription ?`
  );

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden border border-white/10 hover:border-[#56b94c]/50 transition-all duration-300">
      
      {/* Background glow on hover */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#56b94c]/10 rounded-full blur-2xl group-hover:bg-[#56b94c]/20 transition-all duration-500"></div>

      <div>
        {/* Badges & Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#13293d] text-[#76f57e] border border-[#56b94c]/30">
            <Sparkles className="w-3 h-3 text-[#56b94c]" />
            {course.categoryLabel}
          </span>

          {course.popular && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#56b94c] text-[#002201] uppercase tracking-wide">
              Populaire
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#78dd6b] transition-colors leading-snug">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#c3c6cd] mb-5 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Info Pills */}
        <div className="flex flex-wrap gap-2.5 mb-6 text-xs text-[#dee3e7]">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f1417] border border-white/5">
            <Clock className="w-3.5 h-3.5 text-[#56b94c]" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f1417] border border-white/5">
            <Award className="w-3.5 h-3.5 text-[#76f57e]" />
            <span className="truncate max-w-[180px]">{course.certification}</span>
          </div>
        </div>

        {/* Key Skills */}
        <div className="space-y-2 mb-6">
          <span className="text-[11px] font-bold text-[#8d9197] uppercase tracking-wider block">
            Compétences clés :
          </span>
          <div className="grid grid-cols-2 gap-1.5 text-xs text-[#c3c6cd]">
            {course.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#56b94c] shrink-0" />
                <span className="truncate">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer & Direct WhatsApp CTA */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <span className="text-xs text-[#8d9197] font-medium">Format: {course.format}</span>
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#56b94c] hover:bg-[#78dd6b] text-[#002201] font-bold text-xs px-4 py-2.5 rounded-lg shadow-md transition-all duration-200 group-hover:shadow-lg green-glow"
        >
          <MessageCircle className="w-4 h-4" />
          <span>S'inscrire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
