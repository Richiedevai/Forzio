import React, { useState } from 'react';
import { Bot, Zap, Clock, Settings, Plus } from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';
import { AgentCard } from '../components/Dashboard/AgentCard';
import { Agent } from '../types';
import { useToast } from '../hooks/useToast';

const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Sales Assistant',
    type: 'sales',
    status: 'active',
    lastAction: 'Sent follow-up email to 5 prospects',
    tasksCompleted: 47,
    avatar: 'SA',
    description: 'Automates lead outreach and follow-ups'
  },
  {
    id: '2',
    name: 'Marketing Bot',
    type: 'marketing',
    status: 'active',
    lastAction: 'Posted on LinkedIn and Twitter',
    tasksCompleted: 23,
    avatar: 'MB',
    description: 'Manages social media and content distribution'
  },
  {
    id: '3',
    name: 'Support Helper',
    type: 'support',
    status: 'idle',
    lastAction: 'Resolved 3 customer tickets',
    tasksCompleted: 156,
    avatar: 'SH',
    description: 'Handles customer support and FAQ responses'
  },
  {
    id: '4',
    name: 'Operations Manager',
    type: 'operations',
    status: 'error',
    lastAction: 'Failed to sync with inventory system',
    tasksCompleted: 89,
    avatar: 'OM',
    description: 'Monitors operations and system health'
  }
];

export const Agents: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>(mockAgents);
  const { addToast } = useToast();

  const handleToggleAgent = (id: string) => {
    setAgents(prev => prev.map(agent => 
      agent.id === id 
        ? { ...agent, status: agent.status === 'active' ? 'idle' : 'active' }
        : agent
    ));
    addToast({
      message: 'Agent status updated successfully',
      type: 'success'
    });
  };

  const handleConfigureAgent = (id: string) => {
    addToast({
      message: 'Agent configuration panel opening...',
      type: 'info'
    });
  };

  const handleAssignTask = (agentId: string) => {
    addToast({
      message: 'Task assignment interface opening...',
      type: 'info'
    });
  };

  const handleCreateAgent = () => {
    addToast({
      message: 'Agent creation wizard opening...',
      type: 'info'
    });
  };

  const activeAgents = agents.filter(a => a.status === 'active').length;
  const totalTasks = agents.reduce((sum, agent) => sum + agent.tasksCompleted, 0);
  const avgResponseTime = '1.2s';
  const successRate = '94.2%';

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">AI Agents Manager</h1>
          <p className="text-gray-600 dark:text-gray-400">Configure, monitor, and optimize your AI automation agents.</p>
        </div>
        <button
          onClick={handleCreateAgent}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:shadow-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Create Agent</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Active Agents"
          value={activeAgents.toString()}
          change={`${agents.length - activeAgents} idle`}
          changeType="neutral"
          icon={Bot}
        />
        <MetricCard
          title="Success Rate"
          value={successRate}
          change="+3.1% this week"
          changeType="positive"
          icon={Zap}
        />
        <MetricCard
          title="Avg. Response Time"
          value={avgResponseTime}
          change="Lightning fast"
          changeType="positive"
          icon={Clock}
        />
        <MetricCard
          title="Tasks Completed"
          value={totalTasks.toString()}
          change="This month"
          changeType="positive"
          icon={Settings}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onToggle={handleToggleAgent}
            onConfigure={handleConfigureAgent}
            onAssignTask={handleAssignTask}
          />
        ))}
      </div>
    </div>
  );
};