
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ProfessionalsSection from "@/components/ProfessionalsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhoWeAreSection />
      <ProfessionalsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
