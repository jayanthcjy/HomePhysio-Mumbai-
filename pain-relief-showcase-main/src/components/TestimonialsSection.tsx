import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      rating: 5,
      text: "I had chronic neck pain from working long hours at my computer. The physiotherapy treatment here was exceptional. Within just 4 weeks, I was completely pain-free. The staff is professional and truly cares about patient recovery."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Businessman",
      rating: 5,
      text: "After my knee surgery, I was worried about the recovery process. The rehabilitation program here exceeded my expectations. The personalized approach and state-of-the-art equipment made all the difference in my recovery."
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Teacher",
      rating: 5,
      text: "The team here is incredible. They not only treated my back pain but also educated me on prevention techniques. I'm now pain-free and have the knowledge to maintain my health. Highly recommended!"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied patients have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground text-base leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="pt-4">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;