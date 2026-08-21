# Installation

ClipboxAI est disponible pour macOS.

## Options de téléchargement

### Mac App Store (recommandé)

- **Téléchargement** : recherchez **ClipboxAI** sur le Mac App Store, ou ouvrez le lien depuis la [page d'accueil](/fr/).
- La version du Mac App Store propose des mises à jour automatiques et une intégration macOS transparente.

> ~~Si un lien vers le Mac App Store n'est pas encore disponible, utilisez la version GitHub Releases ci-dessous.~~

### ~~GitHub Releases (alternative)~~ (pas disponible pour l'instant)

~~Vous pouvez télécharger la dernière version directement depuis [GitHub Releases](https://github.com/clipboxAI). Notez que cette version ne reçoit pas de mises à jour automatiques.~~

## Étapes d'installation

### Mac App Store

1. Ouvrez le lien de téléchargement ci-dessus ou recherchez « ClipboxAI » dans le Mac App Store.
2. Cliquez sur **Obtenir** pour télécharger l'application.
3. L'application s'installe automatiquement — lancez-la depuis **Applications** ou **Launchpad**.

### ~~GitHub Releases~~

1. ~~Téléchargez le dernier fichier `.dmg` depuis la page Releases.~~
2. ~~Double-cliquez sur le fichier `.dmg` téléchargé pour l'ouvrir.~~
3. ~~Glissez l'icône `ClipboxAI.app` dans votre dossier **Applications**.~~
4. ~~Éjectez l'image montée et ouvrez l'application depuis **Applications**.~~

Si macOS empêche l'ouverture de l'application (Gatekeeper), ouvrez **Réglages système → Confidentialité et sécurité** et cliquez sur **Ouvrir quand même**, ou faites un clic droit sur l'application et choisissez **Ouvrir**.

## Premier lancement

Au premier lancement, ClipboxAI vous guide à travers une courte configuration :

- **Activer l'élément de la barre de menus** pour que l'application réside dans votre barre de menus.
- **Accorder les permissions** dont elle a besoin pour surveiller le presse-papiers en arrière-plan (voir [Permissions](/fr/guide/permissions)).
- *(Facultatif)* **Connecter un fournisseur d'IA cloud** dans **Réglages → IA** si vous souhaitez des actions IA.

Accordez les permissions lorsque vous y êtes invité. Vous pouvez les modifier à tout moment dans **Réglages système → Confidentialité et sécurité**.

## Mises à jour

- **Version Mac App Store** : mise à jour automatiquement par l'App Store.
- ~~**Version GitHub Releases** : téléchargez la version plus récente et remplacez l'application dans `Applications`.~~

## Désinstallation

Pour supprimer ClipboxAI :

1. Quittez l'application.
2. Glissez `ClipboxAI.app` de `Applications` vers la Corbeille.
3. (Facultatif) Supprimez les données locales :

```bash
rm -rf ~/Library/Containers/com.w3cub.clipboard
rm -rf ~/Library/Application\ Scripts/com.w3cub.clipboard
```

## Configuration requise

- **macOS** : Sonoma (14) ou version ultérieure
- **Processeur** : Apple Silicon (série M) ou Intel (64 bits)
- **Mémoire** : 4 Go minimum, 8 Go recommandés
- **Stockage** : ~50 Mo

## Dépannage

Si vous rencontrez des problèmes lors de l'installation :

- **macOS bloque l'application** : ouvrez **Réglages système → Confidentialité et sécurité** et cliquez sur **Ouvrir quand même**.
- **Avertissement de notarisation** : téléchargez une version signée/notariée depuis le Mac App Store.

Pour plus d'aide, consultez le [guide de dépannage](/fr/guide/troubleshooting).
