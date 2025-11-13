import {
  Award,
  GraduationCap,
  Mail,
  Phone,
  Shield,
  Target,
  Users,
} from "lucide-react";

export const ADVANTAGES = [
  {
    title: "Equipa Qualificada",
    sub: "Especialistas Certificados",
    icon: Award,
    color: "from-orange-500 to-rose-500",
    text:
      "Acompanhamento direto por Especialista Europeu em Soldadura (EWF/IIW) e Inspetor de Soldadura EWF, garantindo decisões técnicas fundamentadas.",
    tags: ["EWF/IIW", "Inspetor EWF"],
  },
  {
    title: "Experiência Prática",
    sub: "Conhecimento Aplicado",
    icon: Users,
    color: "from-rose-500 to-pink-500",
    text:
      "Soldador certificado H-L045 nos três principais processos (TIG, MIG/MAG e MMA) com experiência prática que reforça a qualidade das soluções.",
    tags: ["TIG", "MIG/MAG", "MMA"],
  },
  {
    title: "Foco em Resultados",
    sub: "Excelência Técnica",
    icon: Target,
    color: "from-amber-500 to-red-500",
    text:
      "Foco na eficiência, fiabilidade e redução de custos, sempre com elevado padrão técnico e profissional. Soluções otimizadas para o seu negócio.",
    tags: [],
  },
];

export const NAV_ITEMS = [
  { id: "main", label: "Início" },
  { id: "services", label: "Serviços" },
  { id: "advantages", label: "Vantagens" },
  { id: "contact", label: "Contactos" },
];

export const SPECIALIZATIONS = [
  {
    name: "Formação de Soldadura",
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
];

export const CERTIFICATIONS = [
  "EN 1090",
  "ISO 3834",
  "EN ISO 9606",
  "ASME IX",
  "AWS D1.1",
];

export const HERO_STATS = [
  {
    value: new Date().getFullYear() - 2010 + "+",
    label: "Anos de Experiência",
  },
  { value: "5", label: "Áreas Especializadas" },
  { value: "100%", label: "Certificado" },
];

export const CONTACT_INFO = [
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
];
