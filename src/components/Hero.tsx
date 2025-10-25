import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, FileText } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--muted))_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
      </div>

      {/* Floating Sparkles Animation */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
              Non-profit
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
              Open metrics
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
              Reviewer pool
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight animate-fade-in">
            Seed funding for decentralized science: open, fast, transparent.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Spark helps decentralized science projects get off the ground with micro-grants, peer reviews, and accountable milestones.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("whitelist")}
              className="text-base px-8 shadow-soft hover:shadow-glow"
            >
              Join the Whitelist
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-base px-8 shadow-soft hover:shadow-glow"
            >
              <a href="https://cabana.exchange/token/2RDJ2BifKMPad67H7YfxM3JCVHPsjHeKpJGNwTxXpump?partner=realms" target="_blank" rel="noopener noreferrer">
                Buy $SPARK
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 border-2 hover:border-accent"
            >
              <FileText className="w-4 h-4 mr-2" />
              Get the Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
