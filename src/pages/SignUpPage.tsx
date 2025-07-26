import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up:', formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rcb-black via-rcb-red/10 to-rcb-gold/10">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="text-white hover:bg-white/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
      
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Branding */}
          <div className="hidden lg:block text-center text-white">
            <div className="w-32 h-32 bg-gradient-to-r from-rcb-red to-rcb-gold rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-white font-bold text-5xl">RCB</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
              Royal Challengers Bangalore
            </h1>
            <p className="text-xl text-white/80 max-w-md mx-auto mb-6">
              Be part of the RCB legacy. Create your account to access exclusive content, 
              early ticket bookings, and connect with fellow cricket enthusiasts.
            </p>
            <div className="space-y-4 text-white/60">
              <div className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-rcb-red rounded-full"></span>
                <span>Exclusive match highlights</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-rcb-gold rounded-full"></span>
                <span>Priority ticket booking</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-rcb-red rounded-full"></span>
                <span>Member-only merchandise</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Sign Up Form */}
          <Card className="w-full max-w-md mx-auto lg:mx-0">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-rcb-red to-rcb-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">RCB</span>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            Join RCB Family
          </CardTitle>
          <CardDescription>
            Create your account to access exclusive RCB content and updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{' '}
                <Link to="/terms" className="text-rcb-red hover:text-rcb-gold transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-rcb-red hover:text-rcb-gold transition-colors">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-rcb-red hover:bg-rcb-red/90 text-white"
              disabled={!formData.agreeTerms}
            >
              Create Account
            </Button>

            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link
                  to="/signin"
                  className="text-rcb-red hover:text-rcb-gold transition-colors font-medium"
                >
                  Sign in
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;