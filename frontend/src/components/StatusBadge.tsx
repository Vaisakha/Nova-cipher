import React from 'react';
import { CheckCircle2, AlertTriangle, AlertOctagon } from 'lucide-react';
import { HealthStatus } from '../types';

interface StatusBadgeProps {
  status: HealthStatus;
  size?: 'sm' | 'md' | 'lg';
  labelOverride?: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'md',
  labelOverride,
  className = '',
}) => {
  const config = {
    green: {
      label: labelOverride || 'Normal',
      icon: CheckCircle2,
      bgColor: 'bg-[#DDF3EA] dark:bg-[#0B3323]',
      textColor: 'text-[#1F7A5A] dark:text-[#2EC48B]',
      borderColor: 'border-[#1F7A5A]/30 dark:border-[#2EC48B]/40',
    },
    amber: {
      label: labelOverride || 'Attention',
      icon: AlertTriangle,
      bgColor: 'bg-[#FFF1D6] dark:bg-[#3B2603]',
      textColor: 'text-[#9A6200] dark:text-[#E5A122]',
      borderColor: 'border-[#9A6200]/30 dark:border-[#E5A122]/40',
    },
    red: {
      label: labelOverride || 'Urgent',
      icon: AlertOctagon,
      bgColor: 'bg-[#FBE0DC] dark:bg-[#3D120E]',
      textColor: 'text-[#C0392B] dark:text-[#E74C3C]',
      borderColor: 'border-[#C0392B]/30 dark:border-[#E74C3C]/40',
    },
  }[status];

  const Icon = config.icon;

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-base font-semibold gap-2.5',
  }[size];

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  }[size];

  return (
    <div
      role="status"
      aria-label={`Status: ${config.label}`}
      className={`inline-flex items-center rounded-full border font-medium ${config.bgColor} ${config.textColor} ${config.borderColor} ${sizeClasses} ${className}`}
    >
      <Icon size={iconSizes} aria-hidden="true" className="flex-shrink-0" />
      <span>{config.label}</span>
    </div>
  );
};
