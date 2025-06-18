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
  iconColor = 'text-electric-blue'
}) => {
  const changeColors = {
    positive: 'text-emerald-green',
    negative: 'text-vibrant-red',
    neutral: 'text-dashboard-secondary'
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:shadow-card-hover transition-all duration-200 hover:scale-105 group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-dashboard-secondary mb-2">{title}</p>
          <p className="text-2xl font-bold text-dashboard-text mb-2">{value}</p>
          {change && (
            <p className={`text-sm font-medium ${changeColors[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-slate-700 ${iconColor} group-hover:shadow-neon-blue transition-all duration-200`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};