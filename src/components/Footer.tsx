import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heebo font-bold text-primary mb-4">
              זאביק אבינר
            </h3>
            <p className="text-muted-foreground font-assistant leading-relaxed mb-6">
              מומחה לאוטומציה, ניהול קהילות וחדשנות דיגיטלית. מחבר בין טכנולוגיה לאנושיות.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heebo font-semibold text-primary mb-4">
              קישורים מהירים
            </h4>
            <ul className="space-y-2 font-assistant">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  אודות
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  שירותים
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-accent transition-colors">
                  בלוג
                </a>
              </li>
              <li>
                <a href="#media" className="text-muted-foreground hover:text-accent transition-colors">
                  בתקשורת
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heebo font-semibold text-primary mb-4">
              יצירת קשר
            </h4>
            <div className="space-y-3 font-assistant">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">contact@zevikaviner.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">054-123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-assistant">
            © 2024 זאביק אבינר. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;