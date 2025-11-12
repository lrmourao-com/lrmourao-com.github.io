import { NAV_ITEMS } from "@/app/data/data";

export function Footer({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <footer className="relative bg-gradient-to-r from-blue-950/95 via-blue-900/95 to-blue-950/95 text-white py-6 border-t-2 border-amber-500/20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img
              src="/lrmourao-logo.svg"
              alt="LR Mourão - soldamos o futuro | welding the future"
              className="h-14 md:h-16 lg:h-20 w-auto drop-shadow-lg"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-slate-200 hover:text-amber-400 transition-all duration-300 text-sm font-semibold hover:scale-110 relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <p className="text-slate-300 text-xs text-center font-medium">
            Todos os direitos reservados {new Date().getFullYear()}{" "}
            LR Mourão.<br />
            Produzido por{" "}
            <a
              href="http://tiago.vardas.ca/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 font-bold transition-all duration-300 hover:scale-105 inline-block"
            >
              Vardas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
