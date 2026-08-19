import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Cpu, Link2, Database } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description:
      "Streamline enterprise workflows with AI-powered process automation that learns, adapts, and optimizes operations at scale.",
  },
  {
    icon: Link2,
    title: "AI-Driven Integration",
    description:
      "Connect complex enterprise ecosystems with smart integration layers that ensure governance, reliability, and real-time data flow.",
  },
  {
    icon: Database,
    title: "Data-First Architecture",
    description:
      "Build analytics foundations that turn enterprise data into measurable outcomes — from predictive insights to operational intelligence.",
  },
];

const AiPositioningSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      {/* Soft flowing background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/20 to-transparent" />
      <div
        className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full animate-wave-float-reverse opacity-[0.025]"
        style={{
          background: "radial-gradient(circle, hsl(216 50% 45%), transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            AI Embedded Into
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Enterprise Systems
            </span>
          </h2>
          <p className="fade-in-up stagger-1 mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We don't bolt AI onto legacy systems. We build it into the architecture
            — designing enterprise platforms where automation, intelligence, and
            governance are foundational, not afterthoughts.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`fade-in-up stagger-${i + 2} glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-500 group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/[0.07] flex items-center justify-center mb-6 group-hover:bg-primary/[0.12] transition-colors duration-500">
                <pillar.icon className="text-primary" size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiPositioningSection;
