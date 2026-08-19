import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useContactForm } from "@/contexts/ContactFormContext";

const FinalCtaSection = () => {
  const ref = useScrollReveal();
  const { openContactForm } = useContactForm();

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      {/* Flowing background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-muted/30 to-primary/[0.02]" />
      <div
        className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full animate-wave-float opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, hsl(226 60% 35%), transparent 70%)",
        }}
      />
      {/* Concentric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
        <div className="absolute inset-0 rounded-full border border-primary/[0.05] animate-wave-float" />
        <div className="absolute inset-[20%] rounded-full border border-primary/[0.04] animate-wave-float-reverse" />
        <div className="absolute inset-[40%] rounded-full border border-primary/[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8 text-center max-w-3xl">
        <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          Ready to Build an
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI-Enabled Enterprise?
          </span>
        </h2>
        <p className="fade-in-up stagger-1 mt-6 text-lg text-muted-foreground leading-relaxed">
          Let's design systems that scale intelligently and operate reliably.
        </p>
        <div className="fade-in-up stagger-2 mt-10">
          <Button size="lg" onClick={() => openContactForm("final-cta")} className="text-base px-10 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
            Start a Conversation
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
