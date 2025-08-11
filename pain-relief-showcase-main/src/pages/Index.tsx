import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AppointmentForm from "@/components/AppointmentForm";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StepsSection from "@/components/StepsSection";
import ExpertsSection from "@/components/ExpertsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AppointmentForm />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <StepsSection />
      <ExpertsSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
