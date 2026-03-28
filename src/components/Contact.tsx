import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_l7jhb3s";
const EMAILJS_TEMPLATE_ID = "template_rrao4yj";
const EMAILJS_PUBLIC_KEY = "Xs4yGX2iQtyZs1x1m";

const getInitials = (name: string) =>
  name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service || "Not specified",
          message: formData.message,
          initials: getInitials(formData.name),
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="font-sans text-sm font-semibold tracking-widest uppercase text-gold">Get In Touch</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Let's Talk</h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Ready to take your business to the next level? Reach out for a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-oxford-gradient rounded-xl p-8 space-y-8">
              {[
                { icon: MapPin, label: "Visit Us", value: "3rd Floor, Western Heights,\nKaruna Road, Westlands, Nairobi" },
                { icon: Phone, label: "Call Us", value: "+254 722 207 938" },
                { icon: Mail, label: "Email Us", value: "info@mbaya.co.ke" },
                { icon: Clock, label: "Office Hours", value: "Mon – Fri: 8:00 AM – 5:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-sans text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">{item.label}</div>
                    <div className="font-sans text-sm text-primary-foreground whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-sans text-sm font-medium text-foreground block mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="font-sans text-sm font-medium text-foreground block mb-2">Email *</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-sans text-sm font-medium text-foreground block mb-2">Phone</label>
                <input
                  type="tel"
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  placeholder="+254 700 000 000"
                />
              </div>
              <div>
                <label className="font-sans text-sm font-medium text-foreground block mb-2">Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Auditing">Auditing</option>
                  <option value="Tax Advisory">Tax Advisory</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Company Secretarial">Company Secretarial</option>
                  <option value="Risk Assessment">Risk Assessment</option>
                  <option value="Business Advisory">Business Advisory</option>
                  <option value="Other Services">Other Services</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-sans text-sm font-medium text-foreground block mb-2">Message *</label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center gap-2 bg-oxford font-sans font-semibold px-8 py-4 rounded-lg text-primary-foreground hover:bg-oxford-light transition-colors text-sm w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;