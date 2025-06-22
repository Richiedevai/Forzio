import React from 'react';

interface StatusBadgeProps {
  status: 'connected' | 'disconnected' | 'pending' | 'error';
  label: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  const statusStyles = {
    connected: 'bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/20',
    disconnected: 'bg-[var(--text-muted)]/10 text-[var(--text-muted)] border-[var(--text-muted)]/20',
    pending: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
    error: 'bg-[var(--danger)]/10 text-[var(--danger)] border-[var(--danger)]/20'
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${statusStyles[status]}`}>
      <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
        status === 'connected' ? 'bg-[var(--success)]' :
        status === 'disconnected' ? 'bg-[var(--text-muted)]' :
        status === 'pending' ? 'bg-yellow-500' :
        'bg-[var(--danger)]'
      }`} />
      {label}
    </span>
  );
};