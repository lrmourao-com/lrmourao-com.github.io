export interface EmailTranslations {
  title: string;
  greeting: string;
  message_received: string;
  will_touch: string;
  button_text: string;
  signature: string;
  team_name: string;
  copyright: string;
  // Admin notification translations
  admin_reply_subject: string;
}

export const emailTranslations: Record<string, EmailTranslations> = {
  en: {
    title: "We have received your message",
    greeting: "Dear {{ name }},",
    message_received: "Thank you for contacting LR Mourão. We acknowledge receipt of your message and appreciate your interest in our services.",
    will_touch: "Our team is reviewing your inquiry and will respond within the next 24 hours.",
    button_text: "Visit our Website",
    signature: "Sincerely,",
    team_name: "LR Mourão Team",
    copyright: "LR Mourão. All rights reserved.",
    // Admin notification
    admin_reply_subject: "Re: Contact Form Submission",
  },
  pt: {
    title: "Recebemos a sua mensagem",
    greeting: "Estimado(a) {{ name }},",
    message_received: "Agradecemos o seu contacto com a LR Mourão. Confirmamos a receção da sua mensagem e o seu interesse nos nossos serviços.",
    will_touch: "A nossa equipa está a analisar o seu pedido e responderemos num prazo de 24 horas.",
    button_text: "Visite o nosso Website",
    signature: "Atentamente,",
    team_name: "Equipa LR Mourão",
    copyright: "LR Mourão. Todos os direitos reservados.",
    // Admin notification
    admin_reply_subject: "Re: Submissão do Formulário de Contacto",
  },
  es: {
    title: "Hemos recibido su mensaje",
    greeting: "Estimado(a) {{ name }},",
    message_received: "Gracias por contactar con LR Mourão. Confirmamos la recepción de su mensaje y agradecemos su interés en nuestros servicios.",
    will_touch: "Nuestro equipo está revisando su consulta y le responderemos en un plazo de 24 horas.",
    button_text: "Visite nuestro sitio web",
    signature: "Atentamente,",
    team_name: "Equipo LR Mourão",
    copyright: "LR Mourão. Todos los derechos reservados.",
    // Admin notification
    admin_reply_subject: "Re: Envío del Formulario de Contacto",
  },
  fr: {
    title: "Nous avons bien reçu votre message",
    greeting: "Cher/Chère {{ name }},",
    message_received: "Merci d'avoir contacté LR Mourão. Nous accusons réception de votre message et vous remercions de l'intérêt porté à nos services.",
    will_touch: "Notre équipe étudie votre demande et vous répondra dans les 24 heures.",
    button_text: "Visitez notre site web",
    signature: "Cordialement,",
    team_name: "L'équipe LR Mourão",
    copyright: "LR Mourão. Tous droits réservés.",
    // Admin notification
    admin_reply_subject: "Re: Soumission du Formulaire de Contact",
  },
  de: {
    title: "Wir haben Ihre Nachricht erhalten",
    greeting: "Sehr geehrte(r) {{ name }},",
    message_received: "Vielen Dank für Ihre Kontaktaufnahme mit LR Mourão. Wir bestätigen den Eingang Ihrer Nachricht und danken Ihnen für Ihr Interesse an unseren Dienstleistungen.",
    will_touch: "Unser Team prüft Ihre Anfrage und wird sich innerhalb von 24 Stunden bei Ihnen melden.",
    button_text: "Besuchen Sie unsere Website",
    signature: "Mit freundlichen Grüßen,",
    team_name: "LR Mourão Team",
    copyright: "LR Mourão. Alle Rechte vorbehalten.",
    // Admin notification
    admin_reply_subject: "Re: Kontaktformular Einreichung",
  },
};

export const getEmailTranslations = (locale: string = 'en'): EmailTranslations => {
  // Fallback to 'en' if locale is not found
  // Also handle regional locales like 'pt-BR' by taking the first part
  const lang = locale.split('-')[0].toLowerCase();
  return emailTranslations[lang] || emailTranslations['en'];
};

