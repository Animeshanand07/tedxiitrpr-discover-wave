import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventSection from "@/components/EventSection";
import SpeakersSection from "@/components/SpeakersSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventSection />
      <SpeakersSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default Index;
