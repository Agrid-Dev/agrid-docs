# Fiche d'écoconception - Règlement 2024/1103

Conformément au **Règlement délégué (UE) 2024/1103** concernant l'établissement de prescriptions d'écoconception pour les contrôles connexes indépendants, nous fournissons ci-dessous les informations relatives à l'écoconception du thermostat AGR25-01.

## Identification du produit

| **Paramètre** | **Valeur** |
|---|---|
| **Produit** | Thermostat pour ventilo-convecteurs |
| **Modèle** | AGR25-01 |
| **Fabricant** | Beijing Breeze Technology Co., Ltd. |
| **Importateur** | AGRID SAS (Paris, France) |
| **Année de fabrication** | 2024 et suivantes |
| **Catégorie** | Contrôle connexe indépendant (ICC) |
| **Classe TE / TW** | Autonome (TE) et Serveur AGRID (TW) |

## Classification réglementaire

Le thermostat AGR25-01 est un **contrôle connexe indépendant** selon le Règlement 2024/1103.

### Types de configuration

Le thermostat est proposé en **deux configurations** correspondant à deux modes de fonctionnement distincts :

| **Configuration** | **Type** | **Dénomination** | **Mode de fonctionnement** |
|---|---|---|---|
| **Configuration 1** | TE (Autonome) | Thermostat AGR25-01 (mode autonome) | Fonctionnement indépendant sans serveur externe |
| **Configuration 2** | TW (Serveur AGRID) | Thermostat AGR25-01 (mode serveur) | Fonctionnement avec serveur cloud AGRID |

Chaque configuration doit être déclarée séparément selon le présent règlement.

## Codes de fonction

Les codes de fonction pour les deux configurations du thermostat AGR25-01 sont les suivants :

### Configuration TE (Autonome)

| **Code** | **Fonction** | **Valeur / Statut** |
|---|---|---|
| **TE-1** | Détection de présence | 1 (Oui, support optionnel via S1/S2) |
| **TE-2** | Capteur de température | 2 (Intégré avec entrées capteurs externes) |
| **TE-3** | Optimisation horaire/temporelle | 3 (Programmation locale possible) |
| **TE-4** | Limitation de vitesse du ventilateur | 0 (Non automatique - manuel/manuel uniquement) |
| **TE-5** | Adaptation au débit de fluide | 5 (Vannes proportionnelles supportées) |
| **TE-6** | Évaporation du liquide de refroidissement | 6 (Non applicable - thermostat aérien) |
| **TE-7** | Réaction aux conditions externes | 0 (Non automatique - configuration locale) |
| **TE-8** | Demandes de service / Notification anomalies | 8 (Alertes écran tactile) |

### Configuration TW (Serveur AGRID)

| **Code** | **Fonction** | **Valeur / Statut** |
|---|---|---|
| **TW-1** | Détection de présence | 1 (Oui, via S1/S2 et serveur) |
| **TW-2** | Capteur de température | 2 (Intégré + serveur) |
| **TW-3** | Optimisation horaire/temporelle | 3 (Programmation serveur avancée) |
| **TW-4** | Limitation de vitesse du ventilateur | 4 (Optimisation serveur) |
| **TW-5** | Adaptation au débit de fluide | 5 (Optimisation proportionnelle) |
| **TW-6** | Évaporation du liquide de refroidissement | 6 (Non applicable) |
| **TW-7** | Réaction aux conditions externes | 7 (Optimisation serveur des conditions ext.) |
| **TW-8** | Demandes de service / Notification anomalies | 8 (Alertes écran + app mobile AGRID) |

!!!info "Codes de fonction"
    Les codes de fonction permettent d'évaluer le potentiel d'économie d'énergie de chaque configuration. La configuration TW (serveur) offre un potentiel d'optimisation plus important grâce aux fonctions de serveur.

## Consommation énergétique

### Configuration TE (Autonome)

| **État** | **Désignation** | **Valeur** | **Condition** |
|---|---|---|---|
| **Po** | Consommation en arrêt | < 0,23 W | Thermostat OFF (relais/DAC au repos) |
| **Psm** | Consommation en veille | < 0,23 W | Écran éteint, WiFi en veille |
| **Pna** | Consommation en fonctionnement normal | MAX 2 W | Thermostat en régulation active |
| **Pnm** | Non applicable pour ICC | N/A | N/A |

### Configuration TW (Serveur AGRID)

| **État** | **Désignation** | **Valeur** | **Condition** |
|---|---|---|---|
| **Po** | Consommation en arrêt | < 0,23 W | Thermostat OFF |
| **Psm** | Consommation en veille | < 0,23 W | Écran éteint, WiFi en veille |
| **Pna** | Consommation en fonctionnement normal | MAX 2 W | Régulation active (identique TE) |
| **Pnsm** | Consommation veille réseau (en connexion serveur) | 1,18 W | WiFi actif, en attente commandes serveur |

!!!warning "Consommations mesurées"
    Les consommations listées sont les **maximales déclarées**. Les consommations réelles dépendent de :
    - La fréquence d'activation des sorties relais/DAC
    - L'état du WiFi (activé/veille)
    - Les configurations de régulation programmées

