import TestimonialCard from '../TestimonialCard'
import guestAvatar from "@assets/generated_images/Happy_guest_testimonial_photo_983a40f9.png";

export default function TestimonialCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      <TestimonialCard
        name="Marco Rossi"
        avatar={guestAvatar}
        location="Milan, Italy"
        rating={5}
        comment="Perfect location just minutes from the airport! The sea view was breathtaking and the Sicilian breakfast was absolutely delicious. Will definitely return!"
        date="Sept 2024"
      />
      <TestimonialCard
        name="Sarah Johnson"
        avatar={guestAvatar}
        location="London, UK"
        rating={5}
        comment="AuRooms exceeded all expectations. The authentic Sicilian hospitality combined with modern luxury made our stay unforgettable. Highly recommended!"
        date="Aug 2024"
      />
      <TestimonialCard
        name="Hans Mueller"
        avatar={guestAvatar}
        location="Berlin, Germany"
        rating={4}
        comment="Excellent guest house with beautiful rooms and amazing views. The staff was incredibly helpful and the location perfect for exploring Cinisi."
        date="July 2024"
      />
    </div>
  )
}