import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Users, Award, Globe, Lightbulb, Heart, MessageCircle } from "lucide-react";

// Import asset images
import officeImage from "@/assets/slide2.png";
import gmniLogo from "@/assets/gmni.png";

const values = [
  { icon: Shield, label: "Integrity & Honesty", desc: "We uphold the highest standards of professional ethics in everything we do." },
  { icon: Target, label: "Professionalism", desc: "Delivering expert solutions with precision, diligence, and attention to detail." },
  { icon: Users, label: "Accountability", desc: "Taking ownership of our commitments and delivering results you can count on." },
  { icon: Lightbulb, label: "Innovation", desc: "Leveraging cutting-edge technology and forward-thinking approaches." },
  { icon: Heart, label: "Respect", desc: "Treating every client and colleague with dignity and consideration." },
  { icon: Award, label: "Service Delivery", desc: "Going above and beyond to exceed client expectations consistently." },
  { icon: Globe, label: "Knowledge Sharing", desc: "Fostering a culture of continuous learning and professional development." },
  { icon: MessageCircle, label: "Open Communication", desc: "Building trust through transparent and honest dialogue with all stakeholders." },
];

const memberships = [
  "Institute of Certified Public Accountants of Kenya (ICPAK)",
  "GMN International – Global Network of Accounting Firms",
  "International Federation of Accountants (IFAC) – Partner participation",
  "Kenya Revenue Authority (KRA) – Registered Tax Agents",
];

const AboutPage = () => {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const memberRef = useRef(null);
  const memberInView = useInView(memberRef, { once: true, margin: "-100px" });

  return (
    <PageTransition>
      <Navbar />
      <PageHeader title="Our Story" breadcrumb="Our Story" />

      {/* Story Section */}
      <section className="py-24 bg-background" ref={storyRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gold" />
                <span className="font-sans text-sm font-semibold tracking-widest uppercase text-gold">
                  Our Legacy
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Delivering Excellence <span className="text-gradient-gold">Since 1979</span>
              </h2>

              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                Founded in 1979, Mbaya & Kanyoro LLP (formerly Mbaya & Associates) is a dynamic business advisory firm committed to delivering outstanding financial solutions tailored to meet client expectations. For over four decades, our talented team has helped enterprises across private, public, not-for-profit, and other diverse sectors truly take off.
              </p>

              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                Our innovative approach to solutions, coupled with a direct partnership focus with our clients, helps us ensure that value growth areas are identified and exploited wherever possible.
              </p>

              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                As a proud member of <strong className="text-foreground">GMN International</strong>, an association of legally independent accounting firms, we have expanded our reach globally with partner firms in Nigeria, Egypt, DR-Congo, Mauritius, Morocco, and South Africa. We maintain a strong presence across Rwanda, Burundi, Tanzania, Uganda, Eritrea, Ethiopia, and South Sudan.
              </p>

              <div className="bg-oxford-gradient rounded-xl p-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "45+", label: "Years of Excellence" },
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

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src={officeImage}
                alt="Mbaya & Kanyoro office"
                className="rounded-xl shadow-oxford w-full object-cover aspect-[4/3]"
                loading="lazy"
              />

            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary" ref={valuesRef}>
        <div className="container mx-auto px-4 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-gold">
                What Drives Us
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>

            <p className="font-sans text-muted-foreground leading-relaxed">
              These aren't values prescribed to our employees — they are the values recognised as already present within the organisation by the very people who work here.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-oxford hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.label}
                </h3>

                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-24 bg-background" ref={memberRef}>
        <div className="container mx-auto px-4 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={memberInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Memberships
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {memberships.map((m) => (
              <div
                key={m}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-oxford flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>

                <p className="font-sans text-sm text-foreground">{m}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img
              src={gmniLogo}
              alt="GMN International Member"
              className="mx-auto max-h-80 object-contain"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

export default AboutPage;