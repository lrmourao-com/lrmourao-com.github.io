"use client";

import { useEffect, useState } from "react";
import Contact from "./components/ContactUs/ContactUs";
import { Header } from "./components/Header";
import { Advantages } from "./components/Advantages";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import { Services } from "./components/Services/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function LRMouraoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (nav: boolean, id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Use offset for specific service cards (specializations), simple scroll for main sections

      if (!nav) {
        const headerOffset = 120; // Account for fixed header height (96px) + some padding
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset -
          headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        // Simple scroll for main navigation sections
        el.scrollIntoView({ behavior: "smooth" });
      }

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
