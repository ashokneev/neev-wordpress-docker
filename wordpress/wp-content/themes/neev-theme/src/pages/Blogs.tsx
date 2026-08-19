import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

const API_URL = "https://neevsystems.com/wp-json/wp/v2/posts?per_page=100&_embed";
const PROXY_URL = `https://corsproxy.io/?url=${encodeURIComponent(API_URL)}`;

function stripHTML(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const SkeletonCard = () => (
  <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
    <Skeleton className="w-full h-[220px]" />
    <div className="p-5 space-y-3">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-3 w-1/3 mt-2" />
      <Skeleton className="h-9 w-28 mt-3" />
    </div>
  </div>
);

const Blogs = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        let res = await fetch(API_URL);
        if (!res.ok) throw new Error("Direct fetch failed");
        const data: WPPost[] = await res.json();
        setPosts(data);
      } catch {
        try {
          const res = await fetch(PROXY_URL);
          if (!res.ok) throw new Error("Proxy fetch failed");
          const data: WPPost[] = await res.json();
          setPosts(data);
        } catch {
          setError("Failed to load blog posts. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filtered = posts.filter((p) =>
    stripHTML(p.title.rendered).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute top-0 left-0 right-0 h-[500px] lg:h-[600px] bg-gradient-to-br from-sky-100/80 to-blue-50/60 dark:from-sky-950/50 dark:to-blue-950/40 pointer-events-none" />
      <Navbar scrolledClassName="bg-gradient-to-br from-sky-100/90 to-blue-50/80 dark:from-sky-950/80 dark:to-blue-950/60 backdrop-blur-2xl" />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <AnimatedGridPattern
          className="absolute inset-0 opacity-40 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          numSquares={30}
          maxOpacity={0.15}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Blogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Insights, trends, and thought leadership from the Neev Systems team.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-md mx-auto relative"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search blog posts…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 lg:px-8 pb-24">
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-destructive text-lg mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20 text-lg">
            No posts found matching "{searchQuery}".
          </p>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, index) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
              const excerpt = stripHTML(post.excerpt.rendered);

              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="group rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {image && (
                    <img
                      src={image}
                      alt=""
                      className="w-full h-[220px] object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <h2
                      className="font-semibold text-foreground line-clamp-2 mb-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      {formatDate(post.date)}
                    </p>
                    <div className="mt-auto">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline" className="rounded-lg">
                          Read More
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
