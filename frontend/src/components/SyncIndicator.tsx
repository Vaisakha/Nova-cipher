import React from 'react';
import { Wifi, WifiOff, RefreshCw, Clock, Database, Radio } from 'lucide-react';
import { SyncTelemetry } from '../types';

interface SyncIndicatorProps {
  syncInfo: SyncTelemetry;
  onToggleSimulatedLinkLoss?: () => void;
  onTriggerManualSync?: () => void;
  compact?: boolean;
}

export const SyncIndicator: React.FC<SyncIndicatorProps> = ({
  syncInfo,
  onToggleSimulatedLinkLoss,
  onTriggerManualSync,
  compact = false,
}) => {
  const formatDelay = (seconds: number) => {
    if (seconds <= 0) return 'Instant (<1s)';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s one-way`;
  };

  const statusConfig = {
    synced: {
      label: 'Synced',
      icon: Wifi,
      badgeBg: 'bg-status-green-tint text-status-green border-status-green/30',
      dotColor: 'bg-status-green',
    },
    queued: {
      label: `Queued (${syncInfo.queuedCount})`,
      icon: Database,
      badgeBg: 'bg-status-amber-tint text-status-amber border-status-amber/30',
      dotColor: 'bg-status-amber animate-pulse',
    },
    offline: {
      label: 'Link Offline',
      icon: WifiOff,
      badgeBg: 'bg-status-red-tint text-status-red border-status-red/30',
      dotColor: 'bg-status-red',
    },
  }[syncInfo.state];

  const Icon = statusConfig.icon;

  if (compact) {
    return (
      <button
        onClick={onToggleSimulatedLinkLoss}
        title={`Sync: ${statusConfig.label} | Delay: ${formatDelay(syncInfo.signalDelaySeconds)} | Click to toggle link loss`}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-colors ${statusConfig.badgeBg}`}
      >
        <span className={`w-2 h-2 rounded-full ${statusConfig.dotColor}`} />
        <Icon size={14} />
        <span>{statusConfig.label}</span>
      </button>
    );
  }

  return (
    <div className="bg-surface rounded-card p-4 border border-pastel-blue shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-btn border ${statusConfig.badgeBg}`}>
          <Icon size={22} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-text text-sm md:text-base">
              Telemetry Ground Link: {statusConfig.label}
            </span>
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${statusConfig.dotColor}`} />
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted mt-0.5">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              Last sync: {syncInfo.lastSyncTime}
            </span>
            <span className="flex items-center gap-1">
              <Radio size={12} />
              Delay: {formatDelay(syncInfo.signalDelaySeconds)}
            </span>
            {syncInfo.queuedCount > 0 && (
              <span className="flex items-center gap-1 text-status-amber font-medium">
                <Database size={12} />
                {syncInfo.queuedCount} items in IndexedDB queue
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-pastel-blue">
        <button
          onClick={onToggleSimulatedLinkLoss}
          className={`touch-target px-3 py-2 text-xs font-semibold rounded-btn border transition-colors flex items-center gap-1.5 ${
            syncInfo.simulatedLinkLoss
              ? 'bg-status-red text-white border-status-red shadow-glow-red'
              : 'bg-surface-alt text-blue-deep border-pastel-blue hover:bg-pastel-blue'
          }`}
          aria-pressed={syncInfo.simulatedLinkLoss}
        >
          {syncInfo.simulatedLinkLoss ? <WifiOff size={16} /> : <Radio size={16} />}
          <span>{syncInfo.simulatedLinkLoss ? 'Restore Comm Link' : 'Simulate Link Loss'}</span>
        </button>

        {onTriggerManualSync && (
          <button
            onClick={onTriggerManualSync}
            disabled={syncInfo.state === 'offline' || syncInfo.simulatedLinkLoss}
            className="touch-target px-3 py-2 text-xs font-semibold rounded-btn bg-pastel-blue text-blue-deep border border-blue-dark/20 hover:bg-pastel-blue-2 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
            title="Attempt immediate telemetry handshake"
          >
            <RefreshCw size={16} />
            <span>Sync Now</span>
          </button>
        )}
      </div>
    </div>
  );
};
