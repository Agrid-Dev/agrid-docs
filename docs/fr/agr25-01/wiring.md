# Configurations de câblage

## Légende et symboles

| **Symbole** | **Signification** |
|---|---|
| **FH** | Vitesse Haute ventilateur |
| **FM** | Vitesse Moyenne ventilateur |
| **FL** | Vitesse Basse ventilateur |
| **HV** | Vanne Chaude (Hot Valve) - Régulation chauffage |
| **CV** | Vanne Froide (Cold Valve) - Régulation refroidissement |
| **HR** | Résistance Électrique (Heater Resistor) |
| **Fan** | Ventilateur proportionnel 0-10V |
| **N/S** | Non Supporté (configuration invalide) |
| **RL1-RL5** | Sorties relais tout-ou-rien (SPST-NO) |
| **DAC1-DAC3** | Sorties analogiques 0-10V (régulation proportionnelle) |
| **S1, S2** | Entrées capteurs |

## Types de régulation

### Régulation Tout-ou-rien (TOR) via relais

Les sorties relais **RL1 à RL5** fournissent des signaux binaires pour :
- Démarrage/arrêt de ventilateurs
- Commutation de vannes
- Activation de contacteurs externes

**Chaque sortie supporte une logique inversable** :
- **Mode NO (Normally Open)** : Relais ouvert au repos, fermeture lors de l'activation
- **Mode NC (Normally Closed)** : Relais fermé au repos, ouverture lors de l'activation

La logique peut être configurée **individuellement pour chaque sortie** via l'application AGRID Installer.

### Régulation proportionnelle 0-10V via DAC

Les sorties DAC **DAC1 à DAC3** fournissent une tension continue 0-10V pour :
- Modulation vitesse ventilateur (0V = arrêt, 10V = pleine vitesse)
- Modulation vanne proportionnelle (0V = position minimale, 10V = position maximale)

**Avantages** :
- Régulation plus précise et progressive
- Moins de cycles marche/arrêt
- Consommation énergétique réduite

## Configuration des sorties

### Principe d'inversion de logique

Chaque sortie relais ou DAC peut avoir sa logique inversée :

| **Configuration** | **Repos** | **Activation** | **Cas d'usage** |
|---|---|---|---|
| **Normal (NO)** | Contacte ouvert | Contacte fermé | Activation commandée |
| **Inversé (NC)** | Contacte fermé | Contacte ouvert | Sécurité défaillance (fail-safe) |

