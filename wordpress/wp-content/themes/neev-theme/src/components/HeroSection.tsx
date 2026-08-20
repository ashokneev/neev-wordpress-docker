import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { useContactForm } from "@/contexts/ContactFormContext";

const HeroSection = () => {
  const { openContactForm } = useContactForm();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], [0, 220]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -120]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.95]);

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Intelligent Automation", "Seamless Integration"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" ref={heroRef}>
      <AnimatedGridPattern numSquares={30} maxOpacity={0.12} duration={3} className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: heroBgY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full animate-wave-float opacity-[0.035]"
            style={{ background: "radial-gradient(circle, hsl(226 60% 35%), transparent 70%)" }}
          />
          <div
            className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full animate-wave-float-reverse opacity-[0.025]"
            style={{ background: "radial-gradient(circle, hsl(216 50% 45%), transparent 70%)" }}
          />
          <div
            className="absolute bottom-[15%] right-[15%] w-[30vw] h-[30vw] rounded-full animate-float-subtle opacity-[0.03]"
            style={{ background: "radial-gradient(circle, hsl(226 30% 72%), transparent 70%)" }}
          />
        </div>
      </motion.div>

      <motion.div
        className="container relative z-10 mx-auto px-6 lg:px-8 py-20"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary/80 bg-primary/[0.06] rounded-full px-4 py-1.5 mb-8 border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                AI-Led Enterprise Technology
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                From Complexity to Clarity
              </h1>
              <div className="mt-2 h-[1.7em] relative overflow-hidden text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.2]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleNumber}
                    className="absolute left-0 top-0 block pb-[0.08em] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  >
                    {titles[titleNumber]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              We modernize enterprise ecosystems by embedding AI into architecture,
              workflows, and integration layers — delivering scalable, reliable
              systems built for complexity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={() => openContactForm("hero")} className="text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                Talk to Our Experts
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 rounded-xl border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300"
                onClick={scrollToServices}
              >
                Explore Services
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="flex-shrink-0 hidden md:block"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <InteractiveGlobe className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]" size={480} />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
          <ChevronDown size={18} className="animate-float-subtle" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
