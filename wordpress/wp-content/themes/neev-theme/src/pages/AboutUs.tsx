import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  MapPin,
  Sparkles,
  Target,
  Eye,
  Users,
  Lightbulb,
  ShieldCheck,
  HandshakeIcon,
  Award,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBreadcrumb from "@/components/StickyBreadcrumb";
import FinalCtaSection from "@/components/FinalCtaSection";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { Button } from "@/components/ui/button";
import FlowArt, { FlowSection } from "@/components/FlowArt";
import { useContactForm } from "@/contexts/ContactFormContext";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const FOUNDING_YEAR = "2016";

const FOUNDING_STORY = [
  "Neev Systems, founded in 2016 in Silicon Valley, is a trusted IT partner offering tailored solutions in Digital Transformation, Cloud Computing, ERP, Integration, and Product Engineering.",
  "We stay current with industry-standard methodologies and actively leverage AI across relevant areas to drive innovation and efficiency for our clients.",
  "With a strong presence across the US, India, and Mexico, our mission is to be the foundation for our customers' future by delivering consistent excellence and reliable partnerships.",
];

const MILESTONES: { year: string; title: string; bullets: string[] }[] = [
  {
    year: "2016",
    title: "Foundation of Partnership",
    bullets: [
      "Launched our Oracle practice by successfully serving two major enterprises — proving our ability to handle complex, large-scale implementations.",
    ],
  },
  {
    year: "2018",
    title: "Scaling with Quality",
    bullets: [
      "Expanded our service offerings into Salesforce, ServiceNow, and Integrations.",
      "Signed a multi-year Oracle Managed Services deal with a Fortune 500 firm, reinforcing our ability to optimize and sustain critical systems.",
    ],
  },
  {
    year: "2019",
    title: "Accelerating Growth",
    bullets: [
      "Grew to a 100+ member team with deep certifications, ensuring skilled resources for consistent, high-quality delivery.",
      "Launched Product Engineering and Custom Development services, helping clients move from legacy systems to scalable, future-ready solutions.",
      "Achieved 80% certified talent across practices, translating into faster deployments and reduced risk for clients.",
      "Delivered 100% YoY growth, driven by repeat business and expanding service lines.",
      "Spearheaded a large-scale Oracle Cloud implementation, proving our ability to modernize enterprise systems with minimal disruption.",
    ],
  },
  {
    year: "2022",
    title: "Strategic Expansion",
    bullets: [
      "Scaled to 200+ experts, becoming the go-to managed services partner for enterprises demanding reliability and innovation.",
      "Completed multiple R12 upgrade implementations with zero downtime, ensuring business continuity for global clients.",
      "Partnered with leading financial services organizations, delivering compliance-ready solutions in highly regulated markets.",
    ],
  },
  {
    year: "Today",
    title: "Engineering Excellence & Intelligent Transformation",
    bullets: [
      "Grew to 280+ specialists, with a focus on agile, enterprise-grade delivery — combining scale with precision.",
      "Integrated AI and automation into core services, helping clients cut operational costs by 30–40% while improving decision-making.",
      "Institutionalized Testing as a Practice, embedding quality and reliability into every engagement.",
      "Strengthened alliances with Salesforce, ServiceNow, and Oracle for co-innovation and access to cutting-edge tools.",
      "Expanded multi-year Fortune 500 engagements and accelerated global expansion across new regions and industries.",
    ],
  },
];

const VALUES = [
  {
    icon: Users,
    title: "Customer-first approach",
    desc: "We prioritize our clients and provide tailored solutions to meet their specific needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We continuously strive to improve and offer innovative solutions to help our clients stay ahead.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable",
    desc: "We build and maintain strong relationships with our clients, delivering on our commitments and providing reliable service.",
  },
  {
    icon: HandshakeIcon,
    title: "Team Spirit",
    desc: "We value collaboration and foster a diverse, inclusive work environment that encourages creativity and innovation.",
  },
  {
    icon: Award,
    title: "Commitment",
    desc: "We are dedicated to delivering exceptional quality, value, and performance — and continuously improving our skills and knowledge.",
  },
];

const OFFICES = [
  { city: "Milpitas, CA", region: "United States — HQ", address: "691 S Milpitas Blvd, #217, Milpitas, CA 95035" },
  { city: "Round Rock, TX", region: "United States", address: "505 E Palm Valley Blvd, Ste 110, Round Rock, TX 78664" },
  { city: "Hyderabad", region: "India — Delivery Center", address: "Hive Space 2.0, Divine Babylon, Kondapur, HITECH City" },
];

