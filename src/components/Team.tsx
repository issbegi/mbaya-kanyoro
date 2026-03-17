import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

// IMPORT TEAM IMAGES FROM ASSETS
import mikeMbaya from "@/assets/mike-mbaya.png";
import andrewBulemi from "@/assets/andrew-bulemi.jpg";
import leahNganga from "@/assets/leah-nganga.png";

const team = [
  {
    name: "FCPA Mike Mbaya",
    role: "Partner",
    image: mikeMbaya,
    bio: "A seasoned professional with decades of experience in audit and financial advisory services across East Africa.",
  },
  {
    name: "CPA Andrew Bulemi",
    role: "Managing Partner / CEO",
    image: andrewBulemi,
    bio: "Leads the firm's strategic direction with expertise in business advisory and corporate governance.",
  },
  {
    name: "CPA Leah Nganga",
    role: "Partner / Deputy CEO",
    image: leahNganga,
    bio: "Specializes in accounting standards, financial reporting, and compliance across multiple sectors.",
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 lg:py-32 bg-background" ref={ref}>
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
              Our People
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Leadership Team
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Highly qualified, knowledgeable, and ethical professionals committed to delivering excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxford-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <a
                    href="https://www.linkedin.com/company/mbaya&associates/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gold flex items-center justify-center"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 text-accent-foreground" />
                  </a>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="font-sans text-sm text-gold font-medium mt-1">{member.role}</p>
              <p className="font-sans text-sm text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;