# Installation Guide

## Safety Warnings

!!!danger "Electrical Safety"
    **Only qualified electricians should perform installation and wiring.** Improper installation can result in electrical hazard, fire, or equipment damage.

!!!warning "Power Disconnection"
    **Disconnect power from the HVAC system before beginning installation.** The thermostat must be powered through an all-pole disconnection device with a minimum contact separation of 3mm in all poles.

!!!warning "Sealed Housing"
    **Do not open the thermostat housing.** There are no user-serviceable parts inside. Opening the housing will void warranty and may cause electrical hazard.

!!!danger "Relay Output Limitation"
    **Relay outputs (RL1-RL5) provide CONTROL SIGNALS ONLY.** They cannot directly power heating elements or motors. Use an external contactor rated for the heater load. Direct connection of power loads to relays will cause equipment damage and fire hazard.

!!!info "Installation Environment"
    The AGR25-01 is rated **IP20** and designed for **dry indoor use only**. Do not install in wet, damp, or corrosive environments. Maximum ambient temperature: 40°C.

---

## Pre-Installation Checklist

Before beginning installation, verify:

- [ ] Power supply is 220-240V~ 50Hz (match your local mains voltage)
- [ ] HVAC system is compatible with AGR25-01 control
- [ ] Installation location is dry and indoor
- [ ] Wall mounting location can support unit weight (196g)
- [ ] Qualified electrician is available for wiring
- [ ] All necessary external control devices (contactor, safety switches) are available

---

## Mounting Instructions

### Location Selection

Select a mounting location that meets these criteria:

| Requirement | Details |
|-------------|---------|
| **Height** | Maximum 2m from floor (preferred 1.5m for easy access) |
| **Surface** | Flat, vertical wall suitable for screw mounting |
| **Environment** | Dry, indoor location with 5-40°C ambient temperature |
| **Airflow** | Avoid locations with direct AC/heating outlet airflow |
| **Heat Sources** | Keep away from radiators, heating elements, direct sunlight |
| **Drafts** | Avoid cold air drafts or dead zones |
| **Accessibility** | Mount where screen is easily readable and touchable by occupants |

!!!tip "Optimal Placement"
    Mount the thermostat at approximately eye level in the main living area. Avoid mounting near windows, doors, or areas prone to temperature extremes.

### Mounting Procedure

1. **Unscrew the bottom screw** of the thermostat's front panel (use a Phillips head screwdriver)
2. **Carefully separate the front panel** from the back plate by gently pulling the panel forward
3. **Position the back plate** on the wall at desired location (mark screw holes with a pencil)
4. **Install the back plate** with appropriate wall anchors (not included; select anchors suitable for your wall type)
5. **Route all wiring** into the back plate terminal area (see Terminal Block section below)
6. **Complete all electrical connections** using the terminal block (see Wiring Specifications)
7. **Reconnect the front panel** to the back plate, ensuring proper alignment
8. **Secure the front panel** by tightening the bottom screw

!!!warning "Wiring Before Connection"
    Complete all terminal block wiring before reconnecting the front panel. Do not force the front panel - it should seat smoothly.

---

## Terminal Block Wiring

### Terminal Block Diagram

The AGR25-01 uses a standard terminal block connector with the following terminals:

| Terminal | Designation | Function | Voltage |
|----------|-------------|----------|---------|
| **N** | Neutral | AC supply neutral | 230V~ |
| **L** | Line | AC supply live | 230V~ |
| **RL1** | Relay Output 1 | Fan High / Control signal 1 | 0-5A (load dependent) |
| **RL2** | Relay Output 2 | Fan Medium / Control signal 2 | 0-5A (load dependent) |
| **RL3** | Relay Output 3 | Fan Low / Control signal 3 | 0-5A (load dependent) |
| **RL4** | Relay Output 4 | Valve control / Heating signal | 0-5A (load dependent) |
| **RL5** | Relay Output 5 | Valve control / Cooling signal | 0-5A (load dependent) |
| **G** | Ground/Drain | System ground reference | 0V |
| **DAC1** | Analog Output 1 | 0-10V proportional control signal | 0-10V |
| **DAC2** | Analog Output 2 | 0-10V proportional control signal | 0-10V |
| **DAC3** | Analog Output 3 | 0-10V proportional control signal | 0-10V |
| **B** | Return (LV) | Low voltage return signal path | 0V |
| **A** | Signal (LV) | Low voltage signal reference | 0V |
| **S1** | Sensor Input 1 | Temperature sensor (analog/digital) | 0-10V analog or dry contact |
| **S2** | Sensor Input 2 | Temperature sensor (analog/digital) | 0-10V analog or dry contact |

