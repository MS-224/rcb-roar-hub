import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Filter, Search, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import ShoppingCartModal from './ShoppingCart';

const ShopSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ['all', 'jerseys', 'caps', 'accessories', 'collectibles'];

  // Mock products data
  const products = [
    {
      id: 1,
      name: 'Official RCB Home Jersey 2024',
      category: 'jerseys',
      price: 2499,
      originalPrice: 2999,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 245,
      bestseller: true,
      discount: 17,
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: 'RCB Away Jersey 2024',
      category: 'jerseys',
      price: 2299,
      originalPrice: 2799,
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 189,
      bestseller: false,
      discount: 18,
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: 'Official RCB Cap',
      category: 'caps',
      price: 899,
      originalPrice: 1199,
      image: '/placeholder.svg',
      rating: 4.6,
      reviews: 156,
      bestseller: true,
      discount: 25,
      sizes: ['One Size']
    },
    {
      id: 4,
      name: 'RCB Training Cap',
      category: 'caps',
      price: 699,
      originalPrice: 999,
      image: '/placeholder.svg',
      rating: 4.5,
      reviews: 98,
      bestseller: false,
      discount: 30,
      sizes: ['One Size']
    },
    {
      id: 5,
      name: 'RCB Coffee Mug',
      category: 'accessories',
      price: 399,
      originalPrice: 599,
      image: '/placeholder.svg',
      rating: 4.4,
      reviews: 87,
      bestseller: false,
      discount: 33,
      sizes: ['One Size']
    },
    {
      id: 6,
      name: 'RCB Keychain',
      category: 'accessories',
      price: 199,
      originalPrice: 299,
      image: '/placeholder.svg',
      rating: 4.3,
      reviews: 134,
      bestseller: false,
      discount: 33,
      sizes: ['One Size']
    },
    {
      id: 7,
      name: 'Signed Cricket Bat',
      category: 'collectibles',
      price: 8999,
      originalPrice: 12999,
      image: '/placeholder.svg',
      rating: 5.0,
      reviews: 23,
      bestseller: false,
      discount: 31,
      sizes: ['One Size'],
      limited: true
    },
    {
      id: 8,
      name: 'RCB Championship Photo Frame',
      category: 'collectibles',
      price: 1499,
      originalPrice: 1999,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 45,
      bestseller: false,
      discount: 25,
      sizes: ['One Size']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const addToCart = (product: any, size?: string) => {
    const cartItem = {
      id: Date.now(), // Simple ID generation
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: size || 'One Size',
      image: product.image
    };
    setCartItems(prev => [...prev, cartItem]);
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-between max-w-4xl mx-auto mb-6">
            <div></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
                RCB STORE
              </h2>
              <p className="text-xl text-muted-foreground">
                Show your RCB pride with official merchandise and collectibles
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsCartOpen(true)}
              className="relative border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-rcb-red text-white">
                  {cartItems.length}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? 'bg-rcb-gold text-rcb-black hover:bg-rcb-gold/90' 
                  : 'border-rcb-gold text-rcb-gold hover:bg-rcb-gold hover:text-rcb-black'}
              >
                <Filter className="mr-1 h-3 w-3" />
                {formatCategory(category)}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-rcb-red/50">
              <CardHeader className="p-0 relative">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-rcb-red/10 to-rcb-gold/10 flex items-center justify-center rounded-t-lg relative overflow-hidden">
                  <ShoppingCart className="h-16 w-16 text-rcb-red/30" />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.bestseller && (
                      <Badge className="bg-rcb-red text-white">
                        Bestseller
                      </Badge>
                    )}
                    {product.limited && (
                      <Badge className="bg-rcb-gold text-rcb-black">
                        Limited Edition
                      </Badge>
                    )}
                    {product.discount > 0 && (
                      <Badge variant="outline" className="border-green-500 text-green-500">
                        {product.discount}% OFF
                      </Badge>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-sm group-hover:text-rcb-red transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-rcb-red">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Sizes */}
                {product.sizes.length > 1 && (
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.slice(0, 3).map((size) => (
                      <Badge key={size} variant="outline" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                    {product.sizes.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.sizes.length - 3}
                      </Badge>
                    )}
                  </div>
                )}

                {/* Add to Cart Button */}
                <Button 
                  className="w-full bg-rcb-red hover:bg-rcb-red/90 text-white"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <Truck className="h-12 w-12 text-rcb-red mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Free Shipping</h3>
            <p className="text-sm text-muted-foreground">On orders above ₹999</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <Shield className="h-12 w-12 text-rcb-red mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Authentic Products</h3>
            <p className="text-sm text-muted-foreground">100% genuine merchandise</p>
          </div>
          <div className="text-center p-6 bg-muted/30 rounded-xl">
            <RotateCcw className="h-12 w-12 text-rcb-red mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Easy Returns</h3>
            <p className="text-sm text-muted-foreground">30-day return policy</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-rcb-red/10 to-rcb-gold/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Join the RCB Family</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Sign up for exclusive deals, early access to new products, and special member benefits
          </p>
          <Button className="bg-rcb-gold text-rcb-black hover:bg-rcb-gold/90 px-8 py-6 text-lg font-semibold">
            Become a Member
          </Button>
        </div>
      </div>

      {/* Shopping Cart Modal */}
      <ShoppingCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />
    </section>
  );
};

export default ShopSection;