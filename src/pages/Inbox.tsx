import React from 'react';
import { Mail, MessageSquare, Phone, Bell } from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';

export const Inbox: React.FC = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Unified Inbox</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage all your communications from one central location.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Unread Emails"
          value="47"
          change="12 marked as urgent"
          changeType="neutral"
          icon={Mail}
        />
        <MetricCard
          title="WhatsApp Messages"
          value="23"
          change="8 business inquiries"
          changeType="positive"
          icon={MessageSquare}
        />
        <MetricCard
          title="Missed Calls"
          value="3"
          change="2 from prospects"
          changeType="neutral"
          icon={Phone}
        />
        <MetricCard
          title="AI Responses"
          value="89%"
          change="Auto-reply efficiency"
          changeType="positive"
          icon={Bell}
        />
      </div>

      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Communication Hub</h3>
        <p className="text-gray-600 dark:text-gray-400">Your unified inbox with email, WhatsApp, SMS integration and AI-powered responses is being built.</p>
      </div>
    </div>
  );
};