import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Fleet", path: "/fleet" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className={`w-full transition duration-300 ease-in-out ${
          scrolled
            ? "bg-white/30 dark:bg-slate-900/30 backdrop-blur-md shadow-xl border-white/10 dark:border-slate-700/20"
            : "bg-white/6 dark:bg-slate-900/6 backdrop-blur-sm shadow-md border-white/5 dark:border-slate-700/8"
        }`}
        style={{ WebkitBackdropFilter: scrolled ? "blur(8px)" : "blur(4px)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center justify-between h-16 md:h-20 px-2 md:px-4 py-1">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center md:items-start leading-tight">
              <Link to="/" className="flex flex-col items-center md:items-start">
                <h1
                  className="text-center md:text-left"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 550,
                    color: "#FFD700",
                    fontSize: "1.25rem",
                    lineHeight: "1.1",
                  }}
                >
                  Superior Limousine LLC
                  <br />
                  Executive Transportation
                </h1>
              </Link>

              {/* Smaller marquee */}
              <div className="relative w-48 overflow-hidden mt-1">
                <motion.div
                  className="text-xs font-sans text-yellow-400 whitespace-nowrap text-center"
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear",
                  }}
                >
                  • We wait for you •
                </motion.div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans text-sm font-medium transition-colors"
                  style={{ color: "#FFD700" }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{ color: "#FFD700" }}
            >
              {isMobileMenuOpen ? (
                <X size={22} color="#FFD700" />
              ) : (
                <Menu size={22} color="#FFD700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-2 space-y-2 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-sans text-sm font-medium transition-colors"
                  style={{ color: "#FFD700" }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
