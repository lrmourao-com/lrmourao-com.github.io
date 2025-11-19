import { ContactSection } from "./components/ContactUs/ContactUs";
import { Header } from "./components/Header";
import { Advantages } from "./components/Advantages";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function LRMouraoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Advantages />
      <ContactSection />
      <Footer />

      <WhatsAppButton />
    </div>
  );
}
