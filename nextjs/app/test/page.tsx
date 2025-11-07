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

  const openWhatsApp = () =>
    window.open("https://wa.me/351916672566", "_blank")

  /* -------------- HEADER -------------- */
  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-slate-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                LR Mourão
              </h1>
              <p className="text-xs md:text-sm text-amber-500">
                soldamos o futuro | welding the future
              </p>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {["main", "services", "advantages", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-white hover:text-amber-400 transition-colors"
                >
                  {id === "main"
                    ? "Início"
                    : id === "services"
                    ? "Serviços"
                    : id === "advantages"
                    ? "Vantagens"
                    : "Contactos"}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile nav */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {["main", "services", "advantages", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left py-2 text-white hover:text-amber-400 transition-colors"
                >
                  {id === "main"
                    ? "Início"
                    : id === "services"
                    ? "Serviços"
                    : id === "advantages"
                    ? "Vantagens"
                    : "Contactos"}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* -------------- HERO -------------- */}
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
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-amber-400 text-sm font-semibold">
                  Desde 2010
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
                Excelência em{" "}
                <span className="text-amber-400">formação e coordenação de soldadura</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed text-pretty">
                Soluções completas em formação, certificação e coordenação de soldadura para a
                indústria moderna.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-white/20">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-1">14+</div>
                  <div className="text-sm text-slate-300">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-1">5</div>
                  <div className="text-sm text-slate-300">Áreas Especializadas</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-1">100%</div>
                  <div className="text-sm text-slate-300">Certificado</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("services")}
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                >
                  Explore os Serviços
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white"
                >
                  Entre em Contacto
                </Button>
              </div>
            </div>

            {/* Right Content – Service Areas */}
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-amber-500 rounded-full" />
                  <h3 className="text-2xl font-bold text-white">Áreas de Especialização</h3>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Formação Profissional", icon: GraduationCap },
                    { name: "Coordenação de Soldadura", icon: Users },
                    { name: "Consultadoria Técnica", icon: Target },
                    { name: "Certificação", icon: Award },
                    { name: "Inspeção e Controlo", icon: Shield },
                  ].map((item, i) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 rounded-xl p-4 transition-all cursor-pointer"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="bg-amber-500/10 group-hover:bg-amber-500/20 p-3 rounded-lg transition-colors">
                        <item.icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <span className="text-slate-200 group-hover:text-white font-medium">
                        {item.name}
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cert badges */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-slate-400 mb-3">Certificações e Normas:</p>
                  <div className="flex flex-wrap gap-2">
                    {["EN 1090", "ISO 3834", "EN ISO 9606", "ASME IX", "AWS D1.1"].map((c) => (
                      <span
                        key={c}
                        className="text-xs bg-white/10 border border-white/20 text-slate-300 px-3 py-1 rounded-full"
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-slate-400">Scroll</span>
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-amber-400 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* -------------- SERVICES -------------- */}
      <section
        id="services"
        className="py-32 bg-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                O Que Fazemos
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Serviços <span className="text-blue-600">Especializados</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Soluções completas e certificadas para todas as suas necessidades em soldadura e
              coordenação industrial
            </p>
          </div>

          {/* Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Formação */}
              <Card className="group relative bg-white border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden lg:col-span-2">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
                <CardContent className="p-6 relative h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Formação Profissional
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Formamos mão-de-obra profissionalizada que suprime as necessidades do mercado
                    nacional e internacional. Cursos dinâmicos, à medida e uma formação de
                    excelência.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-blue-900 mb-2">Processos:</p>
                      <ul className="space-y-1 text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>MIG/MAG/FF 114/131/135/136/138</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>TIG 141/142</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>SER/MMA 111</span>
                        </li>
                      </ul>

                      <p className="font-bold text-blue-900 mb-2 mt-3">Nas ligas:</p>
                      <ul className="space-y-1 text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Aço-carbono, Aço-inox, Alumínio, Cobre, etc.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-bold text-blue-900 mb-2">Curso/Formações:</p>
                      <ul className="space-y-1.5 text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Horários flexíveis e personalizados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Formação à medida</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Formação individual disponível</span>
                        </li>
                      </ul>

                      <p className="font-bold text-blue-900 mb-2 mt-3">Certificação:</p>
                      <ul className="space-y-1 text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>EN ISO 9606, ASME IX, AWS D1.1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Coordenação */}
              <Card className="group relative bg-white border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -mr-24 -mt-24" />
                <CardContent className="p-6 relative h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Coordenação</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    Especialista em coordenação conforme EN 1090 e ISO 3834.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Certificação empresarial EN 1090/ISO 3834</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>RQPS e EPS's de procedimentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Cedência de soldadores certificados</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Consultadoria – spans 2 rows */}
              <Card className="group relative bg-white border border-slate-200 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden lg:row-span-2">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl -mr-24 -mt-24" />
                <CardContent className="p-6 relative h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Consultadoria</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Aconselhamento para evolução empresarial em todas as áreas técnicas e normativas.
                  </p>
                  <ul className="space-y-2 text-slate-600">
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
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Certificação */}
              <Card className="group relative bg-white border border-slate-200 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden lg:col-span-2">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl -mr-24 -mt-24" />
                <CardContent className="p-6 relative h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Certificação</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Apoio completo na obtenção e manutenção de certificações essenciais.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Certificação empresas EN 1090 e ISO 3834</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Certificação soldadores EN ISO 9606, ASME IX, AWS D1.1</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Processo completo: preparação até auditoria</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Renovação e manutenção de certificações</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Preparação de documentação técnica</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Inspeção e Controlo */}
              <Card className="group relative bg-white border border-slate-200 hover:border-red-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl -mr-24 -mt-24" />
                <CardContent className="p-6 relative h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-red-500 to-rose-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Inspeção e Controlo</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    Garantia de qualidade através de inspeções rigorosas e controlo de processos.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    {[
                      "Inspeção visual EN ISO 17637 e ISO 5817",
                      "Controlo dimensional e conformidade",
                      "Supervisão em obra e fábrica",
                      "Relatórios técnicos detalhados",
                      "Implementação de planos de controlo de qualidade",
                      "Verificação WPQR",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- ADVANTAGES -------------- */}
      <section
        id="advantages"
        className="py-32 bg-gradient-to-br from-slate-50 via-blue-100/50 to-indigo-100/70 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                Porquê Escolher-nos
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Vantagens dos <span className="text-blue-600">Nossos Serviços</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mais de 14 anos de experiência no setor da Formação, Certificação e Coordenação em
              soldadura
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { num: "14+", label: "Anos de Experiência", color: "text-blue-600" },
                { num: "100%", label: "Certificado", color: "text-emerald-600" },
                { num: "5+", label: "Normas Certificadas", color: "text-purple-600" },
              ].map((s) => (
                <Card
                  key={s.label}
                  className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105"
                >
                  <CardContent className="p-6 text-center relative">
                    <div className={`text-4xl font-bold ${s.color} mb-2`}>{s.num}</div>
                    <div className="text-sm text-slate-600 font-medium">{s.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Cumprimento Normativo",
                  sub: "Processos Certificados",
                  icon: Shield,
                  color: "from-blue-500 to-blue-600",
                  text: "Cumprimento integral das normas EN ISO 3834, EN 1090, EN ISO 9606 e EN ISO 15614, assegurando processos controlados e rastreáveis.",
                  tags: ["EN ISO 3834", "EN 1090", "EN ISO 9606"],
                },
                {
                  title: "Equipa Qualificada",
                  sub: "Especialistas Certificados",
                  icon: Award,
                  color: "from-purple-500 to-purple-600",
                  text: "Acompanhamento direto por Especialista Europeu em Soldadura (EWF/IIW) e Inspetor de Soldadura EWF, garantindo decisões técnicas fundamentadas.",
                  tags: ["EWF/IIW", "Inspetor EWF"],
                },
                {
                  title: "Experiência Prática",
                  sub: "Conhecimento Aplicado",
                  icon: Users,
                  color: "from-emerald-500 to-emerald-600",
                  text: "Soldador certificado H-L045 nos três principais processos — TIG, MIG/MAG e MMA — com experiência prática que reforça a qualidade das soluções.",
                  tags: ["TIG", "MIG/MAG", "MMA"],
                },
                {
                  title: "Foco em Resultados",
                  sub: "Excelência Técnica",
                  icon: Target,
                  color: "from-amber-500 to-amber-600",
                  text: "Foco na eficiência, fiabilidade e redução de custos, sempre com elevado padrão técnico e profissional. Soluções otimizadas para o seu negócio.",
                  tags: [],
                },
              ].map((c) => (
                <Card
                  key={c.title}
                  className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${c.color} opacity-10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-15 transition-all group-hover:scale-150`}
                  />
                  <CardContent className="p-8 relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`bg-gradient-to-br ${c.color} p-3 rounded-xl shadow-md group-hover:shadow-lg transition-all group-hover:scale-110`}>
                        <c.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">{c.title}</h3>
                        <p className="text-xs text-slate-600 font-medium">{c.sub}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4 group-hover:text-slate-600 transition-colors">{c.text}</p>
                    {c.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-slate-100/80 text-slate-700 px-3 py-1 rounded-full text-xs font-medium border border-slate-200/50"
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
  
        {/* -------------- CONTACT -------------- */}
        <section
          id="contact"
          className="py-32 bg-slate-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          </div>
  
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                  Entre em Contacto
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Vamos trabalhar <span className="text-blue-600">juntos</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Sempre que necessário não hesite em contactar a LR Mourão. Estamos prontos para
                responder às suas necessidades.
              </p>
            </div>
  
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Localização",
                  value: "Leiria, Portugal",
                  sub: "Serviços em todo o país",
                  icon: MapPin,
                  grad: "from-amber-500 to-amber-600",
                  href: null,
                },
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
              ].map((c) => (
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
  
        {/* -------------- FOOTER -------------- */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <nav className="flex flex-wrap justify-center gap-6">
                {["main", "services", "advantages", "contact"].map((id) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    {id === "main"
                      ? "Início"
                      : id === "services"
                      ? "Serviços"
                      : id === "advantages"
                      ? "Vantagens"
                      : "Contactos"}
                  </button>
                ))}
              </nav>
  
              <p className="text-slate-400 text-sm text-center">
                Todos os direitos reservados 2025 LR Mourão. Produzido por{" "}
                <a
                  href="http://tiago.vardas.ca/"
                  className="text-amber-400 hover:text-amber-300"
                >
                  Vardas
                </a>
              </p>
            </div>
          </div>
        </footer>
  
        {/* WhatsApp */}
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