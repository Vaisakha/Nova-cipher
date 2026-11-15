import React from 'react';
import {
  User, CheckCircle, Wifi, Activity, Moon, Shield, AlertTriangle, PhoneCall,
  Flame, BatteryCharging, Radio, Sliders, ArrowRight, Heart, Droplets, Zap,
  Sparkles, Plus, Clock, FileText, ChevronRight, BarChart2
} from 'lucide-react';

interface WireframeProps {
  deviceMode: 'mobile' | 'tablet';
}

export const OnboardingWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-4 sm:p-6 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      {/* Callout 1: Disclaimer */}
      <div className="relative mb-6 p-4 border-2 border-dashed border-slate-500 bg-white dark:bg-slate-800 rounded-lg">
        <span className="wf-callout">1</span>
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300">
          <Shield size={16} /> EDUCATIONAL MISSION SIMULATION • NOT A MEDICAL DEVICE
        </div>
        <p className="text-xs text-slate-500 mt-1">
          AstroVitals prototype for deep-space physiological monitoring simulations.
        </p>
      </div>

      <div className="text-center mb-6">
        <div className="inline-block p-3 border-2 border-slate-600 rounded-full mb-2 bg-slate-200 dark:bg-slate-800">
          <Activity size={32} />
        </div>
        <h2 className="text-xl font-bold font-mono">ASTROVITALS CREW ACCESS</h2>
        <p className="text-xs text-slate-500">Select crew member profile to initialize bio-telemetry link</p>
      </div>

      {/* Callout 2: Crew Member Avatar Tiles */}
      <div className="relative mb-6 p-3 border-2 border-dashed border-slate-500 rounded-lg">
        <span className="wf-callout">2</span>
        <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">
          CREW SELECTION (LARGE TOUCH TARGETS)
        </div>
        <div className={`grid gap-3 ${deviceMode === 'tablet' ? 'grid-cols-4' : 'grid-cols-2'}`}>
          {[
            { name: 'Dr. Sarah Connor', role: 'Commander', sel: true },
            { name: 'Maj. Alex Vance', role: 'Flight Engineer', sel: false },
            { name: 'Dr. Marcus Chen', role: 'Medical Officer', sel: false },
            { name: 'Elena Rostov', role: 'Payload Specialist', sel: false },
          ].map((c, i) => (
            <div
              key={i}
              className={`p-3 border-2 rounded-lg text-center ${
                c.sel ? 'border-slate-800 bg-slate-300 dark:bg-slate-700 font-bold' : 'border-slate-400 bg-white dark:bg-slate-800'
              }`}
            >
              <div className="w-12 h-12 rounded-full border-2 border-slate-500 mx-auto flex items-center justify-center mb-1">
                <User size={24} />
              </div>
              <div className="text-xs font-bold truncate">{c.name}</div>
              <div className="text-[10px] text-slate-500 truncate">{c.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Callout 3: Biometric / PIN Pad */}
      <div className="relative p-4 border-2 border-dashed border-slate-500 rounded-lg bg-white dark:bg-slate-800 mb-6 max-w-sm mx-auto">
        <span className="wf-callout">3</span>
        <div className="text-xs font-mono font-bold text-slate-500 text-center mb-2">
          BIOMETRIC AUTH / PIN PAD (MIN 64px)
        </div>
        <div className="h-10 border-2 border-slate-400 rounded mb-3 flex items-center justify-center tracking-widest text-lg font-mono">
          ••••
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'BIO', 0, 'ENT'].map((k, i) => (
            <div
              key={i}
              className="h-14 border-2 border-slate-500 rounded-lg flex items-center justify-center font-bold font-mono text-base bg-slate-100 dark:bg-slate-700 shadow-sm"
            >
              {k}
            </div>
          ))}
        </div>
      </div>

      {/* Callout 4: Offline Status */}
      <div className="relative p-2.5 border-2 border-dashed border-slate-400 rounded text-center text-xs font-mono text-slate-500">
        <span className="wf-callout">4</span>
        [OFFLINE READY: IndexedDB Cache Validated • Mars Transit Orbit]
      </div>
    </div>
  );
};

