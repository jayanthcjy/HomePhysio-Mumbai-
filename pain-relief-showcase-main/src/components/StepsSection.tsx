import { Calendar, Stethoscope, Users, Heart } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Make Appointment",
      description: "Book your consultation online or call us. We offer flexible scheduling to fit your busy lifestyle."
    },
    {
      icon: Stethoscope,
      title: "Get Consultation",
      description: "Receive a comprehensive assessment from our experienced physiotherapists to understand your condition."
    },
    {
      icon: Users,
      title: "Meet Our Doctors",
      description: "Work with our team of certified professionals who will design your personalized treatment plan."
    },
    {
      icon: Heart,
      title: "Enjoy Your Therapy",
      description: "Experience effective treatment in our modern facility and get back to your active lifestyle."
    }
  ];

  return (
    <section className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Your Journey to Recovery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've streamlined our process to make your path to recovery as smooth as possible. 
            Here's what you can expect when you choose our clinic.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step number */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;