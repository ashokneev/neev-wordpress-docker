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
  Zap,
  ShieldCheck,
  DollarSign,
  Layers,
  FileCheck,
  Globe2,
  TestTube2,
  Bot,
  Gauge,
  Lock,
  Brain,
  Wand2,
  Sparkles,
  Activity,
  LineChart,
  Target,
  CheckCircle,
  Award,
  Settings,
  Lightbulb,
  Clock,
  Handshake,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParallaxSection from "@/components/ParallaxSection";
import { useContactForm } from "@/contexts/ContactFormContext";

const outcomes = [
  { icon: Zap, title: "Faster release cycles", desc: "Reduce regression execution effort by up to 50% through AI-driven automation and intelligent test selection — shipping releases in days, not weeks.", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  { icon: ShieldCheck, title: "Fewer production defects", desc: "Decrease defect leakage by up to 30% through shift-left testing practices, embedded quality gates, and continuous validation in your CI/CD pipelines.", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  { icon: DollarSign, title: "Lower QA operating costs", desc: "Cut test script maintenance by up to 60% with self-healing automation — eliminating the script-maintenance treadmill that erodes QA budgets.", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { icon: Layers, title: "Enterprise-grade coverage", desc: "End-to-end coverage across functional, automation, performance, security, and AI QA — one practice, one accountability, one delivery model.", color: "bg-purple-500/15 text-purple-600 dark:text-purple-400" },
  { icon: FileCheck, title: "Regulatory readiness", desc: "Compliance-aligned testing for SOC 2, HIPAA, PCI-DSS, GDPR, and emerging AI regulations (EU AI Act, NIST AI RMF) — built into every engagement.", color: "bg-pink-500/15 text-pink-600 dark:text-pink-400" },
  { icon: Globe2, title: "24/7 global delivery", desc: "Distributed QA teams across time zones — staff augmentation, managed testing, or a dedicated QA Center of Excellence aligned to your roadmap.", color: "bg-teal-500/15 text-teal-600 dark:text-teal-400" },
];

const pillars = [
  { icon: TestTube2, title: "Functional Testing", desc: "From manual exploratory testing to full-coverage UAT, we ensure your application behaves exactly as the business demands — across every workflow, user type, and edge case.", color: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400" },
  { icon: Bot, title: "Intelligent Test Automation", desc: "Reusable, self-healing frameworks deeply integrated into your delivery pipeline — quality gates run automatically at every build across web, mobile, API, and desktop.", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
  { icon: Gauge, title: "Performance & Load Engineering", desc: "Distributed load and stress testing with JMeter and k6 at enterprise scale — precise bottleneck analysis, APM integration, and SLA compliance reporting.", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400" },
  { icon: Lock, title: "Application Security Testing", desc: "OWASP-based vulnerability assessment, VAPT, API security, and SAST/DAST integration into CI/CD — aligned to SOC 2, HIPAA, PCI-DSS, and GDPR mandates.", color: "bg-rose-500/15 text-rose-600 dark:text-rose-400" },
  { icon: Brain, title: "Quality Engineering for AI Systems", desc: "Purpose-built evaluation for LLMs, RAG pipelines, and AI agents — prompt validation, hallucination detection, and EU AI Act / NIST AI RMF compliance readiness.", color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400" },
];

const medhaiCapabilities = [
  { icon: Wand2, title: "Self-Healing Scripts", desc: "AI auto-corrects test locators when the UI changes — eliminating script-maintenance bottlenecks and reducing flakiness by up to 70%.", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
  { icon: Sparkles, title: "AI-Generated Test Cases", desc: "Natural-language generation of test scenarios from user stories and requirements — achieving up to 3× faster test creation.", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  { icon: Activity, title: "Predictive Defect Detection", desc: "ML models analyze historical defects and code changes to predict high-risk areas — focusing testing where it matters most.", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  { icon: ShieldCheck, title: "Oracle Patch Validation", desc: "Every Oracle update is analyzed and tested automatically before it touches production — not flagged for review later.", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
  { icon: Bot, title: "Real-Time Workflow QA", desc: "Continuous, ambient monitoring catches issues at the moment they emerge — never at the post-mortem.", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { icon: LineChart, title: "Continuous Quality Intelligence", desc: "Real-time dashboards surface quality metrics, trend analysis, and risk signals across sprints — instant visibility into release readiness.", color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400" },
];

const whyChooseUs = [
  { icon: Target, title: "Agile Delivery Model", desc: "Flexible approach that pivots quickly to changes in project scope, timelines, and requirements.", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
  { icon: CheckCircle, title: "Governance & QA", desc: "Rigorous implementation reviews, health checks, and quality gates at every stage of delivery.", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  { icon: Award, title: "Center of Excellence", desc: "Solution accelerators, reusable test assets, and proprietary frameworks like MedhAI for faster cycles.", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  { icon: Settings, title: "Managed Services", desc: "Automated pattern-based build and deployment, with L1, L2, and L3 support models post-implementation.", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { icon: Lightbulb, title: "Leading Expertise", desc: "Certified QA professionals across Selenium, Playwright, JMeter, k6, OWASP, and AI testing platforms.", color: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400" },
  { icon: Clock, title: "Consistent Reliability", desc: "Projects delivered on time, within budget, at the highest quality standards — smooth, predictable engagements.", color: "bg-purple-500/15 text-purple-600 dark:text-purple-400" },
  { icon: Handshake, title: "Trusted Partnerships", desc: "Long-lasting client relationships rooted in trust, transparency, and value creation.", color: "bg-pink-500/15 text-pink-600 dark:text-pink-400" },
  { icon: Zap, title: "Efficiency & Excellence", desc: "Innovation that streamlines processes, reduces costs, and improves outcomes through AI-augmented engineering.", color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400" },
];

const TestingServices = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[700px] lg:h-[800px] bg-gradient-to-br from-indigo-100/80 to-blue-50/60 dark:from-indigo-950/50 dark:to-blue-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-indigo-100/90 to-blue-50/80 dark:from-indigo-950/80 dark:to-blue-950/60" />
      <StickyBreadcrumb className="bg-transparent backdrop-blur-none shadow-none border-none">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Services</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Testing as a Service</BreadcrumbPage>
        </BreadcrumbItem>
      </StickyBreadcrumb>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <AnimatedGridPattern numSquares={30} maxOpacity={0.12} duration={3} className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-wave-float" />
          <div className="absolute bottom-10 -right-32 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-wave-float-reverse" />
        </motion.div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <TestTube2 className="w-4 h-4" />
              Testing as a Service
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              Ship software with{" "}
              <span className="text-primary">confidence.</span>{" "}
              Every release. Every time.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Validate, automate, and accelerate quality at every stage of the SDLC — backed by deep functional expertise and AI-powered testing from MedhAI. We operate as a seamless extension of your engineering team, embedded in your CI/CD pipelines and aligned to your Agile cadence.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("testing-services")}>
                Strengthen Your Quality <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl" onClick={() => document.querySelector("#outcomes")?.scrollIntoView({ behavior: "smooth" })}>
                What We Deliver
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                We Help You Achieve
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground text-lg">
                Six tangible results our testing practice delivers to enterprise engineering teams — measurable, repeatable, and aligned to business outcomes.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {outcomes.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color.split(' ')[0]}`}>
                  <item.icon className={`w-6 h-6 ${item.color.split(' ').slice(1).join(' ')}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Pillars */}
      <section className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={25} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Our Testing Pillars
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Five disciplines, one practice — comprehensive coverage from functional validation to AI quality engineering.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pillars.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color.split(' ')[0]}`}>
                  <item.icon className={`w-6 h-6 ${item.color.split(' ').slice(1).join(' ')}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MedhAI */}
      <section className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="text-center mb-14">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" /> Proprietary Platform
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Powered by MedhAI
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Neev Systems' proprietary AI testing platform — purpose-built for enterprise Oracle and ERP environments. Automated patch validation, self-healing regression, and real-time workflow QA at every release.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {medhaiCapabilities.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.08 }} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.color.split(' ')[0]}`}>
                  <item.icon className={`w-5 h-5 ${item.color.split(' ').slice(1).join(' ')}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Why Choose Us?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14">
              A decade of delivery excellence behind every testing engagement — built on trust, scale, and measurable outcomes.
            </motion.p>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.08 }} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.color.split(' ')[0]}`}>
                  <item.icon className={`w-5 h-5 ${item.color.split(' ').slice(1).join(' ')}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-200/60 via-blue-100/40 to-sky-100/50 dark:from-indigo-950/50 dark:via-blue-950/35 dark:to-sky-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to ship with confidence?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Looking for an experienced testing partner that brings deep functional expertise, AI-powered automation, and measurable outcomes? Our practice lead will respond within one business day.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("testing-services")}>
                Talk to a Testing Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TestingServices;
