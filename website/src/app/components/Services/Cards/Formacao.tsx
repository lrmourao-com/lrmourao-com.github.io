import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, GraduationCap } from "lucide-react";

export function FormacaoCard({liBase, ulBase}: {liBase: string, ulBase: string}) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-blue-400/20 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-blue-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide rounded-full bg-blue-600 text-white shadow shadow-blue-500/40">
          Popular
        </span>
      </div>
      <CardContent className="p-6 md:p-10 relative h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-linear-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-indigo-700 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
            Formação de Soldadura
          </h3>
        </div>
        <p className="text-slate-700 text-base leading-relaxed font-medium mb-3!">
          Formamos mão-de-obra profissionalizada que suprime as necessidades do
          mercado nacional e internacional. Cursos dinâmicos, à medida e uma
          formação de excelência.
        </p>

        <div className="grid xl:grid-cols-2 gap-6">
          <div className="bg-blue-50/50 p-3 md:p-4 rounded-2xl border border-blue-100">
            <p className="font-black text-blue-700 mb-3 text-sm uppercase tracking-wide">
              Processos:
            </p>
            <ul className={cn("space-y-2", ulBase)}>
              {[
                "MIG/MAG/FF 114/131/135/136/138",
                "TIG 141/142",
                "SER/MMA 111",
              ].map((t) => (
                <li className={liBase}>
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base font-medium">
                    {t}
                  </span>
                </li>
              ))}
            </ul>

            <p className="font-black text-blue-700 mb-3 mt-4 text-sm uppercase tracking-wide">
              Nas ligas:
            </p>
            <ul className={cn("space-y-2", ulBase)}>
              <li className={liBase}>
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm md:text-base font-medium">
                  Aço-carbono, Aço-inox, Alumínio, Cobre
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50/50 p-3 md:p-4 rounded-2xl border border-indigo-100">
            <p className="font-black text-indigo-700 mb-3 text-sm uppercase tracking-wide">
              Curso/Formações:
            </p>
            <ul className={cn("space-y-2", ulBase)}>
              {[
                "Horários flexíveis e personalizados",
                "Formação à medida",
                "Formação individual disponível",
              ].map((t) => (
                <li className={liBase} key={t}>
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base font-medium">
                    {t}
                  </span>
                </li>
              ))}
            </ul>

            <p className="font-black text-indigo-700 mb-3 mt-4 text-sm uppercase tracking-wide">
              Certificação:
            </p>
            <ul className={cn("space-y-2", ulBase)}>
              <li className={liBase}>
                <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span className="text-sm md:text-base font-medium">
                  EN ISO 9606, ASME IX, AWS D1.1
                </span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </>
  );
}
