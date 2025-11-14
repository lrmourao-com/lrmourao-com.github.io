"use client";

import { motion, Variants } from "framer-motion";
import { Clock, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import ContactUsForm from "./ContactUsForm";
import Image from "next/image";
import ContactUsCards from "./ContactUsCards";

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
  return (
    <section className="relative py-32 bg-linear-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
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
                  Conte com a LR Mourão sempre que necessitar. Estamos aqui para
                  apoiar, responder e entregar soluções sem complicações.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ContactUsForm />
            </div>

            <div className="order-1 lg:order-2">
              <ContactUsCards />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
