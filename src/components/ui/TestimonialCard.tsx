import { Testimonial } from "@/data/centerData";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between relative border border-white/10 hover:border-[#56b94c]/40 transition-all duration-300">
      <div className="space-y-4">
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#76f57e] text-[#76f57e]" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-[#56b94c]/30" />
        </div>

        {/* Quote text */}
        <p className="text-sm text-[#dee3e7] italic leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author info */}
      <div className="pt-6 mt-4 border-t border-white/10 flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarBg} flex items-center justify-center font-bold text-white text-sm shadow-md`}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm text-white">
            {testimonial.name}
          </h4>
          <p className="text-xs text-[#76f57e] font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
