import {
  Award,
  GraduationCap,
  Mail,
  Phone,
  Shield,
  Target,
  Users,
} from "lucide-react";
import type { TFunction } from "i18next";

export const getAdvantages = (t: TFunction) => {
  // Helper to get tags array safely
  const getTags = (baseKey: string) => {
    const tags: string[] = [];
    let i = 0;
    while (true) {
      const tag = t(`${baseKey}.${i}`, { defaultValue: '' });
      if (!tag) break;
      tags.push(tag);
      i++;
    }
    return tags;
  };

  return [
    {
      title: t('advantages.list.0.title'),
      sub: t('advantages.list.0.sub'),
      icon: Award,
      color: "from-orange-500 to-rose-500",
      text: t('advantages.list.0.text'),
      tags: getTags('advantages.list.0.tags'),
    },
    {
      title: t('advantages.list.1.title'),
      sub: t('advantages.list.1.sub'),
      icon: Users,
      color: "from-rose-500 to-pink-500",
      text: t('advantages.list.1.text'),
      tags: getTags('advantages.list.1.tags'),
    },
    {
      title: t('advantages.list.2.title'),
      sub: t('advantages.list.2.sub'),
      icon: Target,
      color: "from-amber-500 to-red-500",
      text: t('advantages.list.2.text'),
      tags: getTags('advantages.list.2.tags'),
    },
  ];
};

export const getNavItems = (t: TFunction) => [
  { id: "main", label: t('nav.home') },
  { id: "services", label: t('nav.services') },
  { id: "advantages", label: t('nav.advantages') },
  { id: "contact", label: t('nav.contact') },
];

export const getSpecializations = (t: TFunction) => [
  {
    name: t('specializations.formacao'),
    icon: GraduationCap,
    id: "service-formacao",
    grad: "from-blue-500 to-blue-600",
    hoverBorder: "hover:border-blue-500/60",
    dot: "bg-blue-400",
  },
  {
    name: t('specializations.coordenacao'),
    icon: Users,
    id: "service-coordenacao",
    grad: "from-emerald-500 to-green-600",
    hoverBorder: "hover:border-emerald-500/60",
    dot: "bg-emerald-400",
  },
  {
    name: t('specializations.consultadoria'),
    icon: Target,
    id: "service-consultadoria",
    grad: "from-purple-500 to-pink-600",
    hoverBorder: "hover:border-purple-500/60",
    dot: "bg-purple-400",
  },
  {
    name: t('specializations.inspecao'),
    icon: Shield,
    id: "service-inspecao",
    grad: "from-red-500 to-rose-600",
    hoverBorder: "hover:border-red-500/60",
    dot: "bg-red-400",
  },
  {
    name: t('specializations.certificacao'),
    icon: Award,
    id: "service-certificacao",
    grad: "from-amber-500 to-orange-600",
    hoverBorder: "hover:border-amber-500/60",
    dot: "bg-amber-400",
  },
];

export const CERTIFICATIONS = [
  "EN 1090",
  "ISO 3834",
  "EN ISO 9606",
  "ASME IX",
  "AWS D1.1",
];

export const getHeroStats = (t: TFunction) => [
  {
    value: new Date().getFullYear() - 2010 + "+",
    label: t('hero.stats.experience'),
  },
  { value: "5", label: t('hero.stats.specializations') },
  { value: "100%", label: t('hero.stats.certified') },
];

export const getContactInfo = (t: TFunction) => [
  {
    title: t('contact.info.phone.title'),
    value: t('contact.info.phone.value'),
    sub: t('contact.info.phone.sub'),
    icon: Phone,
    grad: "from-green-500 to-emerald-600",
    href: "tel:+351916672566",
  },
  {
    title: t('contact.info.email.title'),
    value: t('contact.info.email.value'),
    sub: t('contact.info.email.sub'),
    icon: Mail,
    grad: "from-blue-500 to-cyan-600",
    href: "mailto:geral@lrmourao.com",
  },
];
