# Variables du firmware (`DATA_TABLE`)

<!-- Page générée automatiquement depuis les sources du firmware. Ne pas éditer à la main : toute modification sera écrasée. -->

Liste de référence des variables exposées par le firmware du thermostat (la table `DATA_TABLE`). Cette page est générée automatiquement à partir du firmware : elle suit la version en cours de développement.

Le tableau compte **246 entrées**, dont **10** encore au stade planification (signalées _(non implantée)_ dans la colonne « Description »).

Le **même nom de variable** est utilisé sur les trois canaux de communication :

- **HTTP** — `POST /show_data -d "dataname=<Nom>"` (lecture), `POST /update_data -d "dataname=<Nom>&value=<val>"` (écriture), `GET /enums` (valeurs des énumérations).
- **MQTT** — `{"command":"READ_DATA","data":"<Nom>"}` / `{"command":"WRITE_DATA","data":"<Nom>","value":<val>}`.
- **Modbus RTU** — voir la carte des registres du firmware.

## Légende

**Accès** — `r` lecture seule · `rw` lecture / écriture · `w` écriture seule.

| Type | Signification |
|---|---|
| `int32` | entier signé 32 bits |
| `float` | flottant IEEE-754 |
| `fxp1000` | point-fixe : valeur réelle × 1000 (ex. 21,5 °C ↔ `21500`) |
| `boolean` | booléen (`0`/`1`, `true`/`false`) |
| `enum` | énumération — valeurs admises listées dans la colonne « Description » |
| `char` | chaîne de caractères (max 32 o) |
| `version` | version compacte `MAJOR.MINOR.BUILD` |

> _(non implantée)_ — variable présente dans le tableau de conception mais pas encore câblée dans le firmware.

