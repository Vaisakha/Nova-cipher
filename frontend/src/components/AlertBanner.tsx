import React from 'react';
import { AlertOctagon, AlertTriangle, ArrowRight, HelpCircle, Sparkles, Check } from 'lucide-react';
import { AlertItem } from '../types';
import { BigButton } from './BigButton';

interface AlertBannerProps {
  alert: AlertItem;
  onOpenProtocol?: (protocolId: string) => void;
  onAcknowledge?: (alertId: string) => void;
  onContactSurgeon?: () => void;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({
  alert,
  onOpenProtocol,
  onAcknowledge,
  onContactSurgeon,
}) => {
  const isRed = alert.severity === 'red';

  const styles = isRed
    ? {
        border: 'border-status-red',
        bg: 'bg-status-red-tint/70 dark:bg-[#3D120E]/80',
        text: 'text-status-red',
        icon: AlertOctagon,
        badgeBg: 'bg-status-red text-white',
      }
    : {
        border: 'border-status-amber',
        bg: 'bg-status-amber-tint/70 dark:bg-[#3B2603]/80',
        text: 'text-status-amber',
        icon: AlertTriangle,
        badgeBg: 'bg-status-amber text-white',
      };

  const Icon = styles.icon;

  return (
    <div
      role="alert"
      className={`rounded-card p-4 sm:p-5 border-2 ${styles.border} ${styles.bg} shadow-soft mb-4 transition-all`}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        {/* Left: Icon & Alert Description */}
        <div className="flex items-start gap-3.5">
          <div className={`p-2.5 rounded-btn ${styles.badgeBg} flex-shrink-0 shadow-sm`}>
            <Icon size={24} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${styles.badgeBg}`}>
                {isRed ? 'Urgent Warning' : 'Attention Anomaly'}
              </span>
              <span className="text-xs text-text-muted">{alert.timestamp}</span>
              {alert.isSimulated && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-surface text-text-muted border border-pastel-blue">
                  <Sparkles size={10} /> SIMULATED
                </span>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-bold text-text leading-snug">
              {alert.title}
            </h3>

            {/* Why This Fired (Explainable Rules Engine Output) */}
            <div className="mt-2 text-xs sm:text-sm text-text bg-surface/80 rounded-btn p-3 border border-pastel-blue/60">
              <div className="font-semibold flex items-center gap-1.5 text-blue-deep dark:text-pastel-blue-2 mb-1">
                <HelpCircle size={14} />
                <span>Why this fired:</span>
              </div>
              <p className="text-text leading-relaxed">
                <span className="font-medium text-text-muted">Rule: {alert.ruleTriggered}</span>
                <br />
                <span className="font-medium">Observed: </span>{alert.valuesObserved}
              </p>
              <p className="mt-1.5 font-medium text-text border-t border-pastel-blue/40 pt-1.5">
                <span className="text-blue-dark dark:text-blue-deep font-bold">Action Recommended: </span>
                {alert.recommendedAction}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Glove-Friendly Action Buttons */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 flex-shrink-0 justify-end">
          {alert.protocolId && onOpenProtocol && (
            <BigButton
              variant={isRed ? 'emergency' : 'primary'}
              size="normal"
              onClick={() => onOpenProtocol(alert.protocolId!)}
              icon={<ArrowRight size={18} />}
              className="text-xs sm:text-sm whitespace-nowrap"
            >
              Open Protocol
            </BigButton>
          )}

          {onAcknowledge && (
            <button
              onClick={() => onAcknowledge(alert.id)}
              className="touch-target px-4 py-2 rounded-btn bg-surface border border-pastel-blue text-text-muted hover:text-text hover:bg-surface-alt font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Check size={16} />
              <span>Acknowledge</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
