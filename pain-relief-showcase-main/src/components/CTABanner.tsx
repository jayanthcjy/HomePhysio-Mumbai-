import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CalendarCheck, MessageCircle } from "lucide-react";
import { PHONE_CONFIG, handlePhoneClick } from "@/lib/phoneUtils";

const CTABanner = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-primary to-primary/90 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCI+PHBhdGggZD0iTTAgMGg1MDB2NTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg1MDB2NTAwSDB6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxwYXRoIGQ9Ik0wIDBoNTB2NTBoLTUweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjV2MjVoLTI1eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PC9zdmc+')] opacity-10"></div>
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Need Expert Physio at Home? 📍
            </h2>
            <p className="text-white/90 max-w-lg mx-auto leading-relaxed">
              Dr. Dwayne brings expert care to your doorstep in Mumbai. 
              No travel, no hassle - just professional treatment in your home.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
              <a 
                href={PHONE_CONFIG.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full group"
                aria-label="Chat on WhatsApp"
                title="Book a home visit via WhatsApp"
              >
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 h-12"
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
                className="text-white/90 text-sm flex items-center justify-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors cursor-pointer h-12 min-w-12"
                aria-label="Call Dr. Dwayne"
                title={`Call ${PHONE_CONFIG.primaryNumber}`}
              >
                <Phone className="h-5 w-5" />
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
            <div className="text-white/80 text-xs flex items-center gap-1.5">
              <span>⏰</span>
              <span>8AM - 8PM, 7 Days</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-white/10">
            <div className="text-center">
              <div className="text-sm font-medium text-white/90">
                <span className="block text-accent text-lg mb-0.5">✓</span>
                Same Day
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-white/90">
                <span className="block text-accent text-lg mb-0.5">📍</span>
                All Mumbai
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-white/90">
                <span className="block text-accent text-lg mb-0.5">10+</span>
                Years Exp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;