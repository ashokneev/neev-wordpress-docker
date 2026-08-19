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
  Brain,
  Layers,
  Headphones,
  BarChart3,
  Bot,
  MessageSquare,
  ShoppingCart,
  Code,
  Activity,
  Heart,
  Sparkles,
} from "lucide-react";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import salesforceLogo from "@/assets/salesforce-logo.png";
import { useContactForm } from "@/contexts/ContactFormContext";

const phases = [
  {
    number: "1",
    title: "Planning Phase",
    color: "from-blue-500/20 to-blue-500/5",
    items: [
      { title: "Business Case Creation", desc: "AI-driven analysis enhances the development of comprehensive business cases by identifying key trends, success metrics, and predictive risk factors." },
      { title: "Business Process Reengineering", desc: "AI-powered process optimization identifies bottlenecks, enhances efficiency, reduces costs, and maximizes Salesforce's intelligent automation capabilities." },
      { title: "Proof of Concept", desc: "AI-powered simulations validate proposed solutions in a controlled environment, identifying potential challenges before full-scale implementation." },
    ],
  },
  {
    number: "2",
    title: "Implementation Phase",
    color: "from-indigo-500/20 to-indigo-500/5",
    items: [
      { title: "Implementations & Global Rollouts", desc: "AI-assisted implementation streamlines project planning, configuration, and customization, reducing delays and improving efficiency." },
      { title: "Application Upgrades", desc: "AI-driven upgrade planning minimizes downtime, predicts potential disruptions, and optimizes the transition process." },
      { title: "Cloud Migrations", desc: "AI-powered analytics ensure seamless cloud migration with minimal disruption, enhanced scalability, and cost optimization." },
      { title: "Enterprise Systems Integrations", desc: "AI-driven insights optimize system integrations, automating data synchronization and improving operational efficiency." },
      { title: "Customizations", desc: "AI-enhanced Salesforce applications provide tailored solutions with intelligent automation and predictive analytics for unique business needs." },
      { title: "Data Migrations", desc: "AI-powered data mapping and cleansing ensure seamless, secure data transfers while maintaining integrity." },
    ],
  },
  {
    number: "3",
    title: "Operations Phase",
    color: "from-sky-500/20 to-sky-500/5",
    items: [
      { title: "Application Management Services", desc: "AI-driven monitoring ensures proactive 24×7 management of enterprise app environments, predicting and preventing issues before they occur." },
      { title: "End User Training", desc: "AI-powered learning tools provide personalized role-based training programs to maximize user adoption and efficiency." },
    ],
  },
  {
    number: "4",
    title: "Optimize & Innovate",
    color: "from-blue-500/15 to-indigo-500/10",
    items: [
      { title: "New Module Value Identification", desc: "AI-driven analytics assess and integrate valuable new Salesforce features for optimized business growth." },
      { title: "Transformation Technology Evaluation", desc: "AI, IoT, and Blockchain use cases are integrated to enhance ERP, CRM, and HCM systems, delivering predictive insights and automation-driven efficiencies." },
    ],
  },
];

