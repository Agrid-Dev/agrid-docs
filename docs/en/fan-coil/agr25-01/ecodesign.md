# Ecodesign Information

## Regulation 2024/1103 - Energy-Related Products

The AGR25-01 Fan Coil Thermostat complies with **Regulation (EU) 2024/1103** on ecodesign requirements for energy-related products. This document provides the product fiche and ecodesign information required by Article 7 of the regulation.

---

## Device Classification

### Product Type

| Parameter | Value |
|-----------|-------|
| **Device Category** | Independent Connected Control |
| **Device Type** | Fan Coil Thermostat with WiFi Connectivity |
| **Control Function** | Temperature and HVAC system management |
| **Product Class** | Type TE (Standalone) or Type TW (with AGRID Server) |

### Definition

The AGR25-01 is an **independent connected control** that communicates with HVAC systems and/or networked services. It may operate in two configurations:

1. **Type TE (Standalone)** - Local operation without network connection (autonomous mode)
2. **Type TW (With Network)** - Connected to AGRID servers for enhanced features and remote control

---

## Function Codes & Capabilities

### Type TE (Standalone Configuration)

Operates without requiring connection to external network services. All primary control functions available locally.

| Function Code | Function Name | Supported | Notes |
|--------|---------------|-----------|-------|
| **1** | Setpoint adjustment | ✓ | Via touchscreen |
| **2** | Mode selection (H/C/F/A) | ✓ | Via touchscreen |
| **3** | Fan speed control | ✓ | Via touchscreen (Low/Med/High/Auto) |
| **4** | Network functions | ✗ | Not available in standalone mode |
| **5** | Data logging/history | ✓ | Local logging only |
| **6** | Advanced scheduling | ✗ | Not available in standalone mode |
| **7** | Network reporting | ✗ | Not available in standalone mode |
| **8** | System diagnostics | ✓ | Error messages on display |

### Type TW (Connected Configuration)

Enhanced functionality when connected to AGRID server network for remote management and advanced features.

| Function Code | Function Name | Supported | Details |
|--------|---------------|-----------|---------|
| **1** | Setpoint adjustment | ✓ | Local + remote via AGRID app |
| **2** | Mode selection | ✓ | Local + remote control |
| **3** | Fan speed control | ✓ | Local + remote control |
| **4** | Network management | ✓ | WiFi config, remote access, OTA updates |
| **5** | Advanced data logging | ✓ | Cloud storage, extended history |
| **6** | Scheduling & automation | ✓ | Programmable setpoints, mode schedules, geofencing |
| **7** | Remote network reporting | ✓ | Alerts, notifications, performance analytics |
| **8** | Advanced diagnostics | ✓ | Remote troubleshooting, predictive maintenance |

---

## Power Consumption Specifications

### Definition of Operating Modes

| Mode | Condition | Description |
|------|-----------|-------------|
| **Po (Off Mode)** | Device powered but not operating | Minimum power state |
| **Psm (Standby Mode)** | Powered, local control ready, WiFi disabled | Screen on, relays inactive |
| **Pnsm (Network Standby)** | Powered, WiFi connected, awaiting commands | Connected to AGRID servers, can receive updates |
| **Pp (Operating Mode)** | Active heating/cooling/fan operation | Full HVAC system control engaged |
| **Pt (Test Mode)** | Factory testing only | Not applicable for user operation |

### Power Consumption Table

| Operating Mode | Parameter | Measurement | Standard |
|----------------|-----------|-------------|----------|
| **Off Mode** | Po | <0.23W | Regulation 2024/1103 |
| **Standby Mode (local)** | Psm | <0.23W | Regulation 2024/1103 |
| **Network Standby** | Pnsm | 1.18W | WiFi connected, awaiting remote commands |
| **Operating (max)** | Pp | 2.0W | Maximum including WiFi transmission |
| **Operating (typical)** | Pp (typ) | 1.5W | Average heating/cooling operation |
| **Operating (WiFi off)** | Pp (no WiFi) | 1.2W | Local operation without network |

### Power Breakdown

| Component | Typical Power |
|-----------|--------|
| Display (backlight + electronics) | 0.6W |
| WiFi module (active) | 0.4W |
| Relay drivers & outputs | 0.3W (varies with load) |
| Processor & control circuits | 0.2W |
| Miscellaneous (sensors, etc.) | 0.1W |
| **Total typical** | **1.6W** |

!!!info "Power Consumption Note"
    Measured power consumption includes thermostat electronics only. It does NOT include power consumed by external devices controlled by relay outputs (solenoid valves, fans, heaters), which are powered separately from the thermostat's 230V supply.

---

## Annual Energy Consumption

### Type TE (Standalone) - No Network

**Calculation Method:** EN 60730-1 standby measurement procedure

