import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Newspaper, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";

export type IndustryType =
  | "life-sciences"
  | "healthcare"
  | "cpg-retail"
  | "hitech"
  | "banking-financial";

interface NewsArticle {
  title: string;
  link: string;
  source: string;
  pubDate: string;
}

const industryConfig: Record<
  IndustryType,
  { label: string; badgeClass: string; rssQuery: string }
> = {
  "life-sciences": {
    label: "Life Sciences",
    badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
    rssQuery: "life+sciences",
  },
  healthcare: {
    label: "Healthcare",
    badgeClass: "bg-blue-100 text-blue-700 border-blue-200",
    rssQuery: "healthcare+technology",
  },
  "cpg-retail": {
    label: "CPG & Retail",
    badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
    rssQuery: "CPG+retail+industry",
  },
  hitech: {
    label: "Hitech",
    badgeClass: "bg-purple-100 text-purple-700 border-purple-200",
    rssQuery: "high+technology+industry",
  },
  "banking-financial": {
    label: "Banking & Financial",
    badgeClass: "bg-orange-100 text-orange-700 border-orange-200",
    rssQuery: "banking+financial+services",
  },
};

const CORS_PROXIES = {
  allOriginsGet: (url: string) =>
    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
  allOriginsRaw: (url: string) =>
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  rss2json: (url: string) =>
    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`,
};

interface AllOriginsResponse {
  contents?: string;
}

interface Rss2JsonItem {
  title?: string;
  link?: string;
  author?: string;
  pubDate?: string;
}

interface Rss2JsonResponse {
  status?: string;
  items?: Rss2JsonItem[];
}

function parseRSS(xml: string): NewsArticle[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const items = doc.querySelectorAll("item");
  const articles: NewsArticle[] = [];

  items.forEach((item, idx) => {
    if (idx >= 6) return;

    const title = item.querySelector("title")?.textContent ?? "";
    const link = item.querySelector("link")?.textContent ?? "";
    const pubDate = item.querySelector("pubDate")?.textContent ?? "";
    const source = item.querySelector("source")?.textContent ?? "Google News";

    articles.push({ title, link, source, pubDate });
  });

  return articles;
}

function parseRss2JsonResponse(data: Rss2JsonResponse): NewsArticle[] {
  if (data.status !== "ok" || !Array.isArray(data.items)) return [];

  return data.items.slice(0, 6).map((item) => ({
    title: item.title ?? "",
    link: item.link ?? "",
    source: item.author || "Google News",
    pubDate: item.pubDate ?? "",
  }));
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function buildNewsSearchUrl(headline: string): string {
  return `https://www.google.com/search?q=${encodeURIComponent(headline)}`;
}

interface IndustryNewsSectionProps {
  industry: IndustryType;
}

const IndustryNewsSection = ({ industry }: IndustryNewsSectionProps) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const config = industryConfig[industry];

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(false);

    const rssUrl = `https://news.google.com/rss/search?q=${config.rssQuery}`;

    const fetchAttempts = [
      async () => {
        const res = await fetch(CORS_PROXIES.allOriginsGet(rssUrl));
        if (!res.ok) return [] as NewsArticle[];

        const data = (await res.json()) as AllOriginsResponse;
        if (!data.contents) return [];

        return parseRSS(data.contents);
      },
      async () => {
        const res = await fetch(CORS_PROXIES.allOriginsRaw(rssUrl));
        if (!res.ok) return [] as NewsArticle[];

        const xml = await res.text();
        return parseRSS(xml);
      },
      async () => {
        const res = await fetch(CORS_PROXIES.rss2json(rssUrl));
        if (!res.ok) return [] as NewsArticle[];

        const data = (await res.json()) as Rss2JsonResponse;
        return parseRss2JsonResponse(data);
      },
    ];

    for (const attempt of fetchAttempts) {
      try {
        const parsed = await attempt();
        if (parsed.length > 0) {
          setArticles(parsed);
          setLoading(false);
          return;
        }
      } catch {
        // try next proxy
      }
    }

    setArticles([]);
    setError(true);
    setLoading(false);
  }, [config.rssQuery]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a1628]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.06}
          duration={5}
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[20px] bg-[#f5f3ef] p-8 md:p-10 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] flex items-center gap-3">
              <Newspaper className="w-7 h-7 text-primary" />
              Latest {config.label} News
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#6b7280]">via Google News RSS</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={fetchNews}
                disabled={loading}
                className="h-8 w-8 rounded-lg text-[#6b7280] hover:text-primary"
                title="Refresh news"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>

          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-xl bg-white/60 p-5 animate-pulse h-48" />
              ))}
            </div>
          )}

          {error && !loading && (
            <div className="text-center py-12 text-[#6b7280]">
              <p className="text-lg font-medium mb-1">Unable to load news</p>
              <p className="text-sm mb-4">Please try again later.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchNews}
                className="rounded-xl gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Retry
              </Button>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((article, idx) => {
                const newsUrl = buildNewsSearchUrl(article.title);

                return (
                  <motion.a
                    key={idx}
                    href={newsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      event.preventDefault();
                      window.open(newsUrl, "_blank", "noopener,noreferrer");
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="group rounded-xl bg-white p-5 shadow-sm hover:shadow-md border border-[#e5e2dc] hover:border-primary/20 transition-all duration-300 flex flex-col"
                  >
                    <Badge
                      variant="outline"
                      className={`w-fit text-[11px] mb-3 ${config.badgeClass}`}
                    >
                      {config.label}
                    </Badge>
                    <h3 className="font-semibold text-[#1a1a2e] text-sm leading-snug mb-3 line-clamp-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between text-xs text-[#6b7280]">
                      <span className="truncate max-w-[120px]">{article.source}</span>
                      <span>{formatDate(article.pubDate)}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Search on Google <ExternalLink className="w-3 h-3" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryNewsSection;
