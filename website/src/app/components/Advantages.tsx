import { Card, CardContent } from "@/components/ui/card";
import { getAdvantages } from "@/app/data/data";
import { getServerTranslation } from "@/lib/i18n-server";

export function Advantages() {
  const t = getServerTranslation('pt');
  const ADVANTAGES = getAdvantages(t);

  return (
    <section
      id="advantages"
      className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border-2 border-amber-500/50 px-6 py-3 rounded-full mb-8 shadow-lg shadow-amber-500/20">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 text-sm font-bold tracking-wider uppercase">
              {t('advantages.badge')}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
            {t('advantages.title')}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-fuchsia-500 to-rose-500 bg-[length:200%_200%] drop-shadow-[0_0_18px_rgba(251,191,36,0.55)]">
              {t('advantages.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-medium">
            {t('advantages.description')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-8 justify-center items-stretch">
            {ADVANTAGES.map((c, i) => (
              <div
                key={c.title}
                className="flex-none w-full sm:w-auto sm:flex-none sm:basis-[260px] md:basis-[300px] lg:basis-[340px] xl:basis-[340px]"
              >
                <Card
                  className="group relative h-full flex flex-col bg-white/95 backdrop-blur-sm border-2 border-amber-300/50 shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 overflow-hidden hover:scale-105"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-5 group-hover:opacity-15 transition-all duration-500`}
                  />
                  <div
                    className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${c.color} opacity-10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:opacity-30 transition-all group-hover:scale-150 duration-700`}
                  />
                  <div className="absolute top-2 right-2 w-24 h-24 border-2 border-amber-300/20 rounded-full group-hover:scale-150 transition-transform duration-700" />

                  <CardContent className="p-10 relative flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`bg-gradient-to-br ${c.color} p-4 rounded-2xl shadow-2xl group-hover:shadow-amber-500/50 transition-all group-hover:scale-110 group-hover:rotate-6 duration-500`}
                      >
                        <c.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                          {c.title}
                        </h3>
                        <p className="text-sm text-amber-600 font-bold uppercase tracking-wider">
                          {c.sub}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-base mb-6 group-hover:text-slate-900 transition-colors font-medium">
                      {c.text}
                    </p>
                    {c.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {c.tags.map((tagText) => (
                          <span
                            key={tagText}
                            className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold border-2 border-amber-300 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                          >
                            {tagText}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}