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
  color = '#8B5CF6',
  title 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="bg-card-bg rounded-2xl p-6 shadow-card border border-border-color hover:shadow-card-hover transition-all duration-200">
      {title && (
        <h3 className="text-lg font-semibold text-text-primary mb-6">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#2A2A2F" 
          />
          <XAxis 
            dataKey="name" 
            stroke="#A3A3A8"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#A3A3A8"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#1A1A1F',
              border: '1px solid #2A2A2F',
              borderRadius: '8px',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill={`url(#gradient)`}
            strokeWidth={2}
            filter="drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};