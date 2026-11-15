import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus, Sparkles } from 'lucide-react';
import { VitalSign } from '../types';
import { StatusBadge } from './StatusBadge';

interface VitalCardProps {
  vital: VitalSign;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const VitalCard: React.FC<VitalCardProps> = ({ vital, onClick, icon }) => {
  const TrendIcon = {
    up: ArrowUpRight,
    down: ArrowDownRight,
    stable: Minus,
  }[vital.trend];

  const trendColor = {
    up: vital.status === 'green' ? 'text-status-green' : 'text-status-amber',
    down: vital.status === 'green' ? 'text-status-green' : 'text-status-amber',
    stable: 'text-text-muted',
  }[vital.trend];

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : 'region'}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${vital.label}: ${vital.value} ${vital.unit}, Status: ${vital.status}`}
      className={`bg-surface rounded-card p-4 sm:p-5 border border-pastel-blue shadow-soft transition-all ${
        onClick
          ? 'cursor-pointer hover:border-pastel-blue-2 hover:shadow-soft-lg active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-blue-dark/20'
          : ''
      }`}
    >
      {/* Header: Label + Status */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          {icon && <span className="p-2 rounded-btn bg-surface-alt text-blue-deep">{icon}</span>}
          <div>
            <h3 className="font-semibold text-text text-sm sm:text-base leading-tight">
              {vital.label}
            </h3>
            {vital.isSimulated && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded bg-surface-alt text-text-muted mt-0.5 border border-pastel-blue">
                <Sparkles size={10} /> SIMULATED
              </span>
            )}
          </div>
        </div>
        <StatusBadge status={vital.status} size="sm" />
      </div>

      {/* Main Metric Value */}
      <div className="flex items-baseline gap-2 my-1">
        <span className="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
          {vital.value}
        </span>
        {vital.secondaryValue && (
          <span className="text-xl sm:text-2xl font-bold text-text-muted">
            / {vital.secondaryValue}
          </span>
        )}
        <span className="text-xs sm:text-sm font-medium text-text-muted">{vital.unit}</span>
      </div>

      {/* Footer: Trend + Baseline Reference */}
      <div className="flex items-center justify-between text-xs text-text-muted pt-2 border-t border-pastel-blue/60 mt-3">
        <div className="flex items-center gap-1">
          <TrendIcon size={14} className={trendColor} />
          <span className="capitalize">{vital.trend} trend</span>
        </div>
        <div className="font-mono text-[11px] text-text-muted">
          Base: {vital.baseline}
        </div>
      </div>
    </div>
  );
};
