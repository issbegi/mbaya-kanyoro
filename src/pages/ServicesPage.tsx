import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardCheck, Calculator, FileText, Shield, Scale, BarChart3,
  ArrowRight, CheckCircle2
} from "lucide-react";

// Import local images
import auditImg from "@/assets/audit.png";
import taxImg from "@/assets/tax.png";
import accountImg from "@/assets/account.png";
import companyImg from "@/assets/company.png";
import riskImg from "@/assets/risk.png";

const services = [
  {
    icon: ClipboardCheck,
    title: "Auditing",
    slug: "auditing",
    desc: "Independent audits, agreed-upon procedures, internal audits, and management reviews ensuring compliance with international auditing standards.",
    features: ["Independent External Audits", "Internal Audits & Reviews", "Agreed-Upon Procedures", "Management Letter Reviews", "Compliance Audits"],
    image: auditImg,
  },
  {
    icon: Calculator,
    title: "Tax Advisory",
    slug: "tax",
    desc: "Tax compliance, payroll outsourcing, VAT planning, tax health checks, customs & excise advisory, and strategic tax planning.",
    features: ["Tax Compliance & Returns", "Payroll Outsourcing", "VAT Planning & Advisory", "Tax Health Checks", "Customs & Excise Advisory"],
    image: taxImg,
  },
  {
    icon: FileText,
    title: "Accounting",
    slug: "accounting",
    desc: "Compilations, independent reviews, management accounting, online bookkeeping, and outsourced accounting solutions.",
    features: ["Financial Compilations", "Independent Reviews", "Management Accounting", "Online Bookkeeping", "Outsourced Accounting"],
    image: accountImg,
  },
  {
    icon: Scale,
    title: "Company Secretarial",
    slug: "company-secretarial",
    desc: "Business structures, company registration, compliance management, corporate governance, and litigation support services.",
    features: ["Company Registration", "Compliance Management", "Corporate Governance", "Litigation Support", "Annual Returns Filing"],
    image: companyImg,
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    slug: "risk-assessment",
    desc: "Organizational risk identification, control evaluation, risk mitigation strategies, and enterprise risk management frameworks.",
    features: ["Risk Identification", "Control Evaluation", "Mitigation Strategies", "Enterprise Risk Management", "Fraud Risk Assessment"],
    image: riskImg,
  },
  {
    icon: BarChart3,
    title: "Business Advisory",
    slug: "business-advisory",
    desc: "Business valuations, due diligence, forecasts & projections, cash-flow management, estate and succession planning.",
    features: ["Business Valuations", "Due Diligence", "Forecasts & Projections", "Cash-Flow Management", "Succession Planning"],
    image: null, // You can add a local image here if you have one
  },
];

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <PageTransition>
      <Navbar />
      <PageHeader title="Our Services" breadcrumb="Services" />

      <section className="py-24 bg-background" ref={ref}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="font-sans text-muted-foreground leading-relaxed">
              Comprehensive financial and advisory services tailored to help your business thrive in today's complex regulatory landscape.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-oxford flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="font-sans text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 font-sans text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-oxford font-sans font-semibold px-6 py-3 rounded-lg text-primary-foreground hover:bg-oxford-light transition-colors text-sm"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                {service.image && (
                  <div className={`bg-secondary rounded-xl p-8 flex items-center justify-center aspect-[4/3] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-40 object-contain opacity-80"
                      loading="lazy"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-oxford-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="font-sans text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Let our team of experienced professionals help you navigate your financial challenges.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-oxford font-sans font-semibold px-8 py-4 rounded-lg text-primary-foreground border border-primary-foreground/20 hover:bg-oxford-light transition-colors text-sm"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

export default ServicesPage;