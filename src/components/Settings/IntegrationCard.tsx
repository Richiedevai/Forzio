import React from 'react';
import { Button } from '../UI/Button';
import { StatusBadge } from '../UI/StatusBadge';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  status: 'connected' | 'disconnected' | 'pending' | 'error';
  lastSync?: string;
}

interface IntegrationCardProps {
  integration: Integration;
  onConnect: (id: string) => void;
  onDisconnect: (id: string) => void;
  onConfigure: (id: string) => void;
}

export const IntegrationCard: React.FC<IntegrationCardProps> = ({
  integration,
  onConnect,
  onDisconnect,
  onConfigure
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-[var(--bg-panel)] border border-[var(--border)] rounded-lg hover:shadow-md transition-all duration-200">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-[var(--border)] rounded-lg flex items-center justify-center">
          {integration.icon}
        </div>
        <div>
          <h4 className="font-medium text-[var(--text-primary)]">{integration.name}</h4>
          <p className="text-sm text-[var(--text-muted)]">{integration.description}</p>
          {integration.lastSync && (
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Last sync: {integration.lastSync}
            </p>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <StatusBadge 
          status={integration.status} 
          label={integration.status === 'connected' ? 'Connected' : 
                 integration.status === 'pending' ? 'Pending' :
                 integration.status === 'error' ? 'Error' : 'Disconnected'} 
        />
        
        {integration.status === 'connected' ? (
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onConfigure(integration.id)}
            >
              Configure
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => onDisconnect(integration.id)}
            >
              Disconnect
            </Button>
          </div>
        ) : (
          <Button
            variant="primary"
            size="sm"
            onClick={() => onConnect(integration.id)}
          >
            Connect
          </Button>
        )}
      </div>
    </div>
  );
};