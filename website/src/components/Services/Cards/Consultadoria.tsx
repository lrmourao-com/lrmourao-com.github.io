import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, Target } from "lucide-react";

interface ConsultadoriaProps {
  liBase: string;
  ulBase: string;
  mobile: boolean;
  content: {
    title: string;
    description: string;
    items: string[];
  };
}

export function Consultadoria({ liBase, ulBase, mobile, content }: ConsultadoriaProps) {
  return (
    <Card
      id={mobile ? "service-consultadoria-mobile" : "service-consultadoria"}
      className="flex-1 flex group py-0 relative bg-white/90 backdrop-blur-sm border-2 border-purple-200/50 hover:border-purple-400/70 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] rounded-3xl"
    >
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-purple-50 to-pink-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-purple-400/20 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-purple-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
      </div>
      <CardContent className="p-6 md:p-10 relative h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-linear-to-br from-purple-500 to-pink-600 group-hover:from-purple-600 group-hover:to-pink-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
            <Target className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-pink-700 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
            {content.title}
          </h3>
        </div>
        <p className="text-slate-700 text-base leading-relaxed mb-3! font-medium">
          {content.description}
        </p>
        <ul className={cn("space-y-2.5 mb-0!", ulBase)}>
          {content.items.map((text) => (
            <li
              key={text}
              className={cn(
                "bg-purple-50/50 p-2.5 rounded-xl border border-purple-100",
                liBase,
              )}
            >
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
              <span className="font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
