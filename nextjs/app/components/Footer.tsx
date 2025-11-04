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
    <footer 
      className="relative w-[940px] max-w-full mx-auto pt-[125px] px-4"
      style={{
        background: 'url(/images/section-sep.png) repeat-x left 25px'
      }}
    >
      <div className="relative w-[900px] max-w-full" style={{ top: '-105px' }}>
        <ul 
          className="flex float-left m-0 p-0" 
          style={{ 
            marginTop: '20px', 
            marginBottom: '5px', 
            marginLeft: '-3px',
            listStyle: 'none',
            listStyleType: 'none'
          }}
        >
          {menuItems.map((item, index) => (
            <li 
              key={item.href} 
              className="float-left list-none"
            >
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`
                  block px-3 py-px
                  text-xs leading-none
                  text-[#3B3B3B] hover:text-[#3f66af]
                  no-underline
                  transition-colors
                  ${index > 0 ? 'border-l border-[#ADADAD]' : ''}
                `}
                style={{
                  fontFamily: 'MerriweatherBold, serif',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p 
          className="clear-both mb-0"
          style={{
            fontFamily: 'MerriweatherRegular, serif',
            fontSize: '0.75em',
            padding: '0 10px'
          }}
        >
          {lang === 'pt' ? 'Todos os direitos reservados 2025 LR Mourão.' : 'Copyright 2025 LR Mourão.'}{' '}
          &nbsp;&nbsp;&nbsp;{' '}
          {lang === 'pt' ? 'Produzido por' : 'Powered by'}{' '}
          <a 
            href="http://tiago.vardas.ca/"
            className="text-[#3f66af] hover:text-[#9e9e9e] no-underline transition-colors"
          >
            Vardas
          </a>
        </p>
      </div>

      <div className="fixed right-0 bottom-0 h-6 z-99999">
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

