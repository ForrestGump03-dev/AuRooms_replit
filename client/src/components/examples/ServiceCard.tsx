import ServiceCard from '../ServiceCard'
import { Plane, Coffee, Users, Wifi, Car, MapPin } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      <ServiceCard
        icon={<Plane className="w-6 h-6" />}
        title="Airport Transfer"
        description="Convenient transfer service to and from Palermo Airport, just 3km away."
        features={[
          "Private vehicle with professional driver",
          "Available 24/7 upon request",
          "Luggage assistance included",
          "Direct route to guest house"
        ]}
        price="€25"
      />
      
      <ServiceCard
        icon={<Coffee className="w-6 h-6" />}
        title="Sicilian Breakfast"
        description="Authentic traditional breakfast featuring local Sicilian specialties and fresh ingredients."
        features={[
          "Fresh cannoli and pastries",
          "Local honey and ricotta",
          "Sicilian espresso",
          "Seasonal fruits and preserves"
        ]}
        isIncluded={true}
      />
      
      <ServiceCard
        icon={<Users className="w-6 h-6" />}
        title="Concierge Service"
        description="Personalized assistance to help you discover the best of Sicily and plan your activities."
        features={[
          "Local attraction recommendations",
          "Restaurant reservations",
          "Tour booking assistance",
          "Transportation arrangements"
        ]}
        isIncluded={true}
      />
      
      <ServiceCard
        icon={<Wifi className="w-6 h-6" />}
        title="High-Speed WiFi"
        description="Complimentary high-speed internet access throughout the property for work and leisure."
        features={[
          "Fiber optic connection",
          "Coverage in all rooms",
          "Business center access",
          "24/7 technical support"
        ]}
        isIncluded={true}
      />
      
      <ServiceCard
        icon={<Car className="w-6 h-6" />}
        title="Vehicle Rental"
        description="Car and scooter rental service to explore Sicily at your own pace."
        features={[
          "Economy and luxury cars",
          "Vespa scooter rentals",
          "GPS navigation included",
          "Insurance coverage available"
        ]}
        price="From €35/day"
      />
      
      <ServiceCard
        icon={<MapPin className="w-6 h-6" />}
        title="Guided Tours"
        description="Curated tours to discover Sicily's most beautiful destinations and hidden gems."
        features={[
          "Monreale Cathedral visits",
          "Segesta archaeological site",
          "San Vito Lo Capo beaches",
          "Local wine tastings"
        ]}
        price="From €65/person"
      />
    </div>
  )
}