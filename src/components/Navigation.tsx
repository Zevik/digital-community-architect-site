import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-heebo font-bold text-primary">
              זאביק אבינר
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary px-3 py-2 font-assistant">
                בית
              </a>
              <a href="#about" className="text-foreground hover:text-primary px-3 py-2 font-assistant">
                אודות
              </a>
              <div className="relative group">
                <a href="#services" className="text-foreground hover:text-primary px-3 py-2 font-assistant">
                  שירותים
                </a>
              </div>
              <a href="#blog" className="text-foreground hover:text-primary px-3 py-2 font-assistant">
                בלוג
              </a>
              <a href="#media" className="text-foreground hover:text-primary px-3 py-2 font-assistant">
                בתקשורת
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-assistant">
              צרו קשר
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <a href="#home" className="block px-3 py-2 font-assistant text-foreground hover:text-primary">
              בית
            </a>
            <a href="#about" className="block px-3 py-2 font-assistant text-foreground hover:text-primary">
              אודות
            </a>
            <a href="#services" className="block px-3 py-2 font-assistant text-foreground hover:text-primary">
              שירותים
            </a>
            <a href="#blog" className="block px-3 py-2 font-assistant text-foreground hover:text-primary">
              בלוג
            </a>
            <a href="#media" className="block px-3 py-2 font-assistant text-foreground hover:text-primary">
              בתקשורת
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-assistant">
                צרו קשר
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;