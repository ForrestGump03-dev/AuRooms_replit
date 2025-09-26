import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Coffee, 
  Users, 
  Wifi, 
  Car, 
  MapPin, 
  Clock,
  Snowflake,
  Sparkles,
  Phone
} from "lucide-react";
import { Link } from "wouter";
import breakfastImage from "@assets/generated_images/Sicilian_breakfast_spread_57fda05f.png";

export default function Services() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Premium Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Experience exceptional hospitality with our comprehensive range of services designed to make 
              your stay in Sicily unforgettable. From airport transfers to local experiences, 
              we take care of every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Plane className="w-6 h-6" />}
              title="Airport Transfer"
              description="Convenient and reliable transfer service to and from Palermo Airport, available 24/7 with professional drivers."
              features={[
                "Private vehicle with professional driver",
                "Available 24/7 upon advance request",
                "Luggage assistance included",
                "Direct route (only 3km distance)",
                "Flight monitoring service",
                "Meet & greet at arrivals"
              ]}
              price="€25"
            />
            
            <ServiceCard
              icon={<Coffee className="w-6 h-6" />}
              title="Sicilian Breakfast"
              description="Start your day with an authentic traditional breakfast featuring the finest local Sicilian specialties and fresh ingredients."
              features={[
                "Fresh cannoli and pastries",
                "Local honey and ricotta cheese",
                "Authentic Sicilian espresso",
                "Seasonal fruits and preserves",
                "Homemade bread and focaccia",
                "Regional wines and liqueurs"
              ]}
              isIncluded={true}
            />
            
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Concierge Service"
              description="Personalized assistance to help you discover the best of Sicily with insider knowledge and local connections."
              features={[
                "Local attraction recommendations",
                "Restaurant reservations",
                "Tour and activity booking",
                "Transportation arrangements",
                "Cultural event information",
                "Shopping assistance"
              ]}
              isIncluded={true}
            />
            
            <ServiceCard
              icon={<Wifi className="w-6 h-6" />}
              title="High-Speed WiFi"
              description="Stay connected with complimentary high-speed fiber internet access throughout the entire property."
              features={[
                "Fiber optic connection",
                "Coverage in all rooms and common areas",
                "Business center access",
                "24/7 technical support",
                "Multiple device connectivity",
                "Secure network encryption"
              ]}
              isIncluded={true}
            />
            
            <ServiceCard
              icon={<Snowflake className="w-6 h-6" />}
              title="Climate Control"
              description="Individual air conditioning in every room with heating and cooling options for year-round comfort."
              features={[
                "Individual room climate control",
                "Energy-efficient systems",
                "Quiet operation technology",
                "Programmable thermostats",
                "Seasonal maintenance included",
                "24/7 operation"
              ]}
              isIncluded={true}
            />
            
            <ServiceCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Daily Housekeeping"
              description="Professional daily cleaning service to ensure your room remains spotless throughout your stay."
              features={[
                "Daily room cleaning",
                "Fresh linen and towel service",
                "Bathroom sanitization",
                "Eco-friendly cleaning products",
                "Turndown service available",
                "Special requests accommodated"
              ]}
              isIncluded={true}
            />
            
            <ServiceCard
              icon={<Car className="w-6 h-6" />}
              title="Vehicle Rental"
              description="Explore Sicily at your own pace with our convenient car and scooter rental service."
              features={[
                "Economy and luxury car options",
                "Traditional Vespa scooter rentals",
                "GPS navigation systems included",
                "Comprehensive insurance available",
                "Fuel delivery service",
                "24/7 roadside assistance"
              ]}
              price="From €35/day"
            />
            
            <ServiceCard
              icon={<MapPin className="w-6 h-6" />}
              title="Guided Tours"
              description="Discover Sicily's hidden gems and must-see attractions with our curated guided tour experiences."
              features={[
                "Monreale Cathedral guided visits",
                "Segesta archaeological site tours",
                "San Vito Lo Capo beach excursions",
                "Local wine and food tastings",
                "Mount Etna volcano tours",
                "Palermo historic center walks"
              ]}
              price="From €65/person"
            />
            
            <ServiceCard
              icon={<Phone className="w-6 h-6" />}
              title="24/7 Support"
              description="Round-the-clock guest support to ensure you have assistance whenever you need it during your stay."
              features={[
                "24/7 reception desk service",
                "Emergency contact availability",
                "Multilingual staff support",
                "Tourist information assistance",
                "Problem resolution guarantee",
                "WhatsApp support available"
              ]}
              isIncluded={true}
            />
          </div>
        </div>
      </section>

      {/* Breakfast Feature Section */}
      <section className="py-16 bg-soft-coral/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Authentic Sicilian Breakfast Experience
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Wake up to the flavors of Sicily with our traditional breakfast featuring local specialties 
                crafted from the finest regional ingredients. Every morning is a celebration of Sicilian 
                culinary heritage.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🥐</div>
                  <h3 className="font-medium text-foreground mb-1">Fresh Pastries</h3>
                  <p className="text-sm text-muted-foreground">Daily baked cannoli & cornetti</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🍯</div>
                  <h3 className="font-medium text-foreground mb-1">Local Honey</h3>
                  <p className="text-sm text-muted-foreground">From Sicilian beekeepers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">☕</div>
                  <h3 className="font-medium text-foreground mb-1">Sicilian Coffee</h3>
                  <p className="text-sm text-muted-foreground">Traditional espresso & granita</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧀</div>
                  <h3 className="font-medium text-foreground mb-1">Fresh Ricotta</h3>
                  <p className="text-sm text-muted-foreground">Made from local milk</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-primary">
                <Clock className="w-4 h-4" />
                <span>Served daily from 7:30 AM to 10:30 AM</span>
              </div>
            </div>
            <div className="relative">
              <img
                src={breakfastImage}
                alt="Traditional Sicilian breakfast spread"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours Section */}
      <section className="py-16 bg-card border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-card-foreground mb-4">
              Service Hours & Availability
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our services are designed around your schedule for maximum convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-background border-border">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Reception</h3>
                <p className="text-muted-foreground text-sm">
                  24/7 Available<br />
                  Always here when you need us
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardContent className="p-6 text-center">
                <Coffee className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Breakfast</h3>
                <p className="text-muted-foreground text-sm">
                  7:30 AM - 10:30 AM<br />
                  Daily traditional service
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Housekeeping</h3>
                <p className="text-muted-foreground text-sm">
                  10:00 AM - 4:00 PM<br />
                  Daily cleaning service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book your stay today and enjoy all our premium services designed to make 
            your Sicilian adventure unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" data-testid="button-book-services">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-white/90 border-white px-8"
              >
                Book Your Stay
              </Button>
            </Link>
            <Link href="/contact" data-testid="button-contact-services">
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/10 px-8"
              >
                Ask About Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}