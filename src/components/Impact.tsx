import { Card } from "@/components/ui/card";
import { DollarSign, Briefcase, Globe, Users } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    value: "$2.5M+",
    label: "Funds Moved",
  },
  {
    icon: Briefcase,
    value: "150+",
    label: "Projects Supported",
  },
  {
    icon: Globe,
    value: "45+",
    label: "Countries",
  },
  {
    icon: Users,
    value: "300+",
    label: "Reviewers",
  },
];

export const Impact = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Impact & Credibility
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building trust through transparent metrics and open reporting
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-soft transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Testimonial Card */}
        <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-card border-accent/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="text-accent text-5xl mb-4">"</div>
          <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            Spark provided not just funding, but a community of reviewers and mentors who believed in our vision. 
            The transparent process gave us confidence and credibility from day one.
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/30" />
            <div>
              <div className="font-semibold text-foreground">Dr. Sarah Chen</div>
              <div className="text-sm text-muted-foreground">Principal Investigator, BioDAO Research</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
