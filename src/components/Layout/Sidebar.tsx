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
    <div className={`${isCollapsed ? 'w-16' : 'w-70'} bg-slate-900 border-r border-slate-700 transition-all duration-300 flex flex-col`} style={{ width: isCollapsed ? '64px' : '280px' }}>
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-dashboard flex items-center justify-center shadow-neon-blue">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-dashboard bg-clip-text text-transparent">Forzio</h1>
                <p className="text-xs text-dashboard-secondary">Your AI Co-founder</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-dashboard-secondary" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-dashboard-secondary" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'px-4'} py-3 text-left rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-dashboard text-white shadow-neon-blue'
                      : 'text-dashboard-secondary hover:bg-slate-800 hover:text-dashboard-text'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-dashboard-secondary group-hover:text-dashboard-text'}`} />
                  {!isCollapsed && (
                    <span className="ml-3 text-sm font-medium">{item.label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {!isCollapsed && user && (
        <div className="p-6 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="w-8 h-8 bg-gradient-dashboard rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-dashboard-text truncate">
                  {user.name}
                </p>
                <p className="text-xs text-dashboard-secondary truncate">
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-1 text-dashboard-secondary hover:text-dashboard-text hover:bg-slate-800 rounded-lg transition-colors"
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