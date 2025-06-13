import React from 'react';
import { Briefcase, CheckSquare, Zap, Clock } from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';

export const Operations: React.FC = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Operations</h1>
        <p className="text-gray-600 dark:text-gray-400">Streamline workflows and monitor operational efficiency.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Active Tasks"
          value="156"
          change="23 completed today"
          changeType="positive"
          icon={CheckSquare}
        />
        <MetricCard
          title="Automations"
          value="24"
          change="8 running now"
          changeType="positive"
          icon={Zap}
        />
        <MetricCard
          title="Avg. Completion"
          value="2.3 days"
          change="-0.5 days improved"
          changeType="positive"
          icon={Clock}
        />
        <MetricCard
          title="Efficiency Score"
          value="94%"
          change="+7% this month"
          changeType="positive"
          icon={Briefcase}
        />
      </div>

      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Operations Center</h3>
        <p className="text-gray-600 dark:text-gray-400">Task management, automation monitoring, and operational insights are coming soon to your operations command center.</p>
      </div>
    </div>
  );
};