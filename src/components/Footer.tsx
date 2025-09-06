import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-xl">
                TEDx
              </div>
              <span className="font-bold text-2xl">IIT Ropar</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              TEDxIITRopar - Where ideas worth spreading come to life. Join us for a historic 
              event that celebrates innovation, discovery, and the power of human curiosity.
            </p>
            <div className="text-3xl font-emblema font-bold text-accent">AN वेषण</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3 flex flex-col">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("home")}
                className="text-white/80 hover:text-accent hover:bg-transparent p-0 h-auto font-normal justify-start"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-white/80 hover:text-accent hover:bg-transparent p-0 h-auto font-normal justify-start"
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("event")}
                className="text-white/80 hover:text-accent hover:bg-transparent p-0 h-auto font-normal justify-start"
              >
                Event
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("speakers")}
                className="text-white/80 hover:text-accent hover:bg-transparent p-0 h-auto font-normal justify-start"
              >
                Speakers
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pl-7">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:tedxiitrpr@gmail.com" 
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  tedxiitrpr@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">+91-9636864324</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">IIT Ropar, Punjab</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-white/80 hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="text-white/60 text-sm text-center md:text-right">
              <p>© 2025 TEDxIITRopar. All rights reserved.</p>
              <p className="mt-1">This independent TEDx event is operated under license from TED.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;