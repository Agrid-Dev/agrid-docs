# Ownership Transfer and Factory Reset

When a thermostat is replaced, disposed of, or transferred to a new owner, it must be dissociated from the previous owner before it is installed again. Use the local **Factory reset** action from the thermostat settings screen, then re-provision the device with the installer app.

## What the Factory Reset Deletes

The factory reset removes local data that can identify the previous site or keep access to its systems:

- Stored Wi-Fi networks and passwords.
- Local configuration such as network, BMS and MQTT settings.
- Event and diagnostic logs stored on the thermostat.
- MQTT/mTLS material stored on the device, including the client certificate and private key.
- The internal AES/flash encryption key used for protected persistent data.

Temporary Soft-AP credentials used by the installer app are session-only. They are cleared from RAM when the Soft-AP session is stopped or expires.

## Transfer Procedure

1. On the installed thermostat, open the local settings screen and run **Factory reset**. Physical access to the thermostat is required.
2. Wait until the reset completes and the thermostat restarts. Do not transfer the unit until the reset has completed successfully.
3. In the previous owner's broker or PKI system, revoke the old mTLS client certificate and remove the old device-to-owner association.
4. Start a new provisioning session with the installer app.
5. Configure the new Wi-Fi network, broker address and MQTT settings for the new owner.
6. Provision new mTLS credentials. Either generate a new key and CSR on the thermostat and sign it for the new owner, or upload a new client certificate, private key and CA chain.
7. Reload the TLS configuration, restart the thermostat, and verify that it connects only to the new owner's broker.

Ownership transfer is complete only when the old certificate is revoked server-side and the thermostat is connected with new credentials.

## Installer Notes

The firmware reset path is backed by the same erase operations exposed to authorized maintenance tooling: erase persisted data, saved Wi-Fi entries and logs, delete the local MQTT certificate files under `0:/mqtt/`, erase the internal flash key, then reboot. The mTLS certificate must also be revoked on the broker or PKI side, because local deletion alone cannot invalidate a certificate that has already been issued.
