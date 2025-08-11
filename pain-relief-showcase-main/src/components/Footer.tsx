import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import clinicLogo from "@/assets/clinic-logo.png";
import { PHONE_CONFIG, handlePhoneClick } from "@/lib/phoneUtils";

const Footer = () => {
  const { primaryNumber, telLink, whatsappLink } = PHONE_CONFIG;
  const EMAIL = 'dr.dwayne.physio@gmail.com';
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#testimonials" },
  ];

  const services = [
    "Home Rehab",
    "Elderly Care",
    "Sports Injuries",
    "Post-Surgery Care",
    "Pain Relief",
    "Mobility Training",
  ];

  return (
    <footer id="contact" className="bg-foreground text-background text-sm">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {/* Logo and Contact Info */}
          <div className="col-span-2 space-y-4">
            <div>
              <h2 className="text-xl font-bold">Dr. Dwayne</h2>
              <p className="text-accent">Home Physio • Malad</p>
            </div>
            <div className="space-y-3">
              <a 
                href={telLink}
                onClick={(e) => {
                  e.preventDefault();
                  handlePhoneClick(primaryNumber);
                }}
                className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"
                aria-label="Call Dr. Dwayne"
                title={`Call ${primaryNumber}`}
              >
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Call {primaryNumber}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Malad West, Mumbai</span>
              </div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors text-sm"
                aria-label="Chat on WhatsApp"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-background/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-3">Hours</h3>
            <div className="space-y-2 text-background/80 text-sm">
              <div className="flex justify-between">
                <span>Mon-Fri</span>
                <span>9AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sun</span>
                <span>10AM - 4PM</span>
              </div>
              <div className="mt-3 p-2 bg-accent/10 rounded text-xs">
                Emergency: 24/7 Available
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-background/60 text-xs">
              &copy; {new Date().getFullYear()} Dr. Dwayne - Home Physio Mumbai
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-accent transition-colors flex items-center gap-1"
                aria-label="Chat on WhatsApp"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-3 w-3" />
                <span>WhatsApp</span>
              </a>
              <a 
                href={telLink}
                onClick={(e) => {
                  e.preventDefault();
                  handlePhoneClick(primaryNumber);
                }}
                className="text-background/80 hover:text-accent transition-colors flex items-center gap-1 cursor-pointer"
                aria-label="Call Dr. Dwayne"
                title={`Call ${primaryNumber}`}
              >
                <Phone className="h-3 w-3" />
                <span>Call</span>
              </a>
              <a 
                href={`mailto:${EMAIL}`}
                className="text-background/80 hover:text-accent transition-colors flex items-center gap-1"
              >
                <Mail className="h-3 w-3" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;