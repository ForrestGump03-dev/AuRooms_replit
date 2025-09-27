import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">A</span>
              </div>
              <span className="font-serif text-xl font-bold text-card-foreground">AuRooms</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Luxury guest house in Cinisi, Sicily. Authentic Sicilian hospitality just 3km from Palermo Airport.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" data-testid="link-instagram">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" data-testid="link-twitter">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-rooms">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-location">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Piazza Pietro Venuti 12<br />
                  90045 Cinisi, Sicily, Italy
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+39 375 884 3175</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@aurooms.it</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Reception: 24/7<br />
                  Check-in: 15:00 - 21:00<br />
                  Check-out: until 11:00
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive special offers and Sicily travel tips.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                data-testid="input-newsletter-email"
              />
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90" data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 AuRooms Guest House. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-terms">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-sitemap">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}