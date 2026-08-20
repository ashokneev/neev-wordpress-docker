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
  Shield,
  Zap,
  Award,
  Users,
  Clock,
  Globe,
  Settings,
  TrendingUp,
  Lightbulb,
  FlaskConical,
  BarChart3,
  Truck,
  FolderKanban,
  ShoppingCart,
  Brain,
  Layers,
  Headphones,
  TestTube,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContactForm } from "@/contexts/ContactFormContext";

const oracleLogo = "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg";

const phases = [
  {
    number: "1",
    title: "Planning & Assessment",
    color: "from-red-500/20 to-red-500/5",
    items: [
      { title: "Business Case Creation", desc: "Determine the feasibility, potential benefits, risks, and roadmap for your Oracle initiatives." },
      { title: "Business Process Reengineering", desc: "Identify inefficiencies and develop solutions for process automation to maximize the value of your enterprise applications." },
      { title: "Proof of Concept", desc: "Test and validate the functionality and effectiveness of the proposed solution in a controlled environment." },
      { title: "Cloud Migration Assessment", desc: "An in-depth analysis of the current IT and application landscape to determine which apps can be migrated to the cloud and which should remain on-premises." },
    ],
  },
  {
    number: "2",
    title: "Implementation",
    color: "from-orange-500/20 to-orange-500/5",
    items: [
      { title: "Implementations & Global Rollouts", desc: "End-to-end support for the entire implementation process, including project planning, configuration, customization, testing, and deployment." },
      { title: "Application Upgrades", desc: "Modernize and upgrade your Oracle applications to leverage the latest capabilities and features." },
      { title: "Cloud Migrations", desc: "Seamlessly migrate workloads from on-premise to Oracle Cloud environments with minimal disruption." },
      { title: "Enterprise Systems Integrations", desc: "Connect your Oracle applications with other enterprise systems for unified, streamlined workflows." },
      { title: "Accelerators & Customizations", desc: "Pre-built accelerators and tailored customizations to speed up deployment and meet unique business needs." },
      { title: "Data Migrations", desc: "Secure, efficient data migration ensuring data integrity and continuity across platforms." },
    ],
  },
  {
    number: "3",
    title: "Support & Operations",
    color: "from-amber-500/20 to-amber-500/5",
    items: [
      { title: "Support", desc: "Ongoing support for upgrades as well as implementation features available in new releases." },
      { title: "Application Management Services", desc: "Proactive 24×7 management of enterprise app environments, ensuring high availability, security, and performance." },
      { title: "End User Training", desc: "Custom-fit training for maximum value extraction from enterprise apps, empowering teams with essential skills and knowledge." },
    ],
  },
  {
    number: "4",
    title: "Optimize & Innovate",
    color: "from-red-500/15 to-orange-500/10",
    items: [
      { title: "New Module Value Identification", desc: "Analyzing and integrating valuable new features in existing enterprise applications for optimal business growth." },
      { title: "Transformation Technology Evaluation", desc: "Recommending and implementing AI, IoT, and Blockchain use cases to optimize and transform business processes, including ERP, CRM, and HCM." },
    ],
  },
];

