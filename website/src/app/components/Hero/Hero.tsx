import { HERO_STATS, CERTIFICATIONS } from "@/app/data/data";
import { HeroButtons } from "./HeroButtons";
import { SpecializationsList } from "./SpecializationsList";

export function Hero() {
  return (
    <section
      id="main"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/industrial-welding-sparks-and-metal-fabrication-in.jpg"
          alt="Welding"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border-2 border-amber-500/50 px-6 py-3 rounded-full mb-8 shadow-lg shadow-amber-500/20">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-bold tracking-wider">
                Desde 2010
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-balance drop-shadow-2xl">
              <span className="text-slate-100">Excelência em</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                formação e coordenação de soldadura
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed text-pretty font-medium">
              Soluções completas em formação, certificação e coordenação de
              soldadura para a indústria moderna.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b-2 border-white/20">
              {HERO_STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  className="text-center group cursor-pointer"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-300 font-semibold">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <HeroButtons />
          </div>

          <div className="relative">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div className="relative bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full shadow-lg shadow-amber-500/50" />
                <h3 className="text-xl font-bold text-white">
                  Áreas de Especialização
                </h3>
              </div>

              <SpecializationsList />

              <div className="mt-6 pt-6 border-t-2 border-white/20">
                <p className="text-xs text-slate-300 mb-3 font-semibold">
                  Certificações e Normas:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {CERTIFICATIONS.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] bg-gradient-to-r from-white/10 to-white/5 hover:from-amber-500/20 hover:to-orange-500/20 border border-white/30 hover:border-amber-400/60 text-slate-200 hover:text-white px-3 py-1.5 rounded-full font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-slate-300 font-semibold">Scroll</span>
          <div className="w-6 h-10 border-2 border-amber-400/40 rounded-full flex items-start justify-center p-2 shadow-lg shadow-amber-500/20">
            <div className="w-1.5 h-3 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full shadow-lg shadow-amber-400/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
