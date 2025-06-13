import React from 'react';
import { DollarSign, TrendingUp, CreditCard, PieChart } from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';

export const Finance: React.FC = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Finance</h1>
        <p className="text-gray-600 dark:text-gray-400">Track revenue, expenses, and financial performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Monthly Revenue"
          value="$67,430"
          change="+12% vs last month"
          changeType="positive"
          icon={DollarSign}
        />
        <MetricCard
          title="Profit Margin"
          value="34.2%"
          change="+2.1% improvement"
          changeType="positive"
          icon={TrendingUp}
        />
        <MetricCard
          title="Outstanding"
          value="$12,450"
          change="5 pending invoices"
          changeType="neutral"
          icon={CreditCard}
        />
        <MetricCard
          title="Burn Rate"
          value="$23,100"
          change="18 months runway"
          changeType="positive"
          icon={PieChart}
        />
      </div>

      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Financial Dashboard</h3>
        <p className="text-gray-600 dark:text-gray-400">Comprehensive financial analytics, P&L statements, and payment tracking will be available in your finance center.</p>
      </div>
    </div>
  );
};