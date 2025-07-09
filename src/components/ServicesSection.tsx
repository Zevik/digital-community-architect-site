import { Users, Settings, Mic, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "ניהול וייעוץ לקהילות",
      description: "בנייה והובלה של קהילות דיגיטליות משגשגות המבוססות על שיח מכיל, סובלנות וחיבור אמיתי. מייסד רשת הקהילות הגדולה בירושלים.",
      buttonText: "ייעוץ לקהילות",
      href: "#communities"
    },
    {
      icon: <Settings className="h-12 w-12 text-accent" />,
      title: "אוטומציה ופיתוח כלים",
      description: "פיתוח תוספים וכלים חכמים לאוטומציה בפייסבוק וברשתות החברתיות, החוסכים לכם זמן, מייעלים תהליכים ומגדילים אימפקט.",
      buttonText: "פתרונות אוטומציה",
      href: "#automation"
    },
    {
      icon: <Mic className="h-12 w-12 text-accent" />,
      title: "הרצאות וסדנאות",
      description: "הרצאות וסדנאות מעוררות השראה ופרקטיות על עתיד הקהילות, בינה מלאכותית, פרסום אורגני ושימוש נכון בכוחה של הרשת.",
      buttonText: "הזמנת הרצאה",
      href: "#lectures"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-accent" />,
      title: "הוראה ולמידה אישית",
      description: "שיעורים פרטיים והדרכות אישיות המנגישות חומר מורכב בגובה העיניים, בסבלנות ובקצב שלכם.",
      buttonText: "שיעורים פרטיים",
      href: "#teaching"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-primary mb-4">
            המומחיות שלי: שילוב מנצח של טכנולוגיה, קהילה ואנשים
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-colors duration-200 h-full">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-heebo font-bold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center flex flex-col h-full">
                <CardDescription className="text-muted-foreground font-assistant text-base leading-relaxed mb-6 flex-grow">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-assistant"
                >
                  {service.buttonText} ←
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;