import { Eye, Target } from "lucide-react";
import physiotherapistImage from "@/assets/physiotherapist-patient.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src={physiotherapistImage}
              alt="Physiotherapist working with patient"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Physiotherapist in Mulund</h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Best Physiotherapy Clinic in Mumbai
              </h2>
              <p className="text-lg text-muted-foreground">
                With over a decade of experience in providing top-notch physiotherapy services, 
                we are committed to helping our patients achieve optimal health and wellness. 
                Our state-of-the-art facility combined with evidence-based treatments ensures 
                the best possible outcomes for every patient.
              </p>
              <p className="text-lg text-muted-foreground">
                We specialize in treating a wide range of conditions including neck pain, 
                back pain, sports injuries, and post-surgical rehabilitation. Our personalized 
                approach ensures that each treatment plan is tailored to your specific needs.
              </p>
            </div>

            {/* Vision and Mission */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-light p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Our Vision</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  To be the leading physiotherapy clinic that transforms lives through 
                  innovative treatment and compassionate care.
                </p>
              </div>

              <div className="bg-gradient-light p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground">Our Mission</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  To provide exceptional physiotherapy services that help our patients 
                  achieve their health goals and return to active living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;