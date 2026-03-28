import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";

/* ✅ IMPORT IMAGES (IMPORTANT FIX) */
import pocamlaImg from "@/assets/pocamla-regulations.jpg";
import incomeTaxAmendmentsImg from "@/assets/income-tax-amendments.jpg";
import trumpTariffsImg from "@/assets/trump-tariffs-kenya.jpg";
import incomeTaxImplementationImg from "@/assets/income-tax-implementation.jpg";
import nssfRatesImg from "@/assets/nssf-contribution-rates.jpg";

const articles = [
  {
    title: "POCAMLA Regulations Sensitization",
    category: "Advisory",
    date: "August 2025",
    excerpt:
      "An in-depth sensitization on the Proceeds of Crime and Anti-Money Laundering Act — what it means for businesses, compliance obligations, and the steps organizations must take to avoid penalties.",
    heyzineUrl: "https://heyzine.com/flip-book/5422b73619.html",
    thumbnail: pocamlaImg,
  },
  {
    title: "Income Tax Act Proposed Amendments",
    category: "Tax",
    date: "May 2025",
    excerpt:
      "A detailed review of the proposed amendments to the Income Tax Act, covering changes to individual and corporate tax rates, new deductions, and implications for taxpayers across sectors.",
    heyzineUrl: "https://heyzine.com/flip-book/ffa6adc731.html",
    thumbnail: incomeTaxAmendmentsImg,
  },
  {
    title: "Trump Tariffs Threaten Kenya - U.S. Trade Gains",
    category: "Advisory",
    date: "April 2025",
    excerpt:
      "An analysis of how the reintroduction of U.S. tariffs under the Trump administration risks undermining Kenya's trade advantages, including AGOA benefits, and what businesses should prepare for.",
    heyzineUrl: "https://heyzine.com/flip-book/41ff0af289.html",
    thumbnail: trumpTariffsImg,
  },
  {
    title: "Implementation of The Income Tax",
    category: "Tax",
    date: "March 2025",
    excerpt:
      "A practical guide to the rollout of recent Income Tax provisions, including key compliance timelines, filing requirements, and what both individuals and corporates need to action immediately.",
    heyzineUrl: "https://heyzine.com/flip-book/4232796bb8.html",
    thumbnail: incomeTaxImplementationImg,
  },
  {
    title: "NSSF Contribution Rates Starting February 2025",
    category: "Audit",
    date: "February 2025",
    excerpt:
      "A breakdown of the new NSSF contribution rates effective February 2025, how they are calculated under the NSSF Act 2013, and the compliance impact on employers and employees.",
    heyzineUrl: "https://heyzine.com/flip-book/f1a891188c.html",
    thumbnail: nssfRatesImg,
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

            {/* Modal */}
            <AnimatePresence>
              {selectedArticle && (
                <motion.div
                  className="fixed inset-0 z-50 bg-oxford-dark/90 flex items-center justify-center p-4 pt-24"
                  onClick={() => setSelectedArticle(null)}
                >
                  <motion.div
                    className="bg-card rounded-2xl w-full max-w-7xl h-[calc(100vh-120px)] flex flex-col overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between p-5 border-b">
                      <h3 className="font-bold">{selectedArticle.title}</h3>
                      <button onClick={() => setSelectedArticle(null)}>
                        <X />
                      </button>
                    </div>

                    <iframe
                      src={selectedArticle.heyzineUrl}
                      className="w-full h-full"
                      allowFullScreen
                      title={selectedArticle.title}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => openArticle(article)}
                >
                  {/* Thumbnail */}
                  <div className="h-[340px] p-3 flex items-center justify-center">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs mb-2">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>

                    <h3 className="font-bold mb-2">{article.title}</h3>
                    <p className="text-sm mb-3 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <span className="text-gold text-sm flex items-center gap-2">
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