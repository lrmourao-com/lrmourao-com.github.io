"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/use-translation";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  className?: string;
}

export const WhatsAppButton = ({
  phoneNumber = "351916672566",
  className = ""
}: WhatsAppButtonProps) => {
  const { t } = useTranslation();
  const [showWhatsAppMessage, setShowWhatsAppMessage] = useState(false);

  // Reusable WhatsApp message content
  const WhatsAppMessage = ({
    iconSize = 20,
    withSpeechBubble = false,
    arrowColor = "#20BA5A"
  }: {
    iconSize?: number;
    withSpeechBubble?: boolean;
    arrowColor?: string;
  }) => {
    const content = (
      <>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">{t('whatsapp.message')}</span>
        </div>
      </>
    );

    if (withSpeechBubble) {
      return (
        <div className="relative bg-linear-to-r from-[#25D366] to-[#20BA5A] text-white px-6 py-3 rounded-xl shadow-2xl shadow-green-500/40 min-w-[200px]">
          {content}
          {/* Speech bubble arrow pointing right */}
          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent"
            style={{ borderLeftColor: arrowColor }}
          ></div>
        </div>
      );
    }

    return content;
  };

  useEffect(() => {
    // Show message after 5 seconds
    const showTimer = setTimeout(() => {
      setShowWhatsAppMessage(true);
    }, 5000);

    // Hide message after another 10 seconds (15 seconds total)
    const hideTimer = setTimeout(() => {
      setShowWhatsAppMessage(false);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const openWhatsApp = () =>
    window.open(`https://wa.me/${phoneNumber}`, "_blank");

  return (
    <button
      onClick={openWhatsApp}
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group ${className}`}
      aria-label={t('whatsapp.ariaLabel')}
    >
      <Image src="/images/whatsapp.svg" alt="WhatsApp" width={40} height={40} />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      <span className={`absolute right-full mr-3 transition-opacity pointer-events-none ${showWhatsAppMessage ? 'opacity-100 animate-bounce' : 'opacity-0 group-hover:opacity-100'
        }`}>
        <WhatsAppMessage iconSize={16} withSpeechBubble={true} />
      </span>
    </button>
  );
};
