import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Theme */}
        <div className="animate-fade-in">
          <h1 className="font-emblema text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-wider drop-shadow-2xl">
            ANवेषण
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-8 shadow-glow"></div>
        </div>

        {/* Theme Description */}
        <div className="animate-slide-up max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Embark on a journey of exploration and discovery. ANवेषण represents the eternal human spirit of curiosity, 
            the quest for knowledge, and the courage to venture into the unknown. Join us as we uncover ideas worth spreading 
            and stories worth telling.
          </p>
          
        </div>

        {/* Event Date */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/80">
          <p className="text-lg font-medium">October 5, 2025 • IIT Ropar</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;