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
  Database,
  BarChart3,
  Layers,
  FileSearch,
  ArrowRightLeft,
  PieChart,
  Eye,
  Settings,
  Shield,
  Zap,
  Users,
  Award,
  Clock,
  Brain,
  Lightbulb,
  Target,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useContactForm } from "@/contexts/ContactFormContext";

const solutions = [
  {
    icon: Database,
    title: "Data Warehousing",
    desc: "Centralize your data for real-time insights and reporting. Our solutions ensure optimized storage, seamless access, and integration with uncompromised quality, security, and compliance.",
  },
  {
    icon: Layers,
    title: "Data Modeling",
    desc: "Designing scalable models to streamline data flow, meet analytics needs, and ensure seamless data availability across your organization.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Unlock insights with advanced analytics solutions, from data preparation to modeling, analysis, and visualization, for smarter, data-driven decisions.",
  },
  {
    icon: ArrowRightLeft,
    title: "Data Ingestion",
    desc: "Seamlessly integrate data from any source or format. Our robust frameworks ensure data availability, accuracy, transformation, and real-time change capture.",
  },
  {
    icon: FileSearch,
    title: "Data Migration",
    desc: "Seamlessly transfer data to modern systems with secure analysis, mapping, cleansing, validation, transformation, and post-migration support to ensure data quality and integrity.",
  },
  {
    icon: Brain,
    title: "Data Mining",
    desc: "Leverage cutting-edge algorithms to extract valuable insights. Our solutions identify patterns, correlations, and anomalies, empowering data-driven strategies.",
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    desc: "Transform complex data into interactive dashboards and reports. Our experts craft clear, actionable visuals to highlight key insights and drive decisions.",
  },
];

const approach = [
  {
    icon: Target,
    title: "Strategy & Roadmap",
    desc: "Assess your current data infrastructure and processes, identify gaps and opportunities, and recommend solutions tailored to your business needs.",
  },
  {
    icon: Settings,
    title: "Architecture Design & Configuration",
    desc: "Design and configure Data Lake, Data Mart, Data Warehouse, and ETL models as per the required architecture aligned to your vision.",
  },
  {
    icon: Zap,
    title: "Infrastructure & Capacity Planning",
    desc: "Detailed analysis, feasibility assessment, and risk mitigation strategies to arrive at the right infrastructure planning for your needs.",
  },
  {
    icon: Layers,
    title: "Core Development",
    desc: "Data modeling, algorithms, data pipelines, MapReduce, transformation, custom code, integration, search indexing, and visualizations.",
  },
  {
    icon: Shield,
    title: "Governance",
    desc: "Ensure the quality and consistency of your data through metadata management, change management, and data quality controls.",
  },
  {
    icon: Clock,
    title: "Support & Maintenance",
    desc: "Ongoing support and maintenance services to ensure data solutions operate at peak performance and remain up-to-date.",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Flexible Engagement",
    desc: "We work with your internal teams and follow your standards and guidelines.",
  },
  {
    icon: Award,
    title: "Center of Excellence",
    desc: "We help you establish an analytics CoE to deliver innovative solutions and create reusable patterns.",
  },
  {
    icon: CheckCircle,
    title: "Consistent Reliability",
    desc: "Projects delivered on time, within budget, and with the highest quality standards.",
  },
  {
    icon: Eye,
    title: "Diverse Industry Experience",
    desc: "Years of industry experience delivering best-in-class data and analytics services for business growth.",
  },
  {
    icon: Zap,
    title: "Agile Delivery Model",
    desc: "Swiftly pivot and adjust to changes in project scope, timelines, and requirements.",
  },
  {
    icon: Lightbulb,
    title: "Customer-Centric Approach",
    desc: "Tailored technical stack and engagement model suited to your unique requirements.",
  },
  {
    icon: Brain,
    title: "Leading Technologies",
    desc: "Certified Snowflake, AWS, Azure, Incorta and other relevant Data Analytics and BI professionals.",
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

const DataAnalytics = () => {
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
          <BreadcrumbPage>Data & Analytics</BreadcrumbPage>
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
              <BarChart3 className="w-4 h-4" />
              Data & Analytics Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Unlock the True Potential of Your{" "}
              <span className="text-primary">Business Data</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed"
            >
              Leverage industry-leading business intelligence & advanced
              analytics technologies to ingest, transform, and visualize data.
              Take crucial revenue-impacting business decisions confidently.
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
                onClick={() => openContactForm("data-analytics")}
              >
                Talk to an Expert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl"
                onClick={() =>
                  document
                    .querySelector("#solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Our Solutions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <ParallaxSection speed={0.15}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Neev Systems, we are committed to continuous learning and
                expanding our expertise in data and analytics. No matter where
                you are in your journey to become data-driven, we can support
                you in achieving your business goals. Our services span across
                strategy, design, build, as well as ongoing operation and
                support.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Our comprehensive approach helps enterprises connect all company
                data sources into a single platform and discover new insights
                that can enhance the bottom line.
              </p>
            </motion.div>
          </ParallaxSection>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 relative overflow-hidden">
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
                Our Data & Analytics{" "}
                <span className="text-primary">Solutions</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A wide range of solutions to help organizations harness the
                power of their data and extract valuable insights.
              </p>
            </motion.div>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solutions.map((item, i) => (
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
                Our Data & Analytics{" "}
                <span className="text-primary">Approach</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A structured methodology from strategy to ongoing support.
              </p>
            </motion.div>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Why <span className="text-primary">Choose Us</span>
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
      <section id="contact-da" className="py-20 relative overflow-hidden">
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
                Ready to Become{" "}
                <span className="text-primary">Data-Driven</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let our experts help you harness the full power of your data
                with tailored analytics solutions.
              </p>
              <Button
                size="lg"
                className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25"
                onClick={() => openContactForm("data-analytics")}
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

export default DataAnalytics;
