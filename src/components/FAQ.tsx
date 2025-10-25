import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Spark a non-profit?",
    answer: "Yes, Spark operates as a non-profit organization. All fees go toward funding operations and platform development, with an admin overhead target of less than 15%.",
  },
  {
    question: "Do you take equity or tokens?",
    answer: "We do not take equity from funded projects. We may accept token gifts per our policy, but we do not engage in speculation. Our focus is on supporting research, not extracting value.",
  },
  {
    question: "Who can apply?",
    answer: "Spark is open to global teams working on decentralized science projects. All applicants must comply with our ethics and data guidelines, which are publicly available.",
  },
  {
    question: "How fast are decisions?",
    answer: "We operate both cohort-based and rolling review processes. Decision timelines vary by program but are routinely published on our website. Most micro-grants receive decisions within 2-4 weeks.",
  },
  {
    question: "Can we run a custom round?",
    answer: "Yes! Our white-label option allows organizations to run custom funding rounds with their own branding and criteria. Contact us to discuss your needs.",
  },
  {
    question: "What makes Spark different from traditional grants?",
    answer: "Spark emphasizes speed, transparency, and accountability. We publish all criteria, provide signed attestations for reviews, and track impact through open dashboards. We're built for the web3 era of science.",
  },
  {
    question: "How do milestone-based disbursements work?",
    answer: "Funds are released as teams achieve pre-agreed milestones with evidence-based verification. This ensures accountability while providing flexibility for research teams.",
  },
  {
    question: "What is the Learning Lab?",
    answer: "Our Learning Lab provides bootcamps, templates, toolkits, and office hours to help teams navigate the DeSci ecosystem and succeed with their projects.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Spark and our programs
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-accent/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
