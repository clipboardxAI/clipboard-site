# FAQ

**Q : Qu'est-ce que ClipboardxAI ?**

R : ClipboardxAI est un gestionnaire de presse-papiers intelligent pour macOS. Il conserve un historique consultable de tout ce que vous copiez et vous permet d'exécuter des actions dessus — résumer, traduire, mettre en forme le texte, ou l'envoyer à un modèle d'IA cloud.

**Q : Quelles versions de macOS sont prises en charge ?**

R : macOS 14 Sonoma ou version ultérieure, optimisé pour Apple Silicon (série M) avec prise en charge Intel.

**Q : Comment l'installer ?**

R : Téléchargez depuis le [Mac App Store](/fr/) (recommandé) ou récupérez la dernière version depuis ~~[GitHub Releases](https://github.com/clipboardxAI)~~. Voir le [Guide d'installation](/fr/guide/installation).

**Q : ClipboardxAI est-il gratuit ?**

R : ClipboardxAI est une application payante sur le Mac App Store. Après l'achat, tous les outils locaux intégrés sont inclus et aucun compte n'est requis. Les actions IA cloud utilisent la clé API *de votre propre* fournisseur, vous ne payez donc directement que le fournisseur d'IA — il n'y a aucun niveau payant supplémentaire dans l'application.

**Q : Quels fournisseurs d'IA sont pris en charge ?**

R : Tout fournisseur compatible OpenAI : DeepSeek, MiniMax, Zhipu GLM, Kimi (Moonshot), Mistral, et l'Ollama local — ainsi qu'OpenAI, Anthropic et Gemini. Votre clé est stockée dans le Keychain.

**Q : Fonctionne-t-il hors ligne ?**

R : Oui. L'historique du presse-papiers et les outils locaux intégrés (extraire les liens, compter les statistiques, réduire les lignes vides, et plus encore) s'exécutent entièrement sur votre Mac sans connexion Internet.

**Q : Mes données de presse-papiers sont-elles privées ?**

R : Votre historique reste sur votre appareil. L'IA cloud est optionnelle et n'envoie le contenu qu'au fournisseur que vous configurez, à l'aide d'une clé de votre Keychain. Nous ne recevons ni ne stockons vos éléments, et il n'y a aucune télémétrie. Voir la [Politique de confidentialité](/fr/guide/privacy).

**Q : Comment ajouter davantage d'actions ?**

R : Parcourez le [Marketplace](/fr/marketplace/) et cliquez sur **Installer** sur une action. Celle-ci ouvre l'application via un lien profond et apparaît dans votre liste **Installés**.

**Q : Comment mettre à jour l'application ?**

R : La version du Mac App Store se met à jour automatiquement. ~~Pour les versions GitHub, téléchargez la dernière version et remplacez l'application dans `Applications`.~~

**Q : Comment signaler des bugs ou demander des fonctionnalités ?**

R : Ouvrez un ticket sur le [dépôt GitHub](https://github.com/clipboardxAI). Incluez votre version de macOS, la version de l'application et les étapes pour reproduire.

**Q : Où sont stockées mes données ?**

R : Dans le conteneur sandboxé :

```
~/Library/Containers/com.w3cub.clipboard/Data/Library/Application Support/com.w3cub.clipboard/
```

Les clés API résident dans le Keychain système, pas dans ce dossier.
