import React, { useState } from 'react';
import {
  Smartphone, Tablet, Info, GitBranch, Layers, ShieldAlert,
  ChevronRight, ExternalLink, ArrowRight, CheckCircle2, PhoneCall
} from 'lucide-react';
import { wireframeScreens } from '../data/wireframeData';
import {
  OnboardingWireframe,
  HomeWireframe,
  VitalsDetailWireframe,
  MusculoskeletalWireframe,
  SleepWireframe,
  MentalWireframe,
  RadiationWireframe,
  AlertsWireframe,
  GroundControlWireframe,
  SettingsWireframe,
} from './wireframes/WireframeScreens';

export const WireframesPage: React.FC = () => {
  const [selectedScreenId, setSelectedScreenId] = useState<string>('home');
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'tablet'>('mobile');
  const [activeTab, setActiveTab] = useState<'wireframe' | 'flow' | 'rationale'>('wireframe');

  const currentScreenData =
    wireframeScreens.find((s) => s.id === selectedScreenId) || wireframeScreens[1];

  const renderScreen = () => {
    switch (selectedScreenId) {
      case 'onboarding':
        return <OnboardingWireframe deviceMode={deviceMode} />;
      case 'home':
        return <HomeWireframe deviceMode={deviceMode} />;
      case 'vitals-detail':
        return <VitalsDetailWireframe deviceMode={deviceMode} />;
      case 'musculoskeletal':
        return <MusculoskeletalWireframe deviceMode={deviceMode} />;
      case 'sleep':
        return <SleepWireframe deviceMode={deviceMode} />;
      case 'mental':
        return <MentalWireframe deviceMode={deviceMode} />;
      case 'radiation':
        return <RadiationWireframe deviceMode={deviceMode} />;
      case 'alerts-emergency':
        return <AlertsWireframe deviceMode={deviceMode} />;
      case 'ground-control':
        return <GroundControlWireframe deviceMode={deviceMode} />;
      case 'settings':
        return <SettingsWireframe deviceMode={deviceMode} />;
      default:
        return <HomeWireframe deviceMode={deviceMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text pb-20">
      {/* Top Header */}
      <div className="bg-surface border-b border-pastel-blue py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-dark">
              <Layers size={16} /> PHASE 1 ARCHITECTURAL DELIVERABLE
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-text mt-0.5">
              AstroVitals Low-Fidelity Wireframes & UX Blueprint
            </h1>
            <p className="text-sm text-text-muted mt-1">
              Grayscale, boxy wireframes with numbered annotation callouts, device toggles, and NASA hazard mappings.
            </p>
          </div>

          {/* Primary View Switcher */}
          <div className="flex items-center gap-2 bg-surface-alt p-1.5 rounded-btn border border-pastel-blue flex-shrink-0">
            <button
              onClick={() => setActiveTab('wireframe')}
              className={`px-3 py-1.5 rounded-btn text-xs font-bold transition-colors ${
                activeTab === 'wireframe'
                  ? 'bg-blue-dark text-white shadow-sm'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Screens (1-10)
            </button>
            <button
              onClick={() => setActiveTab('flow')}
              className={`px-3 py-1.5 rounded-btn text-xs font-bold transition-colors ${
                activeTab === 'flow'
                  ? 'bg-blue-dark text-white shadow-sm'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Navigation Flow
            </button>
            <button
              onClick={() => setActiveTab('rationale')}
              className={`px-3 py-1.5 rounded-btn text-xs font-bold transition-colors ${
                activeTab === 'rationale'
                  ? 'bg-blue-dark text-white shadow-sm'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Design Rationale
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6">
        {activeTab === 'wireframe' && (
          <div>
            {/* Controls Bar: Screen Selector & Device Mode Toggle */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-surface p-4 rounded-card border border-pastel-blue shadow-soft mb-6">
              {/* Screen Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-thin">
                {wireframeScreens.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedScreenId(s.id)}
                    className={`touch-target px-3 py-2 text-xs font-bold rounded-btn whitespace-nowrap transition-all ${
                      selectedScreenId === s.id
                        ? 'bg-blue-dark text-white shadow-md'
                        : 'bg-surface-alt text-text-muted hover:text-text hover:bg-pastel-blue'
                    }`}
                  >
                    {s.title.split('.')[0]}. {s.title.split('. ')[1] || s.title}
                  </button>
                ))}
              </div>

              {/* Device Mode Toggle */}
              <div className="flex items-center gap-2 border-t lg:border-t-0 pt-3 lg:pt-0 border-pastel-blue flex-shrink-0">
                <span className="text-xs font-bold text-text-muted uppercase">Viewport:</span>
                <div className="flex bg-surface-alt rounded-btn p-1 border border-pastel-blue">
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-btn text-xs font-bold transition-all ${
                      deviceMode === 'mobile'
                        ? 'bg-blue-dark text-white shadow-sm'
                        : 'text-text-muted hover:text-text'
                    }`}
                  >
                    <Smartphone size={16} />
                    <span>Mobile (390px)</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode('tablet')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-btn text-xs font-bold transition-all ${
                      deviceMode === 'tablet'
                        ? 'bg-blue-dark text-white shadow-sm'
                        : 'text-text-muted hover:text-text'
                    }`}
                  >
                    <Tablet size={16} />
                    <span>Tablet (1024px)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Screen Header Info */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-text">
                  {currentScreenData.title}
                </h2>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-alt text-blue-deep border border-pastel-blue">
                  Route: {currentScreenData.route}
                </span>
              </div>
              <p className="text-sm text-text-muted mt-1">{currentScreenData.description}</p>
            </div>

            {/* Main Stage: Device Frame + Legend Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left/Center: Wireframe Canvas inside Device Frame */}
              <div
                className={`lg:col-span-7 flex justify-center bg-slate-200 dark:bg-slate-950 p-4 sm:p-6 rounded-card border-2 border-slate-400 overflow-hidden shadow-inner`}
              >
                <div
                  className={`transition-all duration-300 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border-4 border-slate-700 overflow-hidden ${
                    deviceMode === 'mobile' ? 'w-[390px] max-w-full' : 'w-full max-w-[840px]'
                  }`}
                >
                  {/* Device Status Bar Mock */}
                  <div className="bg-slate-800 text-slate-300 px-4 py-1.5 text-[11px] font-mono flex items-center justify-between border-b border-slate-700 select-none">
                    <span>ASTRO-OS 4.2</span>
                    <span className="font-bold">NASA DEEP SPACE LINK</span>
                    <span>100% BAT</span>
                  </div>

                  {/* Wireframe View */}
                  <div className="max-h-[720px] overflow-y-auto scrollbar-thin">
                    {renderScreen()}
                  </div>

                  {/* Device Bottom Bezel Bar */}
                  <div className="bg-slate-800 text-slate-400 py-1 text-center text-[10px] font-mono border-t border-slate-700">
                    [ASTROVITALS GLOVE INTERFACE FRAME]
                  </div>
                </div>
              </div>

              {/* Right: Detailed Callout Legend & Hazard Mappings */}
              <div className="lg:col-span-5 bg-surface rounded-card p-5 border border-pastel-blue shadow-soft">
                <div className="flex items-center gap-2 border-b border-pastel-blue pb-3 mb-4">
                  <Info size={20} className="text-blue-dark" />
                  <h3 className="font-bold text-base sm:text-lg text-text">
                    Numbered Element Callout Legend
                  </h3>
                </div>

                <div className="space-y-4 max-h-[660px] overflow-y-auto pr-1 scrollbar-thin">
                  {currentScreenData.callouts.map((c) => (
                    <div
                      key={c.number}
                      className="p-3.5 rounded-card bg-surface-alt border border-pastel-blue-2 transition-all hover:border-blue-dark"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-blue-dark text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                          {c.number}
                        </span>
                        <h4 className="font-bold text-sm text-text">{c.element}</h4>
                      </div>

                      <div className="text-xs text-text leading-relaxed pl-8">
                        <p>{c.purpose}</p>

                        <div className="mt-2 pt-2 border-t border-pastel-blue/60 flex flex-col gap-1 text-[11px]">
                          <div>
                            <span className="font-bold text-blue-deep dark:text-pastel-blue">
                              NASA Hazard / Indicator:{' '}
                            </span>
                            <span className="text-text-muted">{c.hazardOrIndicator}</span>
                          </div>
                          {c.gloveAccessibilityNote && (
                            <div>
                              <span className="font-bold text-status-green">
                                Ergonomics / Glove Note:{' '}
                              </span>
                              <span className="text-text-muted">{c.gloveAccessibilityNote}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Navigation Flow */}
        {activeTab === 'flow' && (
          <div className="bg-surface rounded-card p-6 border border-pastel-blue shadow-soft">
            <div className="flex items-center justify-between border-b border-pastel-blue pb-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-text flex items-center gap-2">
                  <GitBranch size={24} className="text-blue-dark" />
                  AstroVitals Role-Based Navigation Architecture
                </h2>
                <p className="text-sm text-text-muted mt-1">
                  Hierarchical pathways and offline-first state machine for Astronaut, Flight Surgeon, and Mission Control personas.
                </p>
              </div>
            </div>

            {/* Visual Node Tree */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Role 1: Astronaut */}
              <div className="p-4 rounded-card bg-surface-alt border-2 border-blue-dark/40">
                <div className="flex items-center gap-2 font-bold text-base text-blue-deep dark:text-pastel-blue mb-3 pb-2 border-b border-pastel-blue">
                  <span>🚀 Primary: Astronaut Flow</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 bg-surface rounded border border-pastel-blue">
                    1. Onboarding / PIN Auth (IndexedDB token)
                  </div>
                  <div className="p-2 bg-pastel-blue text-blue-deep font-bold rounded border border-blue-dark/20">
                    2. Home Dashboard (Key vitals, active alert, tasks)
                  </div>
                  <div className="pl-4 border-l-2 border-blue-dark space-y-1 text-text-muted">
                    <div>├── Vitals Detail (24h/7d/30d charts)</div>
                    <div>├── Musculoskeletal & Interactive Body Map</div>
                    <div>├── Sleep & Circadian Guidance</div>
                    <div>├── Mental Health & 1-5 Mood Check-in</div>
                    <div>├── Space Radiation & Dosimetry</div>
                    <div>└── Settings & BLE Sensor Pairing</div>
                  </div>
                  <div className="p-2 bg-status-red-tint text-status-red font-bold rounded border border-status-red/40">
                    Emergency: Step-by-Step Triage & Direct Surgeon Link
                  </div>
                </div>
              </div>

              {/* Role 2: Flight Surgeon */}
              <div className="p-4 rounded-card bg-surface-alt border-2 border-amber-600/40">
                <div className="flex items-center gap-2 font-bold text-base text-amber-800 dark:text-amber-200 mb-3 pb-2 border-b border-pastel-blue">
                  <span>🩺 Secondary: Flight Surgeon Flow</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 bg-surface rounded border border-pastel-blue">
                    1. Ground Station Console Auth
                  </div>
                  <div className="p-2 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 font-bold rounded border border-amber-600/30">
                    2. Multi-Astronaut Fleet Roster Table
                  </div>
                  <div className="pl-4 border-l-2 border-amber-600 space-y-1 text-text-muted">
                    <div>├── Individual Crew Telemetry Deep Dive</div>
                    <div>├── 30-Day Mission Baseline Anomaly Flags</div>
                    <div>├── Cross-Crew Comparative Overlay</div>
                    <div>└── Clinical Prescription of Exercise/Light</div>
                  </div>
                  <div className="p-2 bg-surface rounded border border-pastel-blue">
                    Remote Directive Queue (Timed to Ground Passes)
                  </div>
                </div>
              </div>

              {/* Role 3: Mission Control */}
              <div className="p-4 rounded-card bg-surface-alt border-2 border-emerald-600/40">
                <div className="flex items-center gap-2 font-bold text-base text-emerald-800 dark:text-emerald-200 mb-3 pb-2 border-b border-pastel-blue">
                  <span>🛰️ Tertiary: Mission Control Overview</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 bg-surface rounded border border-pastel-blue">
                    1. Flight Operations Telemetry Tap
                  </div>
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-bold rounded border border-emerald-600/30">
                    2. DSN Ground Link Telemetry & Delay Monitor
                  </div>
                  <div className="pl-4 border-l-2 border-emerald-600 space-y-1 text-text-muted">
                    <div>├── Light-Time Signal Delay (3 - 22 mins)</div>
                    <div>├── Spacecraft Orbital Phase Sync Status</div>
                    <div>└── Environmental Cabin Radiation Flux</div>
                  </div>
                  <div className="p-2 bg-surface rounded border border-pastel-blue">
                    Network Anomaly & Link Loss Simulation Controls
                  </div>
                </div>
              </div>
            </div>

            {/* Mermaid Syntax Representation */}
            <div className="bg-slate-900 text-slate-100 p-5 rounded-card font-mono text-xs overflow-x-auto">
              <div className="text-slate-400 mb-2 font-bold">// Mermaid Navigation State Machine:</div>
              <pre>{`graph TD
  Auth[Onboarding / PIN Auth] --> Home[Home Dashboard]
  Home --> Vitals[Vitals Detail & Scrubbable Trends]
  Home --> Body[Musculoskeletal & Interactive Body Map]
  Home --> Sleep[Sleep & Circadian Rhythm]
  Home --> Mental[Mental Health & 1-5 Mood Check-in]
  Home --> Rad[Radiation Exposure & Dosimetry]
  Home --> Alerts[Alerts, Anomaly Explanation & Protocols]
  Home --> Settings[Settings, Wearables & Accessibility]
  
  %% Persistent Global Emergency Shortcut
  Home -.-> ContactSurgeon[Contact Flight Surgeon Modal]
  Vitals -.-> ContactSurgeon
  Body -.-> ContactSurgeon
  Alerts -.-> ContactSurgeon
  
  %% Ground Roles
  GroundAuth[Flight Surgeon / Ground Login] --> GroundControl[Ground Control Fleet Roster]
  GroundControl --> CrewDetail[Individual Astronaut Telemetry]
  GroundControl --> FleetTrends[Cross-Crew Multi-Trend Overlay]
  GroundControl --> LinkMonitor[DSN Delay & Buffer Monitor]`}</pre>
            </div>
          </div>
        )}

        {/* Tab 3: Design Rationale */}
        {activeTab === 'rationale' && (
          <div className="bg-surface rounded-card p-6 sm:p-8 border border-pastel-blue shadow-soft space-y-6">
            <h2 className="text-2xl font-bold text-text">Human-Centered Design Rationale</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-card bg-surface-alt border border-pastel-blue">
                <div className="text-blue-dark font-bold text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span>Glove-Friendly Ergonomics</span>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Astronauts frequently wear pressurized spacesuit gloves or thermal gloves inside microgravity modules.
                  Every touch target has a minimum height of 56px, with primary actions reaching 64px.
                  All hover-only dependencies, multi-finger pinches, and long-press interactions are strictly eliminated.
                </p>
              </div>

              <div className="p-5 rounded-card bg-surface-alt border border-pastel-blue">
                <div className="text-blue-dark font-bold text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span>Offline-First Architecture</span>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  During lunar occultations or Mars conjunctions, communications with Earth are severed for hours or weeks.
                  AstroVitals executes 100% of its early-warning rules, body map inspections, and emergency triage locally
                  in the browser, persisting all readings to IndexedDB and syncing seamlessly once a telemetry link is acquired.
                </p>
              </div>

              <div className="p-5 rounded-card bg-surface-alt border border-pastel-blue">
                <div className="text-blue-dark font-bold text-base mb-2 flex items-center gap-2">
                  <CheckCircle2 size={20} />
                  <span>Triple Status Redundancy</span>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Under high G-loads, space motion sickness, or variable lighting, color perception degrades.
                  Every medical indicator communicates status through three simultaneous layers:
                  <strong> Color</strong> (Green/Amber/Red), <strong>Icon</strong> (Check, Triangle, Octagon), and
                  <strong> Explicit Text Label</strong> (Normal, Attention, Urgent).
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
