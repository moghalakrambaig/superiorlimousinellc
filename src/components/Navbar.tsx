import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Fleet", path: "/fleet" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-24 py-3 md:py-4">
          
          {/* Logo and Marquee */}
          <div className="flex flex-col items-center md:items-start leading-tight space-y-2">
            <Link to="/" className="flex flex-col items-center md:items-start">
              <h1
                className="text-center md:text-left"
                style={{
                  WebkitTextSizeAdjust: "100%",
                  tabSize: 4,
                  fontFeatureSettings: "normal",
                  fontVariationSettings: "normal",
                  WebkitTapHighlightColor: "transparent",
                  textAlign: "center",
                  boxSizing: "border-box",
                  borderWidth: 0,
                  borderStyle: "solid",
                  margin: 5.5,
                  marginBottom: "0.5rem",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 550,
                  color: "#FFD700", // Gold color
                  fontSize: "1.5rem", // Slightly smaller for better fit
                  lineHeight: "1.2",
                  opacity: 1,
                  transform: "none",
                }}
              >
                Superior Limousine LLC
                <br />
                Executive Transportation
              </h1>
            </Link>

            {/* Marquee-style tagline */}
            <div className="relative w-72 md:w-56 overflow-hidden">
              <motion.div
                className="text-sm md:text-base font-sans text-yellow-400 whitespace-nowrap text-center"
                animate={{ x: ["200%", "-200%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "linear",
                }}
              >
                • &nbsp; We wait for you &nbsp; •
              </motion.div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mt-3 md:mt-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm font-medium transition-colors hover:text-yellow-400 ${
                  location.pathname === link.path
                    ? "text-yellow-400"
                    : "text-primary-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground mt-3 md:mt-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-sans text-sm font-medium transition-colors hover:text-yellow-400 ${
                  location.pathname === link.path
                    ? "text-yellow-400"
                    : "text-primary-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
