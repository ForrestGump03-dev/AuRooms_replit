import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Users, Mail, Phone, CreditCard } from "lucide-react";
import { useForm } from "react-hook-form";

interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  termsAccepted: boolean;
  transferService: boolean;
  breakfastIncluded: boolean;
}

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(240); // todo: remove mock functionality
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<BookingFormData>({
    defaultValues: {
      checkIn: '',
      checkOut: '',
      guests: '2',
      roomType: '',
      guestName: '',
      guestEmail: '',
      guestPhone: '',
      specialRequests: '',
      termsAccepted: false,
      transferService: false,
      breakfastIncluded: true
    }
  });

  const roomTypes = [
    { value: "deluxe-sea-view", label: "Deluxe Sea View Room - €120/night", price: 120 },
    { value: "mediterranean-suite", label: "Mediterranean Suite - €180/night", price: 180 },
    { value: "traditional-room", label: "Traditional Sicilian Room - €95/night", price: 95 },
    { value: "family-suite", label: "Family Suite - €220/night", price: 220 }
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    console.log('Booking submitted:', data); // todo: remove mock functionality
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Booking request submitted! You will receive a confirmation email shortly.'); // todo: remove mock functionality
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="bg-card border-card-border">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-card-foreground flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-primary" />
            <span>Book Your Stay at AuRooms</span>
          </CardTitle>
          <p className="text-muted-foreground">
            Complete your reservation for luxury accommodation in Cinisi, Sicily
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Dates & Guests */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="checkIn">Check-in Date</Label>
                <Input
                  id="checkIn"
                  type="date"
                  {...register("checkIn", { required: "Check-in date is required" })}
                  className="mt-1"
                  data-testid="input-check-in"
                />
                {errors.checkIn && (
                  <p className="text-destructive text-sm mt-1">{errors.checkIn.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="checkOut">Check-out Date</Label>
                <Input
                  id="checkOut"
                  type="date"
                  {...register("checkOut", { required: "Check-out date is required" })}
                  className="mt-1"
                  data-testid="input-check-out"
                />
                {errors.checkOut && (
                  <p className="text-destructive text-sm mt-1">{errors.checkOut.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Select defaultValue="2" data-testid="select-guests">
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Room Type */}
            <div>
              <Label htmlFor="roomType">Room Type</Label>
              <Select data-testid="select-room-type">
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a room type" />
                </SelectTrigger>
                <SelectContent>
                  {roomTypes.map((room) => (
                    <SelectItem key={room.value} value={room.value}>
                      {room.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Guest Information */}
            <div className="space-y-4">
              <h3 className="font-medium text-card-foreground flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Guest Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="guestName">Full Name</Label>
                  <Input
                    id="guestName"
                    {...register("guestName", { required: "Name is required" })}
                    placeholder="Enter your full name"
                    className="mt-1"
                    data-testid="input-guest-name"
                  />
                  {errors.guestName && (
                    <p className="text-destructive text-sm mt-1">{errors.guestName.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="guestPhone">Phone Number</Label>
                  <Input
                    id="guestPhone"
                    {...register("guestPhone", { required: "Phone number is required" })}
                    placeholder="+39 123 456 7890"
                    className="mt-1"
                    data-testid="input-guest-phone"
                  />
                  {errors.guestPhone && (
                    <p className="text-destructive text-sm mt-1">{errors.guestPhone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="guestEmail">Email Address</Label>
                <Input
                  id="guestEmail"
                  type="email"
                  {...register("guestEmail", { 
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email address"
                    }
                  })}
                  placeholder="your.email@example.com"
                  className="mt-1"
                  data-testid="input-guest-email"
                />
                {errors.guestEmail && (
                  <p className="text-destructive text-sm mt-1">{errors.guestEmail.message}</p>
                )}
              </div>
            </div>

            {/* Extra Services */}
            <div className="space-y-4">
              <h3 className="font-medium text-card-foreground">Extra Services</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="transferService" 
                    {...register("transferService")}
                    data-testid="checkbox-transfer-service"
                  />
                  <Label htmlFor="transferService" className="text-sm">
                    Airport Transfer Service (+€30)
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="breakfastIncluded" 
                    {...register("breakfastIncluded")}
                    defaultChecked={true}
                    data-testid="checkbox-breakfast"
                  />
                  <Label htmlFor="breakfastIncluded" className="text-sm">
                    Traditional Sicilian Breakfast (Included)
                  </Label>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <Label htmlFor="specialRequests">Special Requests</Label>
              <Textarea
                id="specialRequests"
                {...register("specialRequests")}
                placeholder="Any special requests or dietary requirements..."
                className="mt-1 resize-none"
                rows={3}
                data-testid="textarea-special-requests"
              />
            </div>

            {/* Price Summary */}
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="font-medium text-card-foreground mb-2">Booking Summary</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Room (2 nights)</span>
                  <span>€240</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Taxes & Fees</span>
                  <span>€15</span>
                </div>
                <div className="border-t pt-1 flex justify-between font-medium text-card-foreground">
                  <span>Total</span>
                  <span data-testid="text-total-price">€{calculatedPrice + 15}</span>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="termsAccepted" 
                {...register("termsAccepted", { required: "You must accept the terms" })}
                data-testid="checkbox-terms"
              />
              <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                I agree to the <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a> and 
                <a href="/privacy" className="text-primary hover:underline"> Privacy Policy</a>
              </Label>
            </div>
            {errors.termsAccepted && (
              <p className="text-destructive text-sm">{errors.termsAccepted.message}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
              disabled={isSubmitting}
              data-testid="button-submit-booking"
            >
              {isSubmitting ? (
                <span className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Proceed to Payment</span>
                </span>
              )}
            </Button>

            {/* Alternative Booking Options */}
            <div className="text-center text-sm text-muted-foreground">
              Having trouble? Book directly on{" "}
              <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Booking.com
              </a>{" "}
              or{" "}
              <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Airbnb
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}