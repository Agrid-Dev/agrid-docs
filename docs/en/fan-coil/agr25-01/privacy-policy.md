# Privacy Policy

This policy describes the data processed by the AGRID AGR25-01 connected thermostat, the purposes of processing, retention periods, recipients, deletion mechanisms, and the user notification mechanism applied when changes affect data protection or privacy (UNM mechanism, clauses UNM-1 and UNM-2 of EN 18031-2).

!!! note "Key point"
    The thermostat processes technical and comfort data required to regulate a zone. Some data may become personal data when it can be used to infer the occupancy of a room, the use of equipment, or the association with an identified site.

## Data Processed

The thermostat is not designed to directly identify individuals on site. However, occupancy, booking, network or diagnostic data may constitute personal data when linked to an identifiable room, user, installer, or customer.

| Category | Examples | Primary use |
| --- | --- | --- |
| Comfort and control data | Temperature, humidity (internal SHT31 sensor), light level, setpoint, HVAC mode, fan speed, output states, processor temperature (internal sensor of the AT32F407 MCU), timestamps. | Drive heating, cooling, ventilation, and the local display. |
| Presence and zone states | Occupancy (derived state), motion detection via internal radar sensor and optional external PIR sensor (dry-contact input on S1/S2, corresponding to firmware inputs DI_1/DI_2), keycard, window open/closed, current or upcoming bookings when configured. | Adapt control, reduce consumption, manage occupancy scenarios. |
| Network data and technical identifiers | MAC address, IP, RSSI, SSID, Wi-Fi password, broker/BMS address, MQTT port, MQTT credentials, mTLS certificates. | Connect the thermostat to the site network and to authorized supervision services. |
| Installer configuration | Language, time zone, thresholds, calibrations, external sensors, control rules, settings access codes. | Configure the device for the site and keep it consistent with the installation. |
| Technical logs | Events, reboots, MQTT connect/disconnect, command errors, firmware state, GitHash/version. | Diagnostics, security, maintenance, incident analysis, and evidence of certain actions. |

Unless the site is specifically configured otherwise, the thermostat does not collect audio, image, video, personal communication content, or precise geolocation of a person. The thermostat has no built-in image or sound sensor. It includes an internal radar presence sensor to detect motion in the room and also accepts an optional external PIR sensor wired to a dry-contact input (S1/S2, corresponding to firmware inputs DI_1/DI_2). Neither of these two sensors performs biometric identification: they only provide a binary motion / no-motion state. The presence value remains a technical zone state, not a nominal identification.

## Purposes of Processing

- Regulate temperature, humidity, ventilation, and HVAC outputs based on the site configuration.
- Locally display the zone state, setpoints, and information useful to the user or installer.
- Connect the device to Wi-Fi, BMS/BAS, and the MQTT broker when this connection is enabled.
- Enable supervision, diagnostics, maintenance, incident remediation, and authorized updates.
- Protect the device and its communications, in particular through authentication, certificates, firmware signing, and security logs.
- Manage ownership transfer, certificate revocation, and factory reset.

## Legal Bases

Processing carried out **by AGRID** as manufacturer and importer (firmware signing, initial factory certificate issuance, product support on request) relies on:

- the **legal obligation** of compliant market placement and security support (Directive 2014/53/EU (RED), Directive 2011/65/EU (RoHS), Delegated Regulation (EU) 2022/30, the EN 18031 series of standards);
- AGRID's **legitimate interest** in ensuring the integrity and security of its equipment throughout its lifecycle.

Processing carried out **by the site operator** (control, supervision, logging, archiving of data received by the MQTT broker or the BMS/BAS) relies on legal bases determined by the operator based on the deployment context, typically:

- performance of a **contract** with its customers or occupants;
- **legitimate interest** in operating, maintaining, and optimizing its equipment and site;
- **legal obligation** (energy efficiency, building safety) where applicable.

Optional processing that is not necessary for the service (detailed occupancy features, usage statistics transmitted to a third party, etc.) must be documented separately and, where required, subject to consent or to another applicable legal basis.

## Recipients

Data may be accessible, within the limits of their permissions, to the following categories:

- authorized personnel of the data controller or of the site operator;
- authorized installers and maintainers;
- MQTT broker, BMS/BAS, or supervision infrastructure configured by the site;
- AGRID, as manufacturer and importer, solely for product support, firmware signing, and initial factory certificate issuance — AGRID does not receive any usage data from the thermostat in production;
- competent authorities when a legal obligation applies.

