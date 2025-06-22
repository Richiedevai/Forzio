import React from 'react';
import { Menu, X, LogOut, BarChart } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import type { Page } from '../../App';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage = 'landing' }) => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-card)]/80 backdrop-blur-md border-b border-[var(--border)]">
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
              <h1 className="text-xl font-bold text-black">Forzio</h1>
              <p className="text-xs text-[var(--text-muted)]">Your AI Co-founder</p>
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Page)}
                className={`text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                  currentPage === item.id
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-muted)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 gradient-cta rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-4 py-2 text-sm font-medium gradient-cta rounded-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <BarChart className="w-4 h-4" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border)]/50 rounded-lg transition-all"
                  title="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('auth')}
                  className="px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border)]/50 rounded-lg transition-all"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onNavigate('auth')}
                  className="px-4 py-2 text-sm font-medium gradient-cta rounded-lg hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border)]">
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
                      ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                      : 'text-[var(--text-muted)] hover:bg-[var(--border)]/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[var(--border)]">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 px-3 py-2">
                      <div className="w-8 h-8 gradient-cta rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {user.name}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-medium gradient-cta rounded-lg flex items-center space-x-2"
                    >
                      <BarChart className="w-4 h-4" />
                      <span>Dashboard</span>
                    </button>

                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-sm font-medium text-[var(--text-muted)] hover:bg-[var(--border)]/50 rounded-lg"
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
                      className="w-full text-left px-3 py-2 text-sm font-medium text-[var(--text-muted)] hover:bg-[var(--border)]/50 rounded-lg"
                    >
                      Sign In
                    </button>

                    <button
                      onClick={() => {
                        onNavigate('auth');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 mt-2 text-sm font-medium gradient-cta rounded-lg"
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
