
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Let's Plan Something Special</h2>
          <p className="text-muted-foreground mb-12">
            Reach out to start planning your perfect event on the Oregon coast
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-secondary/10" />
              <Input placeholder="Email Address" type="email" className="bg-secondary/10" />
            </div>
            <Input placeholder="Event Type" className="bg-secondary/10" />
            <Textarea placeholder="Tell us about your event" className="bg-secondary/10 min-h-[150px]" />
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
