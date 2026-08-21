# Guide d'utilisation

## Historique du presse-papiers

ClipboxAI s'exécute depuis votre **barre de menus**. À chaque fois que vous copiez quelque chose, il est ajouté à votre historique.

- Cliquez sur l'icône de la barre de menus pour ouvrir le panneau d'historique.
- Survolez un élément et appuyez sur le raccourci de l'action, ou cliquez pour le recopier dans le presse-papiers.
- Utilisez le champ de recherche pour trouver un élément par son texte.

## La fenêtre Outil IA

La fenêtre **Outil IA** est l'endroit où s'exécutent les actions. Elle utilise une disposition en deux volets :

- **Gauche** — une liste d'outils, regroupés en :
  - **IA intégrée** — résumé, traduction et autres actions IA.
  - **Local intégré** — outils hors ligne (extraire les liens, compter les statistiques, réduire les lignes vides).
  - **Installés** — actions que vous avez ajoutées depuis le Marketplace. Vous pouvez glisser pour les **réorganiser**.
- **Droite** — deux panneaux : l'élément **original** d'un côté et le **résultat** de l'autre.

Les outils IA affichent un badge « cloud » ; les outils locaux affichent un badge « appareil », ainsi vous savez toujours si une action utilise le réseau.

## Exécuter une action

1. Sélectionnez un outil dans la liste de gauche (ou acceptez une suggestion intelligente).
2. L'élément en cours apparaît dans le panneau **original**.
3. Le résultat est produit dans le panneau **résultat**.

### Exécution automatique

Activez **Exécuter automatiquement à la sortie** dans le pied de la fenêtre. Lorsqu'elle est activée, l'outil sélectionné s'exécute automatiquement dès que vous copiez quelque chose — aucun clic manuel n'est nécessaire. Les outils locaux n'écrasent jamais votre presse-papiers, l'exécution automatique est donc sûre.

## Outils locaux intégrés

Ceux-ci s'exécutent entièrement hors ligne sur votre Mac :

- **Extraire les liens** — renvoie toutes les URL trouvées dans le texte.
- **Compter les statistiques** — nombre de mots / caractères / lignes / phrases.
- **Réduire les lignes vides** — supprime les lignes vides du texte collé.

## Configuration de l'IA cloud

Pour utiliser les actions IA, connectez un fournisseur dans **Réglages → IA** :

1. Choisissez un fournisseur — **DeepSeek**, **MiniMax**, **Zhipu GLM**, **Kimi (Moonshot)**, **Mistral**, **Ollama** (local), ou un autre service compatible OpenAI.
2. Collez votre **clé API**. Elle est stockée dans le **Keychain**, jamais écrite en texte clair sur le disque.
3. Choisissez un modèle.
4. L'IA cloud est désactivée par défaut. Lorsqu'elle est activée, votre élément n'est envoyé qu'au fournisseur que vous avez configuré.

Si aucune clé n'est définie, la bannière de configuration vous le rappelle dans la fenêtre Outil IA.

## Marketplace

1. Ouvrez le **Marketplace** depuis la fenêtre Outil IA (ou la page [Marketplace](/fr/marketplace/) du site).
2. Cliquez sur **Installer** sur une action. Cela ouvre l'application via le lien profond `clipboxai://install?action=<id>` et ajoute l'action à votre liste **Installés**.

## Raccourcis clavier

| Raccourci | Action |
|----------|--------|
| `Cmd+Shift+V` | Ouvrir l'historique du presse-papiers |
| `Cmd+,` | Ouvrir les réglages |
| `Cmd+W` | Fermer la fenêtre |
| `Cmd+Q` | Quitter l'application |

> Les raccourcis exacts peuvent varier selon les versions ; consultez **Réglages → Raccourcis** dans l'application.

## Réglages

Ouvrez **ClipboxAI → Réglages** (ou `Cmd+,`) :

- **Général** : langue, lancement à la connexion, thème d'apparence.
- **IA** : fournisseur cloud, modèle et clé API (Keychain).
- **Actions** : bascule d'exécution automatique, applications exclues et ordre des outils.
- **Confidentialité** : option d'IA cloud, applications exclues et contrôles de l'historique.
- **Marketplace** : parcourir et gérer les actions installées.
