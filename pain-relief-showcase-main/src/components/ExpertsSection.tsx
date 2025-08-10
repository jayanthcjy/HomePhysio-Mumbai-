import { Button } from "@/components/ui/button";
import doctorOffice from "@/assets/doctor-office.jpg";

const ExpertsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Meet Our <span className="text-primary">Expert Team</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our team of certified physiotherapists brings years of experience and 
                specialized training to provide you with the highest quality care. We stay 
                current with the latest research and techniques in physiotherapy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-light p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Certified Professionals
                </h3>
                <p className="text-muted-foreground text-sm">
                  All our physiotherapists are licensed and certified with ongoing 
                  education in the latest treatment methodologies.
                </p>
              </div>

              <div className="bg-gradient-light p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Personalized Approach
                </h3>
                <p className="text-muted-foreground text-sm">
                  We believe every patient is unique. Our treatment plans are 
                  customized to your specific condition and recovery goals.
                </p>
              </div>

              <div className="bg-gradient-light p-6 rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">
                  Evidence-Based Care
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our treatments are based on the latest scientific research and 
                  proven methodologies for optimal patient outcomes.
                </p>
              </div>
            </div>

            <Button variant="accent" size="lg">
              Meet Our Team
            </Button>
          </div>

          {/* Right - Doctor Image */}
          <div className="relative">
            <img
              src={doctorOffice}
              alt="Professional doctor in office"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/95 backdrop-blur-sm p-6 rounded-2xl border border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-xs text-muted-foreground">Patients Treated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;