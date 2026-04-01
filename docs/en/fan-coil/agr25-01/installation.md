# Installation

## Safety

!!! danger "Qualified Personnel Only"
    Installation must be carried out by a qualified electrician in accordance with local regulations.

!!! danger "Power Disconnection"
    Disconnect power before any wiring work. Verify absence of voltage.

!!! warning "All-Pole Disconnection Device Required"
    As the thermostat is permanently connected, an all-pole disconnection and overcurrent protection device (e.g. a double-pole circuit breaker) must be incorporated in the fixed wiring in accordance with applicable installation rules. This device must simultaneously disconnect all live conductors (line and neutral), with a contact opening distance of at least 3 mm, and must remain accessible after the thermostat is installed.

!!! warning "Circuit Protection"
    Installation must be carried out on a protected circuit in accordance with applicable installation standards (HD 60364 / NF C 15-100 or equivalent).

!!! warning "Indoor Use Only"
    Indoor dry locations only (IP20). Do not install in damp or outdoor locations.

!!! danger "Do Not Open"
    Do not open the housing. No user-serviceable parts inside.

!!! danger "Relay Limitations — Fire Hazard"
    The thermostat relays provide control signals only. They must not carry the power load of an auxiliary electric heater. The heater must be controlled via an external contactor (power relay) rated for the load. Failure to comply may result in a fire hazard.


## Mounting

Install the thermostat on a wall, at a maximum height of 2 m above the floor. The recommended installation height is at person height, at a location representative of the room ambient temperature.

**Avoid:**

- Proximity to heat sources (radiator, hot water pipes)
- Direct sunlight
- Draughts (doors, windows, ventilation outlets)
- Dead zones (corners, behind doors)

**Steps:**

1. Loosen the bottom screw. Separate the front panel from the rear plate.
2. Fix the rear plate to the wall.
3. Proceed with electrical connections (see Terminal Block below and [Wiring Configurations](wiring.md)).
4. Reconnect the front panel and tighten the screw.

!!! note
    Do not obstruct the ventilation slots on the housing (required for the sensors).


## Terminal Block

| Terminal | Name | Description |
|---|---|---|
| **N** | Neutral | Neutral conductor |
| **L** | Line | Line conductor |
| **RL1** | Relay 1 | ON/OFF output 230V~ — Fan high speed (FH) |
| **RL2** | Relay 2 | ON/OFF output 230V~ — Fan medium speed (FM) |
| **RL3** | Relay 3 | ON/OFF output 230V~ — Fan low speed (FL) — or heater depending on config. |
| **RL4** | Relay 4 | ON/OFF output 230V~ — Heating valve (HV) |
| **RL5** | Relay 5 | ON/OFF output 230V~ — Cooling valve (CV) or heater depending on config. |
| **G** | 0V Ref. | 0V reference for DAC outputs and S1/S2 inputs |
| **DAC1** | 0-10V output | Proportional signal — Heating valve (HV) |
| **DAC2** | 0-10V output | Proportional signal — Cooling valve (CV) |
| **DAC3** | 0-10V output | Proportional signal — Fan |
| **B** | Reserved | Reserved — do not connect |
| **A** | Reserved | Reserved — do not connect |
| **S1** | Input 1 | External sensor |
| **S2** | Input 2 | External sensor |

### Notes

- Outputs RL1–RL5 are used for ON/OFF control only. Outputs DAC1–DAC3 are used for 0-10V proportional control.
- The terminal block is divided into two galvanically isolated zones: **230V~ section** (N, L, RL1–RL5) and **low voltage section** (G, DAC1–DAC3, B, A, S1, S2).
- The exact assignment of each output depends on the configuration. Refer to [Wiring Configurations](wiring.md).
- 2-pipe systems: the single valve is connected to the HV output (RL4 or DAC1 depending on configuration).
- Systems without heater: do not connect anything to the HR output.

### Conventions

| Abbreviation | Meaning |
|---|---|
| FH | Fan high speed |
| FM | Fan medium speed |
| FL | Fan low speed |
| HV | Heating valve |
| CV | Cooling valve |
| HR | Auxiliary electric heater |

### Wiring Specifications

| Parameter | Value |
|---|---|
| Wire gauge — 230V section (N, L, RL1–RL5) | 1.5 mm² |
| Wire gauge — LV section (G, DAC1–DAC3, S1, S2) | 0.5 to 0.75 mm² |
| Max. cable length DAC 0-10V | 20 m (shielded cable recommended beyond 10 m) |
| Max. cable length sensors S1/S2 | 20 m (shielded cable recommended beyond 10 m) |
| Wire type | Solid or stranded wire with crimped ferrule |


## Maintenance

- Do not open the housing. No serviceable parts. No consumables to replace.
- Clean with a dry or slightly damp cloth. No solvents, abrasives or water jets.
- Keep ventilation slots clear.
- The appliance does not release any toxic substances during normal operation.
- In case of malfunction, contact AGRID or a qualified installer.


## Troubleshooting

| Symptom | Possible cause | Action |
|---|---|---|
| Screen does not turn on | No power supply | Check the circuit breaker and voltage at terminals N/L (220-240V~) |
| Screen turns on then off repeatedly | Repeated watchdog restart | Disconnect power for 30 s then reconnect. If the problem persists, contact AGRID. |
| Inconsistent displayed temperature | Temperature sensor disturbed | Check that ventilation slots are not blocked. Check for nearby heat sources. |
| Fan or valve does not respond | Wrong configuration or incorrect wiring | Check the selected configuration (see [Wiring](wiring.md)). Check wiring. Check the operation of the controlled equipment. |
| No output is working | Unsupported configuration (N/S) or output conflict | Select a supported configuration (see [Wiring](wiring.md)). Outputs are disabled for safety. |
| No WiFi connection | WiFi network unavailable or incorrect credentials | Check WiFi 2.4 GHz network availability. Reconfigure directly from the thermostat settings screen or via the AGRID Installer app. The thermostat continues in standalone mode. |
| Presence detection not working | Radar obstructed or disabled | Check that no object is placed in front of the thermostat. Check the presence function settings. |
| Touchscreen does not respond | Screen in standby or software freeze | Touch the screen to wake it. If no response, disconnect power for 30 s then reconnect. |


## Disposal

!!! warning "WEEE Directive"
    This product must not be disposed of with household waste. In accordance with the WEEE Directive (2012/19/EU), return it to an authorised collection point or to the distributor.
