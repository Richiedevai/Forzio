import React from 'react';
import { Users, TrendingUp, Phone, Mail, Plus } from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';

export const Sales: React.FC = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sales & CRM</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your sales pipeline and customer relationships.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:shadow-lg transition-all">
          <Plus className="w-4 h-4" />
          <span>Add Lead</span>
        </button>
      </div>

      {/* Sales Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Leads"
          value="347"
          change="+23 this week"
          changeType="positive"
          icon={Users}
        />
        <MetricCard
          title="Conversion Rate"
          value="24.5%"
          change="+2.1% vs last month"
          changeType="positive"
          icon={TrendingUp}
        />
        <MetricCard
          title="Active Deals"
          value="67"
          change="$234k pipeline"
          changeType="neutral"
          icon={Phone}
        />
        <MetricCard
          title="Email Responses"
          value="89%"
          change="AI-powered outreach"
          changeType="positive"
          icon={Mail}
        />
      </div>

      {/* Pipeline View */}
      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Sales Pipeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { stage: 'Prospects', count: 147, value: '$45k', color: 'bg-gray-100 dark:bg-gray-800' },
            { stage: 'Qualified', count: 67, value: '$123k', color: 'bg-blue-100 dark:bg-blue-900/20' },
            { stage: 'Proposal', count: 23, value: '$89k', color: 'bg-yellow-100 dark:bg-yellow-900/20' },
            { stage: 'Closed Won', count: 12, value: '$67k', color: 'bg-green-100 dark:bg-green-900/20' },
          ].map((stage, index) => (
            <div key={index} className={`${stage.color} rounded-xl p-4`}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{stage.stage}</h4>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stage.count}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stage.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Leads */}
      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Leads</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Lead</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Company</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Stage</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Value</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Last Contact</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'John Smith', company: 'Tech Corp', stage: 'Qualified', value: '$12k', lastContact: '2 hours ago' },
                { name: 'Sarah Johnson', company: 'Marketing Inc', stage: 'Proposal', value: '$25k', lastContact: '1 day ago' },
                { name: 'Mike Wilson', company: 'Sales Co', stage: 'Prospect', value: '$8k', lastContact: '3 days ago' },
              ].map((lead, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-white">{lead.name[0]}</span>
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{lead.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{lead.company}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-full">
                      {lead.stage}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{lead.value}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{lead.lastContact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};