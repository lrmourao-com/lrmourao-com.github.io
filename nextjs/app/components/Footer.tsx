'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Language, content } from '../content';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = content[lang];
  
  const menuItems = [
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
    }
  };

  return (
    <footer className="relative w-[940px] max-w-full mx-auto pt-[125px] px-4">
      <div className="relative w-full top-[-105px]">
        <ul className="flex list-none float-left mt-5 mb-[5px] ml-[-3px] p-0">
          {menuItems.map((item, index) => (
            <li key={item.href} className="float-left">
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block text-xs leading-4 text-[#3B3B3B] px-3 py-[1px] no-underline hover:text-[#3f66af] ${
                  index > 0 ? 'border-l border-[#ADADAD]' : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs px-[10px] mb-0 clear-both">
          {lang === 'pt' ? 'Todos os direitos reservados 2025 LR Mourão.' : 'Copyright 2025 LR Mourão.'}{' '}
          &nbsp;&nbsp;&nbsp;{' '}
          {lang === 'pt' ? 'Produzido por' : 'Powered by'}{' '}
          <a href="http://tiago.vardas.ca/" className="text-[#3f66af] no-underline hover:text-[#9e9e9e]">
            Vardas
          </a>
        </p>
      </div>

      <div className="fixed right-0 bottom-0 h-6 z-[99999]">
        <Image
          src={lang === 'pt' ? '/images/15.png' : '/images/15en.png'}
          alt="15 years"
          width={200}
          height={200}
          className="fixed right-0 bottom-0 h-[200px] w-auto"
        />
      </div>
    </footer>
  );
}

