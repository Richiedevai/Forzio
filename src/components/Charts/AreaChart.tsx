import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AreaChartProps {
  data: Array<{ name: string; value: number; }>;
  color?: string;
  title?: string;
}

export const CustomAreaChart: React.FC<AreaChartProps> = ({ 
  data, 
  color = 'var(--accent)',
  title 
}) => {
  return (
    <div className="chart-box">
      {title && (
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="var(--border)" 
          />
          <XAxis 
            dataKey="name" 
            stroke="var(--text-muted)"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="var(--text-muted)"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill="url(#colorGradient)"
            strokeWidth={2}
            filter={`drop-shadow(0 0 8px ${color}66)`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};