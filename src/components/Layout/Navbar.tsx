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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-card)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">

          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('landing')}>
            <img src="/YOvA.png" alt="Forzio Logo" className="w-8 h-8 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-black">Forzio</h1>
              <p className="text-xs text-[var(--text-muted)]">Your AI Co-founder</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Page)}
                className={`text-sm font-medium hover:text-[var(--accent)] transition ${
                  currentPage === item.id ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop User Section */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <div className="w-8 h-8 gradient-cta rounded-full flex items-center justify-center">
                  <span className="text-sm text-white">{user.name.charAt(0).toUpperCase()}</span>
                </div>
                <span className="text-sm">{user.name}</span>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="px-3 py-1 text-sm gradient-cta rounded-lg hover:scale-105 flex items-center space-x-1"
                >
                  <BarChart className="w-4 h-4" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  title="Sign out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('auth')}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onNavigate('auth')}
                  className="px-3 py-1 text-sm gradient-cta rounded-lg hover:scale-105"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--bg-card)]/95 backdrop-blur-md border-t border-[var(--border)] p-4 space-y-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id as Page);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                currentPage === item.id ? 'bg-[var(--accent)]/20 text-[var(--accent)]' : 'text-[var(--text-muted)] hover:bg-[var(--border)]/30'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="border-t pt-3 space-y-3">
            {user ? (
              <>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 gradient-cta rounded-full flex items-center justify-center">
                    <span className="text-sm text-white">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <span className="text-sm">{user.name}</span>
                </div>
                <button
                  onClick={() => {
                    onNavigate('dashboard');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg gradient-cta text-white flex items-center space-x-2"
                >
                  <BarChart className="w-4 h-4" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg text-[var(--text-muted)] hover:bg-[var(--border)]/30"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onNavigate('auth');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg text-[var(--text-muted)] hover:bg-[var(--border)]/30"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    onNavigate('auth');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg gradient-cta text-white"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
