import { motion } from "framer-motion";
import FleetCard from "@/components/FleetCard";

const Fleet = () => {
  const vehicles = [
    {
      image: "https://res.cloudinary.com/dh6g9tp6p/image/upload/v1762125434/LincolnContinental2020_lfexxn.avif",
      name: "Lincoln Continental",
      capacity: "3 Passengers",
      description:
        "Executive Sedan For Business Travelers. Uncompromising Comfort and Sophistication.",
    },
    {
      image: "https://res.cloudinary.com/dh6g9tp6p/image/upload/v1762124653/Lincoln_MKT_gndozy.avif",
      name: "Lincoln MKT",
      capacity: "3 Passengers",
      description:
        "Classic Elegance For Any Occasion. Spacious Interior With Top-Tier Amenities.",
    },
    {
      image: "https://res.cloudinary.com/dh6g9tp6p/image/upload/v1762125046/Chevysuburban_ikicra.avif",
      name: "Chevy Suburban",
      capacity: "6 Passengers",
      description:
        "Redefining Luxury SUV Travel — The Premier Choice For Corporate Clients And VIP Service.",
    },
    {
      image: "https://res.cloudinary.com/dh6g9tp6p/image/upload/v1762127551/2014-Mercedes-S-Class2_mam0pa.jpg",
      name: "Mercedes Benz S-Class",
      capacity: "3 Passengers",
      description:
        "Luxury Sedan With Cutting-Edge Technology And Unmatched Comfort.",
    },
    {
      image: "https://res.cloudinary.com/dh6g9tp6p/image/upload/v1762127550/Cadillac_Escalade_hm9h3s.avif",
      name: "Cadillac Escalade",
      capacity: "6 Passengers",
      description:
        "The Ultimate In Luxury SUV Transportation. Perfect For Corporate Events And VIP Service.",
    },
  ];

  const features = [
    "Leather Interiors",
    "Climate Control",
    "LED Ambient Lighting",
    "Professional Chauffeur",
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
              Our <span className="text-accent">Fleet</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Experience luxury in motion with our meticulously maintained
              collection of premium vehicles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <FleetCard key={vehicle.name} {...vehicle} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Premium <span className="text-accent">Features</span>
            </h2>
          </motion.div>

          {/* Flex container for one-line features */}
          <div className="flex justify-center gap-6 max-w-6xl mx-auto flex-nowrap overflow-x-auto px-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors duration-300 flex-shrink-0 min-w-[180px]"
              >
                <p className="font-sans text-foreground font-medium">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
