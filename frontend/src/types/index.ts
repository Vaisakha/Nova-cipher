export type HealthStatus = 'green' | 'amber' | 'red';
export type SyncState = 'synced' | 'queued' | 'offline';
export type UserRole = 'astronaut' | 'flight_surgeon' | 'mission_control';

export interface CrewMember {
  id: string;
  name: string;
  callsign: string;
  role: string;
  missionDay: number;
  missionPhase: string; // e.g. "Mars Transit Day 142"
  overallStatus: HealthStatus;
  avatarUrl?: string;
  biometricId?: string;
}

export interface VitalSign {
  id: string;
  label: string;
  value: number | string;
  secondaryValue?: number | string;
  unit: string;
  status: HealthStatus;
  trend: 'up' | 'down' | 'stable';
  baseline: string;
  isSimulated?: boolean;
  updatedAt: string;
}

export interface BloodPressure {
  sys: number;
  dia: number;
}

export interface HealthMeasurement {
  id?: string;
  astronautId: string;
  date: string;
  timestamp: string;
  environment: 'iss' | 'mars_transit' | 'moon_surface' | 'mars_surface';
  heartRate?: number;
  bloodPressure?: BloodPressure;
  glucose?: number;
  temperature?: number;
  respiration?: number;
  spO2?: number;
  sleepHours?: number;
  sleepQuality?: number; // 1-5
  mood?: number; // 1-5
  stress?: number; // 1-5
  radiationDoseRate?: number; // uSv/h
  cumulativeRadiation?: number; // mSv
  symptoms?: string[];
  notes?: string;
  isSimulated?: boolean;
  syncStatus?: SyncState;
}

export interface AlertItem {
  id: string;
  astronautId: string;
  timestamp: string;
  severity: HealthStatus;
  title: string;
  ruleTriggered: string;
  valuesObserved: string;
  rationale: string;
  recommendedAction: string;
  protocolId?: string;
  acknowledged: boolean;
  isSimulated?: boolean;
}

export interface ProtocolStepItem {
  stepNumber: number;
  title: string;
  instruction: string;
  cautionNotice?: string;
  vitalToCheck?: string;
  isTerminal?: boolean;
}

export interface EmergencyProtocol {
  id: string;
  title: string;
  condition: string;
  severity: HealthStatus;
  steps: ProtocolStepItem[];
  educationalDisclaimer: string;
}

export interface SyncTelemetry {
  state: SyncState;
  lastSyncTime: string;
  queuedCount: number;
  signalDelaySeconds: number; // e.g., 840s (14 mins)
  simulatedLinkLoss: boolean;
  bandwidthKbps?: number;
}

export interface WireframeCallout {
  number: number;
  element: string;
  purpose: string;
  hazardOrIndicator: string;
  gloveAccessibilityNote?: string;
}

export interface WireframeScreenData {
  id: string;
  title: string;
  route: string;
  description: string;
  callouts: WireframeCallout[];
}
