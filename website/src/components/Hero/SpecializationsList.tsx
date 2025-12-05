'use client';

import { scrollToSection } from "@/lib/scroll";
import { useTranslation } from "@/lib/use-translation";
import { Award, GraduationCap, Shield, Target, Users } from "lucide-react";

export function SpecializationsList() {
  const { t } = useTranslation();
  
  const SPECIALIZATIONS = [
    {
      name: t('specializations.formacao'),
      icon: GraduationCap,
      id: "service-formacao",
      grad: "from-blue-500 to-blue-600",
      hoverBorder: "hover:border-blue-500/60",
      dot: "bg-blue-400",
    },
    {
      name: t('specializations.coordenacao'),
      icon: Users,
      id: "service-coordenacao",
      grad: "from-emerald-500 to-green-600",
      hoverBorder: "hover:border-emerald-500/60",
      dot: "bg-emerald-400",
    },
    {
      name: t('specializations.consultadoria'),
      icon: Target,
      id: "service-consultadoria",
      grad: "from-purple-500 to-pink-600",
      hoverBorder: "hover:border-purple-500/60",
      dot: "bg-purple-400",
    },
    {
      name: t('specializations.inspecao'),
      icon: Shield,
      id: "service-inspecao",
      grad: "from-red-500 to-rose-600",
      hoverBorder: "hover:border-red-500/60",
      dot: "bg-red-400",
    },
    {
      name: t('specializations.certificacao'),
      icon: Award,
      id: "service-certificacao",
      grad: "from-amber-500 to-orange-600",
      hoverBorder: "hover:border-amber-500/60",
      dot: "bg-amber-400",
    },
  ];

  return (
    <div className="space-y-2">
      {SPECIALIZATIONS.map((item, i) => (
        <a
          key={item.name}
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(false, item.id);
          }}
          className={`group flex items-center gap-3 bg-white/5 ${item.id === "service-formacao"
              ? "bg-white/10 border-blue-400/60 ring-2 ring-blue-300/30 scale-[1.01]"
              : ""
            } hover:bg-white/15 border border-white/10 ${item.hoverBorder} rounded-xl p-3 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div
            className={`bg-gradient-to-br ${item.grad} p-2 rounded-lg transition-all duration-300 shadow-lg ${item.id === "service-formacao"
                ? "scale-110 ring-2 ring-blue-300/40"
                : ""
              } group-hover:scale-110 group-hover:rotate-6`}
          >
            <item.icon className="w-5 h-5 text-white" />
          </div>
          <span
            className={`font-semibold text-sm transition-colors ${item.id === "service-formacao"
                ? "text-white"
                : "text-slate-200 group-hover:text-white"
              }`}
          >
            {item.name}
          </span>
          {item.id === "service-formacao" && (
            <span className="ml-1 text-[9px] uppercase tracking-wide font-extrabold px-1.5 py-0.5 rounded-full bg-blue-600 text-white/95 shadow shadow-blue-500/40">
              {t('specializations.popular')}
            </span>
          )}
          <div
            className={`ml-auto transition-all duration-300 group-hover:scale-125 ${item.id === "service-formacao"
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
              }`}
          >
            <div className={`w-2 h-2 ${item.dot} rounded-full shadow-lg`} />
          </div>
        </a>
      ))}
    </div>
  );
}
