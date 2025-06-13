import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'text-primary-500'
}) => {
  const changeColors = {
    positive: 'text-success',
    negative: 'text-danger',
    neutral: 'text-gray-500 dark:text-gray-400'
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-800 hover:scale-105">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
          {change && (
            <p className={`text-sm font-medium ${changeColors[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-800 ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};