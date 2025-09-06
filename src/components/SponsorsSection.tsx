import { Card } from "@/components/ui/card";

const SponsorsSection = () => {
  const sponsors = ["Sponsor Logo 1"]; // ✅ Only one sponsor

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Sponsor
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Partnering with visionary organizations to make ideas worth
            spreading possible
          </p>
        </div>

        {/* Single Sponsor Card */}
        <div className="grid grid-cols-1 gap-8 justify-center">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              className="p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group mx-auto max-w-md"
            >
              <div className="h-20 flex items-center justify-center">
                <div className="w-40 h-20 bg-gradient-accent rounded-lg flex items-center justify-center text-white font-semibold group-hover:scale-105 transition-transform duration-300">
                  {sponsor}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
