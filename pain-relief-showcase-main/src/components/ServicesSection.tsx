import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesSection = () => {
  const services = [
    {
      id: "neck-pain",
      name: "Neck Pain",
      image: "/placeholder.svg",
      description: "Comprehensive treatment for cervical spine issues including muscle tension, herniated discs, and nerve compression. Our evidence-based approach combines manual therapy, exercise prescription, and ergonomic education.",
      features: [
        "Manual cervical spine mobilization",
        "Targeted strengthening exercises",
        "Postural correction techniques",
        "Ergonomic workplace assessment"
      ]
    },
    {
      id: "back-pain",
      name: "Back Pain",
      image: "/placeholder.svg",
      description: "Expert treatment for lower back pain, sciatica, and spinal conditions. We use advanced techniques to restore function and reduce pain for long-term relief.",
      features: [
        "Spinal mobilization therapy",
        "Core strengthening programs",
        "Pain management techniques",
        "Movement re-education"
      ]
    },
    {
      id: "sports-injury",
      name: "Sports Injury",
      image: "/placeholder.svg",
      description: "Specialized rehabilitation for athletes and active individuals. Get back to your sport stronger and more resilient with our sport-specific treatment protocols.",
      features: [
        "Sport-specific rehabilitation",
        "Performance enhancement",
        "Injury prevention programs",
        "Return-to-sport protocols"
      ]
    },
    {
      id: "rehabilitation",
      name: "Rehabilitation",
      image: "/placeholder.svg",
      description: "Comprehensive post-surgical and post-injury rehabilitation programs designed to restore optimal function and prevent future complications.",
      features: [
        "Post-surgical recovery",
        "Functional restoration",
        "Gait training",
        "Adaptive equipment training"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Specialized Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive physiotherapy services tailored to your specific needs. 
            Our expert team uses the latest techniques and equipment to ensure optimal recovery.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="neck-pain" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="text-sm font-medium"
                >
                  {service.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {service.name} Treatment
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        Treatment Includes:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="accent" size="lg">
                      Book Consultation
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <div className="text-6xl mb-2">🏥</div>
                        <p>Treatment Image</p>
                      </div>
                    </div>
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