import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const articles = [
    {
      id: 1,
      title: "5 Simple Exercises to Prevent Neck Pain While Working from Home",
      excerpt: "Learn essential stretches and strengthening exercises that can help prevent neck pain during long work sessions.",
      date: "March 15, 2024",
      image: "/placeholder.svg",
      category: "Prevention"
    },
    {
      id: 2,
      title: "Understanding the Benefits of Manual Therapy for Back Pain Relief",
      excerpt: "Discover how manual therapy techniques can provide effective relief for chronic back pain and improve mobility.",
      date: "March 10, 2024",
      image: "/placeholder.svg",
      category: "Treatment"
    },
    {
      id: 3,
      title: "Sports Injury Recovery: Getting Back to Your Game Safely",
      excerpt: "A comprehensive guide to sports injury rehabilitation and the importance of proper recovery protocols.",
      date: "March 5, 2024",
      image: "/placeholder.svg",
      category: "Sports Health"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Latest News & Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest insights on physiotherapy, health tips, 
            and expert advice from our professional team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">📄</div>
                    <p className="text-sm">Article Image</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>

                <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary-hover">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent-outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;