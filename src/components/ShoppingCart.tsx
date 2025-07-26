import { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  image: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const ShoppingCart = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout 
}: ShoppingCartProps) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 bg-rcb-black/80 backdrop-blur-sm z-50 flex justify-end">
      <Card className="w-full max-w-md h-full rounded-none border-l-2 border-rcb-red/50 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-rcb-red to-rcb-gold text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shopping Cart ({items.length})
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0 flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-4">Add some RCB merchandise to get started!</p>
                <Button onClick={onClose} className="bg-rcb-red hover:bg-rcb-red/90 text-white">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              items.map((item) => (
                <Card key={item.id} className="border border-muted">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-gradient-to-br from-rcb-red/10 to-rcb-gold/10 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="h-8 w-8 text-rcb-red/30" />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                        {item.size && (
                          <Badge variant="outline" className="mt-1 text-xs">
                            Size: {item.size}
                          </Badge>
                        )}
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-rcb-red">
                            ₹{item.price.toLocaleString()}
                          </span>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="h-6 w-6 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-muted-foreground hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Cart Summary */}
          {items.length > 0 && (
            <div className="border-t border-border p-4 space-y-4">
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
                {shipping === 0 && (
                  <p className="text-xs text-green-600">Free shipping on orders above ₹999!</p>
                )}
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-rcb-red">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <Button 
                onClick={onCheckout}
                className="w-full bg-rcb-red hover:bg-rcb-red/90 text-white"
              >
                Proceed to Checkout
              </Button>
              
              <Button 
                variant="outline" 
                onClick={onClose}
                className="w-full border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black"
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ShoppingCart;