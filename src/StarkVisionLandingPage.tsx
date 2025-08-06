import ContactForm from "./ContactForm";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import SupportSection from "./SupportSection";

const StarkVisionLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-['Open Sans']">
      <NavBar />

      <HeroSection />

      <FeatureSection />

      <SupportSection />

      <ContactForm />

      <Footer />
    </div>
  );
};

export default StarkVisionLandingPage;
