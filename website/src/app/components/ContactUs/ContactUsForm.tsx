"use client";

import { Loader2, CheckCircle, Send, Mail } from "lucide-react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="relative opacity-0 animate-fade-in-up animation-delay-300">
      <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl blur opacity-20 animate-pulse-slow" />

      <div className="relative bg-white/90 backdrop-blur-xl border-2 border-blue-200/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-blue-500/10">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900" style={{ marginBottom: '2px' }}>
            Envie-nos uma mensagem
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 border-blue-100 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 border-blue-100 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm sm:text-base"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">
              Telefone
            </label>
            <div className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 border-blue-100 rounded-lg text-slate-900 placeholder-slate-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <PhoneInput
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                defaultCountry="pt"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 text-sm font-medium mb-2">
              Mensagem
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-white border-2 border-blue-100 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-sm sm:text-base"
              placeholder="Como podemos ajudar?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {isSubmitting
              ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                  A enviar...
                </>
              )
              : submitStatus === "success"
              ? (
                <>
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Enviado com sucesso!
                </>
              )
              : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Enviar Mensagem
                </>
              )}
          </button>

          {submitStatus === "error" && (
            <p className="text-red-500 text-center text-sm sm:text-base">
              Erro ao enviar mensagem. Tente novamente.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
