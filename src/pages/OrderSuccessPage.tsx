import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Download, Mail, Package } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  // Mock order data
  const orderData = {
    orderNumber: 'RCB-2024-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    email: 'customer@example.com',
    total: 4297,
    items: [
      { name: 'Official RCB Home Jersey 2024', quantity: 1, size: 'L' },
      { name: 'Official RCB Cap', quantity: 2 }
    ],
    estimatedDelivery: '5-7 business days'
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
              Order Placed Successfully!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your purchase! Your RCB merchandise is on its way.
            </p>

            {/* Order Details Card */}
            <Card className="mb-8 border-2 border-rcb-gold/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Package className="mr-2 h-5 w-5 text-rcb-red" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Order Number:</span>
                      <p className="font-mono font-semibold">{orderData.orderNumber}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>
                      <p className="font-semibold">{orderData.email}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total Amount:</span>
                      <p className="font-semibold text-rcb-red">₹{orderData.total.toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Estimated Delivery:</span>
                      <p className="font-semibold">{orderData.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>

                {/* Items Ordered */}
                <div>
                  <h3 className="font-semibold mb-3">Items Ordered:</h3>
                  <div className="space-y-2">
                    {orderData.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-sm bg-muted/20 rounded p-2">
                        <span>{item.name}</span>
                        <div className="flex items-center space-x-2">
                          {item.size && (
                            <Badge variant="outline" className="text-xs">
                              {item.size}
                            </Badge>
                          )}
                          <span>Qty: {item.quantity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Button variant="outline" className="border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black">
                <Download className="mr-2 h-4 w-4" />
                Download Invoice
              </Button>
              <Button variant="outline" className="border-rcb-red text-rcb-red hover:bg-rcb-red hover:text-white">
                <Mail className="mr-2 h-4 w-4" />
                Track Order
              </Button>
            </div>

            {/* Next Steps */}
            <Card className="bg-gradient-to-r from-rcb-red/5 to-rcb-gold/5 border-rcb-gold/30">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">What's Next?</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-rcb-red rounded-full"></span>
                    <span>We'll send you a confirmation email with tracking details</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-rcb-gold rounded-full"></span>
                    <span>Your order will be processed within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-rcb-red rounded-full"></span>
                    <span>Delivery within {orderData.estimatedDelivery}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <div className="mt-8 space-y-4">
              <Button 
                onClick={() => navigate('/shop')}
                className="bg-rcb-red hover:bg-rcb-red/90 text-white px-8 py-6 text-lg"
              >
                Continue Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="text-center">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/')}
                  className="text-muted-foreground hover:text-rcb-red"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;