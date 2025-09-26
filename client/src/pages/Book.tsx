import BookingForm from "@/components/BookingForm";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Book() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Book Your Stay
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete your reservation for luxury accommodation in Cinisi, Sicily. 
              Experience authentic Sicilian hospitality just 3km from Palermo Airport.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Booking Benefits */}
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
                    Why Book Direct?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">Best rate guarantee</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">Free airport transfer on stays 3+ nights</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">Complimentary room upgrade (subject to availability)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">Flexible cancellation policy</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">Personalized concierge service</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
                    Need Assistance?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our team is here to help you with your booking 24/7
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-card-foreground text-sm">Phone</p>
                        <p className="text-muted-foreground text-sm">+39 091 123 4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-card-foreground text-sm">Email</p>
                        <p className="text-muted-foreground text-sm">bookings@aurooms.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-card-foreground text-sm">WhatsApp</p>
                        <p className="text-muted-foreground text-sm">+39 091 123 4567</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Policies */}
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
                    Booking Policies
                  </h3>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium text-card-foreground mb-1">Check-in / Check-out</h4>
                      <p className="text-muted-foreground">
                        Check-in: 15:00 - 22:00<br />
                        Check-out: 08:00 - 11:00
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-card-foreground mb-1">Cancellation</h4>
                      <p className="text-muted-foreground">
                        Free cancellation up to 24 hours before arrival. 
                        Late cancellations subject to one night charge.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-card-foreground mb-1">Payment</h4>
                      <p className="text-muted-foreground">
                        Secure payment via Stripe. All major credit cards accepted. 
                        Full payment required at booking.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Booking */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-lg font-semibold text-card-foreground mb-3">
                    Alternative Booking Options
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Having trouble with our booking form? You can also book through:
                  </p>
                  
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => window.open('https://booking.com', '_blank')}
                      data-testid="button-booking-com"
                    >
                      Book on Booking.com
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('https://airbnb.com', '_blank')}
                      data-testid="button-airbnb"
                    >
                      Book on Airbnb
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}