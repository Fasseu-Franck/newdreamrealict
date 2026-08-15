import Link from "next/link";
import { CENTER_INFO, WHATSAPP_LINK } from "@/data/centerData";
import { MessageCircle, Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      label: "CFPC Dream Real-ICT",
      href: CENTER_INFO.facebookUrl,
      icon: FacebookIcon,
      color: "text-[#1877F2]",
      bgColor: "bg-[#1877F2]/10 border-[#1877F2]/30",
      external: true,
    },
    {
      name: "WhatsApp Direct",
      label: "+237 699 00 05 63",
      href: WHATSAPP_LINK("Bonjour, je souhaite contacter le centre CFPC Dream Real-ICT."),
      icon: MessageCircle,
      color: "text-[#76f57e]",
      bgColor: "bg-[#56b94c]/10 border-[#56b94c]/30",
      external: true,
    },
    {
      name: "Email Officiel",
      label: CENTER_INFO.email,
      href: `mailto:${CENTER_INFO.email}`,
      icon: Mail,
      color: "text-[#56b94c]",
      bgColor: "bg-[#56b94c]/10 border-[#56b94c]/30",
      external: false,
    },
    {
      name: "Appel Téléphonique",
      label: "+237 677 71 07 07",
      href: `tel:${CENTER_INFO.whatsapp2}`,
      icon: Phone,
      color: "text-[#76f57e]",
      bgColor: "bg-white/5 border-white/10",
      external: false,
    },
  ];

  return (
    <footer className="bg-[#090f12] border-t border-white/10 text-[#dee3e7] pt-16 pb-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13293d]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#56b94c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid Layout: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand Info & Hours (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-[#56b94c]/40 group-hover:border-[#76f57e] transition-all p-0.5 shadow-md">
                <img
                  src="/logo.png"
                  alt="CFPC Dream Real-ICT Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tight text-white uppercase">
                  CFPC <span className="text-gradient-green">Dream Real</span>
                </span>
                <span className="text-[11px] font-semibold text-[#76f57e] tracking-widest uppercase">
                  Centre Agrée par l'État (DQP / CQP)
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#c3c6cd] leading-relaxed max-w-sm">
              Formations professionnelles 100% pratiques et certifiantes à Yaoundé Alpha Manguier. Préparez votre avenir avec des compétences immédiatement opérationnelles.
            </p>

            <div className="bg-[#13293d]/60 border border-white/10 rounded-xl p-3.5 space-y-1.5 text-xs max-w-sm">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Clock className="w-4 h-4 text-[#56b94c]" />
                <span>Horaires d'Ouverture</span>
              </div>
              <p className="text-[#c3c6cd]">{CENTER_INFO.hours.weekdays}</p>
              <p className="text-[#c3c6cd]">{CENTER_INFO.hours.saturday}</p>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase border-b border-[#56b94c]/40 pb-2 inline-block">
              Liens Rapides
            </h3>
            <ul className="space-y-2.5 text-xs text-[#c3c6cd]">
              <li>
                <Link href="/" className="hover:text-[#76f57e] transition-colors flex items-center gap-1.5">
                  <span className="text-[#56b94c]">›</span> Accueil
                </Link>
              </li>
              <li>
                <Link href="/formations" className="hover:text-[#76f57e] transition-colors flex items-center gap-1.5">
                  <span className="text-[#56b94c]">›</span> Catalogue Formations
                </Link>
              </li>
              <li>
                <Link href="/formations?cat=diplomante" className="hover:text-[#76f57e] transition-colors flex items-center gap-1.5">
                  <span className="text-[#56b94c]">›</span> Diplômes DQP / CQP
                </Link>
              </li>
              <li>
                <Link href="/formations?cat=continue" className="hover:text-[#76f57e] transition-colors flex items-center gap-1.5">
                  <span className="text-[#56b94c]">›</span> Formations Continues
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#76f57e] transition-colors flex items-center gap-1.5">
                  <span className="text-[#56b94c]">›</span> Contact & Accès
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Accès (lg:col-span-3 - Replaces Formations Phares) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase border-b border-[#56b94c]/40 pb-2 inline-block">
              Contact & Accès
            </h3>
            <ul className="space-y-3.5 text-xs text-[#c3c6cd]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#56b94c] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CENTER_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#76f57e] shrink-0" />
                <a
                  href={WHATSAPP_LINK()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  {CENTER_INFO.whatsapp1Display} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#56b94c] shrink-0" />
                <a href={`tel:${CENTER_INFO.whatsapp2}`} className="hover:text-white transition-colors font-mono">
                  {CENTER_INFO.whatsapp2Display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#56b94c] shrink-0" />
                <a href={`mailto:${CENTER_INFO.email}`} className="hover:text-white transition-colors">
                  {CENTER_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Nos Réseaux Sociaux with logos and names (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-white text-sm tracking-wider uppercase border-b border-[#56b94c]/40 pb-2 inline-block">
              Nos Réseaux Sociaux
            </h3>
            <div className="space-y-2.5">
              {socialLinks.map((social, idx) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border ${social.bgColor} hover:border-[#56b94c] transition-all group`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#171c1f] flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-105 transition-transform">
                      <IconComp className={`w-4 h-4 ${social.color}`} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-bold text-white group-hover:text-[#76f57e] transition-colors flex items-center gap-1">
                        {social.name}
                        {social.external && <ExternalLink className="w-3 h-3 opacity-60" />}
                      </span>
                      <span className="text-[11px] text-[#c3c6cd] truncate font-mono">
                        {social.label}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Giant Brand Watermark Banner */}
        <div className="pt-8 pb-4 flex flex-col items-center justify-center overflow-hidden relative">
          <div className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[150px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/5 uppercase select-none pointer-events-none leading-none whitespace-nowrap">
            DREAM REAL-ICT
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8d9197]">
          <p>{CENTER_INFO.copyright}</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Agrément Ministère de la Formation Professionnelle</span>
            <span>•</span>
            <span className="text-[#76f57e]">Yaoundé, Cameroun</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
