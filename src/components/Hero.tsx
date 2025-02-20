
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 animate-fade-down">
          Create Your Perfect Moment
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-light mt-2 block">
            on the Oregon Coast
          </span>
        </h1>
        <p className="font-sans text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up">
          Full-service wedding and event planning that transforms your vision into unforgettable celebrations
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90 transition-all duration-300"
        >
          Start Planning
        </Button>
      </div>
    </div>
  );
};
