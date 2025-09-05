import { Card, CardContent } from "@/components/ui/card";
import dikshantImage from "@/assets/dikshant.jpg";
import animeshImage from "@/assets/animesh.jpg";
import saurabhImage from "@/assets/saurabh.jpg";
import sanviImage from "@/assets/sanvi.jpg";
import ommImage from "@/assets/omm.jpg";
import devImage from "@/assets/dev.jpg";
import shauryaImage from "@/assets/shaurya.jpg";
import kaashikaImage from "@/assets/kaashika.jpg";

const AboutSection = () => {
  const teamMembers = [
    { name: "Dikshant Parshar", role: "President, E-Cell IIT Ropar", image: dikshantImage },
    { name: "Animesh Anand", role: "Vice President, E-Cell IIT Ropar", image: animeshImage },
    { name: "Saurabh Sharma", role: "Ennarators (License)", image: saurabhImage },
    { name: "Sanvi Shripad", role: "Ennarators", image: sanviImage },
    { name: "Omm Shree", role: "Secretary, E-Cell IIT Ropar", image: ommImage },
    { name: "Dev Jain", role: "E-Cell", image: devImage },
    { name: "Shaurya Anant", role: "E-Cell", image: shauryaImage },
    { name: "Kaashika Gupta", role: "Ennarators Representative", image: kaashikaImage },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About TEDxIITRopar */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              TEDxIITRopar is a historic milestone as TEDx is happening for the first time ever at IIT Ropar. 
              Organized by E-Cell & TBIF in collaboration with Ennarators, this event promises to bring together 
              ideas worth spreading and voices worth hearing.
            </p>
          </div>
        </div>

        {/* About TEDx and IIT Ropar */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">About TEDx</h3>
              <p className="text-muted-foreground leading-relaxed">
                TEDx events are independently organized TED-like experiences that bring communities together 
                to share ideas worth spreading. These local, self-organized events are designed to give 
                communities, organizations and individuals the opportunity to stimulate dialogue through 
                TED-like experiences at the local level.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">About IIT Ropar</h3>
              <p className="text-muted-foreground leading-relaxed">
                Indian Institute of Technology Ropar is a premier institute fostering innovation and leadership. 
                Located in Punjab, IIT Ropar is committed to advancing knowledge through cutting-edge research, 
                quality education, and developing future leaders who will shape tomorrow's world.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h3>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;