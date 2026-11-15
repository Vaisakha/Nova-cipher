# AstroVitals: Low-Fidelity Wireframes & UX Specification (Phase 1)
**NASA Space Apps Challenge - Deep-Space Astronaut Health Monitoring & Early Warning System**
*STATUS: DRAFT FOR TEAM REVIEW*

---

## 1. Design Constraints & Human Factors Rationale

### 1.1 Physical & Cognitive Environment
- **Microgravity & Fluid Shifts**: Cephalad fluid shifts increase intracranial pressure and alter vestibular coordination. Interfaces must avoid delicate gestures or precision dragging.
- **Pressurized Extravehicular / Intravehicular Gloves**: Thick gloves eliminate fine-motor precision. Touch targets are strictly dimensioned to:
  - Minimum standard touch target: **56 px × 56 px**
  - Primary mission actions: **64 px × 64 px**
  - Minimum element separation: **12 px**
- **Zero Hover / Multi-Touch Reliance**: Microgravity floating tablets cannot rely on mouse hovers or complex multi-finger pinches. All interactions are discrete single taps.
- **Triple-Redundancy Status Signaling**: Color alone is insufficient due to variable cabin illumination, red-light dark-adaptation cycles, and potential visual acuity loss (SANS). Every alert utilizes:
  1. **Color** (Green / Amber / Red with tint backgrounds)
  2. **Icon** (CheckCircle / AlertTriangle / AlertOctagon)
  3. **Explicit Text Label** ("Normal" / "Attention" / "Urgent")

---

## 2. Shared Interface Components

| Component | Dimensions / Token | Accessibility & Operational Purpose |
| :--- | :--- | :--- |
| **Top Status Bar** | Height 56px, `--surface` | Sticky header with Astronaut Call sign, Mission Flight Day, Comm Link delay/queue status chip, Battery telemetry, and Cabin Lighting toggle. |
| **Bottom Navigation** | Height 64px, `--surface` | 5 core primary destinations (`Home`, `Vitals`, `Body`, `Alerts`, `More`) with persistent emergency button. |
| **Emergency Contact** | Min 64px, `--status-red` | Persistent red "Contact Flight Surgeon" button on every screen. Automatically opens priority telemedicine uplink that packets to IndexedDB during offline link loss. |
| **StatusBadge** | Rounded-full, WCAG AA | Triple-redundant pill (Color + Icon + Label) for instant glanceable assessment. |
| **VitalCard** | Rounded 16px, `--surface` | Glanceable metric with 7-day baseline comparison, trend vector, and simulated telemetry badge. |
| **AlertBanner** | Border 2px, status tint | Explainable rule banner with "Why This Fired" clinical reasoning and one-tap emergency protocol launcher. |
| **SyncIndicator** | Dynamic status chip | Displays Synced (Green), Queued (Amber), or Link Offline (Red), showing one-way light delay and pending packet count. |

---

## 3. Screen Wireframe Specifications & Numbered Callout Legends

### Screen 1: Onboarding & Crew Selection (`/onboarding`)
- **Device Support**: Mobile (390px) & Tablet (1024px)
- **Purpose**: Authenticates crew members and establishes initial offline cryptographic tokens.

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | Prototype Disclaimer Banner | Informs crew that the platform is a spaceflight research simulation, not an FDA-certified medical device. | Human-System Integration / Bioethics | High contrast text banner. |
| **[2]** | Large Avatar Selection Grid | Allows 1-tap switching between crew members (Commander, Flight Engineer, Science Officer). | Cognitive Workload Reduction | Oversized 72px tiles. |
| **[3]** | Biometric / PIN NumPad | Tactile simulated biometric touchpoint or large 64px numeric PIN keys. | Data Security & Individual Baselines | Minimum 64px height with 12px gaps. |
| **[4]** | Offline Cache Notice | Verifies that local IndexedDB store contains mission baseline data. | Distance from Earth (Autonomous Ops) | Glanceable footer chip. |

---

