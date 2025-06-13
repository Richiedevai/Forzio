import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface QuickActionButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  variant = 'secondary'
}) => {
  const baseClasses = "flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105";
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm">{label}</span>
    </button>
  );
};