import ContactUsForm from "./ContactUsForm";
import ContactUsCards from "./ContactUsCards";
import { getServerTranslation } from "@/lib/i18n-server";

export function ContactSection({ lang }: { lang: string }) {
  const t = getServerTranslation(lang);

  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 bg-linear-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated background elements matching the site style */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="relative mb-16 md:mb-20 opacity-0 animate-fade-in-up">
            <div className="text-center mb-12 md:mb-16 lg:mb-20 opacity-0 animate-fade-in-up animation-delay-200">
              <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-blue-600 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    {t('contact.badge')}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 px-4">
                  {t('contact.title')} <span className="text-blue-600">{t('contact.titleHighlight')}</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                  {t('contact.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Form + Contact Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <ContactUsForm />
            <ContactUsCards />
          </div>
        </div>
      </div>
    </section>
  );
}
