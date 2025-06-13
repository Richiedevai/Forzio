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
  Zap
} from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';
import { QuickActionButton } from '../components/UI/QuickActionButton';
import { CustomAreaChart } from '../components/Charts/AreaChart';
import { TaskBoard } from '../components/Dashboard/TaskBoard';
import { AutomationPanel } from '../components/Dashboard/AutomationPanel';
import { ChatInterface } from '../components/Dashboard/ChatInterface';
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

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Follow up with Enterprise leads',
    description: 'Contact 5 enterprise prospects from last week',
    status: 'todo',
    priority: 'high',
    assignedTo: 'Sales Agent',
    dueDate: new Date('2025-01-20'),
    createdAt: new Date(),
    tags: ['sales', 'enterprise']
  },
  {
    id: '2',
    title: 'Create Q1 marketing campaign',
    description: 'Design and launch Q1 social media campaign',
    status: 'in-progress',
    priority: 'medium',
    assignedTo: 'Marketing Bot',
    createdAt: new Date(),
    tags: ['marketing', 'campaign']
  },
  {
    id: '3',
    title: 'Update product documentation',
    description: 'Review and update API documentation',
    status: 'review',
    priority: 'low',
    createdAt: new Date(),
    tags: ['documentation']
  }
];

const mockAutomations: Automation[] = [
  {
    id: '1',
    name: 'Daily Sales Report',
    description: 'Generates and sends daily sales summary at 8 AM',
    status: 'active',
    type: 'scheduled',
    lastRun: new Date('2025-01-15T08:00:00'),
    nextRun: new Date('2025-01-16T08:00:00'),
    executions: 45,
    successRate: 98.5
  },
  {
    id: '2',
    name: 'Lead Qualification',
    description: 'Automatically qualifies new leads from contact form',
    status: 'active',
    type: 'trigger',
    lastRun: new Date('2025-01-15T14:30:00'),
    executions: 127,
    successRate: 94.2
  },
  {
    id: '3',
    name: 'Weekly Report Generator',
    description: 'Creates comprehensive weekly business report',
    status: 'paused',
    type: 'scheduled',
    lastRun: new Date('2025-01-08T09:00:00'),
    nextRun: new Date('2025-01-22T09:00:00'),
    executions: 12,
    successRate: 100
  }
];

const mockMessages: ChatMessage[] = [
  {
    id: '1',
    content: 'New lead from website contact form',
    sender: 'System',
    timestamp: new Date('2025-01-15T10:30:00'),
    type: 'text',
    channel: 'internal'
  },
  {
    id: '2',
    content: 'Thanks for reaching out! How can I help you today?',
    sender: 'You',
    timestamp: new Date('2025-01-15T10:32:00'),
    type: 'text',
    channel: 'whatsapp'
  }
];

export const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [automations, setAutomations] = useState<Automation[]>(mockAutomations);
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [currentChannel, setCurrentChannel] = useState<'whatsapp' | 'internal' | 'support'>('internal');
  const { addToast } = useToast();

  const handleTaskUpdate = (taskId: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ));
    addToast({
      message: 'Task updated successfully',
      type: 'success'
    });
  };

  const handleCreateTask = () => {
    addToast({
      message: 'Task creation modal opening...',
      type: 'info'
    });
  };

  const handleToggleAutomation = (id: string) => {
    setAutomations(prev => prev.map(automation =>
      automation.id === id
        ? { ...automation, status: automation.status === 'active' ? 'paused' : 'active' }
        : automation
    ));
    addToast({
      message: 'Automation status updated',
      type: 'success'
    });
  };

  const handleTriggerAutomation = (id: string) => {
    const automation = automations.find(a => a.id === id);
    if (automation) {
      addToast({
        message: `Triggering ${automation.name}...`,
        type: 'info'
      });
    }
  };

  const handleConfigureAutomation = (id: string) => {
    addToast({
      message: 'Automation configuration opening...',
      type: 'info'
    });
  };

  const handleSendMessage = (content: string, type: 'text' | 'image' | 'file') => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: 'You',
      timestamp: new Date(),
      type,
      channel: currentChannel
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Good morning, Founder! 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Revenue Today"
          value="$12,450"
          change="+23% from yesterday"
          changeType="positive"
          icon={DollarSign}
          iconColor="text-success"
        />
        <MetricCard
          title="Active Leads"
          value="147"
          change="+12 new today"
          changeType="positive"
          icon={Users}
          iconColor="text-primary-500"
        />
        <MetricCard
          title="Tasks Due"
          value="23"
          change="5 high priority"
          changeType="neutral"
          icon={CheckSquare}
          iconColor="text-accent-500"
        />
        <MetricCard
          title="AI Agents Active"
          value="8"
          change="2 triggered today"
          changeType="positive"
          icon={Bot}
          iconColor="text-purple-500"
        />
      </div>

      {/* Charts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomAreaChart
          data={revenueData}
          title="Revenue Trend (7 Days)"
          color="#005EFF"
        />
        
        <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <QuickActionButton
              label="Assign Agent"
              icon={Bot}
              onClick={() => addToast({ message: 'Agent assignment panel opening...', type: 'info' })}
              variant="primary"
            />
            <QuickActionButton
              label="Create Task"
              icon={CheckSquare}
              onClick={handleCreateTask}
            />
            <QuickActionButton
              label="View Reports"
              icon={TrendingUp}
              onClick={() => addToast({ message: 'Reports page opening...', type: 'info' })}
            />
            <QuickActionButton
              label="Schedule Meeting"
              icon={Calendar}
              onClick={() => addToast({ message: 'Calendar integration opening...', type: 'info' })}
            />
          </div>
        </div>
      </div>

      {/* Task Board */}
      <TaskBoard
        tasks={tasks}
        onTaskUpdate={handleTaskUpdate}
        onCreateTask={handleCreateTask}
      />

      {/* Automations and Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AutomationPanel
          automations={automations}
          onToggle={handleToggleAutomation}
          onTrigger={handleTriggerAutomation}
          onConfigure={handleConfigureAutomation}
        />
        
        <ChatInterface
          messages={messages}
          onSendMessage={handleSendMessage}
          currentChannel={currentChannel}
          onChannelChange={setCurrentChannel}
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { icon: Mail, text: "New lead from contact form", time: "5 min ago", type: "success" },
            { icon: Bot, text: "AI Agent completed email outreach", time: "15 min ago", type: "info" },
            { icon: Target, text: "Monthly sales goal achieved", time: "1 hour ago", type: "success" },
            { icon: Users, text: "Team standup meeting completed", time: "2 hours ago", type: "neutral" },
            { icon: Zap, text: "Automation workflow triggered", time: "3 hours ago", type: "info" },
            { icon: MessageSquare, text: "Customer support ticket resolved", time: "4 hours ago", type: "success" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className={`p-2 rounded-lg ${
                item.type === 'success' ? 'bg-green-100 dark:bg-green-900/20 text-success' :
                item.type === 'info' ? 'bg-blue-100 dark:bg-blue-900/20 text-primary-500' :
                'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
              }`}>
                <item.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 dark:text-white">{item.text}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};