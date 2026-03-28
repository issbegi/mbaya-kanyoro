import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

// Import all 49 PNGs individually
import client1 from "@/assets/1.png";
import client2 from "@/assets/2.png";
import client3 from "@/assets/3.png";
import client4 from "@/assets/4.png";
import client5 from "@/assets/5.png";
import client6 from "@/assets/6.png";
import client7 from "@/assets/7.png";
import client8 from "@/assets/8.png";
import client9 from "@/assets/9.png";
import client10 from "@/assets/10.png";
import client11 from "@/assets/11.png";
import client12 from "@/assets/12.png";
import client13 from "@/assets/13.png";
import client14 from "@/assets/14.png";
import client15 from "@/assets/15.png";
import client16 from "@/assets/16.png";
import client17 from "@/assets/17.png";
import client18 from "@/assets/18.png";
import client19 from "@/assets/19.png";
import client20 from "@/assets/20.png";
import client21 from "@/assets/21.png";
import client22 from "@/assets/22.png";
import client23 from "@/assets/23.png";
import client24 from "@/assets/24.png";
import client25 from "@/assets/25.png";
import client26 from "@/assets/26.png";
import client27 from "@/assets/27.png";
import client28 from "@/assets/28.png";
import client29 from "@/assets/29.png";
import client30 from "@/assets/30.png";
import client31 from "@/assets/31.png";
import client32 from "@/assets/32.png";
import client33 from "@/assets/33.png";
import client34 from "@/assets/34.png";
import client35 from "@/assets/35.png";
import client36 from "@/assets/36.png";
import client37 from "@/assets/37.png";
import client38 from "@/assets/38.png";
import client39 from "@/assets/39.png";
import client40 from "@/assets/40.png";
import client41 from "@/assets/41.png";
import client42 from "@/assets/42.png";
import client43 from "@/assets/43.png";
import client44 from "@/assets/44.png";
import client45 from "@/assets/45.png";
import client46 from "@/assets/46.png";
import client47 from "@/assets/47.png";
import client48 from "@/assets/48.png";
import client49 from "@/assets/49.png";

