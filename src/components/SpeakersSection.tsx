import { Card, CardContent } from "@/components/ui/card";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      description: "Innovation in Sustainable Technology",
      category: "Technology",
    },
    {
      name: "Rajesh Kumar",
      description: "Bridging Traditional Art with Modern Expression",
      category: "Arts & Culture",
    },
    {
      name: "Prof. Maria Rodriguez",
      description: "The Future of Artificial Intelligence",
      category: "Science",
    },
    {
      name: "Ankit Sharma",
      description: "Entrepreneurship in the Digital Age",
      category: "Business",
    },
    {
      name: "Dr. Priya Patel",
      description: "Mental Health and Social Innovation",
      category: "Health",
    },
    {
      name: "Vikram Singh",
      description: "Exploring Space: India's Journey to Mars",
      category: "Space",
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Meet Our Speakers</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visionaries, innovators, and thought leaders who will share their extraordinary stories and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-0">
                {/* Speaker Image Placeholder */}
                <div className="h-64 bg-gradient-accent relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium bg-accent px-3 py-1 rounded-full mb-2">
                      {speaker.category}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                
                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{speaker.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{speaker.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            More amazing speakers to be announced soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;