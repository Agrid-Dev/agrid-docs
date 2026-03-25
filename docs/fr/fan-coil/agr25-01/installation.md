# Installation

!!! warning "Avertissement"
    Lire cette notice avant installation. Cet appareil est de Classe II (double isolation). Il ne dispose pas de borne de terre de protection.

## Sécurité

!!! danger "Avertissements de sécurité"
    - L'installation doit être réalisée par un électricien qualifié conformément aux réglementations locales.
    - Couper l'alimentation avant toute intervention sur le câblage. Vérifier l'absence de tension.
    - Le thermostat étant raccordé de manière permanente, un dispositif de sectionnement et de protection contre les surintensités, à coupure omnipolaire (par exemple un disjoncteur bipolaire), doit être incorporé dans l'installation fixe conformément aux règles d'installation en vigueur. Ce dispositif doit couper simultanément tous les pôles actifs (phase et neutre), avec une distance d'ouverture des contacts d'au moins 3 mm, et doit rester accessible après l'installation du thermostat.
    - L'installation doit être réalisée sur un circuit protégé conformément aux normes d'installation en vigueur (HD 60364 / NF C 15-100 ou équivalent).
    - Intérieur sec uniquement (IP20). Ne pas installer dans des lieux humides ou en extérieur.
    - Ne pas ouvrir le boîtier. Aucune pièce réparable par l'utilisateur.

!!! danger "Résistance électrique d'appoint"
    Les relais du thermostat envoient uniquement un signal de commande. Ils ne doivent pas faire transiter la puissance d'une résistance électrique d'appoint. La résistance doit être pilotée via un contacteur (relais de puissance) externe adapté à la charge. Le non-respect de cette instruction peut entraîner un risque d'incendie.

## Montage

Installer le thermostat au mur, à une hauteur maximale de 2 m par rapport au sol. La hauteur d'installation recommandée se situe à hauteur d'homme, à un emplacement représentatif de la température ambiante de la pièce. Éviter :

