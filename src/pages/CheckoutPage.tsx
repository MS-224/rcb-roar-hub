import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield, User, MapPin, Phone, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: 'Official RCB Home Jersey 2024',
      price: 2499,
      quantity: 1,
      size: 'L'
    },
    {
      id: 3,
      name: 'Official RCB Cap',
      price: 899,
      quantity: 2
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    // Handle order placement
    navigate('/order-success');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/shop')}
            className="mb-6 hover:bg-rcb-red/10 hover:text-rcb-red"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
              Checkout
            </h1>
            <p className="text-muted-foreground mt-2">Complete your RCB merchandise purchase</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="mr-2 h-5 w-5 text-rcb-red" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input id="email" type="email" placeholder="john@example.com" className="pl-10" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input id="phone" placeholder="+91 9876543210" className="pl-10" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-muted-foreground h-4 w-4" />
                      <Input id="address" placeholder="Street address, apartment, suite, etc." className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Bangalore" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="Karnataka" />
                    </div>
                    <div>
                      <Label htmlFor="pincode">PIN Code</Label>
                      <Input id="pincode" placeholder="560001" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-rcb-red" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">Credit/Debit Card</Label>
                      <div className="flex space-x-2">
                        <div className="w-8 h-5 bg-blue-600 rounded text-xs text-white flex items-center justify-center">VISA</div>
                        <div className="w-8 h-5 bg-red-600 rounded text-xs text-white flex items-center justify-center">MC</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex-1 cursor-pointer">UPI</Label>
                      <div className="text-sm text-muted-foreground">PhonePe, Paytm, GPay</div>
                    </div>
                    
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">Cash on Delivery</Label>
                      <div className="text-sm text-muted-foreground">₹50 handling fee</div>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                    <div className="mt-4 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'upi' && (
                    <div className="mt-4">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input id="upiId" placeholder="example@upi" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.quantity} {item.size && `• Size: ${item.size}`}
                        </p>
                      </div>
                      <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className={shipping === 0 ? 'text-green-600' : ''}>
                        {shipping === 0 ? 'FREE' : `₹${shipping}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (GST)</span>
                      <span>₹{tax.toLocaleString()}</span>
                    </div>
                    {paymentMethod === 'cod' && (
                      <div className="flex justify-between">
                        <span>COD Fee</span>
                        <span>₹50</span>
                      </div>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-rcb-red">
                      ₹{(total + (paymentMethod === 'cod' ? 50 : 0)).toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Security Notice */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Secure Payment</p>
                      <p className="text-xs text-muted-foreground">
                        Your payment information is encrypted and secure
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Place Order Button */}
              <Button 
                onClick={handlePlaceOrder}
                className="w-full bg-rcb-red hover:bg-rcb-red/90 text-white py-6 text-lg font-semibold"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;