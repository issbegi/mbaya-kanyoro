import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, Briefcase, Landmark, Heart, Factory } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Corporates",
    desc: "Large enterprises seeking robust audit, compliance, and strategic financial advisory to navigate complex regulatory environments.",
  },
  {
    icon: Briefcase,
    title: "SMEs",
    desc: "Small and medium enterprises needing scalable accounting, tax planning, and business advisory to fuel sustainable growth.",
  },
  {
    icon: Globe,
    title: "NGOs & Non-Profits",
    desc: "International and local organizations requiring donor-compliant audits, grant management, and transparent financial reporting.",
  },
  {
    icon: Landmark,
    title: "Government & Parastatals",
    desc: "Public sector entities demanding rigorous audit standards, procurement compliance, and accountability frameworks.",
  },
  {
    icon: Heart,
    title: "Faith-Based Organizations",
    desc: "Churches, mosques, and religious institutions seeking transparent financial stewardship and governance support.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industry",
    desc: "Industrial firms requiring cost accounting, tax optimization, customs advisory, and financial risk management.",
  },
];

const WhoWeHelp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who-we-help" className="py-24 lg:py-32 bg-background" ref={ref}>
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
              Industries We Serve
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who We Help
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            From multinational corporations to community organizations, we deliver
            tailored financial solutions across diverse sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-5 p-6 rounded-xl border border-border bg-card hover:shadow-oxford hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-oxford flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
