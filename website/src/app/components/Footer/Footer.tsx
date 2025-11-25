import { FooterNav } from "./FooterNav";
import { getServerTranslation } from "@/lib/i18n-server";

export function Footer() {
  const t = getServerTranslation('pt');

  return (
    <footer className="relative bg-linear-to-r from-blue-950/95 via-blue-900/95 to-blue-950/95 text-white py-6 border-t-2 border-amber-500/20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center justify-evenly gap-8">
          <div className="flex items-center">
            <img
              src="/lrmourao-logo.svg"
              alt={t('footer.logoAlt')}
              className="h-14 md:h-16 lg:h-20 w-auto drop-shadow-lg"
            />
          </div>

          <p className="text-slate-300 text-xs text-center font-medium self-end">
            © {new Date().getFullYear()}{" "}
            {t('footer.copyright')}<br />
            {t('footer.producedBy')}{" "}
            <a
              href="http://prock.dev/"
              className="text-orange-400! hover:text-orange-300! font-bold transition-colors duration-300"
            >
              Pedro Roque
            </a>{" "}
            {t('footer.withSupport')}{" "}
            <a
              href="http://tiago.vardas.ca/"
              className="text-orange-400! hover:text-orange-300! font-bold transition-colors duration-300"
            >
              Tiago Vardas
            </a>
          </p>

          <FooterNav />
        </div>
      </div>
    </footer>
  );
}
