import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Layers,
  Code2,
  Network,
  BarChart3,
  Settings2,
  Building2,
  TestTube2,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Enterprise Application Services",
    description:
      "Design, build, and modernize enterprise applications powered by AI-driven architecture for agility and scale.",
    href: "/services/enterprise-application-services",
  },
  {
    icon: Code2,
    title: "Product Engineering",
    description:
      "End-to-end product development with embedded intelligence — from ideation through deployment and iteration.",
    href: "/services/product-engineering",
  },
  {
    icon: Network,
    title: "Enterprise Integration Services",
    description:
      "Connect disparate systems with smart integration platforms that ensure seamless data flow and operational continuity.",
    href: "/services/enterprise-integration-services",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Unlock enterprise data potential with analytics platforms, AI models, and real-time intelligence pipelines.",
    href: "/services/data-analytics",
  },
  {
    icon: Settings2,
    title: "Application Management Services",
    description:
      "Sustain and optimize enterprise applications with proactive AI-driven monitoring, support, and continuous improvement.",
    href: "/services/application-management-services",
  },
  {
    icon: Building2,
    title: "Virtual Captive Center",
    description:
      "Build a dedicated, hybrid offshore team that combines the control of in-house with the scale and economics of outsourcing.",
    href: "/services/virtual-captive-center",
  },
  {
    icon: TestTube2,
    title: "Testing as a Service",
    description:
      "Validate, automate, and accelerate quality across the SDLC with AI-powered testing from MedhAI — functional, automation, performance, security, and AI QA.",
    href: "/services/testing-services",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full animate-wave-float opacity-[0.02]"
        style={{
          background: "radial-gradient(circle, hsl(226 60% 35%), transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            What We Do
          </h2>
          <p className="fade-in-up stagger-1 mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive enterprise services designed to modernize, integrate, and
            intelligently automate your technology landscape.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <Link
              to={service.href}
              key={service.title}
              aria-label={`Learn more about ${service.title}`}
              className={`fade-in-up stagger-${(i % 3) + 1} group glass-card rounded-2xl p-7 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/[0.07] flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] transition-colors duration-500">
                <service.icon className="text-primary" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2.5 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-[14.5px] leading-relaxed">
                {service.description}
              </p>
              <ArrowUpRight
                className="absolute top-6 right-6 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                size={18}
                strokeWidth={1.75}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
