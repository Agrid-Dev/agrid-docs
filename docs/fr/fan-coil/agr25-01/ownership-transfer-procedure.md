# Transfert de propriété et remise à zéro usine

Lorsqu'un thermostat est remplacé, mis au rebut ou transféré à un nouveau propriétaire, il doit être dissocié de l'ancien propriétaire avant une nouvelle installation. Utiliser l'action locale **Factory reset** depuis l'écran de settings du thermostat, puis re-provisionner l'équipement avec l'application installateur.

## Ce que supprime la remise à zéro usine

La remise à zéro usine efface les données locales qui peuvent identifier l'ancien site ou conserver un accès à ses systèmes :

- Réseaux Wi-Fi et mots de passe enregistrés.
- Configuration locale, notamment les paramètres réseau, BMS et MQTT.
- Logs d'événements et de diagnostic stockés sur le thermostat.
- Matériel MQTT/mTLS stocké sur l'équipement, dont le certificat client et la clé privée.
- Clé AES interne de chiffrement flash utilisée pour les données persistantes protégées.

Les identifiants temporaires du Soft-AP utilisés par l'application installateur sont limités à la session. Ils sont effacés de la RAM lorsque la session Soft-AP est arrêtée ou arrive à expiration.

## Procédure de transfert

1. Sur le thermostat installé, ouvrir l'écran local de settings et lancer **Factory reset**. Un accès physique au thermostat est requis.
2. Attendre la fin de la remise à zéro et le redémarrage du thermostat. Ne pas transférer l'équipement avant la fin confirmée du reset.
3. Dans le broker ou la PKI de l'ancien propriétaire, révoquer l'ancien certificat client mTLS et supprimer l'association entre ce thermostat et l'ancien propriétaire.
4. Démarrer une nouvelle session de provisionnement avec l'application installateur.
5. Configurer le nouveau réseau Wi-Fi, l'adresse du broker et les paramètres MQTT du nouveau propriétaire.
6. Provisionner de nouveaux identifiants mTLS. Générer une nouvelle clé et un CSR sur le thermostat puis le faire signer pour le nouveau propriétaire, ou téléverser un nouveau certificat client, une nouvelle clé privée et la chaîne CA.
7. Recharger la configuration TLS, redémarrer le thermostat, puis vérifier qu'il se connecte uniquement au broker du nouveau propriétaire.

Le transfert de propriété est complet seulement lorsque l'ancien certificat est révoqué côté serveur et que le thermostat fonctionne avec de nouveaux identifiants.

## Notes installateur

Le chemin de remise à zéro du firmware s'appuie sur les mêmes opérations d'effacement que les outils de maintenance autorisés : effacement des données persistantes, des Wi-Fi mémorisés et des logs, suppression des fichiers de certificats MQTT locaux sous `0:/mqtt/`, effacement de la clé flash interne, puis redémarrage. Le certificat mTLS doit aussi être révoqué côté broker ou PKI, car une suppression locale ne peut pas invalider un certificat déjà émis.