const allOrganizations = [
  {
    name: "Office of the Auditor General",
    logo: client1,
    sector: "government",
    desc: "Independent public office responsible for auditing government institutions and public spending in Kenya.",
  },

  {
    name: "The David & Lucile Packard Foundation",
    logo: client2,
    sector: "ngo",
    desc: "Global philanthropic foundation supporting health, environmental conservation, and children’s wellbeing.",
  },

  {
    name: "Nairobi Securities Exchange",
    logo: client3,
    sector: "government",
    desc: "Kenya’s primary securities exchange facilitating trading of equities, bonds, and other financial instruments.",
  },

  {
    name: "Faida Investment Bank",
    logo: client4,
    sector: "finance",
    desc: "Kenyan investment bank providing brokerage, corporate finance, and asset management services.",
  },

  {
    name: "Adam Smith International",
    logo: client5,
    sector: "ngo",
    desc: "International advisory firm delivering governance, economic, and development programs worldwide.",
  },

  {
    name: "Climate Care",
    logo: client6,
    sector: "ngo",
    desc: "Organization focused on carbon reduction projects and climate impact solutions globally.",
  },

  {
    name: "The East African Wildlife Society",
    logo: client7,
    sector: "ngo",
    desc: "Conservation organization promoting protection of wildlife and ecosystems in East Africa.",
  },

  {
    name: "GLOBELEQ",
    logo: client8,
    sector: "ngo",
    desc: "Independent power company investing in and operating electricity generation projects across Africa.",
  },

  {
    name: "African Securities Exchanges Association",
    logo: client9,
    sector: "ngo",
    desc: "Association promoting cooperation and development among African stock exchanges.",
  },

  {
    name: "McKinney Rogers",
    logo: client10,
    sector: "corporate",
    desc: "Global consulting firm specializing in strategy execution and leadership performance.",
  },

  {
    name: "Kenya USA Diaspora Sacco",
    logo: client11,
    sector: "finance",
    desc: "Savings and credit cooperative serving Kenyans living in the diaspora.",
  },

  {
    name: "Biblia Sacco",
    logo: client12,
    sector: "finance",
    desc: "Faith-based savings and credit cooperative providing financial services to members.",
  },

  {
    name: "Nation DT - Sacco",
    logo: client13,
    sector: "finance",
    desc: "Savings and credit cooperative serving employees of Nation Media Group.",
  },

  {
    name: "Co-operative Bank of Kenya",
    logo: client14,
    sector: "finance",
    desc: "Leading Kenyan commercial bank offering retail, corporate, and cooperative banking services.",
  },

  {
    name: "Finnlemm Sacco Society",
    logo: client15,
    sector: "finance",
    desc: "Member-owned financial cooperative offering savings and loan services.",
  },

  {
    name: "Banki Kuu Sacco",
    logo: client16,
    sector: "finance",
    desc: "Savings and credit cooperative serving employees of the Central Bank of Kenya.",
  },

  {
    name: "Checkpoint",
    logo: client17,
    sector: "corporate",
    desc: "Cybersecurity company providing advanced threat prevention and network security solutions.",
  },

  {
    name: "Law Africa",
    logo: client18,
    sector: "corporate",
    desc: "Leading legal publisher providing law reports and legal information across Africa.",
  },

  {
    name: "Sevi",
    logo: client19,
    sector: "corporate",
    desc: "Technology company offering digital solutions and payment platforms for businesses.",
  },

  {
    name: "Adapt IT",
    logo: client20,
    sector: "corporate",
    desc: "Global provider of specialized enterprise software and technology services.",
  },

  {
    name: "Vmware",
    logo: client21,
    sector: "corporate",
    desc: "Technology company delivering cloud computing, virtualization, and digital infrastructure solutions.",
  },

  {
    name: "Postbank Sacco",
    logo: client22,
    sector: "finance",
    desc: "Savings and credit cooperative serving employees of Postbank and related institutions.",
  },

  {
    name: "Veew Distributors Limited",
    logo: client23,
    sector: "corporate",
    desc: "Distribution company supplying consumer and retail products across markets.",
  },

  {
    name: "TMF Group",
    logo: client24,
    sector: "corporate",
    desc: "Global professional services firm providing accounting, corporate, and compliance services.",
  },

  {
    name: "Aviat Networks",
    logo: client25,
    sector: "corporate",
    desc: "Telecommunications company specializing in wireless transport and network solutions.",
  },

  {
    name: "Kenya Railways Golf Club",
    logo: client26,
    sector: "government",
    desc: "Golf club associated with Kenya Railways offering sports and recreation facilities.",
  },

  {
    name: "Kakamega Sports Club",
    logo: client27,
    sector: "government",
    desc: "Community sports and recreational club promoting athletics and social activities.",
  },

  {
    name: "United States International University - Africa",
    logo: client28,
    sector: "education",
    desc: "Private university in Nairobi offering internationally accredited academic programs.",
  },

  {
    name: "Potterhouse School",
    logo: client29,
    sector: "education",
    desc: "Educational institution focused on academic excellence and holistic student development.",
  },

  {
    name: "Kenya Tea Development Agency",
    logo: client30,
    sector: "corporate",
    desc: "Organization managing tea processing factories and supporting smallholder tea farmers.",
  },

  {
    name: "Ol'Kalou Dairy Co-operative Society",
    logo: client31,
    sector: "manufacturing",
    desc: "Dairy cooperative supporting milk production, processing, and marketing.",
  },

  {
    name: "Siomo Tea Factory",
    logo: client32,
    sector: "manufacturing",
    desc: "Tea processing factory producing and exporting high-quality Kenyan tea.",
  },

  {
    name: "Blackwood Hodge Limited",
    logo: client33,
    sector: "manufacturing",
    desc: "Engineering and industrial equipment supplier serving East African industries.",
  },

  {
    name: "AIC-CURE Children's Hospital of Kenya",
    logo: client34,
    sector: "hospitality",
    desc: "Specialized pediatric hospital providing surgical care for children with disabilities.",
  },

  {
    name: "AGC Tenwek Hospital",
    logo: client35,
    sector: "hospitality",
    desc: "Faith-based hospital providing comprehensive healthcare services in Kenya.",
  },

  {
    name: "Compassion Kenya",
    logo: client36,
    sector: "ngo",
    desc: "Christian NGO focused on child development and poverty alleviation programs.",
  },

  {
    name: "Investing in Children and their Societies",
    logo: client37,
    sector: "ngo",
    desc: "Organization supporting vulnerable children through education and community programs.",
  },

  {
    name: "International NGO Safety Association",
    logo: client38,
    sector: "ngo",
    desc: "Global organization promoting safety and security for NGO workers.",
  },

  {
    name: "Office for the Coordination of Humanitarian Affairs",
    logo: client39,
    sector: "ngo",
    desc: "UN body coordinating international humanitarian response to crises.",
  },

  {
    name: "Centre For the Study of Adolescence",
    logo: client40,
    sector: "ngo",
    desc: "Kenyan NGO promoting adolescent health, rights, and development.",
  },

  {
    name: "Chepkitale Indigenous People Development Project",
    logo: client41,
    sector: "ngo",
    desc: "Community organization advocating for indigenous rights and sustainable livelihoods.",
  },

  {
    name: "Childfund Kenya",
    logo: client42,
    sector: "ngo",
    desc: "International NGO supporting children’s protection, education, and development programs.",
  },

  {
    name: "Hope Worldwide",
    logo: client43,
    sector: "ngo",
    desc: "Humanitarian organization delivering community health, education, and disaster relief programs.",
  },

  {
    name: "Karura Community Chapel",
    logo: client44,
    sector: "faith",
    desc: "Christian church community providing spiritual guidance and outreach programs.",
  },

  {
    name: "Diakonia",
    logo: client45,
    sector: "faith",
    desc: "Faith-based development organization working for social justice and human rights.",
  },

  {
    name: "Association of Evangelicals in Africa",
    logo: client46,
    sector: "faith",
    desc: "Network of evangelical churches and ministries across Africa.",
  },

  {
    name: "Corat Africa",
    logo: client47,
    sector: "faith",
    desc: "Christian training institute offering leadership and development programs.",
  },

  {
    name: "YMCA Kenya",
    logo: client48,
    sector: "faith",
    desc: "Youth-focused organization promoting community development, leadership, and wellbeing.",
  },

  {
    name: "Ukaguzi Sacco",
    logo: client49,
    sector: "finance",
    desc: "Savings and credit cooperative serving professionals in auditing and finance.",
  },
];

