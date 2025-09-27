import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export default function TestimonialCard({ 
  name,  
  location, 
  rating, 
  comment, 
  date 
}: TestimonialCardProps) {
  return (
    <Card className="h-full bg-card border-card-border" data-testid={`testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-sicilian-gold text-sicilian-gold" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <blockquote className="text-card-foreground mb-6 text-sm leading-relaxed">
          "{comment}"
        </blockquote>

        {/* Guest Info */}
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-medium text-card-foreground text-sm" data-testid={`text-guest-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {name}
            </div>
            <div className="text-muted-foreground text-xs">
              {location} • {date}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}