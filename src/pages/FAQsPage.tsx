import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What services does M&K offer?",
    answer: `We provide a broad range of financial services across many sectors:\n\n• Accounting & Audit — Compilations, independent reviews, audits, agreed-upon procedures, management accounting, and online accounting.\n\n• Business Advisory & Corporate Services — Business valuations, due diligence, forecasts and projections, control and risk management, business structures, estate and succession planning, cash-flow management, strategic business planning, and asset protection.\n\n• Taxation Support Services — Tax compliance, payroll outsourcing, VAT, tax planning, tax health checks, and customs & excise advisory.`,
  },
  {
    question: "Does M&K offer personalized financial advice for individuals?",
    answer: "Yes, we provide financial planning and advice for individual clients, including personal tax planning and wealth management services tailored to your specific circumstances.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can contact us at:\n\n• Telephone: +254 20 444 3868 / +254 20 444 6466\n• Mobile: +254 722 207 938\n• Email: info@mbaya.co.ke\n\nAlternatively, use the contact form on our Contact Us page to schedule a consultation.",
  },
  {
    question: "What professional affiliations & ethical standards does M&K hold?",
    answer: "The firm is registered with the Institute of Certified Public Accountants of Kenya (ICPAK). Our partners and all senior professionals are registered ICPAK members in good standing. Every person in our firm subscribes to core values of honesty, respect, accountability, service delivery, integrity, open communication, professionalism, and leadership through innovation.",
  },
  {
    question: "Can M&K assist with compliance related to East African Community (EAC) regulations?",
    answer: "Our team includes members who have been involved in developing the strategic plan for the Institute of Certified Public Accountants of Rwanda, amending the Accountants Act in Kenya, and developing the Financial Reporting Oversight Framework. Our senior professionals have adept expertise in dealing with compliance issues arising from regional economic integration within the EAC.",
  },
  {
    question: "What makes M&K different from other firms?",
    answer: "At M&K, we pride ourselves in a personalized service model. Our team hand-holds clients from partners to associates. We carry a rich history of a well-balanced staff-to-client ratio spanning four decades. Our partners have been with the firm for over two decades, supported by a dedicated team of professionals. We apply cutting-edge, cloud-based technology including CaseWare IDEA in conducting our audits and accounting services.",
  },
  {
    question: "How does M&K stay updated on changes in financial reporting standards?",
    answer: "We are committed to compliance with International Financial Reporting Standards (IFRS) and ICPAK guidelines. One of our partners sits on an IFAC Committee tasked with developing international accounting standards. Our professionals regularly participate in trainings offered by accounting regulatory institutes to maintain up-to-date practicing standards and certifications.",
  },
  {
    question: "What is M&K's approach to Corporate Social Responsibility?",
    answer: "We believe in our responsibility to address climate change challenges while giving back to the community. Our team regularly engages in tree planting, community clean-ups, education sponsorships, and healthcare initiatives. These CSR activities also serve as powerful team-building tools, fostering a cohesive, purpose-driven workplace culture.",
  },
];

const FAQsPage = () => {
  return (
    <PageTransition>
      <Navbar />
      <PageHeader title="FAQs" breadcrumb="FAQs" />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-muted-foreground">
              Find answers to common questions about our services, approach, and expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/30 transition-colors"
                >
                  <AccordionTrigger className="font-sans text-sm font-medium text-foreground hover:text-gold py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed whitespace-pre-line pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="font-sans text-sm text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-oxford font-sans font-semibold px-6 py-3 rounded-lg text-primary-foreground hover:bg-oxford-light transition-colors text-sm"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

export default FAQsPage;
