import { Card, CardContent } from "@/components/ui/card";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Bharulata",
      description: "A pioneering researcher in sustainable technology, Dr. Johnson has revolutionized how we think about renewable energy systems. Her work bridges the gap between cutting-edge innovation and practical implementation for a greener future.",
      category: "Technology",
    },





    {
      name: "Akshay",
      description: "Master artist and cultural ambassador who seamlessly blends centuries-old Indian traditions with contemporary artistic expressions. His work celebrates cultural heritage while pushing the boundaries of modern creativity.",
      category: "Arts & Culture",
    },
    {
      name: "Purvi Roy",
      description: "Leading AI researcher and ethics advocate whose groundbreaking work in machine learning is shaping the future of human-computer interaction. She explores how AI can amplify human potential while preserving our humanity.",
      category: "Science",
    },
    {
      name: "Lt Gen Mahal Sir",
      description: "Serial entrepreneur and startup mentor who has built multiple successful tech companies. He shares insights on navigating the digital landscape and turning innovative ideas into impactful businesses.",
      category: "Business",
    },
    {
      name: "Munish Jindal",
      description: "Mental health advocate and social innovator working to destigmatize mental wellness. Her community-based approach has transformed how we understand and address mental health challenges in modern society.",
      category: "Health",
    },
    {
      name: "Sonali sharma",
      description: "Former ISRO scientist and space exploration enthusiast who played a key role in India's Mars mission. He shares the incredible journey of space exploration and India's growing presence in the cosmos.",
      category: "Space",
    },
     {
      name: "Dr. Dibyakusum Ray",
      description: "Master artist and cultural ambassador who seamlessly blends centuries-old Indian traditions with contemporary artistic expressions. His work celebrates cultural heritage while pushing the boundaries of modern creativity.",
      category: "Arts & Culture",
    },
     {
      name: "Saakshar Duggal",
      description: "Master artist and cultural ambassador who seamlessly blends centuries-old Indian traditions with contemporary artistic expressions. His work celebrates cultural heritage while pushing the boundaries of modern creativity.",
      category: "Arts & Culture",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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