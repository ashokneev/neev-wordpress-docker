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
  Wrench,
  Headphones,
  Code2,
  FileUp,
  MessageSquare,
  GraduationCap,
  Search,
  Gauge,
  Map,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  Users,
  Clock,
  UserCheck,
  BarChart3,
  ArrowRightLeft,
  Zap,
  DollarSign,
  Handshake,
  Target,
  Settings,
  Award,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContactForm } from "@/contexts/ContactFormContext";

const highlights = [
  {
    icon: Handshake,
    title: "Tailored Partnerships",
    desc: "Collaborate with top players like Oracle, SFDC, ServiceNow, Snowflake, and Mulesoft to get customized solutions.",
  },
  {
    icon: Target,
    title: "Strategic Alignment",
    desc: "Build roadmaps that sync your applications and infrastructure with your business objectives.",
  },
  {
    icon: Users,
    title: "Flexible Resource Model",
    desc: "Tap into fractional, highly skilled resources with our Named Resource Support model—all for a fixed monthly fee.",
  },
  {
    icon: Award,
    title: "Expert Leverage",
    desc: "Benefit from our strong alliances with OEMs to stay ahead with cutting-edge innovations.",
  },
];

const services = [
  {
    icon: Headphones,
    title: "Functional & Technical Support",
    desc: "Our experts deliver efficient functional and technical support, ensuring prompt resolution of potential issues to minimize business disruption.",
  },
  {
    icon: Settings,
    title: "Enhancement Requests",
    desc: "We assist with enhancements and implementing modifications to your existing applications to ensure they continue supporting your business goals.",
  },
  {
    icon: Code2,
    title: "Development & Bug Fixes",
    desc: "Our technical experts can quickly identify and mitigate bugs and errors while testing new functionalities to improve application performance.",
  },
  {
    icon: FileUp,
    title: "New Development Requests",
    desc: "We accept new application development requests/overhauling of existing apps and handle end-to-end app development.",
  },
  {
    icon: MessageSquare,
    title: "Service Requests Follow-up",
    desc: "We act as your liaison with application vendors and follow up on service requests to ensure timely resolution, allowing you to focus on core operations.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Our experts comprehensively train your team and provide the necessary knowledge and skills to help your team utilize the applications effectively.",
  },
];

const approach = [
  {
    icon: Search,
    title: "Assessment and Analysis",
    desc: "Conduct a comprehensive assessment and analysis of existing applications and infrastructure.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Optimize application performance for peak efficiency.",
  },
  {
    icon: Map,
    title: "Roadmap Development",
    desc: "Develop a customized roadmap to optimize the application management process.",
  },
  {
    icon: RefreshCw,
    title: "Agile Methodology",
    desc: "Follow agile methodology for flexibility, quick delivery, iteration, and continuous improvement.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    desc: "Identify opportunities for continuous improvement to ensure efficiency and effectiveness.",
  },
  {
    icon: Wrench,
    title: "Proactive Maintenance",
    desc: "Adopt a proactive approach to prevent downtime and fix issues.",
  },
  {
    icon: ShieldCheck,
    title: "Security and Compliance",
    desc: "Ensure compliance with industry regulations and implement best practices for security.",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Dedicated and Shared Service Support Model",
    desc: "SLA-based support with different support models, including resource augmentation, capacity augmentation, and managed/shared support services.",
  },
  {
    icon: Clock,
    title: "24/7 Dual Shore Support",
    desc: "We provide a dual shore support team with a 24/7 coverage option. Clients can also opt for weekend support for all time zones.",
  },
  {
    icon: UserCheck,
    title: "Named Resource Support Model",
    desc: "Our flexible Named Resource Support model optimizes cost and resource utilization and improves application availability.",
  },
  {
    icon: BarChart3,
    title: "Increased Predictability",
    desc: "Our data-driven solutions enhance business foresight with increased predictability in application performance and costs.",
  },
  {
    icon: ArrowRightLeft,
    title: "Seamless Transition",
    desc: "Our teams facilitate smooth business operations with seamless transitions during application upgrades and migrations.",
  },
  {
    icon: Zap,
    title: "Continuous Improvements",
    desc: "We drive your business forward through continuous application performance and functionality improvements.",
  },
  {
    icon: DollarSign,
    title: "Greater ROI",
    desc: "We maximize your technology investment with our application management services to help you achieve a higher ROI.",
  },
  {
    icon: TrendingUp,
    title: "Cost Reduction",
    desc: "Our certified experts boost your bottom line by strategically reducing application management costs without compromising quality.",
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

const ApplicationManagementServices = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-[700px] lg:h-[800px] bg-gradient-to-br from-indigo-100/80 to-blue-50/60 dark:from-indigo-950/50 dark:to-blue-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-indigo-100/90 to-blue-50/80 dark:from-indigo-950/80 dark:to-blue-950/60 backdrop-blur-2xl" />
      <StickyBreadcrumb className="bg-transparent backdrop-blur-none shadow-none border-none">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/#services">Services</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Application Management Services</BreadcrumbPage>
        </BreadcrumbItem>
      </StickyBreadcrumb>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.02]" />
          <AnimatedGridPattern
            className="opacity-40"
            numSquares={30}
            maxOpacity={0.3}
          />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Wrench className="w-4 h-4" />
              Application Management Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Take Control of Your{" "}
              <span className="text-primary">IT Applications</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed"
            >
              In today's fast-paced tech world, where IT applications are growing
              more complex and costly, Neev is here to help you optimize
              performance, reduce costs, and align your IT strategy with your
              business goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25"
                onClick={() => openContactForm("application-management-services")}
              >
                Talk to Our Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl"
                onClick={() =>
                  document
                    .querySelector("#services-ams")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Here's What We{" "}
                <span className="text-primary">Bring to the Table</span>
              </h2>
            </motion.div>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 hover:border-indigo-300/40 dark:hover:border-indigo-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AMS Services */}
      <section id="services-ams" className="py-20 relative overflow-hidden">
        <AnimatedGridPattern
          className="opacity-30"
          numSquares={20}
          maxOpacity={0.2}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <ParallaxSection speed={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Application Management{" "}
                <span className="text-primary">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Neev's AMS stack covers extensive support services to ensure the
                optimal functioning of your business applications.
              </p>
            </motion.div>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 hover:border-indigo-300/40 dark:hover:border-indigo-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Management{" "}
                <span className="text-primary">Approach</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A structured methodology from assessment to continuous
                improvement.
              </p>
            </motion.div>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 hover:border-indigo-300/40 dark:hover:border-indigo-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">
                    Phase {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedGridPattern
          className="opacity-30"
          numSquares={20}
          maxOpacity={0.2}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <ParallaxSection speed={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why <span className="text-primary">Choose Us</span>?
              </h2>
            </motion.div>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:shadow-[0_8px_30px_-12px] hover:shadow-indigo-400/25 dark:hover:shadow-indigo-500/20 hover:border-indigo-300/40 dark:hover:border-indigo-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-ams" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/60 via-blue-100/40 to-sky-100/50 pointer-events-none" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent dark:via-indigo-500/30" />
        <AnimatedGridPattern
          className="opacity-20"
          numSquares={15}
          maxOpacity={0.15}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <ParallaxSection speed={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Optimize Your{" "}
                <span className="text-primary">Applications</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let our experts help you take control of your IT applications
                with tailored management services.
              </p>
              <Button
                size="lg"
                className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25"
                onClick={() => openContactForm("application-management-services")}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationManagementServices;
