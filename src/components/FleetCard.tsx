import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FleetCardProps {
  image: string;
  name: string;
  capacity: string;
  description: string;
  delay?: number;
}

const FleetCard = ({
  image,
  name,
  capacity,
  description,
  delay = 0,
}: FleetCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="group overflow-hidden border-border hover:border-accent transition-all duration-300 hover:shadow-gold">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {name}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users size={18} />
              <span className="text-sm">{capacity}</span>
            </div>
          </div>
          <p className="font-sans text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default FleetCard;
