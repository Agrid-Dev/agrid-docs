# Wiring Configurations

This section provides complete wiring configurations for the AGR25-01 thermostat across all supported HVAC system types. Select the configuration matching your system setup.

## Legend & Control Types

### Function Abbreviations

| Abbreviation | Function | Control Method |
|--------------|----------|-----------------|
| **FH** | Fan High Speed | Relay control (RL1/RL2/RL3) |
| **FM** | Fan Medium Speed | Relay control (RL1/RL2/RL3) |
| **FL** | Fan Low Speed | Relay control (RL1/RL2/RL3) |
| **Fan** | Proportional Fan | 0-10V analog output (DAC3) |
| **HV** | Hot Water Valve (Heating) | Relay (RL4) or 0-10V (DAC1) |
| **CV** | Cold Water Valve (Cooling) | Relay (RL5) or 0-10V (DAC2) |
| **HR** | Electric Heater Relay | Relay output (RL1/RL2/RL3/RL4/RL5) |
| **N/S** | Not Supported | Configuration not applicable |

### Control Output Types

The AGR25-01 provides two control methods for HVAC devices:

#### Relay Control (RL1-RL5)
- **Type:** SPST-NO (Single Pole Single Throw - Normally Open)
- **Contact Rating:** Maximum 5A inductive load
- **Logic:** Invertible (configurable as NO=closing contact or NC=opening contact)
- **Application:** On/Off fan speeds, solenoid valves, electric heaters (via external contactor)
- **Advantage:** Simple, reliable, no voltage requirement from load device

#### Proportional Control (DAC1-DAC3)
- **Type:** 0-10V analog output
- **Resolution:** High-resolution proportional control
- **Reference:** Floating output (requires external return via "B" terminal)
- **Logic:** Invertible (0V=OFF to 10V=ON, or reverse configurable)
- **Application:** Proportional solenoid valves, variable fan speed drives
- **Advantage:** Smooth, stepless control for advanced comfort

---

## Configuration Groups

### Group 1: Without Valve (Fan Only)

These configurations control fan speed in systems without heating or cooling valve control.

#### Configuration #1: Fan On/Off (3-Speed Relay Control)

**Suitable for:** Systems with 3-speed fan and no valve control

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | FH | Fan High Speed |
| **RL2** | FM | Fan Medium Speed |
| **RL3** | FL | Fan Low Speed |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | Not Used | — |
| **DAC2** | Not Used | — |
| **DAC3** | Not Used | — |

**Control Behavior:** User selects Low/Medium/High fan speed on touchscreen or via AGRID app. Only one relay energizes at a time. Fan operates continuously once enabled.

---

#### Configuration #2: Proportional Fan (0-10V Control)

**Suitable for:** Systems with 0-10V proportional fan speed control

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | Not Used | — |
| **RL2** | Not Used | — |
| **RL3** | Not Used | — |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | Not Used | — |
| **DAC2** | Not Used | — |
| **DAC3** | Fan | Proportional Fan Speed (0-10V) |

**Control Behavior:** DAC3 outputs 0-10V signal proportional to selected fan speed. At 0V fan runs at minimum; at 10V fan runs at maximum speed. Smooth stepless control for comfort and energy efficiency.

**Return Connection:** Connect return wire from fan drive's low voltage return to "B" terminal.

---

### Group 2: Without Valve + Electric Heater

These configurations add electric heater capability to fan-only systems.

#### Configuration #3: Fan On/Off + Heater Relay

**Suitable for:** 3-speed fan with electric heater element (via external contactor)

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | FH | Fan High Speed |
| **RL2** | FM | Fan Medium Speed |
| **RL3** | FL | Fan Low Speed |
| **RL4** | HR | Heater (via external contactor) |
| **RL5** | Not Used | — |
| **DAC1** | Not Used | — |
| **DAC2** | Not Used | — |
| **DAC3** | Not Used | — |

