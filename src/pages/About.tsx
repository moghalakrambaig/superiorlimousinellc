import { motion } from "framer-motion";

const About = () => {
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
              About <span className="text-accent">Us</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Delivering Unparalleled Luxury Transportation Services for Over 25 Years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 mx-auto text-center"
            >
              <h2 className="font-display text-4xl font-bold text-foreground">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" />
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Superior Limousine LLC Executive Transportation began with a simple vision to
                provide unparalleled luxury transportation services that exceed
                client expectations at every turn.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Over the past 25 years, we've grown from a single vehicle to
                a fleet of premium limousines, serving thousands of satisfied
                clients across the region. Our commitment to excellence,
                punctuality, and professionalism has made us the preferred
                choice for discerning travelers.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Today, Superior Limousine LLC Executive Transportation stands as a testament to quality service,
                combining traditional values of hospitality with modern
                technology and luxury vehicles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-accent">Values</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for perfection in every aspect of our service, from vehicle maintenance to customer care.",
              },
              {
                title: "Integrity",
                description:
                  "Transparent pricing, honest communication, and ethical business practices guide everything we do.",
              },
              {
                title: "Reliability",
                description:
                  "Punctuality and consistency are our promises. We're there when you need us, every single time.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-sans text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex justify-center flex-wrap gap-8">
            {[
              { number: "20+", label: "Years Experience" },              
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center w-40"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="font-sans text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
