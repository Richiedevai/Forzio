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
  Activity,
  Brain,
  Rocket,
  BarChart3
} from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';
import { CustomAreaChart } from '../components/Charts/AreaChart';
import { useToast } from '../hooks/useToast';
import { useAuth } from '../contexts/AuthContext';

const revenueData = [
  { name: 'Jan', value: 45000 },
  { name: 'Feb', value: 52000 },
  { name: 'Mar', value: 48000 },
  { name: 'Apr', value: 61000 },
  { name: 'May', value: 55000 },
  { name: 'Jun', value: 67000 },
  { name: 'Jul', value: 73000 },
];

export const Dashboard: React.FC = () => {
  const { addToast } = useToast();
  const { user } = useAuth();

  const handleQuickAction = (action: string) => {
    addToast({
      message: `${action} panel opening...`,
      type: 'info'
    });
  };

  return (
    <div className="dashboard-container min-h-screen">
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">
            Good morning, {user?.name || "Founder"}! 👋
          </h1>
          <p className="text-[var(--text-muted)]">
            Your AI co-founder has been busy. Here's what's happening with your startup today.
          </p>
        </div>

        {/* Daily Brief Card */}
        <div className="card relative overflow-hidden gradient-cta text-white">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Brain className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">Daily Brief from Forzio AI</h3>
                  <p className="text-white/80 text-sm">Your priorities for today</p>
                </div>
              </div>
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Live</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="card bg-white/10 border-white/20">
                <h4 className="font-semibold mb-2 text-white">🎯 Priorities</h4>
                <ul className="text-sm space-y-1 text-white/90">
                  <li>• Finish pitch deck</li>
                  <li>• Review sales pipeline</li>
                  <li>• Team standup at 2pm</li>
                </ul>
              </div>
              <div className="card bg-white/10 border-white/20">
                <h4 className="font-semibold mb-2 text-white">⚠️ Risks</h4>
                <ul className="text-sm space-y-1 text-white/90">
                  <li>• Burn rate spike detected</li>
                  <li>• 3 overdue tasks</li>
                  <li>• Low email response rate</li>
                </ul>
              </div>
              <div className="card bg-white/10 border-white/20">
                <h4 className="font-semibold mb-2 text-white">📋 Tasks Due</h4>
                <ul className="text-sm space-y-1 text-white/90">
                  <li>• Investor update (Today)</li>
                  <li>• Product demo prep</li>
                  <li>• Marketing review</li>
                </ul>
              </div>
            </div>
            <div className="card bg-white/10 border-white/20">
              <h4 className="font-semibold mb-2 text-white">💬 Ask Forzio</h4>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="How's our runway looking this month?"
                  className="flex-1 bg-white/15 border border-white/25 rounded-lg px-3 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="btn-primary bg-white/15 hover:bg-white/25 text-white border-white/25">
                  Ask
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
        </div>

        {/* Top Row - 3 Metric Cards + AI Agent Status */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
              title="Revenue Today"
              value="$12,450"
              change="+23% from yesterday"
              changeType="positive"
              icon={DollarSign}
              iconColor="text-[var(--success)]"
            />
            <MetricCard
              title="Active Leads"
              value="147"
              change="+12 new today"
              changeType="positive"
              icon={Users}
              iconColor="text-[var(--accent)]"
            />
            <MetricCard
              title="Tasks Due"
              value="23"
              change="5 high priority"
              changeType="neutral"
              icon={CheckSquare}
              iconColor="text-[var(--accent-hover)]"
            />
          </div>

          {/* AI Agent Status Card */}
          <div className="card">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Bot className="w-8 h-8 text-[var(--accent)]" />
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[var(--success)] rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-[var(--success)]">8 Active</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)]">AI Agents</h3>
              <p className="text-sm mb-4 text-[var(--text-muted)]">
                Your AI team completed 47 tasks today
              </p>
              <button 
                onClick={() => handleQuickAction('AI Hub')}
                className="btn-primary w-full"
              >
                Manage Agents
              </button>
            </div>
          </div>
        </div>

        {/* Second Row - Charts and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CustomAreaChart
            data={revenueData}
            title="Revenue Trend (7 Days)"
            color="var(--accent)"
          />
          <div className="card">
            <h3 className="text-lg font-semibold mb-6 text-[var(--text-primary)]">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleQuickAction('Assign Agent')}
                className="btn-primary flex items-center space-x-3 p-4"
              >
                <Bot className="w-5 h-5" />
                <span className="font-medium">Assign Agent</span>
              </button>
              <button
                onClick={() => handleQuickAction('Create Task')}
                className="flex items-center space-x-3 p-4 bg-[var(--bg-panel)] text-[var(--accent)] rounded-lg border border-[var(--border)] hover:bg-[var(--highlight)] transition-all"
              >
                <CheckSquare className="w-5 h-5" />
                <span className="font-medium">Create Task</span>
              </button>
              <button
                onClick={() => handleQuickAction('View Reports')}
                className="flex items-center space-x-3 p-4 bg-[var(--bg-panel)] text-[var(--success)] rounded-lg border border-[var(--border)] hover:bg-[var(--highlight)] transition-all"
              >
                <BarChart3 className="w-5 h-5" />
                <span className="font-medium">View Reports</span>
              </button>
              <button
                onClick={() => handleQuickAction('Schedule Meeting')}
                className="flex items-center space-x-3 p-4 bg-[var(--bg-panel)] text-[var(--accent-hover)] rounded-lg border border-[var(--border)] hover:bg-[var(--highlight)] transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Schedule</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};