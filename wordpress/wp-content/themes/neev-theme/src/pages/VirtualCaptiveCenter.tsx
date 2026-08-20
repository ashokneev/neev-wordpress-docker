import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users, DollarSign, Globe2, Shield, Clock, ArrowUpDown,
  Handshake, Target, Settings, Building2,
  ChevronRight, Eye, Lightbulb, RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBreadcrumb from "@/components/StickyBreadcrumb";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { useContactForm } from "@/contexts/ContactFormContext";

const sayGoodbye = [
  { icon: DollarSign, title: "High Costs", desc: "Traditional outsourcing may promise cost savings, but hidden fees and unforeseen expenses can quickly escalate your IT budget." },
  { icon: Shield, title: "Limited Control", desc: "Entrusting critical operations to external providers can result in a loss of control over your projects, timelines, and overall business strategy." },
  { icon: Users, title: "Limited Talent", desc: "In-house teams often face talent shortages, hindering the pursuit of innovative solutions and specialized expertise." },
  { icon: Globe2, title: "Communication Breakdowns", desc: "Coordinating with dispersed teams, time zone differences, and language barriers can lead to communication breakdowns." },
];

const hybridBenefits = [
  { icon: DollarSign, title: "Cost Reduction", desc: "Slash your IT budget by up to 50% compared to onshore operations and up to 25% from traditional outsourcing with our transparent cost-plus model." },
  { icon: Users, title: "Talent Access", desc: "Access a vast pool of skilled professionals with diverse expertise, ensuring your team is equipped to handle any challenge." },
  { icon: Handshake, title: "Communication Efficiency", desc: "Enjoy seamless collaboration with dedicated teams and your own managers, ensuring your projects stay on track." },
  { icon: ArrowUpDown, title: "Flexibility", desc: "Scale your team up or down as your business needs evolve. The VCC model adapts to your requirements." },
];

const benefits = [
  { icon: Target, title: "Direct Management", desc: "Manage your team directly, ensuring alignment with your company culture and standards." },
  { icon: ArrowUpDown, title: "Adapt to Business Needs", desc: "Scale your VCC team size and expertise as your business grows and evolves." },
  { icon: Eye, title: "Transparent Cost-Plus Model", desc: "Achieve significant cost savings with a transparent cost-plus model. Reduce your IT budget by up to 50%." },
  { icon: Settings, title: "Streamlined Processes", desc: "Tap into a wider pool of talent with diverse skill sets not readily available locally." },
  { icon: Clock, title: "Round-the-Clock Coverage", desc: "Benefit from round-the-clock coverage across time zones for maximum efficiency and productivity." },
];

const steps = [
  { number: "01", title: "Define Your Needs", desc: "We work closely with you to understand your specific IT requirements, goals, and budget." },
  { number: "02", title: "Build Your Team", desc: "We recruit and manage a dedicated team of experts tailored to your unique needs." },
  { number: "03", title: "Seamless Collaboration", desc: "The hired team works as a logical extension of your in-house team with your secured technology infrastructure." },
  { number: "04", title: "Continuous Improvement", desc: "We monitor performance, provide regular feedback, and adapt the VCC to your evolving business needs." },
  { number: "05", title: "Transfer", desc: "You can transfer the employees and infrastructure to your own subsidiary as and when you want." },
];

const pricingBenefits = [
  { icon: Eye, title: "Cost Transparency", desc: "Every aspect of the pricing is discussed and agreed upon upfront, ensuring no surprises." },
  { icon: ArrowUpDown, title: "Flexibility", desc: "Ideal for engagements requiring diverse skill sets and experience levels, offering the ability to scale as per your needs." },
  { icon: Handshake, title: "Strategic Alignment", desc: "Our model is designed for long-term partnerships, aligning our success with yours." },
];

const neevAdvantage = [
  { icon: Building2, title: "Specialized for Mid-Market Growth", desc: "Tailored solutions designed specifically for mid-market enterprises seeking rapid growth." },
  { icon: RefreshCw, title: "Optimal Hybrid Sourcing", desc: "The perfect blend of onshore and offshore talent for maximum efficiency and cost savings." },
  { icon: Lightbulb, title: "End-to-End IT Expertise", desc: "Comprehensive IT capabilities spanning development, infrastructure, analytics, and more." },
  { icon: Shield, title: "Risk Mitigation in Operations", desc: "Proven strategies and contingency plans to ensure business continuity and minimize operational risks." },
];