const aiDomains = [
  { icon: BarChart3, title: "Finance", desc: "AI predicts risks before they arise, while GenAI simplifies complex financial reports into clear, actionable insights.", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
  { icon: Truck, title: "Supply Chain", desc: "Supply chains adapt in real-time with AI-driven demand forecasting, and GenAI enhances supplier recommendations and negotiations.", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400" },
  { icon: FolderKanban, title: "Project Management", desc: "AI-powered risk assessment and resource optimization, while GenAI automates project proposals and reporting.", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  { icon: ShoppingCart, title: "Procurement", desc: "More efficient procurement with AI-driven spend analysis and GenAI-powered contract summarization.", color: "bg-rose-500/15 text-rose-600 dark:text-rose-400" },
];

const whyChooseUs = [
  { icon: Lightbulb, title: "Innovation Hub", desc: "Pre-built accelerators for cloud assessment, migration & co-existence, testing, and training to quickly deploy Oracle Cloud Solutions.", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  { icon: Headphones, title: "Dedicated & Shared Support Model", desc: "SLA-based support with different models including resource augmentation, capacity augmentation, managed and shared support services.", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { icon: Clock, title: "24/7 Dual Shore Support", desc: "Dual shore support team with 24/7 coverage and optional weekend support for all time zones.", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  { icon: Layers, title: "Expertise in Seamless Integrations", desc: "Extensive experience delivering end-to-end integrations using Oracle, ServiceNow, MuleSoft, Dell Boomi, and Web Services.", color: "bg-purple-500/15 text-purple-600 dark:text-purple-400" },
  { icon: Award, title: "Certified Oracle Experts", desc: "Deep expertise in Oracle Fusion, Oracle Cloud, and AI-driven applications.", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
  { icon: Users, title: "Strong OEM Relationships", desc: "Strategic partnerships with Oracle, SFDC, and ServiceNow ensure cutting-edge implementations.", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400" },
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

const Oracle = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[700px] lg:h-[800px] bg-gradient-to-br from-red-100/80 to-orange-50/60 dark:from-red-950/50 dark:to-orange-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-red-100/90 to-orange-50/80 dark:from-red-950/80 dark:to-orange-950/60 backdrop-blur-2xl" />
      <StickyBreadcrumb className="bg-transparent backdrop-blur-none shadow-none border-none">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Technologies</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Oracle</BreadcrumbPage>
        </BreadcrumbItem>
      </StickyBreadcrumb>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <AnimatedGridPattern numSquares={30} maxOpacity={0.12} duration={3} className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-wave-float" />
          <div className="absolute bottom-10 -right-32 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-wave-float-reverse" />
        </motion.div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Certified Oracle Partner
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
                Streamline your Business Operations with{" "}
                <span className="text-primary">Industry-Leading Oracle Partner</span>{" "}Experts
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                As a certified Oracle Partner, we specialize in turning complex Oracle solutions into streamlined, high-performing systems. Our mission? To help your business run smoother, faster, and smarter.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("oracle")}>
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
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/70 dark:bg-white/90 backdrop-blur-xl border border-red-200/40 dark:border-red-400/20 shadow-[0_20px_60px_-20px] shadow-red-500/25 flex items-center justify-center p-12">
                <img src={oracleLogo} alt="Oracle logo" className="w-full h-auto max-h-32 object-contain" loading="lazy" />
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-red-400/15 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Best-in-Class Services */}
      <section className="py-20 bg-gradient-to-br from-red-100/70 to-orange-100/50 dark:from-red-950/40 dark:to-orange-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Best-in-Class Oracle Services
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground text-lg">
                Whether you're looking to enhance customer experiences, streamline operations, or drive digital transformation, we've got the skills and the know-how to make it happen.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Settings, title: "Tailored Solutions", desc: "Expert guidance to optimize your Oracle environment, from SaaS to PaaS to IaaS.", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
              { icon: Globe, title: "End-to-End Support", desc: "From planning to implementation and ongoing support, our team is with you every step of the way.", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400" },
              { icon: Award, title: "Unmatched Expertise", desc: "Our Oracle specialists excel in E-Business Suite, Oracle Cloud, and Enterprise Performance Management ensuring your systems work in harmony.", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
            ].map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
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

      {/* 360° Oracle Strategy */}
      <section id="strategy" className="py-20 bg-gradient-to-br from-orange-100/60 to-amber-50/50 dark:from-orange-950/40 dark:to-amber-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={25} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Our 360° Oracle Strategy
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Right from business case creation, implementation, integration, customization, and support services — our expansive range of Oracle services are personalized to help our clients streamline their business processes, improve operational efficiencies, and reduce costs.
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

      {/* TaaS Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100/70 to-red-100/50 dark:from-amber-950/40 dark:to-red-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-80px" }} transition={{ duration: 0.7 }} className="glass-card rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center">
                  <TestTube className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Neev's TaaS</h2>
              </div>
              <p className="text-sm font-medium text-primary mb-4">Testing as a Service</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Say goodbye to challenges faced while patching Oracle cloud applications. Our comprehensive automated solution handles end-to-end testing, reducing costs by 30-40%.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { value: "200+", label: "Automated Test Scenarios" },
                  { value: "30-40%", label: "Cost Reduction" },
                  { value: "24/7", label: "Test Results Reports" },
                ].map((stat, idx) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="text-center p-4 rounded-xl bg-red-500/10 border border-border/30">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With over 200 automated test scenarios and reusable assets, we ensure enhanced test coverage and a faster patching process. Our Test Managers guide you through the entire journey, from identifying patches to obtaining production approval.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Oracle + AI */}
      <section className="py-20 bg-gradient-to-br from-rose-100/60 to-orange-100/40 dark:from-rose-950/40 dark:to-orange-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={4} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Reimagining Enterprise Operations with Oracle AI
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                AI and GenAI are transforming the way businesses operate, making processes smarter, faster, and more intuitive. We bring Oracle's AI capabilities to life, helping enterprises unlock real value.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {aiDomains.map((domain, idx) => (
              <motion.div key={domain.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl p-6 text-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${domain.color.split(' ')[0]}`}>
                  <domain.icon className={`w-6 h-6 ${domain.color.split(' ').slice(1).join(' ')}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{domain.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center text-primary font-semibold mt-10 text-lg max-w-3xl mx-auto">
            From intelligent automation to advanced data analytics, we ensure businesses stay ahead with AI-driven efficiency.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-orange-100/60 to-red-100/40 dark:from-orange-950/40 dark:to-red-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Why Choose Us?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14">
              At Neev Systems, we combine Oracle's AI capabilities with our deep industry knowledge to maximize business efficiency and ROI.
            </motion.p>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.1 }} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="glass-card rounded-2xl p-6">
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
      <section id="contact-oracle" className="py-20 bg-gradient-to-br from-red-200/60 via-orange-100/40 to-amber-100/50 dark:from-red-950/50 dark:via-orange-950/35 dark:to-amber-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Enterprise?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Talk to our Oracle experts and discover how we can streamline your business operations.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("oracle")}>
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

export default Oracle;
