import { Eye, Target, Home, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import drDwayneImage from "@/assets/doctor-spine-hero.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            👨‍⚕️ About Dr. Dwayne
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Expert Home Physiotherapy
          </h2>
          <p className="text-muted-foreground">
            Professional care at your doorstep in Mumbai
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="relative group">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl border-4 border-background">
              <img
                src={drDwayneImage}
                alt="Dr. Dwayne, Senior Physiotherapist"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-primary to-primary/90 text-white p-3 rounded-xl shadow-lg z-20">
              <div className="text-center">
                <div className="text-xl font-bold">10+</div>
                <div className="text-[10px] font-medium opacity-90">Years Exp</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/5 rounded-full -z-10"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Dr. Dwayne <span className="text-primary">PT</span>
              </h2>
              <h3 className="text-muted-foreground">
                Senior Physiotherapist • Home Care Expert
              </h3>
              
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Expert physiotherapy in your home. No travel, no waiting rooms - just personalized care where you're most comfortable.
                </p>
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Post-surgical recovery</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Sports injuries</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Chronic pain management</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-xl border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <Home className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm">Home Benefits</h4>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Faster recovery at home</li>
                  <li>• No travel needed</li>
                  <li>• Lower infection risk</li>
                </ul>
              </div>

              <div className="bg-background p-4 rounded-xl border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-accent/10 rounded-lg">
                    <HeartPulse className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-medium text-sm">My Approach</h4>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Evidence-based care</li>
                  <li>• Pain relief focus</li>
                  <li>• Personalized plans</li>
                </ul>
              </div>
            </div>
            
            {/* CTA */}
            <div className="pt-2">
              <a href="https://wa.me/919901360073" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-5 w-full sm:w-auto">
                  Book Home Visit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;