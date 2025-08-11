import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    problem: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `*New Appointment Request*%0A%0A` +
                   `*Name:* ${formData.name}%0A` +
                   `*Problem:* ${formData.problem}%0A` +
                   `*Preferred Date:* ${formData.date || 'Not specified'}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919901360073?text=${message}`, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      problem: "",
      date: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Book Your Appointment Today
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Take the first step towards a pain-free life. Our experts are ready to help you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="problem" className="text-sm font-medium text-foreground">
                  Tell Us About Your Problem *
                </label>
                <textarea
                  id="problem"
                  placeholder="Describe your condition or problem in detail"
                  value={formData.problem}
                  onChange={(e) => handleInputChange("problem", e.target.value)}
                  required
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-foreground">
                  Preferred Date *
                </label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" variant="accent" size="lg" className="px-12 py-6 text-lg w-full sm:w-auto">
                Appointment by WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;