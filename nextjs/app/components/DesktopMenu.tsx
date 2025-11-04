import Link from 'next/link';
import { Language, content } from '../content';

interface DesktopMenuProps {
  lang: Language;
  navItems: Array<{ label: string; href: string }>;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function DesktopMenu({ lang, navItems, onNavigate }: DesktopMenuProps) {
  return (
    <nav className="hidden lg:block float-right mt-[55px]">
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
              onClick={(e) => onNavigate(e, item.href)}
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
  );
}