| Parameter | Value | Basis |
|-----------|-------|-------|
| **Average Daily Standby** | 4.0 kWh/year | 0.23W × 24h × 365d ÷ 1000 |
| **Average Daily Operating** | 2.8 kWh/year | 1.5W average × 16h operating × 365d ÷ 1000 |
| **Annual Thermostat Energy** | ~6.8 kWh/year | Standby + operating hours (typical use) |
| **Energy Efficiency Class** | A | Excellent - minimal direct energy consumption |

### Type TW (With AGRID Server) - Connected

Additional energy for network operation (WiFi and server connectivity):

| Parameter | Value | Basis |
|-----------|-------|-------|
| **Network Standby** | 8.6 kWh/year | 1.18W × 24h × 365d ÷ 1000 |
| **Operating with WiFi** | 2.8 kWh/year | 1.5W × 16h × 365d ÷ 1000 |
| **Annual Thermostat Energy** | ~11.4 kWh/year | Network standby + operating |
| **Energy Efficiency Class** | A | Excellent - minimal direct consumption |
| **Network Standby Ratio** | 75% | Typical smart device duty cycle |

!!!tip "Energy Saving Benefit"
    Although the thermostat itself consumes minimal energy, it enables savings of **15-30% in HVAC system energy** through efficient control and scheduling. Net energy benefit is substantial when considering controlled systems.

---

## Ecodesign Compliance Features

The AGR25-01 incorporates multiple ecodesign principles to minimize environmental impact:

### Energy Efficiency

- **Efficient Standby** - <0.23W in local standby mode
- **Low Operating Power** - 2W maximum for all thermostat circuits
- **Proportional Control** - 0-10V analog outputs reduce valve hunting and energy waste
- **Smart Fan Control** - Auto mode reduces unnecessary fan operation

### Material Efficiency

- **Optimized Packaging** - Minimal packaging material; recyclable cardboard
- **Compact Design** - 105×85×30mm reduces material per unit functionality
- **Durable Electronics** - Rated for 100,000+ mechanical cycles (high reliability)
- **Repairable Design** - Modular terminal blocks allow simple repairs

### Longevity & Durability

- **10-Year Lifespan Target** - Designed for extended service life
- **Software Updates** - OTA firmware updates extend functional life
- **Standard Components** - Uses common industry-standard relay and connector types
- **Thermal Protection** - Integrated thermal management extends component life

### Recyclability

- **RoHS Compliant** - No hazardous lead solder or toxic materials
- **Recyclable Enclosure** - Polymer housing is fully recyclable
- **WEEE Compliant** - Separate collection required for proper recycling
- **Material Percentage** - ~70% recyclable content by weight

### End-of-Life Management

- **WEEE Take-Back** - AGRID participates in EU WEEE collection programs
- **Authorized Recycling** - Devices must be returned to approved facilities
- **Data Destruction** - WiFi credentials securely erased during recycling
- **Recovery Rate Target** - 80% of device mass recovered as materials

---

## Product Information Fiche

### Required Ecodesign Data (Article 7)

| Information | Specification | Unit |
|-------------|---------------|------|
| **Manufacturer** | Beijing Breeze Technology Co., Ltd. | — |
| **Importer** | AGRID SAS, Paris | — |
| **Model Identifier** | AGR25-01 | — |
| **Type of Control** | Automatic room temperature control | — |
| **Control Type** | Connected (TE or TW) | — |
| **Nominal Power Supply** | 230V~ 50Hz | AC |
| **Off-Mode Power (Po)** | <0.23 | W |
| **Standby Power (Psm)** | <0.23 | W |
| **Network Standby (Pnsm)** | 1.18 | W |
| **Operating Power (Pp max)** | 2.0 | W |
| **Operable Without Network (TE)** | Yes | Boolean |
| **Annual Operating Time** | 16 | hours/day |
| **Annual Operating Days** | 365 | days/year |
| **Estimated Annual Energy Consumption (TE)** | 6.8 | kWh/year |
| **Estimated Annual Energy Consumption (TW)** | 11.4 | kWh/year |

### Device Function Code Matrix

**Type TE (Standalone):** 1, 2, 3, 0, 5, 6, 0, 8

**Type TW (Networked):** 1, 2, 3, 4, 5, 6, 7, 8

---

## Environmental Certifications

### CE Mark

Certifies compliance with:
- Directive 2014/53/EU (RED - Radio Equipment)
- Ecodesign Regulation 2024/1103
- RoHS Directive 2011/65/EU

### EU Ecolabel Eligibility

The AGR25-01 may be eligible for EU Ecolabel registration under **Product Category 11 (Electrical and Electronic Equipment)**. Ecolabel certification is being evaluated.

### EPREL Registry

