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
  CheckCircle,
  HeartPulse,
  Zap,
  Award,
  Users,
  Clock,
  TrendingUp,
  BarChart3,
  Truck,
  ShieldCheck,
  Package,
  Brain,
  Settings,
  FlaskConical,
  UserCheck,
  Database,
  LineChart,
  Layers,
  Cpu,
  Workflow,
  Target,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import IndustryNewsSection from "@/components/IndustryNewsSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContactForm } from "@/contexts/ContactFormContext";
import CustomerLogoSection from "@/components/CustomerLogoSection";
import cepheidLogo from "@/assets/customers/cepheid.png";
import guardantHealthLogo from "@/assets/customers/guardant-health.png";
import nateraLogo from "@/assets/customers/natera.png";

const lifeSciencesCustomers = [
  { src: cepheidLogo, alt: "Cepheid" },
  { src: guardantHealthLogo, alt: "Guardant Health" },
  { src: nateraLogo, alt: "Natera" },
];

const keyUseCases = [
  { icon: BarChart3, title: "Financial Management", desc: "Streamline financial operations with automated reporting, budgeting, and compliance tracking tailored for life sciences." },
  { icon: Settings, title: "Manufacturing & Production Planning", desc: "Optimize production schedules, resource allocation, and batch management for pharmaceutical and biotech manufacturing." },
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Ensure adherence to FDA, EMA, and global regulatory standards with automated compliance monitoring and reporting." },
  { icon: Truck, title: "Supply Chain Optimization", desc: "Enable real-time tracking and proactive risk management across your entire supply chain network." },
  { icon: Package, title: "Demand Forecasting & Inventory", desc: "Minimize stockouts, reduce holding costs, and ensure timely availability of critical medical supplies." },
  { icon: Users, title: "Supplier Relationship Management", desc: "Strengthen supplier partnerships with transparent communication, performance tracking, and collaborative planning." },
  { icon: Target, title: "Track and Trace", desc: "End-to-end product traceability from raw materials to patient delivery, ensuring safety and compliance." },
  { icon: Brain, title: "Predictive Analytics", desc: "Leverage AI-driven demand planning to anticipate market shifts and optimize inventory positioning." },
  { icon: LineChart, title: "Data Analytics & Reporting", desc: "Transform large volumes of structured and unstructured data into actionable insights for better decision-making." },
  { icon: CheckCircle, title: "Compliance Monitoring", desc: "Continuous monitoring and automated reporting to maintain regulatory compliance across all operations." },
];

const weHelpYouAchieve = [
  { icon: Zap, title: "Improved Operational Efficiency", desc: "Streamline, optimize, and automate manual processes including supply chain, procurement, logistics, and distribution. Reduce administrative overhead and improve productivity." },
  { icon: Clock, title: "Faster Time-to-Market", desc: "Accelerate product development and launch cycles of new drugs and medical devices by leveraging modern collaboration and project management tools for R&D teams." },
  { icon: UserCheck, title: "Enhanced Customer Experience", desc: "Implement patient-centric solutions and portals for improved engagement, self-service options, and access to healthcare resources. Leverage analytics for personalized care." },
  { icon: TrendingUp, title: "Data-Driven Decision Making", desc: "Establish robust data analytics capabilities to derive actionable insights from large volumes of structured and unstructured data." },
  { icon: Workflow, title: "Synchronized Operations", desc: "Seamless application and data integration with internal teams, external partners, suppliers, and logistics providers for streamlined collaboration." },
  { icon: Cpu, title: "Agility & Innovation", desc: "Implement agile methodologies and DevOps practices to accelerate software development cycles and enhance collaboration between IT and business teams." },
];

