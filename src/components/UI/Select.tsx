import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  description?: string;
  error?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  description,
  error,
  options,
  value,
  onChange,
  placeholder = 'Select an option'
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-[var(--text-primary)]">
          {label}
        </label>
      )}
      
      <div className="relative">
        <select
          value={value || ''}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full px-4 py-2 pr-10 bg-[var(--bg-panel)] border border-[var(--border)] rounded-lg 
            text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] 
            focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
        >
          <option value="" disabled className="text-[var(--text-muted)]">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
      </div>
      
      {description && (
        <p className="text-xs text-[var(--text-muted)]">{description}</p>
      )}
      
      {error && (
        <p className="text-xs text-[var(--danger)]">{error}</p>
      )}
    </div>
  );
};