# Wiring Configurations

Each output supports individually configurable inverted logic (NO / NC).

!!! warning "Heater Power Control"
    Regardless of configuration, the HR output must never directly switch a power heater. Use an external power contactor (see Installation section).

## 4.1 No Valve — Fan Coil Unit Without Control Valve

| Config | Description | Status | Outputs |
|--------|-------------|--------|---------|
| 1 | Fan 3-speed | ✓ OK | RL1=FH, RL2=FM, RL3=FL |
| 2 | Fan 0-10V | ✓ OK | DAC3=Fan |

## 4.2 No Valve + 2-wire (Heater) — Fan Coil Unit Without Valve, With Electric Heating Element

| Config | Description | Status | Outputs |
|--------|-------------|--------|---------|
| 3 | Fan 3S / Heater ON/OFF | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL5=HR |
| 4 | Fan 3S / Heater 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC3=HR |
| 5 | Fan 0-10V / Heater ON/OFF | ✓ OK | DAC3=Fan, RL5=HR |
| 6 | Fan 0-10V / Heater 0-10V | ✓ OK | DAC3=Fan, DAC2=HR |

## 4.3 2-Pipe (2T) — Fan Coil Unit With 1 Valve

Single valve always connected to HV: RL4 for ON/OFF, DAC1 for 0-10V.

| Config | Description | Status | Outputs |
|--------|-------------|--------|---------|
| 7 | Fan 3S / Valve ON/OFF | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL4=HV |
| 8 | Fan 3S / Valve 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC1=HV |
| 9 | Fan 0-10V / Valve ON/OFF | ✓ OK | DAC3=Fan, RL4=HV |
| 10 | Fan 0-10V / Valve 0-10V | ✓ OK | DAC1=HV, DAC3=Fan |

## 4.4 2-Pipe + 2-wire (Heater) — 2T Fan Coil Unit With Electric Heating Element

| Config | Description | Status | Outputs |
|--------|-------------|--------|---------|
| 11 | Fan 3S / Valve ON/OFF / Heater ON/OFF | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL4=HV, RL5=HR |
| 12 | Fan 3S / Valve ON/OFF / Heater 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL4=HV, DAC3=HR |
| 13 | Fan 3S / Valve 0-10V / Heater ON/OFF | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC1=HV, RL5=HR |
| 14 | Fan 3S / Valve 0-10V / Heater 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC1=HV, DAC3=HR |
| 15 | Fan 0-10V / Valve ON/OFF / Heater ON/OFF | ✓ OK | DAC3=Fan, RL4=HV, RL5=HR |
| 16 | Fan 0-10V / Valve ON/OFF / Heater 0-10V | ✓ OK | DAC3=Fan, RL4=HV, DAC2=HR |
| 17 | Fan 0-10V / Valve 0-10V / Heater ON/OFF | ✓ OK | DAC1=HV, DAC3=Fan, RL5=HR |
| 18 | Fan 0-10V / Valve 0-10V / Heater 0-10V | ✓ OK | DAC1=HV, DAC3=Fan, DAC2=HR |

## 4.5 4-Pipe (4T) — Fan Coil Unit With 2 Independent Valves (Hot + Cold)

| Config | Description | Status | Outputs |
|--------|-------------|--------|---------|
| 19 | Fan 3S / Valves ON/OFF | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL4=HV, RL5=CV |
| 20 | Fan 3S / Valves 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC1=HV, DAC2=CV |
| 21 | Fan 0-10V / Valves ON/OFF | ✓ OK | DAC3=Fan, RL4=HV, RL5=CV |
| 22 | Fan 0-10V / Valves 0-10V | ✓ OK | DAC1=HV, DAC2=CV, DAC3=Fan |

## 4.6 4-Pipe + 2-wire (Heater) — 4T Fan Coil Unit With Electric Heating Element

| Config | Description | Status | Outputs |
|--------|-------------|--------|---------|
| 23 | Fan 3S / Valves ON/OFF / Heater ON/OFF | ✗ N/S | 5 relays used, none free for HR |
| 24 | Fan 3S / Valves ON/OFF / Heater 0-10V | ✓ OK | RL1-3=Fan, RL4=HV, RL5=CV, DAC3=HR |
| 25 | Fan 3S / Valves 0-10V / Heater ON/OFF | ✓ OK | RL1-3=Fan, DAC1=HV, DAC2=CV, RL5=HR |
| 26 | Fan 3S / Valves 0-10V / Heater 0-10V | ✓ OK | RL1-3=Fan, DAC1=HV, DAC2=CV, DAC3=HR |
| 27 | Fan 0-10V / Valves ON/OFF / Heater ON/OFF | ✓ OK | DAC3=Fan, RL4=HV, RL5=CV, RL3=HR |
| 28 | Fan 0-10V / Valves ON/OFF / Heater 0-10V | ✓ OK | DAC3=Fan, RL4=HV, RL5=CV, DAC2=HR |
| 29 | Fan 0-10V / Valves 0-10V / Heater ON/OFF | ✓ OK | DAC1=HV, DAC2=CV, DAC3=Fan, RL5=HR |
| 30 | Fan 0-10V / Valves 0-10V / Heater 0-10V | ✗ N/S | 3 DACs used, none free for HR |

**Status legend:**
- ✓ OK = Configuration supported
- ✗ N/S = Configuration not supported. If selected, outputs remain disabled for safety.

## External Sensors (S1, S2)

S1 and S2 inputs accept two types of sensors, configurable from the screen or AGRID server:

**Analog sensor (thermistor):** Remote temperature measurement (supply air, outdoor, etc.)

**Dry contact sensor:** Window open detector, presence badge, PIR detector, etc.

!!! note
    Sensors requiring external power must have their own power supply with appropriate galvanic isolation.
