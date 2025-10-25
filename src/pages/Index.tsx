import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { HowItWorks } from "@/components/HowItWorks";
import { Programs } from "@/components/Programs";
import { Impact } from "@/components/Impact";
import { Pricing } from "@/components/Pricing";
import { Sponsors } from "@/components/Sponsors";
import { EmailCapture } from "@/components/EmailCapture";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <Programs />
        <Impact />
        <Pricing />
        <Sponsors />
        <EmailCapture />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
