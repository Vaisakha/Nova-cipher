# AstroVitals: Role-Based Navigation Architecture & Flow (Phase 1)
**NASA Space Apps Challenge - Deep-Space Astronaut Health Monitoring & Early Warning System**
*STATUS: DRAFT FOR TEAM REVIEW*

---

## 1. Role-Based Entry Points

### 1.1 Primary Persona: Astronaut (Flight Crew)
- **Primary Form Factor**: Mobile (in-suit / floating) & Tablet (crew workstation).
- **Core Priority**: Rapid glanceable status, mandatory countermeasure logging, local anomaly explanation, zero-network autonomy, and 1-tap emergency surgeon link.
- **Entry Point**: `/onboarding` (Crew profile + PIN) -> `/` (Home Mission Health Cockpit).

### 1.2 Secondary Persona: Flight Surgeon (Earth Ground Station)
- **Primary Form Factor**: Tablet / Desktop Console.
- **Core Priority**: Longitudinal trend analysis, 7-day baseline deviations, multi-astronaut fleet triage, remote countermeasure prescription, and managing latency-delayed consult queues.
- **Entry Point**: `/ground-control` (Fleet Overview & Surgeon Telemetry Workspace).

### 1.3 Tertiary Persona: Mission Control (Flight Operations)
- **Primary Form Factor**: Large Wall Display / Desktop Workstation.
- **Core Priority**: DSN comm link state, signal delay telemetry (e.g. 14m 24s), telemetry buffer capacity, and cabin environmental telemetry (radiation/temperature).
- **Entry Point**: `/ground-control` (with Telemetry Link Monitor focus).

---

## 2. Mermaid Navigation Flow Diagram

```mermaid
flowchart TD
    %% Role Entry Points
    subgraph RoleEntry [Mission Authentication & Role Routing]
        Start([User Launches AstroVitals]) --> RoleCheck{Select Role}
        RoleCheck -->|Astronaut| AuthCrew[Onboarding & PIN Pad\n/onboarding]
        RoleCheck -->|Flight Surgeon| AuthSurgeon[Ground Station Login\n/ground-control]
        RoleCheck -->|Mission Control| AuthOps[Flight Ops Telemetry Tap\n/ground-control]
    end

    %% Primary Astronaut Navigation Loop
    subgraph AstronautWorkflow [Primary Astronaut In-Flight Workflow]
        AuthCrew --> Home[Home Mission Health Cockpit\n/]
        
        Home --> Vitals[Vitals Detail & Scrubbable Trends\n/vitals]
        Home --> Body[Musculoskeletal & Interactive Body Map\n/body]
        Home --> Sleep[Sleep & Circadian Rhythm\n/sleep]
        Home --> Mental[Mental Health & Stress Check-in\n/mental]
        Home --> Radiation[Radiation Exposure & Dosimetry\n/radiation]
        Home --> Alerts[Alerts, Anomaly Explanation & Protocols\n/alerts]
        Home --> Settings[Settings, Hardware Pairing & A11y\n/settings]
        Home --> Wireframes[/wireframes Architecture Review]
        
        %% Global Persistent Shortcut
        Home -.-> ContactSurgeon{{"Contact Flight Surgeon Shortcut\n(Persistent Red Button)"}}
        Vitals -.-> ContactSurgeon
        Body -.-> ContactSurgeon
        Alerts -.-> ContactSurgeon
        Settings -.-> ContactSurgeon
    end

    %% Offline Queue & Sync State Machine
    subgraph OfflineSyncEngine [Deep-Space Offline-First Telemetry Engine]
        ContactSurgeon --> CommState{Is Ground Link Available?}
        CommState -->|Link Severed / Delay| IndexedDBQueue[(IndexedDB Local Telemetry Queue)]
        CommState -->|Link Handshake Active| DSNUplink[Deep Space Network Uplink Packet]
        IndexedDBQueue -->|Ground Pass Acquired| DSNUplink
    end

    %% Ground Control Navigation
    subgraph GroundSurgeonWorkflow [Flight Surgeon & Ground Control Console]
        AuthSurgeon --> GroundControl[Ground Control Fleet Roster\n/ground-control]
        AuthOps --> GroundControl
        
        GroundControl --> CrewDetail[Individual Astronaut 30d Baseline Explorer]
        GroundControl --> FleetTrends[Cross-Crew Multi-Trend Overlay]
        GroundControl --> CommDelayMonitor[DSN Delay & Packet Buffer Monitor]
        
        DSNUplink --> GroundControl
    end

    classDef primary fill:#2F4B7C,stroke:#4A6FA5,stroke-width:2px,color:#fff;
    classDef emergency fill:#C0392B,stroke:#922B21,stroke-width:2px,color:#fff;
    classDef offline fill:#9A6200,stroke:#78350F,stroke-width:2px,color:#fff;
    
    class Home,Vitals,Body,Alerts,GroundControl primary;
    class ContactSurgeon emergency;
    class IndexedDBQueue,CommState offline;
```

---

## 3. Persistent Global Navigation Rules

1. **Top Status Bar**:
   - Always visible at top of viewport.
   - Crew identity, flight day, overall health badge, battery percentage, sync status chip, and theme toggle.
2. **Bottom Navigation**:
   - Strictly 5 tabs (`Home`, `Vitals`, `Body`, `Alerts`, `More`).
   - Accommodates floating thumb reachability on mobile and fixed dock on tablet.
3. **Emergency Surgeon Shortcut**:
   - Anchored on every screen with distinct red styling (`--status-red`) and heartbeat pulse.
   - Tapping it never blocks navigation or fails if offline; it immediately opens the telemetry packet dispatcher.

---
*DOCUMENT VERIFIED FOR PHASE 1 REVIEW*
