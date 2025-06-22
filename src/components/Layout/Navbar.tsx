import React from 'react';
import { Menu, X, Moon, Sun, LogOut, BarChart } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import type { Page } from '../../App';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage = 'landing' }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLogout = async () => {
    await logout();
    onNavigate('landing');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-public-bg/80 backdrop-blur-md border-b border-public-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group flex-shrink-0" onClick={() => onNavigate('landing')}>
            <img 
              src="/YOvA.png" 
              alt="Forzio Logo" 
              className="w-8 h-8 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold bg-gradient-electric bg-clip-text text-transparent">Forzio</h1>
              <p className="text-xs text-public-text/60">Your AI Co-founder</p>
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Page)}
                className={`text-sm font-medium transition-colors hover:text-electric-blue ${
                  currentPage === item.id
                    ? 'text-electric-blue'
                    : 'text-public-text/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 text-public-text/60 hover:text-public-text hover:bg-public-border/50 rounded-lg transition-all"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-electric rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-public-text">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-4 py-2 text-sm font-medium bg-gradient-electric text-white rounded-lg hover:shadow-neon-blue transition-all duration-200 hover:scale-105 flex items-center space-x-2"
                >
                  <BarChart className="w-4 h-4" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 text-public-text/60 hover:text-public-text hover:bg-public-border/50 rounded-lg transition-all"
                  title="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('auth')}
                  className="px-4 py-2 text-sm font-medium text-public-text/80 hover:text-public-text hover:bg-public-border/50 rounded-lg transition-all"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onNavigate('auth')}
                  className="px-4 py-2 text-sm font-medium bg-gradient-electric text-white rounded-lg hover:shadow-neon-blue transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-public-text/60 hover:text-public-text rounded-lg"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-public-text/60 hover:text-public-text rounded-lg"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-public-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id as Page);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'text-electric-blue bg-electric-blue/10'
                      : 'text-public-text/80 hover:bg-public-border/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-3 border-t border-public-border">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 px-3 py-2">
                      <div className="w-8 h-8 bg-gradient-electric rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-public-text">
                        {user.name}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-medium bg-gradient-electric text-white rounded-lg flex items-center space-x-2"
                    >
                      <BarChart className="w-4 h-4" />
                      <span>Dashboard</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-medium text-public-text/80 hover:bg-public-border/50 rounded-lg"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        onNavigate('auth');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-medium text-public-text/80 hover:bg-public-border/50 rounded-lg"
                    >
                      Sign In
                    </button>
                    
                    <button
                      onClick={() => {
                        onNavigate('auth');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 mt-2 text-sm font-medium bg-gradient-electric text-white rounded-lg"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};