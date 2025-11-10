"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  Award,
  GraduationCap,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Shield,
  Target,
  MessageCircle,
} from "lucide-react"

const NAV_ITEMS = [
  { id: "main", label: "Início" },
  { id: "services", label: "Serviços" },
  { id: "advantages", label: "Vantagens" },
  { id: "contact", label: "Contactos" },
]

const SPECIALIZATIONS = [
  {
    name: "Formação Profissional",
    icon: GraduationCap,
    id: "service-formacao",
    grad: "from-blue-500 to-blue-600",
    hoverBorder: "hover:border-blue-500/60",
    dot: "bg-blue-400",
  },
  {
    name: "Coordenação de Soldadura",
    icon: Users,
    id: "service-coordenacao",
    grad: "from-emerald-500 to-green-600",
    hoverBorder: "hover:border-emerald-500/60",
    dot: "bg-emerald-400",
  },
  {
    name: "Consultadoria Técnica",
    icon: Target,
    id: "service-consultadoria",
    grad: "from-purple-500 to-pink-600",
    hoverBorder: "hover:border-purple-500/60",
    dot: "bg-purple-400",
  },
  {
    name: "Certificação",
    icon: Award,
    id: "service-certificacao",
    grad: "from-amber-500 to-orange-600",
    hoverBorder: "hover:border-amber-500/60",
    dot: "bg-amber-400",
  },
  {
    name: "Inspeção e Controlo",
    icon: Shield,
    id: "service-inspecao",
    grad: "from-red-500 to-rose-600",
    hoverBorder: "hover:border-red-500/60",
    dot: "bg-red-400",
  },
]

const CERTIFICATIONS = ["EN 1090", "ISO 3834", "EN ISO 9606", "ASME IX", "AWS D1.1"]

const HERO_STATS = [
  { value: "14+", label: "Anos de Experiência" },
  { value: "5", label: "Áreas Especializadas" },
  { value: "100%", label: "Certificado" },
]

const CONTACT_INFO = [
  {
    title: "Telemóvel",
    value: "(+351) 916 672 566",
    sub: "Seg - Sex: 9h - 18h",
    icon: Phone,
    grad: "from-green-500 to-emerald-600",
    href: "tel:+351916672566",
  },
  {
    title: "Email",
    value: "geral@lrmourao.com",
    sub: "Resposta em 24h",
    icon: Mail,
    grad: "from-blue-500 to-cyan-600",
    href: "mailto:geral@lrmourao.com",
  },
]

const ADVANTAGES = [
  {
    title: "Cumprimento Normativo",
    sub: "Processos Certificados",
    icon: Shield,
    color: "from-amber-500 to-orange-500",
    text: "Cumprimento integral das normas EN ISO 3834, EN 1090, EN ISO 9606 e EN ISO 15614, assegurando processos controlados e rastreáveis.",
    tags: ["EN ISO 3834", "EN 1090", "EN ISO 9606"],
  },
  {
    title: "Equipa Qualificada",
    sub: "Especialistas Certificados",
    icon: Award,
    color: "from-orange-500 to-rose-500",
    text: "Acompanhamento direto por Especialista Europeu em Soldadura (EWF/IIW) e Inspetor de Soldadura EWF, garantindo decisões técnicas fundamentadas.",
    tags: ["EWF/IIW", "Inspetor EWF"],
  },
  {
    title: "Experiência Prática",
    sub: "Conhecimento Aplicado",
    icon: Users,
    color: "from-rose-500 to-pink-500",
    text: "Soldador certificado H-L045 nos três principais processos — TIG, MIG/MAG e MMA — com experiência prática que reforça a qualidade das soluções.",
    tags: ["TIG", "MIG/MAG", "MMA"],
  },
  {
    title: "Foco em Resultados",
    sub: "Excelência Técnica",
    icon: Target,
    color: "from-amber-500 to-red-500",
    text: "Foco na eficiência, fiabilidade e redução de custos, sempre com elevado padrão técnico e profissional. Soluções otimizadas para o seu negócio.",
    tags: [],
  },
]

