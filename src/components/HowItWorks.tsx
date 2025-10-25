import { Card } from "@/components/ui/card";
import { FileText, Users, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "List your project",
    description: "Create an open dossier with your project details, goals, and milestones.",
  },
  {
    number: "02",
    icon: Users,
    title: "Review & match",
    description: "Reviewers and sponsors assess your project based on transparent criteria.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Fund & report",
    description: "Milestone-based releases with open metrics and impact tracking.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to get your decentralized science project funded
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines - Desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="relative p-8 bg-card hover:shadow-soft transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-glow">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="text-6xl font-heading font-bold text-secondary/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
