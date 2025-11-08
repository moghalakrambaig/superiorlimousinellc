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
        <div className="flex flex-row items-center justify-between h-16 md:h-20">
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

            {/* Smaller, smoother marquee */}
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
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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