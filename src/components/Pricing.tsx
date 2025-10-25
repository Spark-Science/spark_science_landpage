import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";

const pricingItems = [
  {
    title: "Grants admin/platform",
    price: "8%",
    description: "Standard fee (2–12% by complexity)",
    features: ["Transparent fee structure", "Public criteria", "Fast decisions"],
  },
  {
    title: "Fiscal sponsorship",
    price: "7%",
    description: "For early-stage teams",
    features: ["Administrative support", "Legal compliance", "Financial management"],
  },
  {
    title: "White-label rounds",
    price: "$2,000",
    description: "Setup + 5% ongoing",
    features: ["Custom branding", "Dedicated support", "Full platform access"],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Non-profit pricing model. All fees fund operations and platform development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {pricingItems.map((item, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-soft transition-all duration-300 border-border hover:border-accent/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <div className="text-4xl font-heading font-bold text-accent mb-2">
                  {item.price}
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block p-6 bg-secondary/10 border-accent/30 mb-6">
            <p className="text-foreground font-medium">
              <span className="text-accent">💡 Note:</span> Waivers available for students and under-resourced teams
            </p>
          </Card>
          <div>
            <Button variant="outline" className="border-accent/50 hover:border-accent">
              <ExternalLink className="w-4 h-4 mr-2" />
              View full fee schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
