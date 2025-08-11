import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import clinicLogo from "@/assets/clinic-logo.png";
import { PHONE_CONFIG, handlePhoneClick } from "@/lib/phoneUtils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#home" className="flex flex-col group">
            <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Dr. Dwayne</div>
            <div className="text-xs text-muted-foreground">Home Physio • Malad</div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-primary/5"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={PHONE_CONFIG.telLink} 
              onClick={(e) => {
                e.preventDefault();
                handlePhoneClick(PHONE_CONFIG.primaryNumber);
              }}
              className="flex items-center gap-1.5 text-sm text-foreground/90 hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-primary/5"
              aria-label="Call Dr. Dwayne"
              title={`Call ${PHONE_CONFIG.primaryNumber}`}
            >
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </a>
            <a 
              href={PHONE_CONFIG.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              aria-label="Chat on WhatsApp"
              title="Chat with us on WhatsApp"
            >
              <Button variant="accent" size="sm" className="flex items-center gap-1.5 text-sm h-9">
                <MessageCircle className="h-4 w-4" />
                <span>Book Visit</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-border/50">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary hover:bg-primary/5 transition-colors px-4 py-2.5 rounded-md text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-1 pb-2">
                <div className="grid grid-cols-2 gap-3 w-full">
                  <a 
                    href={PHONE_CONFIG.telLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePhoneClick(PHONE_CONFIG.primaryNumber);
                    }}
                    className="block w-full" 
                    aria-label="Call Dr. Dwayne"
                    title={`Call ${PHONE_CONFIG.primaryNumber}`}
                  >
                    <Button variant="outline" size="sm" className="w-full h-10 text-sm">
                      <Phone className="h-3.5 w-3.5 mr-1.5" /> Call
                    </Button>
                  </a>
                  <a 
                    href={PHONE_CONFIG.whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full"
                    aria-label="Chat on WhatsApp"
                    title="Chat with us on WhatsApp"
                  >
                    <Button variant="accent" size="sm" className="w-full h-10 text-sm">
                      <MessageCircle className="h-3.5 w-3.5 mr-1.5" /> WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;