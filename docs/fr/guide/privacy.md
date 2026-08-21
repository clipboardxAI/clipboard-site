# Politique de confidentialité

ClipboxAI est un gestionnaire de presse-papiers intelligent pour macOS. Votre confidentialité est notre priorité.

## Conception locale d'abord

- Votre historique de presse-papiers est stocké entièrement sur votre Mac.
- Les actions locales intégrées (extraire les liens, compter les statistiques, réduire les lignes vides, et les suggestions ML sur appareil) s'exécutent entièrement hors ligne.
- Aucun compte ni inscription n'est requis pour utiliser l'application principale.
- Aucune connexion Internet n'est requise pour la gestion locale du presse-papiers et les fonctionnalités sur appareil.

## IA cloud (facultatif)

ClipboxAI peut utiliser optionnellement des fournisseurs d'IA cloud (tels que DeepSeek, MiniMax, GLM, Kimi, Mistral, ou un serveur Ollama local) pour alimenter des actions avancées comme le résumé, la traduction et les invites personnalisées.

- Lorsqu'elle est activée, le texte sélectionné ou le contenu du presse-papiers est envoyé **directement au fournisseur que vous configurez**, en utilisant **votre propre clé API**.
- Votre clé API est stockée uniquement dans le Keychain de votre Mac et n'est jamais téléversée vers nous.
- Vous pouvez désactiver l'IA cloud à tout moment et continuer à utiliser les fonctionnalités locales.
- L'historique du presse-papiers n'est **pas** envoyé vers le cloud automatiquement ; les requêtes cloud ne sont déclenchées que lorsque vous exécutez une action cloud.

## Ce que nous ne collectons pas

- Nous ne collectons pas le contenu de votre presse-papiers, vos documents ou vos fichiers.
- Nous ne suivons pas votre activité, votre comportement de navigation ou vos habitudes d'utilisation.
- Nous n'exploitons aucun serveur qui reçoit vos données de presse-papiers.
- Nous n'incluons aucune analytique, publicité ou SDK de suivi tiers.
- Nous n'avons aucun système de télémétrie.

## Quelles données sont stockées localement

Les données suivantes sont stockées uniquement sur votre appareil :

- **Historique du presse-papiers** : éléments récents pour un accès rapide (conservés sur votre Mac).
- **Réglages de l'application** : thème, préférence de langue, actions activées, configuration du fournisseur.
- **Clés API** : stockées en toute sécurité dans le Keychain local (uniquement si vous configurez un fournisseur cloud).
- **Actions personnalisées** : invites et configuration que vous créez.
- **Journaux** : journaux de débogage pour le dépannage (peuvent être supprimés à tout moment).

## Permissions utilisées par l'application

- **Accessibilité / Accès au disque complet** : requis pour lire le presse-papiers système et fournir des raccourcis globaux.
- **Notifications** : facultatif, pour les alertes de fin sur les longues requêtes cloud.

Vous pouvez gérer ces permissions dans **Réglages système → Confidentialité et sécurité** à tout moment.

## Achats intégrés / Licence

Les achats de licence (le cas échéant) sont traités par Apple via le Mac App Store. ClipboxAI ne reçoit ni ne stocke vos informations de paiement. Les reçus de licence sont stockés localement pour vérifier la propriété.

## Services tiers

ClipboxAI n'inclut en soi aucune analytique, publicité ou service de suivi tiers. Lorsque vous activez un fournisseur d'IA cloud, vos requêtes sont traitées par ce fournisseur selon sa propre politique de confidentialité.

## Demandes relatives à la confidentialité

Étant donné que ClipboxAI stocke toutes les données localement sur votre appareil, nous ne détenons aucune donnée personnelle sur nos serveurs. Si vous avez des questions sur la confidentialité, contactez-nous.

## Contact

Pour toute question sur la confidentialité, ouvrez un ticket sur [GitHub Issues](https://github.com/clipboxAI/clipboard-site/issues) ou envoyez-nous un e-mail à clipboxai@w3cub.com.
