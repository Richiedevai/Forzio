import React, { useState } from 'react';
import { Search, Bell, Moon, Sun, Command, Brain } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setShowCommandPalette(true);
    }
  };

  return (
    <header className="h-16 bg-[var(--bg-card)]/80 backdrop-blur-md border-b border-[var(--border)] px-6 py-4 flex items-center justify-between">
      {/* Search */}
      <div className="flex-1 max-w-lg">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] w-4 h-4" />
          <input
            type="text"
            placeholder="Search or press ⌘K"
            className="w-full pl-10 pr-4 py-2 bg-[var(--bg-panel)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
            onKeyDown={handleKeyDown}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <kbd className="px-2 py-1 text-xs font-semibold text-[var(--text-muted)] bg-[var(--highlight)] border border-[var(--border)] rounded">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--highlight)] rounded-lg transition-all"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--highlight)] rounded-lg transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--danger)] rounded-full"></span>
        </button>

        {/* Ask Forzio */}
        <button className="flex items-center space-x-2 px-3 py-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 transition-all duration-200">
          <Brain className="w-4 h-4" />
          <span className="text-sm font-medium">Ask Forzio</span>
        </button>
      </div>
    </header>
  );
};