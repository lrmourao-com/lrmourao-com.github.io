import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Award, CheckCircle2 } from "lucide-react";

interface CertificacaoCardProps {
  liBase: string;
  ulBase: string;
  mobile?: boolean;
  content: {
    title: string;
    description: string;
    items: string[];
  };
}

export function CertificacaoCard({ liBase, ulBase, mobile = false, content }: CertificacaoCardProps) {
  return (
    <Card
      id={mobile ? "service-certificacao-mobile" : "service-certificacao"}
      className="group relative pb-0 bg-white/90 backdrop-blur-sm border-2 border-amber-200/50 hover:border-amber-400/70 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-3xl mt-8"
    >
      <div className="absolute inset-0 bg-linear-to-br from-amber-50 to-orange-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-amber-400/20 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-amber-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
      <CardContent className="p-6 md:p-10 relative h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-linear-to-br from-amber-500 to-orange-600 group-hover:from-amber-600 group-hover:to-orange-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
            <Award className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-700 to-orange-700 group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
            {content.title}
          </h3>
        </div>
        <p className="text-slate-700 text-base leading-relaxed mb-3! font-medium flex-1">
          {content.description}
        </p>
        <ul
          className={cn(
            ulBase,
            "grid md:grid-cols-2 gap-2.5 mt-auto mb-0!",
          )}
        >
          {content.items.map((text) => (
            <li
              key={text}
              className={cn(
                liBase,
                "bg-amber-50/50 p-2.5 rounded-xl border border-amber-100",
              )}
            >
              <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <span className="font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
