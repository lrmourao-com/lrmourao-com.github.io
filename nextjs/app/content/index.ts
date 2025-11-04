import { pt } from './pt';
import { en } from './en';

export type Language = 'pt' | 'en';

export interface Content {
  welcome: {
    title: string;
    intro: string;
    services: string[];
    cta: string;
  };
  services: {
    title: string;
    welding: {
      title: string;
      items: string[];
      materials: string[];
    };
    coordination: {
      title: string;
      intro: string;
      items: string[];
    };
    training: {
      title: string;
      intro: string;
      processes: string[];
      materialsLabel: string;
      materials: string[];
      aboutLabel: string;
      about: string[];
      certificationLabel: string;
      certificationText: string;
      certifications: string[];
    };
    consultancy: {
      title: string;
      intro: string;
      items: string[];
    };
  };
  advantages: {
    title: string;
    intro: string;
    qualityControl: {
      title: string;
      items: string[];
    };
    professionalism: {
      title: string;
      items: string[];
    };
  };
  contact: {
    title: string;
    intro: string;
    phone: string;
  };
  nav: {
    home: string;
    services: string;
    advantages: string;
    contact: string;
  };
  backToTop: string;
}

export const content: Record<Language, Content> = {
  pt,
  en,
};

