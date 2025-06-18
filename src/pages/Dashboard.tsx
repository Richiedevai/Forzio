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

  const handleQuickAction = (action: string) => {
    addToast({
      message: `${action} panel opening...`,
      type: 'info'
    });
  };

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dashboard-text mb-2">
            Good morning, Founder! 👋
          </h1>
          <p className="text-dashboard-secondary">
            Your AI co-founder has been busy. Here's what's happening with your startup today.
          </p>
        </div>

        {/* Daily Brief Card */}
        <div className="bg-gradient-dashboard rounded-2xl p-6 text-white shadow-neon-blue relative overflow-hidden">
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
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🎯 Priorities</h4>
                <ul className="text-sm space-y-1 text-white/90">
                  <li>• Finish pitch deck</li>
                  <li>• Review sales pipeline</li>
                  <li>• Team standup at 2pm</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">⚠️ Risks</h4>
                <ul className="text-sm space-y-1 text-white/90">
                  <li>• Burn rate spike detected</li>
                  <li>• 3 overdue tasks</li>
                  <li>• Low email response rate</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">📋 Tasks Due</h4>
                <ul className="text-sm space-y-1 text-white/90">
                  <li>• Investor update (Today)</li>
                  <li>• Product demo prep</li>
                  <li>• Marketing review</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">💬 Ask Forzio</h4>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="How's our runway looking this month?"
                  className="flex-1 bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-sm placeholder-white/60 text-white"
                />
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-all">
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
              iconColor="text-emerald-green"
            />
            <MetricCard
              title="Active Leads"
              value="147"
              change="+12 new today"
              changeType="positive"
              icon={Users}
              iconColor="text-electric-blue"
            />
            <MetricCard
              title="Tasks Due"
              value="23"
              change="5 high priority"
              changeType="neutral"
              icon={CheckSquare}
              iconColor="text-violet-indigo"
            />
          </div>

          {/* AI Agent Status Card */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Bot className="w-8 h-8 text-electric-blue" />
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-green rounded-full animate-pulse"></div>
                  <span className="text-xs text-emerald-green font-medium">8 Active</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-dashboard-text mb-2">AI Agents</h3>
              <p className="text-sm text-dashboard-secondary mb-4">
                Your AI team completed 47 tasks today
              </p>
              <button 
                onClick={() => handleQuickAction('AI Hub')}
                className="w-full bg-electric-blue/20 hover:bg-electric-blue/30 text-electric-blue px-4 py-2 rounded-lg text-sm font-medium transition-all"
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
            color="#3A9FFF"
          />
          
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-dashboard-text mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleQuickAction('Assign Agent')}
                className="flex items-center space-x-3 p-4 bg-gradient-dashboard text-white rounded-lg hover:shadow-neon-blue hover:-translate-y-0.5 transition-all duration-200"
              >
                <Bot className="w-5 h-5" />
                <span className="font-medium">Assign Agent</span>
              </button>
              <button
                onClick={() => handleQuickAction('Create Task')}
                className="flex items-center space-x-3 p-4 bg-slate-700 border border-slate-600 text-dashboard-text rounded-lg hover:bg-slate-600 hover:shadow-card-hover transition-all duration-200"
              >
                <CheckSquare className="w-5 h-5 text-electric-blue" />
                <span className="font-medium">Create Task</span>
              </button>
              <button
                onClick={() => handleQuickAction('View Reports')}
                className="flex items-center space-x-3 p-4 bg-slate-700 border border-slate-600 text-dashboard-text rounded-lg hover:bg-slate-600 hover:shadow-card-hover transition-all duration-200"
              >
                <BarChart3 className="w-5 h-5 text-emerald-green" />
                <span className="font-medium">View Reports</span>
              </button>
              <button
                onClick={() => handleQuickAction('Schedule Meeting')}
                className="flex items-center space-x-3 p-4 bg-slate-700 border border-slate-600 text-dashboard-text rounded-lg hover:bg-slate-600 hover:shadow-card-hover transition-all duration-200"
              >
                <Calendar className="w-5 h-5 text-violet-indigo" />
                <span className="font-medium">Schedule</span>
              </button>
            </div>
          </div>
        </div>

        {/* Third Row - Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <MetricCard
            title="AI Efficiency"
            value="94.2%"
            change="2 agents optimized"
            changeType="positive"
            icon={Brain}
            iconColor="text-electric-blue"
          />
          <MetricCard
            title="Conversion Rate"
            value="31.4%"
            change="+8.2% this week"
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-emerald-green"
          />
          <MetricCard
            title="Response Time"
            value="1.2s"
            change="Lightning fast"
            changeType="positive"
            icon={Zap}
            iconColor="text-violet-indigo"
          />
          <MetricCard
            title="Growth Score"
            value="8.7/10"
            change="Excellent trajectory"
            changeType="positive"
            icon={Rocket}
            iconColor="text-emerald-green"
          />
        </div>

        {/* Bottom Section - Conversion Funnel */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-dashboard-text">Growth Funnel</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-electric-blue rounded-full"></div>
                <span className="text-sm text-dashboard-secondary">This Month</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-violet-indigo rounded-full"></div>
                <span className="text-sm text-dashboard-secondary">Last Month</span>
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
                  <h4 className="text-sm font-medium text-dashboard-secondary mb-1">{item.stage}</h4>
                  <p className="text-2xl font-bold text-dashboard-text">{item.current}</p>
                </div>
                <div className={`flex items-center justify-center space-x-1 text-sm ${
                  item.positive ? 'text-emerald-green' : 'text-vibrant-red'
                }`}>
                  {item.positive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  <span>{item.change}</span>
                </div>
                <p className="text-xs text-dashboard-secondary mt-1">vs {item.previous}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-dashboard-text mb-6">Recent AI Activity</h3>
          <div className="space-y-4">
            {[
              { icon: Mail, text: "AI Agent qualified new lead from contact form", time: "5 min ago", type: "success" },
              { icon: Bot, text: "Sales Agent completed 10 follow-up emails", time: "15 min ago", type: "info" },
              { icon: Target, text: "Monthly sales goal achieved ahead of schedule", time: "1 hour ago", type: "success" },
              { icon: Users, text: "Team productivity report generated", time: "2 hours ago", type: "neutral" },
              { icon: Zap, text: "Marketing automation workflow triggered", time: "3 hours ago", type: "info" },
              { icon: MessageSquare, text: "Customer support ticket auto-resolved", time: "4 hours ago", type: "success" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-700 transition-colors">
                <div className={`p-2 rounded-lg ${
                  item.type === 'success' ? 'bg-emerald-green/20 text-emerald-green' :
                  item.type === 'info' ? 'bg-electric-blue/20 text-electric-blue' :
                  'bg-dashboard-secondary/20 text-dashboard-secondary'
                }`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-dashboard-text font-medium">{item.text}</p>
                  <p className="text-xs text-dashboard-secondary">{item.time}</p>
                </div>
                <Activity className="w-4 h-4 text-dashboard-secondary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};