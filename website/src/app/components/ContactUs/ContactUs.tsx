import ContactUsForm from "./ContactUsForm";
import ContactUsCards from "./ContactUsCards";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 bg-linear-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated background elements matching the site style */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiLz48L2c+PC9zdmc+')]" />
        <div className="absolute top-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 bg-blue-400/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 md:w-96 md:h-96 bg-indigo-400/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in-up">
          {/* Header - matching the site's header style */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 opacity-0 animate-fade-in-up animation-delay-200">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-8 md:mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-blue-600 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Entre em Contacto
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 px-4">
                  Vamos trabalhar <span className="text-blue-600">juntos</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                  Conte com a LR Mourão sempre que necessitar. Estamos aqui para
                  apoiar, responder e entregar soluções sem complicações.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <ContactUsForm />
            </div>

            <div className="order-1 lg:order-2">
              <ContactUsCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