!!!warning "Configuration importante"
    La configuration de chaque sortie doit correspondre aux récepteurs connectés. Une inversion incorrecte peut inverser le comportement du contrôle (par ex. ventilateur qui s'arrête au lieu de démarrer).

## Configurations de câblage

### Groupe 1 : Sans vanne (ventilation simple)

#### Configuration #1 : Ventilateur 3 vitesses (TOR via relais)

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Relais 1 → vitesse haute |
| **RL2** | Ventilateur FM | Relais 2 → vitesse moyenne |
| **RL3** | Ventilateur FL | Relais 3 → vitesse basse |
| **RL4** | Non utilisé | N/A |
| **RL5** | Non utilisé | N/A |
| **DAC1** | Non utilisé | N/A |
| **DAC2** | Non utilisé | N/A |
| **DAC3** | Non utilisé | N/A |

**Cas d'usage** : Ventilation seule sans régulation de température, sélection manuelle vitesse

#### Configuration #2 : Ventilateur proportionnel 0-10V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Non utilisé | N/A |
| **RL2** | Non utilisé | N/A |
| **RL3** | Non utilisé | N/A |
| **RL4** | Non utilisé | N/A |
| **RL5** | Non utilisé | N/A |
| **DAC1** | Non utilisé | N/A |
| **DAC2** | Non utilisé | N/A |
| **DAC3** | Ventilateur Fan | 0-10V proportionnel |

**Cas d'usage** : Ventilation avec modulation vitesse progressive via capteur de température

---

### Groupe 2 : Sans vanne + Résistance électrique

#### Configuration #3 : Ventilateur 3V + Résistance TOR

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL4** | Contacteur HR | Résistance électrique via contacteur externe |
| **RL5** | Non utilisé | N/A |
| **DAC1** | Non utilisé | N/A |
| **DAC2** | Non utilisé | N/A |
| **DAC3** | Non utilisé | N/A |

**Cas d'usage** : Ventilation + appoint chauffage électrique (contacteur obligatoire)

#### Configuration #4 : Ventilateur proportionnel + Résistance TOR

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Non utilisé | N/A |
| **RL2** | Non utilisé | N/A |
| **RL3** | Non utilisé | N/A |
| **RL4** | Contacteur HR | Résistance électrique via contacteur externe |
| **RL5** | Non utilisé | N/A |
| **DAC1** | Non utilisé | N/A |
| **DAC2** | Non utilisé | N/A |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

**Cas d'usage** : Ventilation modulée + chauffage électrique commandé

#### Configuration #5 : Ventilateur 3V + Résistance proportionnelle

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL4** | Non utilisé | N/A |
| **RL5** | Non utilisé | N/A |
| **DAC1** | Résistance HR | Modulation puissance chauffage 0-10V |
| **DAC2** | Non utilisé | N/A |
| **DAC3** | Non utilisé | N/A |

**Cas d'usage** : Ventilation 3V + chauffage électrique modulé proportionnel

#### Configuration #6 : Ventilateur proportionnel + Résistance proportionnelle

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Non utilisé | N/A |
| **RL2** | Non utilisé | N/A |
| **RL3** | Non utilisé | N/A |
| **RL4** | Non utilisé | N/A |
| **RL5** | Non utilisé | N/A |
| **DAC1** | Résistance HR | Modulation puissance chauffage 0-10V |
| **DAC2** | Non utilisé | N/A |
| **DAC3** | Ventilateur Fan | Modulation vitesse ventilateur 0-10V |

**Cas d'usage** : Ventilation et chauffage entièrement proportionnels (régulation optimale)

---

### Groupe 3 : Système 2 tubes (2T) - Une vanne unique

#### Configuration #7 : 2T avec vanne HV sur RL4 (3V Fan)

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL4** | Vanne HV | Vanne chaude TOR |
| **RL5** | Non utilisé | N/A |

**Cas d'usage** : 2 tubes avec vanne chaude commandée, ventilateur 3 vitesses

#### Configuration #8 : 2T avec vanne HV sur RL4 (Fan proportionnel)

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL4** | Vanne HV | Vanne chaude TOR |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

**Cas d'usage** : 2 tubes avec vanne chaude TOR + ventilateur proportionnel

#### Configuration #9 : 2T avec vanne HV sur DAC1 (3V Fan)

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **DAC1** | Vanne HV | Vanne proportionnelle 0-10V |

**Cas d'usage** : 2 tubes avec vanne proportionnelle + ventilateur 3V

#### Configuration #10 : 2T avec vanne HV sur DAC1 (Fan proportionnel)

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **DAC1** | Vanne HV | Vanne proportionnelle 0-10V |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

**Cas d'usage** : 2 tubes complètement proportionnel (vanne + ventilateur)

---

### Groupe 4 : Système 2 tubes + Résistance (2T+HR)

#### Configuration #11 : 2T+HR - Vanne HR TOR, Vanne HV RL4, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL4** | Vanne HV | Vanne chaude TOR |
| **RL5** | Contacteur HR | Résistance chauffage via contacteur |

#### Configuration #12 : 2T+HR - Vanne HR TOR, Vanne HV RL4, Fan proportionnel

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL4** | Vanne HV | Vanne chaude TOR |
| **RL5** | Contacteur HR | Résistance chauffage via contacteur |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

#### Configuration #13 : 2T+HR - Vanne HR proportionnelle DAC1, Vanne HV RL4, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL4** | Vanne HV | Vanne chaude TOR |
| **DAC1** | Résistance HR | Chauffage proportionnel 0-10V |

#### Configuration #14 : 2T+HR - Vanne HR proportionnelle DAC1, Vanne HV RL4, Fan proportionnel

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL4** | Vanne HV | Vanne chaude TOR |
| **DAC1** | Résistance HR | Chauffage proportionnel 0-10V |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

#### Configuration #15 : 2T+HR - Vanne HR TOR, Vanne HV DAC1, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL5** | Contacteur HR | Résistance chauffage via contacteur |
| **DAC1** | Vanne HV | Vanne proportionnelle 0-10V |

#### Configuration #16 : 2T+HR - Vanne HR TOR, Vanne HV DAC1, Fan proportionnel

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL5** | Contacteur HR | Résistance chauffage via contacteur |
| **DAC1** | Vanne HV | Vanne proportionnelle 0-10V |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

#### Configuration #17 : 2T+HR - Vanne HR proportionnelle, Vanne HV proportionnelle, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **DAC1** | Vanne HV | Vanne chaude proportionnelle 0-10V |
| **DAC2** | Résistance HR | Chauffage proportionnel 0-10V |

#### Configuration #18 : 2T+HR - Vanne HR et HV proportionnelles, Fan proportionnel

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **DAC1** | Vanne HV | Vanne chaude proportionnelle 0-10V |
| **DAC2** | Résistance HR | Chauffage proportionnel 0-10V |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

---

### Groupe 5 : Système 4 tubes (4T) - Deux vannes

#### Configuration #19 : 4T - Vannes TOR RL4/RL5, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL4** | Vanne HV | Vanne chaude TOR |
| **RL5** | Vanne CV | Vanne froide TOR |

**Cas d'usage** : 4 tubes tout-ou-rien avec 2 vannes indépendantes

#### Configuration #20 : 4T - Vannes TOR RL4/RL5, Fan proportionnel

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL4** | Vanne HV | Vanne chaude TOR |
| **RL5** | Vanne CV | Vanne froide TOR |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

#### Configuration #21 : 4T - Vannes proportionnelles DAC1/DAC2, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **DAC1** | Vanne HV | Vanne chaude proportionnelle 0-10V |
| **DAC2** | Vanne CV | Vanne froide proportionnelle 0-10V |

#### Configuration #22 : 4T - Vannes proportionnelles DAC1/DAC2, Fan proportionnel

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **DAC1** | Vanne HV | Vanne chaude proportionnelle 0-10V |
| **DAC2** | Vanne CV | Vanne froide proportionnelle 0-10V |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

**Cas d'usage** : 4 tubes entièrement proportionnel (meilleure régulation)

---

### Groupe 6 : Système 4 tubes + Résistance (4T+HR)

#### Configuration #23 : N/S (Non Supporté)
Combinaison non supportée.

#### Configuration #24 : 4T+HR - Vannes TOR, Chauffage TOR, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL4** | Vanne HV | Vanne chaude TOR |
| **RL5** | Vanne CV | Vanne froide TOR |

Résistance gérée par contact sec externe (non supportée via relais libres)

#### Configuration #25 : 4T+HR - Vannes TOR, Chauffage TOR, Fan proportionnel

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL4** | Vanne HV | Vanne chaude TOR |
| **RL5** | Vanne CV | Vanne froide TOR |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

Résistance gérée par contact sec externe

#### Configuration #26 : 4T+HR - Vannes proportionnelles, Chauffage TOR, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL5** | Contacteur HR | Résistance électrique via contacteur |
| **DAC1** | Vanne HV | Vanne proportionnelle 0-10V |
| **DAC2** | Vanne CV | Vanne proportionnelle 0-10V |

#### Configuration #27 : 4T+HR - Vannes proportionnelles, Chauffage TOR, Fan proportionnel

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL5** | Contacteur HR | Résistance électrique via contacteur |
| **DAC1** | Vanne HV | Vanne proportionnelle 0-10V |
| **DAC2** | Vanne CV | Vanne proportionnelle 0-10V |
| **DAC3** | Ventilateur Fan | Modulation vitesse 0-10V |

#### Configuration #28 : 4T+HR - Vannes proportionnelles, Chauffage proportionnel, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **DAC1** | Vanne HV | Vanne proportionnelle 0-10V |
| **DAC2** | Vanne CV | Vanne proportionnelle 0-10V |

Non supporté - insuffisant DAC pour résistance proportionnelle

#### Configuration #29 : 4T+HR - Vannes TOR, Chauffage proportionnel, Fan 3V

| **Élément** | **Connexion** | **Description** |
|---|---|---|
| **RL1** | Ventilateur FH | Vitesse haute |
| **RL2** | Ventilateur FM | Vitesse moyenne |
| **RL3** | Ventilateur FL | Vitesse basse |
| **RL4** | Vanne HV | Vanne chaude TOR |
| **RL5** | Vanne CV | Vanne froide TOR |

Chauffage proportionnel non supporté - manque de DAC libre

#### Configuration #30 : N/S (Non Supporté)
Combinaison non supportée - insuffisant de sorties libres.

---

## Avertissements critiques

!!!danger "⚠ Résistance électrique - Contacteur externe obligatoire"
    Les sorties relais (RL1-RL5) et les sorties DAC (DAC1-DAC3) fournissent des **signaux de commande uniquement**, pas une alimentation de puissance.

    **La résistance électrique NE DOIT JAMAIS être commutée directement par les relais du thermostat.**

    Solution obligatoire : Utiliser un **contacteur externe** approprié qui :
    - Reçoit le signal de commande du thermostat (relais ou DAC)
    - Commute la puissance de la résistance (230V, courants élevés)
    - Offre une isolation galvanique entre commande et puissance
    - Est dimensionné pour les courants et tensions de la résistance

    Exemple : Contacteur 2A minimum avec bobine compatible 5V ou 230V selon la source de signal.

## Entrées capteurs S1 et S2

Les capteurs de température peuvent être connectés en deux modes :

| **Mode** | **Type** | **Description** | **Cas d'usage** |
|---|---|---|---|
| **Analogique** | Thermistance | Sonde résistive, variation 0-100kΩ | Capteur température ambiant, sonde silo |
| **Numérique** | Contact sec | Ouverture/fermeture binaire | Bouton poussoir, détecteur présence (ON/OFF) |

Les entrées S1 et S2 supportent les deux types. La configuration du type (analogique/numérique) se fait via l'application AGRID Installer.

!!!info "Capteurs additionnels"
    Les capteurs externes permettent d'ajouter des points de mesure (température extérieure, humidité, détecteurs présence, etc.) pour une régulation avancée.