> _(masqué)_ — valeur par défaut volontairement non publiée (identifiant ou secret d'usine).

## Sommaire

- **Real-Time Variables**
  - [Status informations](#status-informations)
  - [Status Boot](#status-boot)
  - [Status Time](#status-time)
  - [Status Debug](#status-debug)
  - [Status Setpoints](#status-setpoints)
  - [Inputs Internal raw mesurements](#inputs-internal-raw-mesurements)
  - [Inputs Internal Treated values](#inputs-internal-treated-values)
  - [Inputs External raw mesurements](#inputs-external-raw-mesurements)
  - [Inputs From external Sensors Treated](#inputs-from-external-sensors-treated)
  - [Inputs Computed Values No sensors needed](#inputs-computed-values-no-sensors-needed)
  - [Inputs Values from Server](#inputs-values-from-server)
  - [Inputs Output values](#inputs-output-values)
- **Configuration**
  - [Information](#information)
  - [Time](#time)
  - [Print Design User Interface](#print-design-user-interface)
  - [System Choice](#system-choice)
  - [Input Treatment](#input-treatment)
  - [Tsetpoint Shift Feature](#tsetpoint-shift-feature)
  - [Change Over](#change-over)
  - [Output Treatment](#output-treatment)
  - [Communication Protocol](#communication-protocol)
  - [Communication Wifi Network](#communication-wifi-network)
  - [Communication MQTT Parameters](#communication-mqtt-parameters)
  - [Communication Modbus Parameters](#communication-modbus-parameters)
  - [Security](#security)
  - [Internal Regulation Resistance](#internal-regulation-resistance)
  - [Internal Regulation Fan](#internal-regulation-fan)
  - [Internal Regulation AUTO Mode](#internal-regulation-auto-mode)
  - [Internal Regulation Main regulation](#internal-regulation-main-regulation)
  - [Internal Regulation PID](#internal-regulation-pid)
  - [Internal Regulation Local Optimisation Strategies](#internal-regulation-local-optimisation-strategies)
  - [Internal Regulation sensor selection](#internal-regulation-sensor-selection)
  - [Internal Regulation backlight_config](#internal-regulation-backlight_config)

## Real-Time Variables

### Status informations

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `FirmwareVersion` | `int32` | r | — | firmware version. to be set manually in data_values.c. Should not be rewriten.<br>0xAABBCCDD with AA = major, BB = minor, CC = revision and DD = patch |
| `GitHash` | `char` | r | — | char[8] / short git hash as string. Should not be rewriten. |

### Status Boot

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Boot_Mode` | `enum` | r | BOOT_MODE_NORMAL | type de boot: minimal, fake_minimal ou normal. Le fake minimal est just le blocage de l'utilisateur dans les écrans settings.<br>_Valeurs : BOOT_MODE_NORMAL · BOOT_MODE_FAKE_MINIMAL · BOOT_MODE_MINIMAL_ |
| `Bootloader_Version` | `version` | r | -1 | version( max 127.127.65024) of bootlaoder |
| `Stage0_Version` | `version` | r | -1 | version( max 127.127.65024) of stage0 |
| `App_Version` | `version` | r | -1 | version( max 127.127.65024) of aplication. |
| `Required_Bootloader_Version` | `version` | r | -1 | expected bootloader version |
| `Required_Stage0_Version` | `version` | r | -1 | expected stage0 version |

### Status Time

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Timestamp_UTC` | `int32` | rw | 0 | Nombre de secondes actuel depuis le 1er Janvier 2020 en heure UTC |

### Status Debug

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Reboot_Timestamp` | `int32` | rw | 0 | timestamp_UTC du dernier reboot lié à un bug (watchdog).<br>_Absente du build MINIMAL._ |
| `Reboot_Count_UTC` | `int32` | rw | 0 | nombre de reboot lié à un bug (watchdog). Cette variable s'incrémente à chaque reboot, mais est perdu en cas de panne de courant.<br>_Absente du build MINIMAL._ |
| `Event` | `enum` | — | NO_EVENT | Dernier événement système remonté par le firmware : boot, Wi-Fi, MQTT, script, téléchargement OTA, opérations flash et actions de configuration.<br>_97 valeurs admises — les lister via `GET /enums`._ |

### Status Setpoints

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `State` | `boolean` | rw | false | État ON/OFF du ventilo-convecteur<br>_Absente du build MINIMAL._ |
| `HVAC_Mode` | `int32` | rw | 0 | Integer qui pointe vers la valeur de HVAC_Mode_i<br>_Absente du build MINIMAL._ |
| `HVAC_Real_Mode` | `enum` | r | HVAC_MODE_FAN | Value of the HVAC_Real_Mode. Is equal to HVAC_Mode except for Mode AUTO.<br>This variable is read only, and is here for statistic purposes only, if we want to know at each timestep what was the real Mode<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `Tsetpoint` | `fxp1000` | rw | 20 | Il s'agit de la température de consigne affichée sur le thermostat. Attention, il ne s'agit pas nécessairement de la température de consigne demandée au système (il faut prendre en compte Tsetpoint_Shift_HEAT ou Tsetpoint_Shift_COOL)<br>_Absente du build MINIMAL._ |
| `Fanspeed` | `enum` | rw | FAN_SPEED_LOW | Pour une interface utilisateur simple, il faut 3 vitesses de ventilations et un mode AUTO<br>_Valeurs : FAN_SPEED_LOW · FAN_SPEED_MEDIUM · FAN_SPEED_HIGH · FAN_SPEED_AUTO_<br>_Absente du build MINIMAL._ |
| `Temperature_Unit` | `enum` | rw | TEMPERATURE_UNIT_C_ONLY | Choix de l'unité de température. Il ne s'agit que de la temperature à l'affichage: les données sont toujours stockées en °C. les _ONLY interedisent à l'utilisateur de changer d'unité<br>_Valeurs : TEMPERATURE_UNIT_C · TEMPERATURE_UNIT_F · TEMPERATURE_UNIT_C_ONLY · TEMPERATURE_UNIT_F_ONLY_<br>_Absente du build MINIMAL._ |

### Inputs Internal raw mesurements

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `BackLight` | `int32` | rw | 100 | Value entre 0 et 1000 |
| `RSSI` | `int32` | r | 0 | Force de la connexion Wifi en dbm |
| `Temperature_CPU` | `fxp1000` | r | — | Valeur de temperature issue du CPU AT32. Valeur très bruitée, mais permettant de determiner la chauffe de la carte |
| `Temperature_Raw_1` | `fxp1000` | r | — | Valeur de température issue directement du capteur de température seul, sans traitement, calibration, etc ... |
| `Temperature_Raw_2` | `fxp1000` | r | — | Valeur de température issue directement du capteur combiné Humidité/Température, sans traitement, calibration, etc ... |
| `Humidity_Raw` | `fxp1000` | r | — | Valeur d'humidité issue directement du capteur combiné Humidité/Température, sans traitement, calibration, etc ... |
| `Brightness_Raw` | `fxp1000` | r | — | Valeur de luminosité issue directement du capteur de luminosité (photo-diode), sans traitement, calibration, etc ... |
| `Radar_Raw` | `boolean` | — | false | État brut du détecteur de présence radar, sans traitement ni temporisation. |

### Inputs Internal Treated values

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Temperature` | `fxp1000` | r | — | Valeur de température utilisée pour la régulation et affiché sur le dashboard pour nos clients.<br>Attention: - il ne s'agit pas forcément de la valeur mesurée par les capteurs: dépend du choix de capteur utilisée (voir variable: Temperature_Measure_Choice)<br>- Dépend de la valeur de calibration (voir variable: Temperature_Calibration) |
| `Humidity` | `fxp1000` | r | — | Attention, il ne s'agit pas nécessairement de la valeur d'humidité mesurée par les capteurs. Il faut aussi prendre en compte une potentielle valeur de calibration (voir variable: Humidity_Calibration).<br>Il s'agit de la valeur de l'humidité que l'on va afficher sur le dashboard pour nos clients |
| `Brightness` | `fxp1000` | r | — | Attention, il ne s'agit pas nécessairement de la valeur de luminosité mesurée par les capteurs. Il faut aussi prendre en compte une potentielle valeur de calibration (voir variable: Brightness_Calibration).<br>Il s'agit de la valeur de Luminosité que l'on va afficher sur le dashboard pour nos clients |

### Inputs External raw mesurements

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `DI_1` | `float` | r | -1 | Digital Input 1: Permet de remonter de la data de capteurs externes, sans traitement, calibration, ... |
| `DI_2` | `float` | r | -1 | Digital Input 2: Permet de remonter de la data de capteurs externes, sans traitement, calibration, ... |

### Inputs From external Sensors Treated

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Keycard_Ext_Sensor_Value` | `enum` | r | TRISTATE_NA | Valeur disponible si le système de carte de chambre est relié au thermostat.<br>0: Card not inserted / 1: Card inserted<br>_Valeurs : TRISTATE_FALSE · TRISTATE_TRUE · TRISTATE_NA_ |
| `Keycard_Ext_Sensor_Timestamp` | `int32` | r | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data Keycard_Ext_Sensor_Value |
| `Window_Ext_Sensor_Value` | `enum` | r | TRISTATE_NA | Valeur disponible si un capteur d'ouverture de fenêtre externe est relié au thermostat<br>_Valeurs : TRISTATE_FALSE · TRISTATE_TRUE · TRISTATE_NA_ |
| `Window_Ext_Sensor_Timestamp` | `int32` | r | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data Window_Ext_Sensor_Value |
| `Occupancy_Ext_Sensor_Value` | `enum` | r | TRISTATE_NA | Valeur disponible si un capteur de mouvement (pou de présence) externe est relié au thermostat<br>_Valeurs : TRISTATE_FALSE · TRISTATE_TRUE · TRISTATE_NA_ |
| `Occupancy_Ext_Sensor_Timestamp` | `int32` | r | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data Occupancy_Ext_Sensor_Value |
| `ChangeOver_Temp_Value` | `fxp1000` | r | — | Disponible si une sonde de température change over est présente. Permet de mesurer la température de l'eau qui circule afin de fixer le mode de fonctionnement<br>_Absente du build MINIMAL._ |
| `ChangeOver_Temp_Timestamp` | `int32` | r | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data ChangeOver_Temp_Value<br>_Absente du build MINIMAL._ |
| `ChangeOver_Contact_Value` | `enum` | r | TRISTATE_NA | Disponible si un contacteur change over est présent. Permet via un contacteur de connaitre le mode du groupe de production (à adapter avec les logics associées via DI_1 et DI_2)<br>_Valeurs : TRISTATE_FALSE · TRISTATE_TRUE · TRISTATE_NA_<br>_Absente du build MINIMAL._ |
| `ChangeOver_Contact_Timestamp` | `int32` | r | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data ChangeOver_Contact_Value<br>_Absente du build MINIMAL._ |
| `ChangeOver_HVAC_Mode_Value` | `enum` | rw | HVAC_MODE_HEAT | Valeur du Mode du groupe de production calculé via des sondes extérieures ou directement renseignée via l'extérieur (GTB, ...)<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `ChangeOver_HVAC_Mode_Timestamp` | `int32` | rw | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data ChangeOver_HVAC_Mode_Value<br>_Absente du build MINIMAL._ |

### Inputs Computed Values No sensors needed

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Window_Status` | `enum` | r | TRISTATE_NA | Valeur calculé par une fonction de détection de fenêtre ouverte (même si capteur d'ouverture non-présent). <br>Si un capteur d'ouverture de fenêtre déporté est relié au thermostat, on utilisera la data pour raffiner notre fonction de détection d'ouverture.<br>0: Closed window / 1: Opened window<br>_Valeurs : TRISTATE_FALSE · TRISTATE_TRUE · TRISTATE_NA_ |
| `Window_Status_Timestamp` | `int32` | r | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data Window_Status |
| `Occupancy` | `enum` | r | TRISTATE_NA | Valeur calculé par une fonction de détection de l'occupation (même si capteur de mvt non-présent). <br>Si un capteur de mouvement est présent, on utilisera la data pour raffiner notre fonction de détection d'ouverture<br>_Valeurs : TRISTATE_FALSE · TRISTATE_TRUE · TRISTATE_NA_ |
| `Occupancy_Timestamp` | `int32` | r | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data Occupancy |

### Inputs Values from Server

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Outdoor_Temperature` | `fxp1000` | w | — | Valeur communiqué au thermostat via le serveur AGRID. Cette valeur est récupéré en ligne (via les API Météo France pour le moment).<br>Precision at 0.1 (no matter the chosen temperature unit) |
| `Outdoor_Temperature_Timestamp` | `int32` | w | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data Outdoor_Temperature |
| `Current_Reservation_State` | `enum` | w | TRISTATE_NA | Valeur communiqué au thermostat via le serveur AGRID. Cette valeur est récupéré via la communication avec le PMS du client (cas hôtel) ou bien un calendrier de réservation de salle (cas des bureaux).<br>1: Checked_in / 0: Checked_out<br>_Valeurs : TRISTATE_FALSE · TRISTATE_TRUE · TRISTATE_NA_ |
| `Current_Reservation_Timestamp` | `int32` | w | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data Current_Reservation_State |
| `Future_Reservation_State` | `enum` | w | TRISTATE_NA | Valeur communiqué au thermostat via le serveur AGRID. Cette valeur est récupéré via la communication avec le PMS du client (cas hôtel) ou bien un calendrier de réservation de salle (cas des bureaux).<br>0: Not reserved the coming night / 1: Reserved the coming night<br>_Valeurs : TRISTATE_FALSE · TRISTATE_TRUE · TRISTATE_NA_ |
| `Future_Reservation_Timestamp` | `int32` | w | 0 | Timestamp (Nombre de secondes depuis le 1er Janvier 2025 minuit UTC) de la data Future_Reservation_State |

### Inputs Output values

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Relay_Low_FanSpeed` | `boolean` | r | false | Valeur qu'on envoie en sortie au Relais associé à la vitesse de ventilation LOW<br>_Absente du build MINIMAL._ |
| `Relay_Medium_FanSpeed` | `boolean` | r | false | Valeur qu'on envoie en sortie au Relais associé à la vitesse de ventilation MEDIUM<br>_Absente du build MINIMAL._ |
| `Relay_High_FanSpeed` | `boolean` | r | false | Valeur qu'on envoie en sortie au Relais associé à la vitesse de ventilation HIGH<br>_Absente du build MINIMAL._ |
| `Relay_Heat_Valve` | `boolean` | r | false | Valeur qu'on envoie en sortie au Relais associé à la vanne Chaud ou Mixte (cas 2T & 2T/2fils)<br>_Absente du build MINIMAL._ |
| `Relay_Cool_Valve` | `boolean` | r | false | Valeur qu'on envoie en sortie au Relais associé à la vanne Froide (cas 4T & 4T/2fils)<br>_Absente du build MINIMAL._ |
| `Relay_Resistance` | `boolean` | r | false | Expressed in %. Valeur qu'on envoie en sortie au Relais associé à la résistance<br>_Absente du build MINIMAL._ |
| `DAC_FanSpeed` | `int32` | r | 0 | Expressed in %. Valeur qu'on envoie en sortie au DAC associé à la vitesse de ventilation<br>_Absente du build MINIMAL._ |
| `DAC_Heat_Valve` | `int32` | r | 0 | Expressed in %. Valeur qu'on envoie en sortie au DAC associé à la vanne Chaude ou Mixte (cas 2T & 2T/2fils)<br>_Absente du build MINIMAL._ |
| `DAC_Cool_Valve` | `int32` | r | 0 | Expressed in %. Valeur qu'on envoie en sortie au DAC associé à la vanne Froide (cas 4T & 4T/2fils)<br>_Absente du build MINIMAL._ |
| `DAC_Resistance` | `int32` | r | 0 | Expressed in %. Valeur qu'on envoie en sortie au DAC associé à la résistance<br>_Absente du build MINIMAL._ |

## Configuration

### Information

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `MAGIC_WORD` | `int32` | r | — | a magic word that should change each time this data table is updated. If magicword is loaded to ram, it means ram is already configured, else it requieres data from flash. If magit word is already loaded to flash, it doesn't requiere to flash data with default values. |
| `FLASH_DATA_COUNT` | `int32` | r | — | Count of data_ values. If extra data is added, with same magicword, only extra data are updated to default values on boot |
| `Thermostat_Name` | `char` | rw | — | Nom libre du thermostat. Affiché sur l'écran de statut public et remonté dans le rapport de diagnostic Wi-Fi. Vide par défaut. |

### Time

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Time_Zone_Difference_Minutes` | `int32` | rw | 120 | Décalage horaire en minutes par rapport au fuseau horaire UTC<br>_Absente du build MINIMAL._ |
| `Time_Server` | `char` | rw | — | Serveur de temps interrogé pour la synchronisation de l'horloge UTC, au format `hôte[:port]`. Si vide, aucune synchronisation n'est tentée. |

### Print Design User Interface

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Language` | `enum` | rw | LANGUAGE_FRENCH | Variable qui permet de modifier la langue<br>_Valeurs : LANGUAGE_ENGLISH · LANGUAGE_FRENCH_<br>_Absente du build MINIMAL._ |
| `Typo` | `enum` | rw | MAIN_TYPO | Choix de la police à l'écran<br>_Valeurs : MAIN_TYPO · HAND_TYPO_<br>_Absente du build MINIMAL._ |
| `Portrait` | `boolean` | rw | false | Si False, affichage en modre paysage. si True, affichage en mode portrait<br>_(non implantée)_ |
| `Print_Indoor_Temperature` | `boolean` | rw | false | Variable qui permet d'afficher ou de cacher la mesure de température intérieure (variable: Temperature) sur l'écran du thermostat.<br>Cette information ne doit pouvoir apparaitre que s'il y a une valeur correspondante<br>_Absente du build MINIMAL._ |
| `Print_Humidity` | `boolean` | rw | false | Variable qui permet d'afficher ou de cacher la mesure d'humidité (variable: Humidity) sur l'écran du thermostat.<br>Cette information ne doit pouvoir apparaitre que s'il y a une valeur correspondante<br>_Absente du build MINIMAL._ |
| `Print_Keycard_Status` | `boolean` | rw | false | Variable qui permet d'afficher ou de cacher le statut de la carte de chambre (variable: Keycard_Status) sur l'écran du thermostat.<br>Cette information ne doit pouvoir apparaitre que s'il y a une valeur correspondante<br>_Absente du build MINIMAL._ |
| `Print_Window_Status` | `boolean` | rw | false | Variable qui permet d'afficher ou de cacher l'état d'ouverture d'une fenêtre (variable: Window_Status) sur l'écran du thermostat.<br>Cette information ne doit pouvoir apparaitre que s'il y a une valeur correspondante<br>_Absente du build MINIMAL._ |
| `Print_Occupancy` | `boolean` | rw | false | Variable qui permet d'afficher ou de cacher l'état du capteur de mouvement (variable: Occupancy) sur l'écran du thermostat.<br>Cette information ne doit pouvoir apparaitre que s'il y a une valeur correspondante<br>_Absente du build MINIMAL._ |
| `Print_Current_Reservation_State` | `boolean` | rw | false | Variable qui permet d'afficher ou de cacher l'état de réservation de la zone (variable: Current_Reservation_State) sur l'écran du thermostat.<br>Cette information ne doit pouvoir apparaitre que s'il y a une valeur correspondante<br>_Absente du build MINIMAL._ |
| `Print_Outdoor_Temperature` | `boolean` | rw | false | Variable qui permet d'afficher ou de cacher la mesure de température extérieure (variable: Outdoor_Temperature) sur l'écran du thermostat.<br>Cette information ne doit pouvoir apparaitre que s'il y a une valeur correspondante<br>_Absente du build MINIMAL._ |
| `Print_Green_Leaf` | `boolean` | rw | false | Variable qui permet d'afficher une feuille verte pour indiquer que le thermostat est en mode économie d'énergie (si par exemple suffisamment de fonctionnalités d'économie d'énergie sont activées)<br>_Absente du build MINIMAL._ |
| `Screen_Design_Type` | `enum` | rw | SCREEN_DESIGN_WITH_TSET | Variable qui permet de faire un choix sur le type d'affichage voulu. Pour le moment on a 2 choix lorsque l'écran est ON: Avec Affichage de Tsetpoint et sans affichage de Tsetpoint<br>_Valeurs : SCREEN_DESIGN_WITH_TSET · SCREEN_DESIGN_WITHOUT_TSET_<br>_Absente du build MINIMAL._ |
| `Time_Delay_Screensaver` | `int32` | rw | 15 | Exprimé en secondes. Variable qui permet de déterminer la temporisation avant le passage à l'écran de veille depuis l'écran d'état ON.<br>Si 0: on shunte le mécanisme de mise en veille et l'écran reste en permanence allumé |
| `Settings_Idle_Timeout` | `int32` | rw | 600 | temps (secondes) penant lequel on reste coonecté dans les settings. si minimal, on revient à l'écran settings. si normal, on revient en fonctionnement normal (off)<br>_(non implantée)_ |

### System Choice

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Fan_Coil_Type` | `enum` | rw | FAN_COIL_2T_MIXED | Permet de décrire la technologie du ventilo-convecteur<br>_Valeurs : FAN_COIL_NO_VALVES · FAN_COIL_NO_VALVES_2WIRES · FAN_COIL_2T_MIXED · FAN_COIL_2T_MIXED_2WIRES · FAN_COIL_2T_HEAT_ONLY · FAN_COIL_2T_HEAT_ONLY_2WIRES · FAN_COIL_2T_COOL_ONLY · FAN_COIL_2T_COOL_ONLY_2WIRES · FAN_COIL_4T · FAN_COIL_4T_2WIRES_<br>_Absente du build MINIMAL._ |
| `Fan_Regulation_Type` | `enum` | rw | REGULATION_0_10V | Permet de décrire le type de régulation du ventilateur<br>_Valeurs : REGULATION_0_10V · REGULATION_ON_OFF · FAN_REGULATION_3_SPEEDS_<br>_Absente du build MINIMAL._ |
| `Heat_Valve_Regulation_Type` | `enum` | rw | REGULATION_0_10V | Permet de décrire le type de régulation de la vanne chaude<br>_Valeurs : REGULATION_0_10V · REGULATION_ON_OFF · FAN_REGULATION_3_SPEEDS_<br>_Absente du build MINIMAL._ |
| `Cool_Valve_Regulation_Type` | `enum` | rw | REGULATION_0_10V | Permet de décrire le type de régulation de la vanne froide<br>_Valeurs : REGULATION_0_10V · REGULATION_ON_OFF · FAN_REGULATION_3_SPEEDS_<br>_Absente du build MINIMAL._ |
| `Resistance_Regulation_Type` | `enum` | rw | REGULATION_ON_OFF | Permet de décrire le type de régulation de la résistance<br>_Valeurs : REGULATION_0_10V · REGULATION_ON_OFF · FAN_REGULATION_3_SPEEDS_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_0` | `enum` | rw | HVAC_MODE_FAN | 1er mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_1` | `enum` | rw | HVAC_MODE_HEAT | 2ème mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_2` | `enum` | rw | HVAC_MODE_COOL | 3ème mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_3` | `enum` | rw | HVAC_MODE_AUTO | 4ème mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_4` | `enum` | rw | HVAC_MODE_ERROR | 5ème mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_5` | `enum` | rw | HVAC_MODE_ERROR | 6ème mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_6` | `enum` | rw | HVAC_MODE_ERROR | 7ème mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_7` | `enum` | rw | HVAC_MODE_ERROR | 8ème mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_8` | `enum` | rw | HVAC_MODE_ERROR | 9ème mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_9` | `enum` | rw | HVAC_MODE_FAN | 10ème mode HVAC selectionné<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |
| `Tsetpoint_Range_Type` | `enum` | rw | TSETPOINT_VALUE_VALUE | 2 manières d'imposer des bornes de températures (Température de consigne et un intervalle centré autour de cette consigne +/- X°C) ou bien imposer 2 limites directements. <br>Les 2 méthodes sont un peu similaires et necessitent au final 2 variables<br>_Valeurs : TSETPOINT_VALUE_RANGE · TSETPOINT_VALUE_VALUE_<br>_Absente du build MINIMAL._ |
| `Tmin_HEAT` | `fxp1000` | rw | 16 | Température de consigne minimum en mode CHAUD<br>_Absente du build MINIMAL._ |
| `Tmin_COLD` | `fxp1000` | rw | 18 | Température de consigne minimum en mode FROID<br>_Absente du build MINIMAL._ |
| `Tmax_HEAT` | `fxp1000` | rw | 26 | Température de consigne maximum en mode CHAUD<br>_Absente du build MINIMAL._ |
| `Tmax_COLD` | `fxp1000` | rw | 32 | Température de consigne maximum en mode FROID<br>_Absente du build MINIMAL._ |
| `Tmin_AUTO` | `fxp1000` | rw | 18 | Température de consigne minimum en mode AUTO<br>_Absente du build MINIMAL._ |
| `Tmax_AUTO` | `fxp1000` | rw | 26 | Température de consigne maximum en mode AUTO<br>_Absente du build MINIMAL._ |
| `Average_Tsetpoint_HEAT` | `fxp1000` | rw | 19 | Température de consigne cible en mode CHAUD<br>_Absente du build MINIMAL._ |
| `Average_Tsetpoint_COLD` | `fxp1000` | rw | 24 | Température de consigne cible en mode FROID<br>_Absente du build MINIMAL._ |
| `Average_Tsetpoint_AUTO` | `fxp1000` | rw | 22 | Température de consigne cible en mode AUTO<br>_Absente du build MINIMAL._ |
| `Interval_Length_HEAT` | `fxp1000` | rw | 3 | Écart de températude de consigne toléré par rapport à la température de consigne cible en mode CHAUD<br>_Absente du build MINIMAL._ |
| `Interval_Length_COLD` | `fxp1000` | rw | 3 | Écart de températude de consigne toléré par rapport à la température de consigne cible en mode FROID<br>_Absente du build MINIMAL._ |
| `Interval_Length_AUTO` | `fxp1000` | rw | 3 | Écart de températude de consigne toléré par rapport à la température de consigne cible en mode AUTO<br>_Absente du build MINIMAL._ |
| `HVAC_Mode_Block` | `boolean` | rw | false | Permet de rendre la touche liée au changement de mode ineffective => Le client n'a plus la possibilité de changer le mode sur le thermostat<br>_Absente du build MINIMAL._ |
| `Tsetpoint_Block` | `boolean` | rw | false | Permet de rendre la touche liée au changement de la température de consigne ineffective => Le client n'a plus la possibilité de changer la température de consigne sur le thermostat<br>_Absente du build MINIMAL._ |
| `State_Block` | `boolean` | rw | false | Permet de rendre la touche liée au changement d'état ON/OFF ineffective => Le client n'a plus la possibilité de changer l'état ON/OFF sur le thermostat<br>_Absente du build MINIMAL._ |
| `FanSpeed_Block` | `boolean` | rw | false | Permet de rendre la touche liée au changement de la vitesse de ventilation ineffective => Le client n'a plus la possibilité de changer la vitesse de ventilation sur le thermostat<br>_Absente du build MINIMAL._ |

### Input Treatment

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Use_Temperature_Raw_1` | `boolean` | rw | true | Variable qui précise d'utiliser Temperature_Raw_1 dans le calcul de la Température<br>_Absente du build MINIMAL._ |
| `Use_Temperature_Raw_2` | `boolean` | rw | true | Variable qui précise d'utiliser Temperature_Raw_2 dans le calcul de la Température<br>_Absente du build MINIMAL._ |
| `Use_Humidity_Raw` | `boolean` | rw | true | Variable qui précise d'utiliser Humidity_Raw dans le calcul de l'Humidité<br>_Absente du build MINIMAL._ |
| `Use_Brightness_Raw` | `boolean` | rw | true | Variable qui précise d'utiliser Brightness_Raw dans le calcul de la Luminosité<br>_Absente du build MINIMAL._ |
| `Temperature_Coeff_Raw` | `float` | rw | 0.985519 | coefficient de la temperature raw dans le calcul de la temperature T<br>_Absente du build MINIMAL._ |
| `Temperature_Coeff_CPU` | `float` | rw | 0.094196 | coefficient de la temperature cpu dans le calcul de la temperature T<br>_Absente du build MINIMAL._ |
| `Temperature_Coeff_Constant` | `fxp1000` | rw | -8.751 | offset de temperature lors du calcul de la temperature T<br>_Absente du build MINIMAL._ |
| `Temperature_Coeff_Raw_Back` | `float` | — | 0.985519 | coefficient backup de la temperature raw dans le calcul de la temperature T (si on a pas accès à la Température du CPU)<br>_Absente du build MINIMAL._ |
| `Temperature_Coeff_Constant_Back` | `fxp1000` | — | -8.751 | offset backup de temperature lors du calcul de la temperature T ((si on a pas accès à la Température du CPU)<br>_Absente du build MINIMAL._ |
| `Humidity_Coeff_Raw` | `float` | — | 1 | coefficient de l'humidité raw dans le calcul de l'humidité H<br>_Absente du build MINIMAL._ |
| `Humidity_Calibration` | `fxp1000` | rw | 0 | Variable pour recalibrer la mesure d'humidité qui sera montré au client (variable: Humidity)<br>_Absente du build MINIMAL._ |
| `Brightness_Coeff_Raw` | `float` | — | 1 | coefficient de la luminosité raw dans le calcul de la luminosité<br>_Absente du build MINIMAL._ |
| `Brightness_Calibration` | `fxp1000` | rw | 0 | Variable pour recalibrer la mesure de luminosité qui sera montré au client (variable: Brightness)<br>_Absente du build MINIMAL._ |
| `Tsetpoint_Precision` | `fxp1000` | rw | 1 | Permet de déterminer la précision des consignes de température. Un pas de 0.5 est largement suffisant.<br>Remarque: Ce pas est valable peu importe l'unité de température choisi (°C / °F)<br>_Absente du build MINIMAL._ |
| `Temperature_Precision` | `fxp1000` | rw | 0.5 | Permet de déterminer la précision de la mesure de température utilisée pour la régulation (variable Temperature). Il faut s'adapter à la précision du capteur et éviter de remonter des valeurs qui n'ont pas de sens.<br>Remarque: Ce pas est valable peu importe l'unité de température choisi (°C / °F)<br>_Absente du build MINIMAL._ |
| `Humidity_Precision` | `fxp1000` | rw | 5 | Permet de déterminer la précision de la mesure d'humidité (variable Humidity). Il faut s'adapter à la précision du capteur et éviter de remonter des valeurs qui n'ont pas de sens (précision moyenne entre +-2% et +-5%)<br>_Absente du build MINIMAL._ |
| `Brightness_Precision` | `fxp1000` | rw | 10 | Permet de déterminer la précision de la mesure de luminosité (variable Brightness). Il faut s'adapter à la précision du capteur et éviter de remonter des valeurs qui n'ont pas de sens<br>_Absente du build MINIMAL._ |
| `DI_1_Logic` | `enum` | rw | LOGIC_DIRECT | Variable qui permet d'inverser la logique de l'entrée digitale DI_1 si besoin<br>_Valeurs : LOGIC_DIRECT · LOGIC_INVERT_ |
| `DI_2_Logic` | `enum` | rw | LOGIC_DIRECT | Variable qui permet d'inverser la logique de l'entrée digitale DI_2 si besoin<br>_Valeurs : LOGIC_DIRECT · LOGIC_INVERT_ |
| `DI_1_Calibration` | `float` | rw | 0 | Variable de calibration pour l'entrée DI_1 (valeur en °C la plupart du temps pour calibrer les capteurs de temp, mais peu calibrer tout type de capteur non booléen) |
| `DI_2_Calibration` | `float` | rw | 0 | Variable de calibration pour l'entrée DI_2 (valeur en °C la plupart du temps pour calibrer les capteurs de temp, mais peu calibrer tout type de capteur non booléen) |

### Tsetpoint Shift Feature

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Tsetpoint_Shift_HEAT` | `fxp1000` | rw | 0 | Variable utilisée pour demandée une valeur de Tsetpoint à la machine différente comparé à l'affichage. Cette variable est pour le mode HEAT uniquement<br>_Absente du build MINIMAL._ |
| `Tsetpoint_Shift_COOL` | `fxp1000` | rw | 0 | Variable utilisée pour demandée une valeur de Tsetpoint à la machine différente comparé à l'affichage. Cette variable est pour le mode COOL uniquement<br>_Absente du build MINIMAL._ |
| `Tsetpoint_Limit_TrigShift_HEAT` | `fxp1000` | rw | 23 | Variable utilisée pour deéterminer une limite de Tsetpoint au dessus de laquelle on commence à appliquer un shift (pour le mode HVAC_MODE_HEAT)<br>_Plage : 16 - 32_<br>_Absente du build MINIMAL._ |
| `Tsetpoint_Limit_TrigShift_COOL` | `fxp1000` | rw | 19 | Variable utilisée pour deéterminer une limite de Tsetpoint en dessous de laquelle on commence à appliquer un shift (pour le mode HVAC_MODE_COOL)<br>_Plage : 16 - 32_<br>_Absente du build MINIMAL._ |

### Change Over

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `ChangeOver_Temp_Precision` | `fxp1000` | rw | 500 | Permet de déterminer la précision de la mesure de températuredu capteur change over si utilisé (variable ChangeOver_Temp_Value). Il faut s'adapter à la précision du capteur et éviter de remonter des valeurs qui n'ont pas de sens.<br>_Plage : 0.1 / 0.2 / 0.5 / 1_<br>_Absente du build MINIMAL._ |
| `ChangeOver_Temperature_Sensor` | `enum` | rw | NO_INPUT | Permet de savoir sur quel digital input (DI_1, DI_2) on peut récupérer l'information de ChangeOver Temperature si elle est présente (NO_INPUT si pas présent)<br>_Valeurs : NO_INPUT · DI_1 · DI_2_<br>_Absente du build MINIMAL._ |
| `ChangeOver_Contact_Sensor` | `enum` | rw | NO_INPUT | Permet de savoir sur quel digital input (DI_1, DI_2) on peut récupérer l'information de ChangeOver Contact si elle est présente (NO_INPUT si pas présent)<br>_Valeurs : NO_INPUT · DI_1 · DI_2_<br>_Absente du build MINIMAL._ |
| `Temp_Limit_ChangeOver_HEAT` | `fxp1000` | rw | 28 | Temperature (in °C) au dessus de laquelle on considère que le groupe de production est en mode Chaud<br>_Plage : 26 - 45_<br>_Absente du build MINIMAL._ |
| `Temp_Limit_ChangeOver_COOL` | `fxp1000` | rw | 16 | Temperature (in °C) au dessous de laquelle on considère que le groupe de production est en mode Froid<br>_Plage : 10 - 25_<br>_Absente du build MINIMAL._ |
| `Mode_Change_Delay` | `int32` | rw | 180 | Temporisation (en seconde) qui permet d'éviter de changer la valeur du mode trop rapidement si on vient juste de passer les seuils Temp_Limit_ChangeOver_HEAT ou Temp_Limit_ChangeOver_COOL<br>_Plage : 1 - 255*60_<br>_Absente du build MINIMAL._ |
| `ChangeOver_Calculation_Method` | `enum` | rw | EXTERNAL | Choix de la méthode pour calculer le mode via la fonction Change Over. Il y a 3 méthodes:<br>1 - EXTERNAL: On renseigne le mode directement dans la variable ChangeOver_Mode_Value => Utile si pas de sonde extérieure et si l'info vient de la GTB par exemple<br>2 - TEMPERATURE_SENSOR: On utilise un capteur de température externe pour mesurer la température de l'eau et déterminer dans quel mode on est<br>3 - CONTACT_SENSOR: On utilise un contacteur externe pour récupérer le mode du groupe de production<br>_Valeurs : EXTERNAL · TEMPERATURE_SENSOR · CONTACT_SENSOR_<br>_Absente du build MINIMAL._ |
| `ChangeOver_HVAC_Mode_External` | `enum` | rw | HVAC_MODE_HEAT | Mode HVAC imposé lorsque la source de change-over est externe : recopié dans `ChangeOver_HVAC_Mode_Value` à l'écriture. La validation de configuration le restreint à HEAT ou COOL.<br>_Valeurs : HVAC_MODE_FAN · HVAC_MODE_HEAT · HVAC_MODE_COOL · HVAC_MODE_AUTO · HVAC_MODE_ERROR_<br>_Absente du build MINIMAL._ |

### Output Treatment

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Relay_Low_FanSpeed_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le Relais associé à la vitesse de ventilation LOW<br>_Absente du build MINIMAL._ |
| `Relay_Medium_FanSpeed_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le Relais associé à la vitesse de ventilation MEDIUM<br>_Absente du build MINIMAL._ |
| `Relay_High_FanSpeed_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le Relais associé à la vitesse de ventilation HIGH<br>_Absente du build MINIMAL._ |
| `Relay_Heat_Valve_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le Relais associé à la vanne chaude (cas 4T & 4T/2fils) ou à la vanne mixte (cas 2T & 2T/2fils)<br>_Absente du build MINIMAL._ |
| `Relay_Cool_Valve_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le Relais associé à la vanne Froide (cas 4T & 4T/2fils). Cette vanne n'est pas utilisée à priori dans les cas 2T & 2T/2fils<br>_Absente du build MINIMAL._ |
| `Relay_Resistance_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le Relais associé à la résistance<br>_Absente du build MINIMAL._ |
| `DAC_FanSpeed_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le DAC associé à la vitesse de ventilation<br>_Absente du build MINIMAL._ |
| `DAC_Heat_Valve_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le DAC associé à la vanne chaude (cas 4T & 4T/2fils) ou à la vanne mixte (cas 2T & 2T/2fils)<br>_Absente du build MINIMAL._ |
| `DAC_Cool_Valve_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le DAC associé à la vanne Froide (cas 4T & 4T/2fils). Cette vanne n'est pas utilisée à priori dans les cas 2T & 2T/2fils<br>_Absente du build MINIMAL._ |
| `DAC_Resistance_Active` | `boolean` | rw | true | Variable qui permet de rendre actif ou inactif le DAC associé à la résistance<br>_Absente du build MINIMAL._ |
| `Relay_FanSpeed_Logic` | `enum` | rw | LOGIC_NO | Variable qui permet d'inverser la logique de la sortie Relais associé à la vitesse de ventilation LOW<br>_Valeurs : LOGIC_NC · LOGIC_NO_<br>_Absente du build MINIMAL._ |
| `Relay_Heat_Valve_Logic` | `enum` | rw | LOGIC_NO | Variable qui permet d'inverser la logique de la sortie Relais associé à la vanne chaude (cas 4T & 4T/2fils) ou à la vanne mixte (cas 2T & 2T/2fils)<br>_Valeurs : LOGIC_NC · LOGIC_NO_<br>_Absente du build MINIMAL._ |
| `Relay_Cool_Valve_Logic` | `enum` | rw | LOGIC_NO | Variable qui permet d'inverser la logique de la sortie Relais associé à la vanne Froide (cas 4T & 4T/2fils). Cette vanne n'est pas utilisée à priori dans les cas 2T & 2T/2fils<br>_Valeurs : LOGIC_NC · LOGIC_NO_<br>_Absente du build MINIMAL._ |
| `Relay_Resistance_Logic` | `enum` | rw | LOGIC_NO | Variable qui permet d'inverser la logique de la sortie Relais associé à la résistance<br>_Valeurs : LOGIC_NC · LOGIC_NO_<br>_Absente du build MINIMAL._ |
| `DAC_FanSpeed_Logic` | `enum` | rw | LOGIC_NO | Variable qui permet d'inverser la logique de la sortie DAC associé à la vitesse de ventilation<br>_Valeurs : LOGIC_NC · LOGIC_NO_<br>_Absente du build MINIMAL._ |
| `DAC_Heat_Valve_Logic` | `enum` | rw | LOGIC_NO | Variable qui permet d'inverser la logique de la sortie DAC associé à la vanne chaude (cas 4T & 4T/2fils) ou à la vanne mixte (cas 2T & 2T/2fils)<br>_Valeurs : LOGIC_NC · LOGIC_NO_<br>_Absente du build MINIMAL._ |
| `DAC_Cool_Valve_Logic` | `enum` | rw | LOGIC_NO | Variable qui permet d'inverser la logique de la sortie DAC associé à la vanne Froide (cas 4T & 4T/2fils). Cette vanne n'est pas utilisée à priori dans les cas 2T & 2T/2fils<br>_Valeurs : LOGIC_NC · LOGIC_NO_<br>_Absente du build MINIMAL._ |
| `DAC_Resistance_Logic` | `enum` | rw | LOGIC_NO | Variable qui permet d'inverser la logique de la sortie DAC associé à la résistance<br>_Valeurs : LOGIC_NC · LOGIC_NO_<br>_Absente du build MINIMAL._ |

### Communication Protocol

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Communication_Protocol` | `enum` | rw | COM_PROTOCOL_MQTT | Variable qui permet de définir le protocole de communication avec la GTB<br>_Valeurs : COM_PROTOCOL_MQTT · COM_PROTOCOL_MODBUS_ |

### Communication Wifi Network

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Wifi_SSID` | `char` | rw | _(masqué)_ | Nom du réseau Wifi sur lequel se connecter.<br>On va essayer de mettre tjs le même nom par defaut pour simplifier les installations |
| `Wifi_Password` | `char` | rw | _(masqué)_ | Mot de passe du réseau Wifi sur lequel se connecter.<br>On va essayer de mettre un password par defaut pour simplifier les installations |
| `Wifi_Hidden` | `boolean` | rw | true | Variable qui précise si le réseau sur lequel on souhaite se connecter en caché ou pas.<br>Le réseau Wifi par défaut sera caché |
| `BMS_Server_IP` | `char` | rw | _(masqué)_ | IP du serveur de la GTB.<br>Pour une facilité d'installation, il faut que le serveur de la GTB est une IP fixe par défaut sur le réseau et que celle-ci soit toujours la même |
| `HTTP_Port` | `int32` | rw | 80 | Port d'écoute du serveur HTTP embarqué. |
| `HTTP_Timeout` | `int32` | — | 600 | Délai d'inactivité, en secondes, avant fermeture d'une connexion par le serveur HTTP. |

### Communication MQTT Parameters

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `MQTT_Port` | `int32` | rw | 8883 | Port utilisé par le serveur MQTT.<br>Pour une facilité d'installation, il faut que le serveur MQTT ait un port par default |
| `MQTT_Username` | `char` | rw | _(masqué)_ | Username d'accès au serveur MQTT.<br>Pour une facilité d'installation, il faut que le serveur MQTT ait un username par default |
| `MQTT_Password` | `char` | rw | _(masqué)_ | Password d'accès au serveur MQTT.<br>Pour une facilité d'installation, il faut que le serveur MQTT ait un password par default |
| `MQTT_Use_TLS` | `boolean` | rw | true | si on, utilisation du mqtt"s" avec authentification unidirectionnelle ou mutuelle. si flase, aucune authentification nécéssaie |
| `MQTT_Group_1` | `char` | — | `"all"` | topitc de groupes de thermostats. si vide, non utilisé.<br>_(non implantée)_ |
| `MQTT_Group_2` | `char` | — | — | topitc de groupes de thermostats. si vide, non utilisé.<br>_(non implantée)_ |
| `MQTT_Group_3` | `char` | — | — | topitc de groupes de thermostats. si vide, non utilisé.<br>_(non implantée)_ |
| `MQTT_Group_4` | `char` | — | — | topitc de groupes de thermostats. si vide, non utilisé.<br>_(non implantée)_ |
| `MQTT_Group_5` | `char` | — | — | topitc de groupes de thermostats. si vide, non utilisé.<br>_(non implantée)_ |

### Communication Modbus Parameters

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Modbus_Address` | `int32` | rw<br>(mieux de se limiter à read only) | 241 | Modbus device address sur le bus de communication. Entre 1 et 247.<br>On se limitera au adresse entre 1 et 240 en pratique. On peut par simplicité d'installation, mettre une adresse 241 par défaut par exemple |
| `Baud_Rate` | `int32` | rw | 19200 | Baundrate: Paramétre Modbus nécassaire pour la communication |
| `Bit_stop` | `fxp1000` | rw | 2 | Bit de stop: Paramétre Modbus nécassaire pour la communication<br>1: Valeur la plus courante — standard sur la majorité des équipements<br>2: Utilisé si la parité est désactivée (no parity) pour garantir une synchronisation fiable<br>1.5: Rare — uniquement supporté par certains vieux contrôleurs RS-232, très peu utilisé en Modbus |
| `Parity` | `enum` | rw | PARITY_NONE | Polarité: Paramétre Modbus nécassaire pour la communication<br>_Valeurs : PARITY_NONE · PARITY_EVEN · PARITY_ODD_ |

### Security

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Setting_Screen_Password_0` | `char` | rw | _(masqué)_ | Password "utilisateur" pour rentrer de rentrer dans l'écran de settings. Si vide, inutilisé. |
| `Setting_Screen_Password_1` | `char` | rw | _(masqué)_ | Password "site" pour rentrer de rentrer dans l'écran de settings. Si vide, inutilisé. |

### Internal Regulation Resistance

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Resistance_Usage_Type` | `enum` | rw | RESISTANCE_USAGE_SERIAL | Permet de préciser comment utiliser la résistance (en parallèle de la vanne chaude ou en appoint uniquement)<br>_Valeurs : RESISTANCE_USAGE_PARALLEL · RESISTANCE_USAGE_SERIAL_<br>_Absente du build MINIMAL._ |
| `Hys_ONOFFControl_Resistance_ON` | `fxp1000` | rw | 2.5 | Si Résistance utilisée en appoint (Serie), permet de préciser le delta de temp (entre Tsetpoint et Temperature) à partir duquel déclencher la résistance<br>_Plage : 0,5 - 5,0_<br>_Absente du build MINIMAL._ |
| `Hys_ONOFFControl_Resistance_OFF` | `fxp1000` | rw | 1.5 | Si Résistance utilisée en appoint (Serie), permet de préciserle delta de temp (entre Tsetpoint et Temperature) à partir duquel couper la résistance et laisser la pompe à chaleur faire le reste<br>_Plage : 0 - 4_<br>_Absente du build MINIMAL._ |
| `Time_Delay_Trigger_Resistance` | `int32` | rw | 300 | Exprimé en secondes. Permet de préciser combien de temps laisser la vanne chaude à X% (variable: Pct_Power_Trigger_Resistance) de sa puissance avant de déclencher la résistance<br>_Absente du build MINIMAL._ |

### Internal Regulation Fan

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Permanent_Fan` | `boolean` | rw | false | Permet de savoir si on laisse une ventilation permanente même quand l'état est OFF<br>_Absente du build MINIMAL._ |
| `Fan_Off_Delay_Heat` | `int32` | rw | 0 | Exprimé en secondes. Permet de déterminer combien de temps la ventilation va tourner lorsque système est mis OFF (en mode HEAT)<br>_Plage : 0 - 600_<br>_Absente du build MINIMAL._ |
| `Fan_Off_Delay_Cool` | `int32` | rw | 0 | Exprimé en secondes. Permet de déterminer combien de temps la ventilation va tourner lorsque système est mis OFF (en mode COOL)<br>_Plage : 0 - 600_<br>_Absente du build MINIMAL._ |
| `Force_Fan_Off_Delay_After_Res` | `boolean` | rw | true | Force la ventilation a continuer à souffler après l'utilisation de la résistance, même si le système est Off (et même si Fan_Off_Delay_Heat = 0)<br>_Absente du build MINIMAL._ |
| `Fan_Stage_Change_Delay` | `int32` | rw | 1000 | Delay en milli-secondes entre le passage de Fanspeed (si Régulation 3 Vitesses TOR). On ouvre le relais actuellement utilisé, on attend Fan_Stage_Change_Delay, puis on ferme le relais suivant<br>_Plage : 100 - 5000_ |
| `Fan_Valve_Dependency` | `enum` | rw | DEPENDENT | Variable pour déterminer si la ventilation est dépendante des vannes.<br>- Si DEPENDENT: La ventilation se coupe si la vanne se ferme, et la ventilation a une valeur mini (LOW Speed) si une vanne est ouverte<br>- si INDEPENDENT: la gestion est indépendante de la vanne. On peut être ON, vanne fermée mais venilation qui tourne (pour les clients qui aime entendre s=du bruit sinon ils disent que ça ne marche pas)<br>_Valeurs : DEPENDENT · INDEPENDENT_<br>_Absente du build MINIMAL._ |
| `Percentage_Low_Fan_Speed` | `int32` | rw | 30 | Permet de déterminer la puissance du ventilateur pour la vitesse de ventilation LOW si la régulation est en 0-10V (Ex: Si régulation 0-10V => 30% = 3V)<br>Valeur négative si on veut désactiver la vitesse de ventilation LOW en cas de régulation 0-10V sur la ventilation (on peut au MAX désactiver 2 vitesses de ventilation, mais jamais les 3)<br>_Absente du build MINIMAL._ |
| `Percentage_Medium_Fan_Speed` | `int32` | rw | 60 | Permet de déterminer la puissance du ventilateur pour la vitesse de ventilation MEDIUM si la régulation est en 0-10V (Ex: Si régulation 0-10V => 60% = 6V)<br>Valeur négative si on veut désactiver la vitesse de ventilation MEDIUM en cas de régulation 0-10V sur la ventilation (on peut au MAX désactiver 2 vitesses de ventilation, mais jamais les 3)<br>_Absente du build MINIMAL._ |
| `Percentage_High_Fan_Speed` | `int32` | rw | 90 | Permet de déterminer la puissance du ventilateur pour la vitesse de ventilation HIGH si la régulation est en 0-10V (Ex: Si régulation 0-10V => 90% = 9V)<br>Valeur négative si on veut désactiver la vitesse de ventilation HIGH en cas de régulation 0-10V sur la ventilation (on peut au MAX désactiver 2 vitesses de ventilation, mais jamais les 3)<br>_Absente du build MINIMAL._ |
| `Delta_Fan_Transition_Low_Med` | `fxp1000` | rw | 1.5 | Valeurs en °C, qui détermine le passage FAN_SPEED_LOW vers FAN_SPEED_MEDIUM en comparant au Delta de Temperature (diff entre Tsetpoint et Temperature suivant le Mode)<br>_Plage : 0.5 - 2.0_<br>_Absente du build MINIMAL._ |
| `Delta_Fan_Transition_Med_High` | `fxp1000` | rw | 3 | Valeurs en °C, qui détermine le passage FAN_SPEED_MEDIUM vers FAN_SPEED_HIGH en comparant au Delta de Temperature (diff entre Tsetpoint et Temperature suivant le Mode)<br>_Plage : 1.5 - 4.0_<br>_Absente du build MINIMAL._ |
| `Delta_Fan_Hysteresys` | `fxp1000` | rw | 0.5 | Hysteresys en °C, pour éviter les oscillations au passage LOW-MED ou MED-HIGH<br>_Plage : 0.2 - 2_<br>_Absente du build MINIMAL._ |

### Internal Regulation AUTO Mode

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Hysteresis_HVAC_Mode_AUTO` | `fxp1000` | rw | 1.5 | Valeur d'hsyteresis utilisé lorsqu'on est en HVAC Mode AUTO afin de décider si on chauffe où on refroidit.<br>Remarque: Il s'agit de la valeur du demi interval ! Si la valeur vaut 2 alors On refroidit si Temperature > Tsetpoint + 2 et on rechauffe si Temperature < Tsetpoint - 2<br>_Absente du build MINIMAL._ |

### Internal Regulation Main regulation

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Thermo_Need_Max_HEAT` | `fxp1000` | rw | 3 | Valeur exprimée en °C. C'est l'écart entre Tsetpoint et Temperature à partir duquel on doit avoir une puissance maximale (100%) du ventilo-convecteur, en mode Chaud<br>_Absente du build MINIMAL._ |
| `Thermo_Need_Max_COOL` | `fxp1000` | rw | 3 | Valeur exprimée en °C. C'est l'écart entre Temperature et Tsetpoint à partir duquel on doit avoir une puissance maximale (100%) du ventilo-convecteur, en mode Froid<br>_Absente du build MINIMAL._ |
| `Heat_Delta_On` | `fxp1000` | rw | 0.8 | Valeur de l'hystéresis pour calculer un besoin de chauffage (en chauffe dès que Tsetpoint >= Tin + Heat_Delta_On)<br>Valeur utilisée dans le calcul global de thermo_need (même pour les systèmes 0-10V)<br>_Absente du build MINIMAL._ |
| `Heat_Delta_Off` | `fxp1000` | rw | 1 | Valeur de l'hystéresis pour calculer un besoin de chauffage (en arrête de chauffer dès que Tin >= Tsetpoint + Heat_Delta_Off)<br>Valeur utilisée dans le calcul global de thermo_need (même pour les systèmes 0-10V)<br>_Absente du build MINIMAL._ |
| `Cool_Delta_On` | `fxp1000` | rw | 0.8 | Valeur de l'hystéresis pour calculer un besoin de refroidissement (en refroidit dès que Tin >= Tsetpoint + Cool_Delta_On)<br>Valeur utilisée dans le calcul global de thermo_need (même pour les systèmes 0-10V)<br>_Absente du build MINIMAL._ |
| `Cool_Delta_Off` | `fxp1000` | rw | 1 | Valeur de l'hystéresis pour calculer un besoin de refroidissement (en arrête de refroidir dès que Tin < Tsetpoint - Cool_Delta_Off)<br>Valeur utilisée dans le calcul global de thermo_need (même pour les systèmes 0-10V)<br>_Absente du build MINIMAL._ |

### Internal Regulation PID

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Kp_Global_Supervision` | `float` | rw | 18 | Valeur de la constante devant le terme Proportionnel pour le PID de la partie supervision globale<br>Valeur par défaut conseillé: 18 (limiter les oscillations sur les zones très réactives)<br>Si besoin de plus d'aggressivité: 30<br>Si zone trop sensible, descendre à : 12<br>Conseil: Rester entre 10 et 30<br>_Absente du build MINIMAL._ |
| `Ki_Global_Supervision` | `float` | rw | 0.03 | Valeur de la constante devant le terme Intégral pour le PID de la partie supervision globale<br>Attention: Cette valeur n'est correcte que si le pas de temps dt utilisé dans le PID est en milliseconde !!<br>Valeur par défaut conseillé: 0.03 (dériveé léger pour amortir sans amplifier le bruit)<br>Si besoin de plus d'aggressivité: 0.05<br>Si zone trop sensible, descendre à : 0.02<br>Conseil: Ki très faible (quelques centièmes) , s'assurer que les unités soient cohérentes<br>_Absente du build MINIMAL._ |
| `Kd_Global_Supervision` | `float` | rw | 0.05 | Valeur de la constante devant le terme Dérivé pour le PID de la partie supervision globale<br>Attention: Cette valeur n'est correcte que si le pas de temps dt utilisé dans le PID est en milliseconde !!<br>Valeur par défaut conseillé: 0.05 (dériveé léger pour amortir sans amplifier le bruit)<br>Si besoin de plus d'aggressivité: 0.1<br>Si zone trop sensible, garder : 0.05<br>Conseil: Kd modeste, s'assurer que les unités soient cohérentes<br>_Absente du build MINIMAL._ |
| `PID_Time_Interval` | `int32` | rw | 2000 | Exprimé en ms. Interval de temps qui détermine tout les combien de temps on va lancer un calcul PID<br>Valeur par défaut conseillé: 2s (largement sufisant)<br>Si besoin de plus de rapidité: 1s<br>_Absente du build MINIMAL._ |

### Internal Regulation Local Optimisation Strategies

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `Saving_Strategy_Occupancy` | `enum` | rw | NO_SAVING_STRATEGY | Variable qui permet de déterminer la stratégie d'économies en exploitant l'information de présence:<br>- State_Strategy_1: ON when occupancy / OFF when innocupancy<br>- State_Strategy_2: Nothing when occupancy / OFF when innocupancy<br>- Tsetpoint_Strategy_1: Comfort_temperature depending on the mode when occupancy / Standby_Temperature depending on the mode when innocupancy<br>- Tsetpoint_Strategy_2: +/- X°C (variable Tsetpoint_Shift_HEAT_Occupancy & Tsetpoint_Shift_COOL_Occupancy) based on the last Tsetpoint measured<br>_Valeurs : NO_SAVING_STRATEGY · STATE_STRATEGY_1 · STATE_STRATEGY_2 · TSETPOINT_STRATEGY_1 · TSETPOINT_STRATEGY_2_<br>_Absente du build MINIMAL._ |
| `Comfort_Temperature_HEAT` | `fxp1000` | rw | 19 | Température de comfort en mode Chaud. Cette variable est utilisée si Tsetpoint_Strategy_1 est activée, ou si 'Comfort temperature' a été choisi comme Back_ON_Tsetpoint_Strategy.<br>Value has to remain between given boundaries (depending on the Mode) => See the corresponding variables<br>_Absente du build MINIMAL._ |
| `Comfort_Temperature_COOL` | `fxp1000` | rw | 26 | Température de comfort en mode Froid. Cette variable est utilisée si Tsetpoint_Strategy_1 est activée, ou si 'Comfort temperature' a été choisi comme Back_ON_Tsetpoint_Strategy.<br>Value has to remain between given boundaries (depending on the Mode) => See the corresponding variables<br>_Absente du build MINIMAL._ |
| `Comfort_Temperature_AUTO` | `fxp1000` | — | 22 | Température de comfort en mode Auto. Cette variable est utilisée si Tsetpoint_Strategy_1 est activée, ou si 'Comfort temperature' a été choisi comme Back_ON_Tsetpoint_Strategy.<br>Value has to remain between given boundaries (depending on the Mode) => See the corresponding variables<br>_Absente du build MINIMAL._ |
| `Standby_Temperature_HEAT` | `fxp1000` | rw | 17 | Température d'attente en mode Chaud. Cette variable est utilisée si Tsetpoint_Strategy_1 est activée.<br>Value has to remain between given boundaries (depending on the Mode) => See the corresponding variables<br>_Absente du build MINIMAL._ |
| `Standby_Temperature_COOL` | `fxp1000` | rw | 28 | Température d'attente en mode Froid. Cette variable est utilisée si Tsetpoint_Strategy_1 est activée.<br>Value has to remain between given boundaries (depending on the Mode) => See the corresponding variables<br>_Absente du build MINIMAL._ |
| `Tsetpoint_Shift_HEAT_Occupancy` | `fxp1000` | rw | 3 | Variable qui permet de faire du +/- X°C basé sur la valeur de Tsetpoint. En mode Chaud on fait -X°C si innocupation et +X°C si occupation.<br>Cette variable est utilisée si Tsetpoint_Strategy_2 est activée.<br>The final Tsetpoint value has to remain between given boundaries (depending on the Mode) => See the corresponding variables<br>_Absente du build MINIMAL._ |
| `Tsetpoint_Shift_COOL_Occupancy` | `fxp1000` | rw | 3 | Variable qui permet de faire du +/- X°C basé sur la valeur de Tsetpoint. En mode Froid on fait +X°C si innocupation et -X°C si occupation.<br>Cette variable est utilisée si Tsetpoint_Strategy_2 est activée.<br>The final Tsetpoint value has to remain between given boundaries (depending on the Mode) => See the corresponding variables<br>_Absente du build MINIMAL._ |
| `Saving_Strategy_Window` | `enum` | rw | NO_SAVING_STRATEGY | Variable qui permet de déterminer la stratégie d'économies en exploitant l'information de fenêtre ouverte:<br>- State_Strategy_1 & State_Strategy_2 : OFF si fenêtre ouverte<br>- Tsetpoint_Strategy_1: Comfort_temperature depending on the mode when open window / Standby_Temperature depending on the mode when open window<br>- Tsetpoint_Strategy_2: +/- X°C (variable Tsetpoint_Shift_HEAT_Occupancy & Tsetpoint_Shift_COOL_Occupancy) based on the last Tsetpoint measured<br>_Valeurs : NO_SAVING_STRATEGY · STATE_STRATEGY_1 · STATE_STRATEGY_2 · TSETPOINT_STRATEGY_1 · TSETPOINT_STRATEGY_2_<br>_Absente du build MINIMAL._ |
| `Open_Window_Software_Feature` | `boolean` | rw | false | Variable qui permet d'activer ou de désactiver la fonctionnalité de détection d'ouverture de fenêtre<br>_Absente du build MINIMAL._ |
| `Delta_Temperature_Open_Window` | `fxp1000` | rw | 3 | Variable utilisée pour la fonctionnalité d'ouverture de fenêtre (pure soft).<br>Cette fonctionnalité considère qu'une fenêtre est ouverte si la température varie de X1 degrée (variable: Delta_Temperature_Open_Window) en X2 secondes (variable: Delta_Time_Open_Window)<br>_Absente du build MINIMAL._ |
| `Delta_Time_Open_Window` | `int32` | rw | 900 | Exprimée en secondes. Variable utilisée pour la fonctionnalité d'ouverture de fenêtre (pure soft).<br>Cette fonctionnalité considère qu'une fenêtre est ouverte si la température varie de X1 degrée (variable: Delta_Temperature_Open_Window) en X2 secondes (variable: Delta_Time_Open_Window)<br>_Absente du build MINIMAL._ |
| `Threshold_Time_Open_Window` | `int32` | rw | 120 | Exprimée en secondes. Variable utilisée pour la fonctionnalité d'ouverture de fenêtre (pure soft).<br>Cette variable permet d'éviter des faux positifs dans la détection d'ouverture de fenêtre. Il ne faut pas que la variation soit trop rapide !<br>_Absente du build MINIMAL._ |
| `Setback_Feature_Activated` | `boolean` | rw | false | Variable qui permet d'activer ou de désactiver la fonctionnalité de setback<br>_Absente du build MINIMAL._ |
| `Setback_Temperature_HEAT` | `fxp1000` | rw | 15 | Variable de temperature de setback en mode Chaud. Cette variable sera utilisée si la fonctionnalité de Setback est utilisée<br>_Absente du build MINIMAL._ |
| `Setback_Temperature_COOL` | `fxp1000` | rw | 30 | Variable de temperature de setback en mode Froid. Cette variable sera utilisée si la fonctionnalité de Setback est utilisée<br>_Absente du build MINIMAL._ |
| `Back_ON_Tsetpoint_Strategy` | `enum` | rw | NO_TSET_STRAT_BACK_ON | Variable qui permet de déterminer une stratégie d'application de Tsetpoint quand le State passe de OFF à ON:<br>- No strategy: On repart à la précédente valeur en mémoire<br>- Comfort temperature: On repart systématiquement de la température de comfort en fonction du mode (Variables: Comfort_Temperature_HEAT & Comfort_Temperature_COOL)<br>_Valeurs : NO_TSET_STRAT_BACK_ON · TSET_STRAT_BACK_ON_COMFORT_T_<br>_Absente du build MINIMAL._ |
| `Back_ON_HVAC_Mode_Power` | `int32` | rw | 1 | Mode de démarrage après une coupure de courant.<br>Integer qui pointe vers la valeur de HVAC_Mode_i<br>_Absente du build MINIMAL._ |
| `Back_ON_State_Power` | `enum` | rw | POWER_BACK_ON_KEEP_OFF | état du thermostat à la mise en route (ou à une remise sous tension). On garde tous les paramètres précédents à l'exception du State qui met à OFF de force ou bien à sa précédente valeur<br>_Valeurs : POWER_BACK_ON_SWITCH_ON · POWER_BACK_ON_KEEP_OFF_<br>_Absente du build MINIMAL._ |
| `Back_ON_Fanspeed` | `enum` | rw | FAN_SPEED_LOW | puissance de ventilatio à la mise en route<br>_Valeurs : FAN_SPEED_LOW · FAN_SPEED_MEDIUM · FAN_SPEED_HIGH · FAN_SPEED_AUTO_<br>_Absente du build MINIMAL._ |
| `Back_ON_Temperature_Unit` | `enum` | rw | TEMPERATURE_UNIT_C_ONLY | unité de temperature à la mise en route<br>_Valeurs : TEMPERATURE_UNIT_C · TEMPERATURE_UNIT_F · TEMPERATURE_UNIT_C_ONLY · TEMPERATURE_UNIT_F_ONLY_<br>_Absente du build MINIMAL._ |

### Internal Regulation sensor selection

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `SHT_Sensor` | `enum` | rw | SHT41_SENSOR | sht31/41 humidity/temperture sensor type. it requieres reboot after update. If updated to wrong value, it requieres a electrical reset(!) to work again.<br>_Valeurs : SHT_NO_SENSOR · SHT31_SENSOR · SHT41_SENSOR_ |
| `External_Sensor_1` | `enum` | rw | EXT_NO_SENSOR | type de capteur sur l'entrée 1<br>_Valeurs : EXT_NO_SENSOR · EXT_PIR_SENSOR · EXT_WINDOW_SENSOR · EXT_CARD_SENSOR · EXT_PT1000_SENSOR · EXT_NTC5k_SENSOR · EXT_CONTACT_SENSOR_ |
| `External_Sensor_2` | `enum` | rw | EXT_NO_SENSOR | type de capteur sur l'entrée 2<br>_Valeurs : EXT_NO_SENSOR · EXT_PIR_SENSOR · EXT_WINDOW_SENSOR · EXT_CARD_SENSOR · EXT_PT1000_SENSOR · EXT_NTC5k_SENSOR · EXT_CONTACT_SENSOR_ |

### Internal Regulation backlight_config

| Variable | Type | Accès | Défaut | Description |
|---|---|---|---|---|
| `BackLight_HIGH` | `int32` | rw | 1000 | luminostité (en pour 1000), en usage |
| `BackLight_MID` | `int32` | rw | 200 | luminostité (en pour 1000), après Time_Delay_Screensaver |
| `BackLight_LOW` | `int32` | rw | 50 | luminostité (en pour 1000), après 2* Time_Delay_Screensaver |
| `Night_Threshold` | `fxp1000` | rw | 2.5 | seuil de luminosité entre écran noir et BackLight_LOW selon BackLight_Strategy . Luminosité entre 0 et 1000 environ, 3 c'est relativement faible. |
| `BackLight_Strategy` | `enum` | rw | BACKLIGHT_STRAT_AUTO | stratégie du backlight en "inactivité"<br>_Valeurs : BACKLIGHT_STRAT_OFF · BACKLIGHT_STRAT_LOW · BACKLIGHT_STRAT_AUTO_ |
| `Top_Element_Refresh` | `int32` | — | 5000 | temps minimal entre deux mise à jour des infos "top"<br>_(non implantée)_<br>_Absente du build MINIMAL._ |
| `Upload_Progress_Display` | `boolean` | rw | true | affichage du % lors d'un envoie de fichier.<br>_(non implantée)_ |
| `Radar_Enable` | `boolean` | — | true | active ou désactive le radar<br>_(non implantée)_ |
