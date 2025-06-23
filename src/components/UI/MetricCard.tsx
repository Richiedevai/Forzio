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
    <div className="metric-card group w-full">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs md:text-sm font-medium text-[var(--text-muted)] mb-2 truncate">{title}</p>
          <p className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 truncate">{value}</p>
          {change && (
            <p className={`text-xs md:text-sm font-medium ${changeColors[changeType]} truncate`}>
              {change}
            </p>
          )}
        </div>
        <div className={`p-2 md:p-3 rounded-xl bg-[var(--highlight)] ${iconColor} group-hover:scale-110 transition-all duration-200 flex-shrink-0`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
};