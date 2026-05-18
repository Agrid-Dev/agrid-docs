# Privacy Policy

This policy describes the data processed by the AGRID AGR25-01 connected thermostat, the purposes of processing, retention periods, recipients, deletion mechanisms, and the user notification mechanism applied when changes affect data protection or privacy (UNM mechanism, clauses UNM-1 and UNM-2 of EN 18031-2).

!!! note "Key point"
    The thermostat processes technical and comfort data required to regulate a zone. Some data may become personal data when it can be used to infer the occupancy of a room, the use of equipment, or the association with an identified site.

## Data Processed

The thermostat is not designed to directly identify individuals on site. However, occupancy, booking, network or diagnostic data may constitute personal data when linked to an identifiable room, user, installer, or customer.

| Category | Examples | Primary use |
| --- | --- | --- |
| Comfort and control data | Temperature, humidity, light level, setpoint, HVAC mode, fan speed, output states, timestamps. | Drive heating, cooling, ventilation, and the local display. |
| Presence and zone states | Radar/presence, occupancy, keycard, window open/closed, current or upcoming bookings when configured. | Adapt control, reduce consumption, manage occupancy scenarios. |
| Network data and technical identifiers | MAC address, IP, RSSI, SSID, Wi-Fi password, broker/BMS address, MQTT port, MQTT credentials, mTLS certificates. | Connect the thermostat to the site network and to authorized supervision services. |
| Installer configuration | Language, time zone, thresholds, calibrations, external sensors, control rules, settings access codes. | Configure the device for the site and keep it consistent with the installation. |
| Technical logs | Events, reboots, MQTT connect/disconnect, command errors, firmware state, GitHash/version. | Diagnostics, security, maintenance, incident analysis, and evidence of certain actions. |

Unless the site is specifically configured otherwise, the thermostat does not collect audio, image, video, personal communication content, or precise geolocation of a person. The presence value is a technical zone state, not a nominal identification.

## Purposes of Processing

- Regulate temperature, humidity, ventilation, and HVAC outputs based on the site configuration.
- Locally display the zone state, setpoints, and information useful to the user or installer.
- Connect the device to Wi-Fi, BMS/BAS, and the MQTT broker when this connection is enabled.
- Enable supervision, diagnostics, maintenance, incident remediation, and authorized updates.
- Protect the device and its communications, in particular through authentication, certificates, firmware signing, and security logs.
- Manage ownership transfer, certificate revocation, and factory reset.

## Legal Bases

The applicable legal bases must be confirmed by the data controller based on the deployment context. As a reference, processing necessary for the thermostat to operate may rely on the performance of a contract or on the legitimate interest of the data controller to operate, maintain, and secure its equipment. Optional processing that is not necessary for the service must be documented separately and, where required, subject to consent or to another applicable legal basis.

## Recipients

Data may be accessible, within the limits of their permissions, to the following categories:

- authorized personnel of the data controller or of the site operator;
- authorized installers and maintainers;
- MQTT broker, BMS/BAS, or supervision infrastructure configured by the site;
- technical providers for hosting, operations, support, or PKI when their intervention is needed;
- competent authorities when a legal obligation applies.

Data is not sold. Any transmission to a third party not listed above must be documented, limited to a specific purpose, and brought to the attention of the users concerned.

## Retention and Deletion

| Data | Duration | Deletion |
| --- | --- | --- |
| Data in RAM | While the device is running | Automatic overwrite, restart, or factory reset. |
| Persistent local configuration | Until modification, reinstallation, ownership transfer, or factory reset | Local deletion via factory reset or authorized configuration wipe. |
| Local logs | Until rotation, log wipe, or factory reset | Local deletion via factory reset; maximum duration to be defined by the site policy. |
| Local MQTT/mTLS credentials and certificates | Until replacement, revocation, or factory reset | Local deletion via factory reset; revocation must also be performed server-side/PKI. |
| Data received server-side by the broker/BMS or supervision infrastructure | [To be filled: server-side duration per data category] | Deletion or anonymization according to the data controller's policy. |

**Factory reset.** The factory reset locally erases persisted data, configuration, Wi-Fi networks, MQTT credentials, TLS/mTLS certificates, logs, and internal keys stored on the device. It does not, on its own, revoke a certificate that has already been issued server-side: revocation and removal of the device-to-owner association must also be performed on the broker or the previous owner's PKI. See the [ownership transfer procedure](ownership-transfer-procedure.md).

## Security

The thermostat includes technical measures intended to limit unauthorized access and protect the integrity of embedded software: firmware component signing, network authentication according to configuration, TLS/mTLS certificates when the secured mode is provisioned, protected local storage for some persistent data, event logs, and the factory reset mechanism.

Effective security also depends on the site configuration: strong Wi-Fi passwords, unique per-device certificates, revocation of old certificates, network access restrictions, authorized firmware updates, and control of installation accounts. See also the [security support policy](security-support-policy.md).

## Transfers Outside the European Union

To be completed depending on the hosting, MQTT broker, support tooling, and providers used. If personal data is transferred outside the European Union or the European Economic Area, the data controller must indicate the country involved, the applicable safeguard, and how to obtain a copy of it.

## Data Subject Rights

Under the conditions set by applicable regulation, data subjects can exercise their rights of access, rectification, erasure, restriction, objection, and, where the legal basis allows, portability.

Requests must be sent to: [privacy contact]. If the thermostat is operated by a customer or a site manager, AGRID may need to forward the request to the competent data controller. A complaint can also be lodged with the relevant supervisory authority (CNIL in France).

## Change Notification and UNM Mechanism

In line with clauses UNM-1 and UNM-2 of EN 18031-2, users must be informed of changes that affect the protection or privacy of personal data, except where another notification method, independent of the equipment, exists and is effectively used.

Each change notification must, at a minimum, contain:

- a clear description of the change;
- a description of its effect on the protection and privacy of personal data.

The selected notification channels are: updated user documentation, release notes, the installer app, a local message on the thermostat when the change directly concerns the device or its configuration, and contractual information or email when the data controller already has a suitable communication channel.

Examples of changes that must be notified: addition of a new data category collected, longer retention duration, new recipient, activation of a more detailed occupancy feature, change of hosting, modification of the deletion mechanism, or security change that may affect privacy.

## Version and Accessibility

The published version of this policy must be available in the user documentation and, where possible, from the installer app. Any published version must include its effective date, its version number, and the contact channel for personal data questions.

## Compliance References

- [GDPR, Article 13 — information to be provided where personal data is collected from the data subject (EUR-Lex)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02016R0679-20160504)
- [CNIL — data subject rights and Chapter III of the GDPR](https://www.cnil.fr/en/data-subjects-rights)
- [CNIL — limiting data retention](https://www.cnil.fr/en/limiting-data-retention)
