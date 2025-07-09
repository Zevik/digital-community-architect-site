import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heebo font-bold text-primary mb-6 leading-tight">
              זאביק אבינר
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heebo font-medium text-foreground mb-4">
              הופכים קהילות דיגיטליות למנוע צמיחה אנושי ועסקי
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-assistant leading-relaxed">
              מומחה לאוטומציה, ניהול קהילות וחדשנות דיגיטלית. מייעץ, מרצה ומפתח פתרונות טכנולוגיים שמחברים בין אנשים.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-assistant text-lg px-8 py-4"
            >
              לייעוץ ופיתוח פתרונות ←
            </Button>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 bg-muted rounded-full flex items-center justify-center">
              <span className="text-muted-foreground font-assistant">תמונת זאביק</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;