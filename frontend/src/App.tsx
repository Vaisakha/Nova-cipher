import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { StatusBar } from './components/StatusBar';
import { BottomNav } from './components/BottomNav';
import { ContactFlightSurgeonModal } from './components/ContactFlightSurgeonModal';
import { WireframesPage } from './pages/WireframesPage';
import { CrewMember, SyncTelemetry } from './types';
import { useRegisterSW } from 'virtual:pwa-register/react';
import {
  Layers, Shield, Activity, UserCheck, AlertTriangle, Radio,
  Settings as SettingsIcon, Users, Moon, Sun, Download, WifiOff
} from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

// Mock active crew member for shell
const defaultCrewMember: CrewMember = {
  id: 'crew-01',
  name: 'Dr. Sarah Connor',
  callsign: 'Valkyrie-1',
  role: 'Commander / Astrobiologist',
  missionDay: 142,
  missionPhase: 'Mars Transit (Cruising)',
  overallStatus: 'amber',
};

// Initial deep space sync state (e.g. 14 min one-way light delay)
const defaultSyncInfo: SyncTelemetry = {
  state: 'synced',
  lastSyncTime: '3m ago',
  queuedCount: 0,
  signalDelaySeconds: 864, // 14 min 24 sec
  simulatedLinkLoss: false,
};

export const AppContent: React.FC = () => {
  const [crewMember, setCrewMember] = useState<CrewMember>(defaultCrewMember);
  const [syncInfo, setSyncInfo] = useState<SyncTelemetry>(defaultSyncInfo);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [isSurgeonModalOpen, setIsSurgeonModalOpen] = useState<boolean>(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(() =>
    window.matchMedia('(display-mode: standalone)').matches
  );
  const [needRefresh, setNeedRefresh] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);
  const { updateServiceWorker } = useRegisterSW({
    onNeedRefresh: () => setNeedRefresh(true),
    onOfflineReady: () => setOfflineReady(true),
  });

  const location = useLocation();
  const navigate = useNavigate();

  // PWA install prompt capture
  useEffect(() => {
    const handleBeforeInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };
    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setIsInstalled(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  useEffect(() => {
    if (navigator.serviceWorker.controller) {
      setOfflineReady(true);
    }
  }, []);

  // Theme toggle effect
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  const handleToggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const handleToggleLinkLoss = () => {
    setSyncInfo((prev) => {
      const nextLoss = !prev.simulatedLinkLoss;
      return {
        ...prev,
        simulatedLinkLoss: nextLoss,
        state: nextLoss ? 'offline' : prev.queuedCount > 0 ? 'queued' : 'synced',
      };
    });
  };

  const handleSendMessageToSurgeon = (msg: { priority: string; text: string; attachVitals: boolean }) => {
    if (syncInfo.state === 'offline' || syncInfo.simulatedLinkLoss) {
      setSyncInfo((prev) => ({
        ...prev,
        queuedCount: prev.queuedCount + 1,
        state: 'offline',
      }));
    }
  };

  const handleInstallApp = async () => {
    if (installPrompt) {
      await installPrompt.prompt();
      await installPrompt.userChoice;
      setInstallPrompt(null);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col font-sans transition-colors duration-200">
      {/* Top Application Status Bar */}
      <StatusBar
        crewMember={crewMember}
        syncInfo={syncInfo}
        isDarkTheme={isDarkTheme}
        onToggleTheme={handleToggleTheme}
        onToggleLinkLoss={handleToggleLinkLoss}
        onOpenSettings={() => navigate('/settings')}
      />

      {/* Persistent Banner for Link Loss Simulation when Active */}
      {syncInfo.simulatedLinkLoss && (
        <div className="bg-status-red text-white px-4 py-2 text-xs font-bold flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <WifiOff size={16} />
            <span>SIMULATED LINK LOSS ACTIVE: Deep space blackout mode. Data queued in IndexedDB.</span>
          </div>
          <button
            onClick={handleToggleLinkLoss}
            className="px-2.5 py-1 bg-white text-status-red rounded text-[11px] font-bold uppercase"
          >
            Restore Link
          </button>
        </div>
      )}

      {/* PWA Install Notification Bar */}
      {installPrompt && !isInstalled && (
        <aside aria-label="App installation" className="bg-pastel-blue text-blue-deep px-4 py-2 text-xs font-bold flex items-center justify-between border-b border-blue-dark/20">
          <div className="flex items-center gap-2">
            <Download size={16} />
            <span>Install AstroVitals for instant offline mission readiness</span>
          </div>
          <button
            onClick={handleInstallApp}
            className="px-3 py-1 bg-blue-dark text-white rounded text-xs font-bold"
          >
            Install app
          </button>
        </aside>
      )}

      {offlineReady && (
        <div role="status" className="px-4 py-2 text-xs font-semibold text-status-green bg-status-green-tint border-b border-status-green/20">
          Offline ready
        </div>
      )}

      {needRefresh && (
        <aside role="status" aria-label="App update available" className="bg-pastel-blue text-blue-deep px-4 py-2 text-xs font-bold flex items-center justify-between border-b border-blue-dark/20">
          <span>Update available</span>
          <button
            onClick={() => updateServiceWorker(true)}
            className="px-3 py-1 bg-blue-dark text-white rounded text-xs font-bold"
          >
            Reload
          </button>
        </aside>
      )}

      {/* Main Page Routing */}
      <main className="flex-1 pb-24">
        <Routes>
          <Route path="/" element={<WireframesPage />} />
          <Route path="/wireframes" element={<WireframesPage />} />
          <Route path="/vitals" element={<WireframesPage />} />
          <Route path="/body" element={<WireframesPage />} />
          <Route path="/alerts" element={<WireframesPage />} />
          <Route path="/settings" element={<WireframesPage />} />
          <Route path="/ground-control" element={<WireframesPage />} />
          <Route
            path="/more"
            element={
              <div className="max-w-3xl mx-auto p-6 space-y-4">
                <h1 className="text-2xl font-bold">Mission System Index</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <Link
                    to="/wireframes"
                    className="p-4 bg-surface rounded-card border border-pastel-blue flex items-center gap-3 font-bold hover:bg-surface-alt"
                  >
                    <Layers className="text-blue-dark" />
                    <span>In-App Wireframes Suite (1-10)</span>
                  </Link>
                  <Link
                    to="/ground-control"
                    className="p-4 bg-surface rounded-card border border-pastel-blue flex items-center gap-3 font-bold hover:bg-surface-alt"
                  >
                    <Users className="text-blue-dark" />
                    <span>Ground Control & Surgeon View</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="p-4 bg-surface rounded-card border border-pastel-blue flex items-center gap-3 font-bold hover:bg-surface-alt"
                  >
                    <SettingsIcon className="text-blue-dark" />
                    <span>System Settings & BLE Sensors</span>
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Persistent Global Bottom Navigation */}
      <BottomNav
        onContactFlightSurgeon={() => setIsSurgeonModalOpen(true)}
        unacknowledgedAlertsCount={1}
      />

      {/* Persistent Emergency Contact Flight Surgeon Modal */}
      <ContactFlightSurgeonModal
        isOpen={isSurgeonModalOpen}
        onClose={() => setIsSurgeonModalOpen(false)}
        syncInfo={syncInfo}
        crewMember={crewMember}
        onSendMessage={handleSendMessageToSurgeon}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
