import React from 'react';
import { BatteryCharging, ShieldAlert, Moon, Sun, User, Radio, Sliders } from 'lucide-react';
import { CrewMember, SyncTelemetry } from '../types';
import { StatusBadge } from './StatusBadge';
import { SyncIndicator } from './SyncIndicator';

interface StatusBarProps {
  crewMember: CrewMember;
  syncInfo: SyncTelemetry;
  batteryLevel?: number;
  isDarkTheme?: boolean;
  onToggleTheme?: () => void;
  onToggleLinkLoss?: () => void;
  onOpenSettings?: () => void;
  role?: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  crewMember,
  syncInfo,
  batteryLevel = 94,
  isDarkTheme = false,
  onToggleTheme,
  onToggleLinkLoss,
  onOpenSettings,
  role = 'astronaut',
}) => {
  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-pastel-blue shadow-sm px-3 sm:px-6 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Astronaut / Mission Identity */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-11 h-11 rounded-btn bg-surface-alt border border-pastel-blue-2 flex items-center justify-center text-blue-deep font-bold flex-shrink-0 shadow-sm overflow-hidden">
            {crewMember.avatarUrl ? (
              <img src={crewMember.avatarUrl} alt={crewMember.name} className="w-full h-full object-cover" />
            ) : (
              <User size={22} />
            )}
          </div>
          <div className="truncate">
            <div className="flex items-center gap-1.5 truncate">
              <span className="font-bold text-text text-sm sm:text-base truncate">
                {crewMember.name}
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-surface-alt text-text-muted hidden sm:inline-block">
                {crewMember.callsign}
              </span>
            </div>
            <div className="text-xs text-text-muted flex items-center gap-2">
              <span className="font-medium text-blue-deep dark:text-pastel-blue-2">
                Day {crewMember.missionDay}
              </span>
              <span className="hidden md:inline">• {crewMember.missionPhase}</span>
              <span className="capitalize text-[11px] px-1.5 rounded-full bg-pastel-blue text-blue-deep font-medium">
                {role.replace('_', ' ')}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Overall Health Status Badge */}
        <div className="hidden sm:flex items-center justify-center">
          <StatusBadge status={crewMember.overallStatus} size="md" />
        </div>

        {/* Right: Sync Chip + Battery + Toggles */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Sync chip */}
          <SyncIndicator
            syncInfo={syncInfo}
            compact={true}
            onToggleSimulatedLinkLoss={onToggleLinkLoss}
          />

          {/* Device & Battery telemetry */}
          <div
            className="hidden lg:flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-full bg-surface-alt text-text-muted border border-pastel-blue"
            title={`Bio-sensor Hub Battery: ${batteryLevel}%`}
          >
            <BatteryCharging size={16} className="text-status-green" />
            <span>{batteryLevel}%</span>
          </div>

          {/* Dark / Low-light Cabin Theme Toggle */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Low-Light Cabin Theme'}
              title={isDarkTheme ? 'Switch to Light Cabin' : 'Low-Light / Sleep Cabin Mode'}
              className="touch-target w-10 h-10 rounded-btn flex items-center justify-center bg-surface-alt border border-pastel-blue text-text-muted hover:text-text hover:bg-pastel-blue transition-colors cursor-pointer"
            >
              {isDarkTheme ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
            </button>
          )}

          {/* Quick Settings Shortcut */}
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              aria-label="System Settings"
              className="touch-target w-10 h-10 rounded-btn flex items-center justify-center bg-surface-alt border border-pastel-blue text-text-muted hover:text-text hover:bg-pastel-blue transition-colors cursor-pointer"
            >
              <Sliders size={18} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
