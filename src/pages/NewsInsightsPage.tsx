import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";

const articles = [
  {
    title: "POCAMLA Regulations Sensitization",
    category: "Advisory",
    date: "August 2025",
    excerpt:
      "An in-depth sensitization on the Proceeds of Crime and Anti-Money Laundering Act — what it means for businesses, compliance obligations, and the steps organizations must take to avoid penalties.",
    heyzineUrl: "https://heyzine.com/flip-book/5422b73619.html",
    thumbnail: "src/assets/pocamla-regulations.jpg",
  },
  {
    title: "Income Tax Act Proposed Amendments",
    category: "Tax",
    date: "May 2025",
    excerpt:
      "A detailed review of the proposed amendments to the Income Tax Act, covering changes to individual and corporate tax rates, new deductions, and implications for taxpayers across sectors.",
    heyzineUrl: "https://heyzine.com/flip-book/ffa6adc731.html",
    thumbnail: "src/assets/income-tax-amendments.jpg",
  },
  {
    title: "Trump Tariffs Threaten Kenya - U.S. Trade Gains",
    category: "Advisory",
    date: "April 2025",
    excerpt:
      "An analysis of how the reintroduction of U.S. tariffs under the Trump administration risks undermining Kenya's trade advantages, including AGOA benefits, and what businesses should prepare for.",
    heyzineUrl: "https://heyzine.com/flip-book/41ff0af289.html",
    thumbnail: "src/assets/trump-tariffs-kenya.jpg",
  },
  {
    title: "Implementation of The Income Tax",
    category: "Tax",
    date: "March 2025",
    excerpt:
      "A practical guide to the rollout of recent Income Tax provisions, including key compliance timelines, filing requirements, and what both individuals and corporates need to action immediately.",
    heyzineUrl: "https://heyzine.com/flip-book/4232796bb8.html",
    thumbnail: "src/assets/income-tax-implementation.jpg",
  },
  {
    title: "NSSF Contribution Rates Starting February 2025",
    category: "Audit",
    date: "February 2025",
    excerpt:
      "A breakdown of the new NSSF contribution rates effective February 2025, how they are calculated under the NSSF Act 2013, and the compliance impact on employers and employees.",
    heyzineUrl: "https://heyzine.com/flip-book/f1a891188c.html",
    thumbnail: "src/assets/nssf-contribution-rates.jpg",
  },
];

const categories = ["All", "Tax", "Audit", "Advisory"];

const categoryColors: Record<string, string> = {
  Tax: "bg-gold/10 text-gold border-gold/20",
  Audit: "bg-oxford/10 text-foreground border-oxford/20",
  Advisory: "bg-accent/50 text-accent-foreground border-accent",
};

const NewsInsightsPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<
    (typeof articles)[0] | null
  >(null);

  const filtered =
    filter === "All" ? articles : articles.filter((a) => a.category === filter);

  useEffect(() => {
    document.body.style.overflow = selectedArticle ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  const openArticle = (article: (typeof articles)[0]) => {
    if (window.innerWidth < 768) {
      window.open(article.heyzineUrl, "_blank");
    } else {
      setSelectedArticle(article);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <PageHeader title="News & Insights" breadcrumb="News & Insights" />

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap gap-3 mb-12 md:mb-16 justify-center"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-sans text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
                    filter === cat
                      ? "bg-oxford text-primary-foreground shadow-oxford"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Flipbook Modal */}
            <AnimatePresence>
              {selectedArticle && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-oxford-dark/90 backdrop-blur-sm flex items-center justify-center p-4 pt-24"
                  onClick={() => setSelectedArticle(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 30 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-card rounded-2xl w-full max-w-7xl h-[calc(100vh-120px)] flex flex-col overflow-hidden shadow-2xl border border-border"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between p-5 border-b border-border bg-secondary/50">
                      <div>
                        <span
                          className={`inline-block px-3 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold border mb-2 ${
                            categoryColors[selectedArticle.category] || ""
                          }`}
                        >
                          {selectedArticle.category}
                        </span>
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {selectedArticle.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setSelectedArticle(null)}
                        className="w-10 h-10 rounded-full bg-secondary hover:bg-border flex items-center justify-center transition-colors"
                      >
                        <X className="w-5 h-5 text-foreground" />
                      </button>
                    </div>
                    <div className="flex-1 bg-muted overflow-hidden">
                      <iframe
                        src={selectedArticle.heyzineUrl}
                        className="w-full h-full"
                        style={{ minHeight: "600px" }}
                        allow="fullscreen"
                        allowFullScreen
                        title={selectedArticle.title}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Articles Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((article, i) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  layout
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-oxford hover:border-gold/30 transition-all duration-300 group cursor-pointer flex flex-col"
                  onClick={() => openArticle(article)}
                >
                  {/* Portrait Thumbnail */}
                  <div className="h-[340px] relative overflow-hidden bg-muted flex items-center justify-center p-3">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-oxford-dark/0 group-hover:bg-oxford-dark/20 transition-colors duration-300" />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold border backdrop-blur-sm ${
                          categoryColors[article.category] || ""
                        }`}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 mb-3 text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-sans text-xs">{article.date}</span>
                    </div>

                    <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      Read Flipbook
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default NewsInsightsPage;