const faqs = [
  { q: "What is a Virtual Captive Center (VCC) and how does it differ from traditional outsourcing?", a: "VCC is an outsourcing model where you partner with a service provider to establish a dedicated team that works exclusively for your company, combining the cost-efficiency of outsourcing with the control and flexibility of an in-house team." },
  { q: "What are the key benefits of opting for a VCC model?", a: "VCC offers cost savings up to 50% compared to onshore operations and up to 25% from traditional outsourcing, direct operational control, access to skilled professionals, enhanced flexibility, and faster time-to-market." },
  { q: "What is the cost-plus pricing model?", a: "Our partnership pricing model provides a transparent breakdown of all costs for services, personnel, and infrastructure, ensuring cost transparency and predictability." },
  { q: "How do you ensure the quality and expertise of VCC professionals?", a: "We provide access to a diverse pool of highly skilled professionals. Quality is ensured through rigorous recruitment processes and continuous skill development programs." },
  { q: "Can we adjust the scope of services as per our changing needs?", a: "The VCC model is highly scalable, allowing you to adjust team size and expertise according to your business needs, be it expansion or downsizing." },
  { q: "What specific IT services are offered under the VCC model?", a: "Our VCC offers software development, enterprise application services, IT infrastructure management, and data analytics, all customizable to your specific needs." },
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

const VirtualCaptiveCenter = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[700px] lg:h-[800px] bg-gradient-to-br from-indigo-100/80 to-blue-50/60 dark:from-indigo-950/50 dark:to-blue-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-indigo-100/90 to-blue-50/80 dark:from-indigo-950/80 dark:to-blue-950/60 backdrop-blur-2xl" />
      <StickyBreadcrumb className="bg-transparent backdrop-blur-none shadow-none border-none">
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Services</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Virtual Captive Center (VCC)</BreadcrumbPage></BreadcrumbItem>
      </StickyBreadcrumb>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" style={{ y: heroBgY }} />
        <AnimatedGridPattern className="absolute inset-0 opacity-30 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" numSquares={40} maxOpacity={0.3} />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Building2 className="w-4 h-4" /> Virtual Captive Center
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Redefining IT Outsourcing for{" "}
            <span className="text-primary">Mid-Market Enterprises</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Discover the power of Virtual Captive Centres — a hybrid model combining the cost-efficiency of outsourcing with the control and flexibility of an in-house team.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-xl px-8 shadow-lg shadow-primary/20" onClick={() => openContactForm("virtual-captive-center")}>
              Talk to an Expert <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl px-8" onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}>
              Explore How it Works
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Say Goodbye */}
      <section className="py-24 relative overflow-hidden">
        <AnimatedGridPattern className="absolute inset-0 opacity-20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" numSquares={30} maxOpacity={0.2} />
        <div className="container mx-auto px-6 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Say <span className="text-primary">Goodbye</span> To</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Traditional outsourcing challenges that hold your business back</p>
            </motion.div>
          </ParallaxSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sayGoodbye.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-destructive/20 hover:border-destructive/40 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Model Benefits */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern className="absolute inset-0 opacity-20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" numSquares={30} maxOpacity={0.2} />
        <div className="container mx-auto px-6 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">A Hybrid Model for <span className="text-primary">The Best of Both Worlds</span></h2>
            </motion.div>
          </ParallaxSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hybridBenefits.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Will VCCs Benefit You */}
      <section className="py-24 relative overflow-hidden">
        <AnimatedGridPattern className="absolute inset-0 opacity-20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" numSquares={30} maxOpacity={0.2} />
        <div className="container mx-auto px-6 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How Will VCCs <span className="text-primary">Benefit You?</span></h2>
            </motion.div>
          </ParallaxSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - 5 Steps */}
      <section id="how-it-works" className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern className="absolute inset-0 opacity-20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" numSquares={30} maxOpacity={0.2} />
        <div className="container mx-auto px-6 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Path to <span className="text-primary">Efficient IT Outsourcing</span></h2>
            </motion.div>
          </ParallaxSection>
          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center">
                <div className="text-4xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors mb-3">{step.number}</div>
                <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Pricing */}
      <section className="py-24 relative overflow-hidden">
        <AnimatedGridPattern className="absolute inset-0 opacity-20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" numSquares={30} maxOpacity={0.2} />
        <div className="container mx-auto px-6 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Partnership <span className="text-primary">Pricing Model</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Ensuring cost transparency and predictability</p>
            </motion.div>
          </ParallaxSection>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 mb-12 text-center">
            <p className="text-muted-foreground mb-6">Unlike traditional offshore staffing models that rely on fixed-rate cards with hidden margins, our model is built on a clear, cost-plus basis.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="p-4 rounded-xl bg-primary/10">
                <span className="text-3xl font-extrabold text-primary">71%</span>
                <p className="text-xs text-muted-foreground mt-1">cost savings transitioning from onshore</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/10">
                <span className="text-3xl font-extrabold text-primary">22%</span>
                <p className="text-xs text-muted-foreground mt-1">cost savings from current offshoring model</p>
              </div>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingBenefits.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neev Advantage */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern className="absolute inset-0 opacity-20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" numSquares={30} maxOpacity={0.2} />
        <div className="container mx-auto px-6 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-primary">Neev Systems</span> Advantage</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Why IT leaders and CIOs choose us as their strategic partner</p>
            </motion.div>
          </ParallaxSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neevAdvantage.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 relative overflow-hidden">
        <AnimatedGridPattern className="absolute inset-0 opacity-20 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" numSquares={30} maxOpacity={0.2} />
        <div className="container mx-auto px-6 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="text-primary">FAQs</span></h2>
            </motion.div>
          </ParallaxSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300">
                <summary className="cursor-pointer text-base font-semibold list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 ml-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-sm text-muted-foreground mt-3">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-vcc" className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern className="absolute inset-0 opacity-30 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" numSquares={40} maxOpacity={0.3} />
        <div className="container mx-auto px-6 relative z-10">
          <ParallaxSection speed={0.1}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Join The Future of <span className="text-primary">IT Outsourcing</span></h2>
              <p className="text-lg text-muted-foreground mb-4">With Neev Systems' VCC solutions, you're not just outsourcing — you're strategically enhancing your operations.</p>
              <div className="flex flex-wrap gap-4 justify-center mb-10 text-sm text-muted-foreground">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">Up to 50% IT budget reduction</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">Vast talent pool</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">Dedicated teams</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">Flexible scaling</span>
              </div>
              <Button size="lg" className="rounded-xl px-10 shadow-lg shadow-primary/20" onClick={() => openContactForm("virtual-captive-center")}>
                Get Started Today <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualCaptiveCenter;
