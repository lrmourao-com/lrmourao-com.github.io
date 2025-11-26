'use client';

import { getNavItems } from "@/app/data/data";
import { scrollToSection } from "@/lib/scroll";
import { useTranslation } from "@/lib/use-translation";

export function FooterNav() {
  const { t } = useTranslation();
  const NAV_ITEMS = getNavItems(t);

  return (
    <nav className="flex flex-wrap justify-center gap-4 h-12 self-end items-center">
      {NAV_ITEMS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(true, id);
          }}
          className="no-underline text-slate-200 hover:!text-amber-400 transition-all duration-300 text-sm font-semibold hover:scale-110 relative group visited:text-slate-200"
        >
          {label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
        </a>
      ))}
    </nav>
  );
}

