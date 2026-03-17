import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-oxford-dark pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* GRID FIXED: now 3 columns instead of 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand / Logo */}
          <div className="flex flex-col items-start max-w-sm">
            <Link to="/" className="mb-4">
              <img
                src={logo}
                alt="Mbaya & Kanyoro LLP Logo"
                className="h-20 object-contain"
              />
            </Link>

            <p className="font-sans text-sm text-primary-foreground/50 leading-relaxed">
              A dynamic business advisory firm delivering outstanding financial
              solutions since 1979. Proud member of GMN International.
            </p>

            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "https://web.facebook.com/Mbayallp/", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com/mbayaassociates", label: "X (Twitter)" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/mbaya&associates/", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/50 hover:bg-gold hover:text-accent-foreground hover:border-gold transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (cleaned) */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Who We Help", href: "/who-we-help" },
                { label: "FAQs", href: "/faqs" },
                { label: "Contact Us", href: "/contact" },
                { label: "Memberships", href: "/professional-memberships" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="font-sans text-sm text-primary-foreground/50 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 font-sans text-sm text-primary-foreground/50">
              <p>
                3rd Floor, Western Heights <br />
                Karuna Road, Westlands, Nairobi
              </p>

              <p>
                <a
                  href="tel:+254722207938"
                  className="hover:text-gold transition-colors"
                >
                  +254 722 207 938
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@mbaya.co.ke"
                  className="hover:text-gold transition-colors"
                >
                  info@mbaya.co.ke
                </a>
              </p>

              <p>Mon – Fri: 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="font-sans text-xs text-primary-foreground/30">
              © {new Date().getFullYear()} Mbaya & Kanyoro LLP. All Rights Reserved.
            </p>

            <div className="flex gap-4">
              <Link
                to="/privacy-policy"
                className="font-sans text-xs text-primary-foreground/30 hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-sans text-xs text-primary-foreground/30 hover:text-gold transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;