### Terminal Descriptions

**AC Power Supply (N, L)**
- Connect to 220-240V~ 50Hz mains supply
- Use appropriate circuit breaker (mandatory)
- Must have all-pole disconnection with 3mm contact gap

**Relay Outputs (RL1-RL5)**
- 5× SPST-NO (Single Pole Single Throw - Normally Open) relay contacts
- Maximum 5A inductive load per relay
- AgPd contact material for reliability
- Use external contactor for heater loads (do not connect directly to power)
- Support inverting logic (NO/NC) configurable per output

**Analog Outputs (DAC1-DAC3)**
- 0-10V proportional control signals
- Floating output reference (requires external return via "B")
- Maximum output impedance: 100 ohms
- Suitable for proportional valve control

**Sensor Inputs (S1, S2)**
- Support analog thermistor inputs (0-10V)
- Support digital dry contact inputs
- Configuration via touchscreen menu or AGRID server
- Internal pull-up resistors for digital inputs

**Ground Reference (G)**
- System ground for relay and digital logic circuits
- Potential reference for sensor inputs
- Do not confuse with protective earth (PE)

**Low Voltage Reference (A, B)**
- "A" = Signal reference (0V analog)
- "B" = Return signal path for analog outputs
- Required for proportional valve operation
- Keep isolated from high voltage AC circuit

---

## Wiring Specifications

### Wire Gauge & Installation

| Circuit | Recommended Gauge | Maximum Distance | Notes |
|---------|-------------------|------------------|-------|
| **AC Supply (230V)** | 1.5mm² (AWG 14) | N/A | Hardwired to breaker, short as possible |
| **Relay Outputs** | 0.75mm² (AWG 18) | Max 20m | 5A max per relay, typical solenoid pulls 1-2A |
| **Analog Outputs (DAC)** | 0.5mm² (AWG 20) | Max 20m | Shielded cable recommended >10m |
| **Sensor Inputs** | 0.5mm² (AWG 20) | Max 20m | Shielded cable recommended >10m |
| **Digital Sensors** | 0.5mm² (AWG 20) | Max 20m | Standard control cable acceptable |

### Shielding Recommendations

| Application | Cable Type | Distance | Shield Connection |
|-------------|-----------|----------|------------------|
| **Analog Outputs** | Shielded twisted pair | >10m | Connect shield to "B" at thermostat only |
| **Digital Inputs** | Standard 2-conductor | <10m | No shielding required |
| **Digital Inputs** | Shielded if >10m | >10m | Connect shield to "G" at thermostat only |

!!!warning "Shielded Cable Precautions"
    When using shielded cable, connect the shield to only ONE end (thermostat side) to avoid ground loops. Do not connect shield at both ends.

### Isolation Between Circuits

!!!danger "Galvanic Isolation"
    **The thermostat maintains galvanic isolation between the high-voltage AC zone (N, L, G) and the low-voltage control zone (DAC1-DAC3, A, B, S1, S2, RL1-RL5).**

    Do not mix AC power grounds with LV control grounds. Keep AC power wiring separated from LV control wiring by at least 50mm distance. Use separate cable routes or conduit for AC and LV circuits.

---

## Regulatory & Safety Symbols

The following symbols appear on the product or documentation:

| Symbol | Meaning | Details |
|--------|---------|---------|
| ![CE](../../../assets/ce.svg) | CE Mark | Complies with EU directives 2014/53/EU |
| ![Class II](../../../assets/class2.svg) | Class II (Double Insulation) | No protective earth required, but recommended |
| **~** | AC Voltage | Alternating current |
| **=** | DC Voltage | Direct current (proportional outputs) |
| **T50** | Temperature Class | Operating range 5°C to 40°C |
| **IP20** | Ingress Protection | Protected against dust ≥12mm, not water-resistant |
| **1.B** | Micro-Break Type | General purpose switching capability |
| ![WEEE](../../../assets/weee.svg) | WEEE 2012/19/EU | Separate collection for electrical waste |
| ![RoHS](../../../assets/rohs.svg) | RoHS 2011/65/EU | Restricted hazardous substances compliance |

