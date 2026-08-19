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
  Landmark,
  UserCheck,
  Zap,
  ShieldCheck,
  TrendingUp,
  Workflow,
  BarChart3,
  Users,
  Settings,
  Database,
  ShoppingCart,
  LineChart,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import IndustryNewsSection from "@/components/IndustryNewsSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContactForm } from "@/contexts/ContactFormContext";
import CustomerLogoSection from "@/components/CustomerLogoSection";
import mizuhoLogo from "@/assets/customers/mizuho.jpg";
import veritionLogo from "@/assets/customers/verition-fund.svg";

const bankingCustomers = [
  { src: mizuhoLogo, alt: "Mizuho" },
  { src: veritionLogo, alt: "Verition Fund" },
];

const weHelpYouAchieve = [
  { icon: UserCheck, title: "Customer Experience Transformation", desc: "Enhance customer engagement and satisfaction through personalized experiences, seamless omni-channel interactions, and self-service options that meet evolving expectations." },
  { icon: Zap, title: "Enhanced Operational Efficiency", desc: "Streamline processes across functions, automate workflows, and eliminate manual tasks — driving operational efficiency and meaningful cost savings." },
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Enable prompt reporting and auditing, reducing the risk of non-compliance. Navigate complex regulatory environments and ensure adherence to industry standards and data protection mandates." },
  { icon: TrendingUp, title: "Data-driven Decision-making", desc: "Leverage advanced analytics and real-time insights to make informed decisions, identify new opportunities, and optimize strategies across the business." },
];

const solutions = [
  { icon: UserCheck, title: "Customer Experience", desc: "Gain a comprehensive view of your customers, personalize interactions, and deliver exceptional experiences across multiple touchpoints." },
  { icon: Settings, title: "Streamline Financial Processes", desc: "Automate and optimize financial processes such as accounting, billing, and reporting — ensuring accuracy, efficiency, and compliance with a faster financial close." },
  { icon: Users, title: "Workforce for a Digital Future", desc: "Plan, manage, and optimize people processes from hire to retire — onboarding, retaining, engaging, performance management, and productivity — with our HCM solutions." },
  { icon: ShoppingCart, title: "Procurement", desc: "Optimize and streamline procurement processes, enabling financial institutions to achieve cost savings, enhance supplier relationships, and improve overall operational efficiency." },
  { icon: ShieldCheck, title: "IT & Security Transformation", desc: "Ensure the security and resilience of your IT infrastructure. Protect against cyber threats, ensure regulatory compliance, and enhance data privacy." },
  { icon: BarChart3, title: "Data & Analytics", desc: "Leverage advanced analytics and reporting capabilities to gain insights into customer behavior, risk profiles, and market trends — enabling data-driven decision-making." },
];

const howWeHelp = [
  { title: "Application & Data Integration", desc: "Streamline data across accounts, contacts, counterparties, and customers for a unified enterprise view.", href: "/services/enterprise-integration-services" },
  { title: "Enterprise Application Services", desc: "Enhance operational efficiency, streamline workflows, and improve collaboration across departments.", href: "/services/enterprise-application-services" },
  { title: "ITSM & Security", desc: "Enable rapid response to security threats, effective risk management, data protection, and regulatory compliance.", href: "/services/it-security-transformation" },
  { title: "Application Management Services", desc: "Ensure smooth operations, monitor performance, and address issues promptly so teams can focus on core competencies.", href: "/services/application-management-services" },
  { title: "Data Analytics", desc: "Identify patterns and derive actionable insights for risk management, customer intelligence, and growth.", href: "/services/data-analytics" },
  { title: "Product Engineering", desc: "Accelerate the development of digital products and platforms with the latest technologies and agile methodologies.", href: "/services/product-engineering" },
];

const neevAdvantage = [
  { value: "95%", label: "Client Retention" },
  { value: "4.5/5", label: "Customer Satisfaction Rating" },
  { value: "25+", label: "Years of Digital Transformation" },
  { value: "15+", label: "Satisfied Enterprise Clients" },
  { value: "250+", label: "Information Technology Experts" },
  { value: "3+", label: "Years Avg. Customer Tenure" },
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

const BankingFinancialServices = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[700px] lg:h-[800px] bg-gradient-to-br from-indigo-100/80 to-blue-50/60 dark:from-indigo-950/50 dark:to-blue-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-indigo-100/90 to-blue-50/80 dark:from-indigo-950/80 dark:to-blue-950/60 backdrop-blur-2xl" />
      <StickyBreadcrumb className="bg-transparent backdrop-blur-none shadow-none border-none">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Industries</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Banking & Financial Services</BreadcrumbPage>
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
              <Landmark className="w-4 h-4" />
              Banking & Financial Services
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              Digital Transformation that{" "}
              <span className="text-primary">Propels Growth</span>{" "}in Financial Markets
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Neev combines technical and subject-matter expertise to deliver multi-channel, data-driven solutions for banking and financial services — simplifying and automating processes across investment management, pre-trade decision-making, and real-time insights.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("banking-financial-services")}>
                Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl" onClick={() => document.querySelector("#we-help")?.scrollIntoView({ behavior: "smooth" })}>
                Explore What We Do
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trusted By Industry Leaders */}
      <CustomerLogoSection
        logos={bankingCustomers}
        description="Leading financial institutions partner with Neev Systems to drive secure, data-driven transformation."
      />

      {/* We Help You Achieve */}
      <section id="we-help" className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                We Help You Achieve
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Outcomes that matter for banks, insurers, and investment firms competing in a rapidly evolving market.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {weHelpYouAchieve.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={4} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Our Solutions
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive solutions tailored to the unique demands of the banking and financial services industry.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solutions.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.1 }} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6">
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

      {/* How We Help */}
      <section className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                How We Help
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our service offerings address every layer of digital transformation for financial institutions.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howWeHelp.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
                <a href={item.href} className="block glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6 h-full hover:-translate-y-1 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                  <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Know More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Neev Advantage */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
              The Neev Advantage
            </motion.h2>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {neevAdvantage.map((item, idx) => (
              <motion.div key={item.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="text-center p-6 glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry News */}
      <IndustryNewsSection industry="banking-financial" />

      {/* CTA */}
      <section id="contact-banking" className="py-20 bg-gradient-to-br from-indigo-200/60 via-blue-100/40 to-sky-100/50 dark:from-indigo-950/50 dark:via-blue-950/35 dark:to-sky-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Financial Services Operations?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Talk to our experts and discover how we drive secure, compliant digital transformation for banks and financial institutions.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("banking-financial-services")}>
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

export default BankingFinancialServices;