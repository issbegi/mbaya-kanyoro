import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Upload, FileText, Shield, Lock, ArrowRight, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Upload,
    title: "Upload Documents",
    description: "Securely upload financial statements, receipts, and supporting documents for review by our team.",
  },
  {
    icon: FileText,
    title: "Access Reports",
    description: "Download completed audit reports, tax filings, and advisory deliverables from one central location.",
  },
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "All files are encrypted in transit and at rest, ensuring your sensitive financial data stays protected.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description: "Control who on your team can view, upload, or download documents with granular permissions.",
  },
];

const ClientPortalPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <PageHeader title="Client Portal" breadcrumb="Client Portal" />

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12 md:mb-16">
              <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                A secure, centralized space for you and your team to share documents and collaborate with Mbaya & Kanyoro LLP.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-xl border border-border p-6 md:p-8 flex gap-4 md:gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-oxford-gradient rounded-2xl p-8 md:p-10 text-center"
            >
              <LogIn className="w-10 h-10 text-gold mx-auto mb-4" />
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-3">
                Portal Coming Soon
              </h2>
              <p className="font-sans text-primary-foreground/70 max-w-lg mx-auto mb-6 text-sm md:text-base">
                We're building a secure client portal so you can upload documents, access reports, and collaborate with our team seamlessly. Contact us to get early access.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-oxford font-sans font-semibold px-8 py-3 rounded-lg text-primary-foreground border border-primary-foreground/20 hover:bg-oxford-light transition-colors text-sm"
              >
                Request Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ClientPortalPage;
