import { Card } from "@/components/ui/card";
import { Zap, Eye, Target, GraduationCap } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Fast micro-grants",
    description: "Small checks, quick decisions, public criteria. Get funded without months of bureaucracy.",
  },
  {
    icon: Eye,
    title: "Transparent reviews",
    description: "Signed attestations, open dossiers, provenance. Every decision is documented and accountable.",
  },
  {
    icon: Target,
    title: "Accountable milestones",
    description: "Evidence-based disbursements, impact dashboards. Track progress with transparent metrics.",
  },
  {
    icon: GraduationCap,
    title: "Learning lab",
    description: "Clinics, templates, office hours for teams. Get support to succeed in decentralized science.",
  },
];

export const ValueProps = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-soft transition-all duration-300 border-border hover:border-accent/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