const solutions = [
  { icon: Truck, title: "Supply Chain Optimization", desc: "Enable real-time tracking and proactive risk management. Improve demand forecasting to minimize stockouts, reduce holding costs, and ensure timely availability of critical supplies." },
  { icon: UserCheck, title: "Patient Experience", desc: "Implement a customer data platform to consolidate and analyze data from various sources, enabling personalized engagement strategies for healthcare professionals and patients." },
  { icon: Users, title: "Human Capital Management", desc: "Streamline and automate HR processes specific to the industry, including talent acquisition, onboarding, performance management, training, and payroll." },
  { icon: Settings, title: "ERP & Back-end Operations", desc: "Automate and enhance back-end business processes like financial management, billing, inventory, material resource planning, budgeting, procurement and more." },
  { icon: TrendingUp, title: "Sales Optimization", desc: "Leverage advanced analytics and predictive modeling to identify sales opportunities, forecast market demand, and optimize sales territories for healthcare relationships." },
  { icon: BarChart3, title: "Business Intelligence", desc: "Centralize data from various sources, transforming it into meaningful reports, dashboards, and visualizations. Enable real-time monitoring of KPIs for proactive decision-making." },
];

const howWeHelp = [
  { title: "Enterprise Application Services", desc: "Enhance operational efficiency, streamline workflows, and improve collaboration across departments.", href: "/services/enterprise-application-services" },
  { title: "Application Management Services", desc: "Ensure smooth operations, monitor performance, and address issues promptly, allowing teams to focus on core competencies.", href: "/services/application-management-services" },
  { title: "IT & Security Transformation", desc: "Enable quick response to security threats, effective risk management, data security, and regulatory compliance.", href: "/services/it-security-transformation" },
  { title: "Product Engineering", desc: "Accelerate the development of digital products and solutions with the latest technologies and agile methodologies.", href: "/services/product-engineering" },
  { title: "Data & Analytics", desc: "Identify patterns and derive actionable insights for improved patient care, optimized supply chain management, and accelerated R&D.", href: "/services/data-analytics" },
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

const LifeSciences = () => {
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
          <BreadcrumbPage>Life Sciences</BreadcrumbPage>
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
              <HeartPulse className="w-4 h-4" />
              Life Sciences & Healthcare
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              Digital Transformation for{" "}
              <span className="text-primary">Life Sciences</span>{" "}Organizations
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              The life sciences industry is at the forefront of groundbreaking discoveries and innovative treatments. We deliver solutions that empower organizations to improve patient outcomes, ensure regulatory compliance, and drive operational excellence.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("life-sciences")}>
                Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl" onClick={() => document.querySelector("#use-cases")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Use Cases
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trusted By Industry Leaders */}
      <CustomerLogoSection
        logos={lifeSciencesCustomers}
        description="Leading life sciences innovators partner with Neev Systems to accelerate their digital transformation."
      />

      {/* Key Use Cases */}
      <section id="use-cases" className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Use Cases
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground text-lg">
                Our expertise addresses the specific needs and challenges faced by life sciences organizations across the value chain.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {keyUseCases.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.06 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-5 flex flex-col items-center text-center">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Help You Achieve */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={25} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                We Help You Achieve
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Embracing digital transformation is no longer an option, but a necessity. We empower life sciences organizations to achieve their goals and shape the future of healthcare.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
      <section className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Our Solutions
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive solutions designed for the unique demands of the life sciences industry.
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
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={4} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                How We Help
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our comprehensive service offerings address every aspect of digital transformation for life sciences.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howWeHelp.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
                <a href={item.href} className="block glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6 h-full hover:-translate-y-1 hover:border-primary/15 transition-all duration-500 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <FlaskConical className="w-5 h-5 text-primary" />
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
      <section className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
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
      <IndustryNewsSection industry="life-sciences" />

      {/* CTA */}
      <section id="contact-lifesciences" className="py-20 bg-gradient-to-br from-indigo-200/60 via-blue-100/40 to-sky-100/50 dark:from-indigo-950/50 dark:via-blue-950/35 dark:to-sky-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Life Sciences Operations?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Talk to our experts and discover how we can drive digital transformation for your organization.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("life-sciences")}>
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

export default LifeSciences;
