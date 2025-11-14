"use client";

import { useEffect, useState } from "react";
import Contact from "./components/ContactUs/ContactUs";
import { Header } from "./components/Header";
import { Advantages } from "./components/Advantages";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";

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

      <WhatsAppButton />
    </div>
  );
}