### Screen 2: Home Mission Health Dashboard (`/`)
- **Device Support**: Mobile (390px) & Tablet (1024px)
- **Purpose**: Central glanceable cockpit for astronaut health status, immediate tasks, and active alerts.

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | Sticky Mission Header | Shows crew callsign, mission flight day (e.g. Day 142 Mars Transit), and Earth comm delay. | Distance from Earth (Comm Latency) | Sticky top bar with quick link-loss toggle. |
| **[2]** | Overall Triage Badge | High-visibility status indicator showing overall mission fitness. | Comprehensive Physiological State | Triple redundant (Green/Amber/Red). |
| **[3]** | Active Anomaly Alert Banner | Surfaces active physiological deviations with explainable trigger rules. | Early Warning (Infection, SANS, Hypoxia) | Full-width card with 56px action button. |
| **[4]** | Glanceable Vitals Grid | High-contrast cards for HR, SpO2, Core Temp, Sleep, and Cabin Radiation. | Cardiovascular Deconditioning, Hypoxia, Radiation | 56px tap target opening detailed charts. |
| **[5]** | Today's Countermeasure Checklist | Daily task tracker for mandatory 2.5h ARED/CEVIS exercise and hydration. | Microgravity Bone & Muscle Atrophy | Large checkbox targets with clear states. |
| **[6]** | Contact Flight Surgeon | Persistent red emergency action bar. | Emergency Medical Protocol | Always accessible; >=64px target. |

---

### Screen 3: Vitals Detail & Scrubbable Trends (`/vitals`)
- **Device Support**: Mobile (390px) & Tablet (1024px)
- **Purpose**: In-depth physiological telemetry trends with baseline comparison bands.

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | Scrubbable Timeline Selector | 24h, 7d, and 30d mission duration filters. | Longitudinal Physiological Adaptation | 56px segmented button controls. |
| **[2]** | Telemetry Chart with Baseline Band | Recharts visualization showing safe zone band and threshold limits. | Autonomic Shift & Orthostatic Intolerance | Wide touch scrubbing area. |
| **[3]** | Simulated vs Entered Legend | Distinguishes sensor hardware stream (solid) from simulator engine (dashed). | Data Integrity & Clinical Provenance | Clear visual key. |
| **[4]** | Manual Vital Sign Logging | Allows logging blood pressure cuff or glucose fingerstick readings. | Direct Telemetry Ingestion | Prominent 64px "+ Log Reading" button. |

---

### Screen 4: Musculoskeletal & Bone Health (`/musculoskeletal`)
- **Device Support**: Mobile (390px) & Tablet (1024px)
- **Purpose**: Mitigates 1% to 1.5% monthly bone mineral loss and postural spine elongation.

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | ARED & CEVIS Exercise Log | Logs daily resistive loads and cycle ergometer aerobic intervals. | Microgravity Bone Density & Muscle Atrophy | 1-tap quick logging chips. |
| **[2]** | Bone Mineral Loss Estimator | Predictive model estimating bone mass loss vs countermeasure compliance. | Osteopenia & Renal Stone Risk | Color-coded progress gauge. |
| **[3]** | Embedded Interactive Body Map | Clickable human figure to inspect back pain, spinal elongation, or joint soreness. | Spinal Elongation & Postural Fatigue | Large anatomical zones with guidance drawer. |

---

### Screen 5: Sleep & Circadian Rhythm (`/sleep`)
- **Device Support**: Mobile (390px) & Tablet (1024px)
- **Purpose**: Supports circadian alignment in windowless cabins with 16 orbital sunrises daily.

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | Sleep Stage & Architecture Graph | Tracks REM, deep, and light sleep duration against baseline. | Circadian Desynchronization & Fatigue | High-contrast stacked bar chart. |
| **[2]** | SSLA Dynamic Lighting Monitor | Reports current cabin light spectrum (Blue-enriched vs Blue-depleted). | Melatonin Suppression & Sleep Onset | Color temperature status card. |
| **[3]** | Pre-Sleep Shift Guidance | Non-pharmacological recommendations (dimming lights, cabin cooling to 19.5°C). | Cognitive Performance Preservation | Bullet list with checkbox acknowledgments. |

---

### Screen 6: Mental Health & Stress Monitoring (`/mental`)
- **Device Support**: Mobile (390px) & Tablet (1024px)
- **Purpose**: Rapid psychological self-assessment and long-duration isolation tracking.

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | Oversized 1-5 Mood Scale | Rapid daily mood rating (Depleted, Stressed, Balanced, Focused, Optimal). | Isolation and Confinement (B-Med) | 64px round icon buttons. |
| **[2]** | 7-Day Stress & HRV Trend | Correlates psychological stress with autonomic heart rate variability. | Mission Stress & Interpersonal Friction | Multi-band trend chart. |
| **[3]** | Encrypted Journal & Voice Memo | Private psychological release with local client-side encryption. | Psychological Autonomy & Catharsis | Large "Record Voice Note" action. |

