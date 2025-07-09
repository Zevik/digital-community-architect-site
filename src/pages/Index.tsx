import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <PhilosophySection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
