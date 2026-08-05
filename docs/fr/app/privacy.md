# Politique de confidentialité — Application mobile

Cette politique décrit les données traitées par l'application mobile **Agrid Installation** (iOS et Android), destinée aux installateurs pour la mise en service des thermostats AGRID.

Elle complète la [politique de confidentialité du thermostat AGR25-01](../fan-coil/agr25-01/privacy-policy.md), qui porte sur l'équipement lui-même.

!!! note "À retenir"
    L'application fonctionne principalement en local sur le téléphone de l'installateur. Les données de chantier (sites, zones, configurations, photos, notes audio) restent sur l'appareil, sauf en cas d'envoi volontaire vers un équipement du site ou de transmission technique à un prestataire de diagnostic d'erreurs.

## Éditeur et responsable de traitement

**AGRID SAS**  
33 rue du Faubourg Saint-Antoine, 75011 Paris, France  
Contact : **contact@a-grid.com**

AGRID est responsable du traitement des données personnelles liées au fonctionnement de l'application (compte éventuel, journalisation d'erreurs, support). Les données de chantier saisies pour un client ou un site relèvent, le cas échéant, du responsable de traitement du site concerné ; AGRID n'y a pas accès en production.

## Données traitées

| Catégorie | Exemples | Stockage / transmission |
| --- | --- | --- |
| Identifiants techniques de l'appareil | Identifiants système nécessaires au fonctionnement, version de l'application, modèle d'appareil, système d'exploitation. | Locaux ; également transmis à Sentry en cas d'erreur (voir ci-dessous). |
| Données de chantier saisies par l'installateur | Noms de sites et de zones, configurations Wi-Fi et MQTT du site, codes d'accès écran, certificats mTLS importés, variables de configuration thermostat. | Stockage local sur l'appareil (AsyncStorage / SQLite). Transmises au thermostat lors du provisionnement, pas à un serveur AGRID centralisé. |
| Médias de documentation | Photos de zone, notes texte, commentaires audio. | Fichiers et métadonnées stockés localement sur l'appareil. Non envoyés à AGRID. |
| Données lues ou écrites sur le thermostat | État de configuration, version firmware, journaux de diagnostic, certificats. | Échange direct téléphone ↔ thermostat (Soft AP / réseau local / MQTT du site). |
| Journaux d'erreurs et de diagnostic | Traces d'incident, breadcrumbs techniques, captures d'écran d'erreur éventuelles, métadonnées d'appareil. | Transmis à Sentry (prestataire d'AGRID) pour le diagnostic et la correction de bugs. |

L'application **ne collecte pas** :

- de données de géolocalisation précises à des fins de suivi (l'accès à la localisation sert uniquement à scanner et se connecter aux réseaux Wi-Fi des thermostats, exigence des systèmes iOS/Android) ;
- de contacts, de calendrier ou de contenu personnel hors de l'usage documenté ci-dessus ;
- de publicité ciblée ni de profilage marketing.

## Permissions système

| Permission | Usage |
| --- | --- |
| Caméra | Scanner le QR code du thermostat ; prendre des photos de documentation de zone. |
| Galerie / photos | Ajouter des photos de documentation aux zones. |
| Microphone | Enregistrer des commentaires audio pendant l'installation. |
| Localisation (lors de l'utilisation) | Autoriser le scan et la connexion aux réseaux Wi-Fi Soft AP des thermostats. Aucune carte de suivi n'est constituée. |
| Réseau local / Wi-Fi | Communiquer avec le thermostat via son point d'accès et le réseau du site. |

Ces permissions peuvent être refusées ; certaines fonctions de l'application deviennent alors indisponibles.

## Finalités du traitement

- Permettre la mise en service, la configuration et le diagnostic des thermostats AGRID.
- Conserver localement l'historique de chantier utile à l'installateur (sites, zones, médias).
- Assurer la sécurité des échanges (provisionnement de certificats, connexion MQTT/TLS).
- Diagnostiquer et corriger les dysfonctionnements de l'application (Sentry).
- Répondre aux demandes de support produit.

## Bases légales

- **Exécution du contrat** / mesures précontractuelles avec l'installateur, le partenaire ou le client pour lequel la mise en service est réalisée.
- **Intérêt légitime** d'AGRID à assurer la sécurité, la stabilité et le support de l'application (journalisation d'erreurs, prévention d'abus).
- **Obligation légale** le cas échéant (réponse aux autorités, conservation limitée liée à un litige).

## Destinataires

- AGRID (équipes produit, support et cybersécurité), dans la limite du nécessaire.
- Prestataire technique **Sentry** (Functional Software, Inc.), pour la collecte et l'analyse des journaux d'erreurs.
- Autorités compétentes lorsqu'une obligation légale l'impose.

Les données de chantier ne sont pas vendues. Elles ne sont pas transmises à des partenaires publicitaires.

## Conservation et suppression

| Données | Durée | Suppression |
| --- | --- | --- |
| Sites, zones, configurations, médias locaux | Jusqu'à suppression par l'utilisateur ou désinstallation de l'application | Suppression manuelle dans l'app, ou effacement des données de l'application / désinstallation. |
| Journaux d'erreurs (Sentry) | Durée limitée au diagnostic et à la correction, selon la politique de rétention configurée chez le prestataire | Expiration automatique côté Sentry ; demande d'effacement possible via contact@a-grid.com. |

La désinstallation de l'application efface les données stockées localement sur l'appareil. Elle ne révoque pas à elle seule les certificats déjà provisionnés sur un thermostat : voir la [procédure de transfert de propriété](../fan-coil/agr25-01/ownership-transfer-procedure.md).

## Transferts hors Union européenne

Les journaux d'erreurs peuvent être traités par Sentry sur des infrastructures situées aux **États-Unis**. Ce transfert repose sur les garanties appropriées mises en place par le prestataire (notamment clauses contractuelles types / Data Processing Addendum).

Hors ce canal de diagnostic, l'application n'envoie pas les données de chantier vers un serveur AGRID centralisé. Si l'installateur configure un broker MQTT ou une infrastructure de supervision hors UE/EEE pour le site, ce choix et les garanties associées relèvent du responsable de traitement du site.

## Sécurité

Mesures notamment appliquées :

- échanges locaux avec le thermostat via Soft AP et, en production, MQTT over TLS / mTLS lorsque provisionné ;
- exclusion volontaire des secrets (mots de passe Wi-Fi, PIN, clés privées, contenu QR complet) des journaux et breadcrumbs Sentry ;
- stockage local des données de chantier sur l'appareil de l'installateur.

L'installateur reste responsable de la protection physique de son téléphone, du verrouillage de l'appareil et de la non-diffusion des certificats et mots de passe de site.

## Droits des personnes

Dans les conditions prévues par le RGPD, vous pouvez exercer vos droits d'accès, de rectification, d'effacement, de limitation, d'opposition et, le cas échéant, de portabilité.

Les demandes sont à adresser à : **contact@a-grid.com**.  
Une réclamation peut être introduite auprès de la [CNIL](https://www.cnil.fr).

## Modifications

AGRID peut mettre à jour cette politique. La version en vigueur est toujours celle publiée à l'adresse `https://docs.a-grid.com/app/privacy/`. En cas de changement substantiel affectant la protection des données, les utilisateurs en sont informés par mise à jour de cette page et, lorsque pertinent, via les notes de version de l'application.

**Version :** 1.0 — **Entrée en vigueur :** 5 août 2026 — **Contact :** contact@a-grid.com
