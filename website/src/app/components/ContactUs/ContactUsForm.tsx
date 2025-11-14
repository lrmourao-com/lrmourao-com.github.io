import { motion, Variants } from "framer-motion";
import { Sparkles, Loader2, CheckCircle, Send, Mail } from "lucide-react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

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
    <motion.div variants={itemVariants} className="relative">
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"
        variants={glowVariants}
        animate="animate"
      />

      <div className="relative bg-white/90 backdrop-blur-xl border-2 border-blue-200/50 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
        <div className="flex items-center gap-3 mb-8">
          <Mail className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-slate-900" style={{ marginBottom: '2px' }}>
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
            <div className="w-full px-4 py-3 bg-white border-2 border-blue-100 rounded-lg text-slate-900 placeholder-slate-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
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
  );
}

export default ContactUsForm;
