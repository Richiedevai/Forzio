import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AreaChartProps {
  data: Array<{ name: string; value: number; }>;
  color?: string;
  title?: string;
}

export const CustomAreaChart: React.FC<AreaChartProps> = ({ 
  data, 
  color = '#3A9FFF',
  title 
}) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:shadow-card-hover transition-all duration-200">
      {title && (
        <h3 className="text-lg font-semibold text-dashboard-text mb-6">{title}</h3>
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
            stroke="#475569" 
          />
          <XAxis 
            dataKey="name" 
            stroke="#94A3B8"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#94A3B8"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid #475569',
              borderRadius: '8px',
              color: '#F8FAFC',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill="url(#colorGradient)"
            strokeWidth={2}
            filter="drop-shadow(0 0 8px rgba(58, 159, 255, 0.6))"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};