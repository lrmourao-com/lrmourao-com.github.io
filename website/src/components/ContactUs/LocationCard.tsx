import { ArrowRight, Clock, Globe, MapPin, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import { EmailCard } from "./EmailCard";

export function LocationCard() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white shadow-xl">
      <div className="flex items-start gap-5">
        {/* icon */}
        <div className="mt-1 shrink-0 rounded-xl bg-white/10 p-3 ring-1 ring-white/20">
          <MapPin className="h-6 w-6" />
        </div>

        {/* text block */}
        <div className="min-w-0">
          <h3 className="text-xl font-bold">Sede em Leiria</h3>

          <p className="mt-2 text-sm text-slate-300">
            Operamos em todas as regiões do país, desde o Minho até ao Algarve, com deslocação
            incluída. Onde quer que esteja, levamos a nossa solução até si.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20">
              <Globe className="h-3 w-3" />
              <span>Cobertura nacional</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20">
              <Clock className="h-3 w-3" />
              <span>Deslocação rápida</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

