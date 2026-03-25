# Usage Guide

## Overview

The AGR25-01 combines a responsive 4-inch color touchscreen with wireless connectivity to provide intuitive temperature and mode control. This guide covers basic operation of the thermostat.

---

## Touchscreen Interface

### Main Display

The main screen displays:

- **Current Room Temperature** - Large display showing actual room temperature from selected sensor
- **Setpoint Temperature** - Target temperature for heating or cooling
- **Operating Mode** - Current mode indicator (Heat, Cool, Fan Only, Auto)
- **Fan Speed** - Current fan speed (Low, Medium, High, Auto)
- **WiFi Status** - WiFi connection indicator (connected or offline)
- **System Status** - Any active alerts or error messages

### Touchscreen Navigation

The interface uses intuitive touch gestures:

- **Tap** - Select menu item or adjust setting
- **Swipe** - Navigate between screens or menu pages
- **Long Press** - Access advanced settings or hold functions

---

## Basic Operations

### Turning ON/OFF

- **Turn ON:** Tap the power icon on the main screen or physical power button
- **Turn OFF:** Tap power icon again to disable the thermostat

!!!note "Always-On Default"
    The thermostat remains powered as long as the 230V supply is connected. Use the screen's power control or circuit breaker to completely de-energize.

---

### Adjusting Temperature Setpoint

**Method 1: Direct Input**

1. On the main screen, tap the setpoint temperature field
2. Use the +/- buttons to adjust temperature
3. Setpoint range: 5°C to 40°C (standard HVAC range)
4. Tap "OK" or wait 5 seconds for change to take effect

**Method 2: Quick Adjustment**

- Tap the temperature display area directly
- Drag finger up to increase temperature
- Drag finger down to decrease temperature
- Release to confirm

**Common Setpoints**

| Season | Typical Setting | Notes |
|--------|-----------------|-------|
| Winter (Heat) | 21-22°C | Comfortable heating setpoint |
| Summer (Cool) | 24-26°C | Comfortable cooling setpoint |
| Spring/Fall (Auto) | 20-22°C | Provides flexibility for seasonal variations |

!!!tip "Energy Saving"
    Lower heating setpoint by 1°C and raise cooling setpoint by 1°C to reduce energy consumption by 5-10%.

---

### Operating Modes

Press the mode button to cycle through available modes:

#### Heat Mode
- Maintains setpoint temperature using hot water valve and/or heater
- Fan speed controlled independently
- Use in winter when only heating is needed
- **Water valve behavior:** Opens when room temperature falls below setpoint

#### Cool Mode
- Maintains setpoint temperature using cold water valve
- Fan speed controlled independently
- Use in summer when only cooling is needed
- **Water valve behavior:** Opens when room temperature rises above setpoint

#### Fan Only Mode
- Runs fan without heating or cooling
- Useful for air circulation without temperature control
- Both heating and cooling valves remain closed
- Fan speed controlled via separate speed selector

#### Auto Mode
- Automatically switches between heating and cooling
- Thermostat compares room temperature to setpoint
- If room temperature rises above setpoint → Cool mode activates
- If room temperature falls below setpoint → Heat mode activates
- Optimal for spring/autumn when temperature varies throughout day
- **No manual valve switching required** – system handles automatically

---

### Fan Speed Control

Press the fan speed button to cycle through available options:

#### Low Speed
- Minimum fan operation
- Quietest operation
- Slower heating/cooling response
- Use during night or for comfort

#### Medium Speed
- Balanced performance
- Moderate noise level
- Typical daytime setting
- Good comfort-to-noise ratio

#### High Speed
- Maximum fan speed
- Fastest heating/cooling response
- Higher noise and energy consumption
- Use when rapid temperature change needed

#### Auto Speed
- Thermostat automatically adjusts fan speed
- Ramps speed based on temperature error (difference from setpoint)
- Provides comfort without constant adjustment
- Energy-efficient automatic operation
- **Recommended for most users**

---

## WiFi Remote Control

### Initial WiFi Setup

