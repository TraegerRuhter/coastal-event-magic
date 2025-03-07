
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Creating Magical Moments on the Oregon Coast</h2>
            <p className="text-muted-foreground mb-6">
              With years of experience in event planning and deep roots in the Oregon coast community, we bring your vision to life in the most stunning locations along the Pacific.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of dedicated professionals handles every detail, from venue selection to day-of coordination, ensuring your special day is everything you've dreamed of and more.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
