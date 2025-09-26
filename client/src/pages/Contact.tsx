import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Send
} from "lucide-react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log('Contact form submitted:', data); // todo: remove mock functionality
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Thank you for your message! We will get back to you within 24 hours.'); // todo: remove mock functionality
    reset();
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We're here to help make your stay at AuRooms exceptional. Reach out to us for bookings, 
              inquiries, or any assistance you need for your Sicilian adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Address */}
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Address</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Via Roma 123<br />
                        90045 Cinisi, Sicily<br />
                        Italy
                      </p>
                      <p className="text-primary text-sm mt-2">
                        Just 3km from Palermo Airport
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone & Email */}
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground text-sm">+39 091 123 4567</p>
                        <p className="text-xs text-muted-foreground">Available 24/7</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground text-sm">info@aurooms.com</p>
                        <p className="text-xs text-muted-foreground">Response within 24h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">WhatsApp</h3>
                        <p className="text-muted-foreground text-sm">+39 091 123 4567</p>
                        <p className="text-xs text-muted-foreground">Quick responses</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reception Hours */}
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Reception Hours</h3>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Reception:</span>
                          <span className="text-card-foreground">24/7</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Check-in:</span>
                          <span className="text-card-foreground">15:00 - 22:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Check-out:</span>
                          <span className="text-card-foreground">08:00 - 11:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Breakfast:</span>
                          <span className="text-card-foreground">07:30 - 10:30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-10 h-10 hover:bg-primary/10"
                      data-testid="link-social-facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-10 h-10 hover:bg-primary/10"
                      data-testid="link-social-instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-10 h-10 hover:bg-primary/10"
                      data-testid="link-social-twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Stay updated with our latest news and special offers
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-card-border">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-card-foreground flex items-center space-x-2">
                    <Send className="w-6 h-6 text-primary" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Have a question or special request? We'd love to hear from you.
                  </p>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          {...register("name", { required: "Name is required" })}
                          placeholder="Enter your full name"
                          className="mt-1"
                          data-testid="input-contact-name"
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Please enter a valid email address"
                            }
                          })}
                          placeholder="your.email@example.com"
                          className="mt-1"
                          data-testid="input-contact-email"
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          placeholder="+39 123 456 7890"
                          className="mt-1"
                          data-testid="input-contact-phone"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Select>
                          <SelectTrigger className="mt-1" data-testid="select-contact-subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="booking">Booking Inquiry</SelectItem>
                            <SelectItem value="services">Services Information</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                            <SelectItem value="compliment">Compliment</SelectItem>
                            <SelectItem value="general">General Question</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        {...register("message", { required: "Message is required" })}
                        placeholder="Tell us how we can help you..."
                        className="mt-1 resize-none"
                        rows={6}
                        data-testid="textarea-contact-message"
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                      data-testid="button-send-message"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Us in Cinisi
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Located in the heart of Cinisi, just 3 kilometers from Palermo Airport
            </p>
          </div>
          
          {/* Map Placeholder */}
          <Card className="bg-card border-card-border">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Google Maps integration will be added here showing our exact location in Cinisi
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Distance Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="bg-card border-card-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">✈️</div>
                <h3 className="font-semibold text-card-foreground mb-1">Palermo Airport</h3>
                <p className="text-muted-foreground text-sm">3 km (5 minutes)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-card-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">🏛️</div>
                <h3 className="font-semibold text-card-foreground mb-1">Palermo City</h3>
                <p className="text-muted-foreground text-sm">30 km (30 minutes)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-card-border text-center">
              <CardContent className="p-6">
                <div className="text-2xl mb-2">🏖️</div>
                <h3 className="font-semibold text-card-foreground mb-1">Mondello Beach</h3>
                <p className="text-muted-foreground text-sm">25 km (25 minutes)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}