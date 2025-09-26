import RoomCard from '../RoomCard'
import luxuryRoomImage from "@assets/generated_images/Luxury_Mediterranean_hotel_room_4952b043.png";
import suitImage from "@assets/generated_images/Modern_guest_house_suite_44edca0e.png";

export default function RoomCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto">
      <RoomCard
        id="deluxe-sea-view"
        name="Deluxe Sea View Room"
        type="Deluxe"
        image={luxuryRoomImage}
        description="Spacious room with breathtaking Mediterranean sea views, featuring modern amenities and traditional Sicilian charm."
        price={120}
        maxGuests={2}
        amenities={["WiFi", "Sea View", "Private Bathroom", "Air Conditioning", "Continental Breakfast"]}
        isAvailable={true}
      />
      <RoomCard
        id="luxury-suite"
        name="Mediterranean Suite"
        type="Suite"
        image={suitImage}
        description="Luxury suite with panoramic views, separate living area, and premium amenities for the perfect Sicilian getaway."
        price={180}
        maxGuests={4}
        amenities={["WiFi", "Sea View", "Balcony", "Air Conditioning", "Continental Breakfast", "Private Bathroom"]}
        isAvailable={true}
      />
    </div>
  )
}