Data is not sold. Any transmission to a third party not listed above must be documented, limited to a specific purpose, and brought to the attention of the users concerned.

## Retention and Deletion

| Data | Duration | Deletion |
| --- | --- | --- |
| Data in RAM | While the device is running | Automatic overwrite, restart, or factory reset. |
| Persistent local configuration | Until modification, reinstallation, ownership transfer, or factory reset | Local deletion via factory reset or authorized configuration wipe. |
| Local logs | Until rotation, log wipe, or factory reset | Local deletion via factory reset; maximum duration to be defined by the site policy. |
| Local MQTT/mTLS credentials and certificates | Until replacement, revocation, or factory reset | Local deletion via factory reset; revocation must also be performed server-side/PKI. |
| Data received server-side by the MQTT broker, BMS/BAS, or supervision infrastructure | Duration defined and documented by the site operator, in accordance with its own retention policy. The thermostat operates standalone, with no server required; when an AGRID server is deployed, it is deployed locally on the site's infrastructure and the data remains under the operator's physical and logical control. AGRID does not operate any centralized server receiving such data. | Deletion or anonymization according to the site operator's policy, as data controller. |

**Factory reset.** The factory reset locally erases persisted data, configuration, Wi-Fi networks, MQTT credentials, TLS/mTLS certificates, logs, and internal keys stored on the device. It does not, on its own, revoke a certificate that has already been issued server-side: revocation and removal of the device-to-owner association must also be performed on the broker or the previous owner's PKI. See the [ownership transfer procedure](ownership-transfer-procedure.md).

## Security

The thermostat includes technical measures intended to limit unauthorized access and protect the integrity of embedded software: firmware component signing, network authentication according to configuration, TLS/mTLS certificates when the secured mode is provisioned, protected local storage for some persistent data, event logs, and the factory reset mechanism.

Effective security also depends on the site configuration: strong Wi-Fi passwords, unique per-device certificates, revocation of old certificates, network access restrictions, authorized firmware updates, and control of installation accounts. See also the [security support policy](security-support-policy.md).

## Transfers Outside the European Union

The thermostat does not transmit any data to a centralized AGRID server. No transfer outside the European Union is performed by AGRID in the course of operating the product.

If the site operator configures an MQTT broker, a BMS/BAS, or supervision infrastructure hosted outside the European Union or the European Economic Area, it is incumbent upon the operator, as data controller, to indicate the country involved, the applicable safeguard (standard contractual clauses, adequacy decision, etc.), and how to obtain a copy of it.

## Data Subject Rights

Under the conditions set by applicable regulation, data subjects can exercise their rights of access, rectification, erasure, restriction, objection, and, where the legal basis allows, portability.

Requests must be sent to: **contact@a-grid.com**. If the thermostat is operated by a customer or a site manager, AGRID forwards the request to the competent data controller. A complaint can also be lodged with the relevant supervisory authority (CNIL in France).

## Change Notification and UNM Mechanism

In line with clauses UNM-1 and UNM-2 of EN 18031-2, users must be informed of changes that affect the protection or privacy of personal data, except where another notification method, independent of the equipment, exists and is effectively used.

Each change notification must, at a minimum, contain:

- a clear description of the change;
- a description of its effect on the protection and privacy of personal data.

The selected notification channels are: updated user documentation, release notes, the installer app, a local message on the thermostat when the change directly concerns the device or its configuration, and contractual information or email when the data controller already has a suitable communication channel.

Examples of changes that must be notified: addition of a new data category collected, longer retention duration, new recipient, activation of a more detailed occupancy feature, change of hosting, modification of the deletion mechanism, or security change that may affect privacy.

## Version and Accessibility

The published version of this policy must be available in the user documentation and, where possible, from the installer app. Any published version must include its effective date, its version number, and the contact channel for personal data questions.

**Version:** 1.0 — **Effective date:** 15 June 2026 — **Contact:** contact@a-grid.com

## Compliance References

- [GDPR, Article 13 — information to be provided where personal data is collected from the data subject (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02016R0679-20160504)
- [CNIL — data subject rights and Chapter III of the GDPR](https://www.cnil.fr/en/data-subjects-rights)
- [CNIL — limiting data retention](https://www.cnil.fr/en/limiting-data-retention)
