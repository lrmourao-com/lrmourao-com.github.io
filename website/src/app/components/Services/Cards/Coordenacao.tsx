import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, Users } from "lucide-react";

export function CoordenacaoCard(
  { liBase, ulBase }: { liBase: string; ulBase: string },
) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-green-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-emerald-400/20 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-emerald-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
      </div>
      <CardContent className="p-6 md:p-10 relative h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-linear-to-br from-emerald-500 to-green-600 group-hover:from-emerald-600 group-hover:to-green-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-700 to-green-700 group-hover:from-emerald-600 group-hover:to-green-600 transition-all duration-300">
            Coordenação
          </h3>
        </div>
        <p className="text-slate-700 text-base leading-relaxed font-medium  mb-3!">
          Especialista em coordenação conforme EN 1090 e ISO 3834.
        </p>

        <div className="flex flex-col gap-6">
          <div className="bg-emerald-50/50 p-3 md:p-4 md:pb-0 rounded-2xl border border-emerald-100">
            <p className="font-black text-emerald-700 text-sm uppercase tracking-wide mb-2!">
              Certificação empresarial
            </p>
            <ul className={cn("space-y-2 mb-3!", ulBase)}>
              {[
                "EN ISO 3834",
                "EN ISO 9606",
                "EN 1090",
                "EN 15614",
              ].map((t) => (
                <li key={t} className={liBase}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-50/50 p-3 md:p-4 md:pb-0 rounded-2xl border border-emerald-100">
            <p className="font-black text-emerald-700 text-sm uppercase tracking-wide mb-2!">
              Responsabilidades Técnicas
            </p>
            <ul className={cn("space-y-2 mb-3!", ulBase)}>
              {[
                "Realização de RQPS e EPS's",
                "Selecionar e/ou aprovar processos de soldadura adequados ao material e aplicação (TIG, MAG, MMA, etc.).",
                "Validar e controlar WPS (Especificações de Procedimentos de Soldadura).",
                "Definir e supervisionar a qualificação de procedimentos (WPQR) e de soldadores/operadores.",
                "Escolher materiais de base e de adição (ver EN ISO 15608, 2560, 14341, etc.).",
                "Determinar gases de proteção, polaridades, posições de soldadura, parâmetros elétricos e tratamentos térmicos.",
                "Aprovar planos de inspeção e ensaio (ITP).",
              ].map((t) => (
                <li key={t} className={liBase}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </>
  );
}
