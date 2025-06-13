import React from 'react';
import { Mail, Calendar, TrendingUp, Target } from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';

export const Marketing: React.FC = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Marketing</h1>
        <p className="text-gray-600 dark:text-gray-400">Plan, execute, and analyze your marketing campaigns.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Campaign ROI"
          value="285%"
          change="+45% vs last quarter"
          changeType="positive"
          icon={TrendingUp}
        />
        <MetricCard
          title="Email Open Rate"
          value="34.2%"
          change="+5.7% this month"
          changeType="positive"
          icon={Mail}
        />
        <MetricCard
          title="Active Campaigns"
          value="12"
          change="3 launching this week"
          changeType="neutral"
          icon={Target}
        />
        <MetricCard
          title="Content Scheduled"
          value="47"
          change="Next 30 days"
          changeType="neutral"
          icon={Calendar}
        />
      </div>

      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Marketing Hub</h3>
        <p className="text-gray-600 dark:text-gray-400">Your comprehensive marketing command center is being built. Soon you'll be able to manage campaigns, content calendar, and automation from here.</p>
      </div>
    </div>
  );
};