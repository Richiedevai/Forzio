import React, { useState } from 'react';
import { 
  DollarSign, 
  Users, 
  CheckSquare, 
  Mail, 
  Bot,
  TrendingUp,
  Calendar,
  Target,
  MessageSquare,
  Zap,
  ArrowUp,
  ArrowDown,
  Activity
} from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';
import { CustomAreaChart } from '../components/Charts/AreaChart';
import { Task, Automation, ChatMessage } from '../types';
import { useToast } from '../hooks/useToast';

const revenueData = [
  { name: 'Jan', value: 45000 },
  { name: 'Feb', value: 52000 },
  { name: 'Mar', value: 48000 },
  { name: 'Apr', value: 61000 },
  { name: 'May', value: 55000 },
  { name: 'Jun', value: 67000 },
  { name: 'Jul', value: 73000 },
];

const conversionData = [
  { name: 'Week 1', value: 23.5 },
  { name: 'Week 2', value: 25.2 },
  { name: 'Week 3', value: 28.1 },
  { name: 'Week 4', value: 31.4 },
];

export const Dashboard: React.FC = () => {
  const { addToast } = useToast();

  const handleQuickAction = (action: string) => {
    addToast({
      message: `${action} panel opening...`,
      type: 'info'
    });
  };

  return (
    <div className="min-h-screen bg-bg-dark">
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Good morning, Founder! 👋
          </h1>
          <p className="text-text-secondary">
            Here's what's happening with your business today.
          </p>
        </div>

        {/* Top Row - 3 Metric Cards + Promo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* 3 Metric Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
              title="Revenue Today"
              value="$12,450"
              change="+23% from yesterday"
              changeType="positive"
              icon={DollarSign}
              iconColor="text-accent-green"
            />
            <MetricCard
              title="Active Leads"
              value="147"
              change="+12 new today"
              changeType="positive"
              icon={Users}
              iconColor="text-accent-cyan"
            />
            <MetricCard
              title="Tasks Due"
              value="23"
              change="5 high priority"
              changeType="neutral"
              icon={CheckSquare}
              iconColor="text-accent-yellow"
            />
          </div>

          {/* Promo Card */}
          <div className="bg-gradient-to-br from-accent-violet to-accent-cyan rounded-2xl p-6 shadow-card border border-border-color text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Bot className="w-8 h-8" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">NEW</span>
              </div>
              <h3 className="text-lg font-bold mb-2">AI Agent Ready</h3>
              <p className="text-sm opacity-90 mb-4">
                Your sales assistant has completed training and is ready to automate outreach.
              </p>
              <button 
                onClick={() => handleQuickAction('AI Agent Setup')}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                Activate Now
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
          </div>
        </div>

        {/* Second Row - Charts and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomAreaChart
            data={revenueData}
            title="Revenue Trend (7 Days)"
            color="#8B5CF6"
          />
          
          <div className="bg-card-bg rounded-2xl p-6 shadow-card border border-border-color">
            <h3 className="text-lg font-semibold text-text-primary mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleQuickAction('Assign Agent')}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-accent-violet to-accent-violet-hover text-white rounded-lg hover:shadow-glow-violet hover:-translate-y-0.5 transition-all duration-200"
              >
                <Bot className="w-5 h-5" />
                <span className="font-medium">Assign Agent</span>
              </button>
              <button
                onClick={() => handleQuickAction('Create Task')}
                className="flex items-center space-x-3 p-4 bg-card-bg border border-border-color text-text-primary rounded-lg hover:bg-sidebar-bg hover:shadow-card-hover transition-all duration-200"
              >
                <CheckSquare className="w-5 h-5 text-accent-cyan" />
                <span className="font-medium">Create Task</span>
              </button>
              <button
                onClick={() => handleQuickAction('View Reports')}
                className="flex items-center space-x-3 p-4 bg-card-bg border border-border-color text-text-primary rounded-lg hover:bg-sidebar-bg hover:shadow-card-hover transition-all duration-200"
              >
                <TrendingUp className="w-5 h-5 text-accent-green" />
                <span className="font-medium">View Reports</span>
              </button>
              <button
                onClick={() => handleQuickAction('Schedule Meeting')}
                className="flex items-center space-x-3 p-4 bg-card-bg border border-border-color text-text-primary rounded-lg hover:bg-sidebar-bg hover:shadow-card-hover transition-all duration-200"
              >
                <Calendar className="w-5 h-5 text-accent-yellow" />
                <span className="font-medium">Schedule</span>
              </button>
            </div>
          </div>
        </div>

        {/* Third Row - Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MetricCard
            title="AI Agents Active"
            value="8"
            change="2 triggered today"
            changeType="positive"
            icon={Bot}
            iconColor="text-accent-violet"
          />
          <MetricCard
            title="Conversion Rate"
            value="31.4%"
            change="+8.2% this week"
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-accent-green"
          />
          <MetricCard
            title="Response Time"
            value="1.2s"
            change="Lightning fast"
            changeType="positive"
            icon={Zap}
            iconColor="text-accent-cyan"
          />
        </div>

        {/* Bottom Section - Full Width Chart */}
        <div className="bg-card-bg rounded-2xl p-6 shadow-card border border-border-color">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-text-primary">Conversion Funnel</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent-violet rounded-full"></div>
                <span className="text-sm text-text-secondary">This Month</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent-cyan rounded-full"></div>
                <span className="text-sm text-text-secondary">Last Month</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stage: 'Visitors', current: '12,450', previous: '10,230', change: '+21.7%', positive: true },
              { stage: 'Leads', current: '2,847', previous: '2,156', change: '+32.1%', positive: true },
              { stage: 'Qualified', current: '894', previous: '743', change: '+20.3%', positive: true },
              { stage: 'Customers', current: '281', previous: '198', change: '+41.9%', positive: true },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">
                  <h4 className="text-sm font-medium text-text-secondary mb-1">{item.stage}</h4>
                  <p className="text-2xl font-bold text-text-primary">{item.current}</p>
                </div>
                <div className={`flex items-center justify-center space-x-1 text-sm ${
                  item.positive ? 'text-accent-green' : 'text-accent-red'
                }`}>
                  {item.positive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  <span>{item.change}</span>
                </div>
                <p className="text-xs text-text-secondary mt-1">vs {item.previous}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card-bg rounded-2xl p-6 shadow-card border border-border-color">
          <h3 className="text-lg font-semibold text-text-primary mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { icon: Mail, text: "New lead from contact form", time: "5 min ago", type: "success" },
              { icon: Bot, text: "AI Agent completed email outreach", time: "15 min ago", type: "info" },
              { icon: Target, text: "Monthly sales goal achieved", time: "1 hour ago", type: "success" },
              { icon: Users, text: "Team standup meeting completed", time: "2 hours ago", type: "neutral" },
              { icon: Zap, text: "Automation workflow triggered", time: "3 hours ago", type: "info" },
              { icon: MessageSquare, text: "Customer support ticket resolved", time: "4 hours ago", type: "success" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-sidebar-bg transition-colors">
                <div className={`p-2 rounded-lg ${
                  item.type === 'success' ? 'bg-accent-green/20 text-accent-green' :
                  item.type === 'info' ? 'bg-accent-cyan/20 text-accent-cyan' :
                  'bg-text-secondary/20 text-text-secondary'
                }`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-text-primary font-medium">{item.text}</p>
                  <p className="text-xs text-text-secondary">{item.time}</p>
                </div>
                <Activity className="w-4 h-4 text-text-secondary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};