import { Card } from "@/components/ui/card";

const SponsorsSection = () => {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      sponsors: ["Sponsor Logo 1"],
    },
    {
      tier: "Platinum Sponsors",
      sponsors: ["Sponsor Logo 2", "Sponsor Logo 3"],
    },
    {
      tier: "Gold Sponsors",
      sponsors: ["Sponsor Logo 4", "Sponsor Logo 5", "Sponsor Logo 6"],
    },
    {
      tier: "Silver Sponsors",
      sponsors: ["Logo 7", "Logo 8", "Logo 9", "Logo 10"],
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Sponsors</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Partnering with visionary organizations to make ideas worth spreading possible
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="text-center">
              <h3 className="text-2xl font-semibold text-primary mb-8">{tier.tier}</h3>
              <div className={`grid gap-8 ${
                tier.sponsors.length === 1 ? 'grid-cols-1' :
                tier.sponsors.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                tier.sponsors.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                'grid-cols-2 md:grid-cols-4'
              }`}>
                {tier.sponsors.map((sponsor, index) => (
                  <Card key={index} className="p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group">
                    <div className="h-20 flex items-center justify-center">
                      <div className="w-32 h-16 bg-gradient-accent rounded-lg flex items-center justify-center text-white font-semibold group-hover:scale-105 transition-transform duration-300">
                        {sponsor}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;