## Efficacité énergétique estimée

### Configuration TE (Autonome)

Pour une installation typique en mode autonome :

| **Paramètre** | **Estimation** |
|---|---|
| **Consommation annuelle du thermostat** | ~17 kWh/an (fonctionnement 8h/jour) |
| **Économie potentielle vs. contrôle manuel** | 15-25 % réduction consommation climatisation |
| **Facteur d'efficacité** | Dépend de la configuration de régulation |

### Configuration TW (Serveur AGRID)

Avec optimisation serveur et détection de présence :

| **Paramètre** | **Estimation** |
|---|---|
| **Consommation annuelle du thermostat** | ~50 kWh/an (inclus veille serveur) |
| **Économie potentielle vs. configuration autonome** | 20-35 % réduction supplémentaire via serveur |
| **Potentiel total d'économie** | 35-55 % comparé à contrôle manuel |

!!!tip "Optimisation énergétique"
    La configuration TW avec serveur offre un meilleur potentiel d'économie grâce à :
    - Adaptation intelligente des consignes
    - Détection présence multizone coordonnée
    - Optimisation des plages chauffage/refroidissement
    - Alertes de maintenance préventive

## Critères de conformité aux dispositions réglementaires

Le thermostat AGR25-01 satisfait aux critères suivants du Règlement 2024/1103 :

### Critères obligatoires

| **Critère** | **Exigence** | **Conformité AGR25-01** |
|---|---|---|
| **Arrêt rapide** | Passage à l'état off < 15 minutes inactivité | ✓ Oui (5 min standby) |
| **Absence de consomm. réseau passif** | Pas de consommation réseau non configurée | ✓ Oui (Wi-Fi activable uniquement) |
| **Détection de défaillance** | Alerte anomalie capteur/réseau | ✓ Oui (notifications écran + app) |
| **Régulation de température** | Maintenance température ±2°C | ✓ Oui (précision dépend capteur) |
| **Interfaces utilisateur claires** | Affichage température et mode compréhensible | ✓ Oui (écran tactile 4 pouces) |

### Critères optionnels (bonus points)

| **Critère optionnel** | **Implémentation AGR25-01** | **Points bonus** |
|---|---|---|
| **Détection présence** | Entrées S1/S2 support capteur présence | ✓ Oui |
| **Capteur température externe** | Entrées S1/S2 support thermistance/sonde | ✓ Oui |
| **Optimisation temporelle** | Programmation horaires/scénarios | ✓ Oui |
| **Vannes proportionnelles** | Support DAC 0-10V vannes modulées | ✓ Oui |
| **Contrôle serveur distant** | App AGRID + serveur cloud | ✓ Oui (config TW) |
| **Notification anomalies** | Alertes app mobile + email | ✓ Oui (config TW) |

## Informations d'installation et d'utilisation

### Recommandations pour installation efficace

1. **Localisation** : Installer à hauteur 1,2-1,5m, loin de sources de chaleur (radiateurs, soleil direct)
2. **Capteurs** : Utiliser capteur de température externe S1 pour meilleure précision régulation
3. **Détection présence** : Activer entrée S2 avec détecteur de présence pour optimization occupancy-based
4. **Mode de régulation** : Préférer régulation proportionnelle (DAC) vs. TOR pour meilleure efficacité
5. **Programmation** : Programmer consignes différentes jour/nuit pour économies importantes

### Recommandations pour utilisation efficace

| **Recommandation** | **Impact énergétique** |
|---|---|
| **Réduire consigne chauffage de 1°C** | Économie ~7% sur chauffage |
| **Réduire consigne refroidissement de 1°C** | Économie ~7% sur refroidissement |
| **Programmer arrêt automatique absence** | Économie ~15-20% |
| **Utiliser mode ventilation seule** | Économie ~30-40% vs. refroidissement |
| **Activer mode Auto pour ventilateur** | Économie ~10-15% |

## Documentation complémentaire

La présente fiche d'écoconception synthétise les informations clés du Règlement 2024/1103. Pour plus de détails :

- **Rapport technique complet** : Disponible sur demande auprès de l'importateur
- **Données d'essai** : Normes de mesure EN 60730-1 et EN 60730-2-9
- **Certificats de conformité** : Certifications tierces disponibles
- **Comparaison concurrentielle** : Benchmark efficacité énergétique

## Notes de mise à jour

Cette fiche d'écoconception est basée sur :

- **Spécification produit** : Version AGR25-01 2024-2025
- **Firmware** : Version 1.0.0 et suivantes
- **Règlement applicable** : UE 2024/1103 (en vigueur 2025)

Toute modification majeure du produit ou du firmware entraînera une mise à jour de cette déclaration.

!!!info "Évolution du produit"
    AGRID s'engage à améliorer continuellement l'efficacité énergétique du AGR25-01 par des mises à jour firmware (OTA) visant à optimiser les performances de régulation et réduire la consommation.

---

**Responsable de la documentation** : AGRID SAS, Direction Technique

**Date de dernière mise à jour** : [Date à compléter]

**Prochaine révision prévue** : [Date + 12 mois à compléter]
