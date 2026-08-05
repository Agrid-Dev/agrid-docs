# Privacy Policy — Mobile Application

This policy describes the data processed by the **Agrid Installation** mobile application (iOS and Android), used by installers to commission AGRID thermostats.

It complements the [AGR25-01 thermostat privacy policy](../fan-coil/agr25-01/privacy-policy.md), which covers the device itself.

!!! note "Key point"
    The application mainly runs locally on the installer's phone. Job-site data (sites, zones, configurations, photos, audio notes) stays on the device, except when deliberately sent to site equipment or when technical error diagnostics are transmitted to an error-reporting provider.

## Controller

**AGRID SAS**  
33 rue du Faubourg Saint-Antoine, 75011 Paris, France  
Contact: **contact@a-grid.com**

AGRID is the controller for personal data related to the operation of the application (any account where applicable, error logging, support). Job-site data entered for a customer or site may fall under the site operator as controller; AGRID does not receive that data in production.

## Data Processed

| Category | Examples | Storage / transmission |
| --- | --- | --- |
| Device technical identifiers | System identifiers required for operation, app version, device model, operating system. | Local; also sent to Sentry on errors (see below). |
| Job-site data entered by the installer | Site and zone names, site Wi-Fi and MQTT configuration, screen access codes, imported mTLS certificates, thermostat configuration variables. | Stored locally on the device (AsyncStorage / SQLite). Sent to the thermostat during provisioning, not to a centralized AGRID server. |
| Documentation media | Zone photos, text notes, audio comments. | Files and metadata stored locally on the device. Not sent to AGRID. |
| Data read from or written to the thermostat | Configuration state, firmware version, diagnostic logs, certificates. | Direct phone ↔ thermostat exchange (Soft AP / local network / site MQTT). |
| Error and diagnostic logs | Incident traces, technical breadcrumbs, optional error screenshots, device metadata. | Sent to Sentry (AGRID's provider) for bug diagnosis and fixes. |

The application **does not collect**:

- precise geolocation for tracking purposes (location access is only used to scan and connect to thermostat Wi-Fi networks, as required by iOS/Android);
- contacts, calendar, or personal content beyond the uses documented above;
- targeted advertising or marketing profiling.

## System Permissions

| Permission | Use |
| --- | --- |
| Camera | Scan the thermostat QR code; take zone documentation photos. |
| Photo library | Add documentation photos to zones. |
| Microphone | Record audio comments during installation. |
| Location (while in use) | Allow scanning and connection to thermostat Soft AP Wi-Fi networks. No tracking map is built. |
| Local network / Wi-Fi | Communicate with the thermostat via its access point and the site network. |

These permissions may be refused; some application features then become unavailable.

## Purposes of Processing

- Enable commissioning, configuration, and diagnostics of AGRID thermostats.
- Keep a local job history useful to the installer (sites, zones, media).
- Secure communications (certificate provisioning, MQTT/TLS connection).
- Diagnose and fix application failures (Sentry).
- Respond to product support requests.

## Legal Bases

- **Performance of a contract** / pre-contractual steps with the installer, partner, or customer for whom commissioning is performed.
- AGRID's **legitimate interest** in ensuring the security, stability, and support of the application (error logging, abuse prevention).
- **Legal obligation** where applicable (response to authorities, limited retention related to a dispute).

## Recipients

- AGRID (product, support, and cybersecurity teams), on a need-to-know basis.
- Technical provider **Sentry** (Functional Software, Inc.), for collection and analysis of error logs.
- Competent authorities when a legal obligation applies.

Job-site data is not sold. It is not shared with advertising partners.

## Retention and Deletion

| Data | Duration | Deletion |
| --- | --- | --- |
| Sites, zones, configurations, local media | Until deleted by the user or the application is uninstalled | Manual deletion in the app, or clearing app data / uninstall. |
| Error logs (Sentry) | Limited to diagnosis and remediation, according to the retention policy configured with the provider | Automatic expiry on Sentry's side; erasure requests via contact@a-grid.com. |

Uninstalling the application deletes data stored locally on the device. It does not by itself revoke certificates already provisioned on a thermostat: see the [ownership transfer procedure](../fan-coil/agr25-01/ownership-transfer-procedure.md).

## Transfers Outside the European Union

Error logs may be processed by Sentry on infrastructure located in the **United States**. This transfer relies on the appropriate safeguards implemented by the provider (in particular standard contractual clauses / Data Processing Addendum).

Apart from this diagnostic channel, the application does not send job-site data to a centralized AGRID server. If the installer configures an MQTT broker or supervision infrastructure outside the EU/EEA for the site, that choice and the related safeguards are the responsibility of the site's data controller.

## Security

Measures applied include:

- local exchanges with the thermostat via Soft AP and, in production, MQTT over TLS / mTLS when provisioned;
- deliberate exclusion of secrets (Wi-Fi passwords, PINs, private keys, full QR content) from Sentry logs and breadcrumbs;
- local storage of job-site data on the installer's device.

The installer remains responsible for the physical protection of their phone, device lock, and non-disclosure of site certificates and passwords.

## Data Subject Rights

Under the GDPR, you may exercise your rights of access, rectification, erasure, restriction, objection and, where applicable, portability.

Requests should be sent to: **contact@a-grid.com**.  
A complaint may also be lodged with a supervisory authority (in France: [CNIL](https://www.cnil.fr)).

## Changes

AGRID may update this policy. The current version is always the one published at `https://docs.a-grid.com/en/app/privacy/`. For material changes affecting data protection, users are informed through an update of this page and, where relevant, via the application release notes.

**Version:** 1.0 — **Effective date:** 5 August 2026 — **Contact:** contact@a-grid.com
