import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HandshakeIcon, Calendar } from "lucide-react";

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Partner with Spark
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Co-fund thematic rounds, underwrite scholarships, and support open impact in decentralized science.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="px-8 shadow-soft hover:shadow-glow">
              <HandshakeIcon className="w-5 h-5 mr-2" />
              Sponsor Packages
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-2 hover:border-accent">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Call
            </Button>
          </div>

          {/* Placeholder for sponsor logos */}
          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-8 font-medium">Trusted by organizations worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4].map((i) => (
                <Card
                  key={i}
                  className="h-24 flex items-center justify-center bg-muted/50 hover:bg-secondary/20 transition-all duration-300 group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-muted-foreground group-hover:text-accent-foreground transition-colors">
                    <span className="text-2xl font-heading font-bold">Partner {i}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
