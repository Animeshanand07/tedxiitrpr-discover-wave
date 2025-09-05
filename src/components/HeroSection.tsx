import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Theme */}
        <div className="animate-fade-in">
          <h1 className="font-emblema text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-wider">
            AN वेषण
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        {/* Theme Description */}
        <div className="animate-slide-up max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Embark on a journey of exploration and discovery. AN वेषण represents the eternal human spirit of curiosity, 
            the quest for knowledge, and the courage to venture into the unknown. Join us as we uncover ideas worth spreading 
            and stories worth telling.
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold shadow-glow transition-all duration-300 hover:shadow-xl"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discover More
          </Button>
        </div>

        {/* Event Date */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80">
          <p className="text-lg font-medium">October 5, 2025 • IIT Ropar</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;