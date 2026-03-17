import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardCheck, Calculator, FileText, Shield, Scale, BarChart3,
} from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Auditing",
    desc: "Independent audits, agreed-upon procedures, internal audits, and management reviews ensuring compliance with international auditing standards.",
  },
  {
    icon: Calculator,
    title: "Tax Advisory",
    desc: "Tax compliance, payroll outsourcing, VAT planning, tax health checks, customs & excise advisory, and strategic tax planning.",
  },
  {
    icon: FileText,
    title: "Accounting",
    desc: "Compilations, independent reviews, management accounting, online bookkeeping, and outsourced accounting solutions.",
  },
  {
    icon: Scale,
    title: "Company Secretarial",
    desc: "Business structures, company registration, compliance management, corporate governance, and litigation support services.",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    desc: "Organizational risk identification, control evaluation, risk mitigation strategies, and enterprise risk management frameworks.",
  },
  {
    icon: BarChart3,
    title: "Business Advisory",
    desc: "Business valuations, due diligence, forecasts & projections, cash-flow management, estate and succession planning.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="font-sans text-sm font-semibold tracking-widest uppercase text-gold">
              What We Do
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Comprehensive financial and advisory services tailored to help your business thrive
            in today's complex regulatory landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl p-8 border border-border hover:shadow-oxford hover:border-gold/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-oxford flex items-center justify-center mb-6 group-hover:bg-gold-gradient transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-oxford font-sans font-semibold px-8 py-4 rounded-lg text-primary-foreground hover:bg-oxford-light transition-colors text-sm"
          >
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