const sectorLabels: Record<string, string> = {
  ngo: "NGO",
  finance: "Financial Services",
  corporate: "Private Enterprise",
  government: "Public Sector",
  faith: "Faith-Based",
  education: "Education",
  manufacturing: "Manufacturing",
  hospitality: "Hospitality & Health",
};

const categories = [
  { value: "all", label: "All" },
  { value: "ngo", label: "Not for Profit" },
  { value: "government", label: "Public Sector" },
  { value: "corporate", label: "Private Enterprise" },
  { value: "finance", label: "Financial Services" },
  { value: "faith", label: "Faith Based Institutions" },
  { value: "education", label: "Educational Institutions" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "hospitality", label: "Hospitality & Health" },
];

const WhoWeHelpPage = () => {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? allOrganizations
      : allOrganizations.filter((o) => o.sector === filter);

  return (
    <PageTransition>
      <Navbar />
      <PageHeader title="Who We Help" breadcrumb="Who We Help" />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-gold">
                Our Clients
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <p className="font-sans text-muted-foreground leading-relaxed">
              We are proud to serve a diverse portfolio of organizations across
              multiple sectors.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                  filter === cat.value
                    ? "bg-oxford text-primary-foreground shadow-oxford"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Clients Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((org, i) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                layout
                className="bg-card border border-border rounded-xl p-6 hover:shadow-oxford hover:border-gold/30 transition-all duration-300"
              >
                {org.logo ? (
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="max-h-12 object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-oxford flex items-center justify-center">
                      <span className="font-sans text-lg font-bold text-primary-foreground">
                        {org.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 text-center">
                  {org.name}
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed text-center">
                  {org.desc}
                </p>
                <div className="mt-3 text-center">
                  <span className="px-3 py-1 rounded-full bg-secondary font-sans text-[10px] uppercase tracking-wider text-muted-foreground">
                    {sectorLabels[org.sector] || org.sector}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-oxford-gradient text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Need Help? Call Our Team
            </h2>
            <a
              href="tel:+254722207938"
              className="inline-flex items-center gap-2 bg-oxford font-sans font-semibold px-8 py-4 rounded-lg text-primary-foreground border border-primary-foreground/20 hover:bg-oxford-light transition-colors text-sm"
            >
              +254 722 207 938
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

export default WhoWeHelpPage;
