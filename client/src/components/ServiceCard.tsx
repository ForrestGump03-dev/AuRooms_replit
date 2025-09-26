import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  price?: string;
  isIncluded?: boolean;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  features = [], 
  price,
  isIncluded = false 
}: ServiceCardProps) {
  return (
    <Card className="h-full hover-elevate bg-card border-card-border transition-all duration-300" data-testid={`service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <div className="text-primary">
            {icon}
          </div>
        </div>
        <CardTitle className="font-serif text-xl text-card-foreground" data-testid={`text-service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </CardTitle>
        {price && (
          <div className="flex items-center justify-center space-x-2">
            <span className="text-lg font-semibold text-card-foreground">{price}</span>
            {isIncluded && (
              <Badge variant="secondary" className="bg-soft-coral/20 text-soft-coral border-soft-coral/30">
                Included
              </Badge>
            )}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-center mb-4" data-testid={`text-service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-card-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}