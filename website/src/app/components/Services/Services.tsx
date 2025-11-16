"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  CheckCircle2,
  GraduationCap,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { FormacaoCard } from "./Cards/Formacao";
import { Consultadoria } from "./Cards/Consultadoria";
import { CoordenacaoCard } from "./Cards/Coordenacao";
import { InspecaoCard } from "./Cards/Inspecao";

// Reusable Tailwind class tokens for lists
const ulBase = "text-slate-700 text-sm md:text-base";
const liBase = "flex items-start gap-1.5 pl-4";

export function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-linear-to-br from-blue-50 via-slate-50 to-indigo-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiLz48L2c+PC9zdmc+')]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 border-2 border-blue-500/30 px-6 py-3 rounded-full mb-8 shadow-lg shadow-blue-500/10">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-700 text-sm font-bold tracking-wider uppercase">
              O Que Fazemos
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 drop-shadow-sm">
            Serviços{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600">
              Especializados
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-medium">
            Soluções completas e certificadas para todas as suas necessidades em
            soldadura e coordenação industrial
          </p>
        </div>

        {/* Mosaic Container */}
        <div className="flex flex-col sm:flex-row gap-8 max-w-7xl mx-auto w-full my-8">
          {/* Column 1 */}
          <div className="flex flex-col flex-1 gap-8">
            {/* Item 1 */}
            {/* <div className="flex-1 flex items-center bg-white p-4 border border-gray-300 rounded"> */}
            <Card
              id="service-formacao"
              className="flex-1 flex group relative pb-0 bg-white/90 backdrop-blur-sm border-2 border-blue-300/70 hover:border-blue-400/80 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 scale-[1.01] hover:scale-[1.03] rounded-3xl ring-2 ring-blue-200/40"
            >
             <FormacaoCard liBase={liBase} ulBase={ulBase} />
            </Card>
            {/* </div> */}

            {/* Item 2 */}
            <Card
              id="service-consultadoria"
              className="flex-1 flex group py-0 relative bg-white/90 backdrop-blur-sm border-2 border-purple-200/50 hover:border-purple-400/70 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] rounded-3xl"
            >
              <Consultadoria liBase={liBase} ulBase={ulBase} />
            </Card>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col flex-1 gap-8">
            {/* Item 1 */}
            <Card
              id="service-coordenacao"
              className="flex-1 flex group relative py-0 bg-white/90 backdrop-blur-sm border-2 border-emerald-200/50 hover:border-emerald-400/70 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-[1.02] rounded-3xl"
            >
              <CoordenacaoCard liBase={liBase} ulBase={ulBase} />
            </Card>

            {/* Item 2 */}
            <Card
              id="service-inspecao"
              className="flex-1 flex group relative py-0 bg-white/90 backdrop-blur-sm border-2 border-red-200/50 hover:border-red-400/70 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-[1.02] rounded-3xl"
            >
              <InspecaoCard liBase={liBase} ulBase={ulBase} />
            </Card>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
  

          <Card
            id="service-certificacao"
            className="group relative pb-0 bg-white/90 backdrop-blur-sm border-2 border-amber-200/50 hover:border-amber-400/70 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-3xl mt-8"
          >
            <div className="absolute inset-0 bg-linear-to-br from-amber-50 to-orange-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-amber-400/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-amber-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <CardContent className="p-6 md:p-10 relative h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-linear-to-br from-amber-500 to-orange-600 group-hover:from-amber-600 group-hover:to-orange-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-700 to-orange-700 group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                  Certificação
                </h3>
              </div>
              <p className="text-slate-700 text-base leading-relaxed mb-3! font-medium flex-1">
                Apoio completo na obtenção e manutenção de certificações
                essenciais.
              </p>
              <ul className={cn("grid md:grid-cols-2 gap-6 mt-auto mb-0!", ulBase)}>
                {[
                  "Certificação empresas EN 1090, EN ISO 9606, ISO 3834 e EN 15614",
                  "Certificação soldadores EN ISO 9606, ASME IX, AWS D1.1",
                  "Processo completo: preparação até auditoria",
                  "Renovação e manutenção de certificações",
                  "Preparação de documentação técnica",
                ].map((t) => (
                  <li key={t} className={liBase}>
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}



// {
//   /* <div className="flex flex-col md:flex-row gap-8 md:items-start">
//   <div
//     ref={leftColumnRef}
//     className="flex flex-col gap-8 flex-1"
//     style={{
//       height: columnHeight ? `${columnHeight}px` : "auto",
//     }}
//   >
//     <Card
//       id="service-formacao"
//       className="group relative pb-0 bg-white/90 backdrop-blur-sm border-2 border-blue-300/70 hover:border-blue-400/80 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden scale-[1.01] hover:scale-[1.03] rounded-3xl ring-2 ring-blue-200/40 flex-[3]"
//     >
//       <div className="absolute top-4 right-4 z-10">
//         <span className="px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide rounded-full bg-blue-600 text-white shadow shadow-blue-500/40">
//           Popular
//         </span>
//       </div>
//       <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-indigo-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
//       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-blue-400/20 transition-all duration-700" />
//       <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-blue-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
//       <CardContent className="p-6 md:p-10 relative h-full flex flex-col">
//         <div className="flex items-center gap-4 mb-6">
//           <div className="bg-linear-to-br from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
//             <GraduationCap className="w-7 h-7 text-white" />
//           </div>
//           <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-indigo-700 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
//             Formação de Soldadura
//           </h3>
//         </div>
//         <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
//           Formamos mão-de-obra profissionalizada que suprime as
//           necessidades do mercado nacional e internacional. Cursos
//           dinâmicos, à medida e uma formação de excelência.
//         </p>

//         <div className="grid xl:grid-cols-2 gap-6">
//           <div className="bg-blue-50/50 p-3 md:p-4 rounded-2xl border border-blue-100">
//             <p className="font-black text-blue-700 mb-3 text-sm uppercase tracking-wide">
//               Processos:
//             </p>
//             <ul className={cn("space-y-2", ulBase)}>
//               {[
//                 "MIG/MAG/FF 114/131/135/136/138",
//                 "TIG 141/142",
//                 "SER/MMA 111",
//               ].map((t) => (
//                 <li className={liBase}>
//                   <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
//                   <span className="text-sm md:text-base font-medium">
//                     {t}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             <p className="font-black text-blue-700 mb-3 mt-4 text-sm uppercase tracking-wide">
//               Nas ligas:
//             </p>
//             <ul className={cn("space-y-2", ulBase)}>
//               <li className={liBase}>
//                 <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
//                 <span className="text-sm md:text-base font-medium">
//                   Aço-carbono, Aço-inox, Alumínio, Cobre
//                 </span>
//               </li>
//             </ul>
//           </div>

//           <div className="bg-indigo-50/50 p-3 md:p-4 rounded-2xl border border-indigo-100">
//             <p className="font-black text-indigo-700 mb-3 text-sm uppercase tracking-wide">
//               Curso/Formações:
//             </p>
//             <ul className={cn("space-y-2", ulBase)}>
//               {[
//                 "Horários flexíveis e personalizados",
//                 "Formação à medida",
//                 "Formação individual disponível",
//               ].map((t) => (
//                 <li className={liBase} key={t}>
//                   <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
//                   <span className="text-sm md:text-base font-medium">
//                     {t}
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             <p className="font-black text-indigo-700 mb-3 mt-4 text-sm uppercase tracking-wide">
//               Certificação:
//             </p>
//             <ul className={cn("space-y-2", ulBase)}>
//               <li className={liBase}>
//                 <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
//                 <span className="text-sm md:text-base font-medium">
//                   EN ISO 9606, ASME IX, AWS D1.1
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </CardContent>
//     </Card>

//     <Card
//       id="service-consultadoria"
//       className="group relative bg-white/90 backdrop-blur-sm border-2 border-purple-200/50 hover:border-purple-400/70 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-3xl flex-[2]"
//     >
//       <div className="absolute inset-0 bg-linear-to-br from-purple-50 to-pink-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
//       <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-purple-400/20 transition-all duration-700" />
//       <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-purple-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
//       <CardContent className="p-6 md:p-10 relative h-full flex flex-col">
//         <div className="flex items-center gap-4 mb-6">
//           <div className="bg-linear-to-br from-purple-500 to-pink-600 group-hover:from-purple-600 group-hover:to-pink-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
//             <Target className="w-7 h-7 text-white" />
//           </div>
//           <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-pink-700 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
//             Consultadoria
//           </h3>
//         </div>
//         <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
//           Aconselhamento para evolução empresarial em todas as áreas
//           técnicas e normativas.
//         </p>
//         <ul className={cn("space-y-2.5", ulBase)}>
//           {[
//             "Normas ISO 3834 e EN 1090",
//             "Aquisição de equipamentos",
//             "Esquematização de processos",
//             "Planeamento laboral e estruturas",
//             "Técnicas e processos",
//             "Inspeção visual de soldadura",
//             "Contratação de soldadores",
//             "Certificação de soldadores",
//           ].map((t) => (
//             <li
//               key={t}
//               className={cn(
//                 "bg-purple-50/50 p-2.5",
//                 "rounded-xl border",
//                 "border-purple-100",
//                 liBase,
//               )}
//             >
//               <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
//               <span className="font-medium">{t}</span>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   </div>

//   <div
//     ref={rightColumnRef}
//     className="flex flex-col gap-8 flex-1"
//     style={{
//       height: columnHeight ? `${columnHeight}px` : "auto",
//     }}
//   >
//     <Card
//       id="service-coordenacao"
//       className="group relative pt-0 pb-5 bg-white/90 backdrop-blur-sm border-2 border-emerald-200/50 hover:border-emerald-400/70 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-3xl flex-[2]"
//     >
//       <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-green-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
//       <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-emerald-400/20 transition-all duration-700" />
//       <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-emerald-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
//       <CardContent className="p-6 md:p-10 md:pb-5 relative h-full flex flex-col">
//         <div className="flex items-center gap-4 mb-6">
//           <div className="bg-linear-to-br from-emerald-500 to-green-600 group-hover:from-emerald-600 group-hover:to-green-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
//             <Users className="w-7 h-7 text-white" />
//           </div>
//           <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-700 to-green-700 group-hover:from-emerald-600 group-hover:to-green-600 transition-all duration-300">
//             Coordenação
//           </h3>
//         </div>
//         <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
//           Especialista em coordenação conforme EN 1090 e ISO 3834.
//         </p>

//         <div className="flex flex-col gap-6">
//           <div className="bg-emerald-50/50 p-3 md:p-4 md:pb-0 rounded-2xl border border-emerald-100">
//             <p className="font-black text-emerald-700 mb-3 text-sm uppercase tracking-wide">
//               Certificação empresarial
//             </p>
//             <ul className={cn("space-y-2 mb-3!", ulBase)}>
//               {[
//                 "EN ISO 3834",
//                 "EN ISO 9606",
//                 "EN 1090",
//                 "EN 15614",
//               ].map((t) => (
//                 <li key={t} className={liBase}>
//                   <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
//                   <span className="font-medium">{t}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="bg-emerald-50/50 p-3 md:p-4 md:pb-0 rounded-2xl border border-emerald-100">
//             <p className="font-black text-emerald-700 mb-3 text-sm uppercase tracking-wide">
//               Responsabilidades Técnicas
//             </p>
//             <ul className={cn("space-y-2 mb-3!", ulBase)}>
//               {[
//                 "Realização de RQPS e EPS's",
//                 "Selecionar e/ou aprovar processos de soldadura adequados ao material e aplicação (TIG, MAG, MMA, etc.).",
//                 "Validar e controlar WPS (Especificações de Procedimentos de Soldadura).",
//                 "Definir e supervisionar a qualificação de procedimentos (WPQR) e de soldadores/operadores.",
//                 "Escolher materiais de base e de adição (ver EN ISO 15608, 2560, 14341, etc.).",
//                 "Determinar gases de proteção, polaridades, posições de soldadura, parâmetros elétricos e tratamentos térmicos.",
//                 "Aprovar planos de inspeção e ensaio (ITP).",
//               ].map((t) => (
//                 <li key={t} className={liBase}>
//                   <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
//                   <span className="font-medium">{t}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </CardContent>
//     </Card>

//     <Card
//       id="service-inspecao"
//       className="group relative py-0 bg-white/90 backdrop-blur-sm border-2 border-red-200/50 hover:border-red-400/70 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-3xl flex-[3]"
//     >
//       <div className="absolute inset-0 bg-linear-to-br from-red-50 to-rose-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
//       <div className="absolute top-0 right-0 w-64 h-64 bg-red-400/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-red-400/20 transition-all duration-700" />
//       <div className="absolute bottom-0 left-0 w-48 h-48 border-2 border-red-200/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
//       <CardContent className="p-6 md:p-10 md:pb-5 relative h-full flex flex-col">
//         <div className="flex items-center gap-4 mb-6">
//           <div className="bg-linear-to-br from-red-500 to-rose-600 group-hover:from-red-600 group-hover:to-rose-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
//             <Shield className="w-7 h-7 text-white" />
//           </div>
//           <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-red-700 to-rose-700 group-hover:from-red-600 group-hover:to-rose-600 transition-all duration-300">
//             Inspeção e Controlo
//           </h3>
//         </div>
//         <p className="text-slate-700 text-base leading-relaxed mb-6 flex-1 font-medium">
//           Garantia de qualidade através de inspeções rigorosas e
//           controlo de processos.
//         </p>
//         <ul className={cn("space-y-2.5", ulBase)}>
//           {[
//             "Inspeção visual EN ISO 17637 e ISO 5817",
//             "Controlo dimensional e conformidade",
//             "Supervisão em obra e fábrica",
//             "Relatórios técnicos detalhados",
//             "Implementação de planos de controlo de qualidade",
//             "Verificação WPQR e EPS's",
//           ].map((t) => (
//             <li
//               key={t}
//               className={cn(
//                 "bg-red-50/50 p-2.5",
//                 "rounded-xl border",
//                 "border-red-100",
//                 liBase,
//               )}
//             >
//               <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
//               <span className="font-medium">{t}</span>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   </div>
// </div> */
// }