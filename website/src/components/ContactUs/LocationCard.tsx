import { getServerTranslation } from "@/lib/i18n-server";
import { Clock, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import { EmailCard } from "./EmailCard";

export function LocationCard({ lang }: { lang: string }) {
  const t = getServerTranslation(lang);

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 px-2 sm:px-0">
        {t("contact.info.location.title")}
      </h2>
      <div className="rounded-2xl bg-linear-to-br from-slate-50 to-slate-100 border border-slate-200 p-6 text-slate-900 shadow-lg">
        <div className="flex items-start gap-5">
          {/* icon */}
          <div className="mt-1 shrink-0 rounded-xl bg-linear-to-br from-teal-500 to-emerald-600 p-3 text-white shadow-md">
            <MapPin className="h-6 w-6" />
          </div>

          {/* text block */}
          <div className="min-w-0">
            <h3 className="text-xl font-bold">
              {t("contact.info.location.address")}
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              {t("contact.info.location.description")}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
                <Globe className="h-3 w-3" />
                <span>{t("contact.info.location.tag")}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
