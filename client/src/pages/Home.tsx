import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import { MapPin, Star, Plane, Coffee, Users, Car, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import luxuryRoomImage from "@assets/generated_images/Luxury_Mediterranean_hotel_room_4952b043.png";
import suitImage from "@assets/generated_images/Modern_guest_house_suite_44edca0e.png";
import traditionalRoomImage from "@assets/generated_images/Traditional_Sicilian_bedroom_d52cff9b.png";
import breakfastImage from "@assets/generated_images/Sicilian_breakfast_spread_57fda05f.png";
import guestAvatar from "@assets/generated_images/Happy_guest_testimonial_photo_983a40f9.png";

export default function Home() {
  // todo: remove mock functionality - replace with real room data
  const featuredRooms = [
    {
      id: "deluxe-sea-view",
      name: "Deluxe Sea View Room",
      type: "Deluxe",
      image: luxuryRoomImage,
      description: "Spacious room with breathtaking Mediterranean sea views, featuring modern amenities and traditional Sicilian charm.",
      price: 120,
      maxGuests: 2,
      amenities: ["WiFi", "Sea View", "Private Bathroom", "Air Conditioning", "Continental Breakfast"]
    },
    {
      id: "mediterranean-suite",
      name: "Mediterranean Suite",
      type: "Suite",
      image: suitImage,
      description: "Luxury suite with panoramic views, separate living area, and premium amenities for the perfect Sicilian getaway.",
      price: 180,
      maxGuests: 4,
      amenities: ["WiFi", "Sea View", "Balcony", "Air Conditioning", "Continental Breakfast", "Private Bathroom"]
    },
    {
      id: "traditional-room",
      name: "Traditional Sicilian Room",
      type: "Traditional",
      image: traditionalRoomImage,
      description: "Charming room with authentic Sicilian decor, combining traditional elements with modern comfort.",
      price: 95,
      maxGuests: 2,
      amenities: ["WiFi", "Traditional Decor", "Private Bathroom", "Air Conditioning"]
    }
  ];

  // todo: remove mock functionality - replace with real testimonial data
  const testimonials = [
    {
      name: "Marco Rossi",
      avatar: guestAvatar,
      location: "Milan, Italy",
      rating: 5,
      comment: "Perfect location just minutes from the airport! The sea view was breathtaking and the Sicilian breakfast was absolutely delicious. Will definitely return!",
      date: "Sept 2024"
    },
    {
      name: "Sarah Johnson",
      avatar: guestAvatar,
      location: "London, UK",
      rating: 5,
      comment: "AuRooms exceeded all expectations. The authentic Sicilian hospitality combined with modern luxury made our stay unforgettable. Highly recommended!",
      date: "Aug 2024"
    },
    {
      name: "Hans Mueller",
      avatar: guestAvatar,
      location: "Berlin, Germany",
      rating: 4,
      comment: "Excellent guest house with beautiful rooms and amazing views. The staff was incredibly helpful and the location perfect for exploring Cinisi.",
      date: "July 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Key Benefits Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose AuRooms?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The perfect combination of convenience, luxury, and authentic Sicilian experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-card border-card-border hover-elevate">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Plane className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-card-foreground">
                  Airport Proximity
                </h3>
                <p className="text-muted-foreground mb-4">
                  Just 3 kilometers from Palermo Falcone-Borsellino Airport. Perfect for early flights or late arrivals.
                </p>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    5-minute drive to airport
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Transfer service available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-card-border hover-elevate">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-card-foreground">
                  Crystal Clear Sea
                </h3>
                <p className="text-muted-foreground mb-4">
                  Wake up to stunning Mediterranean views and enjoy pristine beaches just steps away.
                </p>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Sea view rooms available
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Beach access nearby
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-card-border hover-elevate">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Coffee className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-card-foreground">
                  Authentic Sicily
                </h3>
                <p className="text-muted-foreground mb-4">
                  Experience genuine Sicilian hospitality with traditional breakfast and local insights.
                </p>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Traditional Sicilian breakfast
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Local experience guidance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Featured Rooms
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Luxury accommodations designed for comfort and relaxation with authentic Sicilian charm
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/rooms" data-testid="button-view-all-rooms">
              <Button variant="outline" size="lg" className="px-8">
                View All Rooms & Suites
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Premium Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for a perfect stay in Sicily
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Plane className="w-6 h-6" />}
              title="Airport Transfer"
              description="Convenient transfer service available 24/7"
              price="€25"
            />
            <ServiceCard
              icon={<Coffee className="w-6 h-6" />}
              title="Sicilian Breakfast"
              description="Traditional breakfast with local specialties"
              isIncluded={true}
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Concierge Service"
              description="Personalized assistance for local experiences"
              isIncluded={true}
            />
            <ServiceCard
              icon={<Car className="w-6 h-6" />}
              title="Vehicle Rental"
              description="Cars and scooters to explore Sicily"
              price="From €35/day"
            />
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services" data-testid="button-view-all-services">
              <Button variant="outline" size="lg" className="px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Guest Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Guest Experiences
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from our guests about their unforgettable stays at AuRooms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Sicilian Experience Section */}
      <section className="py-16 bg-soft-coral/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Authentic Sicilian Experience
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Discover the true essence of Sicily through our carefully curated experiences. From traditional 
                breakfast featuring local delicacies to personalized recommendations for hidden gems, we ensure 
                your stay connects you with the authentic spirit of our beautiful island.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">Traditional Sicilian breakfast with cannoli and fresh ricotta</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">Local insights and recommendations from our team</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">Easy access to Monreale, Segesta, and San Vito Lo Capo</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="text-foreground">Wine tasting and culinary tour arrangements</span>
                </li>
              </ul>
              <Link href="/contact" data-testid="button-learn-more">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Learn More About Our Experiences
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={breakfastImage}
                alt="Traditional Sicilian breakfast"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
            Ready for Your Sicilian Adventure?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book your stay at AuRooms and experience the perfect blend of luxury, convenience, 
            and authentic Sicilian hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" data-testid="button-book-final-cta">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-primary hover:bg-white/90 border-white px-8"
              >
                Book Your Stay Now
              </Button>
            </Link>
            <Link href="/contact" data-testid="button-contact-final-cta">
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/10 px-8"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}