export default function LRMouraoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const openWhatsApp = () => window.open("https://wa.me/351916672566", "_blank")

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-gradient-to-r from-blue-950/95 via-blue-900/95 to-blue-950/95 backdrop-blur-md shadow-2xl shadow-amber-500/10 border-b border-amber-500/30" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-500/10 to-transparent" />
          </div>
          
          <div className="flex items-center justify-between h-20 relative z-10">
            <div className="flex items-center">
              <img 
                src="/lrmourao-logo.svg" 
                alt="LR Mourão - soldamos o futuro | welding the future" 
                className="h-12 md:h-14 lg:h-16 w-auto drop-shadow-lg"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-slate-200 hover:text-amber-400 transition-all duration-300 font-semibold hover:scale-105 relative group"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-amber-400 p-2 transition-all duration-300 hover:scale-105"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2 border-t border-white/10 pt-4">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left py-3 px-4 text-slate-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all duration-300 font-semibold"
                >
                  {label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section
        id="main"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/industrial-welding-sparks-and-metal-fabrication-in.jpg"
            alt="Welding"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border-2 border-amber-500/50 px-6 py-3 rounded-full mb-8 shadow-lg shadow-amber-500/20">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-amber-300 text-sm font-bold tracking-wider">Desde 2010</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-balance drop-shadow-2xl">
                <span className="text-slate-100">Excelência em</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">formação e coordenação de soldadura</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed text-pretty font-medium">
                Soluções completas em formação, certificação e coordenação de soldadura para a indústria moderna.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b-2 border-white/20">
                {HERO_STATS.map(({ value, label }, i) => (
                  <div 
                    key={label} 
                    className="text-center group cursor-pointer"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {value}
                    </div>
                    <div className="text-xs md:text-sm text-slate-300 font-semibold">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  onClick={() => scrollToSection("services")}
                  size="lg"
                  className="relative text-white text-lg md:text-xl px-8 py-7 rounded-md bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-[0_10px_30px_rgba(59,130,246,0.6)] hover:shadow-[0_14px_44px_rgba(99,102,241,0.75)] transition-all duration-300 hover:scale-110 ring-2 ring-blue-300/40 hover:ring-blue-400/60"
                >
                  Explore os Serviços
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  variant="outline"
                  className="relative bg-transparent text-sky-200 border-2 border-sky-400/60 py-7 rounded-md text-lg md:text-xl px-8  hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-blue-600 hover:to-sky-500 hover:border-sky-400 transition-all duration-300 hover:scale-110 shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.6)] ring-1 ring-sky-300/30 hover:ring-sky-400/50"
                >
                  Entre em Contacto
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-12 -right-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="relative bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-10 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full shadow-lg shadow-amber-500/50" />
                  <h3 className="text-2xl font-bold text-white">Áreas de Especialização</h3>
                </div>

                <div className="space-y-3">
                  {SPECIALIZATIONS.map((item, i) => (
                    <div
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      role="button"
                      className={`group flex items-center gap-4 bg-white/5 ${item.id === "service-formacao" ? "bg-white/10 border-blue-400/60 ring-2 ring-blue-300/30 scale-[1.01]" : ""} hover:bg-white/15 border border-white/10 ${item.hoverBorder} rounded-2xl p-5 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className={`bg-gradient-to-br ${item.grad} p-3 rounded-xl transition-all duration-300 shadow-lg ${item.id === "service-formacao" ? "scale-110 ring-2 ring-blue-300/40" : ""} group-hover:scale-110 group-hover:rotate-6`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`font-semibold text-base transition-colors ${item.id === "service-formacao" ? "text-white" : "text-slate-200 group-hover:text-white"}`}>{item.name}</span>
                      {item.id === "service-formacao" && (
                        <span className="ml-2 text-[10px] uppercase tracking-wide font-extrabold px-2 py-0.5 rounded-full bg-blue-600 text-white/95 shadow shadow-blue-500/40">
                          Popular
                        </span>
                      )}
                      <div className={`ml-auto transition-all duration-300 group-hover:scale-125 ${item.id === "service-formacao" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                        <div className={`w-2.5 h-2.5 ${item.dot} rounded-full shadow-lg`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t-2 border-white/20">
                  <p className="text-sm text-slate-300 mb-4 font-semibold">Certificações e Normas:</p>
                  <div className="flex flex-wrap gap-2">
                    {CERTIFICATIONS.map((c) => (
                      <span
                        key={c}
                        className="text-xs bg-gradient-to-r from-white/10 to-white/5 hover:from-amber-500/20 hover:to-orange-500/20 border-2 border-white/30 hover:border-amber-400/60 text-slate-200 hover:text-white px-4 py-2 rounded-full font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-slate-300 font-semibold">Scroll</span>
            <div className="w-6 h-10 border-2 border-amber-400/40 rounded-full flex items-start justify-center p-2 shadow-lg shadow-amber-500/20">
              <div className="w-1.5 h-3 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full shadow-lg shadow-amber-400/50" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-32 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiLz48L2c+PC9zdmc+')]" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border-2 border-blue-500/30 px-6 py-3 rounded-full mb-8 shadow-lg shadow-blue-500/10">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-700 text-sm font-bold tracking-wider uppercase">O Que Fazemos</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 drop-shadow-sm">
              Serviços <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">Especializados</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-medium">
              Soluções completas e certificadas para todas as suas necessidades em soldadura e coordenação industrial
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card id="service-formacao" className="group relative bg-white/90 backdrop-blur-sm border-2 border-blue-300/70 hover:border-blue-400/80 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden lg:col-span-2 scale-[1.01] hover:scale-[1.03] rounded-3xl ring-2 ring-blue-200/40">
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide rounded-full bg-blue-600 text-white shadow shadow-blue-500/40">
                    Popular
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-blue-400/20 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-blue-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <CardContent className="p-8 md:p-10 relative h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      Formação Profissional
                    </h3>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
                    Formamos mão-de-obra profissionalizada que suprime as necessidades do mercado nacional e internacional. Cursos dinâmicos, à medida e uma formação de excelência.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                      <p className="font-black text-blue-700 mb-3 text-sm uppercase tracking-wide">Processos:</p>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span className="font-medium">MIG/MAG/FF 114/131/135/136/138</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span className="font-medium">TIG 141/142</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span className="font-medium">SER/MMA 111</span>
                        </li>
                      </ul>

                      <p className="font-black text-blue-700 mb-3 mt-4 text-sm uppercase tracking-wide">Nas ligas:</p>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                          <span className="font-medium">Aço-carbono, Aço-inox, Alumínio, Cobre</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100">
                      <p className="font-black text-indigo-700 mb-3 text-sm uppercase tracking-wide">Curso/Formações:</p>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                          <span className="font-medium">Horários flexíveis e personalizados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                          <span className="font-medium">Formação à medida</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                          <span className="font-medium">Formação individual disponível</span>
                        </li>
                      </ul>

                      <p className="font-black text-indigo-700 mb-3 mt-4 text-sm uppercase tracking-wide">Certificação:</p>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                          <span className="font-medium">EN ISO 9606, ASME IX, AWS D1.1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="service-coordenacao" className="group relative bg-white/90 backdrop-blur-sm border-2 border-emerald-200/50 hover:border-emerald-400/70 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-emerald-400/20 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border-2 border-emerald-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <CardContent className="p-8 relative h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 group-hover:from-emerald-600 group-hover:to-green-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-green-700 group-hover:from-emerald-600 group-hover:to-green-600 transition-all duration-300">
                      Coordenação
                    </h3>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-6 flex-1 font-medium">
                    Especialista em coordenação conforme EN 1090 e ISO 3834.
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="font-medium">Certificação empresarial EN 1090/ISO 3834</span>
                    </li>
                    <li className="flex items-start gap-2 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="font-medium">RQPS e EPS's de procedimentos</span>
                    </li>
                    <li className="flex items-start gap-2 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="font-medium">Cedência de soldadores certificados</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card id="service-consultadoria" className="group relative bg-white/90 backdrop-blur-sm border-2 border-purple-200/50 hover:border-purple-400/70 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden lg:row-span-2 hover:scale-[1.02] rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-purple-400/20 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-purple-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <CardContent className="p-8 md:p-10 relative h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 group-hover:from-purple-600 group-hover:to-pink-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      Consultadoria
                    </h3>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
                    Aconselhamento para evolução empresarial em todas as áreas técnicas e normativas.
                  </p>
                  <ul className="space-y-2.5 text-slate-700">
                    {[
                      "Normas ISO 3834 e EN 1090",
                      "Aquisição de equipamentos",
                      "Esquematização de processos",
                      "Planeamento laboral e estruturas",
                      "Técnicas e processos",
                      "Inspeção visual de soldadura",
                      "Contratação de soldadores",
                      "Certificação de soldadores",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 bg-purple-50/50 p-2.5 rounded-xl border border-purple-100">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                        <span className="font-medium">{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card id="service-certificacao" className="group relative bg-white/90 backdrop-blur-sm border-2 border-amber-200/50 hover:border-amber-400/70 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden lg:col-span-2 hover:scale-[1.02] rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-amber-400/20 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-amber-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <CardContent className="p-8 md:p-10 relative h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 group-hover:from-amber-600 group-hover:to-orange-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-700 group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                      Certificação
                    </h3>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
                    Apoio completo na obtenção e manutenção de certificações essenciais.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="font-medium">Certificação empresas EN 1090 e ISO 3834</span>
                      </li>
                      <li className="flex items-start gap-2 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="font-medium">Certificação soldadores EN ISO 9606, ASME IX, AWS D1.1</span>
                      </li>
                      <li className="flex items-start gap-2 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="font-medium">Processo completo: preparação até auditoria</span>
                      </li>
                    </ul>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2 bg-orange-50/50 p-3 rounded-xl border border-orange-100">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                        <span className="font-medium">Renovação e manutenção de certificações</span>
                      </li>
                      <li className="flex items-start gap-2 bg-orange-50/50 p-3 rounded-xl border border-orange-100">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                        <span className="font-medium">Preparação de documentação técnica</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card id="service-inspecao" className="group relative bg-white/90 backdrop-blur-sm border-2 border-red-200/50 hover:border-red-400/70 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-rose-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-400/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-red-400/20 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border-2 border-red-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <CardContent className="p-8 relative h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-red-500 to-rose-600 group-hover:from-red-600 group-hover:to-rose-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-rose-700 group-hover:from-red-600 group-hover:to-rose-600 transition-all duration-300">
                      Inspeção e Controlo
                    </h3>
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-6 flex-1 font-medium">
                    Garantia de qualidade através de inspeções rigorosas e controlo de processos.
                  </p>
                  <ul className="space-y-2.5 text-slate-700">
                    {[
                      "Inspeção visual EN ISO 17637 e ISO 5817",
                      "Controlo dimensional e conformidade",
                      "Supervisão em obra e fábrica",
                      "Relatórios técnicos detalhados",
                      "Implementação de planos de controlo de qualidade",
                      "Verificação WPQR",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 bg-red-50/50 p-2.5 rounded-xl border border-red-100">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                        <span className="font-medium">{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        id="advantages"
        className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border-2 border-amber-500/50 px-6 py-3 rounded-full mb-8 shadow-lg shadow-amber-500/20">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-sm font-bold tracking-wider uppercase">Porquê Escolher-nos</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
              Vantagens dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-fuchsia-500 to-rose-500 bg-[length:200%_200%] drop-shadow-[0_0_18px_rgba(251,191,36,0.55)]">Nossos Serviços</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-medium">
              Mais de 14 anos de experiência no setor da Formação, Certificação e Coordenação em soldadura
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { num: "14+", label: "Anos de Experiência", color: "from-amber-500 to-orange-500", icon: "🏆" },
                { num: "100%", label: "Certificado", color: "from-orange-500 to-red-500", icon: "✓" },
                { num: "5+", label: "Normas Certificadas", color: "from-red-500 to-rose-500", icon: "⭐" },
              ].map((s, i) => (
                <Card
                  key={s.label}
                  className="group relative bg-gradient-to-br from-white to-amber-50 border-2 border-amber-300/50 shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 overflow-hidden hover:scale-110 hover:-translate-y-2"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="absolute top-2 right-2 text-8xl opacity-10 group-hover:opacity-20 transition-all transform group-hover:scale-105">{s.icon}</div>
                  <CardContent className="p-8 text-center relative">
                    <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      {s.num}
                    </div>
                    <div className="text-base text-slate-800 font-bold tracking-wide">{s.label}</div>
                    <div className={`h-1 w-16 mx-auto mt-4 bg-gradient-to-r ${s.color} rounded-full group-hover:w-full transition-all duration-500`} />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {ADVANTAGES.map((c, i) => (
                <Card
                  key={c.title}
                  className="group relative bg-white/95 backdrop-blur-sm border-2 border-amber-300/50 shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 overflow-hidden hover:scale-105"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-5 group-hover:opacity-15 transition-all duration-500`} />
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${c.color} opacity-10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:opacity-30 transition-all group-hover:scale-150 duration-700`} />
                  <div className="absolute top-2 right-2 w-24 h-24 border-2 border-amber-300/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  
                  <CardContent className="p-10 relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`bg-gradient-to-br ${c.color} p-4 rounded-2xl shadow-2xl group-hover:shadow-amber-500/50 transition-all group-hover:scale-110 group-hover:rotate-6 duration-500`}>
                        <c.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                          {c.title}
                        </h3>
                        <p className="text-sm text-amber-600 font-bold uppercase tracking-wider">{c.sub}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-base mb-6 group-hover:text-slate-900 transition-colors font-medium">
                      {c.text}
                    </p>
                    {c.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold border-2 border-amber-300 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">Entre em Contacto</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Vamos trabalhar <span className="text-blue-600">juntos</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sempre que necessário não hesite em contactar a LR Mourão. Estamos prontos para responder às suas necessidades.
            </p>
          </div>

          {/* Location Mini Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Localização Principal</h3>
                    <p className="text-amber-100 text-lg">Leiria, Portugal</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-lg">Serviços de Coordenação</h4>
                    <p className="text-slate-600 mb-4">Coordenação técnica e gestão de projetos em todo o território nacional, garantindo a excelência em cada detalhe.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-lg">Consultadoria Especializada</h4>
                    <p className="text-slate-600 mb-4">Consultoria técnica abrangente disponível em todas as regiões de Portugal, com foco em soluções personalizadas.</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-slate-700 font-medium">
                    📍 <span className="text-slate-900">Base em Leiria</span> • <span className="text-blue-600">Serviços em todo o país</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CONTACT_INFO.filter(c => c.title !== "Localização").map((c) => (
                <Card
                  key={c.title}
                  className="group relative bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${c.grad} opacity-5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-10 transition-all`}
                  />
                  <CardContent className="p-8 relative">
                    <div className={`bg-gradient-to-br ${c.grad} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <c.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{c.title}</h3>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-slate-700 hover:text-blue-600 transition-colors text-lg font-semibold block mb-2"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-slate-700 font-semibold text-lg mb-2">{c.value}</p>
                    )}
                    <p className="text-slate-600 text-sm">{c.sub}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <footer className="relative bg-gradient-to-r from-blue-950/95 via-blue-900/95 to-blue-950/95 text-white py-12 border-t-2 border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img 
                src="/lrmourao-logo.svg" 
                alt="LR Mourão - soldamos o futuro | welding the future" 
                className="h-10 md:h-12 lg:h-14 w-auto drop-shadow-lg"
              />
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-slate-200 hover:text-amber-400 transition-all duration-300 font-semibold hover:scale-110 relative group"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            <p className="text-slate-300 text-sm text-center font-medium">
              Todos os direitos reservados 2025 LR Mourão.<br />
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

      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Fale connosco no WhatsApp
        </span>
      </button>
      </div>
    )
  }