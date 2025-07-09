import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heebo font-bold text-primary-foreground mb-6">
          בואו נבנה משהו גדול ביחד
        </h2>
        <p className="text-xl font-assistant text-primary-foreground/90 mb-8 leading-relaxed">
          יש לכם אתגר קהילתי? חלום על אוטומציה שתשחרר לכם את הידיים? רוצים להעשיר את העובדים שלכם בידע דיגיטלי עדכני? דברו איתי.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-assistant text-lg px-8 py-4"
        >
          אני רוצה להתייעץ ←
        </Button>
      </div>
    </section>
  );
};

export default CTASection;