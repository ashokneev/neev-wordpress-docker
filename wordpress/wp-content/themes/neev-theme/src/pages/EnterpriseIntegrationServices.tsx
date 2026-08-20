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
  Database,
  Clock,
  Scale,
  Users,
  Link2,
  Search,
  ArrowUpDown,
  Code2,
  Settings,
  Wrench,
  Shield,
  Cpu,
  Award,
  Handshake,
  Lightbulb,
  Target,
  CheckCircle,
  Globe,
  Network,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParallaxSection from "@/components/ParallaxSection";
import { useContactForm } from "@/contexts/ContactFormContext";

const achievements = [
  { icon: Zap, title: "Enhanced Efficiency", desc: "Streamline business processes, reduce manual effort, and minimize errors to boost productivity and lower operational costs with our enterprise integration services.", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  { icon: Database, title: "Unified Data Access", desc: "Integrate apps across your enterprise to achieve seamless data sharing between disparate systems for improved decision-making and easy access to crucial information.", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { icon: Clock, title: "Faster Time-to-Market", desc: "Connect applications and automate processes to quickly adapt to new market demands and stay competitive.", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  { icon: Scale, title: "Scalability & Flexibility", desc: "Leverage integration solutions for customizable and scalable integration services that adapt to your business needs.", color: "bg-purple-500/15 text-purple-600 dark:text-purple-400" },
  { icon: Users, title: "Improved Collaboration", desc: "Break down silos to foster better communication and decision-making between departments, teams, and external partners.", color: "bg-pink-500/15 text-pink-600 dark:text-pink-400" },
  { icon: Link2, title: "Integrate Disjointed Systems", desc: "Seamlessly connect to multiple systems across various platforms and allow the components to function as a whole.", color: "bg-teal-500/15 text-teal-600 dark:text-teal-400" },
];

const techPartners = [
  { title: "MuleSoft", desc: "A lightweight Java-based Enterprise Service Bus and Gartner-recognized leader for on-premise integration suites and PaaS offerings through the Cloud hub.", icon: Network, color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { title: "Dell Boomi", desc: "A 100% native cloud & low-code integration (iPaaS) platform that helps organizations modernize their IT architecture quickly and efficiently.", icon: Cpu, color: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
  { title: "Oracle", desc: "Comprehensive application integration solutions including iPaaS (Integration Cloud) and SaaS (Fusion Middleware) with tools for identity management and BI reporting.", icon: Globe, href: "/technologies/oracle", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
  { title: "SnapLogic", desc: "iPaaS providing cloud combination products (low-code/no-code) to enable users to integrate cloud data and applications with on-premise business processes.", icon: Link2, color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400" },
];

const services = [
  { icon: Search, title: "Consulting", desc: "Assess business requirements, recommend best-fit integration solutions, and create a strategic integration roadmap to ensure a successful implementation.", color: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400" },
  { icon: ArrowUpDown, title: "Migration & Upgrades", desc: "Successfully migrate from legacy systems, upgrade existing integration platforms, optimize performance, and improve security.", color: "bg-orange-500/15 text-orange-600 dark:text-orange-400" },
  { icon: Code2, title: "Implementation", desc: "Complete software development life cycle starting from development to application support.", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  { icon: Settings, title: "Custom Connectors Development", desc: "Create custom connectors to integrate existing systems and third-party applications, ensuring seamless data flow.", color: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400" },
  { icon: Wrench, title: "Infrastructure Management", desc: "Integrated approach to build, maintain and monitor the infrastructure.", color: "bg-sky-500/15 text-sky-600 dark:text-sky-400" },
  { icon: Shield, title: "Support & Maintenance", desc: "Ongoing support and maintenance services ensure optimal performance, minimal downtime and active issue resolution.", color: "bg-rose-500/15 text-rose-600 dark:text-rose-400" },
  { icon: Network, title: "API-Led Connectivity", desc: "Design and develop APIs to simplify data exchange between applications, accelerate innovation, and enhance customer experiences.", color: "bg-teal-500/15 text-teal-600 dark:text-teal-400" },
];

const whyChooseUs = [
  { icon: Target, title: "Agile Delivery Model", desc: "Our flexible approach enables us to swiftly pivot and adjust to changes in project scope, timelines, and requirements.", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
  { icon: CheckCircle, title: "Governance & Quality Assurance", desc: "We ensure quality and control throughout the project lifecycle by conducting rigorous implementation reviews and health checks.", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  { icon: Award, title: "Center of Excellence", desc: "We leverage solution accelerators to provide faster release cycles, ensuring cost-effectiveness and unmatched quality standards.", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  { icon: Settings, title: "Managed Services", desc: "We follow an automated pattern-based build and deployment and provide L1, L2, and L3 support post-implementation.", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { icon: Lightbulb, title: "Expertise in Leading Technologies", desc: "Our certified MuleSoft, Oracle and Dell Boomi professionals deliver tailored enterprise integration solutions.", color: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400" },
  { icon: Clock, title: "Consistent Reliability", desc: "We complete projects on time, within budget, and with the highest quality standards, ensuring a smooth and efficient integration.", color: "bg-purple-500/15 text-purple-600 dark:text-purple-400" },
  { icon: Handshake, title: "Trusted Partnerships", desc: "We build long-lasting client relationships rooted in trust, transparency, and value creation.", color: "bg-pink-500/15 text-pink-600 dark:text-pink-400" },
  { icon: Zap, title: "Commitment to Efficiency & Excellence", desc: "Our focus on innovation allows us to streamline processes, reduce costs, and improve client outcomes.", color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400" },
];

const EnterpriseIntegrationServices = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Full gradient backdrop covering navbar + breadcrumb + hero area */}
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
          <BreadcrumbPage>Enterprise Integration Services</BreadcrumbPage>
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
              <Network className="w-4 h-4" />
              Enterprise Integration Services
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
              Build a{" "}
              <span className="text-primary">Connected Enterprise</span>{" "}
              With Seamless Integration
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Our strategic implementation and advisory services facilitate seamless integration between apps in your IT stack, providing real-time and consistent data views across systems and applications. We design, implement, and manage customized integration solutions to unlock the full potential of your IT ecosystem.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("enterprise-integration-services")}>
                Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl" onClick={() => document.querySelector("#what-we-achieve")?.scrollIntoView({ behavior: "smooth" })}>
                What We Deliver
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What We Help You Achieve */}
      <section id="what-we-achieve" className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                We Help You Achieve
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground text-lg">
                By leveraging industry-leading integration platforms and best practices, we help you build state-of-the-art integrations through agile delivery models and reusable integration patterns.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((item, idx) => (
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

      {/* Technology Partners */}
      <section className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={25} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Our Integration Technology Partners
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We specialize in MuleSoft, Oracle Integration Services, Dell Boomi & SnapLogic for providing best-in-class integration services.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {techPartners.map((partner, idx) => {
              const Wrapper = partner.href ? motion.a : motion.div;
              return (
                <Wrapper key={partner.title} {...(partner.href ? { href: partner.href } : {})} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl border border-transparent hover:border-indigo-300/40 dark:hover:border-indigo-400/30 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 transition-all duration-300 p-6 flex flex-col items-center text-center group cursor-pointer no-underline">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:opacity-80 transition-colors ${partner.color.split(' ')[0]}`}>
                    <partner.icon className={`w-7 h-7 ${partner.color.split(' ').slice(1).join(' ')}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{partner.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{partner.desc}</p>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gradient-to-br from-indigo-100/70 to-blue-100/50 dark:from-indigo-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Seamless & Secure Integration Services
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Create a connected enterprise with our comprehensive suite of integration services.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((item, idx) => (
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
              Leveraging our technical proficiency, adaptability, and dependability, we help streamline enterprise integrations for improved collaboration and data exchange.
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
      <section id="contact-eis" className="py-20 bg-gradient-to-br from-indigo-200/60 via-blue-100/40 to-sky-100/50 dark:from-indigo-950/50 dark:via-blue-950/35 dark:to-sky-950/30 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Connect Your Enterprise?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Talk to our experts and discover how we can streamline your integrations with tailored enterprise integration services.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("enterprise-integration-services")}>
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

export default EnterpriseIntegrationServices;
