"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
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
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    // Check initial scroll position on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

            <div className="relative ml-4 border-l pl-4 border-slate-500/30" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 text-slate-200 hover:text-amber-400 transition-colors font-semibold py-2"
              >
                <span className="text-xl">{currentLang.flag}</span>
                <span className="uppercase">{currentLang.code}</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isLangDropdownOpen && "rotate-180")} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-blue-950/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="py-1">
                    {LANGUAGES.map((lang) => (
                      <a
                        key={lang.code}
                        href={`/${lang.code}`}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-white/10",
                          i18n.language === lang.code ? "text-amber-400 font-bold bg-white/5" : "text-slate-200"
                        )}
                        onClick={() => setIsLangDropdownOpen(false)}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
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
            
            <div className="border-t border-white/10 mt-2 pt-4 px-4">
              <p className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">Select Language</p>
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <a
                    key={lang.code}
                    href={`/${lang.code}`}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors border border-transparent",
                      i18n.language === lang.code 
                        ? "text-amber-400 bg-white/10 border-amber-500/20 font-bold" 
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
