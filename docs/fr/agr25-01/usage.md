# Utilisation et contrôle

## Interface écran tactile

### Fonctionnement général

L'**écran tactile couleur 4 pouces** est la principale interface de contrôle du thermostat AGR25-01. Il affiche :

- État actuel du thermostat
- Température ambiante et consigne
- Mode de fonctionnement actif
- Vitesse ventilateur sélectionnée
- Statut connexion WiFi
- Alertes et notifications

!!!tip "Écran tactile"
    L'écran tactile utilise une technologie résistive. Bien que robuste, un nettoyage régulier avec un chiffon sec optimise la réactivité.

### Commandes principales

#### Mise en marche / Arrêt

| **Fonction** | **Action** | **Effet** |
|---|---|---|
| **ON** | Appuyer sur le bouton ON | Active le thermostat, démarre la régulation |
| **OFF** | Appuyer sur le bouton OFF | Arrête complètement le thermostat |
| **Standby** | Inactivité > 5 min | Écran s'éteint, thermostat en veille basse consommation |

#### Réglage de la consigne de température

| **Action** | **Description** |
|---|---|
| **Augmenter** | Appuyer sur + pour élever la consigne de température |
| **Diminuer** | Appuyer sur - pour abaisser la consigne de température |
| **Plage** | Généralement 16°C à 30°C (configurable) |
| **Pas** | Incrément de 0,5°C ou 1°C selon configuration |

La consigne actuelle s'affiche en permanence sur l'écran.

#### Mode de fonctionnement

Le thermostat supporte 4 modes principaux :

| **Mode** | **Symbole** | **Description** | **Équipements activés** |
|---|---|---|---|
| **Chauffage** | ☀ ou ⚙ | Maintient la température au-dessus de la consigne | Vanne chaude, résistance (si présente), ventilateur |
| **Refroidissement** | ❄ ou ~ | Maintient la température en-dessous de la consigne | Vanne froide, ventilateur |
| **Ventilation seule** | 💨 ou FAN | Circulation d'air sans régulation thermique | Ventilateur uniquement |
| **Auto** | ⚡ ou AUTO | Bascule automatique chauffage ↔ refroidissement | Selon température ambiante vs consigne |

**Sélection du mode** :
1. Appuyer sur l'onglet "Mode"
2. Sélectionner le mode désiré
3. Valider la sélection

#### Vitesse ventilateur

| **Vitesse** | **Symbole** | **Description** | **Débit d'air** |
|---|---|---|---|
| **Basse** | 🌫 ou L | Circulation discrète, faible bruit | Minimum, chauffage/refroidissement lent |
| **Moyenne** | 💨 ou M | Équilibre confort/bruit | Standard |
| **Haute** | 🌪 ou H | Circulation maximale, bruit accru | Maximum, chauffage/refroidissement rapide |
| **Auto** | ⚡ ou AUTO | Adaptation automatique à la charge thermique | Ajustement dynamique selon besoin |

**Sélection de la vitesse** :
1. Appuyer sur l'onglet "Ventilateur" ou "Fan"
2. Choisir la vitesse souhaitée (L, M, H, ou Auto)
3. Validation automatique

!!!info "Mode Auto"
    En mode Auto, le thermostat ajuste automatiquement la vitesse du ventilateur en fonction :
    - De l'écart température ambiante ↔ consigne
    - De la charge thermique détectée
    - Des configurations de régulation programmées

### Indicateurs visuels

| **Indicateur** | **Signification** | **Action** |
|---|---|---|
| **WiFi actif** | Signal WiFi affiché en haut | Thermostat connecté au réseau |
| **WiFi inactif** | Pas de signal WiFi | Fonctionnement autonome local, pas d'accès à distance |
| **Batterie** (si présente) | Niveau batterie/pile | Vérifier l'alimentation si faible |
| **Alerte** | Icône d'alerte ou message | Consulter la section dépannage |

## Pilotage à distance via WiFi

### Application AGRID Installer

Le thermostat peut être piloté **à distance via l'application mobile AGRID Installer** :

#### Installation et appairage

1. **Télécharger** l'application AGRID Installer (iOS/Android)
2. **Créer un compte** AGRID (email, mot de passe)
3. **Lancer l'appairage** :
   - Ouvrir la section "Ajouter un appareil"
   - Scannez le **code QR** situé au dos ou en bas du thermostat
   - Ou entrez le **numéro de série** manuellement
4. **Connecter au WiFi** :
   - L'application guide l'appairage au réseau WiFi
   - Entrer le SSID et mot de passe du réseau
5. **Valider** l'appairage dans l'application

#### Fonctionnalités disponibles

| **Fonction** | **Description** |
|---|---|
| **Vue d'ensemble** | État actuel, température ambiante, consigne |
| **Contrôle** | Modification consigne, mode, vitesse ventilateur à distance |
| **Programmation** | Créer des scénarios horaires (ex: 20°C en journée, 18°C la nuit) |
| **Historique** | Consulter l'historique des températures et consommations |
| **Alertes** | Recevoir des notifications en cas d'anomalie |
| **Mises à jour** | Consulter et installer les mises à jour firmware OTA |
| **Configuration avancée** | Paramétrage des sorties relais, entrées capteurs, seuils |

!!!warning "Sécurité WiFi"
    - Utiliser un **mot de passe WiFi fort** (minimum 12 caractères)
    - Ne pas partager le code QR ou numéro de série du thermostat
    - Mettre à jour régulièrement l'application AGRID Installer
    - Vérifier la version du firmware disponible

### Mises à jour Over-The-Air (OTA)

Les mises à jour firmware peuvent être installées **sans interruption de service** via l'application :