const aiCapabilities = [
  { icon: TrendingUp, area: "Sales Cloud", capabilities: "Lead scoring, Opportunity Insights, Sales Forecasting, AI-powered Sales Assistant, Predictive Deal Scoring, Smart Follow-ups", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { icon: Headphones, area: "Service Cloud", capabilities: "Case routing, Knowledge article recommendations, Agent Assist, Automated customer responses, AI-driven Resolution Suggestions, Sentiment Analysis", color: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400" },
  { icon: MessageSquare, area: "Marketing Cloud", capabilities: "Audience segmentation, Campaign Performance Analysis, AI-powered Campaign Optimization, Smart Customer Targeting", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
  { icon: ShoppingCart, area: "Commerce Cloud", capabilities: "Product Recommendations, Search Optimization, Personalized AI Shopping Assistant, Dynamic Pricing Optimization", color: "bg-sky-500/15 text-sky-600 dark:text-sky-400" },
  { icon: Users, area: "Experience Cloud", capabilities: "Personalized content delivery, Enhanced knowledge base search, AI-powered Community Engagement, Predictive Content Surfacing", color: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400" },
  { icon: Code, area: "Platform (Apex, Flow)", capabilities: "Code completion, Error detection, Workflow & Code Generation from Natural Language, AI-powered Process Automation", color: "bg-purple-500/15 text-purple-600 dark:text-purple-400" },
  { icon: BarChart3, area: "Analytics Cloud", capabilities: "Predictive Analytics, Data visualization, Anomaly Detection, Automated Narrative Generation, Real-time Anomaly Detection", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
  { icon: Heart, area: "Health & Financial Services", capabilities: "Risk Assessment, Next best action recommendation, AI-powered Risk Monitoring, Smart Compliance Assistance", color: "bg-rose-500/15 text-rose-600 dark:text-rose-400" },
];

const agentforceMetrics = [
  { metric: "Lead-to-Quote Speed", before: "10x Faster", after: "15x Faster with AI-driven automation" },
  { metric: "Data Accuracy", before: "99%", after: "99.9% with AI-powered validation" },
  { metric: "Customer Response Time", before: "2x Faster", after: "3x Faster with AI-assisted routing" },
  { metric: "Decision-Making Speed", before: "24/7 Real-time sync", after: "AI-powered predictive insights" },
  { metric: "Operational Efficiency", before: "40% Reduction", after: "60% Reduction with AI automation" },
];

const whyChooseUs = [
  { icon: Lightbulb, title: "Innovation Hub with AI-Driven Accelerators", desc: "Pre-built accelerators with AI-powered automation for enhanced efficiency, predictive migration strategies, automated testing, and adaptive training models.", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
  { icon: Headphones, title: "AI-Enhanced Support Models", desc: "SLA-based AI-driven support with predictive resource augmentation, capacity planning automation, managed AI-assisted support, and self-learning chatbots.", color: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400" },
  { icon: Clock, title: "24/7 AI-Enabled Dual Shore Support", desc: "AI-driven anomaly detection and automated incident resolution with predictive insights, reducing unplanned downtime across all time zones.", color: "bg-sky-500/15 text-sky-600 dark:text-sky-400" },
  { icon: Layers, title: "AI-Optimized Seamless Integrations", desc: "Intelligent data mapping, automated API management, and real-time synchronization using Oracle, ServiceNow, MuleSoft, Dell Boomi, and Web Services.", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
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

const Salesforce = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[700px] lg:h-[800px] bg-gradient-to-br from-blue-100/80 to-indigo-50/60 dark:from-blue-950/50 dark:to-indigo-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-blue-100/90 to-indigo-50/80 dark:from-blue-950/80 dark:to-indigo-950/60 backdrop-blur-2xl" />
      <StickyBreadcrumb className="bg-transparent backdrop-blur-none shadow-none border-none">
        <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Technologies</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Salesforce</BreadcrumbPage></BreadcrumbItem>
      </StickyBreadcrumb>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <AnimatedGridPattern numSquares={30} maxOpacity={0.12} duration={3} className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
        <motion.div style={{ y: heroBgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-wave-float" />
          <div className="absolute bottom-10 -right-32 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-wave-float-reverse" />
        </motion.div>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted Salesforce Partner
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
                Unleash the Power of{" "}<span className="text-primary">Salesforce</span>{" "}— Smarter Automation. Deeper Insights.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                As a trusted Salesforce Partner, Neev Systems is committed to helping businesses unlock the full potential of Salesforce's enterprise solutions. Our expertise spans across industries, ensuring businesses leverage the latest AI-powered automation, predictive analytics, and intelligent customer engagement.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("salesforce")}>
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
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/70 dark:bg-white/90 backdrop-blur-xl border border-blue-200/40 dark:border-blue-400/20 shadow-[0_20px_60px_-20px] shadow-blue-500/25 flex items-center justify-center p-12">
                <img src={salesforceLogo} alt="Salesforce logo" className="w-full h-auto max-h-32 object-contain" loading="lazy" />
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-blue-400/15 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* AI Intro */}
      <section className="py-20 bg-gradient-to-br from-blue-100/70 to-indigo-100/50 dark:from-blue-950/40 dark:to-indigo-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                From Implementation to Optimization
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.15 }} className="text-muted-foreground text-lg">
                By leveraging Salesforce AI, including Einstein AI and Agentforce, businesses can automate workflows, gain predictive insights, and make data-driven decisions in real-time.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Brain, title: "Einstein AI Integration", desc: "Leverage Einstein AI for predictive analytics, intelligent recommendations, and automated insights across your Salesforce ecosystem.", color: "bg-blue-500/15 text-blue-600 dark:text-blue-400" },
              { icon: Bot, title: "Agentforce Powered", desc: "Revolutionary AI-powered solution that embeds intelligent automation and predictive analytics into every customer touchpoint.", color: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400" },
              { icon: Sparkles, title: "GenAI Capabilities", desc: "Harness generative AI for content creation, campaign optimization, code generation, and automated report narratives.", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
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

      {/* 360° Salesforce Strategy */}
      <section id="strategy" className="py-20 bg-gradient-to-br from-indigo-100/60 to-sky-50/50 dark:from-indigo-950/40 dark:to-sky-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={25} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Our 360° Salesforce Strategy
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                During the initial stage of our Salesforce AI-driven planning, we collaborate with clients to develop tailored solutions through business case creation, proof of concept, cloud assessments, and business process reengineering.
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

      {/* AgentForce Section */}
      <section className="py-20 bg-gradient-to-br from-sky-100/70 to-blue-100/50 dark:from-sky-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-80px" }} transition={{ duration: 0.7 }} className="glass-card rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">AgentForce</h2>
              </div>
              <p className="text-sm font-medium text-primary mb-4">Unlock Salesforce AI's Full Potential</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                AgentForce is an advanced AI-powered solution that revolutionizes your Salesforce experience by embedding intelligent automation and predictive analytics into every touchpoint.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-4">AI-Powered Business Impact</h3>
              <div className="space-y-3">
                {agentforceMetrics.map((row, idx) => (
                  <motion.div key={row.metric} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-blue-500/10 border border-border/30">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Metric</div>
                      <div className="text-sm font-semibold text-foreground">{row.metric}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Before</div>
                      <div className="text-sm text-muted-foreground">{row.before}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">With AgentForce</div>
                      <div className="text-sm font-medium text-primary">{row.after}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Salesforce AI Capabilities */}
      <section className="py-20 bg-gradient-to-br from-violet-100/60 to-blue-100/40 dark:from-violet-950/40 dark:to-blue-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={4} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.12}>
            <div className="text-center mb-14">
              <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Salesforce AI & GenAI Capabilities
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-3xl mx-auto">
                From intelligent automation to advanced analytics, we ensure businesses stay ahead with AI-driven efficiency across every Salesforce cloud.
              </motion.p>
            </div>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {aiCapabilities.map((cap, idx) => (
              <motion.div key={cap.area} initial={{ opacity: 0, y: 50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.08 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card rounded-2xl p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cap.color.split(' ')[0]}`}>
                  <cap.icon className={`w-6 h-6 ${cap.color.split(' ').slice(1).join(' ')}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cap.area}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.capabilities}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-100/60 to-indigo-100/40 dark:from-blue-950/40 dark:to-indigo-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={20} maxOpacity={0.08} duration={5} className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8">
          <ParallaxSection speed={0.15}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Why Neev Systems?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-14">
              We combine Salesforce's AI capabilities with deep industry knowledge to maximize business efficiency and ROI.
            </motion.p>
          </ParallaxSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ margin: "-60px" }} transition={{ duration: 0.6, delay: idx * 0.12 }} whileHover={{ y: -6, transition: { duration: 0.25 } }} className="glass-card rounded-2xl p-6">
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
      <section id="contact-salesforce" className="py-20 bg-gradient-to-br from-blue-200/60 via-indigo-100/40 to-sky-100/50 dark:from-blue-950/50 dark:via-indigo-950/35 dark:to-sky-950/30 relative overflow-hidden">
        <AnimatedGridPattern numSquares={15} maxOpacity={0.1} duration={4} className="[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]" />
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <ParallaxSection speed={0.1}>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Salesforce Experience?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Talk to our Salesforce experts and discover how AI-powered automation can drive smarter, faster business outcomes.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Button size="lg" className="rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all" onClick={() => openContactForm("salesforce")}>
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

export default Salesforce;
