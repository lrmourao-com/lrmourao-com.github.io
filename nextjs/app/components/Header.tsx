'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language, content } from '../content';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  const t = content[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: t.nav.home, href: '#main' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.advantages, href: '#advantages' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[125px] bg-[#3f66af] border-b-[3px] border-[#9e9e9e] z-[99990] overflow-hidden">
      <header className="relative w-[940px] h-[125px] mx-auto max-w-full px-4">
        <div className="absolute top-0 left-0 w-[312px] h-[125px]" style={{ marginLeft: '-50px' }}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="LR Mourão"
              width={312}
              height={125}
              priority
              className="w-[312px] h-[125px] object-contain"
            />
          </Link>
        </div>

        <DesktopMenu 
          lang={lang}
          navItems={navItems}
          onNavigate={scrollToSection}
        />

        <MobileMenu
          lang={lang}
          navItems={navItems}
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          onNavigate={scrollToSection}
        />
      </header>
    </div>
  );
}

