# Politique de confidentialité

Cette politique décrit les données traitées par le thermostat connecté AGRID AGR25-01, leurs finalités, leur durée de conservation, leurs destinataires, les modalités de suppression, et le mécanisme d'information des utilisateurs en cas de changement affectant la protection ou la confidentialité de ces données (mécanisme UNM, clauses UNM-1 et UNM-2 de l'EN 18031-2).

!!! note "À retenir"
    Le thermostat traite des données techniques et de confort nécessaires à la régulation d'une zone. Certaines données peuvent devenir personnelles lorsqu'elles permettent d'inférer l'occupation d'un local, l'usage d'un équipement ou l'association avec un site identifié.

## Données traitées

Le thermostat ne vise pas à identifier directement les personnes présentes. Toutefois, les données d'occupation, de réservation, de réseau ou de diagnostic peuvent constituer des données personnelles lorsqu'elles sont reliées à un local, à un utilisateur, à un installateur ou à un client identifiable.

| Catégorie | Exemples | Usage principal |
| --- | --- | --- |
| Données de confort et de régulation | Température, humidité, luminosité, consigne, mode HVAC, vitesse ventilateur, état des sorties, horodatages. | Piloter le chauffage, le refroidissement, la ventilation et l'affichage local. |
| Présence et états de zone | Occupancy (état dérivé), détection de mouvement par capteur PIR externe (entrée contact sec sur S1/S2), keycard, fenêtre ouverte/fermée, réservations courantes ou futures si configurées. | Adapter la régulation, réduire la consommation, gérer les scénarios d'occupation. |
| Données réseau et identifiants techniques | Adresse MAC, IP, RSSI, SSID, mot de passe Wi-Fi, broker/BMS, port MQTT, identifiants MQTT, certificats mTLS. | Connecter le thermostat au réseau du site et aux services de supervision autorisés. |
| Configuration installateur | Langue, fuseau horaire, seuils, calibrations, capteurs externes, règles de régulation, codes d'accès settings. | Configurer l'équipement selon le site et maintenir un fonctionnement conforme à l'installation. |
| Journaux techniques | Événements, redémarrages, connexions/déconnexions MQTT, erreurs de commande, état firmware, GitHash/version. | Diagnostic, sécurité, maintenance, analyse d'incident et preuve d'exécution de certaines actions. |

Sauf configuration spécifique du site, le thermostat ne collecte pas d'audio, d'image, de vidéo, de contenu de communication personnelle, ni de géolocalisation précise d'une personne. Le thermostat ne dispose d'aucun capteur intégré de détection de mouvement, d'image ou de son. Lorsqu'un capteur PIR externe est raccordé à une entrée contact sec, seul un état binaire (mouvement détecté / non détecté) est utilisé, sans identification nominative ni traitement biométrique. La donnée de présence reste un état technique de zone, pas une identification nominative.

## Finalités du traitement

- Réguler la température, l'humidité, la ventilation et les sorties HVAC selon la configuration du site.
- Afficher localement l'état de la zone, les consignes et les informations utiles à l'utilisateur ou à l'installateur.
- Connecter l'équipement au réseau Wi-Fi, au BMS/GTB et au broker MQTT lorsque cette connexion est activée.
- Permettre la supervision, le diagnostic, la maintenance, la correction d'incidents et les mises à jour autorisées.
- Protéger l'équipement et les échanges, notamment par authentification, certificats, signature firmware et journaux de sécurité.
- Gérer le transfert de propriété, la révocation des certificats et la remise à zéro usine.

## Bases légales

Les traitements opérés **par AGRID** au titre de fabricant et d'importateur (signature firmware, émission initiale des certificats à l'usine, support produit sur demande) reposent sur :

- l'**obligation légale** de mise sur le marché conforme et de support sécurité (directive 2014/53/UE (RED), directive 2011/65/UE (RoHS), règlement délégué (UE) 2022/30, série de normes EN 18031) ;
- l'**intérêt légitime** d'AGRID à garantir l'intégrité et la sécurité de ses équipements tout au long de leur cycle de vie.

Les traitements opérés **par l'exploitant du site** (régulation, supervision, journalisation, archivage des données reçues par le broker MQTT ou le BMS/GTB) relèvent de bases légales déterminées par lui selon le contexte de déploiement, généralement :

- exécution d'un **contrat** avec ses clients ou occupants ;
- **intérêt légitime** à exploiter, maintenir et optimiser ses équipements et son site ;
- **obligation légale** (efficacité énergétique, sécurité des bâtiments) le cas échéant.

Les traitements facultatifs ou non nécessaires au service (fonctionnalités d'occupation détaillées, statistiques d'usage transmises à un tiers, etc.) doivent être documentés séparément et, si requis, soumis à consentement ou à un autre fondement légal applicable.

## Destinataires

Les données peuvent être accessibles, dans la limite de leurs habilitations, aux catégories suivantes :

- personnel autorisé du responsable de traitement ou de l'exploitant du site ;
- installateurs et mainteneurs autorisés ;
- broker MQTT, BMS/GTB ou infrastructure de supervision configurés par le site ;
- AGRID, fabricant et importateur, dans le cadre exclusif du support produit, de la signature firmware et de l'émission initiale des certificats à l'usine — AGRID ne reçoit aucune donnée d'usage du thermostat en production ;
- autorités compétentes lorsqu'une obligation légale l'impose.

Les données ne sont pas vendues. Toute transmission à un tiers non listé doit être documentée, limitée à une finalité déterminée et portée à la connaissance des utilisateurs concernés.

