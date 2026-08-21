# Dépannage

Cette page recense les problèmes courants rencontrés avec ClipboxAI sur macOS et leur résolution.

## L'application ne démarre pas ou plante au lancement

1. Assurez-vous que votre version de macOS répond au minimum requis (macOS 14 Sonoma+).
2. Quittez et relancez l'application.
3. Redémarrez votre Mac.
4. ~~Si téléchargé depuis GitHub Releases, essayez la dernière version ou la version notariée.~~
5. Si les problèmes persistent, collectez les journaux (ci-dessous) et ouvrez un ticket.

## L'historique du presse-papiers ne capture pas les copies

Symptômes : les nouvelles copies n'apparaissent pas dans le panneau d'historique.

Liste de contrôle :

1. Assurez-vous que l'application est en cours d'exécution et que son icône de barre de menus est visible.
2. Confirmez que **la surveillance du presse-papiers** est activée dans **Réglages → Confidentialité / Général**.
3. L'application a besoin de la permission macOS appropriée pour lire le presse-papiers en arrière-plan — voir [Permissions](/fr/guide/permissions).
4. Certaines applications (gestionnaires de mots de passe, champs de saisie sécurisés) bloquent intentionnellement l'accès au presse-papiers ; c'est normal.

## Les actions IA cloud ne renvoient pas de résultat

Symptômes : une action IA échoue, bloque ou affiche une erreur de configuration.

Liste de contrôle :

1. Ouvrez **Réglages → IA** et confirmez qu'un fournisseur est sélectionné et qu'une clé est saisie.
2. Vérifiez que la clé est valide pour ce fournisseur et dispose de quota/crédits.
3. Vérifiez votre connexion réseau — l'IA cloud nécessite un accès à Internet.
4. Confirmez que le nom du modèle sélectionné est correct pour le fournisseur.
5. Si la bannière de configuration apparaît encore dans la fenêtre Outil IA, la clé n'est pas enregistrée dans le Keychain ; saisissez-la à nouveau.

## L'installation depuis le Marketplace n'ajoute pas l'action

Symptômes : cliquer sur **Installer** ne fait rien, ou l'application ne s'ouvre pas.

Liste de contrôle :

1. Le lien profond `clipboxai://install?action=<id>` doit être géré par l'application installée — assurez-vous que ClipboxAI est installé et en cours d'exécution.
2. Si votre navigateur bloque le lien profond, copiez-le et ouvrez-le manuellement, ou installez depuis l'onglet **Marketplace** de l'application.
3. Vérifiez que l'ID de l'action est toujours publié dans le marketplace.

## Réinitialiser l'application

Pour réinitialiser les réglages et effacer les données locales :

1. Quittez ClipboxAI.
2. Supprimez le conteneur (cela supprime l'historique et les réglages) :

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
```

3. Rouvrez l'application et reconfigurez-la. Les clés API du Keychain doivent être supprimées séparément dans **Keychain Access** si vous le souhaitez.

## Comment collecter les journaux de débogage

```bash
# Copier les journaux sur le Bureau pour les partager
cp ~/Library/Containers/com.w3cub.clipboard/Data/Library/Logs/Clipboard\ x\ AI/*.log ~/Desktop/ 2>/dev/null
```

Ouvrez ensuite un ticket sur [GitHub](https://github.com/clipboxAI) et joignez les journaux.

## Signaler un problème

Lors de l'ouverture d'un ticket, indiquez :

- La version de macOS (menu Pomme → À propos de ce Mac)
- La version de ClipboxAI (menu de l'application → À propos)
- Les étapes pour reproduire
- Les journaux (voir ci-dessus)

Cela aide les mainteneurs à identifier et corriger le problème plus rapidement.
