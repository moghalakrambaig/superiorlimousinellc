import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Plane, Briefcase, Heart, Award, Shield, Clock, Users } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Professional Airport Pickup and Drop-off Services. Never miss a flight with our punctual chauffeurs.",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Impress Clients and Partners With Our Executive Transportation for Meetings and Corporate Functions.",
    },
   {
      icon: Users,
      title: "Group Transportation",
      description:
        "Coordinated Transportation For Large Groups. Ideal For Conventions, Team Building Events, and Group Outings With Multiple Vehicles Available.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Premium Fleet",
      description: "Latest Luxury Vehicles Maintained to the Highest Standards",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully Certified and Comprehensively Insured for Your Safety",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-Clock Service Whenever You Need Us",
    },
  ];
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored Luxury Transportation For Every Occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-accent">Us</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in every detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <ServiceCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
