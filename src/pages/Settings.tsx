import React from 'react';
import { Settings as SettingsIcon, Key, Globe, Bell, Moon, Sun } from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';
import { useTheme } from '../contexts/ThemeContext';

export const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings & Integrations</h1>
        <p className="text-gray-600 dark:text-gray-400">Configure your workspace and manage integrations.</p>
      </div>

      {/* Theme Switcher */}
      <div className="card flex items-center space-x-4 mb-4">
        <span className="font-medium">Dashboard Theme:</span>
        <button
          className={`btn-primary flex items-center space-x-2 ${theme === 'dark' ? '' : 'opacity-60'}`}
          onClick={() => theme !== 'dark' && toggleTheme()}
          aria-pressed={theme === 'dark'}
        >
          <Moon className="w-4 h-4" />
          <span>Dark</span>
        </button>
        <button
          className={`btn-primary flex items-center space-x-2 ${theme === 'light' ? '' : 'opacity-60'}`}
          onClick={() => theme !== 'light' && toggleTheme()}
          aria-pressed={theme === 'light'}
        >
          <Sun className="w-4 h-4" />
          <span>Light</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Integrations"
          value="12"
          change="8 active connections"
          changeType="positive"
          icon={Globe}
        />
        <MetricCard
          title="API Calls"
          value="2,847"
          change="This month"
          changeType="neutral"
          icon={Key}
        />
        <MetricCard
          title="Notifications"
          value="23"
          change="Custom rules active"
          changeType="positive"
          icon={Bell}
        />
        <MetricCard
          title="System Health"
          value="99.9%"
          change="Excellent uptime"
          changeType="positive"
          icon={SettingsIcon}
        />
      </div>

      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Configuration Center</h3>
        <p className="text-gray-600 dark:text-gray-400">Workspace settings, API management, and integration configuration tools are being developed for your settings center.</p>
      </div>
    </div>
  );
};