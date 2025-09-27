import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import RoomCard from "@/components/RoomCard";
import { Users, Euro, Filter } from "lucide-react";
import luxuryRoomImage from "@assets/generated_images/Luxury_Mediterranean_hotel_room_4952b043.png";
import suitImage from "@assets/generated_images/Modern_guest_house_suite_44edca0e.png";
import traditionalRoomImage from "@assets/generated_images/Traditional_Sicilian_bedroom_d52cff9b.png";

export default function Rooms() {
  const [sortBy, setSortBy] = useState("price");
  const [filterByGuests, setFilterByGuests] = useState("all");
  const [filterByPrice, setFilterByPrice] = useState("all");

  // todo: remove mock functionality - replace with real room data from API
  const allRooms = [
    {
      id: "deluxe-sea-view",
      name: "Deluxe Sea View Room",
      type: "Deluxe",
      image: luxuryRoomImage,
      description: "Spacious room with breathtaking Mediterranean sea views, featuring modern amenities and traditional Sicilian charm. Perfect for couples seeking luxury and romance.",
      price: 120,
      maxGuests: 2,
      amenities: ["WiFi", "Private Bathroom", "Air Conditioning", "Continental Breakfast", "Balcony"],
      isAvailable: true
    },
    {
      id: "mediterranean-suite",
      name: "Mediterranean Suite",
      type: "Suite",
      image: suitImage,
      description: "Luxury suite with panoramic views, separate living area, and premium amenities for the perfect Sicilian getaway. Ideal for families or longer stays.",
      price: 180,
      maxGuests: 4,
      amenities: ["WiFi", "Balcony", "Air Conditioning", "Continental Breakfast", "Private Bathroom", "Living Area", "Minibar"],
      isAvailable: true
    },
    {
      id: "traditional-room",
      name: "Traditional Sicilian Room",
      type: "Traditional",
      image: traditionalRoomImage,
      description: "Charming room with authentic Sicilian decor, combining traditional elements with modern comfort. Experience the real Sicily.",
      price: 95,
      maxGuests: 2,
      amenities: ["WiFi", "Traditional Decor", "Private Bathroom", "Air Conditioning", "Continental Breakfast"],
      isAvailable: true
    },
    {
      id: "family-suite",
      name: "Family Suite",
      type: "Family",
      image: suitImage,
      description: "Spacious suite perfect for families, featuring two bedrooms, large bathroom, and comfortable common area with all modern amenities.",
      price: 220,
      maxGuests: 6,
      amenities: ["WiFi", "Two Bedrooms", "Air Conditioning", "Continental Breakfast", "Private Bathroom", "Living Area"],
      isAvailable: false
    },
    {
      id: "comfort-room",
      name: "Comfort Room",
      type: "Standard",
      image: luxuryRoomImage,
      description: "Comfortable and well-appointed room with all essential amenities for a pleasant stay. Great value for budget-conscious travelers.",
      price: 75,
      maxGuests: 2,
      amenities: ["WiFi", "Private Bathroom", "Air Conditioning", "Continental Breakfast"],
      isAvailable: true
    },
    {
      id: "junior-suite",
      name: "Junior Suite",
      type: "Junior Suite",
      image: traditionalRoomImage,
      description: "Elegant junior suite with separate seating area, perfect for business travelers or couples wanting extra space and comfort.",
      price: 140,
      maxGuests: 3,
      amenities: ["WiFi", "Seating Area", "Air Conditioning", "Continental Breakfast", "Private Bathroom", "Desk"],
      isAvailable: true
    }
  ];

  // Filter and sort rooms
  let filteredRooms = allRooms;

  if (filterByGuests !== "all") {
    const guestCount = parseInt(filterByGuests);
    filteredRooms = filteredRooms.filter(room => room.maxGuests >= guestCount);
  }

  if (filterByPrice !== "all") {
    const [min, max] = filterByPrice.split("-").map(p => parseInt(p));
    filteredRooms = filteredRooms.filter(room => 
      max ? room.price >= min && room.price <= max : room.price >= min
    );
  }

  // Sort rooms
  filteredRooms.sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "guests":
        return b.maxGuests - a.maxGuests;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return a.price - b.price;
    }
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Rooms & Suites
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover our collection of luxury accommodations, each thoughtfully designed to provide 
              the perfect blend of Sicilian charm and modern comfort. From intimate rooms with sea views 
              to spacious family suites.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sort Section */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">Filters & Sort</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Guest Filter */}
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <Select value={filterByGuests} onValueChange={setFilterByGuests}>
                  <SelectTrigger className="w-[140px]" data-testid="select-filter-guests">
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Guests</SelectItem>
                    <SelectItem value="1">1+ Guest</SelectItem>
                    <SelectItem value="2">2+ Guests</SelectItem>
                    <SelectItem value="3">3+ Guests</SelectItem>
                    <SelectItem value="4">4+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Filter */}
              <div className="flex items-center space-x-2">
                <Euro className="w-4 h-4 text-muted-foreground" />
                <Select value={filterByPrice} onValueChange={setFilterByPrice}>
                  <SelectTrigger className="w-[140px]" data-testid="select-filter-price">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="0-100">€0 - €100</SelectItem>
                    <SelectItem value="100-150">€100 - €150</SelectItem>
                    <SelectItem value="150-200">€150 - €200</SelectItem>
                    <SelectItem value="200">€200+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px]" data-testid="select-sort">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="guests">Max Guests</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredRooms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No rooms match your current filters. Please adjust your criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setFilterByGuests("all");
                  setFilterByPrice("all");
                  setSortBy("price");
                }}
                className="mt-4"
                data-testid="button-clear-filters"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <p className="text-muted-foreground" data-testid="text-results-count">
                  Showing {filteredRooms.length} of {allRooms.length} rooms
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRooms.map((room) => (
                  <RoomCard key={room.id} {...room} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Room Features Section */}
      <section className="py-16 bg-card border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-card-foreground mb-4">
              What's Included in Every Room
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              All our accommodations come with premium amenities and services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-primary text-lg">📶</span>
              </div>
              <h3 className="font-medium text-card-foreground mb-1">High-Speed WiFi</h3>
              <p className="text-sm text-muted-foreground">Complimentary internet</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-primary text-lg">❄️</span>
              </div>
              <h3 className="font-medium text-card-foreground mb-1">Air Conditioning</h3>
              <p className="text-sm text-muted-foreground">Climate control</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-primary text-lg">🛁</span>
              </div>
              <h3 className="font-medium text-card-foreground mb-1">Private Bathroom</h3>
              <p className="text-sm text-muted-foreground">Modern amenities</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <span className="text-primary text-lg">☕</span>
              </div>
              <h3 className="font-medium text-card-foreground mb-1">Sicilian Breakfast</h3>
              <p className="text-sm text-muted-foreground">Traditional cuisine</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}