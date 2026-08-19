import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import StickyBreadcrumb from "@/components/StickyBreadcrumb";
import {
  ArrowRight,
  Bot,
  Layers,
  Shield,
  Zap,
  CheckCircle,
  Brain,
  Network,
  Lightbulb,
  Rocket,
  Settings,
  TrendingUp,
  Headphones,
  Award,
  Globe,
  Users,
  Clock,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import workatoLogo from "@/assets/workato-logo.png";
import { useContactForm } from "@/contexts/ContactFormContext";

const phases = [
  {
    number: "1",
    title: "Planning & Assessment",
    color: "from-primary/20 to-primary/5",
    items: [
      { title: "Business Case Creation", desc: "Evaluate the feasibility, ROI, and long-term value of automation initiatives. We help you identify high-impact workflows, quantify time and cost savings, and build a phased roadmap for Workato adoption." },
      { title: "Workflow Discovery & Process Reengineering", desc: "Analyze current manual or siloed processes to uncover automation opportunities. We redesign workflows to reduce friction, eliminate redundancies, and maximize efficiency." },
      { title: "Proof of Concept", desc: "Rapidly prototype and validate critical integrations and automations in a controlled environment, minimizing risk before full-scale rollout." },
      { title: "Integration Readiness & Platform Assessment", desc: "Conduct a comprehensive review of your system landscape—on-premise and cloud—to assess integration feasibility and propose the best-fit architecture." },
    ],
  },
  {
    number: "2",
    title: "Implementation",
    color: "from-secondary/20 to-secondary/5",
    items: [
      { title: "Implementation and Global Rollouts", desc: "Workato's low-code platform allows rapid deployment of automation across geographies and departments with reusable recipes, modular architecture, and pre-built connectors." },
      { title: "Application Upgrades", desc: "Modernize legacy systems and upgrade applications to leverage Workato's latest capabilities." },
      { title: "Cloud & Hybrid Migrations", desc: "Seamlessly migrate workloads between on-premise and cloud environments." },
      { title: "Enterprise System Integrations", desc: "Connect your enterprise applications—CRM, ERP, HRIS, ITSM—into unified, automated workflows." },
    ],
  },
  {
    number: "3",
    title: "Support & Operations",
    color: "from-accent/30 to-accent/10",
    items: [
      { title: "Automation Management Services", desc: "Proactive tracking of agent performance and integration health to keep everything running smoothly." },
      { title: "Governance & Compliance", desc: "Ensuring workflows meet evolving regulatory and security requirements." },
      { title: "Operational Scaling", desc: "Adding more departments and use cases over time without breaking existing automations." },
    ],
  },
  {
    number: "4",
    title: "Optimize & Innovate",
    color: "from-primary/15 to-secondary/10",
    items: [
      { title: "AI Model Tuning", desc: "Improve accuracy and decision-making through continuous learning." },
      { title: "New Workflow Opportunities", desc: "Extend automation into untouched processes or departments." },
      { title: "Predictive & Prescriptive Automation", desc: "Move from reactive workflows to self-healing, proactive processes." },
    ],
  },
];

const aiCapabilities = [
  { icon: Network, title: "Connected Intelligence", desc: "Unify AI outputs from Salesforce, Oracle, Workday, ServiceNow, and custom systems into a single, contextual layer—enabling decisions based on the full enterprise picture." },
  { icon: Bot, title: "Autonomous Workflows", desc: "Deploy agentic automation that observes, reasons, and acts across your ecosystem—executing multi-step processes without manual intervention." },
  { icon: Brain, title: "Enhanced Decision Making", desc: "Deliver AI-driven insights exactly where decisions happen—in CRM, ERP, collaboration tools, or mobile apps." },
  { icon: Rocket, title: "Business Agility", desc: "Break free from OEM limitations by connecting any platform, any cloud, any system—future-proofing your operations." },
];

const whyChooseUs = [
  { icon: Zap, title: "Pre-Built Accelerators", desc: "Ready-to-deploy templates for common business processes to jumpstart your automation." },
  { icon: Layers, title: "Cross-Platform Mastery", desc: "We integrate Workato with CRMs, ERPs, HRIS, ITSMs, finance tools and more—cloud or on-prem." },
  { icon: Award, title: "Certified Experts", desc: "Workato-certified team with deep integration and business process automation experience." },
  { icon: Users, title: "Strategic Partner Alignment", desc: "Strong partnerships with Salesforce, Oracle, ServiceNow, and Workato ensure cutting-edge implementations." },
  { icon: Clock, title: "Dual Shore Support", desc: "24/7 support model with dedicated and shared services, including weekend coverage for global operations." },
];

const ParallaxSection = ({ children, speed = 0.3, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

const Workato = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[700px] lg:h-[800px] bg-gradient-to-br from-[#67EADD]/30 via-cyan-50/70 to-teal-100/60 dark:from-teal-950/50 dark:via-background dark:to-cyan-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-[#67EADD]/40 to-cyan-50/80 dark:from-teal-950/80 dark:to-cyan-950/60 backdrop-blur-2xl" />
      <StickyBreadcrumb className="bg-transparent backdrop-blur-none shadow-none border-none">
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Technologies</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Workato</BreadcrumbPage></BreadcrumbItem>
      </StickyBreadcrumb>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
        <AnimatedGridPattern numSquares={30} maxOpacity={0.12} duration={3} className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-[#67EADD]/25 rounded-full blur-3xl animate-wave-float" />
          <div className="absolute bottom-10 -right-32 w-80 h-80 bg-cyan-300/25 rounded-full blur-3xl animate-wave-float-reverse" />
        </motion.div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Certified Workato Partner
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
                Workato AI Integration Services —{" "}<span className="text-primary">Orchestrating Agentic Automation</span>{" "}across the Enterprise
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                At Neev Systems, we help enterprises transform disconnected systems into intelligent, AI-driven ecosystems. As a certified Workato implementation and development partner, we specialize in integrating and orchestrating complex enterprise environments using Workato AI.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("workato")}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl" onClick={() => document.querySelector("#strategy")?.scrollIntoView({ behavior: "smooth" })}>
                  Our 360° Strategy
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/70 dark:bg-white/90 backdrop-blur-xl border border-[#67EADD]/40 dark:border-[#67EADD]/30 shadow-[0_20px_60px_-20px] shadow-[#67EADD]/40 flex items-center justify-center p-12">
                <img src={workatoLogo} alt="Workato logo" className="w-full h-auto max-h-32 object-contain" loading="lazy" />
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#67EADD]/25 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Beyond Automation */}
      <section className="py-20 bg-gradient-to-br from-[#67EADD]/20 to-cyan-100/50 dark:from-teal-950/40 dark:to-cyan-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Beyond Automation
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground text-lg">
                Whether you're looking to unify customer journeys, speed up operations, or enhance decision-making with intelligent bots — we have the tools and the team to make it happen.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Settings, title: "End-to-End Implementation & Development", desc: "From strategy and architecture to deployment, governance, and optimization — we stay with you throughout the automation journey." },
              { icon: Bot, title: "Agentic AI + Integration Expertise", desc: "We go beyond simple triggers, delivering intelligent, adaptive, and autonomous automation." },
              { icon: Globe, title: "OEM-Agnostic Orchestration", desc: "We integrate across ecosystems, not just within vendor silos, ensuring your AI works in harmony." },
              { icon: Shield, title: "Scalable, Secure & Embedded", desc: "Using Workato's multi-tenant and embedded capabilities, we build branded automation experiences that scale with your enterprise." },
            ].map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="glass-card rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Real World Problem */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={4} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ParallaxSection speed={0.1}>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                The Real-World Problem
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center text-lg text-muted-foreground mb-10">
                Your enterprise is powered by AI, but fragmented by OEM silos.
              </motion.p>
            </ParallaxSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                "AI insights stay trapped within individual apps.",
                "Processes lack coordination and context.",
                "IT teams waste time manually stitching workflows together.",
              ].map((problem, idx) => (
                <motion.div key={problem} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="glass-card rounded-xl p-5 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <p className="text-sm text-foreground">{problem}</p>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center text-primary font-semibold mt-10 text-lg">
              This is where Neev Systems + Workato AI changes the game.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 360° Strategy Phases */}
      <section id="strategy" className="py-20 bg-gradient-to-br from-[#67EADD]/20 to-cyan-100/50 dark:from-teal-950/40 dark:to-cyan-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={25} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Our 360° Workato AI Strategy
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We help enterprises break free from vendor silos by orchestrating cross-platform, AI-powered workflows.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="space-y-12 max-w-5xl mx-auto">
            {phases.map((phase, phaseIdx) => (
              <motion.div key={phase.number} initial={{ opacity: 0, x: phaseIdx % 2 === 0 ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-80px" }} transition={{ duration: 0.7, delay: phaseIdx * 0.1 }} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">{phase.number}</div>
                  <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pl-[52px]">
                  {phase.items.map((item, itemIdx) => (
                    <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: itemIdx * 0.08 }} className={`rounded-xl p-5 bg-gradient-to-br ${phase.color} border border-border/30`}>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workato + AI */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={4} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Workato + AI: The Future of Enterprise Workflows
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                AI and GenAI are reshaping how modern enterprises operate — making processes smarter, faster, and more intuitive. We harness the full potential of Workato's AI-driven capabilities.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {aiCapabilities.map((cap, idx) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#67EADD]/20 to-cyan-100/50 dark:from-teal-950/40 dark:to-cyan-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
              Why Choose Us?
            </motion.h2>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.1 }} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="glass-card rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-workato" className="py-20 bg-gradient-to-br from-[#67EADD]/35 via-cyan-100/40 to-teal-100/50 dark:from-teal-950/50 dark:via-cyan-950/35 dark:to-teal-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Enterprise?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Talk to our Workato experts and discover how agentic AI can orchestrate your enterprise workflows.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("workato")}>
                Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Workato;
