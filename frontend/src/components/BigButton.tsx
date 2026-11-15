import React from 'react';

interface BigButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'emergency' | 'outline' | 'surface';
  size?: 'normal' | 'large';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const BigButton: React.FC<BigButtonProps> = ({
  children,
  variant = 'primary',
  size = 'normal',
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-semibold rounded-btn transition-colors focus:outline-none focus:ring-4 focus:ring-blue-dark/30 active:scale-[0.98] select-none text-center shadow-soft';

  const sizeClasses = {
    normal: 'min-h-[56px] px-6 py-3 text-base gap-3',
    large: 'min-h-[64px] px-8 py-4 text-lg gap-3.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-blue-dark text-white hover:bg-blue-deep active:bg-blue-deep border border-transparent shadow-md',
    secondary:
      'bg-pastel-blue text-blue-deep hover:bg-pastel-blue-2 active:bg-pastel-blue-2 border border-blue-dark/20',
    emergency:
      'bg-status-red text-white hover:bg-[#A93226] active:bg-[#922B21] border border-transparent shadow-glow-red font-bold',
    outline:
      'bg-transparent border-2 border-blue-dark text-text hover:bg-surface-alt active:bg-surface-alt',
    surface:
      'bg-surface text-text border border-pastel-blue hover:bg-surface-alt active:bg-surface-alt',
  }[variant];

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed active:scale-100 shadow-none'
    : 'cursor-pointer';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${disabledClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="flex-shrink-0" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
