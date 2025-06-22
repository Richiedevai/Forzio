import React from 'react';
import { motion } from 'framer-motion';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  description,
  disabled = false
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        {label && (
          <label className="text-sm font-medium text-[var(--text-primary)]">
            {label}
          </label>
        )}
        {description && (
          <p className="text-xs text-[var(--text-muted)] mt-1">
            {description}
          </p>
        )}
      </div>
      
      <button
        type="button"
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg-panel)] ${
          checked ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <motion.span
          animate={{ x: checked ? 20 : 2 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg"
        />
      </button>
    </div>
  );
};