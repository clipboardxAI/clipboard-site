# Personnalisation

Faites fonctionner ClipboxAI à votre façon. Ce guide couvre les réglages que vous pouvez ajuster.

## Général

Ouvrez **ClipboxAI → Réglages** (ou appuyez sur `Cmd+,`).

- **Langue** : anglais, 简体中文, 繁體中文, 日本語.
- **Lancement à la connexion** : démarrer l'application automatiquement à la connexion.
- **Apparence** : Clair, Foncé ou Système (suit macOS).

## Configuration de l'IA

Configurez l'IA cloud dans **Réglages → IA** :

| Réglage | Options | Description |
|---------|---------|-------------|
| **Fournisseur** | DeepSeek, MiniMax, GLM, Kimi, Mistral, Ollama, OpenAI, Anthropic, Gemini | Le service compatible OpenAI à appeler |
| **Clé API** | votre clé | Stockée dans le **Keychain**, jamais écrite en texte clair sur le disque |
| **Modèle** | par fournisseur | Le modèle utilisé pour les actions IA |
| **IA cloud activée** | Activé / Désactivé | Interrupteur principal pour l'envoi d'éléments vers le cloud |

L'IA cloud est **désactivée par défaut**. Lorsqu'elle est activée, votre élément n'est envoyé qu'au fournisseur que vous avez configuré.

## Actions

Personnalisez le comportement des outils :

- **Exécuter automatiquement à la sortie** : lorsqu'il est activé, l'outil sélectionné s'exécute automatiquement dès que vous copiez.
- **Applications exclues** : les applications listées ici sont ignorées par la surveillance du presse-papiers et l'exécution automatique (ex. gestionnaires de mots de passe).
- **Ordre des outils** : dans la fenêtre Outil IA, glissez les outils installés pour les réorganiser ; votre ordre est mémorisé.

## Confidentialité

Ouvrez **Réglages → Confidentialité** :

- **Option d'IA cloud** : l'interrupteur principal pour l'envoi de données à un fournisseur.
- **Applications exclues** : empêcher certaines applications d'être capturées.
- **Contrôles de l'historique** : gérer la durée de conservation des éléments sur votre appareil.

Tout l'historique reste local. Nous ne téléversons pas les éléments ni ne faisons d'analytique.

## Marketplace

Gérez les actions installées :

- **Parcourir** : ouvrez le **Marketplace** depuis la fenêtre Outil IA ou le site.
- **Installer** : cliquez sur **Installer** sur une action pour l'ajouter via un lien profond.
- **Supprimer** : désinstallez une action de votre liste **Installés**.

## Barre de menus

- **Afficher dans la barre de menus** : activer/désactiver l'icône de menu.
- **Quitter à la fermeture** : choisissez si l'application reste en cours d'exécution en arrière-plan.

## Astuces

- Gardez l'IA cloud désactivée jusqu'à ce que vous en ayez besoin — les outils locaux couvrent la plupart du nettoyage quotidien.
- Ajoutez les gestionnaires de mots de passe et les applications de saisie sécurisée aux **Applications exclues** afin que les secrets ne soient jamais capturés.
- Associez l'exécution automatique à un outil local pour un nettoyage de texte mains libres à chaque copie.
