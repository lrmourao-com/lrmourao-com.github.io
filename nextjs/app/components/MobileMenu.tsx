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

      {/* Full Screen Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#3f66af] transition-all duration-300 ease-in-out z-[99990] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          top: '125px',
        }}
      >
        {/* Menu Content */}
        <nav className="flex flex-col justify-between h-full px-8 py-16">
          {/* Main Navigation */}
          <ul 
            className="flex flex-col space-y-8" 
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
          >
            {navItems.map((item) => (
              <li key={item.href} style={{ listStyle: 'none' }}>
                <a
                  href={item.href}
                  onClick={(e) => onNavigate(e, item.href)}
                  style={{
                    color: '#FFF',
                    textDecoration: 'none',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    display: 'block',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseDown={(e) => (e.currentTarget.style.opacity = '0.6')}
                  onMouseUp={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Switcher - Bottom */}
          <div 
            style={{ 
              borderTop: '1px solid rgba(255,255,255,0.3)',
              paddingTop: '24px',
            }}
          >
            <Link 
              href={lang === 'pt' ? '/en/' : '/'}
              className="flex items-center gap-3"
              style={{
                color: '#FFF',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 'bold',
                fontFamily: 'Helvetica, Arial, sans-serif',
              }}
              title={lang === 'pt' ? 'English' : 'Português'}
              onClick={onToggle}
            >
              <span style={{ fontSize: '28px' }}>{lang === 'pt' ? '🇬🇧' : '🇵🇹'}</span>
              <span>{lang === 'pt' ? 'English' : 'Português'}</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