1. **Power on the thermostat** and ensure display is responsive
2. **Open AGRID Installer mobile application** on your smartphone (iOS/Android)
3. **Select "Add Device"** in the app
4. **Scan QR code** on the thermostat's back plate, or manually enter the device ID
5. **Enter WiFi network name and password** when prompted
6. **Confirm connection** - thermostat should show "WiFi Connected" on display

!!!warning "WiFi Password"
    Enter your WiFi password carefully. Incorrect entry will prevent connection. You can retry setup at any time via the app.

### Remote Control via App

Once connected to WiFi, you can control the thermostat remotely:

- **View Temperature** - See real-time room temperature from anywhere
- **Set Temperature** - Change setpoint remotely (changes apply within 2-5 seconds)
- **Change Mode** - Switch Heat/Cool/Fan/Auto from your phone
- **Adjust Fan Speed** - Control fan speed remotely
- **View History** - See temperature and mode changes over time
- **Receive Alerts** - Get notifications if thermostat goes offline or error occurs

### AGRID App Features

| Feature | Description |
|---------|-------------|
| **Temperature Graph** | View temperature trends over 24 hours or 7 days |
| **Mode Scheduling** | Set automatic mode changes at specific times (e.g., Auto at 8 AM, Heat at 8 PM) |
| **Setpoint Scheduling** | Program different temperatures for different times of day |
| **Geofencing** | Automatically adjust temperature based on your phone's location |
| **Multiple Devices** | Manage multiple AGRID thermostats from one app |
| **User Accounts** | Share thermostat with family members (each gets own login) |
| **Device Settings** | Configure sensor type, output functions, WiFi parameters |

---

## Offline Operation (No WiFi)

If the WiFi connection is lost:

- **Local operation continues** - Touchscreen control remains fully functional
- **Setpoints maintained** - Previously set temperature and mode are kept
- **Auto mode disabled** - Some advanced features may be temporarily unavailable
- **WiFi indicator shows "Offline"** - Clear visual feedback on connection status
- **Automatic reconnection** - Thermostat will reconnect when WiFi is available again

!!!info "Autonomous Mode"
    The AGR25-01 is designed to operate independently without WiFi. WiFi is optional for remote control and scheduling only, not required for basic function.

---

## Energy Management Tips

### Optimize Comfort & Efficiency

| Action | Energy Saving | Comfort Impact |
|--------|---------------|----------------|
| Use Auto mode | 10-15% | Excellent - automatic switching |
| Lower heating by 1°C | 5-7% | Minor - may feel slightly cool |
| Raise cooling by 1°C | 5-7% | Minor - may feel slightly warm |
| Use Fan Auto mode | 8-12% | Excellent - adjusts automatically |
| Schedule setpoints | 15-20% | Good - requires planning |
| Geofencing mode | 20-30% | Very good - no manual adjustment |

### Recommended Schedules

**Weekday (Winter Heating)**

| Time | Mode | Setpoint | Fan |
|------|------|----------|-----|
| 6:00 AM | Heat | 21°C | Auto |
| 8:00 AM | Heat | 20°C | Auto |
| 6:00 PM | Heat | 21°C | Auto |
| 11:00 PM | Heat | 18°C | Auto |

**Weekend (Winter Heating)**

| Time | Mode | Setpoint | Fan |
|------|------|----------|-----|
| 7:00 AM | Heat | 21°C | Auto |
| 11:00 PM | Heat | 18°C | Auto |

**Summer (Cooling)**

| Time | Mode | Setpoint | Fan |
|------|------|----------|-----|
| 7:00 AM | Cool | 25°C | Auto |
| 5:00 PM | Cool | 24°C | Auto |
| 10:00 PM | Cool | 26°C | Auto |

---

## Status Indicators

### WiFi Status

| Display | Meaning | Action |
|---------|---------|--------|
| WiFi Icon (Full) | Connected to network | Normal operation - remote control available |
| WiFi Icon (Half) | Weak signal | Move closer to WiFi router or relocate router |
| WiFi Icon (Empty) | Offline or not connected | Local control only - WiFi will reconnect automatically |
| WiFi Icon (X) | Connection error | Check WiFi password; restart thermostat if needed |

### Temperature Indicators

