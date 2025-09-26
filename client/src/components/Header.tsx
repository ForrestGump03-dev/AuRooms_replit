import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Services", href: "/services" },
    { name: "Location", href: "/location" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">A</span>
            </div>
            <span className="font-serif text-xl font-bold text-foreground">AuRooms</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href ? "text-primary" : "text-foreground/70"
                }`}
                data-testid={`link-${item.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+39 091 123 4567</span>
            </div>
            <Link href="/book" data-testid="button-book-header">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 ${
                    location === item.href ? "text-primary" : "text-foreground/70"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground px-2 py-1">
                  <Phone className="w-4 h-4" />
                  <span>+39 091 123 4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground px-2 py-1">
                  <Mail className="w-4 h-4" />
                  <span>info@aurooms.com</span>
                </div>
                <div className="px-2 pt-2">
                  <Link href="/book" data-testid="button-book-mobile">
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      Book Your Stay
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}