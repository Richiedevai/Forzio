import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-[var(--bg-panel)] border border-[var(--border)] rounded-xl p-4 md:p-6 shadow-sm ${className}`}>
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-[var(--text-muted)]">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};