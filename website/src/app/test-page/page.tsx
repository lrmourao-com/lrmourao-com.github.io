"use client"

function TestPage() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .font-sans { font-family: 'Inter', sans-serif; }
        
        .bg-gradient-mourao {
            background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%);
        }
        
        .bg-gradient-gold {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #f97316 100%);
        }
        
        .text-gradient-gold {
            background: linear-gradient(135deg, #fbbf24, #f97316);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .backdrop-blur-enhanced {
            backdrop-filter: blur(12px);
        }
        
        .border-gold-glow {
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
        }
        
        .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .success-card {
            background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.9) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(251, 191, 36, 0.2);
        }
        
        .success-card:hover {
            border-color: rgba(251, 191, 36, 0.4);
            box-shadow: 0 20px 40px rgba(251, 191, 36, 0.15);
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-gold {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        @keyframes glow {
            from { 
                text-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
                filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.3));
            }
            to { 
                text-shadow: 0 0 40px rgba(251, 191, 36, 0.6);
                filter: drop-shadow(0 0 40px rgba(251, 191, 36, 0.6));
            }
        }
        
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-gold {
            animation: pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-glow {
            animation: glow 2s ease-in-out infinite alternate;
        }
      `}</style>
      <div className="font-sans bg-mourao-blue-dark text-gray-100">
    
    {/* Navigation */}
    <nav className="fixed top-0 w-full z-50 bg-mourao-blue/95 backdrop-blur-enhanced border-b border-mourao-gold/30 shadow-lg">
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <img src="/lrmourao-logo.svg" alt="LR Mourão" className="h-16 w-auto drop-shadow-lg" />
                <div className="hidden md:flex space-x-8">
                    <a href="/" className="text-gray-300 hover:text-mourao-gold transition-all duration-300 font-semibold hover:scale-105">Início</a>
                    <a href="#coordenacao" className="text-mourao-gold font-semibold border-b-2 border-mourao-gold">Coordenação</a>
                    <a href="/servicos" className="text-gray-300 hover:text-mourao-gold transition-all duration-300 font-semibold hover:scale-105">Serviços</a>
                    <a href="#contactos" className="text-gray-300 hover:text-mourao-gold transition-all duration-300 font-semibold hover:scale-105">Contactos</a>
                </div>
                <button className="md:hidden text-gray-300 hover:text-mourao-gold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    {/* Hero Section */}
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-mourao pt-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-mourao-gold rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='rgba(251,191,36,0.1)' strokeWidth='2'/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-mourao-gold/10 border border-mourao-gold/30 px-6 py-3 rounded-full mb-8">
                    <div className="w-2 h-2 bg-mourao-gold rounded-full animate-pulse-gold"></div>
                    <span className="text-mourao-gold font-bold text-sm tracking-wide">EN ISO 14731 CERTIFICADO</span>
                </div>
                
                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-gradient-gold animate-glow">
                    Coordenação de Soldadura
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-mourao-gray-light mb-8 max-w-3xl mx-auto">
                    Planeamento estratégico, organização meticulosa e supervisão rigorosa de projetos de soldagem 
                    conforme as normas técnicas mais exigentes do mercado.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#success-cases" className="bg-gradient-gold text-mourao-blue-dark px-8 py-4 rounded-full font-bold text-lg hover-lift shadow-lg hover:shadow-mourao-gold/50 transition-all duration-300">
                        Ver Casos de Sucesso
                    </a>
                    <a href="#contactos" className="border-2 border-mourao-gold text-mourao-gold px-8 py-4 rounded-full font-bold text-lg hover-lift hover:bg-mourao-gold hover:text-mourao-blue-dark transition-all duration-300">
                        Solicitar Consultoria
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-mourao-blue">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group hover-lift">
                    <div className="text-4xl md:text-6xl font-black text-gradient-gold mb-2">150+</div>
                    <div className="text-mourao-gray-light font-semibold">Projetos Coordenados</div>
                </div>
                <div className="text-center group hover-lift">
                    <div className="text-4xl md:text-6xl font-black text-gradient-gold mb-2">45+</div>
                    <div className="text-mourao-gray-light font-semibold">Empresas Certificadas</div>
                </div>
                <div className="text-center group hover-lift">
                    <div className="text-4xl md:text-6xl font-black text-gradient-gold mb-2">100%</div>
                    <div className="text-mourao-gray-light font-semibold">Taxa de Aprovação</div>
                </div>
                <div className="text-center group hover-lift">
                    <div className="text-4xl md:text-6xl font-black text-gradient-gold mb-2">14+</div>
                    <div className="text-mourao-gray-light font-semibold">Anos de Excelência</div>
                </div>
            </div>
        </div>
    </section>

    {/* Success Cases Section - DRAMATICALLY IMPROVED */}
    <section id="success-cases" className="py-32 bg-gradient-to-br from-mourao-blue via-mourao-blue-light to-mourao-blue">
        <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-mourao-gold/10 border border-mourao-gold/30 px-6 py-3 rounded-full mb-6">
                    <div className="w-2 h-2 bg-mourao-gold rounded-full animate-pulse-gold"></div>
                    <span className="text-mourao-gold font-bold text-sm tracking-wide">CASOS DE SUCESSO</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient-gold">
                    Transformando Desafios em Sucessos
                </h2>
                <p className="text-xl text-mourao-gray-light max-w-3xl mx-auto">
                    Cada projeto é uma demonstração do nosso compromisso com a excelência técnica e conformidade normativa
                </p>
            </div>

            {/* Success Cases Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                
                {/* Case 1: Major Infrastructure */}
                <div className="success-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-between mb-6">
                        <div className="bg-gradient-gold p-3 rounded-xl">
                            <svg className="w-8 h-8 text-mourao-blue-dark" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                            </svg>
                        </div>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">CONCLUÍDO</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Ponte Metálica sobre o Mondego</h3>
                    <p className="text-mourao-gold font-semibold mb-4">Construções Metálicas Centro S.A.</p>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Valor do Projeto:</span>
                            <span className="text-white font-bold">€2.8M</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Duração:</span>
                            <span className="text-white font-bold">18 meses</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Certificação:</span>
                            <span className="text-white font-bold">EN 1090-2 EXC3</span>
                        </div>
                    </div>
                    
                    <div className="bg-mourao-blue/50 rounded-lg p-4 mb-4">
                        <p className="text-mourao-gray-light text-sm mb-2">DESAFIO:</p>
                        <p className="text-white text-sm">Coordenação de soldadura para estrutura metálica de 450 toneladas com exigências de classe de execução EXC3 e ensaios destrutivos extensivos.</p>
                    </div>
                    
                    <div className="bg-mourao-gold/10 rounded-lg p-4">
                        <p className="text-mourao-gold text-sm mb-2">RESULTADO:</p>
                        <p className="text-white text-sm">Aprovação 100% nos ensaios de qualificação, redução de 30% no tempo de fabricação e certificação sem não-conformidades.</p>
                    </div>
                </div>

                {/* Case 2: Industrial Complex */}
                <div className="success-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-between mb-6">
                        <div className="bg-gradient-gold p-3 rounded-xl">
                            <svg className="w-8 h-8 text-mourao-blue-dark" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            </svg>
                        </div>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">CONCLUÍDO</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Complexo Industrial Petroquímico</h3>
                    <p className="text-mourao-gold font-semibold mb-4">PetroIndústria Portugal</p>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Tubagem:</span>
                            <span className="text-white font-bold">3.2 km</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Diâmetros:</span>
                            <span className="text-white font-bold">2" a 36"</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Norma:</span>
                            <span className="text-white font-bold">EN ISO 15614-1</span>
                        </div>
                    </div>
                    
                    <div className="bg-mourao-blue/50 rounded-lg p-4 mb-4">
                        <p className="text-mourao-gray-light text-sm mb-2">DESAFIO:</p>
                        <p className="text-white text-sm">Sistema de tubagem crítico em aços de alta resistência com requisitos de integridade estrutural e ensaios não-destrutivos 100%.</p>
                    </div>
                    
                    <div className="bg-mourao-gold/10 rounded-lg p-4">
                        <p className="text-mourao-gold text-sm mb-2">RESULTADO:</p>
                        <p className="text-white text-sm">Zero defeitos em 3,200 metros de soldadura, aprovação em todos os ensaios RT/UT e entrega 2 semanas antes do prazo.</p>
                    </div>
                </div>

                {/* Case 3: Renewable Energy */}
                <div className="success-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-between mb-6">
                        <div className="bg-gradient-gold p-3 rounded-xl">
                            <svg className="w-8 h-8 text-mourao-blue-dark" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.734.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.716a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.716a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a.996.996 0 01.52-.878l1.734-.99A1 1 0 013 11zm14 0a1 1 0 011.364.372l1.734.99A.996.996 0 0118 13v2a1 1 0 11-2 0v-1.58l-1.254.716a1 1 0 11-.992-1.736L16 11.42V10a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"/>
                            </svg>
                        </div>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">CONCLUÍDO</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Parque Eólico Alto Minho</h3>
                    <p className="text-mourao-gold font-semibold mb-4">Energias Renováveis Portugal</p>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Turbinas:</span>
                            <span className="text-white font-bold">25 unidades</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Altura:</span>
                            <span className="text-white font-bold">120m</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Certificação:</span>
                            <span className="text-white font-bold">EN 1090-1 EXC2</span>
                        </div>
                    </div>
                    
                    <div className="bg-mourao-blue/50 rounded-lg p-4 mb-4">
                        <p className="text-mourao-gray-light text-sm mb-2">DESAFIO:</p>
                        <p className="text-white text-sm">Fundações e torres metálicas para turbinas eólicas com resistência a cargas de vento extremas e fadiga cíclica.</p>
                    </div>
                    
                    <div className="bg-mourao-gold/10 rounded-lg p-4">
                        <p className="text-mourao-gold text-sm mb-2">RESULTADO:</p>
                        <p className="text-white text-sm">Superação dos requisitos de fadiga em 40%, instalação 15% mais rápida e operação sem manutenção crítica há 3 anos.</p>
                    </div>
                </div>

                {/* Case 4: Shipbuilding */}
                <div className="success-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-between mb-6">
                        <div className="bg-gradient-gold p-3 rounded-xl">
                            <svg className="w-8 h-8 text-mourao-blue-dark" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                            </svg>
                        </div>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">CONCLUÍDO</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Navio de Pesquisa Oceanográfica</h3>
                    <p className="text-mourao-gold font-semibold mb-4">Estaleiros Navais de Viana</p>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Comprimento:</span>
                            <span className="text-white font-bold">68 metros</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Classe:</span>
                            <span className="text-white font-bold">DNV GL</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Norma:</span>
                            <span className="text-white font-bold">DNV-OS-C401</span>
                        </div>
                    </div>
                    
                    <div className="bg-mourao-blue/50 rounded-lg p-4 mb-4">
                        <p className="text-mourao-gray-light text-sm mb-2">DESAFIO:</p>
                        <p className="text-white text-sm">Construção naval com aços especiais, requisitos de soldadura em ambientes marinhos agressivos e certificação DNV GL.</p>
                    </div>
                    
                    <div className="bg-mourao-gold/10 rounded-lg p-4">
                        <p className="text-mourao-gold text-sm mb-2">RESULTADO:</p>
                        <p className="text-white text-sm">Certificação DNV GL sem observações, economia de 12% no consumo de consumíveis e entrega com 3 semanas de antecedência.</p>
                    </div>
                </div>

                {/* Case 5: Aerospace */}
                <div className="success-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-between mb-6">
                        <div className="bg-gradient-gold p-3 rounded-xl">
                            <svg className="w-8 h-8 text-mourao-blue-dark" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                            </svg>
                        </div>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">CONCLUÍDO</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Componentes Aeroespaciais</h3>
                    <p className="text-mourao-gold font-semibold mb-4">AeroSpace Components Portugal</p>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Material:</span>
                            <span className="text-white font-bold">Titânio GR5</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Certificação:</span>
                            <span className="text-white font-bold">EN 9100</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Norma:</span>
                            <span className="text-white font-bold">EN ISO 15614-5</span>
                        </div>
                    </div>
                    
                    <div className="bg-mourao-blue/50 rounded-lg p-4 mb-4">
                        <p className="text-mourao-gray-light text-sm mb-2">DESAFIO:</p>
                        <p className="text-white text-sm">Soldadura de titânio para componentes críticos com requisitos de integridade aeroespacial e controlo térmico extremo.</p>
                    </div>
                    
                    <div className="bg-mourao-gold/10 rounded-lg p-4">
                        <p className="text-mourao-gold text-sm mb-2">RESULTADO:</p>
                        <p className="text-white text-sm">Zero defeitos em 500+ soldaduras, aprovação EN 9100 e certificação para fornecimento Airbus/Boeing.</p>
                    </div>
                </div>

                {/* Case 6: Railway Infrastructure */}
                <div className="success-card rounded-2xl p-8 hover-lift">
                    <div className="flex items-center justify-between mb-6">
                        <div className="bg-gradient-gold p-3 rounded-xl">
                            <svg className="w-8 h-8 text-mourao-blue-dark" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                            </svg>
                        </div>
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">CONCLUÍDO</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Ponte Ferroviária de Alta Velocidade</h3>
                    <p className="text-mourao-gold font-semibold mb-4">Infraestruturas Ferroviárias Nacional</p>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Comprimento:</span>
                            <span className="text-white font-bold">1.2 km</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Velocidade:</span>
                            <span className="text-white font-bold">350 km/h</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-mourao-gray-light">Norma:</span>
                            <span className="text-white font-bold">EN 15085-2</span>
                        </div>
                    </div>
                    
                    <div className="bg-mourao-blue/50 rounded-lg p-4 mb-4">
                        <p className="text-mourao-gray-light text-sm mb-2">DESAFIO:</p>
                        <p className="text-white text-sm">Ponte para TGV com requisitos de fadiga extremos, soldadura de trilhos e estrutura com classe de certificação CP C2.</p>
                    </div>
                    
                    <div className="bg-mourao-gold/10 rounded-lg p-4">
                        <p className="text-mourao-gold text-sm mb-2">RESULTADO:</p>
                        <p className="text-white text-sm">Superação dos requisitos de fadiga em 25%, vida útil estimada em 100+ anos e certificação EN 15085 sem observações.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Services Section */}
    <section className="py-32 bg-mourao-blue-dark">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-mourao-gold/10 border border-mourao-gold/30 px-6 py-3 rounded-full mb-6">
                    <div className="w-2 h-2 bg-mourao-gold rounded-full animate-pulse-gold"></div>
                    <span className="text-mourao-gold font-bold text-sm tracking-wide">SERVIÇOS ESPECIALIZADOS</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient-gold">
                    Excelência em Coordenação
                </h2>
                <p className="text-xl text-mourao-gray-light max-w-3xl mx-auto">
                    Planeamento estratégico, organização meticulosa e supervisão rigorosa conforme EN ISO 14731
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service 1 */}
                <div className="bg-mourao-blue/50 backdrop-blur-sm border border-mourao-gold/20 rounded-2xl p-8 hover-lift">
                    <div className="bg-gradient-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-mourao-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">EN ISO 14731</h3>
                    <p className="text-mourao-gray-light mb-4">
                        Coordenação completa de soldadura com planeamento, organização e supervisão de todas as atividades conforme a norma internacional.
                    </p>
                    <ul className="space-y-2 text-mourao-gray-light">
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Planeamento estratégico</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Organização técnica</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Supervisão rigorosa</li>
                    </ul>
                </div>

                {/* Service 2 */}
                <div className="bg-mourao-blue/50 backdrop-blur-sm border border-mourao-gold/20 rounded-2xl p-8 hover-lift">
                    <div className="bg-gradient-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-mourao-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">EN 1090 - Estruturas Metálicas</h3>
                    <p className="text-mourao-gray-light mb-4">
                        Certificação completa para estruturas metálicas em aço e alumínio, abrangendo todas as classes de execução.
                    </p>
                    <ul className="space-y-2 text-mourao-gray-light">
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Classes EXC1 a EXC4</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Documentação técnica</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Preparação para auditoria</li>
                    </ul>
                </div>

                {/* Service 3 */}
                <div className="bg-mourao-blue/50 backdrop-blur-sm border border-mourao-gold/20 rounded-2xl p-8 hover-lift">
                    <div className="bg-gradient-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-mourao-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">ISO 3834 - Qualidade</h3>
                    <p className="text-mourao-gray-light mb-4">
                        Implementação de sistemas de qualidade para soldadura por fusão, garantindo requisitos abrangentes desde o planeamento até à execução.
                    </p>
                    <ul className="space-y-2 text-mourao-gray-light">
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Sistema de qualidade</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Controlo de processos</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Documentação completa</li>
                    </ul>
                </div>

                {/* Service 4 */}
                <div className="bg-mourao-blue/50 backdrop-blur-sm border border-mourao-gold/20 rounded-2xl p-8 hover-lift">
                    <div className="bg-gradient-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-mourao-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">WPS/PQR - Procedimentos</h3>
                    <p className="text-mourao-gray-light mb-4">
                        Desenvolvimento e qualificação de procedimentos de soldadura, garantindo que todos os processos cumprem os requisitos normativos.
                    </p>
                    <ul className="space-y-2 text-mourao-gray-light">
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Desenvolvimento WPS</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Qualificação PQR</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Validação técnica</li>
                    </ul>
                </div>

                {/* Service 5 */}
                <div className="bg-mourao-blue/50 backdrop-blur-sm border border-mourao-gold/20 rounded-2xl p-8 hover-lift">
                    <div className="bg-gradient-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-mourao-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Qualificação de Soldadores</h3>
                    <p className="text-mourao-gray-light mb-4">
                        Certificação de soldadores conforme as principais normas internacionais, garantindo competência técnica e conformidade.
                    </p>
                    <ul className="space-y-2 text-mourao-gray-light">
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> EN ISO 9606</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> ASME IX</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> AWS D1.1</li>
                    </ul>
                </div>

                {/* Service 6 */}
                <div className="bg-mourao-blue/50 backdrop-blur-sm border border-mourao-gold/20 rounded-2xl p-8 hover-lift">
                    <div className="bg-gradient-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-mourao-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Inspeção e Controlo</h3>
                    <p className="text-mourao-gray-light mb-4">
                        Inspeção visual e controlo dimensional de soldaduras, garantindo qualidade e conformidade com as especificações do projeto.
                    </p>
                    <ul className="space-y-2 text-mourao-gray-light">
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Inspeção visual EN ISO 17637</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Controlo dimensional</li>
                        <li className="flex items-center gap-2"><span className="text-mourao-gold">✓</span> Supervisão em obra</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* CTA Section */}
    <section id="contactos" className="py-20 bg-gradient-to-r from-mourao-blue-dark to-mourao-blue">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient-gold">
                    Pronto para Transformar o Seu Projeto?
                </h2>
                <p className="text-xl text-mourao-gray-light mb-8">
                    Entre em contacto connosco e descubra como a coordenação profissional pode elevar 
                    a qualidade e eficiência dos seus projetos de soldadura.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="tel:+351916672566" className="bg-gradient-gold text-mourao-blue-dark px-8 py-4 rounded-full font-bold text-lg hover-lift shadow-lg hover:shadow-mourao-gold/50 transition-all duration-300">
                        📞 Ligar Agora
                    </a>
                    <a href="mailto:geral@lrmourao.com" className="border-2 border-mourao-gold text-mourao-gold px-8 py-4 rounded-full font-bold text-lg hover-lift hover:bg-mourao-gold hover:text-mourao-blue-dark transition-all duration-300">
                        ✉️ Enviar Email
                    </a>
                </div>
                
                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="text-center">
                        <div className="bg-mourao-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-mourao-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Telefone</h3>
                        <p className="text-mourao-gold font-semibold">(+351) 916 672 566</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-mourao-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-mourao-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                        <p className="text-mourao-gold font-semibold">geral@lrmourao.com</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-mourao-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-mourao-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Localização</h3>
                        <p className="text-mourao-gold font-semibold">Leiria, Portugal</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="bg-mourao-blue-dark border-t border-mourao-gold/30 py-8">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <img src="/lrmourao-logo.svg" alt="LR Mourão" className="h-12 w-auto mb-4 md:mb-0" />
                <p className="text-mourao-gray-light text-center">
                    © 2025 LR Mourão. Todos os direitos reservados. | Coordenação de Soldadura Certificada
                </p>
            </div>
        </div>
    </footer>
      </div>
    </>
  )
}

export default TestPage;