import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";

const EventSection = () => {
  const eventHighlights = [
    {
      icon: CalendarDays,
      title: "Date",
      description: "5th October 2025",
    },
    {
      icon: MapPin,
      title: "Venue",
      description: "IIT Ropar Auditorium",
    },
    {
      icon: Clock,
      title: "Duration",
      description: "Full Day Event",
    },
    {
      icon: Users,
      title: "Experience",
      description: "Ideas Worth Spreading",
    },
  ];

  return (
    <section id="event" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Event Highlights</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A day filled with thought-provoking talks, inspiring performances, and transformative ideas.
          </p>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventHighlights.map((highlight, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Description */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="shadow-elegant">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-primary mb-6">What to Expect</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                TEDxIITRopar will feature captivating talks from diverse speakers sharing their unique perspectives, 
                experiences, and innovative ideas. From technology and science to arts and humanities, our speakers 
                will take you on a journey of discovery and inspiration.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">8+</div>
                  <p className="text-muted-foreground">Inspiring Speakers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <p className="text-muted-foreground">Attendees</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">1</div>
                  <p className="text-muted-foreground">Unforgettable Day</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline Placeholder */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Event Timeline</h3>
          <p className="text-muted-foreground">Detailed agenda coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default EventSection;