import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

interface AreaChartProps {
  data: Array<{ name: string; value: number; }>;
  color?: string;
  title?: string;
}

export const CustomAreaChart: React.FC<AreaChartProps> = ({ 
  data, 
  color = '#005EFF',
  title 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={theme === 'dark' ? '#374151' : '#E5E7EB'} 
          />
          <XAxis 
            dataKey="name" 
            stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'}
            fontSize={12}
          />
          <YAxis 
            stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'}
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF',
              border: `1px solid ${theme === 'dark' ? '#374151' : '#E5E7EB'}`,
              borderRadius: '8px',
              color: theme === 'dark' ? '#FFFFFF' : '#1F2937'
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill={`${color}20`}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};