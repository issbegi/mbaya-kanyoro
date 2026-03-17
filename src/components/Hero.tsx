import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

// Import images from assets
import slide1 from "@/assets/slide1.jpg";
import slide2 from "@/assets/slide2.png";

interface HeroSlide {
  image: string;
  tagline: string;
  heading: React.ReactNode;
  description: string;
}

const slides: HeroSlide[] = [
  {
    image: slide1,
    tagline: "In Pursuit of Excellence",
    heading: (
      <>
        <span className="text-primary-foreground">Trusted Financial</span>
        <br />
        <span className="text-gradient-gold">Advisory & Audit</span>
        <br />
        <span className="text-primary-foreground">Since 1979</span>
      </>
    ),
    description:
      "A dynamic business advisory firm delivering outstanding audit, tax, and financial solutions across East Africa and beyond.",
  },
  {
    image: slide2,
    tagline: "Your Growth, Our Mission",
    heading: (
      <>
        <span className="text-primary-foreground">Strategic Partners</span>
        <br />
        <span className="text-gradient-gold">For Your Business</span>
        <br />
        <span className="text-primary-foreground">Growth</span>
      </>
    ),
    description:
      "From compliance to strategy, we empower organizations with expert insights that drive sustainable success and financial clarity.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background images with crossfade */}
      {slides.map((s, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: i === current ? 1 : 0,
            scale: i === current ? 1 : 1.08,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt="Mbaya & Kanyoro LLP"
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold" />
                <span className="font-sans text-sm font-semibold tracking-widest uppercase text-gold">
                  {slide.tagline}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                {slide.heading}
              </h1>

              <p className="font-sans text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-oxford font-sans font-semibold px-8 py-4 rounded-lg text-primary-foreground border border-primary-foreground/20 hover:bg-oxford-light transition-colors text-sm"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+254722207938"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 font-sans font-medium px-8 py-4 rounded-lg text-primary-foreground hover:bg-primary-foreground/5 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              +254 722 207 938
            </a>
          </div>

          {/* Slide indicators */}
          <div className="mt-12 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-10 bg-gold"
                    : "w-4 bg-primary-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;