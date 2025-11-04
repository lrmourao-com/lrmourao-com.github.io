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

        <nav className="float-right mt-[55px]">
          <ul 
            className="flex m-0 p-0" 
            style={{ 
              marginRight: '-5px',
              listStyle: 'none',
              listStyleType: 'none'
            }}
          >
            {navItems.map((item) => (
              <li 
                key={item.href}
                style={{ listStyle: 'none' }}
              >
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block"
                  style={{
                    color: '#FFF',
                    marginRight: '20px',
                    textDecoration: 'none',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '12px',
                    lineHeight: '25px',
                    fontWeight: 'bold',
                    fontVariantCaps: 'small-caps',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#9e9e9e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FFF')}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li style={{ listStyle: 'none' }}>
              <Link 
                href={lang === 'pt' ? '/en/' : '/'}
                className="flex items-center"
                style={{
                  color: '#FFF',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '24px',
                  fontWeight: 'bold',
                }}
                title={lang === 'pt' ? 'English' : 'Português'}
              >
                <span>{lang === 'pt' ? '🇬🇧' : '🇵🇹'}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

