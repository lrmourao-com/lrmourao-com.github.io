import type { TFunction } from "i18next";

export const getNavItems = (t: TFunction) => [
  { id: "main", label: t('nav.home') },
  { id: "services", label: t('nav.services') },
  { id: "advantages", label: t('nav.advantages') },
  { id: "contact", label: t('nav.contact') },
];

