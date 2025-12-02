import { Clock, Globe, MapPin, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import { EmailCard } from "./EmailCard";
import { LocationCard } from "./LocationCard";

function ContactUsCards() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 px-2 sm:px-0">
          Fale connosco
        </h2>

        {/* Contact Cards - redesigned layout */}
        <div className="space-y-3 sm:space-y-4">
          {/* WhatsApp Card - redesigned */}
          <div className="group relative bg-white/90 backdrop-blur-sm border-2 border-emerald-500 hover:border-emerald-400/70 hover:scale-[1.02] shadow-lg transition-all duration-300 ease-out rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 transition-opacity" />

            {/* Clickable overlay */}
            <a
              href="https://wa.me/351916672566"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-0"
              aria-label="Abrir WhatsApp"
            />

            <div className="relative p-4 sm:p-6 z-10 pointer-events-none">
              <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-emerald-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                    <Image
                      src="/images/whatsapp.svg"
                      alt="WhatsApp"
                      width={32}
                      height={32}
                      className="sm:w-10 sm:h-10"
                    />
                  </div>
                  <div className="select-text min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                      WhatsApp
                    </h3>
                    <p className="text-slate-700 text-base sm:text-lg md:text-xl font-bold break-all sm:break-normal">
                      (+351) 916 672 566
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:justify-center self-start sm:self-center w-full sm:w-auto">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-medium text-slate-700 ring-1 ring-emerald-400/20 shadow-sm backdrop-blur-sm select-text">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-emerald-700 font-semibold whitespace-nowrap">
                      Resposta Instantânea
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card - redesigned */}
          <div className="group relative bg-white/90 backdrop-blur-sm border-2 border-cyan-200/50 hover:border-cyan-400/70 hover:scale-[1.02] shadow-lg transition-all duration-300 ease-out rounded-xl sm:rounded-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none" />

            {/* Clickable overlay */}
            <a
              href="tel:+351916672566"
              className="absolute inset-0 z-0"
              aria-label="Ligar"
            />

            <div className="relative p-4 sm:p-6 z-10 pointer-events-none">
              <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="select-text min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                      Telefone
                    </h3>
                    <p className="text-slate-700 text-base sm:text-lg md:text-xl font-bold tracking-tight break-all sm:break-normal">
                      (+351) 916 672 566
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:justify-center self-start sm:self-center w-full sm:w-auto">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-medium text-slate-700 ring-1 ring-cyan-400/20 shadow-sm backdrop-blur-sm select-text whitespace-nowrap">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600 shrink-0" />
                    Seg – Sex
                    <span className="mx-1 sm:mx-1.5 text-slate-300">•</span>
                    <span className="text-cyan-700 font-semibold">
                      9h – 18h
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card - click to open, icon to copy */}
          <EmailCard />
        </div>
      </div>

      {/* Location Section */}

      <LocationCard />
    </div>
  );
}

export default ContactUsCards;