| Display | Meaning | Action |
|---------|---------|--------|
| "Heat Active" | Heating mode, valve/heater engaged | Normal during winter |
| "Cool Active" | Cooling mode, cooling valve engaged | Normal during summer |
| "Temp Low" | Room temperature below setpoint by >3°C | Check HVAC system function |
| "Temp High" | Room temperature above setpoint by >3°C | Check HVAC system function |
| "No Sensor" | S1/S2 sensor disconnected | Verify sensor wiring; check configuration |

### Error Indicators

| Message | Cause | Solution |
|---------|-------|----------|
| "Sensor Error" | Temperature sensor malfunction | Check sensor connection; verify sensor type in settings |
| "Power Error" | Low power or supply issue | Check 230V supply voltage; restart thermostat |
| "Screen Error" | Display calibration issue | Perform factory reset (last resort) |
| "WiFi No Password" | WiFi credentials not configured | Re-enter WiFi password via AGRID app |
| "WiFi Timeout" | Router or connection timeout | Check router; restart thermostat if needed |

---

## Maintenance Reminders

### Monthly

- Check temperature accuracy against a standard thermometer
- Verify WiFi connection status on app
- Ensure touchscreen is responsive (no dead spots)

### Quarterly

- Clean touchscreen gently with dry cloth
- Check that device is securely mounted
- Verify heating/cooling system responds to mode changes

### Annually

- Calibrate temperature if drift detected (via AGRID app)
- Review energy consumption in app history
- Check for firmware updates (automatic, but you can force check via app)

### Never Required

- Opening the device housing
- Replacing any internal components
- Reconfiguring sensor wiring (unless moving sensors)

---

## Troubleshooting

### Common Issues

**"WiFi offline" message but router is working**

1. Check that WiFi password is entered correctly in AGRID app
2. Verify router broadcasts 2.4GHz network (AGR25-01 does not support 5GHz)
3. Move router closer to thermostat (try within 10m)
4. Power cycle the thermostat (turn OFF then ON)
5. If still offline, restart router

**Temperature not changing when setting is adjusted**

1. Verify HVAC system is powered and functional
2. Check that correct mode is selected (Heat for winter, Cool for summer)
3. Confirm relays or valves are responding (listen for clicks when changing mode)
4. Verify sensor type configuration matches physical sensor installation
5. Check relay wiring at terminal block

**Touchscreen unresponsive to taps**

1. Ensure thermostat is powered (check backlight)
2. Clean screen gently with soft, dry cloth
3. Try tapping in center of screen (edges may have lower sensitivity)
4. Restart thermostat (power OFF then ON)
5. If problem persists, perform factory reset via AGRID app

**AGRID app cannot find thermostat**

1. Verify thermostat is powered and WiFi is connected (check display)
2. Ensure you're on same WiFi network as thermostat
3. Force close AGRID app and reopen
4. Check that app has location and network permissions enabled
5. Manually enter device ID if QR code scan fails

---

## Safety Reminders

!!!danger "Do Not"
    - Do not immerse thermostat in water
    - Do not open device housing
    - Do not expose to temperatures below 5°C or above 40°C
    - Do not install in wet or damp locations
    - Do not interrupt power during WiFi updates

!!!warning "Important"
    - Thermostat does not control heater directly - external contactor is required
    - Do not cover air vents on back of unit
    - Do not expose to direct sunlight for extended periods
    - Do not mount above 2m height for safety and accessibility

---

## User Account Management (AGRID App)

### Sharing with Family

1. Open AGRID Installer app
2. Select thermostat device
3. Tap "Share Device" or "Users"
4. Enter family member's email address
5. Select permission level:
   - **View Only** - See temperature and status only
   - **Control** - Can adjust mode and setpoint
   - **Admin** - Can also modify settings and schedules

### Permission Levels

| Permission | Can View | Can Adjust | Can Configure |
|-----------|----------|-----------|----------------|
| **View Only** | ✓ | ✗ | ✗ |
| **Control** | ✓ | ✓ | ✗ |
| **Admin** | ✓ | ✓ | ✓ |

---

*For additional support, visit the AGRID website or contact technical support.*
