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
          ? "bg-oxford/95 backdrop-blur-md shadow-oxford py-3"
          : "bg-transparent py-5"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center lg:h-auto" style={{ zIndex: 10000 }}>
          <img
            src={logo}
            alt="Mbaya & Kanyoro LLP Logo"
            className="h-14 md:h-16 lg:h-20 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.href}
                className={`font-sans text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname === link.href
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-lg shadow-oxford p-2 min-w-[200px] border border-border">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm font-sans text-foreground hover:bg-secondary rounded-md transition-colors"
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
            className="bg-oxford font-sans text-sm font-semibold px-6 py-2.5 rounded-lg text-primary-foreground border border-primary-foreground/20 hover:bg-oxford-light transition-colors"
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
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Full-screen Menu */}
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
              <div className="pt-6 pb-8 px-6 space-y-1 relative">
                {/* Mobile Close X */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-primary-foreground z-50"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Mobile Logo */}
                <div className="flex justify-center mb-8">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="Mbaya & Kanyoro LLP Logo"
                      className="h-16 md:h-20 object-contain"
                    />
                  </Link>
                </div>

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
                            setOpenDropdown(openDropdown === link.label ? null : link.label)
                          }
                          className="w-full py-3.5 font-sans text-primary-foreground/90 hover:text-gold transition-colors text-base font-medium flex items-center justify-between border-b border-primary-foreground/5"
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
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
                                    className="block py-2.5 text-sm text-primary-foreground/60 hover:text-gold transition-colors"
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
                        className="block py-3.5 font-sans text-primary-foreground/90 hover:text-gold transition-colors text-base font-medium border-b border-primary-foreground/5"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <Link
                    to="/contact"
                    className="block text-center bg-oxford font-sans text-sm font-semibold px-6 py-3.5 rounded-lg text-primary-foreground border border-primary-foreground/20"
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