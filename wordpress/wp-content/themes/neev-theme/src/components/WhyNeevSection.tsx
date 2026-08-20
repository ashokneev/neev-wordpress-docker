import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Brain, Globe, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Enterprise Platform Expertise",
    description:
      "Deep experience across SAP, Salesforce, Oracle, and custom enterprise platforms with proven delivery at scale.",
  },
  {
    icon: Brain,
    title: "AI-First Engineering Mindset",
    description:
      "AI isn't an add-on — it's embedded into how we architect, build, and deliver every enterprise solution.",
  },
  {
    icon: Globe,
    title: "Global Delivery Model",
    description:
      "Distributed teams across time zones with standardized processes ensuring consistent quality and faster turnaround.",
  },
  {
    icon: Handshake,
    title: "Long-Term Enterprise Partnerships",
    description:
      "We build relationships, not just projects. Our clients stay with us because we deliver sustained value year after year.",
  },
];

const WhyNeevSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/20 to-transparent" />
      <div
        className="absolute top-[10%] left-[60%] w-[30vw] h-[30vw] rounded-full animate-float-subtle opacity-[0.025]"
        style={{
          background: "radial-gradient(circle, hsl(226 30% 72%), transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-center mb-16">
          Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Neev Systems</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`fade-in-up stagger-${i + 1} text-center group`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/[0.1] transition-all duration-500 group-hover:-translate-y-1">
                <reason.icon className="text-primary" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-[14.5px] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNeevSection;
