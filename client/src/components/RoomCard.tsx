import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Car, Coffee, Waves, Users, Bed } from "lucide-react";
import { Link } from "wouter";

interface RoomCardProps {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  price: number;
  maxGuests: number;
  amenities: string[];
  isAvailable?: boolean;
}

const amenityIcons: Record<string, React.ReactNode> = {
  "WiFi": <Wifi className="w-4 h-4" />,
  "Sea View": <Waves className="w-4 h-4" />,
  "Private Bathroom": <Bed className="w-4 h-4" />,
  "Air Conditioning": <Car className="w-4 h-4" />,
  "Continental Breakfast": <Coffee className="w-4 h-4" />,
  "Balcony": <Waves className="w-4 h-4" />,
};

export default function RoomCard({ 
  id, 
  name, 
  type, 
  image, 
  description, 
  price, 
  maxGuests, 
  amenities,
  isAvailable = true 
}: RoomCardProps) {
  return (
    <Card className="group hover-elevate overflow-hidden border-card-border bg-card" data-testid={`card-room-${id}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {type}
          </Badge>
        </div>
        {!isAvailable && (
          <div className="absolute top-4 right-4">
            <Badge variant="destructive">
              Unavailable
            </Badge>
          </div>
        )}
        <div className="absolute bottom-4 right-4">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
            <span className="text-white text-lg font-semibold">€{price}</span>
            <span className="text-white/80 text-sm"> /night</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-serif text-xl font-semibold text-card-foreground mb-1" data-testid={`text-room-name-${id}`}>
              {name}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>Up to {maxGuests} guests</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2" data-testid={`text-room-description-${id}`}>
          {description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.slice(0, 4).map((amenity, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 text-xs text-muted-foreground bg-muted/50 rounded-full px-2 py-1"
            >
              {amenityIcons[amenity] || <Wifi className="w-4 h-4" />}
              <span>{amenity}</span>
            </div>
          ))}
          {amenities.length > 4 && (
            <span className="text-xs text-muted-foreground bg-muted/50 rounded-full px-2 py-1">
              +{amenities.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => console.log(`View details for room ${id}`)}
            data-testid={`button-view-details-${id}`}
          >
            View Details
          </Button>
          <Link href={`/book?room=${id}`} className="flex-1" data-testid={`button-book-room-${id}`}>
            <Button 
              size="sm" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!isAvailable}
            >
              {isAvailable ? "Book Now" : "Unavailable"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}