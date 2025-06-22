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
  iconColor = 'text-[var(--accent)]'
}) => {
  const changeColors = {
    positive: 'text-[var(--success)]',
    negative: 'text-[var(--danger)]',
    neutral: 'text-[var(--text-muted)]'
  };

  return (
    <div className="metric-card group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-[var(--text-muted)] mb-2">{title}</p>
          <p className="text-2xl font-bold text-[var(--text-primary)] mb-2">{value}</p>
          {change && (
            <p className={`text-sm font-medium ${changeColors[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl bg-[var(--highlight)] ${iconColor} group-hover:scale-110 transition-all duration-200`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};