import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Import the logo
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/team" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Who We Help", href: "/who-we-help" },
  {
    label: "Resources",
    href: "/news-insights",
    children: [
      { label: "News & Insights", href: "/news-insights" },
      { label: "Tax Calendar", href: "/tax-calendar" },
      { label: "Client Portal", href: "/client-portal" },
    ],
  },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? "bg-oxford/95 backdrop-blur-md shadow-oxford py-5"
          : "bg-transparent py-7"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center" style={{ zIndex: 10000 }}>
          <img
            src={logo}
            alt="Mbaya & Kanyoro LLP Logo"
            className="h-20 md:h-24 lg:h-28 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.href}
                className={`font-sans text-base font-medium transition-colors flex items-center gap-2 ${
                  location.pathname === link.href
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-4 h-4" />}
              </Link>

              {link.children && (
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-lg shadow-oxford p-3 min-w-[220px] border border-border">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-3 text-base font-sans text-foreground hover:bg-secondary rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            className="bg-oxford font-sans text-base font-semibold px-8 py-3 rounded-lg text-primary-foreground border border-primary-foreground/20 hover:bg-oxford-light transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground relative z-20"
          aria-label="Toggle menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-oxford-dark overflow-y-auto"
              style={{ zIndex: 9999 }}
            >
              <div className="pt-8 pb-10 px-6 space-y-2 relative">

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-primary-foreground z-50"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Mobile Logo */}
                <div className="flex justify-center mb-10">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-24 md:h-28 object-contain"
                    />
                  </Link>
                </div>

                {/* Links */}
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.children ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === link.label ? null : link.label
                            )
                          }
                          className="w-full py-4 text-lg font-medium text-primary-foreground/90 hover:text-gold flex items-center justify-between border-b border-primary-foreground/10"
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              openDropdown === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-1 border-l-2 border-gold/30 ml-2">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.href}
                                    className="block py-3 text-base text-primary-foreground/70 hover:text-gold"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className="block py-4 text-lg font-medium text-primary-foreground/90 hover:text-gold border-b border-primary-foreground/10"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8"
                >
                  <Link
                    to="/contact"
                    className="block text-center bg-oxford text-base font-semibold px-8 py-4 rounded-lg text-primary-foreground border border-primary-foreground/20"
                  >
                    Book Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;