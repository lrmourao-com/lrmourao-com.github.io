"use client";
import { Clock, Mail, Phone, Sparkles, Copy, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ContactUsCards() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("geral@lrmourao.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const openEmailClient = () => {
    window.location.href = "mailto:geral@lrmourao.com";
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Fale connosco
        </h2>

        {/* Contact Cards - redesigned layout */}
        <div className="space-y-4">
          {/* WhatsApp Card - redesigned */}
          <div className="group relative bg-white/90 backdrop-blur-sm border-2 border-emerald-500 hover:border-emerald-400/70 hover:scale-[1.02] shadow-lg transition-all duration-300 ease-out rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 transition-opacity" />

            <a
              href="https://wa.me/351916672566"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 block"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Image
                      src="/images/whatsapp.svg"
                      alt="WhatsApp"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      WhatsApp
                    </h3>
                    <p className="text-slate-700 text-xl font-bold">
                      (+351) 916 672 566
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center self-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-emerald-400/20 shadow-sm backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />

                    <span className="text-emerald-700 font-semibold">
                      Resposta Instantânea
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Phone Card - redesigned */}
          <div className="group relative bg-white/90 backdrop-blur-sm border-2 border-cyan-200/50 hover:border-cyan-400/70 hover:scale-[1.02] shadow-lg transition-all duration-300 ease-out rounded-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none" />

            <div className="relative p-6">
              <a
                href="tel:+351916672566"
                className="flex items-start justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Telefone
                    </h3>
                    <p className="text-slate-700 hover:text-cyan-600 transition-colors text-xl font-bold tracking-tight">
                      (+351) 916 672 566
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center self-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-cyan-400/20 shadow-sm backdrop-blur-sm">
                    <Clock className="w-3.5 h-3.5 text-cyan-600" />
                    Seg – Sex
                    <span className="mx-1.5 text-slate-300">•</span>
                    <span className="text-cyan-700 font-semibold">
                      9h – 18h
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Email Card - click to open, icon to copy */}
          <button
            onClick={openEmailClient}
            className="group relative isolate bg-white/90 backdrop-blur-sm border-2 border-indigo-200/50 hover:border-indigo-400/70 hover:scale-[1.02] shadow-lg transition-all duration-300 ease-out rounded-2xl w-full text-left cursor-pointer transform-gpu backface-hidden"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl -z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            </div>

            <div className="relative p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-slate-900">
                      Email
                    </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-slate-700 text-lg font-semibold truncate">
                        geral@lrmourao.com
                      </p>
                      <button
                        onClick={copyEmail}
                        className={`shrink-0 p-1 rounded-md transition-all duration-200 active:scale-95 ${
                          emailCopied
                            ? "bg-emerald-500 text-white"
                            : "hover:bg-indigo-100 text-indigo-600 hover:text-indigo-900"
                        }`}
                        title={emailCopied ? "Copiado!" : "Copiar email"}
                      >
                        {emailCopied ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-center shrink-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-indigo-400/20 shadow-sm backdrop-blur-sm">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Resposta
                    <span className="mx-1.5 text-slate-300">•</span>
                    <span className="text-blue-700 font-semibold">24h</span>
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUsCards;
