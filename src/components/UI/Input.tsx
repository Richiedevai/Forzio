import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  description,
  error,
  icon,
  showPasswordToggle,
  type,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-[var(--text-primary)]">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]">
            {icon}
          </div>
        )}
        
        <input
          type={inputType}
          className={`w-full px-4 py-2 ${icon ? 'pl-10' : ''} ${showPasswordToggle ? 'pr-10' : ''} 
            bg-[var(--bg-panel)] border border-[var(--border)] rounded-lg 
            text-[var(--text-primary)] placeholder-[var(--text-muted)]
            focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent
            transition-all duration-200 ${className}`}
          {...props}
        />
        
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
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