export const HomeWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-3 sm:p-5 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      {/* Callout 1: Top Status Bar */}
      <div className="relative mb-4 p-3 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-between">
        <span className="wf-callout">1</span>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded border-2 border-slate-600 flex items-center justify-center font-mono font-bold text-xs">
            SC
          </div>
          <div>
            <div className="font-bold text-xs font-mono">DR. S. CONNOR (CDR)</div>
            <div className="text-[10px] text-slate-500">DAY 142 • MARS TRANSIT</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 border border-slate-500 rounded text-[10px] font-mono">
            SYNC: DELAY 14m 24s
          </span>
          <span className="text-xs font-mono">94% BAT</span>
        </div>
      </div>

      {/* Callout 2 & 3: Overall Status & Anomaly Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="relative p-3 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-between md:col-span-1">
          <span className="wf-callout">2</span>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase">OVERALL TRIAGE</div>
            <div className="text-lg font-bold font-mono">ATTENTION (AMBER)</div>
          </div>
          <AlertTriangle size={28} />
        </div>

        <div className="relative p-3 border-2 border-dashed border-amber-600 rounded-lg bg-amber-50 dark:bg-amber-950 md:col-span-2">
          <span className="wf-callout">3</span>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs font-bold text-amber-800 dark:text-amber-200">
                ACTIVE ANOMALY: Rising Resting HR + Sleep Deficit
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
                Rule triggered: RHR +12% above 7d baseline for 48h.
              </div>
            </div>
            <button className="px-3 py-1.5 border-2 border-amber-700 bg-amber-200 dark:bg-amber-800 text-xs font-bold rounded">
              Review
            </button>
          </div>
        </div>
      </div>

      {/* Callout 4: Glanceable Vitals Grid */}
      <div className="relative mb-4 p-3 border-2 border-dashed border-slate-600 rounded-lg">
        <span className="wf-callout">4</span>
        <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">
          GLANCEABLE VITALS TELEMETRY
        </div>
        <div className={`grid gap-3 ${deviceMode === 'tablet' ? 'grid-cols-4' : 'grid-cols-2'}`}>
          {[
            { label: 'HEART RATE', val: '78 bpm', status: 'Attention', base: '64 bpm' },
            { label: 'BLOOD PRESSURE', val: '122/82', status: 'Normal', base: '118/76' },
            { label: 'CABIN TEMP / CORE', val: '37.1 °C', status: 'Normal', base: '36.7 °C' },
            { label: 'CABIN RADIATION', val: '24 μSv/h', status: 'Normal', base: '22 μSv/h' },
          ].map((v, i) => (
            <div key={i} className="p-3 border-2 border-slate-400 rounded-lg bg-white dark:bg-slate-800">
              <div className="text-[10px] font-mono text-slate-500">{v.label}</div>
              <div className="text-xl font-bold font-mono my-1">{v.val}</div>
              <div className="text-[10px] text-slate-500 flex justify-between">
                <span>{v.status}</span>
                <span>Base: {v.base}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Callout 5: Tasks Checklist */}
      <div className="relative mb-4 p-3 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">5</span>
        <div className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">
          TODAY'S COUNTERMEASURE CHECKLIST
        </div>
        <div className="space-y-2">
          {[
            { task: 'ARED Resistive Exercise (60 min)', done: true },
            { task: 'CEVIS Cycle Ergometer (30 min)', done: false },
            { task: 'Circadian Sleep & Melatonin Log', done: true },
            { task: 'Electrolyte Hydration Intake (2.5L)', done: false },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2 p-2 border rounded text-xs font-mono">
              <div className={`w-4 h-4 border ${t.done ? 'bg-slate-700 text-white' : ''} flex items-center justify-center text-[10px]`}>
                {t.done ? '✓' : ''}
              </div>
              <span className={t.done ? 'line-through text-slate-400' : ''}>{t.task}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Callout 6: Contact Flight Surgeon Emergency Bar */}
      <div className="relative p-3 border-2 border-dashed border-red-500 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-between">
        <span className="wf-callout">6</span>
        <div className="flex items-center gap-2 text-red-800 dark:text-red-200">
          <PhoneCall size={20} />
          <span className="font-bold text-xs uppercase font-mono">EMERGENCY: CONTACT FLIGHT SURGEON</span>
        </div>
        <button className="px-4 py-2 bg-red-600 text-white font-bold rounded text-xs">
          PRIORITY UPLINK
        </button>
      </div>
    </div>
  );
};

export const VitalsDetailWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      {/* Callout 1: Timeline Selector */}
      <div className="relative mb-4 p-3 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-between">
        <span className="wf-callout">1</span>
        <div className="text-xs font-mono font-bold">TIMELINE FILTER:</div>
        <div className="flex gap-2">
          {['24 HOURS', '7 DAYS', '30 DAYS (MISSION)'].map((f, i) => (
            <button
              key={i}
              className={`px-3 py-1.5 border-2 rounded text-xs font-mono font-bold ${
                i === 1 ? 'border-slate-800 bg-slate-300 dark:bg-slate-700' : 'border-slate-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Callout 2: Trend Chart Box */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">2</span>
        <div className="flex justify-between items-center mb-3">
          <div className="font-bold text-sm font-mono">HEART RATE & BP TREND (7-DAY BASELINE BAND)</div>
          <span className="text-xs font-mono text-slate-500">Current: 78 bpm</span>
        </div>
        {/* Mock Chart Area */}
        <div className="h-56 border-2 border-slate-300 rounded relative flex items-center justify-center p-4">
          <div className="absolute inset-x-0 top-1/4 h-24 bg-slate-200/50 dark:bg-slate-700/50 border-y border-dashed border-slate-400 flex items-center justify-end pr-2 text-[10px] text-slate-500 font-mono">
            BASELINE ZONE (60 - 75 bpm)
          </div>
          {/* Mock Trend Polyline */}
          <svg className="w-full h-full" viewBox="0 0 400 150">
            <polyline
              fill="none"
              stroke="#475569"
              strokeWidth="3"
              points="0,80 50,85 100,75 150,82 200,68 250,55 300,45 350,38 400,35"
            />
            {/* Threshold line */}
            <line x1="0" y1="40" x2="400" y2="40" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>
          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-red-600">
            ▲ Elevated trend above baseline (Day 139 - 142)
          </div>
        </div>
      </div>

      {/* Callout 3: Simulated vs Entered Legend */}
      <div className="relative mb-4 p-3 border-2 border-dashed border-slate-500 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="wf-callout">3</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-0.5 bg-slate-800 inline-block" />
            <span>Telemetry Wearable (Actual)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-0.5 border-b-2 border-dashed border-slate-500 inline-block" />
            <span>Simulated Baseline Stream</span>
          </div>
        </div>
      </div>

      {/* Callout 4: Manual Logging CTA */}
      <div className="relative p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-between">
        <span className="wf-callout">4</span>
        <div>
          <div className="font-bold text-xs font-mono">MANUAL MEASUREMENT INGESTION</div>
          <div className="text-[10px] text-slate-500">Manual cuff BP, fingerstick glucose, or oral temperature</div>
        </div>
        <button className="px-5 py-3 border-2 border-slate-800 bg-slate-200 dark:bg-slate-700 rounded-lg font-bold font-mono text-xs flex items-center gap-1">
          <Plus size={16} /> + LOG READING
        </button>
      </div>
    </div>
  );
};

export const MusculoskeletalWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column: Exercises and Loss Tracker */}
        <div>
          {/* Callout 1: Exercise Log */}
          <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
            <span className="wf-callout">1</span>
            <div className="font-bold text-xs font-mono uppercase mb-2">COUNTERMEASURE EXERCISE LOG</div>
            <div className="space-y-2">
              <div className="p-2 border rounded flex justify-between items-center text-xs font-mono">
                <span>ARED Deadlift / Squats</span>
                <span className="font-bold">60 min (100% Target)</span>
              </div>
              <div className="p-2 border rounded flex justify-between items-center text-xs font-mono">
                <span>CEVIS Cycle Ergometer</span>
                <span className="text-amber-600 font-bold">Pending Today</span>
              </div>
            </div>
          </div>

          {/* Callout 2: Bone Density Loss Projection */}
          <div className="relative p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
            <span className="wf-callout">2</span>
            <div className="font-bold text-xs font-mono uppercase mb-2">BONE & MUSCLE MASS LOSS ESTIMATOR</div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded overflow-hidden my-2">
              <div className="w-[88%] h-full bg-slate-600" />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>Trabecular Bone Preservation: 94.2%</span>
              <span>Predicted Monthly Loss: -0.6%</span>
            </div>
          </div>
        </div>

        {/* Right Column: Embedded Body Map */}
        {/* Callout 3: Body Map */}
        <div className="relative p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800 flex flex-col items-center">
          <span className="wf-callout">3</span>
          <div className="font-bold text-xs font-mono uppercase mb-2 self-start">EMBEDDED INTERACTIVE BODY MAP</div>
          {/* Simplified Boxy Human Figure */}
          <div className="w-48 h-80 border-2 border-slate-400 rounded-lg relative flex flex-col items-center justify-center p-2 bg-slate-50 dark:bg-slate-800">
            <div className="w-12 h-14 border-2 border-slate-600 rounded-full mb-1 flex items-center justify-center text-[9px] font-mono">HEAD</div>
            <div className="w-24 h-28 border-2 border-slate-600 rounded mb-1 flex items-center justify-center text-[10px] font-mono">CHEST / SPINE</div>
            <div className="w-20 h-16 border-2 border-slate-600 rounded mb-1 flex items-center justify-center text-[10px] font-mono">PELVIS</div>
            <div className="flex gap-2">
              <div className="w-8 h-20 border-2 border-slate-600 rounded text-[9px] font-mono text-center pt-2">L LEG</div>
              <div className="w-8 h-20 border-2 border-slate-600 rounded text-[9px] font-mono text-center pt-2">R LEG</div>
            </div>
            <div className="absolute top-2 right-2 text-[9px] font-mono border px-1 bg-white dark:bg-slate-700">TAP REGION</div>
          </div>
          <div className="text-[10px] text-slate-500 font-mono mt-2 text-center">
            Click any anatomical region to assess microgravity fluid shifts or back pain.
          </div>
        </div>
      </div>
    </div>
  );
};

export const SleepWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      {/* Callout 1: Sleep Chart */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">1</span>
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold text-xs font-mono uppercase">CIRCADIAN SLEEP DURATION & ARCHITECTURE</div>
          <span className="font-mono text-xs font-bold text-amber-600">5.2 hrs (Deficit: -2.3h)</span>
        </div>
        <div className="h-32 border border-slate-300 rounded flex items-end p-2 gap-2">
          {[6.8, 7.2, 6.5, 5.8, 5.4, 5.1, 5.2].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div
                style={{ height: `${(h / 8) * 100}%` }}
                className={`w-full ${h < 6 ? 'bg-amber-500' : 'bg-slate-600'} rounded-t`}
              />
              <span className="text-[9px] font-mono mt-1">D{136 + i}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Callout 2: Cabin Light Spectrum */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">2</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">SSLA CABIN LIGHT SPECTRUM MONITOR</div>
        <div className="flex items-center justify-between p-3 border rounded text-xs font-mono">
          <div>
            <div className="font-bold">CURRENT LIGHT MODE: Melatonin-Depleted (High CCT)</div>
            <div className="text-[10px] text-slate-500">Cabin spectrum set to 480nm blue-peak for phase delay</div>
          </div>
          <span className="px-2 py-1 border border-slate-500 rounded text-xs font-bold">PRE-SLEEP SHIFT: -90m</span>
        </div>
      </div>

      {/* Callout 3: Schedule Recommendations */}
      <div className="relative p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">3</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">CIRCADIAN RESYNCHRONIZATION PROTOCOL</div>
        <ul className="text-xs font-mono space-y-1.5 text-slate-600 dark:text-slate-300">
          <li>• Dim crew quarters illumination to 2700K 2 hours prior to sleep window</li>
          <li>• Lower sleeping quarters temperature to 19.5 °C to assist core cooling</li>
          <li>• Restrict caffeine intake 6 hours prior to scheduled sleep onset</li>
        </ul>
      </div>
    </div>
  );
};

export const MentalWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      {/* Callout 1: 1-5 Scale Mood Buttons */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">1</span>
        <div className="font-bold text-xs font-mono uppercase mb-3">DAILY RAPID MOOD CHECK-IN (1 - 5 SCALE)</div>
        <div className="grid grid-cols-5 gap-2">
          {['1: Depleted', '2: Stressed', '3: Balanced', '4: Focused', '5: Optimal'].map((m, i) => (
            <button
              key={i}
              className={`h-16 border-2 rounded-lg font-mono font-bold text-xs flex flex-col items-center justify-center ${
                i === 1 ? 'border-slate-800 bg-slate-300 dark:bg-slate-700' : 'border-slate-400'
              }`}
            >
              <span className="text-lg mb-1">{['😞', '😟', '😐', '🙂', '🚀'][i]}</span>
              <span className="text-[10px]">{m.split(':')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Callout 2: Stress Trend */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">2</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">7-DAY PSYCHOLOGICAL LOAD & HRV CORRELATION</div>
        <div className="h-32 border border-slate-300 rounded flex items-center justify-center text-xs font-mono text-slate-500">
          [HRV RMSSD: 38ms (Down from 55ms) • Correlated with Sleep Debt]
        </div>
      </div>

      {/* Callout 3: Private Journal */}
      <div className="relative p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">3</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">ENCRYPTED REFLECTION JOURNAL</div>
        <div className="h-20 border border-slate-300 rounded p-2 text-xs font-mono text-slate-500 mb-2">
          "Feeling sensory fatigue from continuous ventilation noise in node 2..."
        </div>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 border-2 border-slate-500 rounded font-mono text-xs">RECORD VOICE LOG</button>
          <button className="px-4 py-2 border-2 border-slate-800 bg-slate-200 dark:bg-slate-700 font-mono text-xs font-bold">SAVE ENTRY</button>
        </div>
      </div>
    </div>
  );
};

export const RadiationWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      {/* Callout 1: Cumulative Gauge */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">1</span>
        <div className="font-bold text-xs font-mono uppercase mb-1">CUMULATIVE MISSION DOSE (SIMULATED)</div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold font-mono">142.8</span>
          <span className="text-xs font-mono text-slate-500">mSv / 600 mSv PEL Cap</span>
        </div>
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
          <div className="w-[24%] h-full bg-slate-600" />
        </div>
      </div>

      {/* Callout 2: Live Dosimetry */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">2</span>
        <div className="font-bold text-xs font-mono uppercase mb-1">REAL-TIME CABIN DOSIMETRY FLUX</div>
        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-2 border rounded">
            <div className="text-slate-500">Node 2 Quarters:</div>
            <div className="text-lg font-bold">18.4 μSv/h (Normal)</div>
          </div>
          <div className="p-2 border rounded">
            <div className="text-slate-500">Unshielded Airlock:</div>
            <div className="text-lg font-bold text-amber-600">42.1 μSv/h (Elevated)</div>
          </div>
        </div>
      </div>

      {/* Callout 3: Safe Zone Guidance */}
      <div className="relative p-4 border-2 border-dashed border-amber-600 rounded-lg bg-amber-50 dark:bg-amber-950">
        <span className="wf-callout">3</span>
        <div className="font-bold text-xs font-mono text-amber-800 dark:text-amber-200 uppercase mb-1">
          SPE SOLAR STORM SAFE-ZONE GUIDANCE
        </div>
        <p className="text-xs font-mono text-slate-600 dark:text-slate-300">
          In case of solar particle event (SPE) warning, retreat to the central water-wall shielded storm shelter.
          Labeled: SIMULATED / ILLUSTRATIVE EDUCATIONAL GUIDANCE.
        </p>
      </div>
    </div>
  );
};

export const AlertsWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      {/* Callout 1: Active Anomaly Queue */}
      <div className="relative mb-4 p-3 border-2 border-dashed border-slate-600 rounded-lg">
        <span className="wf-callout">1</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">ACTIVE ANOMALY TRIAGE QUEUE</div>
        <div className="p-3 border-2 border-red-500 bg-red-50 dark:bg-red-950 rounded-lg mb-2 flex items-start justify-between">
          <div>
            <div className="font-bold text-xs text-red-700 dark:text-red-300">URGENT: Core Temperature Spike (38.4 °C)</div>
            <div className="text-[11px] text-slate-600 dark:text-slate-300">Observed with Resting HR 102 bpm</div>
          </div>
          <span className="px-2 py-0.5 border border-red-600 text-[10px] font-bold rounded">RED</span>
        </div>
      </div>

      {/* Callout 2: Explainable Rule Output */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">2</span>
        <div className="font-bold text-xs font-mono uppercase text-slate-500 mb-1">EXPLAINABLE RULE REASONING</div>
        <div className="p-3 border border-slate-300 rounded text-xs font-mono bg-slate-50 dark:bg-slate-900">
          <div className="font-bold">Rule: INFECTION_FEVER_TRIAD</div>
          <div>Condition: Temp &gt; 38.0°C AND HR &gt; 95bpm AND Sleep &lt; 5h for 2+ consecutive logs.</div>
          <div className="mt-1 text-slate-500">Source: NASA-STD-3001 Clinical Guidelines (Prototype Rule)</div>
        </div>
      </div>

      {/* Callout 3: Step-by-Step Protocol */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">3</span>
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold text-xs font-mono uppercase">EMERGENCY PROTOCOL STEP 1 / 4</div>
          <span className="text-xs font-mono">FEVER MANAGEMENT</span>
        </div>
        <div className="p-4 border border-slate-400 rounded text-xs font-mono leading-relaxed mb-3">
          1. Cease physical countermeasure exercise immediately. Rest in crew quarters.<br />
          2. Consume 500 mL electrolyte fluid solution.<br />
          3. Re-check core body temperature in 30 minutes with tympanic thermometer.
        </div>
        <div className="flex justify-between">
          <button className="px-4 py-2 border rounded text-xs font-mono opacity-50">Previous</button>
          <button className="px-6 py-3 border-2 border-slate-800 bg-slate-300 dark:bg-slate-700 font-bold text-xs font-mono rounded">
            NEXT STEP (64px TARGET)
          </button>
        </div>
      </div>

      {/* Callout 4: Contact Flight Surgeon */}
      <div className="relative p-3 border-2 border-dashed border-red-500 rounded-lg flex items-center justify-between text-xs font-mono bg-red-100 dark:bg-red-950">
        <span className="wf-callout">4</span>
        <span className="font-bold text-red-800 dark:text-red-200">FLIGHT SURGEON UPLINK (QUEUED TO MARS BUFFER)</span>
        <button className="px-4 py-2 bg-red-600 text-white font-bold rounded">SEND TELEMETRY</button>
      </div>
    </div>
  );
};

export const GroundControlWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <div>
          <h2 className="font-bold font-mono text-sm">GROUND CONTROL & FLIGHT SURGEON CONSOLE</h2>
          <div className="text-[10px] text-slate-500 font-mono">MISSION: ARES-V MARS EXPEDITION • DSN ANTENNA 43 (CANBERRA)</div>
        </div>
        <span className="px-2 py-1 border border-slate-500 rounded text-xs font-mono">ROLE: FLIGHT_SURGEON</span>
      </div>

      {/* Callout 1: Multi-Crew Telemetry Table */}
      <div className="relative mb-4 p-3 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">1</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">MULTI-ASTRONAUT FLEET ROSTER</div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b">
                <th className="p-2">Crew</th>
                <th className="p-2">Role</th>
                <th className="p-2">RHR</th>
                <th className="p-2">BP</th>
                <th className="p-2">Sleep</th>
                <th className="p-2">Triage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-amber-50 dark:bg-amber-950">
                <td className="p-2 font-bold">Dr. S. Connor</td>
                <td className="p-2">Commander</td>
                <td className="p-2 text-amber-700">78 bpm</td>
                <td className="p-2">122/82</td>
                <td className="p-2 text-amber-700">5.2h</td>
                <td className="p-2 font-bold text-amber-700">ATTENTION</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-bold">Maj. A. Vance</td>
                <td className="p-2">Engineer</td>
                <td className="p-2">62 bpm</td>
                <td className="p-2">115/74</td>
                <td className="p-2">7.4h</td>
                <td className="p-2 text-green-700">NORMAL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Callout 2: Comparison Chart */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">2</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">FLEET-WIDE COMPARATIVE TREND OVERLAY</div>
        <div className="h-32 border border-slate-300 rounded flex items-center justify-center text-xs font-mono text-slate-500">
          [Recharts Multi-Line Comparison: Crew 1 vs Crew 2 vs Fleet Baseline]
        </div>
      </div>

      {/* Callout 3: Comm Delay Status */}
      <div className="relative p-3 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800 flex justify-between items-center text-xs font-mono">
        <span className="wf-callout">3</span>
        <div>
          <div className="font-bold">ONE-WAY LIGHT TIME DELAY: 14m 24s</div>
          <div className="text-[10px] text-slate-500">Spacecraft distance: 1.72 AU • Queued packets waiting: 0</div>
        </div>
        <button className="px-3 py-1.5 border rounded font-bold">TEST HANDSHAKE</button>
      </div>
    </div>
  );
};

export const SettingsWireframe: React.FC<WireframeProps> = ({ deviceMode }) => {
  return (
    <div className="p-4 bg-slate-100 dark:bg-slate-900 min-h-[640px] text-slate-800 dark:text-slate-200">
      {/* Callout 1: Display Modes */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">1</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">CABIN DISPLAY THEME & LIGHTING</div>
        <div className="grid grid-cols-3 gap-2">
          {['Light (Normal)', 'Dark (Cabin Sleep)', 'High-Contrast'].map((t, i) => (
            <button key={i} className={`h-14 border-2 rounded text-xs font-mono font-bold ${i === 0 ? 'border-slate-800 bg-slate-300 dark:bg-slate-700' : 'border-slate-400'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Callout 2: Font Scaling */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">2</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">GLOVE-FRIENDLY TEXT SIZE SCALE</div>
        <div className="flex gap-2">
          {['100% (Default)', '115% (Large)', '125% (Visor / Suit)'].map((s, i) => (
            <button key={i} className="flex-1 py-3 border rounded text-xs font-mono font-bold">
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Callout 3: Wearable Pairing */}
      <div className="relative mb-4 p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">3</span>
        <div className="font-bold text-xs font-mono uppercase mb-1">SENSOR HARNESS PAIRING (WEB BLUETOOTH STUB)</div>
        <div className="flex justify-between items-center text-xs font-mono p-2 border rounded">
          <span>AstroSkin Bio-Harness (Simulated BLE)</span>
          <span className="text-green-600 font-bold">CONNECTED</span>
        </div>
      </div>

      {/* Callout 4: Privacy & Sharing */}
      <div className="relative p-4 border-2 border-dashed border-slate-600 rounded-lg bg-white dark:bg-slate-800">
        <span className="wf-callout">4</span>
        <div className="font-bold text-xs font-mono uppercase mb-2">TELEMETRY PRIVACY BOUNDARIES</div>
        <div className="space-y-2 text-xs font-mono">
          <label className="flex items-center justify-between p-2 border rounded">
            <span>Mandatory Life Support Vitals (Public to Surgeon)</span>
            <span className="font-bold text-green-700">ENABLED</span>
          </label>
          <label className="flex items-center justify-between p-2 border rounded">
            <span>Private Psychological Journal (Local Encryption)</span>
            <span className="font-bold text-blue-700">LOCKED</span>
          </label>
        </div>
      </div>
    </div>
  );
};
