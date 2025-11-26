import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, Shield } from "lucide-react";
import { getServerTranslation } from "@/lib/i18n-server";

export function InspecaoCard(
  { liBase, ulBase, mobile }: { liBase: string; ulBase: string; mobile: boolean },
) {
  const t = getServerTranslation('pt');

  const items = [
    t('services.inspecao.items.0'),
    t('services.inspecao.items.1'),
    t('services.inspecao.items.2'),
    t('services.inspecao.items.3'),
    t('services.inspecao.items.4'),
    t('services.inspecao.items.5'),
  ];

  return (
    <Card
      id={mobile ? "service-inspecao-mobile" : "service-inspecao"}
      className="flex-1 flex group relative py-0 bg-white/90 backdrop-blur-sm border-2 border-red-200/50 hover:border-red-400/70 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-[1.02] rounded-3xl"
    >
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-red-50 to-rose-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-400/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-red-400/20 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 w-48 h-48 border-2 border-red-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
      </div>
      <CardContent className="p-6 md:p-10 relative h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-linear-to-br from-red-500 to-rose-600 group-hover:from-red-600 group-hover:to-rose-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-red-700 to-rose-700 group-hover:from-red-600 group-hover:to-rose-600 transition-all duration-300">
            {t('services.inspecao.title')}
          </h3>
        </div>
        <p className="text-slate-700 text-base leading-relaxed mb-3! font-medium">
          {t('services.inspecao.description')}
        </p>
        <ul className={cn(ulBase, "space-y-2.5 mb-0!")}>
          {items.map((text) => (
            <li
              key={text}
              className={cn(
                liBase,
                "bg-red-50/50 p-2.5 rounded-xl border border-red-100",
              )}
            >
              <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
              <span className="font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
