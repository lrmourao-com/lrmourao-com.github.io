import { motion, Variants } from "framer-motion";
import { Clock, Mail, Phone, Sparkles } from "lucide-react";
import Image from "next/image";

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

function ContactUsCards() {
  return (
    <motion.div variants={itemVariants} className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Fale connosco
        </h2>

        {/* Contact Cards - redesigned layout */}
        <div className="space-y-4">
          {/* WhatsApp Card - redesigned */}
          <motion.div
            className="group relative bg-white/90 backdrop-blur-sm border-2 border-emerald-500 hover:border-emerald-400/70 shadow-lg transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-2xl"
            whileHover={{ scale: 1.02, borderColor: "#059669" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
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
          </motion.div>

          {/* Phone Card - redesigned */}
          <motion.div
            className="group relative bg-white/90 backdrop-blur-sm border-2 border-cyan-200/50 hover:border-cyan-400/70 shadow-lg transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-2xl"
            whileHover={{ scale: 1.02, borderColor: "#0879b6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />

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
          </motion.div>

          {/* Email Card - redesigned */}
          <motion.div
            className="group relative bg-white/90 backdrop-blur-sm border-2 border-indigo-200/50 hover:border-indigo-400/70 shadow-lg transition-all duration-500 overflow-hidden hover:scale-[1.02] rounded-2xl"
            whileHover={{ scale: 1.02, borderColor: "#3B82F6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />

            <a
              href="mailto:geral@lrmourao.com"
              className="relative p-6 block"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Email
                    </h3>
                    <p className="text-slate-700 text-lg font-semibold">
                      geral@lrmourao.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center self-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-emerald-400/20 shadow-sm backdrop-blur-sm">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Resposta
                    <span className="mx-1.5 text-slate-300">•</span>
                    <span className="text-blue-700 font-semibold">
                      24h
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUsCards;
