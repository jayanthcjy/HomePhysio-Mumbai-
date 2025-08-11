import { useRef, useEffect, useState } from "react";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import googleLogo from '../assets/image.png';

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  location: string;
  date: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh K.",
      content: "Dr. Dwayne's home visits were a game-changer for my back pain. The exercises he taught me made a huge difference in just a few weeks.",
      rating: 5,
      location: "Malad West",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Meena S.",
      content: "After my knee surgery, I was struggling with mobility. Dr. Dwayne's personalized care and attention helped me regain my strength and confidence.",
      rating: 5,
      location: "Malad East",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Amit P.",
      content: "The convenience of home physiotherapy is unbeatable. Dr. Dwayne is professional, knowledgeable, and truly cares about his patients' recovery.",
      rating: 5,
      location: "Kandivali",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Priya M.",
      content: "I was skeptical about home physio at first, but Dr. Dwayne brought all necessary equipment and provided excellent care. My shoulder pain is completely gone!",
      rating: 5,
      location: "Borivali",
      date: "1 month ago"
    },
    {
      id: 5,
      name: "Vikram D.",
      content: "As a senior citizen, traveling to a clinic was difficult. Dr. Dwayne's home visits have been a blessing for my arthritis management.",
      rating: 5,
      location: "Dahisar",
      date: "2 months ago"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout>();
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (isPaused) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;
      
      if (scrollLeft >= maxScroll - 2) {
        // When we reach near the end, instantly reset to the beginning
        scrollContainer.scrollTo({ left: 0, behavior: 'instant' });
        setCurrentIndex(0);
      } else {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        const nextCard = cardRefs.current[nextIndex];
        
        if (nextCard) {
          const cardWidth = nextCard.offsetWidth;
          const newScrollLeft = nextCard.offsetLeft - 32; // 32px = 8 * 4 (gap-8)
          
          scrollContainer.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
          });
          
          setCurrentIndex(nextIndex);
        }
      }
    };

    scrollInterval.current = setInterval(scroll, 3000);
    return () => clearInterval(scrollInterval.current);
  }, [currentIndex, isPaused, testimonials.length]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Manual navigation
  const scrollToTestimonial = (index: number) => {
    if (!containerRef.current) return;
    
    const targetCard = cardRefs.current[index];
    if (targetCard) {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetCard.getBoundingClientRect();
      
      container.scrollTo({
        left: container.scrollLeft + (targetRect.left - containerRect.left) - 32,
        behavior: 'smooth'
      });
      
      setCurrentIndex(index % testimonials.length);
    }
  };

  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            ❤️ Patient Stories
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            What Patients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from people who've experienced Dr. Dwayne's care
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE and Edge
          }}
        >
          {/* Hide scrollbar for Chrome, Safari and Opera */}
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="flex gap-8 w-max">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                ref={el => cardRefs.current[index] = el}
                className="w-[300px] sm:w-[400px] md:w-[500px] flex-shrink-0 snap-start"
              >
                <div key={testimonial.id} className="bg-background p-6 rounded-xl border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 min-w-[280px] max-w-sm flex-shrink-0 relative group">
                  <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-30 transition-opacity">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21.227L12 19.21l-2.017 2.016-2.99-3.01c-1.35-1.36-2.11-3.2-2.11-5.13 0-3.98 3.25-7.23 7.25-7.23s7.25 3.25 7.25 7.25c0 1.93-.76 3.77-2.13 5.15l-3.23 3.39v-.01z" fill="url(#paint0_linear_123_456)" fillOpacity="0.1"/>
                      <defs>
                        <linearGradient id="paint0_linear_123_456" x1="12" y1="4" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                          <stop stopColor="hsl(var(--primary))" stopOpacity="0.5"/>
                          <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0.2"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="flex items-start gap-3 mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center text-lg font-bold text-primary mt-0.5">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/20'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-primary" />
                        <span>{testimonial.location} • {testimonial.date}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <img 
                        src={googleLogo} 
                        alt="Google" 
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mt-4 relative z-10 line-clamp-4">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-4' : 'bg-border/50'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;