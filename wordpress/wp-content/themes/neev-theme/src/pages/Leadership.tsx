import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBreadcrumb from "@/components/StickyBreadcrumb";
import FinalCtaSection from "@/components/FinalCtaSection";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import chakravardhan from "@/assets/leadership/chakravardhan-vaddi.jpg";
import srinivas from "@/assets/leadership/srinivas-polsani.jpg";
import joseph from "@/assets/leadership/joseph-ung.jpg";
import amit from "@/assets/leadership/amit-sinha.jpg";
import amar from "@/assets/leadership/amar-dasari.jpg";
import ashish from "@/assets/leadership/ashish-goswami.jpg";
import lavanya from "@/assets/leadership/lavanya-margam.jpg";
import manohar from "@/assets/leadership/manohar-ramreddygari.jpg";
import sitaram from "@/assets/leadership/sitaram-pothula.jpg";
import sivarami from "@/assets/leadership/sivarami-edara.jpg";

type Person = { name: string; title: string; photo: string; linkedin?: string };

const FOUNDERS: Person[] = [
  { name: "Chakravardhan R Vaddi", title: "Founder", photo: chakravardhan, linkedin: "#" },
  { name: "Srinivas Polsani", title: "Managing Director, Co-Founder", photo: srinivas, linkedin: "#" },
  { name: "Joseph Y Ung", title: "Partner – Business Development", photo: joseph, linkedin: "#" },
];

const MANAGEMENT: Person[] = [
  { name: "Amit Sinha", title: "Client Partner – Delivery and Associate Director - AI", photo: amit, linkedin: "#" },
  { name: "Amar Chand Dasari", title: "Practice Head – Data Analytics", photo: amar, linkedin: "#" },
  { name: "Ashish Goswami", title: "Practice Head – Oracle", photo: ashish, linkedin: "#" },
  { name: "Lavanya Margam", title: "People's Manager (HR)", photo: lavanya, linkedin: "#" },
  { name: "Manohar Reddy Ramreddygari", title: "Practice Head – Salesforce", photo: manohar, linkedin: "#" },
  { name: "Sitaram Pothula", title: "Head – Product Development", photo: sitaram, linkedin: "#" },
  { name: "Sivarami Reddy Edara", title: "Delivery and Operations Head", photo: sivarami, linkedin: "#" },
];

const PersonCard = ({ person, large = false }: { person: Person; large?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-2xl overflow-hidden border border-border/60 bg-card hover:border-primary/30 hover:shadow-[0_16px_50px_-16px_hsl(226_55%_30%/0.25)] hover:-translate-y-1 transition-all duration-300"
  >
    {/* Photo */}
    <div className={`relative overflow-hidden bg-muted ${large ? "aspect-[4/5]" : "aspect-square"}`}>
      <img
        src={person.photo}
        alt={person.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, hsl(226 55% 18% / 0.55), transparent)",
        }}
      />
    </div>

    {/* Body — primary blue band like the source design */}
    <div
      className="relative px-5 py-5 text-center"
      style={{
        background: "linear-gradient(135deg, hsl(226 55% 30%) 0%, hsl(218 50% 40%) 100%)",
      }}
    >
      <h3 className="text-base md:text-lg font-bold text-white leading-tight mb-1">{person.name}</h3>
      <p className="text-xs md:text-sm text-white/80 leading-snug min-h-[2.5em]">{person.title}</p>
      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${person.name} on LinkedIn`}
          className="inline-flex items-center justify-center w-8 h-8 mt-3 rounded-full bg-white/95 text-primary hover:bg-white transition-colors duration-300"
        >
          <Linkedin size={14} fill="currentColor" />
        </a>
      )}
    </div>
  </motion.div>
);

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Top-of-page gradient backdrop */}
      <div className="absolute top-16 lg:top-20 inset-x-0 h-[340px] lg:h-[380px] overflow-hidden pointer-events-none">
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
          numSquares={36}
          maxOpacity={0.18}
          duration={4}
          className="text-white/15 stroke-white/15 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        />
      </div>

      <Navbar unscrolledClassName="bg-transparent text-white" scrolledClassName="bg-background/80" />

      <StickyBreadcrumb className="bg-background/70">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/about">About Us</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Leadership</BreadcrumbPage>
        </BreadcrumbItem>
      </StickyBreadcrumb>

      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.2em] mb-6"
            >
              <Sparkles size={14} /> Our Leadership
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5"
            >
              The minds behind <span className="text-blue-200">Neev.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-white/85"
            >
              25+ years of IT services experience, transforming how enterprise clients build, integrate, and modernize.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founders / Leadership Team */}
      <section className="relative py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Leadership Team</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              Founders & Partners
            </h2>
            <p className="text-muted-foreground">
              Our inspiring leaders envision Neev as the enabler of true digital transformation.
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-12 h-1 rounded-full bg-[hsl(0_70%_47%)]" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FOUNDERS.map((p) => (
              <PersonCard key={p.name} person={p} large />
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="relative py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Management Team</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              The brilliant people driving client success.
            </h2>
            <div className="flex justify-center mt-4">
              <div className="w-12 h-1 rounded-full bg-[hsl(0_70%_47%)]" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {MANAGEMENT.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Leadership;