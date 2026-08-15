"use client";

import { useState } from "react";
import { CENTER_INFO, WHATSAPP_LINK } from "@/data/centerData";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Building2,
} from "lucide-react";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Formation Diplômante",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Bonjour CFPC Dream Real-ICT,\nJe m'appelle ${formData.name}.\nTéléphone: ${formData.phone}\nSujet: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(WHATSAPP_LINK(formattedMessage), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-12 pb-24">
      {/* Header Banner */}
      <section className="relative overflow-hidden pt-6 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13293d] border border-[#56b94c]/40">
            <MapPin className="w-3.5 h-3.5 text-[#76f57e]" />
            <span className="text-xs font-semibold text-[#76f57e]">
              Centre à Yaoundé, Alpha Manguier
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Contact & <span className="text-gradient-green">Localisation</span>
          </h1>

          <p className="text-base text-[#c3c6cd] leading-relaxed">
            Notre équipe vous accueille au centre à Yaoundé ou répond directement à vos messages sur WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Grid: Details + Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Col Left: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#13293d] border border-[#56b94c]/40 flex items-center justify-center text-[#76f57e] shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-white">
                    Notre Adresse à Yaoundé
                  </h3>
                  <p className="text-sm text-[#c3c6cd] leading-relaxed">
                    {CENTER_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp & Phone */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Téléphones & WhatsApp Direct
              </h3>

              <div className="space-y-3">
                <a
                  href={WHATSAPP_LINK("Bonjour, je souhaite vous contacter.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#13293d] border border-[#56b94c]/40 hover:border-[#56b94c] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#76f57e]" />
                    <div>
                      <div className="text-xs text-[#8d9197]">WhatsApp Ligne 1</div>
                      <div className="text-sm font-bold text-white font-mono">{CENTER_INFO.whatsapp1Display}</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#76f57e] group-hover:underline">Discuter ›</span>
                </a>

                <a
                  href={`tel:${CENTER_INFO.whatsapp2}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0f1417] border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#56b94c]" />
                    <div>
                      <div className="text-xs text-[#8d9197]">Ligne Directe 2</div>
                      <div className="text-sm font-bold text-white font-mono">{CENTER_INFO.whatsapp2Display}</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#c3c6cd]">Appeler ›</span>
                </a>
              </div>
            </div>

            {/* Email & Facebook */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#c3c6cd]">
                <Mail className="w-5 h-5 text-[#56b94c]" />
                <a href={`mailto:${CENTER_INFO.email}`} className="hover:text-white transition-colors">
                  {CENTER_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#c3c6cd] pt-2 border-t border-white/10">
                <FacebookIcon className="w-5 h-5 text-[#56b94c]" />
                <a
                  href={CENTER_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-[#76f57e] transition-colors inline-flex items-center gap-1"
                >
                  <span>cfpcdreamreal sur Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 font-heading font-bold text-base text-white">
                <Clock className="w-5 h-5 text-[#76f57e]" />
                <span>Horaires d'Ouverture</span>
              </div>
              <div className="space-y-1 text-xs text-[#c3c6cd]">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Lundi - Vendredi :</span>
                  <span className="font-semibold text-white">8h00 - 17h30</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Samedi :</span>
                  <span className="font-semibold text-white">8h00 - 13h00</span>
                </div>
                <div className="flex justify-between py-1 text-[#8d9197]">
                  <span>Dimanche :</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>

          </div>

          {/* Col Right: Interactive Form sending to WhatsApp */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                  Envoyer un message direct
                </h3>
                <p className="text-xs text-[#c3c6cd]">
                  Remplissez ce formulaire et votre message sera automatiquement pré-rempli sur WhatsApp pour un échange instantané.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-[#56b94c]/20 border border-[#56b94c] flex items-center gap-3 text-xs text-[#76f57e]">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Votre demande a été transmise vers WhatsApp ! Notre équipe vous répond immédiatement.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#dee3e7] mb-1.5">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0f1417] border border-white/10 focus:border-[#56b94c] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#dee3e7] mb-1.5">
                      Numéro Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: +237 6xx xx xx xx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0f1417] border border-white/10 focus:border-[#56b94c] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#dee3e7] mb-1.5">
                      Objet de la demande
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0f1417] border border-white/10 focus:border-[#56b94c] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    >
                      <option value="Formation Diplômante DQP/CQP">Formation Diplômante DQP/CQP</option>
                      <option value="Formation Continue (AQP)">Formation Continue (AQP)</option>
                      <option value="Module à la carte">Module à la carte</option>
                      <option value="Renseignements Généraux">Renseignements Généraux</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#dee3e7] mb-1.5">
                    Votre message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Précisez votre demande ou la formation souhaitée..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0f1417] border border-white/10 focus:border-[#56b94c] rounded-xl px-4 py-3 text-sm text-white focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#56b94c] hover:bg-[#78dd6b] text-[#002201] font-bold text-sm py-4 px-6 rounded-xl shadow-lg green-glow transition-all duration-300"
                >
                  <Send className="w-4 h-4 text-[#002201]" />
                  <span>Envoyer via WhatsApp (+237 699 00 05 63)</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Map Location Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="glass-card rounded-3xl p-8 border border-white/10 text-center space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#13293d] text-[#76f57e] flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">
            Rendez-nous visite au Centre
          </h3>
          <p className="text-sm text-[#c3c6cd] max-w-xl mx-auto">
            CFPC Dream Real-ICT est situé à <strong className="text-white">Yaoundé, Alpha Manguier</strong> au Rez de chaussée de l'Hôtel Lieugne. Secrétariat ouvert du lundi au samedi.
          </p>
        </div>
      </section>
    </div>
  );
}
