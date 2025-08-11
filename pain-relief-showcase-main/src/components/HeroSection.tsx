import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/heroImage.jpg";
import googleLogo from "@/assets/image.png";
import { PHONE_CONFIG, handlePhoneClick } from "@/lib/phoneUtils";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-12 md:pt-28 md:pb-20 gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                🏠 Home Physiotherapy
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Pain Relief & Recovery
                <span className="block text-primary">At Your Doorstep</span>
              </h1>
              <p className="text-muted-foreground">
                Expert physio care in Malad. No travel needed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href={PHONE_CONFIG.whatsappLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto"
              >
                <Button variant="accent" size="lg" className="w-full px-6 py-5 text-base">
                  📅 Book Home Visit
                </Button>
              </a>
              <a 
                href={PHONE_CONFIG.telLink}
                onClick={(e) => {
                  e.preventDefault();
                  handlePhoneClick(PHONE_CONFIG.primaryNumber);
                }}
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full px-6 py-5 text-base">
                  📞 Call Now
                </Button>
              </a>
            </div>

            {/* Google Review Rating */}
            <div className="bg-background/90 backdrop-blur-sm p-4 rounded-xl border border-border/50 shadow-sm inline-block max-w-md">
              <div className="flex items-center gap-2">
                <img 
                  src={googleLogo} 
                  alt="Google" 
                  className="h-5 w-5 object-contain"
                />
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium text-sm">4.9/5 (120+ Reviews)</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <span className="text-google-green">●</span>
                <span>Serving Malad & Nearby</span>
              </p>
            </div>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl border-4 border-background">
              <img
                src={heroImage}
                alt="Dr. Dwayne, Senior Physiotherapist"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-3 right-4 bg-background text-foreground px-4 py-2 rounded-full shadow-md border border-border/50 flex items-center gap-1.5">
              <div className="text-primary font-bold text-xl">10+</div>
              <div className="text-xs">Years Exp</div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-48 h-48 bg-accent/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;