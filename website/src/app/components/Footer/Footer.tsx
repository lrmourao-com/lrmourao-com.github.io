import { FooterNav } from "./FooterNav";

export function Footer() {
  return (
    <footer className="relative bg-linear-to-r from-blue-950/95 via-blue-900/95 to-blue-950/95 text-white py-6 border-t-2 border-amber-500/20 overflow-hidden">
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
          <FooterNav />

          <p className="text-slate-300 text-xs text-center font-medium self-end">
            © {new Date().getFullYear()}{" "}
            LR Mourão. Todos os direitos reservados.<br />
            Produzido por{" "}
            <a
              href="http://prock.dev/"
              className="text-orange-400! hover:text-orange-300! font-bold transition-colors duration-300"
              style={{ color: "#fb923c" }}
            >
              Pedro Roque
            </a>{" "}
            com o apoio de{" "}
            <a
              href="http://tiago.vardas.ca/"
              className="text-orange-400! hover:text-orange-300! font-bold transition-colors duration-300"
              style={{ color: "#fb923c" }}
            >
              Vardas
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
