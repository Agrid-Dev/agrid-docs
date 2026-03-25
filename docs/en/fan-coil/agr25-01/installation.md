# Installation

## Safety

!!! danger "Installation Requirements"
    Installation must be performed by a qualified electrician in accordance with local regulations.

!!! warning "Power Safety"
    Disconnect power before any wiring work. Verify absence of voltage.

!!! warning "All-Pole Disconnection Device Required"
    The thermostat being permanently connected, an all-pole disconnection and overcurrent protection device (e.g., bipolar circuit breaker) must be incorporated in the fixed installation in accordance with applicable installation rules. This device must simultaneously disconnect all active conductors (line and neutral), with a contact opening distance of at least 3 mm, and must remain accessible after installation of the thermostat.

!!! warning "Circuit Protection"
    Installation must be carried out on a circuit protected in accordance with applicable installation standards (HD 60364 / NF C 15-100 or equivalent).

!!! warning "Installation Location"
    Indoor dry locations only (IP20). Do not install in damp or outdoor locations.

!!! danger "Do Not Open Enclosure"
    Do not open the enclosure. No user-serviceable parts inside.

!!! danger "Relay Limitations — Fire Hazard"
    The thermostat relays only send a control signal. They must not carry the power of an auxiliary electric heater. The heater must be controlled via an external power contactor (power relay) suitable for the load. Failure to comply may result in fire hazard.

## Mounting

Install the thermostat on the wall, at a maximum height of 2 m from the floor. Recommended installation height is at standing height, in a location representative of the room's ambient temperature.

### Avoid the following locations:

- Proximity to heat sources (radiator, hot water pipe)
- Direct sunlight
- Air drafts (doors, windows, ventilation grilles)
- Dead zones (corners, behind doors)

### Installation Steps

**Step 1:** Loosen the bottom screw. Separate the front panel from the rear plate.

**Step 2:** Fix the rear plate to the wall.

**Step 3:** Proceed with electrical connections (see sections below).

**Step 4:** Reconnect the front panel and tighten the screw.

!!! note
    Do not obstruct the ventilation slots on the enclosure (required for sensors).

## Terminal Block

### Terminal Assignments

| Terminal | Name | Description |
|----------|------|-------------|
| N | Neutral | Neutral conductor |
| L | Line | Line conductor |
| RL1 | Relay 1 | 230V~ switching output — Fan high speed (FH) |
| RL2 | Relay 2 | 230V~ switching output — Fan medium speed (FM) |
| RL3 | Relay 3 | 230V~ switching output — Fan low speed (FL) — or heater depending on config. |
| RL4 | Relay 4 | 230V~ switching output — Hot valve (HV) |
| RL5 | Relay 5 | 230V~ switching output — Cold valve (CV) or heater depending on config. |
| G | 0V Ref | 0V reference for DAC outputs and S1/S2 inputs |
| DAC1 | 0-10V Output | Proportional signal — Hot valve (HV) |
| DAC2 | 0-10V Output | Proportional signal — Cold valve (CV) or heater depending on config. |
| DAC3 | 0-10V Output | Proportional signal — Fan or heater depending on config. |
| B | Reserved | Reserved — do not connect |
| A | Reserved | Reserved — do not connect |
| S1 | Input 1 | External sensor |
| S2 | Input 2 | External sensor |

### Terminal Block Notes

- RL1-RL5 outputs are used for ON/OFF switching control only. DAC1-DAC3 outputs are used for 0-10V proportional control.
- The terminal block is separated into two galvanically isolated zones: 230V~ section (N, L, RL1-RL5) and low voltage section (G, DAC1-DAC3, B, A, S1, S2).
- The exact assignment of each output depends on the configuration. Refer to the Wiring section.
- 2-pipe systems: the single valve is connected to the HV output (RL4 or DAC1 depending on configuration).
- Systems without heater: leave the HR output unconnected.

### Conventions

- FH = Fan high speed
- FM = Fan medium speed
- FL = Fan low speed
- HV = Hot valve
- CV = Cold valve
- HR = Auxiliary electric heater

### Wiring Specifications

| Specification | Value |
|---------------|-------|
| Wire size — 230V section (N, L, RL1-RL5) | 1.5 mm² |
| Wire size — LV section (G, DAC, S1, S2) | 0.5 to 0.75 mm² |
| Max cable length DAC 0-10V | 20 m (shielded cable recommended beyond 10 m) |
| Max cable length sensors S1/S2 | 20 m (shielded cable recommended beyond 10 m) |
| Wire type | Solid wire or stranded wire with crimped ferrule |

## Maintenance

- Do not open the enclosure. No serviceable parts. No consumables to replace.
- Clean with a dry or slightly damp cloth. No solvents, abrasives, or water jets.
- Keep ventilation slots clear.
- The device does not release any toxic substances during normal operation.
- In case of malfunction, contact AGRID or a qualified installer.

## Troubleshooting

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Screen not turning on | Power supply issue | Check power connection and circuit breaker |
| Screen reboot loop | Firmware corruption | Perform factory reset via settings or AGRID app |
| Incoherent temperature | Sensor malfunction | Check sensor connections; contact AGRID |
| Fan/valve not responding | Output configuration error | Verify wiring configuration matches selected mode |
| No outputs working | Communication failure | Check WiFi connection; verify configuration |
| No WiFi connection | Network issue | Reconfigure WiFi credentials via AGRID Installer app |
| Presence detection not working | Sensor blocked | Ensure ventilation slots are clear; check sensor calibration |
| Touchscreen not responding | Display firmware issue | Perform factory reset via AGRID app |
