import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  TrendingUp, 
  Settings, 
  MessageSquare, 
  BarChart,
  DollarSign,
  Briefcase,
  Bot,
  Mail,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Brain,
  Target,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Home', icon: Home },
  { id: 'agents', label: 'AI Hub', icon: Brain },
  { id: 'operations', label: 'Process', icon: Target },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'reports', label: 'Reports', icon: BarChart },
  { id: 'finance', label: 'Growth', icon: TrendingUp },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const handleMobileMenuToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMobileOpen(false); // Close mobile menu when navigating
  };

  return (
    <>
      {/* Mobile Menu Button - Fixed position */}
      <button
        onClick={handleMobileMenuToggle}
        className="fixed top-4 left-4 z-50 p-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg shadow-lg md:hidden"
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative
        top-0 left-0 h-full
        bg-[var(--bg-card)] border-r border-[var(--border)]
        transition-all duration-300 ease-in-out
        z-50 md:z-auto
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isCollapsed ? 'w-16' : 'w-64'}
        md:w-64
        flex flex-col
        overflow-hidden
      `}>
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-[var(--border)] flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 ${isCollapsed ? 'md:hidden' : ''}`}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center shadow-lg flex-shrink-0">
                <img src="/YOvA.png" alt="Forzio Logo" className="w-6 h-6 object-contain" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg font-bold text-[var(--text-primary)] truncate">Forzio</h1>
                <p className="text-xs text-[var(--text-muted)] truncate">Your AI Co-founder</p>
              </div>
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded-lg hover:bg-[var(--highlight)] transition-colors hidden md:block flex-shrink-0"
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4 text-[var(--text-muted)]" />
              ) : (
                <ChevronLeft className="w-4 h-4 text-[var(--text-muted)]" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 md:p-4 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handlePageChange(item.id)}
                    className={`w-full flex items-center px-3 py-3 text-left rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'bg-[var(--accent)] text-white shadow-lg'
                        : 'text-[var(--text-muted)] hover:bg-[var(--highlight)] hover:text-[var(--text-primary)]'
                    }`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'}`} />
                    <span className={`ml-3 text-sm font-medium truncate ${isCollapsed ? 'md:hidden' : ''}`}>
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        {user && (
          <div className="p-2 md:p-4 border-t border-[var(--border)] flex-shrink-0">
            <div className={`flex items-center ${isCollapsed ? 'justify-center md:justify-center' : 'justify-between'}`}>
              <div className={`flex items-center space-x-3 flex-1 min-w-0 ${isCollapsed ? 'md:hidden' : ''}`}>
                <div className="w-8 h-8 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--text-primary)] truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] truncate">
                    {user.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--highlight)] rounded-lg transition-colors flex-shrink-0"
                title="Sign out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};