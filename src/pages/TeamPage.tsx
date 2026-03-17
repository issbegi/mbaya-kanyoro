import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

// IMPORT TEAM IMAGES
import mikeMbaya from "@/assets/mike-mbaya.png";
import andrewBulemi from "@/assets/andrew-bulemi.jpg";
import leahNganga from "@/assets/leah-nganga.png";

const leadership = [
  {
    name: "FCPA Mike Mbaya",
    role: "Partner",
    image: mikeMbaya,
    bio: "A seasoned professional with decades of experience in audit and financial advisory services across East Africa. FCPA Mbaya has been instrumental in shaping the firm's strategic direction and maintaining its reputation for excellence since founding the practice in 1979.",
    qualifications: "Fellow, CPA Kenya | Member, ICPAK | GMN International Board",
  },
  {
    name: "CPA Andrew Bulemi",
    role: "Managing Partner / CEO",
    image: andrewBulemi,
    bio: "Leads the firm's strategic direction with expertise in business advisory and corporate governance. CPA Bulemi brings over two decades of experience in audit, tax advisory, and management consulting, serving clients across multiple sectors in East Africa.",
    qualifications: "CPA Kenya | Member, ICPAK | Business Advisory Specialist",
  },
  {
    name: "CPA Leah Nganga",
    role: "Partner / Deputy CEO",
    image: leahNganga,
    bio: "Specializes in accounting standards, financial reporting, and compliance across multiple sectors. CPA Nganga plays a key role in quality assurance and oversees the firm's accounting and audit methodology, ensuring adherence to international standards.",
    qualifications: "CPA Kenya | Member, ICPAK | IFRS Specialist",
  },
];

const TeamPage = () => {
  return (
    <PageTransition>
      <Navbar />
      <PageHeader title="Our Team" breadcrumb="Team" />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-gold">
                Leadership
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Partners
            </h2>

            <p className="font-sans text-muted-foreground leading-relaxed">
              Highly qualified, knowledgeable, and ethical professionals committed
              to delivering excellence. Our partners have walked with the firm for
              over two decades.
            </p>
          </motion.div>

          <div className="space-y-16">
            {leadership.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* IMAGE */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-xl aspect-square max-w-sm mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="font-sans text-sm font-semibold text-gold uppercase tracking-wider">
                    {member.role}
                  </span>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                    {member.name}
                  </h3>

                  <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  <p className="font-sans text-sm text-foreground/70 mb-6 italic">
                    {member.qualifications}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/company/mbaya&associates/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-oxford flex items-center justify-center text-primary-foreground hover:bg-gold transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>

                    <a
                      href="mailto:info@mbaya.co.ke"
                      className="w-10 h-10 rounded-lg bg-oxford flex items-center justify-center text-primary-foreground hover:bg-gold transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Our Team Culture
            </h2>

            <p className="font-sans text-muted-foreground leading-relaxed mb-4">
              At M&K, we pride ourselves in a personalized service model. Our team
              hand-holds our clients right from the partners to the associates.
              We carry with us a rich history of a well-balanced staff-to-client
              ratio going back four decades.
            </p>

            <p className="font-sans text-muted-foreground leading-relaxed">
              We apply cutting-edge, cloud-based technology in conducting our
              audits and accounting services, ensuring efficiency and accuracy
              across all engagements.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

export default TeamPage;