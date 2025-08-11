import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_CONFIG, handlePhoneClick } from "@/lib/phoneUtils";

const ServicesSection = () => {
  const services = [
    {
      id: "home-rehab",
      name: "Home Rehab",
      image: "https://res.cloudinary.com/dvwzde3vf/image/upload/v1753435965/rehab_dwzrch.png?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Therapist assisting patient at home",
      description: "Professional physio care at your doorstep. Recover in comfort with personalized treatment plans.",
      features: [
        "🏠 At-home sessions",
        "🎯 Personalized plans",
        "📱 Video guides",
        "📊 Progress tracking"
      ]
    },
    {
      id: "geriatric-care",
      name: "Senior Care",
      image: "https://res.cloudinary.com/dvwzde3vf/image/upload/v1754879871/seniorCare_keanhk.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Elderly woman with therapist",
      description: "Specialized care helping seniors stay mobile, independent, and pain-free at home.",
      features: [
        "🚶 Fall prevention",
        "⚖️ Balance training",
        "🏡 Home safety",
        "🛠️ Mobility aids"
      ]
    },
    {
      id: "sports-rehab",
      name: "Sports Recovery",
      image: "https://res.cloudinary.com/dvwzde3vf/image/upload/v1753411214/Sports_injury2_fsbukx.png?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Athlete in treatment",
      description: "Get back in the game faster with targeted rehab for sports injuries.",
      features: [
        "🏃 Sport-specific rehab",
        "🛡️ Injury prevention",
        "⚡ Performance boost",
        "📈 Recovery tracking"
      ]
    },
    {
      id: "post-surgery",
      name: "Post-Surgery",
      image: "https://res.cloudinary.com/dvwzde3vf/image/upload/v1753411680/Rehab_tqgalh.png?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Post-surgical rehab",
      description: "Expert rehab after surgery. Regain strength and mobility at home.",
      features: [
        "🩹 Scar management",
        "🔄 Range of motion",
        "💪 Strength building",
        "📆 Recovery timeline"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Expert Physio Care at Home
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional therapy in your home. No travel needed.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="home-rehab" className="w-full">
            <div className="relative">
              <TabsList className="flex w-full overflow-x-auto pb-2 mb-8 gap-2 px-1">
                {services.map((service) => (
                  <TabsTrigger 
                    key={service.id} 
                    value={service.id}
                    className="px-4 py-2.5 text-sm sm:px-6 sm:py-3 font-medium transition-all duration-200 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg whitespace-nowrap flex-shrink-0"
                  >
                    <span className="block sm:inline">
                      {service.id === 'home-rehab' && '🏠 '}
                      {service.id === 'geriatric-care' && '👵 '}
                      {service.id === 'sports-rehab' && '🏃 '}
                      {service.id === 'post-surgery' && '🩹 '}
                      {service.name}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
            </div>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground">
                        Key Benefits:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2.5">
                        {service.features.map((feature, index) => (
                          <li key={index} className="text-muted-foreground text-sm">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <a 
                        href={PHONE_CONFIG.whatsappLink}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto group"
                        aria-label="Chat on WhatsApp"
                        title="Book a home visit via WhatsApp"
                      >
                        <Button 
                          variant="accent" 
                          size="lg" 
                          className="w-full text-lg px-8 py-6 bg-accent hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Book Home Visit
                        </Button>
                      </a>
                      <a 
                        href={PHONE_CONFIG.telLink}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePhoneClick(PHONE_CONFIG.primaryNumber);
                        }}
                        className="w-full sm:w-auto group cursor-pointer"
                        aria-label="Call Dr. Dwayne"
                        title={`Call ${PHONE_CONFIG.primaryNumber}`}
                      >
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full text-lg px-8 py-6 border-primary/30 hover:border-primary/50 text-foreground hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
                        >
                          <Phone className="h-5 w-5" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border/30">
                      <img 
                        src={service.image} 
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none"></div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-full -z-10 hidden md:block"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/5 rounded-full -z-10 hidden md:block"></div>
                    
                    {/* Image credit badge */}
                    
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;