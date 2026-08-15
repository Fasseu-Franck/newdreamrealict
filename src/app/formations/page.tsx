"use client";

import { useState, useMemo } from "react";
import { COURSES, WHATSAPP_LINK } from "@/data/centerData";
import CourseCard from "@/components/ui/CourseCard";
import { Search, Filter, MessageCircle, Sparkles, Award, Clock } from "lucide-react";

export default function FormationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 space-y-12 pb-24">
      {/* Header Banner */}
      <section className="relative overflow-hidden pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13293d] border border-[#56b94c]/40 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#76f57e]" />
            <span className="text-xs font-semibold text-[#76f57e]">
              Catalogue Officiel 2025-2026
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Nos <span className="text-gradient-green">Formations Professionnelles</span>
          </h1>

          <p className="text-base text-[#c3c6cd] leading-relaxed">
            Formations diplômantes (DQP / CQP) et certifications adaptées aux exigences du marché de l'emploi à Yaoundé. Choisissez votre parcours et inscrivez-vous directement sur WhatsApp.
          </p>
        </div>
      </section>

      {/* Filters & Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 space-y-6">
          
          {/* Top Bar: Search Input */}
          <div className="relative max-w-md mx-auto sm:mx-0">
            <Search className="w-5 h-5 text-[#8d9197] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher une formation, compétence ou logiciel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0f1417] border border-white/10 focus:border-[#56b94c] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-[#8d9197] focus:outline-none transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
            <span className="text-xs font-bold text-[#8d9197] uppercase tracking-wider mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filtrer :
            </span>

            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-[#56b94c] text-[#002201] shadow-md green-glow"
                  : "bg-[#13293d] text-[#c3c6cd] hover:text-white border border-white/10"
              }`}
            >
              Toutes les Formations ({COURSES.length})
            </button>

            <button
              onClick={() => setSelectedCategory("diplomante")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === "diplomante"
                  ? "bg-[#56b94c] text-[#002201] shadow-md green-glow"
                  : "bg-[#13293d] text-[#c3c6cd] hover:text-white border border-white/10"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              Diplômantes (DQP / CQP)
            </button>

            <button
              onClick={() => setSelectedCategory("continue")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === "continue"
                  ? "bg-[#56b94c] text-[#002201] shadow-md green-glow"
                  : "bg-[#13293d] text-[#c3c6cd] hover:text-white border border-white/10"
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              Formations Continues (AQP)
            </button>

            <button
              onClick={() => setSelectedCategory("alacarte")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === "alacarte"
                  ? "bg-[#56b94c] text-[#002201] shadow-md green-glow"
                  : "bg-[#13293d] text-[#c3c6cd] hover:text-white border border-white/10"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Modules À la carte
            </button>
          </div>

        </div>
      </section>

      {/* Courses List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-2xl border border-white/10 space-y-4">
            <p className="text-[#c3c6cd] text-base">
              Aucune formation ne correspond à votre recherche "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-[#13293d] text-[#76f57e] font-semibold text-xs rounded-lg border border-[#56b94c]/40"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>

      {/* Direct WhatsApp Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl text-white">
              Vous avez un projet de formation spécifique ?
            </h3>
            <p className="text-xs text-[#c3c6cd]">
              Notre équipe pédagogique est à votre écoute sur WhatsApp pour vous orienter.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK("Bonjour, je souhaite être orienté pour choisir la formation qui me convient.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#56b94c] hover:bg-[#78dd6b] text-[#002201] font-bold text-sm px-6 py-3 rounded-xl shadow-md green-glow shrink-0"
          >
            <MessageCircle className="w-5 h-5 text-[#002201]" />
            <span>Discuter avec un conseiller</span>
          </a>
        </div>
      </section>
    </div>
  );
}
