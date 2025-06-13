import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Play, Pause, Settings, Activity } from 'lucide-react';
import { Agent } from '../../types';

interface AgentCardProps {
  agent: Agent;
  onToggle: (id: string) => void;
  onConfigure: (id: string) => void;
  onAssignTask: (agentId: string) => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ 
  agent, 
  onToggle, 
  onConfigure, 
  onAssignTask 
}) => {
  const statusColors = {
    active: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',
    idle: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200',
    error: 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200',
  };

  const typeColors = {
    sales: 'from-blue-500 to-blue-600',
    marketing: 'from-purple-500 to-purple-600',
    support: 'from-green-500 to-green-600',
    operations: 'from-orange-500 to-orange-600',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${typeColors[agent.type]} rounded-xl flex items-center justify-center`}>
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{agent.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{agent.type}</p>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[agent.status]}`}>
          {agent.status}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{agent.description}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
        <div className="flex items-center space-x-1">
          <Activity className="w-4 h-4" />
          <span>{agent.tasksCompleted} tasks completed</span>
        </div>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
        Last action: {agent.lastAction}
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => onToggle(agent.id)}
          className={`flex-1 flex items-center justify-center space-x-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
            agent.status === 'active'
              ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/30'
              : 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/30'
          }`}
        >
          {agent.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{agent.status === 'active' ? 'Pause' : 'Start'}</span>
        </button>
        
        <button
          onClick={() => onConfigure(agent.id)}
          className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Settings className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => onAssignTask(agent.id)}
          className="px-3 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
        >
          Assign Task
        </button>
      </div>
    </motion.div>
  );
};