## Conservation et suppression

| Données | Durée | Suppression |
| --- | --- | --- |
| Données en RAM | Durée de fonctionnement de l'équipement | Écrasement automatique, redémarrage ou factory reset. |
| Configuration locale persistante | Jusqu'à modification, réinstallation, transfert de propriété ou factory reset | Suppression locale par factory reset ou effacement de configuration autorisé. |
| Journaux locaux | Jusqu'à rotation, effacement de logs ou factory reset | Suppression locale par factory reset ; durée maximale à préciser selon la politique du site. |
| Certificats et identifiants MQTT/mTLS locaux | Jusqu'à remplacement, révocation ou factory reset | Suppression locale par factory reset ; révocation à effectuer aussi côté serveur/PKI. |
| Données reçues côté serveur par le broker MQTT, le BMS/GTB ou l'infrastructure de supervision | Durée définie et documentée par l'exploitant du site, conformément à sa propre politique de conservation. Le thermostat fonctionne en autonomie sans serveur ; lorsqu'un serveur AGRID est déployé, il l'est localement sur l'infrastructure du site et les données y restent sous le contrôle physique et logique de l'exploitant. AGRID n'opère aucun serveur centralisé recevant ces données. | Suppression ou anonymisation selon la politique de l'exploitant du site, responsable de traitement. |

**Factory reset.** La remise à zéro usine efface localement les données persistantes, la configuration, les réseaux Wi-Fi, les identifiants MQTT, les certificats TLS/mTLS, les journaux et les clés internes stockées sur l'équipement. Elle ne révoque pas à elle seule un certificat déjà émis côté serveur : la révocation et la suppression de l'association doivent aussi être réalisées sur le broker ou la PKI du propriétaire précédent. Voir la [procédure de transfert de propriété](ownership-transfer-procedure.md).

## Sécurité

Le thermostat intègre des mesures techniques destinées à limiter les accès non autorisés et à protéger l'intégrité du logiciel embarqué : signature des composants firmware, authentification réseau selon la configuration, certificats TLS/mTLS lorsque le mode sécurisé est provisionné, stockage local protégé pour certaines données persistantes, journaux d'événements et mécanisme de remise à zéro usine.

La sécurité effective dépend aussi de la configuration du site : mots de passe Wi-Fi robustes, certificats uniques par équipement, révocation des anciens certificats, limitation des accès au réseau, mises à jour firmware autorisées et contrôle des comptes d'installation. Voir également la [politique de support sécurité](security-support-policy.md).

## Transferts hors Union européenne

Le thermostat ne transmet aucune donnée vers un serveur AGRID centralisé. Aucun transfert hors Union européenne n'est réalisé par AGRID dans le cadre du fonctionnement du produit.

Si l'exploitant du site configure un broker MQTT, un BMS/GTB ou une infrastructure de supervision hébergés hors de l'Union européenne ou de l'Espace économique européen, il lui incombe, en tant que responsable de traitement, d'indiquer le pays concerné, la garantie applicable (clauses contractuelles types, décision d'adéquation, etc.) et les moyens d'en obtenir une copie.

## Droits des personnes

Dans les conditions prévues par la réglementation applicable, les personnes concernées peuvent exercer leurs droits d'accès, de rectification, d'effacement, de limitation, d'opposition et, lorsque le fondement légal le permet, de portabilité.

Les demandes doivent être adressées à : **contact@a-grid.com**. Si le thermostat est exploité par un client ou un gestionnaire de site, AGRID transmet la demande au responsable de traitement compétent. Une réclamation peut également être introduite auprès de la CNIL.

## Information des changements et mécanisme UNM

Conformément aux clauses UNM-1 et UNM-2 de l'EN 18031-2, les utilisateurs doivent être informés des changements qui affectent la protection ou la confidentialité des données personnelles, sauf lorsqu'une autre méthode d'information, indépendante de l'équipement, existe et est effectivement utilisée.

Chaque notification de changement doit au minimum contenir :

- une description claire du changement ;
- une description de son effet sur la protection et la confidentialité des données personnelles.

Les canaux de notification retenus sont : documentation utilisateur mise à jour, note de version, application installateur, message local sur le thermostat lorsque le changement concerne directement l'équipement ou son paramétrage, et information contractuelle ou email lorsque le responsable de traitement dispose déjà d'un canal de communication adapté.

Exemples de changements à notifier : ajout d'une nouvelle catégorie de données collectées, allongement de durée de conservation, nouveau destinataire, activation d'une fonctionnalité d'occupation plus détaillée, changement d'hébergement, modification du mécanisme de suppression ou changement de sécurité pouvant affecter la confidentialité.

## Version et accessibilité

La version publiée de cette politique doit être disponible dans la documentation utilisateur et, lorsque possible, depuis l'application installateur. Toute version publiée doit indiquer sa date d'entrée en vigueur, son numéro de version et le canal de contact pour les questions relatives aux données personnelles.

**Version :** 1.0 — **Entrée en vigueur :** 15 juin 2026 — **Contact :** contact@a-grid.com

## Références de conformité

- [RGPD, article 13 — informations à fournir lorsque des données personnelles sont collectées auprès de la personne concernée (EUR-Lex)](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:02016R0679-20160504)
- [CNIL — droits des personnes et chapitre III du RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3)
- [CNIL — limiter la conservation des données](https://www.cnil.fr/fr/limiter-la-conservation-des-donnees)
