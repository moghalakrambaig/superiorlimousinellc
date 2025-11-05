import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  Plane,
  Briefcase,
  Heart,
  PartyPopper,
  MapPin,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Reliable and Punctual Airport Transportation. We Track Your Flight and Adjust Pickup Times Accordingly. Meet and Greet Service Available.",
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description:
        "Professional Transportation for Business Executives. Perfect for Client Meetings, Conferences, and Corporate Events. Discrete and Efficient Service.",
    },
    {
      icon: MapPin,
      title: "City Tours",
      description:
        "Explore the City in Comfort With Our Guided Luxury Tours. Customizable Itineraries and Knowledgeable Chauffeurs to Enhance Your Experience.",
    },
    {
      icon: Users,
      title: "Group Transportation",
      description:
        "Coordinated Transportation For Large Groups. Ideal For Conventions, Team Building Events, and Group Outings With Multiple Vehicles Available.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Comprehensive Luxury Transportation Solutions Tailored to Your
              Unique Needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Service <span className="text-accent">Guarantee</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-8 md:p-12"
            >
              <ul className="space-y-4 font-sans text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>
                    Professional, Licensed Chauffeurs With Extensive Experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>
                    Vehicles Sanitized and Inspected Before Every Service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>24/7 Customer Support and Real-Time Tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>
                    Flexible Cancellation Policy and Transparent Pricing
                  </span>
                </li>              
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
