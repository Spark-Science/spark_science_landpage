import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Sparkles } from "lucide-react";

export const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast.success("Welcome to Spark!", {
        description: "You've been added to our whitelist. Check your email for next steps.",
        icon: <Sparkles className="w-4 h-4" />,
      });
      setEmail("");
      setRole("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="whitelist" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto p-8 md:p-12 bg-gradient-to-br from-secondary/10 to-accent/10 border-accent/30 shadow-soft">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
              Join the Whitelist
            </h2>
            <p className="text-lg text-muted-foreground">
              Be the first to know when we launch new programs and opportunities
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-foreground font-medium">
                I am a... (optional)
              </Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role" className="h-12 text-base">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scientist">De-Scientist</SelectItem>
                  <SelectItem value="donor">Donor</SelectItem>
                  <SelectItem value="reviewer">Reviewer</SelectItem>
                  <SelectItem value="sponsor">Sponsor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-base h-12 shadow-soft hover:shadow-glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join the Whitelist"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By subscribing, you agree to receive updates from Spark. You can unsubscribe at any time.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};
