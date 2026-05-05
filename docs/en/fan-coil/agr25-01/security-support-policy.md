# Security Support Policy

This page describes the security support policy applicable to the AGRID AGR25-01 thermostat.

## Security Support Duration

AGRID provides security updates for the AGR25-01 thermostat for 5 years from the first market placement date of this product generation (reference date: [DD/MM/YYYY]).

The support end date (EOL) is published on a-grid.com and in the product documentation.

Later hardware revisions (AGR25-02, etc.) have their own 5-year support period from their own market placement date.

## Vulnerability Monitoring

AGRID performs monthly monitoring of:

- The NVD database ([nvd.nist.gov](https://nvd.nist.gov)).
- The European EUVD database (ENISA).
- Security advisories from relevant suppliers.

This monitoring covers software and hardware components integrated in the AGR25-01 thermostat, including:

- AT32F403 MCU.
- WiFi and TLS stack.
- Third-party libraries (lwIP, mbedTLS, FreeRTOS).
- ATECC608B secure element.

Each monitoring campaign is recorded as a dated entry in the vulnerability monitoring register maintained by the cybersecurity manager.

## Intervention Timelines

The following timelines start from confirmation that a vulnerability is applicable to the product.
A vulnerability may be classified as "not applicable" if the affected component is not used in the thermostat context, or if intrinsic mitigation measures neutralize the attack vector; this analysis is documented in the monitoring register.

| Severity (CVSS v3.1) | Fix developed | OTA deployment |
| --- | --- | --- |
| Critical (9.0-10.0) | 30 days | 45 days |
| High (7.0-8.9) | 60 days | 90 days |
| Medium (4.0-6.9) | Next planned release | Next planned release |
| Low (< 4.0) | Case-by-case evaluation | Included in functional updates |

## End-of-Life (EOL) Procedure

At the end of the support period:

- Advance notice: the EOL date is announced at least 6 months in advance on a-grid.com and in updated product documentation.
- Final security bulletin: a final bulletin is published on the EOL date, covering vulnerabilities known at that date, with a final corrective update if needed.
- Security update stop: no new security update is published after the EOL date. The thermostat continues to operate normally, including remote-control functions. Users are informed that exposure to vulnerabilities discovered after EOL is then under their responsibility.
- Documentation retention: the cybersecurity technical file is retained for at least 10 years after EOL, in line with CRA requirements.