1. Ouvrir l'application AGRID Installer
2. Naviguer vers "Paramètres" > "Firmware"
3. Si une mise à jour est disponible, cliquer "Installer"
4. L'installation se fait en arrière-plan
5. Redémarrage automatique à la fin (quelques secondes)

!!!info "Continuité de service"
    Pendant une mise à jour OTA, le thermostat continue de réguler normalement. Seul un bref redémarrage intervient en fin d'installation.

## Mode autonome local

### Fonctionnement indépendant

Si la **connexion WiFi est perdue**, le thermostat continue de fonctionner en **mode autonome local** :

- Régulation entièrement locale via capteurs et logique interne
- Interface écran tactile reste active
- Sorties relais et DAC commandées normalement
- **Pilotage à distance indisponible** jusqu'au rétablissement WiFi

!!!tip "Résilience"
    Le mode autonome garantit la continuité du confort thermique même en cas de perte WiFi. Aucune perte de données configurées localement.

### Reconnexion WiFi

La reconnexion automatique se tente toutes les 30 secondes. Pour forcer une reconnexion :

1. Ouvrir l'écran tactile
2. Naviguer vers "Paramètres" > "WiFi"
3. Sélectionner le réseau désiré
4. Entrer le mot de passe (s'il a changé)
5. Valider la connexion

!!!warning "Mot de passe WiFi"
    Si le mot de passe WiFi change, il faut impérativement mettre à jour le thermostat via l'écran tactile ou l'application Installer, sinon la reconnexion échouera.

## Configuration avancée

### Accès aux paramètres

La configuration avancée est accessible via l'application **AGRID Installer** (interface graphique) ou via l'écran tactile (menus imbriqués) :

#### Paramètres disponibles

| **Paramètre** | **Options** | **Description** |
|---|---|---|
| **Borne horaire** | Heure de début/fin chauffage | Plages horaires d'activation |
| **Consigne min/max** | 16-30°C (configurable) | Limites de réglage utilisateur |
| **Décalage capteur** | -5 à +5°C | Calibrage capteur température |
| **Hysteresis** | 0,5 - 2°C | Différentiel marche/arrêt TOR |
| **Seuils sortie proportionnelle** | 0-100% | Adaptabilité DAC |
| **Inversion sortie relais** | NO / NC | Mode normal ou inversé par relais |

### Configuration des sorties

Chaque sortie (RL1-RL5, DAC1-DAC3) peut être configurée individuellement :

| **Propriété** | **Choix** | **Description** |
|---|---|---|
| **Fonction** | FH, FM, FL, HV, CV, HR, Fan, N/A | Rôle de la sortie |
| **Logique** | Normal (NO) / Inversé (NC) | Comportement de commutation |
| **Seuil activation** | Tempénature ou paramètre | Point de déclenchement |
| **Priorité** | 1, 2, 3 | Ordre d'activation |

### Configuration des entrées

Les entrées S1 et S2 supportent :

| **Type** | **Configuration** | **Cas d'usage** |
|---|---|---|
| **Analogique** | Plage résistive (0-100kΩ) | Sonde thermistance |
| **Numérique** | Contact sec NO/NC | Détecteur présence, bouton poussoir |

## Scénarios d'utilisation typiques

### Scénario 1 : Bureau avec occupation variable

**Configuration** :
- Mode : Auto (chauffage/refroidissement automatique)
- Consigne jour : 22°C (occupation)
- Consigne nuit : 18°C (inoccupation)
- Vitesse ventilateur : Auto
- Entrée S1 : Détecteur présence (contact sec)

**Régulation** : Le thermostat détecte la présence et applique la consigne jour, puis réduit à la consigne nuit après 15 minutes d'inoccupation.

### Scénario 2 : Bâtiment multi-zone coordonnée

**Configuration** :
- Mehrere AGR25-01 installés (une par zone)
- Consignes synchronisées via application AGRID Installer
- Historiques centralisés pour optimisation énergétique
- Alertes critiques envoyées vers le superviseur

### Scénario 3 : Salle serveur avec refroidissement prioritaire

**Configuration** :
- Mode : Refroidissement
- Consigne : 18°C (strict)
- Vitesse ventilateur : Haute en continu
- Entrée S1 : Capteur température silo (analogique)
- Sortie DAC3 : Ventilateur 0-10V proportionnel

**Régulation** : Refroidissement continu modulé proportionnellement pour maintenir une température stable.

## Dépannage courant

Pour plus de détails sur le dépannage, consulter la section [Installation - Tableau de dépannage](installation.md#dépannage)

| **Problème** | **Vérification** | **Solution** |
|---|---|---|
| **Consigne ne change pas** | Écran tactile réactif ? | Nettoyer l'écran, vérifier alimentation |
| **Température incorrecte** | Capteur S1 connecté ? | Vérifier câblage capteur, remplacer si défaillant |
| **WiFi ne se connecte pas** | SSID et mot de passe corrects ? | Vérifier configuration WiFi, réessayer appairage |
| **Pas de commutation sortie** | Sortie configurée ? | Vérifier configuration de la sortie en question |
| **Application Installer ne détecte pas le thermostat** | Code QR ou n° série ? | Recréer l'appairage, vérifier numéro de série |

## Maintenance régulière

- **Nettoyage écran** : Hebdomadaire avec chiffon sec
- **Vérification WiFi** : Mensuelle (signal suffisant ?)
- **Mise à jour firmware** : Lorsque disponible (via application)
- **Vérification capteurs** : Annuellement (température cohérente ?)

Pour support technique avancé, contacter **support@agrid.fr** en incluant le numéro de série du thermostat.
