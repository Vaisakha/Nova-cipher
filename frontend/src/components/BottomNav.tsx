import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Activity, UserCheck, AlertTriangle, Menu, PhoneCall } from 'lucide-react';

interface BottomNavProps {
  onContactFlightSurgeon: () => void;
  unacknowledgedAlertsCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  onContactFlightSurgeon,
  unacknowledgedAlertsCount = 0,
}) => {
  const navItems = [
    { label: 'Home', to: '/', icon: Home },
    { label: 'Vitals', to: '/vitals', icon: Activity },
    { label: 'Body', to: '/body', icon: UserCheck },
    {
      label: 'Alerts',
      to: '/alerts',
      icon: AlertTriangle,
      badge: unacknowledgedAlertsCount > 0 ? unacknowledgedAlertsCount : undefined,
    },
    { label: 'More', to: '/more', icon: Menu },
  ];

  return (
    <nav
      aria-label="Primary Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-pastel-blue shadow-lg px-2 sm:px-4 py-1.5 pb-safe"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-1 sm:gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center flex-1 touch-target rounded-btn py-1 px-1 transition-colors select-none cursor-pointer ${
                  isActive
                    ? 'text-blue-deep bg-pastel-blue font-bold shadow-sm'
                    : 'text-text-muted hover:text-text hover:bg-surface-alt'
                }`
              }
            >
              <div className="relative">
                <Icon size={22} />
                {item.badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2 px-1.5 py-0.2 min-w-[18px] text-[10px] font-bold text-white bg-status-red rounded-full flex items-center justify-center shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] sm:text-xs mt-0.5 tracking-tight">{item.label}</span>
            </NavLink>
          );
        })}

        {/* Persistent Emergency Contact Flight Surgeon Action */}
        <button
          onClick={onContactFlightSurgeon}
          aria-label="Emergency: Contact Flight Surgeon"
          className="touch-target-lg flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 bg-status-red text-white font-bold rounded-btn shadow-glow-red hover:bg-[#A93226] active:scale-95 transition-all cursor-pointer flex-shrink-0"
          title="Direct Priority Uplink to Flight Surgeon (Queues when offline)"
        >
          <PhoneCall size={20} className="animate-pulse flex-shrink-0" />
          <span className="text-xs sm:text-sm whitespace-nowrap">Surgeon</span>
        </button>
      </div>
    </nav>
  );
};
