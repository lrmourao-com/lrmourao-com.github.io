'use client';

import Link from 'next/link';
import { Language } from '../content';

interface MobileMenuProps {
  lang: Language;
  navItems: Array<{ label: string; href: string }>;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function MobileMenu({ lang, navItems, isOpen, onToggle, onNavigate }: MobileMenuProps) {
  return (
    <>
      {/* Mobile Menu Button - Visible only on mobile */}
      <button
        onClick={onToggle}
        className="lg:hidden absolute right-4 top-[40px] z-[100000] text-white"
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu - Slide in from right */}
      <div
        className={`lg:hidden fixed top-[125px] right-0 w-64 bg-[#3f66af] transition-transform duration-300 ease-in-out z-[99980] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          height: 'calc(100vh - 125px)',
          borderLeft: '2px solid #9e9e9e'
        }}
      >
        <nav className="flex flex-col p-6">
          <ul className="flex flex-col space-y-4" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item) => (
              <li key={item.href} style={{ listStyle: 'none' }}>
                <a
                  href={item.href}
                  onClick={(e) => onNavigate(e, item.href)}
                  style={{
                    color: '#FFF',
                    textDecoration: 'none',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    fontVariantCaps: 'small-caps',
                    display: 'block',
                    padding: '8px 0',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li style={{ listStyle: 'none', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <Link 
                href={lang === 'pt' ? '/en/' : '/'}
                className="flex items-center gap-2"
                style={{
                  color: '#FFF',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
                title={lang === 'pt' ? 'English' : 'Português'}
                onClick={onToggle}
              >
                <span style={{ fontSize: '24px' }}>{lang === 'pt' ? '🇬🇧' : '🇵🇹'}</span>
                <span>{lang === 'pt' ? 'English' : 'Português'}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[99970]"
          style={{ top: '125px' }}
          onClick={onToggle}
        />
      )}
    </>
  );
}