**Control Behavior:** Heat mode energizes RL4 (external contactor), which switches the heater element ON. Fan speed selected independently. In Cool/Fan-Only modes, RL4 is de-energized.

!!!danger "Heater Safety"
    **RL4 cannot directly switch the heater element.** The relay output must connect to an external contactor rated for the heater's electrical load (often 3-5kW, requiring 16-32A contacts). Failure to use an external contactor will cause heater relay failure and fire hazard.

---

#### Configuration #4: Proportional Fan + Heater Relay

**Suitable for:** Proportional fan with electric heater element

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | Not Used | — |
| **RL2** | Not Used | — |
| **RL3** | Not Used | — |
| **RL4** | HR | Heater (via external contactor) |
| **RL5** | Not Used | — |
| **DAC1** | Not Used | — |
| **DAC2** | Not Used | — |
| **DAC3** | Fan | Proportional Fan Speed (0-10V) |

**Control Behavior:** DAC3 provides proportional fan control. RL4 switches heater contactor ON/OFF in Heat mode. Proportional fan speed ramps smoothly during heating.

---

#### Configuration #5: Fan On/Off + Heater (Proportional via DAC1)

**Suitable for:** 3-speed fan with proportional electric heater control

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | FH | Fan High Speed |
| **RL2** | FM | Fan Medium Speed |
| **RL3** | FL | Fan Low Speed |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | HR | Heater Proportional (0-10V) |
| **DAC2** | Not Used | — |
| **DAC3** | Not Used | — |

**Control Behavior:** Heater intensity controlled by DAC1 0-10V output (e.g., to proportional heating element controller). Fan speed selected independently via relays.

