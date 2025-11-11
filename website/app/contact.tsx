"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const glowVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.2, 0.3, 0.2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function ContactSection() {
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
    <section className="relative py-32 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated background elements matching the site style */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiLz48L2c+PC9zdmc+')]" />
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header - matching the site's header style */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                    Entre em Contacto
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                  Vamos trabalhar <span className="text-blue-600">juntos</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Sempre que necessário não hesite em contactar a LR Mourão.
                  Estamos prontos para responder às suas necessidades.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form - matching the site's card style */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"
                variants={glowVariants}
                animate="animate"
              />

              <div className="relative bg-white/90 backdrop-blur-xl border-2 border-blue-200/50 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-slate-900">
                    Envie-nos uma mensagem
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-white border-2 border-blue-100 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
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
                        className="w-full px-4 py-3 bg-white border-2 border-blue-100 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-2 border-blue-100 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="+351 XXX XXX XXX"
                    />
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
                      className="w-full px-4 py-3 bg-white border-2 border-blue-100 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting
                      ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          A enviar...
                        </>
                      )
                      : submitStatus === "success"
                      ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Enviado com sucesso!
                        </>
                      )
                      : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Mensagem
                        </>
                      )}
                  </motion.button>

                  {submitStatus === "error" && (
                    <p className="text-red-500 text-center">
                      Erro ao enviar mensagem. Tente novamente.
                    </p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info & CTA - matching the site's card style */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Fale connosco
                </h2>

                {/* Contact Cards - matching the site's design */}
                <div className="space-y-6">
                  {/* WhatsApp CTA - matching the site's style */}
                  <motion.div
                    className="bg-gradient-to-br from-green-100/80 to-emerald-100/80 backdrop-blur-xl border-2 border-green-300/30 rounded-xl p-6"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">
                          WhatsApp Rápido
                        </h4>
                        <p className="text-slate-600 text-sm">
                          Resposta instantânea durante o horário comercial
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  {/* Phone Card */}
                  <motion.div
                    className="group relative bg-white/90 backdrop-blur-sm border-2 border-green-200/50 hover:border-green-400/70 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-xl"
                    whileHover={{ scale: 1.02, borderColor: "#10B981" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />

                    <div className="relative p-6 flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          Telefone
                        </h3>
                        <a
                          href="tel:+351916672566"
                          className="text-slate-700 hover:text-green-600 transition-colors text-lg font-semibold"
                        >
                          (+351) 916 672 566
                        </a>
                        <p className="text-slate-600 text-sm mt-1">
                          Seg - Sex: 9h - 18h
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Email Card */}
                  <motion.div
                    className="group relative bg-white/90 backdrop-blur-sm border-2 border-blue-200/50 hover:border-blue-400/70 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-xl"
                    whileHover={{ scale: 1.02, borderColor: "#3B82F6" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />

                    <div className="relative p-6 flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:geral@lrmourao.com"
                          className="text-slate-700 hover:text-blue-600 transition-colors text-lg font-semibold"
                        >
                          geral@lrmourao.com
                        </a>
                        <p className="text-slate-600 text-sm mt-1">
                          Resposta em até 24 horas
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* CTA Section - matching the site's style */}
              <motion.div
                className="bg-gradient-to-br from-blue-100/80 to-indigo-100/80 backdrop-blur-xl border-2 border-blue-300/30 rounded-xl p-8"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Por que nos escolher?
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2" />
                    <span>Resposta rápida e personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2" />
                    <span>Equipa experiente e qualificada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2" />
                    <span>Soluções sob medida para o seu negócio</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
