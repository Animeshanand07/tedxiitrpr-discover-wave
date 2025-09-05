import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-white text-xl">
              TEDx
            </div>
            <span className="text-white font-semibold text-lg">IIT Ropar</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-accent hover:bg-transparent"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-accent hover:bg-transparent"
            >
              About Us
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("event")}
              className="text-white hover:text-accent hover:bg-transparent"
            >
              Event
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("speakers")}
              className="text-white hover:text-accent hover:bg-transparent"
            >
              Speakers
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => {
              // Mobile menu toggle would go here
            }}
          >
            ☰
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;