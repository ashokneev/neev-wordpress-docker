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
  Code2,
  Smartphone,
  Cloud,
  Palette,
  ShieldCheck,
  Cpu,
  Brain,
  Radio,
  Layers,
  Lightbulb,
  Search,
  CheckCircle,
  FlaskConical,
  Box,
  Rocket,
  Globe,
  Zap,
  Award,
  Users,
  Target,
  Clock,
  Settings,
  BarChart3,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContactForm } from "@/contexts/ContactFormContext";

const offerings = [
  { icon: Code2, title: "Web Applications", desc: "Feature-rich, highly interactive responsive web applications in MEAN, MERN, LAMP, JEE or Microsoft tech stack with stunning user experience." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Hybrid and native apps for both iOS and Android, built for performance and seamless user experiences." },
  { icon: Layers, title: "Legacy Modernization", desc: "Modernize legacy applications to a cost-effective platform. Re-engineer from monolithic to microservices-based architecture." },
  { icon: Cloud, title: "Cloud Engineering & DevOps", desc: "Build highly optimized technology architecture using cloud infrastructure and services. Leverage containerization to scale in and out." },
  { icon: Settings, title: "Cloud Native Applications", desc: "Cloud-first, configuration-driven applications with flexible architecture models for maximum agility." },
  { icon: Palette, title: "UI/UX Design", desc: "Create intuitive and consistent user interfaces that delight users and drive engagement across platforms." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Comprehensive testing — functionality, security, integration compatibility, load, and performance." },
  { icon: Cpu, title: "Core Engineering", desc: "Industry-specific solutions and greenfield projects using C, C++, Java, JEE, Python, and more." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Data-driven predictive decision processes by combining data engineering and data science capabilities." },
  { icon: Radio, title: "IoT Solutions", desc: "Bringing machines and processes together to improve operational efficiencies in prop-tech and manufacturing." },
];

const productSolutions = [
  { title: "Contract Lifecycle Management", desc: "Our extended engineering team collaborates with client product teams to understand business requirements and goals, offering full support and enhancements for future-ready solutions." },
  { title: "B2B eCommerce Platform", desc: "We partner with leading eCommerce startups in product implementation & re-engineering, leveraging cutting-edge technologies to drive business growth." },
  { title: "Cloud & Ops Automation", desc: "We collaborate with product companies to provide extended support for cloud infrastructure and ops automation, resolving incidents effectively with ML." },
  { title: "Smart Campus Ecosystem", desc: "B2B, B2C, and device integrations driving the digital transformation of real-estate establishments, aligned with Industry 4.0 principles." },
];

const approachPhases = [
  { number: "01", title: "Ideation + MVP", desc: "We identify customer pain points and generate creative solutions through brainstorming. We develop a simplified version to test market fit.", color: "from-primary/20 to-primary/5" },
  { number: "02", title: "Market Research", desc: "Our experts investigate market competition and gather insights through surveys and competitive analysis.", color: "from-secondary/20 to-secondary/5" },
  { number: "03", title: "Concept Validation", desc: "We perform detailed analysis, assess feasibility, and establish risk mitigation strategies.", color: "from-primary/15 to-secondary/10" },
  { number: "04", title: "Prototype", desc: "Our team transforms product ideas into demonstrable mini-models for idea validation and stakeholder buy-in.", color: "from-secondary/15 to-primary/10" },
  { number: "05", title: "Pricing & Market Testing", desc: "We conduct beta tests and pilot launches, devising monetization, positioning, and go-to-market strategies.", color: "from-primary/20 to-primary/5" },
  { number: "06", title: "Product Launch", desc: "Our experts execute market penetration, continuous feature enhancement, and expansion strategies.", color: "from-secondary/20 to-secondary/5" },
];

const whyChooseUs = [
  { icon: Target, title: "State-of-the-art Custom Solutions", desc: "Our engineering solutions are tailored to each client's unique requirements and business context." },
  { icon: Globe, title: "Global Reach", desc: "Our skilled experts address geographic and linguistic needs, delivering solutions across the globe." },
  { icon: Zap, title: "Rapid Release Cycles", desc: "We leverage solution accelerators to provide faster release cycles, ensuring cost-effectiveness and quality." },
  { icon: Award, title: "Skills & Expertise", desc: "Our team members are certified experts with extensive industry experience across diverse domains." },
  { icon: BarChart3, title: "Diverse Value Creation", desc: "We accommodate various maturities and competencies in value creation for maximum impact." },
  { icon: Users, title: "Agile Resource Management", desc: "Faster ramp-up and ramp-down based on demand, with optimal resource utilization for cost benefits." },
  { icon: Clock, title: "Predictable Delivery", desc: "We adopt proven delivery models, ensuring project success with on-time, on-budget execution." },
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

const ProductEngineering = () => {
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
          <BreadcrumbLink href="#">Services</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Product Engineering</BreadcrumbPage>
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
              <Rocket className="w-4 h-4" />
              NeevNxt — Product Engineering
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              Discover the Future of{" "}
              <span className="text-primary">Digital Innovation</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              The specialized product engineering division of Neev Systems. We design and build digital products that shape the future, forging enduring partnerships with fast-growing product partners to create robust IT solutions.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("product-engineering")}>
                Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl" onClick={() => document.querySelector("#offerings")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Offerings
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Custom Software Development Offerings */}
      <section id="offerings" className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Custom Software Development Offerings
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground text-lg">
                Our offerings encompass turnkey technology solutions including domain-specific SaaS, PaaS, and IaaS services designed to modernize and transform existing tech stacks.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {offerings.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.06 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-5">
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

      {/* Product Engineering Solutions */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={25} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Our Product Engineering Solutions
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Neev's end-to-end approach encompasses design, development, deployment, and post-launch support, delivering a seamless experience.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {productSolutions.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Engineering Approach */}
      <section className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Our Product Engineering Approach
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                A proven methodology from ideation to launch, ensuring every product reaches its full market potential.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {approachPhases.map((phase, idx) => (
              <motion.div key={phase.title} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.color}`} />
                <span className="text-3xl font-extrabold text-primary/15 absolute top-4 right-4">{phase.number}</span>
                <h3 className="font-semibold text-foreground mb-2 mt-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Why Choose Us?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14">
              With a startup mindset and enterprise-grade execution, we serve as your extended nearshore or offshore partner to accelerate project delivery.
            </motion.p>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, idx) => (
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

      {/* CTA */}
      <section id="contact-pe" className="py-20 bg-gradient-to-br from-indigo-200/60 via-blue-100/40 to-sky-100/50 dark:from-indigo-950/50 dark:via-blue-950/35 dark:to-sky-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Next Digital Product?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Talk to our experts and discover how NeevNxt can accelerate your product engineering journey from ideation to market launch.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("product-engineering")}>
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

export default ProductEngineering;
