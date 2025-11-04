'use client';

export default function BackToTop({ text }: { text: string }) {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#main"
      onClick={scrollToTop}
      className="block absolute bottom-[-65px] right-[10px] h-[43px] w-[43px] z-[1000] hover:opacity-80 transition-opacity"
      style={{
        background: 'url(/images/back-to-top.png)',
        fontSize: 0,
        color: 'transparent',
      }}
      aria-label={text}
    >
      {text}
    </a>
  );
}

