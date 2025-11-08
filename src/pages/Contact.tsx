import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
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
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              We're Here to Assist You — Reach Out for Exceptional Luxury Transportation Services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Center the section horizontally */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 max-w-2xl w-full"
            >
              <div className="text-center">
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="font-sans text-muted-foreground mb-8">
                  Whether you have questions about our services, need a quote, or want to make a reservation, our team is ready to assist you. Contact us via phone, email, or visit our office during business hours.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="w-6 h-6 text-accent" />,
                    title: "Phone",
                    text: "(203) 854-9282",
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-accent" />,
                    title: "Email",
                    text: "superiorlimo@icloud.com",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-accent" />,
                    title: "Address",
                    text: "Norwalk CT",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-accent" />,
                    title: "Business Hours",
                    text: "24/7 Service",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="p-6 border-border hover:border-accent transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-secondary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="font-sans text-muted-foreground whitespace-pre-line">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
