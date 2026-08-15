import Link from "next/link";
import { CENTER_INFO, WHATSAPP_LINK } from "@/data/centerData";
import { GraduationCap, MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink } from "lucide-react";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-[#090f12] border-t border-white/10 text-[#dee3e7] pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#13293d]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#56b94c]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#13293d] border border-[#56b94c]/40 flex items-center justify-center text-[#76f57e]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                CFPC <span className="text-gradient-green">Dream Real</span>
              </span>
            </Link>
            <p className="text-sm text-[#c3c6cd] leading-relaxed">
              Centre de Formation Professionnelle agréé. Votre tremplin vers le succès professionnel numérique à tous moments. Formations pratiques et diplômantes.
            </p>
            <div className="pt-2">
              <a
                href={CENTER_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#76f57e] hover:text-white bg-[#13293d]/80 px-3 py-2 rounded-lg border border-white/10 hover:border-[#56b94c] transition-all"
              >
                <FacebookIcon className="w-4 h-4 text-[#56b94c]" />
                <span>Rejoignez-nous sur Facebook</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-heading text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-[#76f57e]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#c3c6cd] hover:text-[#78dd6b] transition-colors flex items-center gap-2">
                  <span className="text-[#56b94c]">›</span> Accueil
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-[#c3c6cd] hover:text-[#78dd6b] transition-colors flex items-center gap-2">
                  <span className="text-[#56b94c]">›</span> Nos Formations (DQP/CQP)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#c3c6cd] hover:text-[#78dd6b] transition-colors flex items-center gap-2">
                  <span className="text-[#56b94c]">›</span> Contact & Localisation
                </Link>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK("Bonjour, je souhaite m'inscrire au centre CFPC Dream Real-ICT.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#76f57e] hover:text-white transition-colors flex items-center gap-2 font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-[#56b94c]" /> S'inscrire via WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div>
            <h3 className="font-heading text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-[#76f57e]">
              Coordonnées
            </h3>
            <ul className="space-y-3 text-sm text-[#c3c6cd]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#56b94c] shrink-0 mt-0.5" />
                <span>{CENTER_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#76f57e] shrink-0" />
                <a
                  href={WHATSAPP_LINK()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  {CENTER_INFO.whatsapp1Display} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#56b94c] shrink-0" />
                <a href={`tel:${CENTER_INFO.whatsapp2}`} className="hover:text-white transition-colors font-mono">
                  {CENTER_INFO.whatsapp2Display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#56b94c] shrink-0" />
                <a href={`mailto:${CENTER_INFO.email}`} className="hover:text-white transition-colors">
                  {CENTER_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Hours & WhatsApp CTA */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-[#76f57e]">
              Horaires d'Ouverture
            </h3>
            <div className="bg-[#13293d]/60 border border-white/10 rounded-xl p-3.5 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-medium">
                <Clock className="w-4 h-4 text-[#56b94c]" />
                <span>Accueil & Secrétariat</span>
              </div>
              <p className="text-[#c3c6cd]">{CENTER_INFO.hours.weekdays}</p>
              <p className="text-[#c3c6cd]">{CENTER_INFO.hours.saturday}</p>
              <p className="text-[#8d9197]">{CENTER_INFO.hours.sunday}</p>
            </div>

            <a
              href={WHATSAPP_LINK("Bonjour, je souhaite poser une question sur le centre de formation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#56b94c] hover:bg-[#78dd6b] text-[#002201] font-bold text-xs py-2.5 px-3 rounded-lg shadow-md green-glow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactez-nous directement</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8d9197]">
          <p>{CENTER_INFO.copyright}</p>
          <div className="flex items-center gap-4">
            <span>Agrément MINEFOP Cameroun</span>
            <span>•</span>
            <span className="text-[#76f57e]">Yaoundé, Alpha Manguier</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
