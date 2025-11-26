import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { getServerTranslation } from "@/lib/i18n-server";

export function FormacaoCard(
  { liBase, ulBase, mobile }: { liBase: string; ulBase: string; mobile: boolean },
) {
  const t = getServerTranslation('pt');

  // Access array items directly by index
  const processes = [
    t('services.formacao.processes.0'),
    t('services.formacao.processes.1'),
    t('services.formacao.processes.2'),
  ];

  const courses = [
    t('services.formacao.courses.0'),
    t('services.formacao.courses.1'),
    t('services.formacao.courses.2'),
  ];

  return (
    <Card
      id={mobile ? "service-formacao-mobile" : "service-formacao"}
      className="flex-1 flex group relative pb-0 bg-white/90 backdrop-blur-sm border-2 border-blue-300/70 hover:border-blue-400/80 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 scale-[1.01] hover:scale-[1.03] rounded-3xl ring-2 ring-blue-200/40"
    >
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-blue-400/20 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-blue-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide rounded-full bg-blue-600 text-white shadow shadow-blue-500/40">
          {t('services.formacao.popular')}
        </span>
      </div>
      <CardContent className="p-6 md:p-10 relative h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-linear-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-indigo-700 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
            {t('services.formacao.title')}
          </h3>
        </div>
        <p className="text-slate-700 text-base leading-relaxed font-medium mb-3!">
          {t('services.formacao.description')}
        </p>

        <div className="grid xl:grid-cols-2 gap-6">
          <div className="bg-blue-50/50 p-3 md:p-4 rounded-2xl border border-blue-100">
            <p className="font-black text-blue-700 mb-3 text-sm uppercase tracking-wide">
              {t('services.formacao.processesTitle')}
            </p>
            <ul className={cn("space-y-2", ulBase)}>
              {processes.map((text) => (
                <li className={liBase} key={text}>
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="font-black text-blue-700 mb-3 mt-4 text-sm uppercase tracking-wide">
              {t('services.formacao.alloysTitle')}
            </p>
            <ul className={cn("space-y-2", ulBase)}>
              <li className={liBase}>
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm md:text-base font-medium">
                  {t('services.formacao.alloys')}
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50/50 p-3 md:p-4 rounded-2xl border border-indigo-100">
            <p className="font-black text-indigo-700 mb-3 text-sm uppercase tracking-wide">
              {t('services.formacao.coursesTitle')}
            </p>
            <ul className={cn("space-y-2", ulBase)}>
              {courses.map((text) => (
                <li className={liBase} key={text}>
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                  <span className="text-sm md:text-base font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="font-black text-indigo-700 mb-3 mt-4 text-sm uppercase tracking-wide">
              {t('services.formacao.certificationTitle')}
            </p>
            <ul className={cn("space-y-2", ulBase)}>
              <li className={liBase}>
                <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span className="text-sm md:text-base font-medium">
                  {t('services.formacao.certification')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
