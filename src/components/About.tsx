import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Shield, label: "Integrity & Honesty" },
  { icon: Target, label: "Professionalism" },
  { icon: Users, label: "Accountability" },
  { icon: Award, label: "Innovation" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-gold">
                Our Legacy
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Delivering Excellence <br />
              <span className="text-gradient-gold">Since 1979</span>
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">
              Founded in 1979, Mbaya & Kanyoro LLP (formerly Mbaya & Associates) is a 
              dynamic business advisory firm committed to delivering outstanding financial 
              solutions tailored to meet client expectations.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              As a proud member of <strong className="text-foreground">GMN International</strong>, 
              an association of legally independent accounting firms, we have expanded our 
              reach globally with partner firms in Nigeria, Egypt, DR-Congo, Mauritius, 
              Morocco, and South Africa. We are present across Rwanda, Burundi, Tanzania, 
              Uganda, Eritrea, Ethiopia, and South-Sudan.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-oxford font-sans font-semibold px-6 py-3 rounded-lg text-primary-foreground hover:bg-oxford-light transition-colors text-sm"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-oxford transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{value.label}</h3>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-6 bg-oxford-gradient rounded-xl p-6 grid grid-cols-3 gap-4 text-center">
              {[
                { value: "40+", label: "Team Members" },
                { value: "500+", label: "Assignments" },
                { value: "8", label: "Countries" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-sans text-2xl font-bold text-gold">{s.value}</div>
                  <div className="font-sans text-xs text-primary-foreground/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
