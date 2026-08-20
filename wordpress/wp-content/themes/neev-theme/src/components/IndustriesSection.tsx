import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HeartPulse, ShoppingCart, Landmark, Cpu, Package } from "lucide-react";

const industries = [
  { icon: HeartPulse, name: "Healthcare & Life Sciences" },
  { icon: ShoppingCart, name: "Retail & Consumer" },
  { icon: Landmark, name: "Banking & Financial Services" },
  { icon: Cpu, name: "High Tech" },
  { icon: Package, name: "CPG" },
];

const IndustriesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      <div
        className="absolute bottom-[10%] right-[5%] w-[25vw] h-[25vw] rounded-full animate-wave-float-reverse opacity-[0.02]"
        style={{
          background: "radial-gradient(circle, hsl(216 50% 45%), transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-center mb-14">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              className={`fade-in-up stagger-${i + 1} flex items-center gap-3.5 glass-card rounded-2xl px-7 py-5 min-w-[220px] hover:-translate-y-0.5 hover:border-primary/15 transition-all duration-500 group`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/[0.07] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/[0.12] transition-colors duration-500">
                <industry.icon className="text-primary" size={20} strokeWidth={1.5} />
              </div>
              <span className="font-medium text-foreground text-[15px]">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
