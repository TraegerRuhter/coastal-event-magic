
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calendar, Users, Music } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Planning",
    description: "Complete wedding planning services tailored to your dreams",
    icon: Heart,
  },
  {
    title: "Corporate Events",
    description: "Professional corporate event management and coordination",
    icon: Calendar,
  },
  {
    title: "Social Gatherings",
    description: "Memorable social events that bring people together",
    icon: Users,
  },
  {
    title: "Entertainment",
    description: "Curated entertainment options for any occasion",
    icon: Music,
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-4">Our Services</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We offer comprehensive event planning services to create unforgettable moments on the beautiful Oregon coast
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
