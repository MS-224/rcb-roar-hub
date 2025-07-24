import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Calendar, ImageIcon, Newspaper, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-rcb-red to-rcb-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">RCB</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">Royal Challengers Bangalore</span>
          </div>

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