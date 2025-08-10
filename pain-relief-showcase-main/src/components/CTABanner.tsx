import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Are you suffering from pain and discomfort?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Don't let pain control your life. Our expert physiotherapists are here to help you 
              get back to doing what you love. Book your consultation today and take the first 
              step towards a pain-free future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" className="text-lg px-8 py-6">
              Contact Us Today
            </Button>
            <div className="text-primary-foreground/60 text-sm">
              or call us at{" "}
              <a href="tel:+919876543210" className="text-accent font-semibold hover:underline">
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-primary-foreground/80">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">Free</div>
              <div className="text-sm text-primary-foreground/80">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-primary-foreground/80">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;