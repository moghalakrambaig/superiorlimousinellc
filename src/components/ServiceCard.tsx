import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="group p-8 h-full border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-gold cursor-pointer">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 rounded-full bg-secondary group-hover:bg-accent/10 transition-colors duration-300">
            <Icon className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="font-sans text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
