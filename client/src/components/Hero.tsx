import { Button } from "@/components/ui/button";
import { MapPin, Plane, Users } from "lucide-react";
import { Link } from "wouter";
import cinisiImage from "@assets/generated_images/Cinisi_coastline_aerial_view_d36bfcb6.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={cinisiImage}
          alt="Cinisi coastline aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          AuRooms
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-light mt-2">
            Your Luxury Stay Near Palermo Airport
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Authentic Sicilian hospitality just 3km from the airport. Experience luxury comfort 
          with crystal clear sea views and traditional Mediterranean charm.
        </p>

        {/* Main CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/book" data-testid="button-book-hero">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 backdrop-blur-sm"
            >
              Book Your Stay
            </Button>
          </Link>
          <Link href="/rooms" data-testid="button-explore-rooms">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Explore Rooms
            </Button>
          </Link>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Plane className="w-6 h-6 text-white" />
            <span className="text-white font-medium">3km from Airport</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <MapPin className="w-6 h-6 text-white" />
            <span className="text-white font-medium">Crystal Clear Sea</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Users className="w-6 h-6 text-white" />
            <span className="text-white font-medium">Authentic Sicilian</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}