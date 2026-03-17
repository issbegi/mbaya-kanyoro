import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Following our engagement with the above referenced accountants, we found their services to be of high quality in terms of experience, team work, and rich knowledge on Generally Accepted Accounting Principles (GAAP) and delivery within the stipulated timelines. We have enjoyed a cordial professional relationship with Mbaya and Associates and as they have served as dependable accountants to our organization.",
    author: "Julien Bertrand",
    title: "APAC CFO, BHS Corrugated Limited",
  },
  {
    quote:
      "We had the pleasure of working with Mbaya & Associates as our auditors. Their role included review of the financial statements in accordance with International Standards on Auditing and International Financial Reporting Standards, risk assessment process, control weaknesses, regulatory, procedures and management policies and delivery of reports within the required timelines.",
    author: "MD",
    title: "Faida Investment Bank",
  },
  {
    quote:
      "Their services have assisted East African Portland Cement PLC - Staff Retirement Benefits Scheme to achieve its performance targets, ensure reliable financial reporting and ensure compliance with laws and regulations.",
    author: "HOD, Fund Accounting",
    title: "Zamara",
  },
  {
    quote:
      "We have worked well with Mbaya & Associates over the years. They have conducted their audits professionally and we have seen their quality of service grow over the years. We have also benefited from their advice on accounting issues outside the normal audit timeframes, regular tax updates and newsletters.",
    author: "Director of Finance",
    title: "Hope World Wide Kenya",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-oxford-gradient" ref={ref}>
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
              Client Feedback
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <Quote className="w-12 h-12 text-gold/30 mx-auto mb-8" />
          <p className="font-sans text-lg md:text-xl text-primary-foreground/80 leading-relaxed italic mb-8">
            "{testimonials[current].quote}"
          </p>
          <div className="font-display text-lg font-semibold text-gold">
            {testimonials[current].author}
          </div>
          <div className="font-sans text-sm text-primary-foreground/50 mt-1">
            {testimonials[current].title}
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-gold hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-gold w-6" : "bg-primary-foreground/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-gold hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
