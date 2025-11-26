import { FooterNav } from "./FooterNav";
import { getServerTranslation } from "@/lib/i18n-server";
import { LANGUAGES } from "@/data/constants";

export function Footer({ lang }: { lang: string }) {
  const t = getServerTranslation(lang);

  return (
    <footer className="relative bg-linear-to-r from-blue-950/95 via-blue-900/95 to-blue-950/95 text-white py-4 border-t-2 border-amber-500/20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-64 h-full bg-linear-to-l from-amber-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo Column */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/lrmourao-logo.svg"
              alt={t('footer.logoAlt')}
              className="h-16 md:h-20 w-auto drop-shadow-lg"
            />
          </div>

          {/* Credits & Copyright Column */}
          <div className="flex flex-col items-center text-center gap-2 pt-5">
            <p className="text-slate-300 text-sm font-medium">
              {t('footer.producedBy')}{" "}
              <a
                href="http://prock.dev/"
                className="text-orange-400 hover:text-orange-300 font-bold transition-colors duration-300"
              >
                Pedro Roque
              </a>
              {" "}{t('footer.withSupport')}{" "}
              <a
                href="http://tiago.vardas.ca/"
                className="text-orange-400 hover:text-orange-300 font-bold transition-colors duration-300"
              >
                Tiago Vardas
              </a>
            </p>
            <p className="text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex justify-center md:justify-end">
            <FooterNav />
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex flex-wrap justify-center gap-6 border-t border-white/10 pt-6 mb-2">
          {LANGUAGES.map((l) => (
            <a
              key={l.code}
              href={`/${l.code}`}
              className={`text-xs font-semibold uppercase tracking-wider hover:text-amber-400 transition-colors ${
                lang === l.code ? 'text-amber-400' : 'text-slate-400'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
