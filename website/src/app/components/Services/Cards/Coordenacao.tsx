import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, Users } from "lucide-react";
import { getServerTranslation } from "@/lib/i18n-server";

export function CoordenacaoCard(
  { liBase, ulBase, mobile }: { liBase: string; ulBase: string; mobile: boolean },
) {
  const t = getServerTranslation('pt');

  const enterpriseCert = [
    t('services.coordenacao.enterpriseCert.0'),
    t('services.coordenacao.enterpriseCert.1'),
    t('services.coordenacao.enterpriseCert.2'),
    t('services.coordenacao.enterpriseCert.3'),
  ];

  const responsibilities = [
    t('services.coordenacao.responsibilities.0'),
    t('services.coordenacao.responsibilities.1'),
    t('services.coordenacao.responsibilities.2'),
    t('services.coordenacao.responsibilities.3'),
    t('services.coordenacao.responsibilities.4'),
    t('services.coordenacao.responsibilities.5'),
    t('services.coordenacao.responsibilities.6'),
  ];

  return (
    <Card
      id={mobile ? "service-coordenacao-mobile" : "service-coordenacao"}
      className="flex-1 flex group relative py-0 bg-white/90 backdrop-blur-sm border-2 border-emerald-200/50 hover:border-emerald-400/70 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-[1.02] rounded-3xl"
    >
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
            {t('services.coordenacao.title')}
          </h3>
        </div>
        <p className="text-slate-700 text-base leading-relaxed font-medium  mb-3!">
          {t('services.coordenacao.description')}
        </p>

        <div className="flex flex-col gap-6">
          <div className="bg-emerald-50/50 p-3 md:p-4 md:pb-0 rounded-2xl border border-emerald-100">
            <p className="font-black text-emerald-700 text-sm uppercase tracking-wide mb-2!">
              {t('services.coordenacao.enterpriseCertTitle')}
            </p>
            <ul className={cn("space-y-2 mb-3!", ulBase)}>
              {enterpriseCert.map((text) => (
                <li key={text} className={liBase}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-50/50 p-3 md:p-4 md:pb-0 rounded-2xl border border-emerald-100">
            <p className="font-black text-emerald-700 text-sm uppercase tracking-wide mb-2!">
              {t('services.coordenacao.responsibilitiesTitle')}
            </p>
            <ul className={cn("space-y-2 mb-3!", ulBase)}>
              {responsibilities.map((text) => (
                <li key={text} className={liBase}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
