import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SignInPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', { email, password });
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
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Branding */}
          <div className="hidden lg:block text-center text-white">
            <div className="w-32 h-32 bg-gradient-to-r from-rcb-red to-rcb-gold rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-white font-bold text-5xl">RCB</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
              Royal Challengers Bangalore
            </h1>
            <p className="text-xl text-white/80 max-w-md mx-auto">
              Join the RCB family and experience cricket like never before. 
              Access exclusive content, book tickets, and stay connected with your favorite team.
            </p>
          </div>
          
          {/* Right Column - Sign In Form */}
          <Card className="w-full max-w-md mx-auto lg:mx-0">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-rcb-red to-rcb-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">RCB</span>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-rcb-red to-rcb-gold bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription>
            Sign in to your RCB account to access exclusive content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex items-center justify-between">
              <Link
                to="/forgot-password"
                className="text-sm text-rcb-red hover:text-rcb-gold transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-rcb-red hover:bg-rcb-red/90 text-white"
            >
              Sign In
            </Button>

            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-rcb-red hover:text-rcb-gold transition-colors font-medium"
                >
                  Sign up
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

export default SignInPage;