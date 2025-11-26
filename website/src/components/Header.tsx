"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getNavItems } from "@/app/data/data";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";
import { useTranslation } from "@/lib/use-translation";
import { LANGUAGES } from "@/lib/constants";

export function Header() {
  const { t, i18n } = useTranslation();
  const NAV_ITEMS = getNavItems(t);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    // Check initial scroll position on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(true, id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full overflow-x-clip transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-r from-blue-950/95 via-blue-900/95 to-blue-950/95 backdrop-blur-md shadow-2xl shadow-amber-500/10 border-b border-amber-500/30"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 relative max-w-7xl">
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-32 md:w-48 lg:w-64 h-full bg-gradient-to-l from-amber-500/10 to-transparent" />
        </div>

        <div className="flex items-center justify-between h-24 relative z-10">
          <div className="flex items-center">
            <img
              src="/lrmourao-logo.svg"
              alt={t('footer.logoAlt')}
              className="h-14 md:h-16 lg:h-20 w-auto drop-shadow-lg"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
                className="no-underline text-slate-200 hover:!text-amber-400 transition-all duration-300 font-semibold hover:scale-105 relative group visited:text-slate-200"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <div className="flex items-center gap-3 ml-4 border-l pl-4 border-slate-500/30">
              {LANGUAGES.map((lang) => (
                <a
                  key={lang.code}
                  href={`/${lang.code}`}
                  className={cn(
                    "text-sm font-bold transition-colors hover:text-amber-400 hover:scale-110",
                    i18n.language === lang.code ? "text-amber-400" : "text-slate-300"
                  )}
                >
                  {lang.shortLabel}
                </a>
              ))}
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-amber-400 p-2 transition-all duration-300 hover:scale-105"
            aria-label={t('nav.toggleMenu')}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-white/10 pt-4">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
                className="no-underline block w-full text-left py-3 px-4 text-slate-200 hover:!text-amber-400 hover:bg-white/5 rounded-lg transition-all duration-300 font-semibold visited:text-slate-200"
              >
                {label}
              </a>
            ))}
            
            <div className="flex items-center justify-center gap-6 py-4 border-t border-white/10 mt-2">
              {LANGUAGES.map((lang) => (
                <a
                  key={lang.code}
                  href={`/${lang.code}`}
                  className={cn(
                    "text-base font-bold transition-colors hover:text-amber-400",
                    i18n.language === lang.code ? "text-amber-400" : "text-slate-300"
                  )}
                >
                  {lang.shortLabel}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
