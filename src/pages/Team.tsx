import React from 'react';
import { Users, UserCheck, Clock, Award } from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';

export const Team: React.FC = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Team & HR</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your team, track productivity, and handle HR tasks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Team Members"
          value="23"
          change="2 new hires this month"
          changeType="positive"
          icon={Users}
        />
        <MetricCard
          title="Attendance Rate"
          value="96.5%"
          change="+1.2% vs last month"
          changeType="positive"
          icon={UserCheck}
        />
        <MetricCard
          title="Avg. Hours/Week"
          value="42.3"
          change="Optimal productivity"
          changeType="positive"
          icon={Clock}
        />
        <MetricCard
          title="Performance Score"
          value="8.7/10"
          change="Team satisfaction high"
          changeType="positive"
          icon={Award}
        />
      </div>

      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Team Management</h3>
        <p className="text-gray-600 dark:text-gray-400">Team dashboards, performance tracking, and HR management tools are being developed for your team center.</p>
      </div>
    </div>
  );
};