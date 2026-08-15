import Link from "next/link";
import {
  CENTER_INFO,
  COURSES,
  TESTIMONIALS,
  FAQ_LIST,
  STATS,
  ADVANTAGES,
  PILLARS,
  WHATSAPP_LINK,
} from "@/data/centerData";
import CourseCard from "@/components/ui/CourseCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import AnimatedStatsSection from "@/components/ui/AnimatedStatsSection";
import ArcTestimonialsSection from "@/components/ui/ArcTestimonialsSection";
import PartnersSection from "@/components/ui/PartnersSection";
import {
  Rocket,
  Wrench,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  Laptop,
  Handshake,
  Globe,
  Award,
} from "lucide-react";

export default function Home() {
  const featuredCourses = COURSES.slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 pb-16 overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#13293d] rounded-full blur-[140px] pointer-events-none opacity-60"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#56b94c]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#13293d] border border-[#56b94c]/40 shadow-lg animate-in fade-in duration-500">
              <span className="w-2.5 h-2.5 rounded-full bg-[#76f57e] animate-ping"></span>
              <span className="text-xs font-semibold text-[#76f57e] tracking-wide uppercase">
                Centre Agrée par l'État à Yaoundé
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              Votre tremplin vers le <br className="hidden sm:inline" />
              <span className="text-gradient-green">succès professionnel numérique</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#c3c6cd] leading-relaxed max-w-2xl mx-auto font-normal">
              Rejoignez le <strong className="text-white font-semibold">CFPC Dream Real-ICT</strong> à Yaoundé Alpha Manguier. Formations concrètes, pratiques et diplômantes (DQP / CQP) adaptées au marché de l'emploi.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK("Bonjour, je souhaite m'inscrire à une formation au centre CFPC Dream Real-ICT.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#56b94c] hover:bg-[#78dd6b] text-[#002201] font-bold text-base px-8 py-4 rounded-xl shadow-xl green-glow transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 text-[#002201]" />
                <span>S'inscrire via WhatsApp</span>
              </a>

              <Link
                href="/formations"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#13293d] hover:bg-[#1b2023] text-white font-semibold text-base px-7 py-4 rounded-xl border border-white/10 hover:border-[#56b94c]/50 transition-all duration-300"
              >
                <span>Découvrir nos formations</span>
                <ArrowRight className="w-5 h-5 text-[#76f57e]" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8d9197]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#56b94c]" />
                <span>Diplômes DQP / CQP reconnus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#76f57e]" />
                <span>Formations 100% Pratiques</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#56b94c]" />
                <span>Yaoundé, Alpha Manguier</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PILLARS SECTION (Ce pour quoi nous luttons) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl text-white tracking-tight flex items-center justify-center gap-3">
            <span>Ce pour quoi nous luttons..</span>
            <span className="text-2xl">✊</span>
          </h2>
          <p className="text-base text-[#c3c6cd]">
            Une pédagogie axée sur le résultat et l'insertion professionnelle immédiate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 border border-white/10 hover:border-[#56b94c]/50 space-y-5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#13293d] border border-[#56b94c]/40 flex items-center justify-center text-[#76f57e] group-hover:scale-110 group-hover:bg-[#56b94c] group-hover:text-[#002201] transition-all">
                {idx === 0 && <Rocket className="w-7 h-7" />}
                {idx === 1 && <Wrench className="w-7 h-7" />}
                {idx === 2 && <GraduationCap className="w-7 h-7" />}
              </div>
              <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#78dd6b] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#c3c6cd] leading-relaxed">
                {pillar.description}
              </p>
              <div className="pt-2">
                <a
                  href={WHATSAPP_LINK(`Bonjour, je souhaite me renseigner sur "${pillar.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#76f57e] hover:text-white transition-colors"
                >
                  <span>En savoir plus sur WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#56b94c]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORMATIONS TYPES HIGHLIGHT */}
      <section className="bg-[#13293d]/40 border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#76f57e] block mb-2">
                Offre de formation
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-white">
                Nos Types de Formations
              </h2>
            </div>
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#76f57e] hover:text-white transition-colors"
            >
              <span>Voir toutes nos formations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Diplômantes */}
            <div className="glass-panel rounded-2xl p-8 space-y-6 border border-[#56b94c]/30 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#56b94c]/20 text-[#76f57e] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Diplômantes</h3>
                <p className="text-sm text-[#c3c6cd] leading-relaxed">
                  Formations longues (9 à 12 mois) sanctionnées par un diplôme ou certificat de qualification professionnelle (DQP / CQP) reconnu par l'État.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#dee3e7]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#56b94c]" /> Secrétariat Bureautique
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#56b94c]" /> Développement Web & Mobile
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#56b94c]" /> Comptabilité Informatisée
                </li>
              </ul>
              <Link
                href="/formations?cat=diplomante"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1b2023] hover:bg-[#56b94c] hover:text-[#002201] text-white text-xs font-bold py-3 rounded-lg border border-white/10 transition-all"
              >
                <span>Découvrir les formations DQP/CQP</span>
              </Link>
            </div>

            {/* Card 2: Continues */}
            <div className="glass-panel rounded-2xl p-8 space-y-6 border border-white/10 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#13293d] text-[#76f57e] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Continues</h3>
                <p className="text-sm text-[#c3c6cd] leading-relaxed">
                  Formations courtes (3 à 6 mois) pour renforcer vos compétences rapidement. Sanctionnées par une Attestation de Qualification Professionnelle (AQP).
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#dee3e7]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#56b94c]" /> Marketing Digital & RS
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#56b94c]" /> Maintenance Informatique
                </li>
              </ul>
              <Link
                href="/formations?cat=continue"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1b2023] hover:bg-[#56b94c] hover:text-[#002201] text-white text-xs font-bold py-3 rounded-lg border border-white/10 transition-all"
              >
                <span>Voir les formations continues</span>
              </Link>
            </div>

            {/* Card 3: À la carte */}
            <div className="glass-panel rounded-2xl p-8 space-y-6 border border-white/10 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#13293d] text-[#76f57e] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">À la Carte</h3>
                <p className="text-sm text-[#c3c6cd] leading-relaxed">
                  Modules spécialisés intensifs (1 à 2 mois) pour des besoins précis. Sanctionnés par une Attestation de fin de formation.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#dee3e7]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#56b94c]" /> Excel Avancé & Dashboards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#56b94c]" /> Design Canva Pro
                </li>
              </ul>
              <Link
                href="/formations?cat=alacarte"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1b2023] hover:bg-[#56b94c] hover:text-[#002201] text-white text-xs font-bold py-3 rounded-lg border border-white/10 transition-all"
              >
                <span>Voir les modules à la carte</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED COURSES CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#76f57e] block">
            Formations Phares
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-white">
            Inscrivez-vous dès maintenant
          </h2>
          <p className="text-base text-[#c3c6cd]">
            Sélectionnez la formation qui correspond à vos ambitions professionnelles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 bg-[#13293d] hover:bg-[#1b2023] text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-white/10 hover:border-[#56b94c] transition-all"
          >
            <span>Voir tout le catalogue de formations</span>
            <ArrowRight className="w-4 h-4 text-[#76f57e]" />
          </Link>
        </div>
      </section>

      {/* STATS & EXPERIENCE SECTION */}
      <AnimatedStatsSection stats={STATS} />

      {/* ADVANTAGES (De sérieux atouts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#76f57e] block">
            Pourquoi choisir Dream Real-ICT ?
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-white">
            De sérieux atouts pour votre réussite
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#56b94c]/40 space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#13293d] border border-[#56b94c]/30 flex items-center justify-center text-[#76f57e]">
                {idx === 0 && <Clock className="w-6 h-6" />}
                {idx === 1 && <Handshake className="w-6 h-6" />}
                {idx === 2 && <Laptop className="w-6 h-6" />}
                {idx === 3 && <Globe className="w-6 h-6" />}
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                {adv.title}
              </h3>
              <p className="text-xs text-[#c3c6cd] leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <PartnersSection />

      {/* TESTIMONIALS (Ce que disent nos apprenants - Arc de cercle) */}
      <ArcTestimonialsSection testimonials={TESTIMONIALS} />

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#76f57e] block">
            Des réponses à vos questions
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-white">
            Foire Aux Questions (FAQ)
          </h2>
        </div>

        <FAQAccordion items={FAQ_LIST} />
      </section>

      {/* FINAL WHATSAPP CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#56b94c]/40 text-center space-y-6 relative overflow-hidden green-glow-subtle">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Prêt à propulser votre carrière numérique ?
            </h2>
            <p className="text-base text-[#c3c6cd]">
              Contactez directement l'équipe administrative de <strong className="text-white">CFPC Dream Real-ICT</strong> sur WhatsApp pour réserver votre place ou poser vos questions.
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP_LINK("Bonjour, je souhaite m'inscrire et obtenir les détails d'une formation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#56b94c] hover:bg-[#78dd6b] text-[#002201] font-bold text-base px-8 py-4 rounded-xl shadow-xl green-glow transition-all transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contactez-nous sur WhatsApp (+237 699 00 05 63)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
