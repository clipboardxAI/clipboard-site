---
title: Partenariat Écosystème
description: Comment les applications macOS tierces se branchent sur le Marketplace d'actions de Clipboard x AI via des liens profonds sortants.
layout: doc
---

# Partenariat Écosystème

Clipboard x AI est un hub de presse-papiers. Mais les tâches lourdes — compression de fichiers, optimisation d'images, travail sur PDF — sont mieux réalisées par des applications sœurs spécialisées. Le **Marketplace d'actions** propose déjà une catégorie *logiciels tiers* où les actions délèguent directement aux applications déjà installées par vos utilisateurs ([NueZip](https://github.com/w3cub/nuezip), [Nicasa](https://github.com/w3cub/nicasa), …).

Cette page explique comment fonctionne l'intégration et comment **votre** application peut la rejoindre.

## Comment ça marche (délégation sortante)

Une action d'écosystème n'est qu'une entrée de marketplace avec un descripteur `execution` à la place d'une invite :

```json
{
  "id": "nuezip-compress-zip",
  "name": "Compress to ZIP",
  "category": "ecosystem",
  "author": "NueZip",
  "appIcon": "icons/nuezip.png",
  "execution": {
    "kind": "externalApp",
    "scheme": "nuezip",
    "urlTemplate": "nuezip://quickCompress?files={{files}}&extra=zip"
  }
}
```

Lorsque l'utilisateur clique sur **Installer**, Clipboard x AI enregistre l'action localement. Lorsqu'il la déclenche sur un élément du presse-papiers, l'application remplit le modèle et ouvre l'application cible via `NSWorkspace.open(_:)` :

- `{{files}}` — chemin(s) absolu(s) du fichier de l'élément de presse-papiers actuel
  (séparés par des retours à la ligne pour plusieurs fichiers).
- `{{text}}` — le contenu en texte brut.
- `{{returnURL}}` — une URL de retour `clipboardxai://callback?…` optionnelle pour
  des allers-retours de style x-callback-url (utilisée une fois l'application sœur implémentée).

Si l'application cible **n'est pas installée**, l'action est masquée du panneau
jusqu'à ce que l'utilisateur l'installe — aucun bouton cassé.

## Contrat de schéma d'URL pour les applications sœurs

Pour être une cible, votre application macOS n'a besoin que de :

1. Enregistrer un schéma d'URL dans `Info.plist` (`CFBundleURLTypes`).
2. Gérer l'URL entrante — lire `files` / `text` depuis la requête et agir dessus.
3. (Facultatif) Appeler la `returnURL` une fois terminé, afin que Clipboard x AI puisse afficher un
   toast « terminé dans &lt;App&gt; ».

C'est tout. Aucune API privée, aucun code partagé — juste un lien profond. Les extensions
Finder NueZip et Nicasa sont des implémentations de référence dont vous pouvez vous inspirer.

## Rejoindre l'écosystème

Nous gardons le catalogue dans un dépôt public afin que chacun puisse contribuer une action :

- 📦 **Soumettre une action** (ou demander l'ajout de votre application) via
  [clipboardxAI/marketplace · Issues](https://github.com/clipboardxAI/marketplace/issues)
- 🔀 Ou ouvrez une pull request contre
  [`clipboardxai-marketplace`](https://github.com/clipboardxAI/marketplace)
  en ajoutant le JSON de votre action.

### Recommandations

- Utilisez un `author` et un `appIcon` clairs (un PNG carré, ~256×256, transparence acceptée).
- Gardez `urlTemplate` minimal et documentez tout paramètre de requête personnalisé.
- Testez l'aller-retour avec votre application réellement installée avant publication.
- Respectez la vie privée de l'utilisateur — n'agissez que sur les fichiers qu'il délègue explicitement.

## Pourquoi s'associer ?

- **Coût d'intégration nul** — un seul lien profond, aucun SDK.
- **Distribution** — les actions de votre application apparaissent dans le Marketplace Clipboard x AI
  pour chaque utilisateur.
- **Contexte** — les actions se déclenchent depuis le presse-papiers, le Finder, ou là où
  l'utilisateur travaille déjà.

[→ Ouvrir un ticket d'intégration](https://github.com/clipboardxAI/marketplace/issues)
