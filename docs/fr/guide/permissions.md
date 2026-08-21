# Permissions macOS

ClipboxAI peut demander quelques permissions macOS pour offrir la meilleure expérience. Cette page explique à quoi sert chaque permission et comment la gérer.

## Presse-papiers / Automation

Pour capturer votre presse-papiers en arrière-plan et renvoyer les résultats, ClipboxAI utilise l'accès Automation de macOS.

**À quoi il sert** : lire le presse-papiers actuel lorsque vous copiez, et écrire les résultats en retour lorsque vous exécutez une action.

**Gérer** : **Réglages système → Confidentialité et sécurité → Automation** → activez **ClipboxAI**.

Accordez l'accès lorsque vous y êtes invité lors du premier lancement. Vous pouvez le gérer ou le révoquer à tout moment.

## Accessibilité (facultatif)

Certaines versions utilisent l'Accessibilité pour fournir des raccourcis clavier globaux et activer le panneau d'historique depuis n'importe où.

**À quoi il sert** : ouvrir le panneau d'historique et exécuter des actions via des raccourcis, même lorsque l'application n'a pas le focus.

**Gérer** : **Réglages système → Confidentialité et sécurité → Accessibilité** → activez **ClipboxAI**.

## Notifications (facultatif)

ClipboxAI peut afficher des notifications lorsqu'une action de longue durée se termine ou nécessite votre attention.

**À quoi il sert** : vous alerter lorsqu'une action se termine ou lorsqu'une configuration est requise.

**Gérer** : **Réglages système → Notifications** → **ClipboxAI**.

## Accès au disque complet (facultatif)

Non requis pour une utilisation normale. Nécessaire uniquement si vous souhaitez que l'application lise des éléments depuis des emplacements protégés par le système.

**Gérer** : **Réglages système → Confidentialité et sécurité → Accès au disque complet**.

Cette permission est facultative et n'est nécessaire que dans des scénarios avancés.

## Réinitialiser une permission avec le Terminal

Si une fenêtre de permission a été ignorée ou que l'état est incohérent, vous pouvez réinitialiser les invites de permission macOS à l'aide de `tccutil` :

```bash
# Réinitialiser les invites d'automation/accessibilité pour ClipboxAI
tccutil reset All com.w3cub.clipboard
```

Après l'exécution de `tccutil`, redémarrez l'application et déclenchez à nouveau la fonctionnalité pour être invité de nouveau.

## Dépannage

- Si l'historique du presse-papiers ne capture pas les copies, vérifiez que la permission **Automation** est accordée.
- Si les raccourcis globaux ne fonctionnent pas, vérifiez la permission **Accessibilité**.
- Après toute modification des permissions, quittez et rouvrez toujours ClipboxAI pour que les changements prennent effet.

Pour plus d'aide, consultez le [guide de dépannage](/fr/guide/troubleshooting).
