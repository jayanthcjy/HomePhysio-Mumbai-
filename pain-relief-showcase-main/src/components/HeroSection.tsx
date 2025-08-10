import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import doctorHero from "@/assets/doctor-spine-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Say Goodbye to{" "}
                <span className="text-primary">Acute Pain</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience expert physiotherapy treatment with our certified professionals. 
                Get back to your active lifestyle with personalized therapy sessions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-lg px-8 py-6">
                Enquire Now
              </Button>
              <Button variant="accent-outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            {/* Google Review Rating */}
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border inline-block">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.9/5</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Based on <span className="font-semibold">500+</span> Google Reviews
              </p>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={doctorHero}
                alt="Professional doctor with spine illustration"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;