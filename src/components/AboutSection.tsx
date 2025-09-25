import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import dikshantImage from "@/assets/dikshant.jpg";
import animeshImage from "@/assets/animesh.jpg";
import saurabhImage from "@/assets/Saurabh.jpg";
import sanviImage from "@/assets/sanvi.jpg";
import ommImage from "@/assets/omm.jpg";
import devImage from "@/assets/dev.jpg";
import shauryaImage from "@/assets/shaurya.jpg";
import varunImage from "@/assets/varun.jpeg";
import chaitanyaImage from "@/assets/chaitanya.jpg";
import keshavImage from "@/assets/keshav.jpeg";
import navneetImage from "@/assets/Navneet.jpg";  

const AboutSection = () => {
  const teamMembers = [
    { name: "Dikshant Parshar", role: "Core Team", image: dikshantImage },
    { name: "Animesh Anand", role: "Core Team", image: animeshImage },
    { name: "Saurabh Sharma", role: "Core Team(License)", image: saurabhImage },
    { name: "Sanvi Shripad", role: "Core Team", image: sanviImage },
    { name: "Omm Shree", role: "Core Team", image: ommImage },
    { name: "Dev Jain", role: "Core Team", image: devImage },
    { name: "Shaurya Anant", role: "Core Team", image: shauryaImage },
    { name: "Chaitanya Kalme", role: "Core Team", image: chaitanyaImage },
    { name: "Varun Bhardwaj", role: "Core Team", image: varunImage },
    { name: "Keshav Verma", role: "Core Team", image: keshavImage },
    { name: "Yash Hatwar", role: "Core Team", image: devImage },
    { name: "Navneet Kaur", role: "Core Team", image: navneetImage },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMember = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const nextMember = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About TEDxIITRopar */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              TEDxIITROPAR is a part of a larger TEDx network, meaning we’re an independently organized event licensed by TED. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
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

        {/* Team Slideshow */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h3>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <div className="flex items-center space-x-6">
            <button
              onClick={prevMember}
              className="bg-accent text-white px-5 py-4 rounded-full hover:bg-primary transition flex items-center justify-center"
              aria-label="Previous"
            >
              <span className="text-4xl leading-none">&#8592;</span>
            </button>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                {teamMembers[currentIndex].image ? (
                  <img
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-accent flex items-center justify-center text-white font-bold text-xl">
                    {teamMembers[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">
                {teamMembers[currentIndex].name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {teamMembers[currentIndex].role}
              </p>
            </div>
            <button
              onClick={nextMember}
              className="bg-accent text-white px-5 py-4 rounded-full hover:bg-primary transition flex items-center justify-center"
              aria-label="Next"
            >
              <span className="text-4xl leading-none">&#8594;</span>
            </button>
          </div>
        </div>

        {/* Team Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;