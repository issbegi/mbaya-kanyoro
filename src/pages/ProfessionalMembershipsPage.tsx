import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

// Membership logos
import gmn from "@/assets/gmn.png";
import icpak from "@/assets/icpak.png";
import acca from "@/assets/acca.png";
import lsk from "@/assets/lsk.png";
import icpsk from "@/assets/icpsk.png";
import iia from "@/assets/iia.png";

const memberships = [
  {
    logo: gmn,
    name: "GMN International",
    description:
      "A leading international association of independent accounting and consulting firms with global reach across more than 60 countries.",
    type: "Global Network",
  },
  {
    logo: icpak,
    name: "ICPAK",
    description:
      "Institute of Certified Public Accountants of Kenya — the statutory body regulating the accountancy profession in Kenya.",
    type: "Professional Body",
  },
  {
    logo: acca,
    name: "ACCA",
    description:
      "Association of Chartered Certified Accountants — a globally recognized professional body for accountants and finance professionals.",
    type: "Professional Body",
  },
  {
    logo: lsk,
    name: "Law Society of Kenya",
    description:
      "The professional association for advocates of the High Court of Kenya promoting excellence and ethical legal practice.",
    type: "Legal Association",
  },
  {
    logo: icpsk,
    name: "ICPSK",
    description:
      "Institute of Certified Public Secretaries of Kenya — the governing body for governance and company secretarial professionals.",
    type: "Professional Body",
  },
  {
    logo: iia,
    name: "The Institute of Internal Auditors",
    description:
      "The global professional association for internal auditors providing standards, certification, and professional development.",
    type: "Professional Body",
  },
];

const ProfessionalMembershipsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />

        <PageHeader
          title="Professional Memberships"
          breadcrumb="Professional Memberships"
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            {/* Section Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold"></div>
                <span className="text-gold uppercase text-xs tracking-widest font-semibold">
                  Global Standards
                </span>
                <div className="h-px w-10 bg-gold"></div>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Professional Memberships
              </h2>

              <p className="font-sans text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Our commitment to professional excellence is reinforced through
                active membership with globally recognized professional and
                regulatory organizations.
              </p>
            </motion.div>

            {/* Membership Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {memberships.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-8 text-center hover:shadow-oxford hover:border-gold/30 transition-all duration-300"
                >
                  {/* Logo */}
                  <div className="h-16 flex items-center justify-center mb-6">
                    <img
                      src={m.logo}
                      alt={m.name}
                      className="max-h-12 object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Type Badge */}
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold block mb-3">
                    {m.type}
                  </span>

                  {/* Name */}
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">
                    {m.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
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

export default ProfessionalMembershipsPage;
