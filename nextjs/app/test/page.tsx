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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/351916672566", "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-slate-900"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-white">LR Mourão</h1>
              <p className="text-xs md:text-sm text-orange-400">soldamos o futuro | welding the future</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("main")}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Vantagens
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Contactos
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <button
                onClick={() => scrollToSection("main")}
                className="block w-full text-left py-2 text-white hover:text-orange-400 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-white hover:text-orange-400 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className="block w-full text-left py-2 text-white hover:text-orange-400 transition-colors"
              >
                Vantagens
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 text-white hover:text-orange-400 transition-colors"
              >
                Contactos
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="main" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/industrial-welding-sparks-and-metal-fabrication-in.jpg"
            alt="Welding"
            className="w-full h-full object-cover opacity-15"
          />
          {/* Accent overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content - Main Message */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 text-sm font-semibold">Desde 2010</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
                Excelência em <span className="text-orange-400">formacao e cordenacao de soldadura</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed text-pretty">
                Soluções completas em formação, certificação e coordenação de soldadura para a indústria moderna.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10 pb-10 border-b border-slate-700">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-1">14+</div>
                  <div className="text-sm text-slate-400">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-1">5</div>
                  <div className="text-sm text-slate-400">Áreas Especializadas</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-1">100%</div>
                  <div className="text-sm text-slate-400">Certificado</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("services")}
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20"
                >
                  Explore os Serviços
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800 hover:border-orange-400"
                >
                  Entre em Contacto
                </Button>
              </div>
            </div>

            {/* Right Content - Service Areas */}
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>

              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white">Áreas de Especialização</h3>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Formação Profissional", icon: GraduationCap },
                    { name: "Coordenação de Soldadura", icon: Users },
                    { name: "Consultadoria Técnica", icon: Target },
                    { name: "Certificação", icon: Award },
                    { name: "Inspeção e Controlo", icon: Shield },
                  ].map((item, index) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-4 bg-slate-900/50 hover:bg-slate-900 border border-slate-700/50 hover:border-orange-500/50 rounded-xl p-4 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-orange-500/10 group-hover:bg-orange-500/20 p-3 rounded-lg transition-colors">
                        <item.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <span className="text-slate-200 group-hover:text-white font-medium transition-colors">
                        {item.name}
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certification badges */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-3">Certificações e Normas:</p>
                  <div className="flex flex-wrap gap-2">
                    {["EN 1090", "ISO 3834", "EN ISO 9606", "ASME IX", "AWS D1.1"].map((cert) => (
                      <span
                        key={cert}
                        className="text-xs bg-slate-900/80 border border-slate-700 text-slate-300 px-3 py-1 rounded-full"
                      >
                        {cert}
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
              <div className="w-1 h-2 bg-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative overflow-hidden !bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">O Que Fazemos</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Serviços <span className="text-orange-400">Especializados</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Soluções completas e certificadas para todas as suas necessidades em soldadura e coordenação industrial
            </p>
          </div>

          {/* Services Mosaic Grid */}
          <div className="max-w-7xl mx-auto">
            {/* Grid Layout - Bento Box Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Formação - Takes 2 columns on large screens */}
              <Card className="group relative bg-gradient-to-br from-white via-green-50 to-emerald-50 border border-slate-200 hover:border-green-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden lg:col-span-2">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <CardContent className="p-6 relative h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Formação Profissional</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Formamos mão-de-obra profissionalizada que suprime as necessidades do mercado nacional e internacional.
                    Cursos dinâmicos, à medida e uma formação de excelência.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-white mb-2">Processos:</p>
                      <ul className="space-y-1 text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">MIG/MAG/FF 114/131/135/136/138</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">TIG 141/142</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">SER/MMA 111</span>
                        </li>
                      </ul>

                      <p className="font-bold text-white mb-2 mt-3">Nas ligas:</p>
                      <ul className="space-y-1 text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">Aço-carbono, Aço-inox, Alumínio, Cobre, etc.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-bold text-white mb-2">Curso/Formações:</p>
                      <ul className="space-y-1.5 text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">Horários flexíveis e personalizados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">Formação à medida</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">Formação individual disponível</span>
                        </li>
                      </ul>

                      <p className="font-bold text-white mb-2 mt-3">Certificação:</p>
                      <ul className="space-y-1 text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">EN ISO 9606, ASME IX, AWS D1.1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Coordenação */}
              <Card className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
                <CardContent className="p-6 relative h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Coordenação</h3>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 flex-1">
                    Especialista em coordenação conforme EN 1090 e ISO 3834.
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Certificação empresarial EN 1090/ISO 3834</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">RQPS e EPS's de procedimentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Cedência de soldadores certificados</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Consultadoria - Spans 2 rows */}
              <Card className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden lg:row-span-2">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
                <CardContent className="p-6 relative h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Consultadoria</h3>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Aconselhamento para evolução empresarial em todas as áreas técnicas e normativas.
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Normas ISO 3834 e EN 1090</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Aquisição de equipamentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Esquematização de processos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Planeamento laboral e estruturas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Técnicas e processos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Inspeção visual de soldadura</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Contratação de soldadores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Certificação de soldadores</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Certificação */}
              <Card className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 overflow-hidden lg:col-span-2">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
                <CardContent className="p-6 relative h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Certificação</h3>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Apoio completo na obtenção e manutenção de certificações essenciais.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">Certificação empresas EN 1090 e ISO 3834</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">Certificação soldadores EN ISO 9606, ASME IX, AWS D1.1</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">Processo completo: preparação até auditoria</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">Renovação e manutenção de certificações</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs">Preparação de documentação técnica</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Inspeção e Controlo */}
              <Card className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
                <CardContent className="p-6 relative h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-red-500 to-rose-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Inspeção e Controlo</h3>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4 flex-1">
                    Garantia de qualidade através de inspeções rigorosas e controlo de processos.
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Inspeção visual EN ISO 17637 e ISO 5817</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Controlo dimensional e conformidade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Supervisão em obra e fábrica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Relatórios técnicos detalhados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Implementação de planos de controlo de qualidade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs">Verificação WPQR</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-32 !bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">Porquê Escolher-nos</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vantagens dos <span className="text-orange-400">Nossos Serviços</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Mais de 14 anos de experiência no setor da Formação, Certificação e Coordenação em soldadura
            </p>
          </div>

          {/* Advantages Cards Grid */}
          <div className="max-w-6xl mx-auto">
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-orange-50 via-white to-orange-50 backdrop-blur-sm border border-slate-200 shadow-md overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">14+</div>
                  <div className="text-sm text-slate-600">Anos de Experiência</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 via-white to-blue-50 backdrop-blur-sm border border-slate-200 shadow-md overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Certificado</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 via-white to-purple-50 backdrop-blur-sm border border-slate-200 shadow-md overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
                  <div className="text-sm text-slate-600">Normas Certificadas</div>
                </CardContent>
              </Card>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 - Normas */}
              <Card className="group relative bg-gradient-to-br from-orange-50 via-white to-orange-50 backdrop-blur-sm border border-slate-200 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-orange-500/10 transition-all"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Cumprimento Normativo</h3>
                      <p className="text-xs text-slate-600">Processos Certificados</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Cumprimento integral das normas{" "}
                    <span className="font-semibold text-slate-900">EN ISO 3834, EN 1090, EN ISO 9606 e EN ISO 15614</span>,
                    assegurando processos controlados e rastreáveis.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">EN ISO 3834</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">EN 1090</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">EN ISO 9606</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 - Especialistas */}
              <Card className="group relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 backdrop-blur-sm border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-xl shadow-lg">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Equipa Qualificada</h3>
                      <p className="text-xs text-slate-600">Especialistas Certificados</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Acompanhamento direto por{" "}
                    <span className="font-semibold text-slate-900">Especialista Europeu em Soldadura (EWF/IIW)</span> e{" "}
                    <span className="font-semibold text-slate-900">Inspetor de Soldadura EWF</span>, garantindo decisões técnicas fundamentadas.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">EWF/IIW</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">Inspetor EWF</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 - Experiência Prática */}
              <Card className="group relative bg-gradient-to-br from-green-50 via-white to-emerald-50 backdrop-blur-sm border border-slate-200 hover:border-green-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-green-500/10 transition-all"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Experiência Prática</h3>
                      <p className="text-xs text-slate-600">Conhecimento Aplicado</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Soldador certificado <span className="font-semibold text-slate-900">H-L045</span> nos três principais
                    processos — <span className="font-semibold text-slate-900">TIG, MIG/MAG e MMA</span> — com experiência prática que reforça a qualidade das soluções.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">TIG</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">MIG/MAG</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">MMA</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 4 - Eficiência */}
              <Card className="group relative bg-gradient-to-br from-purple-50 via-white to-pink-50 backdrop-blur-sm border border-slate-200 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-purple-500/10 transition-all"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Foco em Resultados</h3>
                      <p className="text-xs text-slate-600">Excelência Técnica</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Foco na <span className="font-semibold text-slate-900">eficiência, fiabilidade e redução de custos</span>,
                    sempre com elevado padrão técnico e profissional. Soluções otimizadas para o seu negócio.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span className="text-slate-700 text-sm">Padrão Técnico Elevado</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 !bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">Entre em Contacto</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vamos trabalhar <span className="text-orange-400">juntos</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Sempre que necessário não hesite em contactar a LR Mourão. Estamos prontos para responder às suas
              necessidades.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Location - First */}
            <Card className="group relative bg-gradient-to-br from-orange-50 via-white to-orange-50 backdrop-blur-sm border border-slate-200 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-orange-500/10 transition-all"></div>
              <CardContent className="p-8 relative">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Localização</h3>
                <p className="text-slate-700 font-semibold text-lg mb-2">Leiria, Portugal</p>
                <p className="text-slate-600 text-sm">Serviços em todo o país</p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="group relative bg-gradient-to-br from-green-50 via-white to-emerald-50 backdrop-blur-sm border border-slate-200 hover:border-green-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-green-500/10 transition-all"></div>
              <CardContent className="p-8 relative">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Telemóvel</h3>
                <a
                  href="tel:+351916672566"
                  className="text-slate-700 hover:text-green-600 transition-colors text-lg font-semibold block mb-2"
                >
                  (+351) 916 672 566
                </a>
                <p className="text-slate-600 text-sm">Seg - Sex: 9h - 18h</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 backdrop-blur-sm border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all"></div>
              <CardContent className="p-8 relative">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
                <a
                  href="mailto:geral@lrmourao.com"
                  className="text-slate-700 hover:text-blue-600 transition-colors font-semibold break-all block mb-2"
                >
                  geral@lrmourao.com
                </a>
                <p className="text-slate-600 text-sm">Resposta em 24h</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <nav className="flex flex-wrap justify-center gap-6">
              <button onClick={() => scrollToSection("main")} className="hover:text-orange-400 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection("services")} className="hover:text-orange-400 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection("advantages")} className="hover:text-orange-400 transition-colors">
                Vantagens
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-orange-400 transition-colors">
                Contactos
              </button>
            </nav>

            <p className="text-slate-400 text-sm text-center">
              Todos os direitos reservados 2025 LR Mourão. Produzido por{" "}
              <a href="http://tiago.vardas.ca/" className="text-orange-400 hover:text-orange-300">
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
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Fale connosco no WhatsApp
        </span>
      </button>
    </div>
  )
}
