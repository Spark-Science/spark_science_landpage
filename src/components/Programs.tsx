import { Card } from "@/components/ui/card";
import { DollarSign, Award, Lightbulb, Building } from "lucide-react";

const programs = [
  {
    icon: DollarSign,
    title: "Micro-grants & seed checks",
    description: "Quick funding for early-stage projects with transparent criteria and fast decisions.",
  },
  {
    icon: Award,
    title: "Review-to-earn & replication bounties",
    description: "Get rewarded for peer review work and validation of research results.",
  },
  {
    icon: Lightbulb,
    title: "Learning Lab",
    description: "Bootcamps, toolkits, and resources to help teams succeed in DeSci.",
  },
  {
    icon: Building,
    title: "Fiscal sponsorship",
    description: "Administrative support for early teams navigating the funding landscape.",
  },
];

export const Programs = () => {
  return (
    <section id="programs" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple ways to participate and contribute to decentralized science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-soft transition-all duration-300 border-border hover:border-accent/50 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/50 transition-colors">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