- La proximité de sources de chaleur (radiateur, canalisation d'eau chaude)
- Le rayonnement solaire direct
- Les courants d'air (portes, fenêtres, bouches de ventilation)
- Les zones mortes (coins, derrière les portes)

**Étape 1 :** Desserrer la vis inférieure. Séparer le panneau avant de la platine arrière.

**Étape 2 :** Fixer la platine arrière au mur.

**Étape 3 :** Procéder au raccordement électrique (voir Bornier de raccordement et Configurations de câblage).

**Étape 4 :** Reconnecter le panneau avant et serrer la vis.

!!! info "Ventilation"
    Ne pas obstruer les fentes de ventilation du boîtier (nécessaires aux capteurs).

## Bornier de raccordement

| Borne | Nom | Description |
|---|---|---|
| **N** | Neutre | Conducteur neutre |
| **L** | Phase | Conducteur de phase |
| **RL1** | Relais 1 | Sortie TOR 230V~ — Ventilateur vitesse haute (FH) |
| **RL2** | Relais 2 | Sortie TOR 230V~ — Ventilateur vitesse moyenne (FM) |
| **RL3** | Relais 3 | Sortie TOR 230V~ — Ventilateur vitesse basse (FL) — ou résistance selon config. |
| **RL4** | Relais 4 | Sortie TOR 230V~ — Vanne chaude (HV) |
| **RL5** | Relais 5 | Sortie TOR 230V~ — Vanne froide (CV) ou résistance selon config. |
| **G** | Réf. 0V | Référence 0V pour les sorties DAC et les entrées S1/S2 |
| **DAC1** | Sortie 0-10V | Signal proportionnel — Vanne chaude (HV) |
| **DAC2** | Sortie 0-10V | Signal proportionnel — Vanne froide (CV) ou résistance selon config. |
| **DAC3** | Sortie 0-10V | Signal proportionnel — Ventilateur ou résistance selon config. |
| **B** | Réservé | Réservé — ne pas connecter |
| **A** | Réservé | Réservé — ne pas connecter |
| **S1** | Entrée 1 | Capteur externe |
| **S2** | Entrée 2 | Capteur externe |

**Notes :**

- Les sorties RL1-RL5 sont utilisées uniquement pour la régulation TOR (tout ou rien). Les sorties DAC1-DAC3 sont utilisées pour la régulation proportionnelle 0-10V.
- Le bornier est séparé en deux zones isolées galvaniquement : partie 230V~ (N, L, RL1-RL5) et partie basse tension (G, DAC1-DAC3, B, A, S1, S2).
- L'affectation exacte de chaque sortie dépend de la configuration. Se référer aux [Configurations de câblage](wiring.md).
- Systèmes 2 tubes : la vanne unique est branchée sur la sortie HV (RL4 ou DAC1 selon la configuration).
- Systèmes sans résistance : ne rien brancher sur la sortie HR.

**Conventions :** FH = ventilateur vitesse haute, FM = vitesse moyenne, FL = vitesse basse, HV = vanne chaude, CV = vanne froide, HR = résistance électrique d'appoint.

## Spécifications de câblage

| Paramètre | Valeur |
|---|---|
| **Section de fil — partie 230V (N, L, RL1-RL5)** | 1,5 mm² |
| **Section de fil — partie BT (G, DAC, S1, S2)** | 0,5 à 0,75 mm² |
| **Longueur max. câbles DAC 0-10V** | 20 m (câble blindé recommandé au-delà de 10 m) |
| **Longueur max. câbles capteurs S1/S2** | 20 m (câble blindé recommandé au-delà de 10 m) |
| **Type de fil** | Fil rigide ou fil souple avec embout serti |

## Entretien

- Ne pas ouvrir le boîtier. Aucune pièce réparable. Aucune matière consommable à remplacer.
- Nettoyer avec un chiffon sec ou légèrement humide. Pas de solvants, abrasifs ou jets d'eau.
- Maintenir les fentes de ventilation dégagées.
- L'appareil ne libère aucune substance toxique en fonctionnement normal.

En cas de dysfonctionnement, contacter AGRID ou un installateur qualifié.

## Dépannage

| Symptôme | Cause possible | Action |
|---|---|---|
| L'écran ne s'allume pas | Pas d'alimentation | Vérifier le disjoncteur et la tension aux bornes N/L (220-240V~) |
| L'écran s'allume puis s'éteint en boucle | Redémarrage watchdog répété | Couper l'alimentation 30 s puis réalimenter. Si le problème persiste, contacter AGRID. |
| Température affichée incohérente | Capteur de température perturbé | Vérifier que les fentes de ventilation ne sont pas obstruées. Vérifier l'absence de source de chaleur à proximité. |
| Le ventilateur ou la vanne ne réagit pas | Mauvaise configuration ou câblage incorrect | Vérifier la configuration sélectionnée. Vérifier le câblage. Vérifier le fonctionnement de l'équipement piloté. |
| Aucune sortie ne fonctionne | Configuration non supportée (N/S) ou conflit de sorties | Sélectionner une configuration supportée. Les sorties sont désactivées par sécurité. |
| Pas de connexion WiFi | Réseau WiFi indisponible ou identifiants incorrects | Vérifier la disponibilité du réseau WiFi 2,4 GHz. Reconfigurer via l'app AGRID Installer. Le thermostat continue en mode autonome. |
| Détection de présence non fonctionnelle | Radar obstrué ou désactivé | Vérifier qu'aucun objet n'est placé devant le thermostat. Vérifier le paramétrage de la fonction présence. |
| L'écran tactile ne répond pas | Écran en veille ou gel logiciel | Toucher l'écran pour le réveiller. Si pas de réponse, couper l'alimentation 30 s puis réalimenter. |
