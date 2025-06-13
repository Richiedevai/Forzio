import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Settings, Clock, CheckCircle, AlertCircle, Zap } from 'lucide-react';
import { Automation } from '../../types';

interface AutomationPanelProps {
  automations: Automation[];
  onToggle: (id: string) => void;
  onTrigger: (id: string) => void;
  onConfigure: (id: string) => void;
}

export const AutomationPanel: React.FC<AutomationPanelProps> = ({
  automations,
  onToggle,
  onTrigger,
  onConfigure
}) => {
  const statusIcons = {
    active: CheckCircle,
    paused: Pause,
    error: AlertCircle,
  };

  const statusColors = {
    active: 'text-green-500',
    paused: 'text-yellow-500',
    error: 'text-red-500',
  };

  const typeIcons = {
    scheduled: Clock,
    trigger: Zap,
    webhook: Settings,
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Automations</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>{automations.filter(a => a.status === 'active').length} active</span>
          <span>•</span>
          <span>{automations.length} total</span>
        </div>
      </div>

      <div className="space-y-4">
        {automations.map((automation, index) => {
          const StatusIcon = statusIcons[automation.status];
          const TypeIcon = typeIcons[automation.type];
          
          return (
            <motion.div
              key={automation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <TypeIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{automation.name}</h4>
                      <StatusIcon className={`w-4 h-4 ${statusColors[automation.status]}`} />
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {automation.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <span>Executions: {automation.executions}</span>
                      <span>Success: {automation.successRate}%</span>
                      {automation.lastRun && (
                        <span>Last run: {new Date(automation.lastRun).toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onTrigger(automation.id)}
                    className="p-2 text-primary-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                    title="Trigger now"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => onToggle(automation.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      automation.status === 'active'
                        ? 'text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                        : 'text-green-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20'
                    }`}
                    title={automation.status === 'active' ? 'Pause' : 'Resume'}
                  >
                    {automation.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => onConfigure(automation.id)}
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    title="Configure"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};