# Politique de support securite

Cette page decrit la politique de support securite applicable au thermostat AGRID AGR25-01.

## Duree du support securite

AGRID fournit des mises a jour de securite pour le thermostat AGR25-01 pendant 5 ans a compter de la date de premiere mise sur le marche de cette generation de produit (date de reference : [JJ/MM/AAAA]).

La date d'echeance du support (EOL) est publiee sur a-grid.com et dans la documentation produit.

Les revisions hardware ulterieures (AGR25-02, etc.) disposent de leur propre periode de support de 5 ans a compter de leur mise sur le marche.

## Veille vulnerabilites

AGRID effectue une veille mensuelle sur :

- La base NVD ([nvd.nist.gov](https://nvd.nist.gov)).
- La base europeenne EUVD (ENISA).
- Les bulletins de securite des fournisseurs concernes.

Cette veille couvre les composants logiciels et materiels integres au thermostat AGR25-01, notamment :

- MCU AT32F403.
- Pile WiFi et TLS.
- Bibliotheques tierces (lwIP, mbedTLS, FreeRTOS).
- Element securise ATECC608B.

Chaque campagne de veille fait l'objet d'une entree datee dans le registre de veille vulnerabilites conserve par le responsable cybersecurite.

## Delais d'intervention

Les delais ci-dessous courent a compter de la confirmation de l'applicabilite de la vulnerabilite au produit.
Une vulnerabilite peut etre classee "non applicable" si le composant affecte n'est pas utilise dans le contexte du thermostat ou si des mesures de mitigation intrinseques neutralisent le vecteur d'attaque ; cette analyse est documentee dans le registre de veille.

| Criticite (CVSS v3.1) | Correctif developpe | Deploiement OTA |
| --- | --- | --- |
| Critique (9.0-10.0) | 30 jours | 45 jours |
| Elevee (7.0-8.9) | 60 jours | 90 jours |
| Moyenne (4.0-6.9) | Prochaine release planifiee | Prochaine release planifiee |
| Faible (< 4.0) | Evaluation au cas par cas | Integre aux mises a jour fonctionnelles |

## Procedure de fin de vie (EOL)

A l'issue de la periode de support :

- Notification prealable : la date d'EOL est annoncee au moins 6 mois a l'avance sur a-grid.com et dans la documentation produit mise a jour.
- Dernier bulletin de securite : un bulletin final est publie a la date d'EOL, traitant les vulnerabilites connues a cette date, accompagne d'une derniere mise a jour corrective si necessaire.
- Arret des mises a jour de securite : aucune nouvelle mise a jour de securite n'est publiee apres la date d'EOL. Le thermostat continue a fonctionner normalement, y compris les fonctions de pilotage a distance. L'utilisateur est informe que l'exposition a d'eventuelles vulnerabilites decouvertes apres l'EOL releve alors de sa responsabilite.
- Conservation documentaire : le dossier technique cybersecurite est conserve pendant au moins 10 ans apres l'EOL, conformement aux exigences du CRA.
