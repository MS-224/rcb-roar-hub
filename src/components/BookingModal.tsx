import { useState } from 'react';
import { X, Calendar, MapPin, Users, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Fixture {
  id: number;
  opponent: string;
  date: string;
  time: string;
  venue: string;
  type: string;
}

interface BookingModalProps {
  fixture: Fixture;
  onClose: () => void;
}

const BookingModal = ({ fixture, onClose }: BookingModalProps) => {
  const [selectedSeating, setSelectedSeating] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const seatingOptions = [
    { id: 'pavilion', name: 'Pavilion Stand', price: 2500, available: 45 },
    { id: 'corporate', name: 'Corporate Box', price: 5000, available: 12 },
    { id: 'popular', name: 'Popular Stand', price: 1200, available: 156 },
    { id: 'premium', name: 'Premium Stand', price: 3500, available: 78 }
  ];

  const selectedSeat = seatingOptions.find(seat => seat.id === selectedSeating);
  const totalPrice = selectedSeat ? selectedSeat.price * ticketQuantity : 0;

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking details:', {
      fixture,
      seating: selectedSeating,
      quantity: ticketQuantity,
      customer: customerInfo,
      total: totalPrice
    });
    // Close modal after booking
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-rcb-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-rcb-red/50">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
                Book Tickets
              </CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-rcb-red text-white">
                  RCB vs {fixture.opponent}
                </Badge>
                <Badge variant="outline" className="border-rcb-gold text-rcb-gold">
                  {fixture.type}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-rcb-red"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Match Details */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-rcb-gold" />
              Match Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">{fixture.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span className="font-medium">{fixture.time}</span>
              </div>
              <div className="flex justify-between md:col-span-2">
                <span className="text-muted-foreground">Venue:</span>
                <span className="font-medium flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {fixture.venue}
                </span>
              </div>
            </div>
          </div>

          {/* Seating Selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Select Seating Category</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {seatingOptions.map((seat) => (
                <Card 
                  key={seat.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedSeating === seat.id 
                      ? 'border-rcb-red bg-rcb-red/5' 
                      : 'border-border hover:border-rcb-gold'
                  }`}
                  onClick={() => setSelectedSeating(seat.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{seat.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {seat.available} left
                      </Badge>
                    </div>
                    <div className="text-lg font-bold text-rcb-red">
                      ₹{seat.price.toLocaleString()}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div>
            <Label htmlFor="quantity" className="text-base font-semibold mb-3 block">
              Number of Tickets
            </Label>
            <Select value={ticketQuantity.toString()} onValueChange={(value) => setTicketQuantity(parseInt(value))}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Ticket' : 'Tickets'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Customer Information</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Price Summary */}
          {selectedSeat && (
            <div className="bg-gradient-to-r from-rcb-red/10 to-rcb-gold/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-rcb-gold" />
                Price Summary
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{selectedSeat.name} x {ticketQuantity}</span>
                  <span>₹{(selectedSeat.price * ticketQuantity).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Booking Fee</span>
                  <span>₹{Math.round(totalPrice * 0.05).toLocaleString()}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-rcb-red">₹{(totalPrice + Math.round(totalPrice * 0.05)).toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-muted-foreground text-muted-foreground hover:border-rcb-red hover:text-rcb-red"
            >
              Cancel
            </Button>
            <Button
              onClick={handleBooking}
              disabled={!selectedSeating || !customerInfo.name || !customerInfo.email || !customerInfo.phone}
              className="flex-1 bg-rcb-red hover:bg-rcb-red/90 text-white"
            >
              Book Tickets - ₹{(totalPrice + Math.round(totalPrice * 0.05)).toLocaleString()}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingModal;