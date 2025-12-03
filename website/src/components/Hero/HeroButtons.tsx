'use client';

import { scrollToSection } from "@/lib/scroll";
import { ArrowRight, Mail } from "lucide-react";
import { useTranslation } from "@/lib/use-translation";

export function HeroButtons() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
      {/* <a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(true, "services");
        }}
        className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-white/5 px-8 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.1)] border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-slate-900"

      >
        <span className="mr-2 text-lg font-bold tracking-wide">{t('heroButtons.exploreServices')}</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a> */}

      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(true, "contact");
        }}
        className="group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 px-12 font-medium text-white transition-all duration-300 hover:scale-105  shadow-lg shadow-amber-500/30 hover:shadow-[0_0_40px_8px_rgba(245,158,11,0.3)] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        <span className="mr-2 text-lg font-bold tracking-wide text-slate-200 group-hover:text-white transition-colors">{t('heroButtons.contact')}</span>
        <Mail className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
      </a>
    </div>
  );
}