---

## Maintenance

### Routine Care

- **Cleaning** - Use a dry, soft cloth to clean the screen and housing. Do not use liquid cleaners.
- **Ventilation** - Keep all vents on the back plate clear of dust and obstructions
- **Inspection** - Periodically check wiring connections for corrosion or loosening

### Never Required

- Thermostat housing opening
- Relay replacement
- Internal component maintenance
- Sensor recalibration (except through factory reset)

!!!danger "Do Not Open"
    The sealed housing protects internal electronics from dust and electrical hazard. Do not attempt to open or repair the thermostat. Opening will void warranty.

---

## Troubleshooting

### Common Issues and Solutions

| Issue | Symptoms | Likely Cause | Solution |
|-------|----------|--------------|----------|
| **Screen doesn't turn on** | No display, no backlight | No power or blown fuse | Verify 230V supply at N/L terminals; check circuit breaker |
| **Screen reboots repeatedly** | Continuous restart loop | Unstable power supply | Check for voltage fluctuations; test with stabilized supply |
| **Wrong temperature display** | Reading doesn't match actual room temp | Sensor malfunction or incorrect sensor type selected | Verify sensor type in settings; test sensor continuity |
| **Fan/Valve not responding** | Relay outputs not activating | Relay failure or control logic issue | Test relay coil voltage with multimeter; verify wiring |
| **No voltage on DAC outputs** | 0-10V outputs stuck at 0V | Power supply or DAC circuit failure | Restart thermostat; perform factory reset if needed |
| **No WiFi connection** | "WiFi Offline" message on screen | Network credentials incorrect or WiFi out of range | Re-enter WiFi password via AGRID Installer app; check AP signal strength |
| **Presence detection not working** | Motion sensor not triggering | Sensor misconfigured or obstructed | Check S1/S2 sensor configuration; verify sensor line of sight |
| **Touchscreen not responding** | Taps not registering properly | Screen calibration drift | Perform factory reset and recalibrate; check for physical damage |

### Factory Reset

To reset the thermostat to factory defaults:

1. Locate the small reset button on the back plate (recessed, requires pin or paper clip)
2. Power off the thermostat (switch OFF at circuit breaker)
3. Press and hold the reset button for 10 seconds while powered off
4. Restore power; thermostat will boot with default settings
5. Reconfigure WiFi and sensor settings via AGRID Installer app

!!!warning "Data Loss on Reset"
    Factory reset clears all user configuration including WiFi credentials and setpoints. Only perform if absolutely necessary.

---

## Disposal & Recycling

The AGR25-01 contains electronic components and must not be disposed of as general waste.

!!!warning "WEEE Compliance (2012/19/EU)"
    **Do not dispose in municipal waste bins.** The thermostat must be returned to:

    - Authorized AGRID distributor/reseller
    - Local electrical waste recycling facility
    - Manufacturer's take-back program (if available)

    Proper disposal ensures hazardous materials are safely recovered and valuable components are recycled.

---

## Data Security & Firmware

### WiFi Configuration

- WiFi setup is performed through the **AGRID Installer mobile application**
- Credentials are stored securely in the thermostat memory
- Connection uses encrypted protocols (WPA2/WPA3)
- The thermostat never transmits credentials in plaintext

### Firmware Updates

- **Automatic updates** - The thermostat can automatically check for updates via AGRID servers
- **Manual updates** - Updates can be triggered via AGRID Installer app
- **OTA delivery** - Updates are delivered over-the-air (WiFi)
- **No downtime required** - Updates occur in background without interrupting local operation

### Privacy & Data Protection

- The thermostat collects only temperature and setpoint data
- Data transmission complies with EU GDPR standards
- User data is stored on AGRID secured servers or retained locally (offline mode)
- No personal information is collected beyond thermostat operation data

---

*For technical support, contact AGRID SAS or your authorized distributor.*
