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
  LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'sales', label: 'Sales & CRM', icon: TrendingUp },
  { id: 'marketing', label: 'Marketing', icon: MessageSquare },
  { id: 'operations', label: 'Operations', icon: Briefcase },
  { id: 'finance', label: 'Finance', icon: DollarSign },
  { id: 'team', label: 'Team & HR', icon: Users },
  { id: 'inbox', label: 'Inbox', icon: Mail },
  { id: 'reports', label: 'Reports', icon: BarChart },
  { id: 'agents', label: 'AI Agents', icon: Bot },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-70'} bg-sidebar-bg border-r border-border-color transition-all duration-300 flex flex-col`} style={{ width: isCollapsed ? '64px' : '280px' }}>
      {/* Header */}
      <div className="p-6 border-b border-border-color">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
                <img 
                  src="/YOvA (3).gif" 
                  alt="YovaOS Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-text-primary">YovaOS</h1>
                <p className="text-xs text-text-secondary">by Yova</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-card-bg transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-text-secondary" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-text-secondary" />
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
                      ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-glow-violet'
                      : 'text-text-secondary hover:bg-card-bg hover:text-text-primary'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-text-secondary group-hover:text-text-primary'}`} />
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
        <div className="p-6 border-t border-border-color">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary truncate">
                  {user.name}
                </p>
                <p className="text-xs text-text-secondary truncate">
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-1 text-text-secondary hover:text-text-primary hover:bg-card-bg rounded-lg transition-colors"
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