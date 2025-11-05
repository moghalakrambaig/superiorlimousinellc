import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">
              Superior <span className="text-accent">Limousine LLC Executive Transportation</span>
            </h3>
            <p className="font-sans text-sm text-primary-foreground/80">
              Premier Luxury Transportation Services For Over 25 Years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Fleet", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-sans text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 font-sans text-sm text-primary-foreground/80">
              <li>Airport Transfers</li>
              <li>Corporate Events</li>
              <li>City Tours</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="font-sans text-sm text-primary-foreground/80">
                  (203) 854-9282
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="font-sans text-sm text-primary-foreground/80">
                  superiorlimo@icloud.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="font-sans text-sm text-primary-foreground/80">
                  22 Emerson st. Norwalk CT 06855
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-primary-foreground/60">
            © 2025 Superior Limousine LLC Executive Transportation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-sans text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
