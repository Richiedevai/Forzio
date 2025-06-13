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
  ChevronRight
} from 'lucide-react';

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

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-dark-card border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src="/YOvA.gif" 
                  alt="YOvA Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">YovaOS</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">by Yova</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'px-3'} py-2.5 text-left rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'}`} />
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
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">F</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Founder</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">CEO & Founder</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};