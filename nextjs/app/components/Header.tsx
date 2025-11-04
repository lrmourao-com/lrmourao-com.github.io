'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Language, content } from '../content';

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  const pathname = usePathname();
  const t = content[lang];
  
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
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[125px] bg-[#3f66af] border-b-[3px] border-[#9e9e9e] z-[99990]">
      <header className="relative w-[940px] h-[125px] mx-auto max-w-full px-4">
        <div className="absolute top-0 left-[-50px] w-[312px] h-[125px]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="LR Mourão"
              width={312}
              height={125}
              priority
              className="w-[312px] h-[125px]"
            />
          </Link>
        </div>

        <nav className="float-right mt-[55px]">
          <ul className="flex list-none font-bold text-xs leading-[25px] text-white uppercase">
            {navItems.map((item) => (
              <li className="mr-5" key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-white no-underline hover:text-[#9e9e9e] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href={lang === 'pt' ? '/en/' : '/'}>
                <Image
                  src={lang === 'pt' ? '/images/en.png' : '/images/pt.png'}
                  alt={lang === 'pt' ? 'English' : 'Português'}
                  width={25}
                  height={22}
                  className="w-[25px] h-[22px]"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

