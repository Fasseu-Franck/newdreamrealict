"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CENTER_INFO, WHATSAPP_LINK } from "@/data/centerData";
import { MessageCircle, Menu, X, GraduationCap, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/formations", label: "Nos Formations" },
    { href: "/contact", label: "Contact & Localisation" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#13293d] to-[#1b2023] border border-[#56b94c]/40 flex items-center justify-center text-[#78dd6b] shadow-lg group-hover:border-[#56b94c] group-hover:scale-105 transition-all duration-300">
              <GraduationCap className="w-6 h-6 text-[#76f57e]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                CFPC <span className="text-gradient-green">Dream Real</span>
              </span>
              <span className="text-[11px] font-medium text-[#c3c6cd] tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#76f57e] animate-pulse"></span>
                ICT Center Yaoundé
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#13293d]/60 p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white bg-[#1b2023] shadow-md border border-[#56b94c]/40"
                      : "text-[#c3c6cd] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#56b94c] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Direct WhatsApp Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK("Bonjour, je souhaite m'inscrire à une formation au centre CFPC Dream Real-ICT.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#56b94c] hover:bg-[#78dd6b] text-[#002201] font-bold text-sm px-5 py-2.5 rounded-lg shadow-lg green-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4.5 h-4.5 text-[#002201]" />
              <span>S'inscrire sur WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#dee3e7] hover:text-white bg-[#13293d] border border-white/10 focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#76f57e]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "bg-[#13293d] text-[#76f57e] border border-[#56b94c]/40 font-bold"
                      : "text-[#c3c6cd] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <a
              href={WHATSAPP_LINK("Bonjour, je souhaite m'inscrire au centre CFPC Dream Real-ICT.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#56b94c] hover:bg-[#78dd6b] text-[#002201] font-bold text-sm py-3 px-4 rounded-lg shadow-md green-glow"
            >
              <MessageCircle className="w-5 h-5 text-[#002201]" />
              <span>S'inscrire sur WhatsApp (+237 699 00 05 63)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
