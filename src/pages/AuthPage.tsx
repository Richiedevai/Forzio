import React, { useState } from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Brain } from 'lucide-react';
import { useToast } from '../hooks/useToast';

interface AuthPageProps {
  onNavigate: (page: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');

  const { login, signup, isLoading } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!isLogin && !formData.name) {
      setError('Please enter your name.');
      return;
    }

    try {
      let success = false;
      
      if (isLogin) {
        success = await login(formData.email, formData.password);
        if (success) {
          addToast({
            message: 'Welcome back! Your AI co-founder is ready.',
            type: 'success'
          });
          setTimeout(() => onNavigate('dashboard'), 1000);
        } else {
          setError('Invalid email or password. Please try again.');
        }
      } else {
        success = await signup(formData.email, formData.password, formData.name);
        if (success) {
          addToast({
            message: 'Welcome to Forzio! Your AI co-founder is being set up.',
            type: 'success'
          });
          setTimeout(() => onNavigate('dashboard'), 1000);
        } else {
          setError('Failed to create account. Please try again.');
        }
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  return (
    <div className="min-h-screen bg-public-bg">
      <Navbar onNavigate={onNavigate} currentPage="auth" />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-public-border/50 to-transparent border border-public-border rounded-2xl shadow-neon-blue p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-neon-blue">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-public-text mb-2">
                {isLogin ? 'Welcome back' : 'Meet your AI co-founder'}
              </h1>
              <p className="text-public-text/70">
                {isLogin 
                  ? 'Sign in to continue building with Forzio' 
                  : 'Join thousands of founders scaling with AI'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-public-text/80 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-public-text/60 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-public-border rounded-xl bg-public-bg/50 text-public-text placeholder-public-text/50 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-public-text/80 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-public-text/60 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-public-border rounded-xl bg-public-bg/50 text-public-text placeholder-public-text/50 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-public-text/80 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-public-text/60 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-public-border rounded-xl bg-public-bg/50 text-public-text placeholder-public-text/50 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-public-text/60 hover:text-public-text"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {!isLogin && (
                  <p className="text-xs text-public-text/50 mt-1">
                    Password must be at least 6 characters long
                  </p>
                )}
              </div>

              {error && (
                <div className="p-3 bg-vibrant-red/10 border border-vibrant-red/30 rounded-lg">
                  <p className="text-sm text-vibrant-red">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-electric text-white rounded-xl font-semibold hover:shadow-neon-blue transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{isLogin ? 'Sign In' : 'Start Building'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-public-text/60">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError('');
                    setFormData({ email: '', password: '', name: '' });
                  }}
                  className="ml-1 text-electric-blue hover:text-violet-indigo font-medium"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>

            {isLogin && (
              <div className="mt-4 text-center">
                <button className="text-sm text-electric-blue hover:text-violet-indigo">
                  Forgot your password?
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-public-text/50">
              By continuing, you agree to our{' '}
              <a href="#" className="text-electric-blue hover:text-violet-indigo">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-electric-blue hover:text-violet-indigo">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};