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
  Globe,
  Settings,
  TrendingUp,
  Layers,
  Headphones,
  Bot,
  Search,
  Eye,
  LayoutDashboard,
  PhoneCall,
  RefreshCw,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContactForm } from "@/contexts/ContactFormContext";

const serviceNowLogo = "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg";

const phases = [
  {
    number: "1",
    title: "Planning",
    color: "from-primary/20 to-primary/5",
    items: [
      {
        title: "Business Case Creation",
        desc: "Crafting detailed business cases that outline objectives, success metrics, potential risks, security considerations and compliance challenges.",
      },
      {
        title: "Business Process Reengineering",
        desc: "Optimizing existing processes to enhance efficiency, reduce costs, and maximize the value of enterprise applications.",
      },
      {
        title: "Proof of Concept",
        desc: "Validating proposed solutions in controlled environments to identify potential issues before full-scale implementation.",
      },
    ],
  },
  {
    number: "2",
    title: "Implementation",
    color: "from-secondary/20 to-secondary/5",
    items: [
      {
        title: "Implementations & Global Rollouts",
        desc: "Managing the entire process from project planning and configuration to customization, testing, and deployment.",
      },
      {
        title: "Cloud Migrations",
        desc: "Ensuring efficient migration of enterprise applications to the cloud, minimizing disruptions while enhancing scalability and flexibility.",
      },
      {
        title: "Enterprise Systems Integrations",
        desc: "Seamlessly integrating ServiceNow with existing systems to streamline operations and ensure data integrity.",
      },
      {
        title: "Customizations",
        desc: "Tailoring enterprise applications to align with your unique business requirements and processes.",
      },
      {
        title: "Data Migrations",
        desc: "Providing secure data migration services to ensure seamless transfers without data loss.",
      },
    ],
  },
  {
    number: "3",
    title: "Operations",
    color: "from-accent/30 to-accent/10",
    items: [
      {
        title: "Application Management Services",
        desc: "Delivering continuous monitoring, maintenance, and support to ensure optimal application performance.",
      },
      {
        title: "Support & Upgrades",
        desc: "Providing timely updates and enhancements to keep your systems current and efficient.",
      },
    ],
  },
  {
    number: "4",
    title: "Optimize & Innovate",
    color: "from-primary/15 to-secondary/10",
    items: [
      {
        title: "Continuous Improvement",
        desc: "Identifying areas for enhancement to boost efficiency and effectiveness across your ServiceNow environment.",
      },
      {
        title: "Adoption of Emerging Technologies",
        desc: "Integrating the latest technologies, such as Generative AI and AI Agents, to keep your organization at the forefront of innovation.",
      },
    ],
  },
];

const aiFeatures = [
  {
    icon: Zap,
    title: "AI-Driven Case Resolution",
    desc: "Automate case assignment based on priority, context, and agent skillset. Accelerate resolutions with real-time agent recommendations powered by Gen AI.",
    edge: "Our AI-powered workflows are custom-tailored to align with your unique processes, ensuring faster time-to-value and long-term scalability.",
  },
  {
    icon: LayoutDashboard,
    title: "Intelligent Agent Command Center",
    desc: "Centralized, AI-augmented workspace designed for faster resolutions. AI-powered case summarization cuts through complex issues, with cross-functional collaboration tools.",
    edge: "We customize ServiceNow's Agent Workspace to boost agent productivity by eliminating noise and surfacing only the most relevant, actionable insights.",
  },
  {
    icon: PhoneCall,
    title: "Connected Omnichannel Support",
    desc: "Consistent experience across chat, email, social, or phone without losing context. AI ensures seamless transitions between channels with real-time journey tracking.",
    edge: "We optimize ServiceNow's omnichannel capabilities to ensure 100% uptime and maximize customer satisfaction — even during high-traffic scenarios.",
  },
  {
    icon: Search,
    title: "Self-Service That Feels Personalized",
    desc: "AI-guided chatbots resolve routine inquiries. Personalized recommendations guide users to the right solutions faster with intelligent search capabilities.",
    edge: "We enhance ServiceNow's self-service design with custom UX improvements, ensuring higher adoption rates and reduced call volumes.",
  },
  {
    icon: Eye,
    title: "Predictive Intelligence",
    desc: "Proactively detect and resolve issues before they impact customers. Early detection systems anticipate problems with AI-powered recommendations for faster action.",
    edge: "We fine-tune ServiceNow's AI engine to learn from your data, improving accuracy over time and minimizing service disruptions.",
  },
  {
    icon: Bot,
    title: "AI Agents — Always On",
    desc: "Natural language processing ensures human-like interactions. Smart escalation rules route only complex cases to agents, with adaptive learning capabilities.",
    edge: "We create custom-built, branded AI Agents tailored to your business tone, ensuring on-brand service delivery 24/7.",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Certified ServiceNow Expertise",
    desc: "Proven track record delivering ServiceNow solutions to global enterprises with certified professionals.",
  },
  {
    icon: Settings,
    title: "Tailored Implementations",
    desc: "Implementations aligned to your business goals, ensuring ServiceNow delivers measurable ROI.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    desc: "Evolving with changing demands — faster resolutions, higher CSAT scores, and lower operational costs.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support Teams",
    desc: "Faster troubleshooting and ongoing innovation with dedicated support teams by your side.",
  },
];

