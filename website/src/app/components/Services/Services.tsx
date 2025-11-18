
import { FormacaoCard } from "./Cards/Formacao";
import { Consultadoria } from "./Cards/Consultadoria";
import { CoordenacaoCard } from "./Cards/Coordenacao";
import { InspecaoCard } from "./Cards/Inspecao";
import { CertificacaoCard } from "./Cards/Certificacao";

// Reusable Tailwind class tokens for lists
const ulBase = "text-slate-700 text-sm md:text-base";
const liBase = "flex items-start gap-1.5 pl-4";

export function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-linear-to-br from-blue-50 via-slate-50 to-indigo-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiLz48L2c+PC9zdmc+')]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 border-2 border-blue-500/30 px-6 py-3 rounded-full mb-8 shadow-lg shadow-blue-500/10">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-700 text-sm font-bold tracking-wider uppercase">
              O Que Fazemos
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 drop-shadow-sm">
            Serviços{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600">
              Especializados
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-medium">
            Soluções completas e certificadas para todas as suas necessidades em
            soldadura e coordenação industrial
          </p>
        </div>

        {/* Mosaic Container */}
        <div className="hidden sm:flex flex-col sm:flex-row gap-8 max-w-7xl mx-auto w-full my-8">
          {/* Column 1 */}
          <div className="flex flex-col flex-1 gap-8">
            {/* Item 1 */}
            <FormacaoCard liBase={liBase} ulBase={ulBase} mobile={false} />
            {/* Item 2 */}
            <Consultadoria liBase={liBase} ulBase={ulBase} mobile={false} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col flex-1 gap-8">
            {/* Item 1 */}
            <CoordenacaoCard liBase={liBase} ulBase={ulBase} mobile={false} />
            {/* Item 2 */}
            <InspecaoCard liBase={liBase} ulBase={ulBase} mobile={false} />
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-8 sm:hidden max-w-7xl mx-auto">
          <FormacaoCard liBase={liBase} ulBase={ulBase} mobile={true} />
          <CoordenacaoCard liBase={liBase} ulBase={ulBase} mobile={true} />
          <Consultadoria liBase={liBase} ulBase={ulBase} mobile={true} />
          <InspecaoCard liBase={liBase} ulBase={ulBase} mobile={true} />
        </div>

        {/* Certificacao Card */}
        <div className="max-w-7xl mx-auto">
          <CertificacaoCard liBase={liBase} ulBase={ulBase} />
        </div>
      </div>
    </section>
  );
}
