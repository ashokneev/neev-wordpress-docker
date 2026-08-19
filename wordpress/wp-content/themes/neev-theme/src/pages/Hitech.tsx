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
  Cpu,
  Zap,
  Clock,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  Workflow,
  BarChart3,
  LineChart,
  Truck,
  Users,
  Settings,
  Database,
  Lightbulb,
  Rocket,
  Heart,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import IndustryNewsSection from "@/components/IndustryNewsSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContactForm } from "@/contexts/ContactFormContext";
import CustomerLogoSection from "@/components/CustomerLogoSection";
import f5Logo from "@/assets/customers/f5.png";
import gdtLogo from "@/assets/customers/general-datatech.svg";
import genesysLogo from "@/assets/customers/genesys.png";
import icertisLogo from "@/assets/customers/icertis.svg";
import lenovoLogo from "@/assets/customers/lenovo.png";
import logitechLogo from "@/assets/customers/logitech.png";
import onetrustLogo from "@/assets/customers/onetrust.png";
import unityLogo from "@/assets/customers/unity.png";
import upworkLogo from "@/assets/customers/upwork.png";
import viewLogo from "@/assets/customers/view.svg";

const hitechCustomers = [
  { src: f5Logo, alt: "F5" },
  { src: gdtLogo, alt: "General Datatech" },
  { src: genesysLogo, alt: "Genesys" },
  { src: icertisLogo, alt: "Icertis" },
  { src: lenovoLogo, alt: "Lenovo" },
  { src: logitechLogo, alt: "Logitech" },
  { src: onetrustLogo, alt: "OneTrust" },
  { src: unityLogo, alt: "Unity" },
  { src: upworkLogo, alt: "Upwork" },
  { src: viewLogo, alt: "View Inc." },
];

const weHelpYouAchieve = [
  { icon: Lightbulb, title: "Agility & Innovation", desc: "Our product engineering solutions foster an environment of agility and innovation, needed to design, build, and deploy modern digital solutions at speed." },
  { icon: Rocket, title: "Faster Time to Market", desc: "With streamlined processes and expertise across diverse technologies, we help you reach the market faster and stay ahead of the competition." },
  { icon: Heart, title: "Improved Customer Experience", desc: "Leveraging digital platforms and customer data, we help you craft superior customer experiences that foster engagement and lasting loyalty." },
  { icon: BarChart3, title: "Informed Decision-Making", desc: "Our solutions convert raw data into actionable insights, empowering data-driven decision-making across every function." },
  { icon: Workflow, title: "Improved Business Processes & Operational Efficiency", desc: "We help you streamline and improve visibility across supply chains, financial processes, procurement-to-pay, IT support, reporting, and asset management lifecycles." },
  { icon: ShieldCheck, title: "Enhanced Regulatory Compliance", desc: "Implement regulatory policies and improve compliance posture across global jurisdictions and evolving standards." },
];

const solutions = [
  { icon: Truck, title: "Supply Chain Optimization", desc: "Using state-of-the-art digital tools, we optimize supply chain processes with real-time tracking and risk management — improving efficiency, optimizing resource allocation, and building robust, resilient supply chains." },
  { icon: UserCheck, title: "Customer Experience", desc: "Improve the customer journey with an all-inclusive customer data platform for consolidation and real-time analysis. Insights enable personalized, responsive experiences that strengthen client relationships." },
  { icon: Users, title: "Human Capital Management", desc: "Digitize HCM processes for the high-tech industry to streamline and automate HR-specific tasks. Automated workflows let your team focus on core business priorities and elevate productivity." },
  { icon: Settings, title: "ERP & Business Operations", desc: "Deploy digital solutions that automate and elevate critical back-end operations: financial management, billing, inventory, MRP, budgeting, and procurement for streamlined outcomes." },
  { icon: TrendingUp, title: "Sales", desc: "Leverage data analytics and predictive modeling to discover new sales opportunities, forecast market demand, and optimize resource distribution to bolster customer outreach." },
  { icon: BarChart3, title: "Business Intelligence", desc: "Synchronize data from multiple sources into reports, dashboards, and visualizations — enabling real-time KPI tracking, trend identification, and proactive, data-driven decisions." },
];

const howWeHelp = [
  { title: "Application & Data Integration", desc: "Streamline data across accounts, contacts, partners, and customers for a unified enterprise view.", href: "/services/enterprise-integration-services" },
  { title: "ITSM & Security", desc: "Enable rapid response to security threats, effective risk management, data protection, and regulatory compliance.", href: "/services/it-security-transformation" },
  { title: "Application Management Services", desc: "Ensure smooth operations, monitor performance, and address issues promptly so teams can focus on core competencies.", href: "/services/application-management-services" },
  { title: "Data Analytics", desc: "Identify patterns and derive actionable insights for optimized supply chain management and accelerated R&D.", href: "/services/data-analytics" },
  { title: "Enterprise Application Services", desc: "Enhance operational efficiency, streamline workflows, and improve collaboration across departments.", href: "/services/enterprise-application-services" },
  { title: "Product Engineering", desc: "Accelerate the development of digital products and solutions with the latest technologies and agile methodologies.", href: "/services/product-engineering" },
];

const neevAdvantage = [
  { value: "15+", label: "Fortune 1000 Companies" },
  { value: "4.5/5", label: "Customer Satisfaction Rating" },
  { value: "25+", label: "Projects Delivered" },
  { value: "200+", label: "Employees" },
  { value: "100%", label: "Customers find our services deliver good value" },
  { value: "3+", label: "Years of Average Customer Tenure" },
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

const Hitech = () => {
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
          <BreadcrumbPage>Hi-tech</BreadcrumbPage>
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
              <Cpu className="w-4 h-4" />
              Hi-tech
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              Achieve Digital Excellence,{" "}
              <span className="text-primary">Power Innovation</span>, and Accelerate Growth
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              The modern business landscape is evolving rapidly with new innovations in IT and business applications. We help high-tech organizations renovate existing systems, optimize productivity, create new revenue streams, and ensure compliance — all while building a connected, AI-led digital enterprise.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("hi-tech")}>
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
        logos={hitechCustomers}
        description="Leading hi-tech innovators partner with Neev Systems to power their digital enterprise."
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
                Outcomes that matter for hi-tech enterprises building the next generation of products and platforms.
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

      {/* Solutions & Services */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={4} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Solutions & Services
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive solutions designed for the unique demands of the hi-tech industry.
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
                Our service offerings address every layer of digital transformation for hi-tech enterprises.
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
      <IndustryNewsSection industry="hitech" />

      {/* CTA */}
      <section id="contact-hitech" className="py-20 bg-gradient-to-br from-indigo-200/60 via-blue-100/40 to-sky-100/50 dark:from-indigo-950/50 dark:via-blue-950/35 dark:to-sky-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Power Your Hi-tech Enterprise?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Talk to our experts and discover how we drive digital transformation for hi-tech innovators.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("hi-tech")}>
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

export default Hitech;