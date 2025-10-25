import sparkLogo from "@/assets/spark-logo.png";
import { Twitter, Send, Github, MessageSquare } from "lucide-react";

const footerLinks = {
  policies: [
    { label: "Gift & Token Acceptance", href: "#" },
    { label: "Fee Schedule", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  resources: [
    { label: "Media Kit", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Documentation", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://x.com/spark_sciences", label: "X (Twitter)" },
  { icon: Send, href: "https://t.me/+Rn0Vbfd2sY01ZTlh", label: "Telegram" },
  { icon: Github, href: "https://github.com/GoretiFreitas/spark", label: "GitHub" },
  { icon: MessageSquare, href: "https://discord.gg/xf4prRyf", label: "Discord" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={sparkLogo} alt="Spark Logo" className="h-10 w-10" />
              <span className="font-heading font-semibold text-2xl">Spark</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Seed funding for decentralized science. Open, fast, transparent.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Policies</h3>
            <ul className="space-y-3">
              {footerLinks.policies.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Spark DeSci Funding. All rights reserved. Non-profit organization.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Built with transparency and accountability in mind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
