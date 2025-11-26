import { FormacaoCard } from "./Cards/Formacao";
import { Consultadoria } from "./Cards/Consultadoria";
import { CoordenacaoCard } from "./Cards/Coordenacao";
import { InspecaoCard } from "./Cards/Inspecao";
import { CertificacaoCard } from "./Cards/Certificacao";
import { getServerTranslation } from "@/lib/i18n-server";

// Reusable Tailwind class tokens for lists
const ulBase = "text-slate-700 text-sm md:text-base";
const liBase = "flex items-start gap-1.5 pl-4";

export function Services({ lang }: { lang: string }) {
  const t = getServerTranslation(lang);

  const formacaoContent = {
    popular: t('services.formacao.popular'),
    title: t('services.formacao.title'),
    description: t('services.formacao.description'),
    processesTitle: t('services.formacao.processesTitle'),
    alloysTitle: t('services.formacao.alloysTitle'),
    coursesTitle: t('services.formacao.coursesTitle'),
    certificationTitle: t('services.formacao.certificationTitle'),
    alloys: t('services.formacao.alloys'),
    certification: t('services.formacao.certification'),
    processes: [
      t('services.formacao.processes.0'),
      t('services.formacao.processes.1'),
      t('services.formacao.processes.2'),
    ],
    courses: [
      t('services.formacao.courses.0'),
      t('services.formacao.courses.1'),
      t('services.formacao.courses.2'),
    ],
  };

  const consultadoriaContent = {
    title: t('services.consultadoria.title'),
    description: t('services.consultadoria.description'),
    items: [
      t('services.consultadoria.items.0'),
      t('services.consultadoria.items.1'),
      t('services.consultadoria.items.2'),
      t('services.consultadoria.items.3'),
      t('services.consultadoria.items.4'),
      t('services.consultadoria.items.5'),
      t('services.consultadoria.items.6'),
      t('services.consultadoria.items.7'),
    ],
  };

  const coordenacaoContent = {
    title: t('services.coordenacao.title'),
    description: t('services.coordenacao.description'),
    enterpriseCertTitle: t('services.coordenacao.enterpriseCertTitle'),
    responsibilitiesTitle: t('services.coordenacao.responsibilitiesTitle'),
    enterpriseCert: [
      t('services.coordenacao.enterpriseCert.0'),
      t('services.coordenacao.enterpriseCert.1'),
      t('services.coordenacao.enterpriseCert.2'),
      t('services.coordenacao.enterpriseCert.3'),
    ],
    responsibilities: [
      t('services.coordenacao.responsibilities.0'),
      t('services.coordenacao.responsibilities.1'),
      t('services.coordenacao.responsibilities.2'),
      t('services.coordenacao.responsibilities.3'),
      t('services.coordenacao.responsibilities.4'),
      t('services.coordenacao.responsibilities.5'),
      t('services.coordenacao.responsibilities.6'),
    ],
  };

  const inspecaoContent = {
    title: t('services.inspecao.title'),
    description: t('services.inspecao.description'),
    items: [
      t('services.inspecao.items.0'),
      t('services.inspecao.items.1'),
      t('services.inspecao.items.2'),
      t('services.inspecao.items.3'),
      t('services.inspecao.items.4'),
      t('services.inspecao.items.5'),
    ],
  };

  const certificacaoContent = {
    title: t('services.certificacao.title'),
    description: t('services.certificacao.description'),
    items: [
      t('services.certificacao.items.0'),
      t('services.certificacao.items.1'),
      t('services.certificacao.items.2'),
      t('services.certificacao.items.3'),
      t('services.certificacao.items.4'),
    ],
  };

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
              {t('services.badge')}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 drop-shadow-sm">
            {t('services.title')}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600">
              {t('services.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-medium">
            {t('services.description')}
          </p>
        </div>

        {/* Mosaic Container */}
        <div className="hidden sm:flex flex-col sm:flex-row gap-8 max-w-7xl mx-auto w-full my-8">
          {/* Column 1 */}
          <div className="flex flex-col flex-1 gap-8">
            {/* Item 1 */}
            <FormacaoCard liBase={liBase} ulBase={ulBase} mobile={false} content={formacaoContent} />
            {/* Item 2 */}
            <Consultadoria liBase={liBase} ulBase={ulBase} mobile={false} content={consultadoriaContent} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col flex-1 gap-8">
            {/* Item 1 */}
            <CoordenacaoCard liBase={liBase} ulBase={ulBase} mobile={false} content={coordenacaoContent} />
            {/* Item 2 */}
            <InspecaoCard liBase={liBase} ulBase={ulBase} mobile={false} content={inspecaoContent} />
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-8 sm:hidden max-w-7xl mx-auto">
          <FormacaoCard liBase={liBase} ulBase={ulBase} mobile={true} content={formacaoContent} />
          <CoordenacaoCard liBase={liBase} ulBase={ulBase} mobile={true} content={coordenacaoContent} />
          <Consultadoria liBase={liBase} ulBase={ulBase} mobile={true} content={consultadoriaContent} />
          <InspecaoCard liBase={liBase} ulBase={ulBase} mobile={true} content={inspecaoContent} />
        </div>

        {/* Certificacao Card */}
        <div className="max-w-7xl mx-auto">
          <CertificacaoCard liBase={liBase} ulBase={ulBase} content={certificacaoContent} />
        </div>
      </div>
    </section>
  );
}
