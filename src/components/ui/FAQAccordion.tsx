"use client";

import { useState } from "react";
import { FAQItem } from "@/data/centerData";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`glass-card rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#56b94c]/60 bg-[#13293d]/80 shadow-lg"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none gap-4"
            >
              <span className="font-heading font-semibold text-base text-white flex items-center gap-3">
                <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-[#76f57e]" : "text-[#56b94c]"}`} />
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#0f1417] text-[#76f57e] transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#56b94c] text-[#002201]" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 border-t border-white/10 text-sm text-[#c3c6cd] leading-relaxed animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
