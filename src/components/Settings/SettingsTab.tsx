import React from 'react';
import { motion } from 'framer-motion';

interface SettingsTabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: (id: string) => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  id,
  label,
  icon,
  isActive,
  onClick
}) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-[var(--accent)] text-white shadow-lg'
          : 'text-[var(--text-primary)] hover:bg-[var(--border)]'
      }`}
    >
      <span className={`${isActive ? 'text-white' : 'text-[var(--text-muted)]'}`}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 w-1 h-8 bg-white rounded-r-full"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
};