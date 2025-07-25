import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Calendar, ImageIcon, Newspaper, ShoppingBag, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import rcbLogo from '@/assets/rcb-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems] = useState(2); // Mock cart items count

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Team', href: '#team', icon: Users },
    { name: 'Fixtures', href: '#fixtures', icon: Calendar },
    { name: 'Gallery', href: '#gallery', icon: ImageIcon },
    { name: 'News', href: '#news', icon: Newspaper },
    { name: 'Shop', href: '#shop', icon: ShoppingBag },
  ];

  return (
    <nav className="fixed top-0 w-full bg-rcb-black/95 backdrop-blur-sm z-50 border-b border-rcb-red/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={rcbLogo} alt="RCB Logo" className="w-10 h-10 object-contain" />
            <span className="text-white font-bold text-xl hidden sm:block">Royal Challengers Bangalore</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-rcb-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              {/* Cart Icon */}
              {cartItems > 0 && (
                <Link to="/shop" className="relative">
                  <Button variant="ghost" className="text-white hover:text-rcb-gold hover:bg-rcb-red/20">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                  <Badge className="absolute -top-2 -right-2 bg-rcb-red text-white min-w-[1.25rem] h-5 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                </Link>
              )}
              <Link to="/signin">
                <Button variant="ghost" className="text-white hover:text-rcb-gold hover:bg-rcb-red/20">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-rcb-red hover:bg-rcb-red/90 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-rcb-gold hover:bg-rcb-red/20"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-rcb-black/95 border-t border-rcb-red/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-white hover:text-rcb-gold block px-3 py-2 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent size={20} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;