Energy-related Product Registry data (EPREL):

| Field | Value |
|-------|-------|
| **Registry Entry** | [Pending EPREL registration] |
| **Ecodesign Category** | Controls for heating/cooling systems |
| **Regulated Product Type** | Independent connected control |
| **Compliance Status** | Compliant with 2024/1103 |

---

## Sustainable Use Recommendations

### For End Users

1. **Enable WiFi & Scheduling** - Remote control and scheduling typically save 15-30% HVAC energy
2. **Use Auto Mode** - Automatic heating/cooling switching reduces energy waste
3. **Set Reasonable Setpoints** - Lower heating by 1°C or raise cooling by 1°C = 5-7% savings
4. **Geofencing Feature** - Enable location-based control to avoid heating/cooling empty homes
5. **Firmware Updates** - Keep thermostat updated for latest efficiency features

### For Installers

1. **Proportional Control** - Install proportional solenoid valves when possible (more efficient than on/off)
2. **Sensor Placement** - Locate temperature sensors away from heat sources and drafts
3. **Local Feedback** - Educate users on energy-efficient setpoint recommendations
4. **Proper Calibration** - Ensure sensor accuracy for efficient control

### Environmental Impact Reduction

| Action | HVAC Energy Saving | Effort | Cost |
|--------|-------------------|--------|------|
| Use Auto mode | 8-12% | Low | Free |
| Enable WiFi scheduling | 10-15% | Medium | Free |
| Lower heat by 1°C | 5-7% | Very Low | Free |
| Use geofencing | 15-25% | Medium | Free |
| Install proportional valves | 10-20% | High | €500-1000 |
| **Combined optimization** | **30-50%** | **Medium** | **Variable** |

---

## Lifecycle Environmental Impact

### Manufacturing Phase

- **Embodied Carbon:** ~2-3 kg CO₂ equivalent per unit (electronics manufacturing)
- **Packaging:** Recycled cardboard, minimal plastic
- **Transportation:** Shipped in consolidated containers to EU distribution centers

### Use Phase (10-year lifespan)

- **Direct Energy:** 68-114 kWh (thermostat only)
- **Controlled System Energy:** 5,000-15,000 kWh/year (HVAC systems) with typical 20% savings through smart control
- **Savings:** 50,000-150,000 kWh over device lifetime through efficient HVAC operation

### End-of-Life Phase

- **Recyclable Materials:** ~70% by weight (plastics, metals, electronics)
- **WEEE Collection:** Device collected and processed per EU WEEE Directive
- **Material Recovery:** Copper, aluminum, and rare materials recovered
- **Environmental Benefit:** Avoided extraction of virgin materials

**Net Lifecycle Benefit:** Savings from HVAC efficiency far exceed manufacturing and use phase impacts.

---

## Compliance Verification

### Testing Standards

Ecodesign compliance tested per:

- **EN 60730-1** - Automatic electrical controls (standby power measurement)
- **IEC 60301** - Methods for measuring electric power consumption
- **Regulation 2024/1103** - Energy-related products ecodesign procedure

### Test Report Documentation

Complete test reports available upon request from AGRID SAS:

- Standby power measurement report
- Operating mode power consumption analysis
- WiFi transmission power verification
- Annual energy estimation calculation
- Material composition declaration

---

## Future Improvements

AGRID is committed to continuous environmental improvement:

### Roadmap

- **Version 2.0** - Reduce network standby to <0.5W through optimized WiFi module
- **Enhanced Scheduling** - Additional AI-driven energy optimization features
- **Wider System Integration** - Compatibility with more HVAC systems for better control
- **Packaging Reduction** - Move to 100% recycled packaging materials

### Feedback & Improvement

Users and installers are encouraged to provide feedback on environmental performance or energy-saving suggestions via the AGRID support portal.

---

## Contact & Information

For detailed ecodesign information, test reports, or compliance documentation:

**AGRID SAS**
Paris, France

- **Email:** [compliance@agrid.fr]
- **Phone:** [contact number]
- **Website:** [AGRID compliance portal]
- **Support:** Technical support available for energy optimization questions

---

## Regulatory Reference

This ecodesign document is issued in compliance with:

- **Regulation (EU) 2024/1103** - Ecodesign requirements for energy-related products
- **Article 7** - Product fiche information requirement
- **Annex VI** - Information requirements for independent controls
- **Annex VII** - Data sheet requirements for networked products

The information provided in this document is accurate as of the date of publication and reflects the AGR25-01 model as manufactured and supported by AGRID SAS.

---

*Ecodesign Compliance Document | AGR25-01 | Version 1.0 | March 2026*

*This document may be updated if regulatory requirements change or product specifications are modified. Users are encouraged to check the AGRID website for the latest ecodesign information.*