const whyNeev = [
  {
    icon: Globe,
    title: "Comprehensive Digital Transformation",
    desc: "End-to-end enterprise IT solutions ensuring precision and quality in every project, addressing real-world business challenges.",
  },
  {
    icon: Layers,
    title: "Strategic Partnerships with Industry Leaders",
    desc: "Collaborations with Oracle, Salesforce, ServiceNow, Snowflake, and MuleSoft for customized, seamlessly integrated solutions.",
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    desc: "Consultative implementation with close collaboration to develop tailored solutions that deliver value and meet your specific requirements.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "Trusted by Fortune 1000 companies with multi-year relationships built on consistently delivering exceptional outcomes.",
  },
];

const ParallaxSection = ({
  children,
  speed = 0.3,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

const ServiceNow = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[700px] lg:h-[800px] bg-gradient-to-br from-emerald-100/80 to-green-50/60 dark:from-emerald-950/50 dark:to-green-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-emerald-100/90 to-green-50/80 dark:from-emerald-950/80 dark:to-green-950/60 backdrop-blur-2xl" />
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
          <BreadcrumbPage>ServiceNow</BreadcrumbPage>
        </BreadcrumbItem>
      </StickyBreadcrumb>

      {/* Hero with parallax */}
      <section ref={heroRef} className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <AnimatedGridPattern numSquares={30} maxOpacity={0.12} duration={3} className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-wave-float" />
          <div className="absolute bottom-10 -right-32 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-wave-float-reverse" />
        </motion.div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              >
                <Shield className="w-4 h-4" />
                Trusted ServiceNow Partner
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight"
              >
                Deliver Delightful Customer Experiences with{" "}
                <span className="text-primary">ServiceNow CSM</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                Streamline your workflows and elevate customer experiences with tailored ServiceNow solutions. Transform service delivery using Generative AI and AI Agents — driving faster resolutions, predictive insights, and automated workflows.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all"
                  onClick={() => openContactForm("servicenow")}
                >
                  Talk to an Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl"
                  onClick={() => {
                    const el = document.querySelector("#strategy");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
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
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/70 dark:bg-white/90 backdrop-blur-xl border border-emerald-200/40 dark:border-emerald-400/20 shadow-[0_20px_60px_-20px] shadow-emerald-500/25 flex items-center justify-center p-12">
                <img src={serviceNowLogo} alt="ServiceNow logo" className="w-full h-auto max-h-24 object-contain" loading="lazy" />
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-emerald-400/15 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Intro with parallax */}
      <section className="py-20 bg-gradient-to-br from-emerald-100/70 to-green-100/50 dark:from-emerald-950/40 dark:to-green-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                AI-Powered Customer Service Management
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                Managing customer service is evolving beyond traditional methods. With ServiceNow's AI-powered CSM, you can empower your teams with real-time data, sentiment analysis, and intelligent case handling to enhance both agent productivity and customer satisfaction. From strategy and implementation to continuous optimization, we ensure you leverage Gen AI and AI Agents to accelerate outcomes.
              </motion.p>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* 360° Strategy with staggered parallax cards */}
      <section id="strategy" className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={25} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-3"
              >
                Our 360° ServiceNow Strategy
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-muted-foreground text-lg max-w-3xl mx-auto"
              >
                Our comprehensive strategy ensures your organization maximizes the platform's capabilities at every stage — from planning through continuous innovation.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="space-y-12 max-w-5xl mx-auto">
            {phases.map((phase, phaseIdx) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: phaseIdx % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-80px" }}
                transition={{ duration: 0.7, delay: phaseIdx * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                    {phase.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pl-[52px]">
                  {phase.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ margin: "-50px" }}
                      transition={{ duration: 0.5, delay: itemIdx * 0.08 }}
                      className={`rounded-xl p-5 bg-gradient-to-br ${phase.color} border border-border/30`}
                    >
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

      {/* AI Features with parallax cards */}
      <section className="py-20 bg-gradient-to-br from-emerald-100/70 to-green-100/50 dark:from-emerald-950/40 dark:to-green-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <div className="text-center mb-14">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-3"
              >
                Revolutionizing Customer Service with AI
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-muted-foreground text-lg max-w-3xl mx-auto"
              >
                We combine deep ServiceNow expertise with cutting-edge Generative AI and AI Agent solutions to redefine customer service.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{feature.desc}</p>
                <div className="pt-3 border-t border-border/30">
                  <p className="text-xs font-medium text-primary mb-1">Neev's Edge</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.edge}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for CSM */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={4} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
            >
              Why Choose Neev Systems for ServiceNow CSM?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14"
            >
              We don't just implement ServiceNow — we ensure it delivers measurable ROI, helping you achieve faster resolutions, higher CSAT scores, and lower operational costs.
            </motion.p>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card rounded-2xl p-6"
              >
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

      {/* Why Neev Systems */}
      <section className="py-20 bg-gradient-to-br from-emerald-100/70 to-green-100/50 dark:from-emerald-950/40 dark:to-green-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
            >
              Why Neev Systems?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14"
            >
              Choosing the right partner for your digital transformation journey is crucial. Here's why Neev Systems stands out.
            </motion.p>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyNeev.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card rounded-2xl p-6"
              >
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

      {/* CTA with parallax */}
      <section id="contact-servicenow" className="py-20 bg-gradient-to-br from-emerald-200/60 via-green-100/40 to-teal-100/50 dark:from-emerald-950/50 dark:via-green-950/35 dark:to-teal-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Ready to Transform Your Customer Service?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
            >
              Talk to our ServiceNow experts and discover how AI-powered customer service management can drive smarter, faster outcomes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("servicenow")}>
                Talk to an Expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceNow;