---

### Screen 7: Space Radiation Exposure & Dosimetry (`/radiation`)
- **Device Support**: Mobile (390px) & Tablet (1024px)
- **Purpose**: Continuous dosimetry tracking against NASA Permissible Exposure Limits (PEL).

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | Cumulative Mission Dose Meter | Tracks total mSv received against mission and career safety limits. | Space Radiation (GCR & Trapped Belts) | Radial/linear progress meter. |
| **[2]** | Real-Time Cabin Flux (μSv/h) | Silicon detector readings across crew modules and airlocks. | Solar Particle Events (SPE) | Live number display with color status. |
| **[3]** | Safe-Haven Shelter Navigation | Emergency instructions to retreat to water-wall shielded storm shelter. | Acute Radiation Sickness (ARS) Prevention | High-priority educational alert card. |

---

### Screen 8: Alerts, Anomaly Explanation & Protocols (`/alerts`)
- **Device Support**: Mobile (390px) & Tablet (1024px)
- **Purpose**: Clinical decision support with explainable trigger rules and step-by-step guidance.

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | Active Anomaly Queue | Prioritized list of physiological anomalies. | Clinical Decompensation | Expandable cards with tap targets. |
| **[2]** | "Why This Fired" Rationale | Transparent clinical rule criteria and observed data points. | Decision Support Explainability | High contrast text box with rule citation. |
| **[3]** | One-Step-Per-Screen Flow | Distraction-free medical protocol stepper (e.g. Fever, Chest Pain, Fainting). | High-Stress Emergency Execution | Massive 64px "Next Step" button. |
| **[4]** | One-Tap Surgeon Telemetry Packet | Encapsulates current vitals and symptoms into priority transmission packet. | Telemedicine Integration | Persistent red action bar. |

---

### Screen 9: Ground Control & Flight Surgeon View (`/ground-control`)
- **Device Support**: Tablet (1024px) & Desktop Console (1440px)
- **Purpose**: Earth-based medical console for multi-astronaut fleet monitoring and delay simulation.

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | Multi-Astronaut Fleet Roster | Roster table showing all expedition members with vital snapshots and triage tags. | Fleet Telemetry Overview | Dense table layout with row drawers. |
| **[2]** | Cross-Crew Comparative Trends | Multi-line overlay comparing astronaut vitals against mission average. | Cabin Environmental Anomaly Detection | Multi-series Recharts line chart. |
| **[3]** | Deep Space Comm Delay Monitor | Real-time tracking of DSN link latency (e.g. 14 min 24 sec) and telemetry buffer. | Deep Space Comm Synchronization | Telemetry buffer monitor widget. |

---

### Screen 10: Settings, Wearable Pairing & Accessibility (`/settings`)
- **Device Support**: Mobile (390px) & Tablet (1024px)
- **Purpose**: System configuration, display accommodations, and simulated sensor pairing.

| Callout # | Element | Purpose | NASA Hazard / Indicator Supported | Ergonomics & Glove Note |
| :---: | :--- | :--- | :--- | :--- |
| **[1]** | Display Theme Modes | Light (Clean clinical), Dark (Low-light cabin sleep), High-Contrast (Visor glare). | Cabin Lighting & Visual Ergonomics | 56px mode switcher tiles. |
| **[2]** | Font Size Scale Adjuster | Scales typography by 100%, 115%, or 125% for spacesuit visor readability. | Microgravity Ergonomics | 56px segmented buttons. |
| **[3]** | Wearable Pairing (BLE Stub) | Simulates pairing with AstroSkin chest harness or smart watch. | Continuous Telemetry Ingestion | Status indicator with test sync. |
| **[4]** | Telemetry Privacy Controls | Distinguishes public life-support telemetry from private psychological logs. | Crew Privacy & Autonomy | Accessible switches with clear labels. |

---
*DOCUMENT VERIFIED FOR PHASE 1 REVIEW*
