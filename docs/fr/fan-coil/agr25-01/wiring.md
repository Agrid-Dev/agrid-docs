# Configurations de câblage

Les tableaux ci-dessous indiquent l'affectation exacte des sorties pour chaque configuration.

**Types de régulation :**

- **TOR** (tout ou rien) : via relais. Cela inclut le mode 3 vitesses du ventilateur (3 relais TOR, un par vitesse).
- **0-10V** (proportionnel) : via sortie DAC.

## 1. Sans vanne

Ventilo-convecteur sans vanne de régulation.

| N° | Configuration | Status | Affectation des sorties |
|---|---|---|---|
| 1 | Fan 3 vitesses | ✓ OK | RL1=FH, RL2=FM, RL3=FL |
| 2 | Fan 0-10V | ✓ OK | DAC3=Fan |

## 2. Sans vanne + 2 fils (résistance)

Ventilo-convecteur sans vanne, avec résistance électrique chauffante.

| N° | Configuration | Status | Affectation des sorties |
|---|---|---|---|
| 3 | Fan 3V / Rés. TOR | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL5=HR |
| 4 | Fan 3V / Rés. 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC3=HR |
| 5 | Fan 0-10V / Rés. TOR | ✓ OK | DAC3=Fan, RL5=HR |
| 6 | Fan 0-10V / Rés. 0-10V | ✓ OK | DAC3=Fan, DAC2=HR |

## 3. 2 tubes (2T)

Ventilo-convecteur avec 1 vanne (2T mixte, 2T chaud seul ou 2T froid seul). La vanne unique est toujours branchée sur HV : RL4 pour le TOR, DAC1 pour le 0-10V.

| N° | Configuration | Status | Affectation des sorties |
|---|---|---|---|
| 7 | Fan 3V / Vanne TOR | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL4=HV |
| 8 | Fan 3V / Vanne 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC1=HV |
| 9 | Fan 0-10V / Vanne TOR | ✓ OK | DAC3=Fan, RL4=HV |
| 10 | Fan 0-10V / Vanne 0-10V | ✓ OK | DAC1=HV, DAC3=Fan |

## 4. 2 tubes + 2 fils (résistance)

Ventilo-convecteur 2T avec résistance électrique chauffante.

| N° | Configuration | Status | Affectation des sorties |
|---|---|---|---|
| 11 | Fan 3V / Vanne TOR / Rés. TOR | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL4=HV, RL5=HR |
| 12 | Fan 3V / Vanne TOR / Rés. 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL4=HV, DAC3=HR |
| 13 | Fan 3V / Vanne 0-10V / Rés. TOR | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC1=HV, RL5=HR |
| 14 | Fan 3V / Vanne 0-10V / Rés. 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC1=HV, DAC3=HR |
| 15 | Fan 0-10V / Vanne TOR / Rés. TOR | ✓ OK | DAC3=Fan, RL4=HV, RL5=HR |
| 16 | Fan 0-10V / Vanne TOR / Rés. 0-10V | ✓ OK | DAC3=Fan, RL4=HV, DAC2=HR |
| 17 | Fan 0-10V / Vanne 0-10V / Rés. TOR | ✓ OK | DAC1=HV, DAC3=Fan, RL5=HR |
| 18 | Fan 0-10V / Vanne 0-10V / Rés. 0-10V | ✓ OK | DAC1=HV, DAC3=Fan, DAC2=HR |

## 5. 4 tubes (4T)

Ventilo-convecteur avec 2 vannes indépendantes (chaud + froid).

| N° | Configuration | Status | Affectation des sorties |
|---|---|---|---|
| 19 | Fan 3V / Vannes TOR | ✓ OK | RL1=FH, RL2=FM, RL3=FL, RL4=HV, RL5=CV |
| 20 | Fan 3V / Vannes 0-10V | ✓ OK | RL1=FH, RL2=FM, RL3=FL, DAC1=HV, DAC2=CV |
| 21 | Fan 0-10V / Vannes TOR | ✓ OK | DAC3=Fan, RL4=HV, RL5=CV |
| 22 | Fan 0-10V / Vannes 0-10V | ✓ OK | DAC1=HV, DAC2=CV, DAC3=Fan |

## 6. 4 tubes + 2 fils (résistance)

Ventilo-convecteur 4T avec résistance électrique chauffante.

| N° | Configuration | Status | Affectation des sorties |
|---|---|---|---|
| 23 | Fan 3V / Vannes TOR / Rés. TOR | ✗ N/S | 5 relais occupés, aucun libre pour HR |
| 24 | Fan 3V / Vannes TOR / Rés. 0-10V | ✓ OK | RL1-3=Fan, RL4=HV, RL5=CV, DAC3=HR |
| 25 | Fan 3V / Vannes 0-10V / Rés. TOR | ✓ OK | RL1-3=Fan, DAC1=HV, DAC2=CV, RL5=HR |
| 26 | Fan 3V / Vannes 0-10V / Rés. 0-10V | ✓ OK | RL1-3=Fan, DAC1=HV, DAC2=CV, DAC3=HR |
| 27 | Fan 0-10V / Vannes TOR / Rés. TOR | ✓ OK | DAC3=Fan, RL4=HV, RL5=CV, RL3=HR |
| 28 | Fan 0-10V / Vannes TOR / Rés. 0-10V | ✓ OK | DAC3=Fan, RL4=HV, RL5=CV, DAC2=HR |
| 29 | Fan 0-10V / Vannes 0-10V / Rés. TOR | ✓ OK | DAC1=HV, DAC2=CV, DAC3=Fan, RL5=HR |
| 30 | Fan 0-10V / Vannes 0-10V / Rés. 0-10V | ✗ N/S | 3 DAC occupés, aucun libre pour HR |

!!! info "N/S = Configuration non supportée"
    Si cette configuration est sélectionnée, les sorties restent désactivées par sécurité.

!!! danger "Résistance électrique d'appoint"
    Quelle que soit la configuration, la sortie HR ne doit jamais commuter directement une résistance de puissance. Utiliser un contacteur de puissance externe (voir [Sécurité](installation.md#securite)).

Chaque sortie supporte une logique inversable (NO / NC) configurable individuellement.

## Capteurs externes (S1, S2)

Les entrées S1 et S2 acceptent deux types de capteurs, à configurer depuis l'écran ou le serveur AGRID :

- **Capteur analogique** (thermistance) : mesure de température déportée (soufflage, extérieur, etc.).
- **Capteur tout-ou-rien** (contact sec) : détecteur de fenêtre ouverte, badge de présence, détecteur PIR, etc.

Les capteurs nécessitant une alimentation externe doivent disposer de leur propre alimentation avec une isolation galvanique adaptée.
