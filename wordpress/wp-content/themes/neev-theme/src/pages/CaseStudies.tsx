import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies, categories } from "@/data/caseStudiesData";

const categoryColors: Record<string, string> = {
  Oracle: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/20",
  Salesforce: "bg-blue-500/15 text-blue-700 dark:text-blue-400 border-blue-500/20",
  ServiceNow: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  Integration: "bg-purple-500/15 text-purple-700 dark:text-purple-400 border-purple-500/20",
  "Data & Analytics": "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/20",
};

function useStaggeredReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.transitionDelay =
                (entry.target as HTMLElement).dataset.delay || "0ms";
              entry.target.classList.add("visible");
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
    }
    observerRef.current.observe(el);
  }, []);

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return observe;
}

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const observe = useStaggeredReveal();

  const filtered = caseStudies.filter((cs) => {
    const matchesCategory = activeCategory === "All" || cs.category === activeCategory;
    const matchesSearch = cs.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute top-0 left-0 right-0 h-[500px] lg:h-[600px] bg-gradient-to-br from-purple-100/80 to-indigo-50/60 dark:from-purple-950/50 dark:to-indigo-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-purple-100/90 to-indigo-50/80 dark:from-purple-950/80 dark:to-indigo-950/60 backdrop-blur-2xl" />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <AnimatedGridPattern
          className="absolute inset-0 opacity-40 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          numSquares={30}
          maxOpacity={0.1}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <h1
            ref={observe}
            className="fade-in-up text-4xl md:text-5xl font-bold text-center"
          >
            Case Studies
          </h1>
          <p
            ref={observe}
            data-delay="100ms"
            className="fade-in-up text-muted-foreground text-center mt-4 max-w-2xl mx-auto text-lg"
          >
            Real-world success stories from our clients
          </p>

          {/* Search */}
          <div
            ref={observe}
            data-delay="200ms"
            className="fade-in-up max-w-md mx-auto mt-8 relative"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-xl"
            />
          </div>

          {/* Filters */}
          <div
            ref={observe}
            data-delay="300ms"
            className="fade-in-up flex flex-wrap justify-center gap-2 mt-6"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-muted/50 text-muted-foreground border-border hover:bg-accent hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 lg:px-8 pb-24">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((cs, index) => (
              <article
                key={cs.id}
                ref={observe}
                data-delay={`${(index % 3) * 100}ms`}
                className="fade-in-up group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-[200px] object-cover"
                  loading="lazy"
                />
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <Badge
                    className={`w-fit text-xs ${categoryColors[cs.category] || "bg-muted text-muted-foreground border-border"}`}
                  >
                    {cs.category}
                  </Badge>
                  <h3 className="font-bold text-foreground line-clamp-2 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {cs.excerpt}
                  </p>
                  <span className="text-xs text-muted-foreground mt-auto">{cs.date}</span>
                  <a
                    href={cs.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-lg border border-border text-muted-foreground hover:bg-accent hover:text-foreground transition-colors mt-1 w-fit"
                  >
                    Download PDF ↓
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-4">
              No case studies found matching your criteria.
            </p>
            <Button variant="outline" onClick={resetFilters} className="rounded-xl gap-2">
              <X size={16} /> Reset Filters
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
