"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Target,
  Users,
  X,
} from "lucide-react";
import Contact from "./components/ContactUs";
import { Header } from "./components/Header";
import { Advantages } from "./components/Advantages";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";


export default function LRMouraoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () =>
    window.open("https://wa.me/351916672566", "_blank");

  return (
    <div className="min-h-screen bg-white">
      <Header
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        setIsScrolled={setIsScrolled}
      />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Advantages />
      <Contact />
      <Footer scrollToSection={scrollToSection} />

      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Fale connosco no WhatsApp
        </span>
      </button>
    </div>
  );
}