const AboutUs = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Top-of-page gradient backdrop — starts below the fixed navbar so it never bleeds into the header */}
      <div className="absolute top-16 lg:top-20 inset-x-0 h-[680px] overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(226 60% 25%) 0%, hsl(218 55% 38%) 45%, hsl(210 50% 55%) 100%)",
          }}
        />
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl animate-wave-float" />
        <div className="absolute top-20 -right-32 w-[460px] h-[460px] rounded-full bg-blue-300/15 blur-3xl animate-wave-float-reverse" />
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.18}
          duration={4}
          className="text-white/15 stroke-white/15 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        />
      </div>

      <Navbar
        unscrolledClassName="bg-transparent"
        scrolledClassName="bg-transparent"
      />

      <StickyBreadcrumb className="bg-background/70">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>About Us</BreadcrumbPage>
        </BreadcrumbItem>
      </StickyBreadcrumb>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.2em] mb-6"
            >
              <Sparkles size={14} /> About Neev Systems
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              The foundation modern <span className="text-blue-200">enterprises</span> build on.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-10"
            >
              A Silicon Valley–born IT partner delivering Digital Transformation, Cloud, ERP, Integration, and Product Engineering — powered by AI, trusted across the US, India, and Mexico.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="rounded-xl px-8 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20"
                onClick={() => openContactForm("about-us")}
              >
                Talk to an Expert <ArrowRight className="ml-1.5" size={16} />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About company */}
      <section className="relative py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">About Company</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
                Engineering enterprise clarity since {FOUNDING_YEAR}.
              </h2>
              <div className="space-y-4">
                {FOUNDING_STORY.map((p, i) => (
                  <p key={i} className="text-base text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div
                className="relative rounded-3xl p-10 lg:p-12 overflow-hidden border border-border/50 shadow-[0_20px_60px_-20px_hsl(226_55%_15%/0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(226 55% 30%) 0%, hsl(218 50% 45%) 100%)",
                }}
              >
                <AnimatedGridPattern
                  numSquares={20}
                  maxOpacity={0.15}
                  duration={5}
                  className="text-white/15 stroke-white/15"
                />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3">Founded</p>
                  <p className="text-7xl md:text-8xl font-black text-white leading-none mb-5 tracking-tight">
                    {FOUNDING_YEAR}
                  </p>
                  <p className="text-white/85 text-sm leading-relaxed max-w-xs">
                    'Neev' means foundation — the principle behind every integration, platform, and partnership we've delivered since day one.
                  </p>
                </div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision strip */}
      <section className="relative py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl p-8 bg-card border border-border/60 hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_hsl(226_55%_30%/0.18)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Target size={22} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Empowering enterprise clients to achieve their full potential in the rapidly evolving digital landscape — providing cutting-edge enterprise applications and technologies tailored to their unique needs.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We leverage a <span className="font-semibold text-foreground">collaboration-first approach</span> to build efficient, reliable, and flexible solutions that help clients adapt quickly to shifting market dynamics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-2xl p-8 bg-card border border-border/60 hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_hsl(226_55%_30%/0.18)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Eye size={22} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To be the most preferred and reliable IT solutions provider for clients — delivering innovative enterprise application and technology services that transform businesses and drive efficient growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Five principles that shape every engagement.
            </h2>
            <div className="flex justify-center mt-2">
              <div className="w-12 h-1 rounded-full bg-[hsl(0_70%_47%)]" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-6 bg-card border border-border/60 hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_hsl(226_55%_30%/0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <v.icon size={20} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 leading-tight">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey — Milestones timeline */}
      <section className="relative pt-20 lg:pt-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              From foundation to intelligent transformation.
            </h2>
            <div className="flex justify-center mt-2">
              <div className="w-12 h-1 rounded-full bg-[hsl(0_70%_47%)]" />
            </div>
          </motion.div>
        </div>

        {/* Stacked, scroll-pinned milestone panels */}
        <FlowArt aria-label="Neev journey scroll" className="mt-4">
          {MILESTONES.map((m, i) => {
            const gradients = [
              "linear-gradient(135deg, hsl(226 60% 25%) 0%, hsl(218 55% 38%) 50%, hsl(210 50% 55%) 100%)",
              "linear-gradient(135deg, hsl(218 55% 32%) 0%, hsl(210 55% 45%) 50%, hsl(200 60% 58%) 100%)",
              "linear-gradient(135deg, hsl(210 55% 30%) 0%, hsl(200 60% 42%) 50%, hsl(190 65% 55%) 100%)",
              "linear-gradient(135deg, hsl(226 55% 22%) 0%, hsl(0 60% 38%) 60%, hsl(10 70% 50%) 100%)",
              "linear-gradient(135deg, hsl(226 65% 18%) 0%, hsl(218 55% 30%) 50%, hsl(0 70% 47%) 100%)",
            ];
            return (
              <FlowSection
                key={m.year}
                aria-label={`${m.year} — ${m.title}`}
                style={{ background: gradients[i % gradients.length] }}
              >
                <AnimatedGridPattern
                  numSquares={32}
                  maxOpacity={0.15}
                  duration={5}
                  className="text-white/15 stroke-white/15 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
                />
                <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 container mx-auto px-6 lg:px-8 h-full min-h-screen flex items-center py-24">
                  <div className="max-w-4xl mx-auto w-full text-white">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                        Chapter {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-10 bg-white/40" />
                      <span
                        className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(0 70% 47%) 0%, hsl(0 75% 55%) 100%)",
                        }}
                      >
                        {m.year}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-8">
                      {m.title}
                    </h3>
                    <ul className="space-y-4 max-w-3xl">
                      {m.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-base md:text-lg text-white/90 leading-relaxed"
                        >
                          <span className="mt-2.5 inline-block w-2 h-2 rounded-full bg-white/80 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FlowSection>
            );
          })}
        </FlowArt>
      </section>

      {/* Global presence */}
      <section className="relative py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Global Presence</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Three continents. One delivery model.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl p-7 bg-card border border-border/60 hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_hsl(226_55%_30%/0.18)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Building2 size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{o.city}</h3>
                <p className="text-xs uppercase tracking-wider text-primary/80 font-semibold mb-3">{o.region}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-muted-foreground/60" />
                  <span>{o.address}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
      <Footer />
    </main>
  );
};

export default AboutUs;