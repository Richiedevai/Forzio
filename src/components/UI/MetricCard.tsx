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
  iconColor = 'text-accent-violet'
}) => {
  const changeColors = {
    positive: 'text-accent-green',
    negative: 'text-accent-red',
    neutral: 'text-text-secondary'
  };

  return (
    <div className="bg-card-bg rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 border border-border-color hover:scale-105 group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-text-secondary mb-2">{title}</p>
          <p className="text-2xl font-bold text-text-primary mb-2">{value}</p>
          {change && (
            <p className={`text-sm font-medium ${changeColors[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-sidebar-bg ${iconColor} group-hover:shadow-glow-violet transition-all duration-200`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};