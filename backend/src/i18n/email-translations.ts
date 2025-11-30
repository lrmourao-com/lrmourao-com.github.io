export interface EmailTranslations {
  title: string;
  greeting: string;
  message_received: string;
  will_touch: string;
  button_text: string;
  signature: string;
  team_name: string;
  copyright: string;
}

export const emailTranslations: Record<string, EmailTranslations> = {
  en: {
    title: "We received your message",
    greeting: "Hello {{ name }},",
    message_received: "Thank you for contacting LR Mourão. We have received your message and appreciate your interest.",
    will_touch: "We will be in touch very soon regarding your inquiry.",
    button_text: "Visit our Website",
    signature: "Best regards,",
    team_name: "The LR Mourão Team",
    copyright: "LR Mourão. All rights reserved.",
  },
  pt: {
    title: "Recebemos a sua mensagem",
    greeting: "Olá {{ name }},",
    message_received: "Obrigado por contactar a LR Mourão. Recebemos a sua mensagem e agradecemos o seu interesse.",
    will_touch: "Entraremos em contacto muito em breve sobre o seu pedido.",
    button_text: "Visite o nosso Website",
    signature: "Com os melhores cumprimentos,",
    team_name: "A Equipa LR Mourão",
    copyright: "LR Mourão. Todos os direitos reservados.",
  },
  es: {
    title: "Hemos recibido su mensaje",
    greeting: "Hola {{ name }},",
    message_received: "Gracias por contactar a LR Mourão. Hemos recibido su mensaje y agradecemos su interés.",
    will_touch: "Nos pondremos en contacto muy pronto con respecto a su consulta.",
    button_text: "Visite nuestro sitio web",
    signature: "Saludos cordiales,",
    team_name: "El equipo de LR Mourão",
    copyright: "LR Mourão. Todos los derechos reservados.",
  },
  fr: {
    title: "Nous avons reçu votre message",
    greeting: "Bonjour {{ name }},",
    message_received: "Merci de contacter LR Mourão. Nous avons bien reçu votre message et vous remercions de l'intérêt que vous portez à nos services.",
    will_touch: "Nous vous contacterons très bientôt concernant votre demande.",
    button_text: "Visitez notre site web",
    signature: "Cordialement,",
    team_name: "L'équipe LR Mourão",
    copyright: "LR Mourão. Tous droits réservés.",
  },
  de: {
    title: "Wir haben Ihre Nachricht erhalten",
    greeting: "Hallo {{ name }},",
    message_received: "Vielen Dank für Ihre Kontaktaufnahme mit LR Mourão. Wir haben Ihre Nachricht erhalten und danken Ihnen für Ihr Interesse.",
    will_touch: "Wir werden uns in Kürze bezüglich Ihrer Anfrage bei Ihnen melden.",
    button_text: "Besuchen Sie unsere Website",
    signature: "Mit freundlichen Grüßen,",
    team_name: "Das LR Mourão Team",
    copyright: "LR Mourão. Alle Rechte vorbehalten.",
  },
};

export const getEmailTranslations = (locale: string = 'en'): EmailTranslations => {
  // Fallback to 'en' if locale is not found
  // Also handle regional locales like 'pt-BR' by taking the first part
  const lang = locale.split('-')[0].toLowerCase();
  return emailTranslations[lang] || emailTranslations['en'];
};

