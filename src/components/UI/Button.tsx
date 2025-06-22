import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-panel)] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white focus:ring-[var(--accent)]',
    secondary: 'bg-[var(--bg-panel)] hover:bg-[var(--border)] text-[var(--text-primary)] border border-[var(--border)] focus:ring-[var(--accent)]',
    danger: 'bg-[var(--danger)] hover:opacity-90 text-white focus:ring-[var(--danger)]',
    ghost: 'hover:bg-[var(--border)] text-[var(--text-primary)] focus:ring-[var(--accent)]'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};