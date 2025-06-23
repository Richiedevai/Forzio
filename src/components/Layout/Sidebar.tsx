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
  Zap
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
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-70'} bg-[var(--bg-card)] border-r border-[var(--border)] transition-all duration-300 flex flex-col md:w-[280px] w-16`} style={{ width: isCollapsed ? '64px' : undefined }}>
      {/* Header */}
      <div className="p-6 border-b border-[var(--border)]">
        <div className="flex items-center justify-between">
          {/* Hide logo/brand on mobile, show only icon */}
          <div className="md:flex hidden items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center shadow-lg">
              <img src="/YOvA (3).png" alt="Forzio Logo" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[var(--text-primary)]">Forzio</h1>
              <p className="text-xs text-[var(--text-muted)]">Your AI Co-founder</p>
            </div>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-[var(--highlight)] transition-colors md:block hidden"
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
      <nav className="flex-1 p-2 md:p-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center justify-center md:justify-start px-0 md:px-4 py-3 text-left rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-[var(--accent)] text-white shadow-lg'
                      : 'text-[var(--text-muted)] hover:bg-[var(--highlight)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'}`} />
                  {/* Hide label on mobile, show on md+ */}
                  <span className="hidden md:inline ml-3 text-sm font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {user && (
        <div className="p-2 md:p-6 border-t border-[var(--border)]">
          <div className="flex items-center justify-center md:justify-between">
            <div className="hidden md:flex items-center space-x-3 flex-1 min-w-0">
              <div className="w-8 h-8 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] rounded-full flex items-center justify-center">
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
              className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--highlight)] rounded-lg transition-colors"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};