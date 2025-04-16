import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import ProcessSection from "@/components/process-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/layout/footer";
import QuizCalculator from "@/components/quiz-calculator";
import FeaturesSection from "@/components/features-section";
import PriceSection from "@/components/price-section";
import TariffPlans from "@/components/tariff-plans";
import { DecorativeCircles } from "@/components/ui/decorative-elements";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Владислав Волошин - Специалист по контекстной рекламе";
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные круги на фоне */}
      <DecorativeCircles />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <QuizCalculator />
        <ServicesSection />
        <FeaturesSection />
        <PriceSection />
        <TariffPlans />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
