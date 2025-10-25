import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import sparkLogo from "@/assets/spark-logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Programs", id: "programs" },
    { label: "How it Works", id: "how-it-works" },
    { label: "Pricing", id: "pricing" },
    { label: "Sponsors", id: "sponsors" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-3 group">
            <img src={sparkLogo} alt="Spark Logo" className="h-10 w-10 transition-transform group-hover:scale-105" />
            <span className="font-heading font-semibold text-xl text-foreground">Spark</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection("sponsors")}
              className="border-border hover:border-accent"
            >
              For Sponsors
            </Button>
            <Button onClick={() => scrollToSection("whitelist")} className="shadow-sm hover:shadow-glow">
              Join the Whitelist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-soft">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 space-y-3 border-t border-border">
              <Button
                variant="outline"
                onClick={() => scrollToSection("sponsors")}
                className="w-full"
              >
                For Sponsors
              </Button>
              <Button onClick={() => scrollToSection("whitelist")} className="w-full">
                Join the Whitelist
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