!!!note "Proportional Heater"
    This configuration requires the heater to accept 0-10V control input (e.g., proportional electric heating element driver). The relay method (Config #3) is more common for simple on/off heating.

---

#### Configuration #6: Proportional Fan + Proportional Heater

**Suitable for:** Advanced systems with both proportional fan and heater

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | Not Used | — |
| **RL2** | Not Used | — |
| **RL3** | Not Used | — |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | HR | Heater Proportional (0-10V) |
| **DAC2** | Not Used | — |
| **DAC3** | Fan | Proportional Fan Speed (0-10V) |

**Control Behavior:** Both fan and heater controlled smoothly via analog outputs. Thermostat can ramp both proportionally during heating transitions for maximum comfort.

---

### Group 3: 2-Pipe System (Single Valve, Seasonal Switching)

2-pipe systems use a single water circuit that switches between hot and cold water seasonally. The valve is always active but controls flow direction via thermostat mode selection.

#### Configuration #7: 2-Pipe + Fan On/Off, Valve Via RL4

**Suitable for:** Basic 2-pipe system with 3-speed fan and on/off valve

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | FH | Fan High Speed |
| **RL2** | FM | Fan Medium Speed |
| **RL3** | FL | Fan Low Speed |
| **RL4** | HV | Hot Valve (always energized in Heat mode) |
| **RL5** | Not Used | — |
| **DAC1** | Not Used | — |
| **DAC2** | Not Used | — |
| **DAC3** | Not Used | — |

**Control Behavior:**
- **Heat mode:** RL4 energizes (opens hot valve), water flows through heating coil
- **Cool mode:** RL4 de-energizes (closes hot valve), water is off (assumes system switches externally)
- **Fan-Only mode:** RL4 de-energized, fan runs without valve flow

**Note:** 2-pipe systems require external seasonal switching or 3-way diverter valve for proper heating/cooling transition.

---

#### Configuration #8: 2-Pipe + Proportional Fan, Valve Via RL4

**Suitable for:** 2-pipe with proportional fan control and simple on/off valve

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | Not Used | — |
| **RL2** | Not Used | — |
| **RL3** | Not Used | — |
| **RL4** | HV | Hot Valve (on/off control) |
| **RL5** | Not Used | — |
| **DAC1** | Not Used | — |
| **DAC2** | Not Used | — |
| **DAC3** | Fan | Proportional Fan Speed (0-10V) |

**Control Behavior:** Fan speed varies proportionally. Valve switches on/off in Heat mode. Smooth fan ramp combined with simple valve switching.

---

#### Configuration #9: 2-Pipe + Fan On/Off, Proportional Valve Via DAC1

**Suitable for:** 2-pipe with proportional solenoid valve and fixed fan speeds

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | FH | Fan High Speed |
| **RL2** | FM | Fan Medium Speed |
| **RL3** | FL | Fan Low Speed |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | HV | Hot Valve Proportional (0-10V) |
| **DAC2** | Not Used | — |
| **DAC3** | Not Used | — |

**Control Behavior:** DAC1 outputs 0-10V to proportional valve driver. In Heat mode, proportional valve modulates flow to maintain setpoint. Fan speed selected independently.

---

#### Configuration #10: 2-Pipe + Proportional Fan, Proportional Valve

**Suitable for:** Advanced 2-pipe system with full proportional control

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | Not Used | — |
| **RL2** | Not Used | — |
| **RL3** | Not Used | — |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | HV | Hot Valve Proportional (0-10V) |
| **DAC2** | Not Used | — |
| **DAC3** | Fan | Proportional Fan Speed (0-10V) |

**Control Behavior:** Maximum comfort with smooth proportional control of both fan and valve. Optimal for modern 2-pipe installations with proportional solenoid valves.

**Return Connection:** Connect DAC return wires from valve and fan drivers to "B" terminal.

---

### Group 4: 2-Pipe System + Electric Heater

#### Configuration #11: 2-Pipe + Proportional Fan, Proportional Valve, Heater Relay

**Suitable for:** 2-pipe with electric heater backup

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | HR | Heater (via external contactor) |
| **RL2** | Not Used | — |
| **RL3** | Not Used | — |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | HV | Hot Valve Proportional (0-10V) |
| **DAC2** | Not Used | — |
| **DAC3** | Fan | Proportional Fan Speed (0-10V) |

**Control Behavior:** Primary heating via proportional hot water valve (DAC1). When water temperature insufficient, RL1 energizes external heater contactor for backup heating. Fan runs proportionally.

---

#### Configuration #12-#18: Additional 2-Pipe + Heater Variants

Additional configurations combine 2-pipe valve control with heater using different relay/DAC combinations for RL1-RL5 flexibility. Contact AGRID technical support for specific 2-pipe + heater requirements.

---

### Group 5: 4-Pipe System (Separate Heating & Cooling Valves)

4-pipe systems provide separate hot and cold water circuits, allowing simultaneous availability of heating and cooling. The thermostat controls both HV (heating) and CV (cooling) valves independently.

#### Configuration #19: 4-Pipe + Fan On/Off, Valves Via RL4/RL5

**Suitable for:** Standard 4-pipe system with 3-speed fan and on/off valves

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | FH | Fan High Speed |
| **RL2** | FM | Fan Medium Speed |
| **RL3** | FL | Fan Low Speed |
| **RL4** | HV | Hot Valve (Heat mode) |
| **RL5** | CV | Cold Valve (Cool mode) |
| **DAC1** | Not Used | — |
| **DAC2** | Not Used | — |
| **DAC3** | Not Used | — |

**Control Behavior:**
- **Heat mode:** RL4 energizes (hot valve opens), RL5 de-energizes (cold valve closes), fan speed selected
- **Cool mode:** RL4 de-energizes (hot valve closes), RL5 energizes (cold valve opens), fan speed selected
- **Auto mode:** Thermostat automatically switches between heating and cooling based on temperature

This is the most common 4-pipe configuration.

---

#### Configuration #20: 4-Pipe + Proportional Fan, Valves Via RL4/RL5

**Suitable for:** 4-pipe with proportional fan and on/off solenoid valves

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | Not Used | — |
| **RL2** | Not Used | — |
| **RL3** | Not Used | — |
| **RL4** | HV | Hot Valve (on/off) |
| **RL5** | CV | Cold Valve (on/off) |
| **DAC1** | Not Used | — |
| **DAC2** | Not Used | — |
| **DAC3** | Fan | Proportional Fan Speed (0-10V) |

**Control Behavior:** Fan runs at proportional speed based on comfort demand. Both valves switch on/off based on mode selection (Heat/Cool/Auto).

---

#### Configuration #21: 4-Pipe + Fan On/Off, Proportional Valves Via DAC1/DAC2

**Suitable for:** 4-pipe with proportional solenoid valves and fixed fan speeds

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | FH | Fan High Speed |
| **RL2** | FM | Fan Medium Speed |
| **RL3** | FL | Fan Low Speed |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | HV | Hot Valve Proportional (0-10V) |
| **DAC2** | CV | Cold Valve Proportional (0-10V) |
| **DAC3** | Not Used | — |

**Control Behavior:** In Heat mode, DAC1 modulates hot valve proportionally to maintain setpoint; DAC2 stays at 0V. In Cool mode, DAC2 modulates cold valve; DAC1 stays at 0V. Fan speed selected independently via relays.

---

#### Configuration #22: 4-Pipe + Proportional Fan, Proportional Valves

**Suitable for:** Premium 4-pipe system with full proportional control

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | Not Used | — |
| **RL2** | Not Used | — |
| **RL3** | Not Used | — |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | HV | Hot Valve Proportional (0-10V) |
| **DAC2** | CV | Cold Valve Proportional (0-10V) |
| **DAC3** | Fan | Proportional Fan Speed (0-10V) |

**Control Behavior:** Optimal comfort with full proportional control. In Heat mode, DAC1 controls hot valve while DAC2 = 0V. In Cool mode, DAC2 controls cold valve while DAC1 = 0V. Fan speed ramps smoothly. In Auto mode, thermostat smoothly transitions between heating and cooling.

**Return Connections:** All three DAC outputs require return connection to "B" terminal for proper operation.

---

### Group 6: 4-Pipe System + Electric Heater

#### Configuration #23: Not Supported

This configuration cannot be implemented with AGR25-01 relay/DAC allocation.

---

#### Configuration #24: 4-Pipe + Proportional Fan, Proportional Valves, Heater Relay

**Suitable for:** 4-pipe with electric heater backup

| Output | Connection | Function |
|--------|-----------|----------|
| **RL1** | HR | Heater (via external contactor) |
| **RL2** | Not Used | — |
| **RL3** | Not Used | — |
| **RL4** | Not Used | — |
| **RL5** | Not Used | — |
| **DAC1** | HV | Hot Valve Proportional (0-10V) |
| **DAC2** | CV | Cold Valve Proportional (0-10V) |
| **DAC3** | Fan | Proportional Fan Speed (0-10V) |

**Control Behavior:** Primary heating via hot water valve (DAC1). When hot water insufficient for heating, RL1 energizes heater contactor for backup. Both valves available (HV for heat, CV for cool), proportional fan control.

!!!danger "Heater Contactor Required"
    RL1 must connect to external contactor. Do not connect directly to heater element.

---

#### Configurations #25-#30: Additional 4-Pipe + Heater Variants

Configurations #25, #26, #27, #28, #29, and #30 provide additional relay/DAC combinations:
- #25: 4-Pipe + Fan On/Off (RL1-RL3), Proportional Valves (DAC1-DAC2), Heater Relay (RL4)
- #26: Similar variants with different heater relay assignment
- #27-#30: Variations with mixed relay/proportional control

Configuration #30 is **Not Supported** (no remaining relay/DAC for heater).

For specific 4-pipe + heater requirements not listed, contact AGRID technical support.

---

## Sensor Configuration

### Sensor Inputs S1 & S2

The AGR25-01 supports two external sensors via terminals S1 and S2:

| Sensor Type | Input Type | Configuration | Application |
|-------------|-----------|---------------|-------------|
| **Analog Thermistor** | 0-10V | Via touchscreen or AGRID server | Room temperature measurement |
| **Digital Dry Contact** | Contact closure | Via touchscreen or AGRID server | Occupancy detection, window open switch |

### Sensor Configuration Methods

1. **Local Configuration (Touchscreen)**
   - Access Settings menu
   - Navigate to Sensor settings
   - Select S1 or S2
   - Choose: Analog Thermistor or Digital Dry Contact
   - Set sensor function (temperature, occupancy, etc.)

2. **Remote Configuration (AGRID Server)**
   - Use AGRID Installer mobile application
   - Connect to thermostat via WiFi
   - Configure sensor type and function
   - Changes sync automatically to device

!!!tip "Sensor Best Practices"
    Place temperature sensors away from direct sunlight, heating vents, and exterior walls. Use shielded cable for sensor runs >10m to minimize electrical noise.

---

## External Contactor Requirement

!!!danger "Heater Contactor Mandatory"
    **When using electric heater configurations (HR), an external contactor rated for the heater load is MANDATORY.**

### Heater Contactor Selection

| Heater Size | Load Current | Contactor Coil | Contactor Contacts |
|-----------|---------------|-----------------|-------------------|
| 1-2 kW | 5-10A | 230V AC | 16A min |
| 3-5 kW | 14-23A | 230V AC | 25A min |
| 6-10 kW | 28-46A | 230V AC | 40A min |

### Contactor Wiring

```
Thermostat RL1/RL2/RL3/RL4/RL5 (HR output)
    ↓
External Contactor Coil (230V AC)
    ↓
Contactor Contacts (NC - Normally Closed)
    ↓
Heater Element (power-through)
```

The relay output energizes the contactor coil (low current, safe), which then switches the high-current heater circuit.

---

## Configuration Selection Guide

### Choosing Your Configuration

**Step 1: Identify your system type**
- Do you have heating only, cooling only, or both?
- If heating, is it hot water (valve) or electric?
- If both, is your system 2-pipe or 4-pipe?

**Step 2: Select valve control type**
- On/off solenoid valves (use relay control RL4/RL5)
- Proportional solenoid valves (use DAC1/DAC2)

**Step 3: Select fan control type**
- Fixed 3-speed fan (use relays RL1/RL2/RL3)
- Proportional 0-10V fan (use DAC3)

**Step 4: Add heater if needed**
- Electric heater requires external contactor
- Allocate relay or DAC for heater control

**Step 5: Match to configuration group above**

### Quick Reference by System Type

| System Type | Recommended Config | Relays | DAC |
|-------------|-------------------|--------|-----|
| Fan only, 3-speed | #1 | RL1-RL3 | — |
| Fan only, proportional | #2 | — | DAC3 |
| 2-pipe, 3-speed fan, on/off valve | #7 | RL1-RL4 | — |
| 2-pipe, proportional fan, proportional valve | #10 | — | DAC1,DAC3 |
| 4-pipe, 3-speed fan, on/off valves | #19 | RL1-RL5 | — |
| 4-pipe, proportional fan, proportional valves | #22 | — | DAC1-DAC3 |

---

## Verification Checklist

After wiring, verify:

- [ ] Power supply 220-240V~ 50Hz connected to N/L
- [ ] All relay outputs wired to appropriate control devices
- [ ] Proportional outputs (DAC) wired with return to "B"
- [ ] Sensor inputs (S1/S2) configured and wired
- [ ] External heater contactor installed (if using HR)
- [ ] Sensor type configured via touchscreen (Analog/Digital)
- [ ] WiFi connected and AGRID app working
- [ ] All outputs responding to setpoint changes
- [ ] No error messages on display
- [ ] Temperature readings match actual room temperature

---

*For wiring assistance or custom configurations, contact AGRID technical support.*
