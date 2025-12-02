import { Clock, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import { EmailCard } from "./EmailCard";

export function LocationCard() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-6 text-slate-900 shadow-lg">
      <div className="flex items-start gap-5">
        {/* icon */}
        <div className="mt-1 shrink-0 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 p-3 text-white shadow-md">
          <MapPin className="h-6 w-6" />
        </div>

        {/* text block */}
        <div className="min-w-0">
          <h3 className="text-xl font-bold">Situados em Leiria, Portugal</h3>

          <p className="mt-2 text-sm text-slate-600">
            Operamos por todo o país.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
              <Globe className="h-3 w-3" />
              <span>Cobertura nacional</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
              <Clock className="h-3 w-3" />
              <span>Deslocação rápida</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

