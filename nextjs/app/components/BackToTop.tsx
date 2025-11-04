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
      className="block absolute bottom-[-65px] right-[10px] h-[43px] w-[43px] bg-[url('/images/back-to-top.png')] text-transparent overflow-hidden z-[1000] hover:opacity-80 transition-opacity"
      aria-label={text}
    >
      {text}
    </a>
  );
}

