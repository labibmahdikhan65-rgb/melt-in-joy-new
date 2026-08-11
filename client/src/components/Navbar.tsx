import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";

const IG_HANDLE = "meltinjoy";
const IG_URL = "https://instagram.com/meltinjoy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-cocoa-900/70 border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center" style={{maxWidth: '80rem'}}>
        {/* Logo */}
        <a
          href="#top"
          className="group font-display font-black text-xl md:text-2xl hover:rotate-3 transition-transform"
        >
          <span className="text-cream">Melt</span>
          <span className="font-script text-2xl md:text-3xl text-gold-400 -ml-0.5">
            in Joy
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 items-center">
          <a
            href="#menu"
            className="text-sm uppercase tracking-[0.2em] text-cream-200 hover:text-gold-400 transition-colors"
          >
            Menu
          </a>
          <a
            href="#locations"
            className="text-sm uppercase tracking-[0.2em] text-cream-200 hover:text-gold-400 transition-colors"
          >
            Locations
          </a>
          <a
            href="#open-late"
            className="text-sm uppercase tracking-[0.2em] text-cream-200 hover:text-gold-400 transition-colors"
          >
            Open Late
          </a>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold-400/40 px-4 py-2 text-gold-300 hover:bg-gold-400 hover:text-cocoa-900 transition-colors"
          >
            @{IG_HANDLE}
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-cream-200 hover:text-gold-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden backdrop-blur-xl bg-cocoa-900/95 border-t border-white/5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a
                href="#menu"
                className="font-display text-lg text-cream hover:text-gold-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Menu
              </a>
              <a
                href="#locations"
                className="font-display text-lg text-cream hover:text-gold-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Locations
              </a>
              <a
                href="#open-late"
                className="font-display text-lg text-cream hover:text-gold-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Open Late
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold-400/40 px-4 py-2 text-gold-300 hover:bg-gold-400 hover:text-cocoa-900 transition-colors inline-flex items-center gap-2 w-fit"
              >
                <Instagram size={16} />
                @{IG_HANDLE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
